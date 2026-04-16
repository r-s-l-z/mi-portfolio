import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

const Navbar = () => {
  return (
    <nav className="fixed top-2 md:top-6 w-full z-50 flex justify-center px-4">
      {/* Contenedor principal: En PC es más alto (py-4) y ancho */}
      <div className="w-full max-w-7xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-full p-3 md:px-10 md:py-4 shadow-2xl transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-10">
          
          {/* LADO IZQUIERDO: Foto y Nombre (Más grandes en PC) */}
          <div className="flex items-center justify-between w-full md:w-auto px-2 md:px-0">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="relative w-8 h-8 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-lg shadow-indigo-500/20">
                <Image src="/imgPerfil.jpg" alt="Rosa López" fill className="object-cover" priority />
              </div>
              <span className="font-bold text-sm md:text-xl tracking-tight text-white whitespace-nowrap">Rosa López</span>
            </div>
            
            {/* Redes para MÓVIL (Se ocultan en PC) */}
            <div className="flex gap-3 text-gray-400 md:hidden">
              <a href="https://linkedin.com/in/rosaloiz/" target="_blank"><FaLinkedin size={18} /></a>
              <a href="https://github.com/r-s-l-z" target="_blank"><FaGithub size={18} /></a>
              <a href="mailto:roseloiz@icloud.com"><MdEmail size={20} /></a>
            </div>
          </div>

          {/* Separador visual solo en móvil */}
          <div className="w-full h-[1px] bg-white/10 md:hidden my-1"></div>

          {/* CENTRO: Menú y Título (En PC se alinea mejor) */}
          <div className="flex flex-col items-center md:flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-5 md:py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[9px] md:text-[11px] uppercase font-bold tracking-widest mb-1 md:mb-2">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
               </span>
               Front-end / WordPress Developer Portfolio
            </div>
            <div className="flex gap-6 md:gap-10 text-[10px] md:text-base font-semibold text-gray-300">
              <Link href="#inicio" className="hover:text-white hover:scale-110 transition-all">Inicio</Link>
              <Link href="#sobre-mi" className="hover:text-white hover:scale-110 transition-all">Sobre Mi</Link>
              <Link href="#proyectos" className="hover:text-white hover:scale-110 transition-all">Proyectos</Link>
              <Link href="#habilidades" className="hover:text-white hover:scale-110 transition-all">Habilidades</Link>
            </div>
          </div>

          {/* DERECHA: Redes para PC (Iconos más grandes y espaciados) */}
          <div className="hidden md:flex items-center gap-6 text-gray-400">
            <a href="https://linkedin.com/in/rosaloiz/" target="_blank" className="hover:text-white hover:scale-120 transition-all">
              <FaLinkedin size={26} />
            </a>
            <a href="https://github.com/r-s-l-z" target="_blank" className="hover:text-white hover:scale-120 transition-all">
              <FaGithub size={26} />
            </a>
            <a href="mailto:roseloiz@icloud.com" className="hover:text-white hover:scale-120 transition-all">
              <MdEmail size={28} />
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;