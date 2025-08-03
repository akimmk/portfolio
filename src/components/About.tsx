import React, { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Zap, Heart } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'TypeScript', level: 40, category: 'Frontend' },
    {name: 'JavaScript', level: 80, category: 'Frontend'},
    { name: 'Node.js', level: 80, category: 'Backend' },
    {name: 'MongoDB', level: 70, category: 'Database'},
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    { name: 'AWS/Docker', level: 75, category: 'DevOps' },
  ];

  const interests = [
    { icon: Code2, title: 'Clean Code', description: 'Writing maintainable, efficient code' },
    { icon: Palette, title: 'UI/UX Design', description: 'Creating beautiful user experiences' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed and efficiency' },
    { icon: Heart, title: 'Open Source', description: 'Contributing to the community' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer, creating 
            digital solutions that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Story</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I started my journey in web development during university, fascinated by the ability 
                  to bring ideas to life through code. What began as curiosity quickly became a passion.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or mentoring aspiring developers in my community.
                </p>
              </div>
            </div>

            {/* Interests */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <div
                  key={interest.title}
                  className={`bg-white dark:bg-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <interest.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</span>
                  </div>
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;