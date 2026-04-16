import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

const Navbar = () => {
  return (
    <nav className="fixed top-2 w-full z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-3 md:rounded-full shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          
          {/* Fila Superior en móvil: Logo y Redes */}
          <div className="flex items-center justify-between w-full md:w-auto px-2 md:px-0">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-indigo-500/50">
                <Image src="/imgPerfil.jpg" alt="Rosa López" fill className="object-cover" priority />
              </div>
              <span className="font-bold text-sm text-white">Rosa López</span>
            </div>
            
            {/* Redes visibles siempre, pero más pequeñas en móvil */}
            <div className="flex gap-3 text-gray-400">
              <a href="https://linkedin.com/in/rosaloiz/" target="_blank"><FaLinkedin size={18} /></a>
              <a href="https://github.com/r-s-l-z" target="_blank"><FaGithub size={18} /></a>
              <a href="mailto:roseloiz@icloud.com"><MdEmail size={20} /></a>
            </div>
          </div>

          {/* Separador visual solo en móvil */}
          <div className="w-full h-[1px] bg-white/10 md:hidden my-1"></div>

          {/* Menú y Título Profesional */}
          <div className="flex flex-col items-center w-full md:w-auto">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[9px] md:text-[10px] uppercase font-bold mb-1">
               Front-end / WordPress Developer Portfolio
            </div>
            <div className="flex gap-5 text-[10px] md:text-sm font-medium text-gray-300">
              <Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link>
              <Link href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mi</Link>
              <Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link>
              <Link href="#habilidades" className="hover:text-white transition-colors">Habilidades</Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;