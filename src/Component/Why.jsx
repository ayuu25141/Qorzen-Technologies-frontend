import {React} from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Users,
  Rocket,
} from "lucide-react";
import why from "../assets/why.png"
function WhyChooseUs() {
  const benefits = [
    {
      icon: Code2,
      title: "Learn by Building",
      description:
        "Go beyond theory with practical exercises and real-world projects that strengthen your development skills.",
    },
    {
      icon: Layers3,
      title: "Industry-Relevant Skills",
      description:
        "Learn modern technologies and development practices that are relevant to today's IT industry.",
    },
    {
      icon: Users,
      title: "Guidance That Matters",
      description:
        "Get structured learning and expert guidance to help you understand concepts and solve problems confidently.",
    },
    {
      icon: Rocket,
      title: "Career-Focused Learning",
      description:
        "Build the technical foundation, projects, and confidence needed to take the next step in your career.",
    },
  ];

  return (
    <section   id = "about"  className="relative overflow-hidden bg-white py-24 sm:py-32">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />
      </div>

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-cyan-400" />

            <span className="text-xl font-semibold uppercase tracking-[0.25em]     bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent">
           About us
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight  text-[#353243]
sm:text-5xl">
            More Than Just Courses.
            <br />

            <span className="    bg-gradient-to-r
    from-[#E91E9B]
    to-[#7416D9]
    bg-clip-text
    text-transparent">
              We Build Real Skills.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-800 sm:text-lg">
            We focus on practical learning, modern technologies, and
            real-world experience so you can turn knowledge into skills
            that actually matter.
          </p>
        </div>

        {/* 50 / 50 Layout */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* ================= IMAGE SIDE ================= */}
          <div className="relative">

            {/* Image Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-2xl" />

            {/* Image Container */}
            <div
              className="
                group
                relative
                aspect-[4/3]
                overflow-hidden
                rounded-[1.75rem]
                border
                border-white/10
                bg-white/5
                shadow-2xl
              "
            >
              <img
                src={why}
                alt="QorZen practical IT training"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Image Top Gradient */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

              {/* Floating Badge */}
              <div
                className="
                  absolute
                  left-5
                  top-5
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/15
                  bg-black/40
                  px-4
                  py-2
                  text-xs
                  font-medium
                  text-white
                  backdrop-blur-xl
                "
              >
                <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

                Practical Learning
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                <div className="flex items-end justify-between gap-4">

                  <div>
                    <p className="text-sm font-medium text-cyan-400">
                      Learn • Practice • Build
                    </p>

                    <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                      Skills that go beyond the classroom.
                    </h3>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:bg-blue-500
                      group-hover:border-blue-400
                    "
                  >
                    <ArrowUpRight size={19} />
                  </div>

                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div
              className="
                absolute
                -bottom-7
                -right-4
                hidden
                w-52
                rounded-2xl
                border
                border-white/10
                bg-[#0b0b12]/90
                p-5
                shadow-2xl
                backdrop-blur-xl
                sm:block
                lg:-right-8
              "
            >
              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-blue-400
                  "
                >
                  <Rocket size={19} />
                </div>

                <div>
                  <p className="text-lg font-bold text-white">
                    Real-World
                  </p>

                  <p className="text-xs text-white">
                    Learning Approach
                  </p>
                </div>

              </div>

              <div className="mt-4 h-px bg-white/10" />

              <p className="mt-3 text-xs leading-5 text-white">
                Learn concepts. Apply them. Build something meaningful.
              </p>
            </div>
          </div>

          {/* ================= CONTENT SIDE ================= */}
          <div>

            <div className="space-y-7 text-gray-300">

              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                      group
                      flex
                      gap-5
                      rounded-2xl
                      border
                      border-transparent
                      p-4
                      transition-all
                      duration-300
                      hover:border-white/10
                      hover:bg-white/[0.03]
                    "
                  >

                    {/* Number / Icon */}
                    <div className="shrink-0">

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-blue-400/15
                          bg-blue-500/[0.08]
                          text-blue-400
                          transition-all
                          duration-300
                          group-hover:scale-105
                          group-hover:border-cyan-400/30
                          group-hover:bg-cyan-400/10
                        "
                      >
                        <Icon size={21} />
                      </div>

                    </div>

                    {/* Text */}
                    <div>
                      <div className="flex items-center gap-3">

                        <h3 className="text-lg font-semibold text-black">
                          {item.title}
                        </h3>

                      

                      </div>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-gray-800">
                        {item.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Bottom Mini CTA */}
            <div className="mt-9 flex items-center gap-3 border-t border-white/10 pt-7">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                <Check size={16} />
              </div>

              <p className="text-sm text-gray-800">
                Built for learners who want{" "}
                <span className="font-medium text-white">
                  practical results
                </span>
                .
              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;