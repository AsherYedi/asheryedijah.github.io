import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and payment processing.',
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NzIzNDM2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Intuitive task manager with drag-and-drop functionality, team collaboration, and analytics.',
    image: 'https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzcyMzI5NjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Creative Portfolio CMS',
    description: 'Custom content management system for artists and designers to showcase their work.',
    image: 'https://images.unsplash.com/photo-1754548930515-ac7eb978280d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBwcm9qZWN0fGVufDF8fHx8MTc3MjM4Njg3OXww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Next.js', 'Sanity', 'React', 'Vercel'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-4 text-center">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Here are some of my recent works that I'm proud of
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <Github size={20} />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors">
                    <ExternalLink size={20} />
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
