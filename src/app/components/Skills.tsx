import { Code2, BarChart3, PieChart, Brain } from 'lucide-react';

const techStack = [
  {
    icon: Code2,
    title: 'Languages',
    color: 'from-blue-500 to-blue-600',
    technologies: [
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analysis',
    color: 'from-green-500 to-green-600',
    technologies: [
      { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
      { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    ],
  },
  {
    icon: PieChart,
    title: 'Visualization',
    color: 'from-purple-500 to-purple-600',
    technologies: [
      { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Seaborn', logo: 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg' },
    ],
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    color: 'from-orange-500 to-orange-600',
    technologies: [
      { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Tech Stack</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Technologies and tools I work with
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl mb-4">{category.title}</h3>
                <div className="flex flex-col gap-3">
                  {category.technologies.map((tech) => (
                    <div 
                      key={tech.name}
                      className="flex items-center gap-3 p-2 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                    >
                      <div className="w-8 h-8 flex items-center justify-center">
                        <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                      </div>
                      <span className="text-sm text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}