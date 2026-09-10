import React from "react";
import { experiences } from "../data/data";
import { span } from "framer-motion/client";
import { useTheme } from "../context/ThemeContext";



const Experience = () => {
  const { isDark } = useTheme();
  
  return (
    <section
      id="experience"
      className="py-5 relative border-t-1 border-[#555555]"
    >
      <h2 className={`text-3xl font-bold text-center ${
        isDark ? 'text-blue-100' : 'text-blue-900'
      }`}>
        My <span className="text-outline">Experience</span> & Education
      </h2>
      <p className={`text-center max-w-xl mx-auto mb-5 ${
        isDark ? 'text-blue-200/60' : 'text-blue-800/70'
      }`}>
        An overview of my professional experience and educational background.
      </p>

      <div className="relative max-w-5xl mx-auto px-4 py-5">
        <div className="absolute left-1/2 md:left-1/2 top-0 bottom-0 w-1 md:flex hidden bg-teal-800 transform -translate-x-1/2"></div>
        <div className="space-y-10">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={` relative flex items-start w-full ${
                  isLeft ? " md:justify-start " : "md:justify-end"
                } justify-center`}
              >
                {exp.logo && (
                  <div className="absolute left-1/2 md:flex hidden -translate-x-1/2 z-10">
                    <div className="w-15 h-15 rounded-full shadow-lg flex justify-center items-center bg-neutral-600">
                      <img src={exp.logo} alt="logo" className="w-full h-fit" />
                    </div>
                  </div>
                )}

                <div
                  className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg border hover:scale-105 transition-transform duration-300 ${
                    isDark ? 'border-blue-500/30 bg-[#0f2340]' : 'border-blue-300 bg-blue-50'
                  } ${
                    isLeft ? "md:text-right md:mr-12" : "md:ml-12"
                  } text-left`}
                >
                  <h3 className={`text-xl font-semibold ${
                    isDark ? 'text-blue-100' : 'text-blue-900'
                  }`}>
                    {exp.title}
                  </h3>
                  <p className="text-teal-500 font-medium">{exp.company}</p>
                  <span className={`text-sm ${
                    isDark ? 'text-blue-300/60' : 'text-blue-700/70'
                  }`}>{exp.period}</span>
                  <p className={`text-justify text-sm mb-4 ${
                    isDark ? 'text-blue-100/60' : 'text-blue-900/70'
                  }`}>
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:justify-end justify-start">
                    {exp.skills.map((skill, index) => (
                      <span className={`px-3 py-1 border rounded-md text-sm text-light ${
                        isDark 
                          ? 'border-blue-500/40 text-blue-200/80' 
                          : 'border-blue-400 text-blue-800'
                      }`} key={index}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
