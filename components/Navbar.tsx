import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

const Navbar = () => {
  return (
    <nav className="fixed top-2 md:top-5 w-full z-50 flex justify-center px-2">
      <div className="w-full max-w-7xl flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 px-4 md:px-6 py-2 md:py-3 rounded-full shadow-2xl">
        
        {/* Izquierda: Foto y Nombre */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border border-indigo-500/50">
            <Image 
              src="/imgPerfil.jpg"         
              alt="Rosa López" 
              fill                           
              className="object-cover"   
              priority                 
            />
          </div>
          <span className="font-bold text-sm md:text-lg tracking-tighter text-white hidden lg:block">
            Rosa López 
          </span>
        </div>

        {/* Centro: Navegación y Título */}
        <div className="flex flex-col items-center">
          {/* Título profesional - Oculto en móviles muy pequeños */}
          <div className="hidden md:inline-flex items-center gap-2 px-3 py-0.5 mb-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[10px] uppercase tracking-widest font-bold">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
            </span>
            Front-end / WordPress
          </div>

          {/* Enlaces de navegación */}
          <div className="flex gap-4 md:gap-6 text-[11px] md:text-sm font-medium text-gray-300">
            <Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mi</Link>
            <Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <Link href="#habilidades" className="hover:text-white transition-colors">Habilidades</Link>
          </div>
        </div>

        {/* Derecha: Redes Sociales */}
        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href="https://linkedin.com/in/rosaloiz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all"
          >
            <FaLinkedin className="text-[20px] md:text-[24px]" />
          </a>
          <a 
            href="https://github.com/r-s-l-z" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all"
          >
            <FaGithub className="text-[20px] md:text-[24px]" />
          </a>
          <a 
            href="mailto:roseloiz@icloud.com" 
            className="text-gray-400 hover:text-white transition-all"
            title="Enviar un correo"
          >
            <MdEmail className="text-[22px] md:text-[26px]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;