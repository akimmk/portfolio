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
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      description: 'Led development of microservices architecture serving 50k+ daily active users. Mentored junior developers and conducted code reviews. Implemented CI/CD pipelines reducing deployment time by 60%.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker']
    },
    {
      id: '2',
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'New York, NY',
      duration: '2020 - 2022',
      description: 'Built and maintained web applications using React and Django. Developed RESTful APIs and integrated third-party services. Optimized database queries improving response time by 40%.',
      technologies: ['React', 'Django', 'Python', 'PostgreSQL', 'Redis']
    },
    {
      id: '3',
      title: 'Frontend Developer',
      company: 'WebAgency Inc',
      location: 'Austin, TX',
      duration: '2019 - 2020',
      description: 'Created responsive websites and web applications. Implemented modern UI/UX designs with pixel-perfect accuracy. Collaborated with designers to improve user experience.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Sass']
    },
    {
      id: '4',
      title: 'Computer Science Degree',
      company: 'University of Technology',
      location: 'Boston, MA',
      duration: '2015 - 2019',
      description: 'Bachelor of Science in Computer Science. Relevant coursework: Data Structures, Algorithms, Database Systems. Senior project: E-commerce platform with recommendation system.',
      technologies: ['Java', 'Python', 'C++', 'MySQL', 'Machine Learning']
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