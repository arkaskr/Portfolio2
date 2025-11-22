import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Creatiq Media",
      role: "Full Stack Developer",
      location: "Kolkata, India",
      startDate: "Aug 2025",
      endDate: "Nov 2025",
      description: "Intern as a Full Stack Dev.",
      achievements: [
        "Developed an Employee Management System for internal use",
        "Designed modern and intuitive UI/UX for multiple websites",
        "Worked on real client websites and delivered production-ready features",
        "Optimized existing websites for improved speed and performance",
        "Learnt and implemented modern technologies such as Next.js",
        "Experienced with Git & GitHub for version control and collaboration",
        "Participated in team coordination, planning, and development activities",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Flutter", "MongoDB"],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-[#030303] pt-24 px-4 sm:px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-6xl text-white-50 font-extrabold tracking-tight mb-3">
            Experience
          </h1>
          <p className="text-gray-400 text-lg">
            Bold timeline with modern UI elements
          </p>
        </div>

        <div className="relative">
          {/* Bold gradient line */}
          <div className="absolute left-2.5 sm:left-6 top-0 bottom-0 w-1.5 bg-gradient-to-b from-fuchsia-500 via-purple-500 to-purple-900 rounded-full" />

          {experiences.map((exp) => (
            <div key={exp.id} className="relative flex gap-14 mb-20">
              
              {/* Big glowing dot */}
              <div className="absolute left-3 sm:left-6.5 -translate-x-1/2 w-6 h-6 rounded-full bg-fuchsia-500 shadow-[0_0_25px_#f0abfc]" />

              <div className="ml-8 sm:ml-12 flex-1 p-10 rounded-2xl bg-[#111] border border-white/10 shadow-xl shadow-purple-900/20 hover:shadow-purple-500/30 transition-all">
                <h3 className="text-3xl font-bold mb-2">{exp.role}</h3>

                <p className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  {exp.company}
                </p>

                <div className="flex gap-6 text-gray-400 mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exp.startDate} - {exp.endDate}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {exp.location}
                  </span>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-8">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex gap-3 text-gray-200">
                      <span className="text-fuchsia-400 mt-1">▸</span> {a}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 rounded-lg border border-purple-500/40 text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
