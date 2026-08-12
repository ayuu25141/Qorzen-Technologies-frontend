"use client";

import React, {
  useMemo,
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";

const FALLBACK =
  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="220"><rect width="100%" height="100%" fill="%23e2e8f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%234a5568" font-size="18">Image</text></svg>';

/* ---------------------------------
   PROJECT DATA
---------------------------------- */

const PROJECTS = [
  {
    id: 1,
    src: "https://i.postimg.cc/gkR5fcSn/1.jpg",
    name: "Nova Commerce",
  },
  {
    id: 2,
    src: "https://i.postimg.cc/CLDtWMPd/2.jpg",
    name: "UrbanBites",
  },
  {
    id: 3,
    src: "https://i.postimg.cc/KvLVdcqj/3.jpg",
    name: "Finora",
  },
  {
    id: 4,
    src: "https://i.postimg.cc/SN85wQTM/4.jpg",
    name: "TravelVista",
  },
  {
    id: 5,
    src: "https://i.postimg.cc/L6f7r4CJ/5.jpg",
    name: "Medicare Plus",
  },
  {
    id: 6,
    src: "https://i.postimg.cc/L8gXdPK2/10.jpg",
    name: "QorZen Business",
  },
  {
    id: 7,
    src: "https://i.postimg.cc/SK0KmKqP/11.jpg",
    name: "EventSphere",
  },
  {
    id: 8,
    src: "https://i.postimg.cc/Vk06ytQ1/9.jpg",
    name: "PropertyHub",
  },
];

/* ---------------------------------
   CONFIG
---------------------------------- */

const CARD_W = 300;
const CARD_H = 300;

const RADIUS = 450;

const TILT_SENSITIVITY = 10;

const DRAG_SENSITIVITY = 0.5;

const INERTIA_FRICTION = 0.95;

const AUTOSPIN_SPEED = 0.08;

const IDLE_TIME = 2000;

/* ---------------------------------
   CARD
---------------------------------- */

const Card = React.memo(({
  project,
  transform,
  cardW,
  cardH
}) => (
  <div
    className="absolute"
    style={{
      width: cardW,
      height: cardH,
      transform,
      transformStyle: "preserve-3d",
      willChange: "transform",

      // IMPORTANT
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
    }}
  >
    {/* Image */}
    <div
      className="
        w-full
        h-full
        overflow-hidden
        rounded-2xl
        bg-white
        border
        border-gray-200
        shadow-lg
        transition-transform
        duration-300
        hover:scale-105
        hover:shadow-2xl
      "
    >
      <img
        src={project.src}
        alt={project.name}
        width={cardW}
        height={cardH}
        className="w-full h-full object-cover select-none"
        loading="lazy"
        draggable="false"
        onError={(e) => {
          e.currentTarget.src = FALLBACK;
        }}
      />
    </div>

    {/* Project info BELOW card */}
    <div className="mt-4 text-center">
      <h3 className="text-lg font-bold tracking-tight text-gray-900">
        {project.name}
      </h3>

      <p className="mt-1 text-sm font-medium text-gray-500">
        Web Development
      </p>
    </div>
  </div>
));


Card.displayName = "Card";

/* ---------------------------------
   MAIN COMPONENT
---------------------------------- */

export default function ProjectCarousel() {
  const containerRef = useRef(null);

  const rotationRef = useRef(0);

  const velocityRef = useRef(0);

  const draggingRef = useRef(false);

  const lastXRef = useRef(0);

  const lastMoveTimeRef = useRef(0);

  const lastInteractionRef = useRef(Date.now());

  const animationRef = useRef(null);

  const [rotation, setRotation] = useState(0);

  const [tilt, setTilt] = useState({
    x: 0,
    y: 0,
  });

  /* ---------------------------------
     RESPONSIVE CARD SIZE
  ---------------------------------- */

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cardWidth = isMobile ? 220 : CARD_W;

  const cardHeight = isMobile ? 300 : CARD_H;

  const radius = isMobile ? 300 : RADIUS;

  /* ---------------------------------
     CARD TRANSFORMS
  ---------------------------------- */

  const cardTransforms = useMemo(() => {
    const angleStep = 360 / PROJECTS.length;

    return PROJECTS.map((_, index) => {
      const angle = index * angleStep + rotation;

      return `rotateY(${angle}deg) translateZ(${radius}px)`;
    });
  }, [rotation, radius]);

  /* ---------------------------------
     UPDATE ROTATION
  ---------------------------------- */

  const updateRotation = useCallback((value) => {
    rotationRef.current = value;

    setRotation(value);
  }, []);

  /* ---------------------------------
     MOUSE DOWN
  ---------------------------------- */

  const handlePointerDown = useCallback((e) => {
    draggingRef.current = true;

    lastXRef.current = e.clientX;

    lastMoveTimeRef.current = performance.now();

    velocityRef.current = 0;

    lastInteractionRef.current = Date.now();

    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  }, []);

  /* ---------------------------------
     POINTER MOVE
  ---------------------------------- */

  const handlePointerMove = useCallback(
    (e) => {
      if (!draggingRef.current) return;

      const currentX = e.clientX;

      const deltaX = currentX - lastXRef.current;

      const currentTime = performance.now();

      const deltaTime =
        currentTime - lastMoveTimeRef.current;

      lastXRef.current = currentX;

      lastMoveTimeRef.current = currentTime;

      const movement =
        deltaX * DRAG_SENSITIVITY;

      updateRotation(
        rotationRef.current + movement
      );

      if (deltaTime > 0) {
        velocityRef.current =
          movement / deltaTime;
      }

      lastInteractionRef.current = Date.now();
    },
    [updateRotation]
  );

  /* ---------------------------------
     POINTER UP
  ---------------------------------- */

  const handlePointerUp = useCallback(() => {
    draggingRef.current = false;

    lastInteractionRef.current = Date.now();
  }, []);

  /* ---------------------------------
     MOUSE MOVE TILT
  ---------------------------------- */

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;

    const rect =
      containerRef.current.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width;

    const y =
      (e.clientY - rect.top) / rect.height;

    const rotateX =
      (0.5 - y) * TILT_SENSITIVITY;

    const rotateY =
      (x - 0.5) * TILT_SENSITIVITY;

    setTilt({
      x: rotateX,
      y: rotateY,
    });
  }, []);

  /* ---------------------------------
     MOUSE LEAVE
  ---------------------------------- */

  const handleMouseLeave = useCallback(() => {
    setTilt({
      x: 0,
      y: 0,
    });

    if (draggingRef.current) {
      draggingRef.current = false;
    }

    lastInteractionRef.current = Date.now();
  }, []);

  /* ---------------------------------
     AUTO ROTATION + INERTIA
  ---------------------------------- */

  useEffect(() => {
    const animate = () => {
      const now = Date.now();

      /*
       * Inertia after dragging
       */

      if (!draggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.01) {
          updateRotation(
            rotationRef.current +
              velocityRef.current
          );

          velocityRef.current *= INERTIA_FRICTION;
        }

        /*
         * Auto spin after idle
         */

        const idleTime =
          now - lastInteractionRef.current;

        if (
          idleTime > IDLE_TIME &&
          Math.abs(velocityRef.current) < 0.01
        ) {
          updateRotation(
            rotationRef.current +
              AUTOSPIN_SPEED
          );
        }
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, [updateRotation]);

  /* ---------------------------------
     RENDER
  ---------------------------------- */

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-20
      "
    >
      {/* ---------------------------------
          SECTION HEADER
      ---------------------------------- */}

      <div className="relative z-10 mx-auto  max-w-3xl px-6 text-center">
        <p
          className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
           bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent
          "
        >
          Our Projects
        </p>

        <h2
          className="
            text-4xl
            font-extrabold
            tracking-tight
            text-gray-950
            md:text-5xl
          "
        >
          Ideas turned into
          <span className="bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent">
            {" "}
            digital experiences.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-base
            leading-7
            text-gray-500
            md:text-lg
          "
        >
          Explore some of the digital experiences
          and solutions crafted with modern
          technology and thoughtful design.
        </p>
      </div>

      {/* ---------------------------------
          CAROUSEL
      ---------------------------------- */}

      <div
        ref={containerRef}
        className="
          relative
          mx-auto
          flex
          h-[520px]
          w-full
          items-center
          justify-center
          touch-none
          select-none
          md:h-[650px]
        "
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ---------------------------------
            3D SCENE
        ---------------------------------- */}

        <div
          className="
            relative
            flex
            items-center
            justify-center
          "
          style={{
            width: cardWidth,
            height: cardHeight,

            transformStyle: "preserve-3d",

            transform: `
              perspective(1200px)
              rotateX(${tilt.x}deg)
              rotateY(${tilt.y}deg)
            `,

            transition:
              draggingRef.current
                ? "none"
                : "transform 0.2s ease-out",
          }}
        >
          {/* ---------------------------------
              CARDS
          ---------------------------------- */}

          {PROJECTS.map((project, index) => (
            <Card
              key={project.id}
              project={project}
              transform={cardTransforms[index]}
              cardW={cardWidth}
              cardH={cardHeight}
            />
          ))}
        </div>

        {/* ---------------------------------
            LEFT FADE
        ---------------------------------- */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-20
            bg-gradient-to-r
            from-white
            to-transparent
          "
        />

        {/* ---------------------------------
            RIGHT FADE
        ---------------------------------- */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full
            w-20
            bg-gradient-to-l
            from-white
            to-transparent
          "
        />
      </div>

      {/* ---------------------------------
          BOTTOM HINT
      ---------------------------------- */}

      <div className="relative z-10 pt-30 text-center">
        <p className="text-xl font-medium text-gray-400">
          Drag to explore projects
        </p>
      </div>
    </section>
  );
}