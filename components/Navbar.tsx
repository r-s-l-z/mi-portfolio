import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

const Navbar = () => {
  return (
    <nav className="fixed top-5 w-full z-50 flex justify-center">
      <div className="w-[90%] max-w-7xl flex items-center justify-between bg-black/20 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full">
        
        {/* Izquierda:Foto Perfil y Nombre */}
        <div className="flex items-center gap-3">
          {/* Contenedor de la foto con borde sutil */}
          <div className="relative w-30 h-30 rounded-full overflow-hidden border border-indigo-500/50 shadow-lg shadow-indigo-500/20">
            {/* Componente Image: Carga tu foto de forma optimizada */}
            <Image 
              src="/imgPerfil.jpg"         
              alt="Foto de perfil de Rosa López" 
              fill                   
              className="object-cover"   
              priority                 
            />
          </div>
          <span className="font-bold text-lg tracking-tighter text-white hidden sm:block">
            Rosa López 
          </span>
        </div>

        {/* Centro: Menú Mi Info */}
        <div className="flex flex-col items-center gap-1">

          {/* Arriba título Front-End */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-[20px] font-medium uppercase tracking-wider">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Front-end / WordPress Developer Portfolio
          </div>

        {/* Arriba enlaces de navegación */}
        <div className="flex gap-6 px-8 py-2 rounded-full border border-blue-500/40 bg-blue-500/5 text-sm font-medium text-gray-300">
            <Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link>
            <Link href="#sobre-mi" className="hover:text-white transition-colors">Sobre Mi</Link>
            <Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link>
            <Link href="#habilidades" className="hover:text-white transition-colors">Habilidades</Link>
          </div>
        </div>

        {/* Derecha: Contacto e info */}
        <div className="flex gap-4">
          <a 
            href="https://linkedin.com/in/rosaloiz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all"
          >
            <FaLinkedin size={30} />
          </a>
          <a 
            href="https://github.com/r-s-l-z" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all"
          >
            <FaGithub size={30} />
          </a>
        <a 
            href="mailto:roseloiz@icloud.com" 
            className="text-gray-400 hover:text-white transition-all"
            title="Enviar un correo"
        >
            <MdEmail size={30} />
            </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;