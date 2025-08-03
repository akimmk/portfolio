import React from 'react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      title: 'Software Engineering Intern',
      company: 'Atlas Computer Technology',
      location: 'Addis Ababa, Ethiopia',
      duration: '2024 july - 2024 Aug',
      description: 'Contributed to the development of internal tools and client-facing systems. Assisted in debugging, feature implementation, and system optimization across several web applications. Gained hands-on experience with real-world project workflows and version control systems..',
      technologies: ['React', 'Node.js', 'MongoDB', 'javaScript', 'Docker']
    },
    {
      id: '2',
      title: 'Full Stack Developer (Project-Based)',
      company: 'Independent Projects / Collaborations',
      location: 'Remote',
      duration: '2023 - present',
      description: 'Designed and developed several full-stack applications including an Interactive Lab Classroom platform, a File Transfer App, and an E-commerce Website. Emphasized clean UI, responsiveness, and performance. Built REST APIs, handled authentication, and managed relational and NoSQL databases.',
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'SpringBoot', 'JavaFX','Socket Programming']
    },
    {
      id: '3',
      title: 'Computer Science Degree',
      company: 'University of Gondar',
      location: 'Gondar, Ethiopia',
      duration: '2021 - 2025',
      description: 'Bachelor of Science in Computer Science. Developed core expertise in algorithms, system design, and full-stack development. Capstone project: Interactive Lab Classroom, a real-time platform for managing lab sessions, users, and resources.',
      technologies: ['Java', 'Python', 'C++', 'MySQL', 'Docker']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the companies I've had the privilege to work with
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-black border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {experience.duration}
                      </span>
                    </div>
                    <div className="flex items-center mb-3">
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {experience.company}
                      </h4>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{experience.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;