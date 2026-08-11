import React, { useMemo, useState ,useEffect} from "react";
import {useSearchParams} from 'react-router-dom'

import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Layers3,
  Search,
  ShieldCheck,
  Users,
  Wifi,
  Bot
} from "lucide-react";
import { coursesdata } from "./Allcourseavailable";
// apne project ke according path change kar lena


const CourseSection = () => {


const [searchParams] = useSearchParams();

const categoryFromURL = searchParams.get("category");

const [activeFilter, setActiveFilter] = useState("All");
const [search, setSearch] = useState("");

useEffect(() => {
  if (!categoryFromURL) return;

  const categoryMap = {
    "ai-tool": "Ai Tool",
    "technical": "Technical",
    "non-technical": "Non-Technical",
    "networking": "Networking",
    "training": "Corporate Training",
  };

  const filterName = categoryMap[categoryFromURL];

  if (filterName) {
    setActiveFilter(filterName);
  }

  setTimeout(() => {
    const section = document.getElementById("coursesectiontabs");

    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 100);
}, [categoryFromURL]);
  // ==========================================
  // FILTER TABS
  // ==========================================

  const filters = [
    {
      name: "All",
      icon: Layers3,
    },
    {
      name: "Technical",
      icon: Code2,
    },
    {
      name: "Non-Technical",
      icon: BriefcaseBusiness,
    },
    {
      name: "Corporate Training",
      icon: Users,
    },
    {
      name: "Networking",
      icon: Wifi,
    },
        {
      name: "Ai Tool",
      icon: Bot,
    },
  ];


  // ==========================================
  // FILTER COURSES
  // ==========================================

  const filteredCourses = useMemo(() => {
    let result = coursesdata;

    // Filter
    if (activeFilter !== "All") {
      result = result.filter((course) => {
        if (activeFilter === "Networking") {
          return course.category === "networking";
        }

        if (activeFilter === "Corporate Training") {
          return course.category=== "corporate Training";
        }

        if (activeFilter === "Technical") {
          return course.category === "Technical";
        }

        if (activeFilter === "Non-Technical") {
          return course.category=== "Non-Technical";
        }
        
        if (activeFilter === "Ai Tool") {
          return course.category=== "Ai Tool";
        }

        return true;
      });
    }


    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((course) =>
        `${course.name} ${course.category} ${course.type}`
          .toLowerCase()
          .includes(query)
      );
    }

    return result;
  }, [activeFilter, search]);


  return (
    <section
   
      className="relative overflow-hidden bg-white py-24"
    >

      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[500px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/[0.06]
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)]
            bg-[size:80px_80px]
            opacity-50
            [mask-image:linear-gradient(to_bottom,black,transparent_80%)]
          "
        />

      </div>


      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">


        {/* ==========================================
            SECTION HEADING
        ========================================== */}

        <div className="mx-auto max-w-3xl text-center">

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-100
              bg-blue-50
              px-4
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.18em]
              text-blue-600
            "
          >

            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

            Explore Our Learning

          </div>


          <h2
            className="
              text-4xl
              font-extrabold
              tracking-[-0.035em]
              text-gray-950
              sm:text-5xl
            "
          >
            Learn the skills that{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-600
                via-sky-500
                to-cyan-500
                bg-clip-text
                text-transparent
              "
            >
              move you forward.
            </span>
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Explore our technology courses and professional training
            programs designed around practical, industry-relevant learning.
          </p>

        </div>


        {/* ==========================================
            FILTER + SEARCH
        ========================================== */}

        <div
        id="coursesectiontabs"
          className="
            mt-12
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          {/* FILTER TABS */}

          <div
            className="
              flex
              gap-2
              overflow-x-auto
              pb-1
              scrollbar-hide
            "
          >

            {filters.map((filter) => {

              const Icon = filter.icon;

              const isActive =
                activeFilter === filter.name;

              return (
                <button
                  key={filter.name}
                  onClick={() =>
                    setActiveFilter(filter.name)
                  }
                  className={`
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-xl
                    px-4
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? `
                          bg-gray-950
                          text-white
                          shadow-lg
                          shadow-gray-900/10
                        `
                        : `
                          border
                          border-gray-200
                          bg-white
                          text-gray-600
                          hover:border-blue-200
                          hover:bg-blue-50
                          hover:text-blue-600
                        `
                    }
                  `}
                >

                  <Icon className="h-4 w-4" />

                  {filter.name}

                </button>
              );
            })}

          </div>


          {/* SEARCH */}

          <div className="relative w-full lg:w-72">

            <Search
              className="
                absolute
                left-3.5
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search courses..."
              className="
                h-11
                w-full
                rounded-xl
                border
                border-gray-200
                bg-white
                pl-10
                pr-4
                text-sm
                text-gray-900
                outline-none
                transition-all
                placeholder:text-gray-400
                focus:border-blue-400
                focus:ring-4
                focus:ring-blue-500/10
              "
            />

          </div>

        </div>


        {/* ==========================================
            RESULT INFO
        ========================================== */}

        <div className="mt-8 flex items-center justify-between">

          <p className="text-sm text-gray-500">

            Showing{" "}
            <span className="font-semibold text-gray-900">
              {filteredCourses.length}
            </span>{" "}
            {filteredCourses.length === 1
              ? "program"
              : "programs"}

          </p>

          {activeFilter !== "All" && (
            <button
              onClick={() => {
                setActiveFilter("All");
                setSearch("");
              }}
              className="
                text-xs
                font-semibold
                text-blue-600
                hover:text-blue-700
              "
            >
              Clear filters
            </button>
          )}

        </div>


        {/* ==========================================
            COURSE GRID
        ========================================== */}

        <div
          className="
            mt-6
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          {filteredCourses.map((course) => (

            <CourseCard
              key={course.id}
              course={course}
            />

          ))}

        </div>


        {/* ==========================================
            EMPTY STATE
        ========================================== */}

        {filteredCourses.length === 0 && (

          <div
            className="
              mt-8
              flex
              min-h-[250px]
              flex-col
              items-center
              justify-center
              rounded-3xl
              border
              border-dashed
              border-gray-200
              bg-gray-50/50
              text-center
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-white
                text-gray-400
                shadow-sm
              "
            >
              <Search className="h-5 w-5" />
            </div>

            <h3 className="mt-4 font-semibold text-gray-900">
              No programs found
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Try another category or search term.
            </p>

          </div>

        )}

      </div>

    </section>
  );
};


// ==========================================
// COURSE CARD
// ==========================================

const CourseCard = ({ course }) => {
  const isTraining = course.type === "Training";

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-200
        hover:shadow-[0_25px_60px_rgba(15,23,42,0.10)]
      "
    >

      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">

        <img
          src={course.imageurl}
          alt={course.name}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Dark overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/10
            to-transparent
          "
        />

        {/* Category */}
        <span
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white/90
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-gray-800
            backdrop-blur-md
          "
        >
          {course.category}
        </span>

        {/* Type */}
        <span
          className="
            absolute
            bottom-4
            left-4
            rounded-full
            bg-black/50
            px-3
            py-1.5
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-white
            backdrop-blur-md
          "
        >
          {course.type}
        </span>

      </div>


      {/* CONTENT */}
      <div className="p-6">

   <h3
  className="
    text-xl
    font-bold
    tracking-tight
    text-gray-950
    transition-colors
    duration-300
    group-hover:text-blue-600
  "
>
  {course.name}

  {course.tools?.length > 0 && (
    <span className="mt-3 flex flex-wrap gap-1.5">
      {course.tools.map((tool) => (
        <span
          key={tool}
          className="
            inline-flex
            items-center
            rounded-md
            border
            border-blue-100
            bg-blue-50
            px-2
            py-1
            text-[10px]
            font-semibold
            tracking-normal
            text-blue-600
          "
        >
          {tool}
        </span>
      ))}
    </span>
  )}
</h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Industry-focused learning designed to build
          practical and professional skills.
        </p>


        {/* Bottom */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
            border-t
            border-gray-100
            pt-5
          "
        >

          <div className="flex items-center gap-2">

            <div className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-xs font-medium text-gray-500">
              Industry Focused
            </span>

          </div>


          <a
            href={`/courses/${course.id}`}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-gray-950
              text-white
              transition-all
              duration-300
              hover:bg-blue-600
            "
          >
            ↗
          </a>

        </div>

      </div>

    </article>
  );
};
export default CourseSection;