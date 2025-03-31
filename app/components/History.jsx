import React from "react";
import { FaGraduationCap, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiCplusplus,
  SiJava,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

const History = () => {
  const educationHistory = [
    {
      school: "Monash College",
      degree: "Diploma of Education, Information Technology",
      period: "Jun 2023 - Dec 2023",
      activities: "Peer Mentor | 2023 Academic Achievement Award",
      details: [
        {
          term: "1st Year",
          semesters: [
            {
              name: "Trimester 2",
              subjects: [
                { name: "Engineering Practices", grade: "81%" },
                { name: "Functions and their Application" },
                {
                  name: "Introduction to Computer Systems, Networks and Security",
                  grade: "79%",
                },
                { name: "Fundamentals of C++", grade: "71%" },
              ],
            },
            {
              name: "Trimester 3",
              subjects: [
                { name: "Managing People and Organisations", grade: "75%" },
                { name: "Business Statistics" },
                {
                  name: "Introduction to Algorithms and Programming",
                  award: "Academic Achievement Award",
                },
                { name: "Foundation of 3D", grade: "85%" },
              ],
            },
          ],
        },
      ],
      skills: ["C++", "Python", "Algorithms"],
    },
    {
      school: "Monash University",
      degree: "Bachelor's degree, Information Technology",
      period: "Feb 2024 - Dec 2026",
      activities: "Japanese Club – Social Media Marketing",
      current: true,
      details: [
        {
          term: "2nd Year",
          semesters: [
            {
              name: "1st Semester",
              subjects: [
                { name: "Web fundamentals", grade: "76%" },
                { name: "Programming fundamentals in Java", grade: "85%" },
                { name: "Mobile application development", grade: "74%" },
                { name: "Databases" },
              ],
            },
            {
              name: "2nd Semester",
              subjects: [
                { name: "System development" },
                { name: "IT Project Management" },
                { name: "Web database interface", grade: "73%" },
              ],
            },
          ],
        },
      ],
      skills: ["JavaScript", "SQL", "C++", "MongoDB", "Firebase", "Java"],
    },
    {
      school: "KTH Royal Institute of Technology",
      degree: "Bachelor's degree, Computer Science",
      period: "Jan 2025 - May 2025",
      activities: "Exchange Program",
      details: [
        {
          term: "3rd Year",
          semesters: [
            {
              name: "1st Period",
              subjects: [
                { name: "Software Engineering Fundamentals", grade: "100%" },
                { name: "Interaction Programming and the Dynamic Web" },
              ],
            },
            {
              name: "2nd Period",
              subjects: [{ name: "Haptics, Tactile and Tangible Interaction" }],
            },
          ],
        },
      ],
      skills: ["JavaScript", "Next.js", "Python"],
    },
  ];

  return (
    <div id="history" className="w-full px-4 sm:px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-base sm:text-lg font-Ovo">
        My Journey
      </h4>
      <h2 className="text-center text-4xl sm:text-5xl font-Ovo mb-8 sm:mb-12">
        Education History
      </h2>

      <div className="max-w-4xl mx-auto">
        {educationHistory.map((edu, index) => (
          <div key={index} className="mb-12 sm:mb-16 relative">
            {/* Timeline line */}
            {index !== educationHistory.length - 1 && (
              <div className="absolute left-4 sm:left-8 top-16 bottom-0 w-0.5 bg-gray-200" />
            )}

            {/* Education Card */}
            <div className="flex gap-3 sm:gap-6">
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <FaGraduationCap className="text-xl sm:text-2xl text-blue-600" />
                </div>
              </div>

              <div className="flex-1 bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      {edu.school}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                    {edu.activities && (
                      <p className="text-sm text-gray-600 mt-2">
                        {edu.activities}
                      </p>
                    )}
                  </div>
                  {edu.current && (
                    <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm self-start mt-2 sm:mt-0">
                      Current
                    </span>
                  )}
                </div>

                {/* Academic Details */}
                {edu.details.map((year, yearIndex) => (
                  <div key={yearIndex} className="mt-4">
                    <h4 className="font-medium text-base sm:text-lg mb-3">
                      {year.term}
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      {year.semesters.map((semester, semIndex) => (
                        <div
                          key={semIndex}
                          className="bg-gray-50 rounded-lg p-3 sm:p-4"
                        >
                          <h5 className="font-medium mb-2 text-sm sm:text-base">
                            {semester.name}
                          </h5>
                          <ul className="space-y-2">
                            {semester.subjects.map((subject, subIndex) => (
                              <li
                                key={subIndex}
                                className="text-sm leading-relaxed"
                              >
                                <div className="flex flex-wrap items-center gap-x-2">
                                  <span className="break-words">
                                    {subject.name}
                                  </span>
                                  {subject.grade && (
                                    <span className="text-blue-600 font-medium">
                                      {subject.grade}
                                    </span>
                                  )}
                                  {subject.award && (
                                    <span className="text-yellow-600 whitespace-nowrap">
                                      ★ {subject.award}
                                    </span>
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Skills */}
                <div className="mt-6">
                  <h4 className="font-medium mb-2 text-sm sm:text-base">
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 sm:px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs sm:text-sm flex items-center gap-1"
                      >
                        {getSkillIcon(skill)}
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// スキルアイコンを取得する関数
const getSkillIcon = (skill) => {
  switch (skill.toLowerCase()) {
    case "javascript":
      return <SiJavascript className="text-yellow-400" />;
    case "next.js":
      return <SiNextdotjs className="text-black" />;
    case "python":
      return <SiPython className="text-blue-500" />;
    case "c++":
      return <TbBrandCpp className="text-blue-600" />;
    case "java":
      return <FaJava className="text-red-500" />;
    case "mongodb":
      return <SiMongodb className="text-green-500" />;
    case "firebase":
      return <SiFirebase className="text-yellow-500" />;
    case "sql":
      return <BiLogoPostgresql className="text-blue-400" />;
    default:
      return null;
  }
};

export default History;
