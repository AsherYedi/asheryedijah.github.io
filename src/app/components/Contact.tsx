import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@asheryedijah.com' },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">Let's Work Together</h2>
        <p className="text-xl mb-12 opacity-90">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <a 
          href="mailto:hello@asheryedijah.com"
          className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full text-lg hover:shadow-2xl transition-shadow mb-12"
        >
          Get In Touch
        </a>
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
        <p className="opacity-75">© 2026 Asher Yedijah Hoesono. All rights reserved.</p>
      </div>
    </section>
  );
}