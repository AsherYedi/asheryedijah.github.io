import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-5xl">
            AYH
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Asher Yedijah Hoesono</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Informatics Engineering Undergraduate Student
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Deeply interested in data and how it can be used to uncover insights and support better decision-making.
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-lg transition-shadow"
          >
            View My Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full hover:border-gray-400 transition-colors"
          >
            Contact Me
          </button>
        </div>
        <div className="mt-16 animate-bounce">
          <ArrowDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
}