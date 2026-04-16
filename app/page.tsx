import Navbar from '../components/Navbar';
import { FaWhatsapp, FaWordpress, FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative flex min-h-screen flex-col items-center bg-black text-white px-6 overflow-hidden pt-24 pb-8">
        
        {/* FONDO MESH GRADIENT */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/20 blur-[130px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[130px] rounded-full animate-pulse [animation-delay:2s]"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* HERO SECTION  */}
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-40 relative z-10 min-h-[70vh]">
          <div className="flex-1 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
              Haciendo realidad ideas, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500">
              con la arquitectura digital.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
              Desarrolladora Web Junior especializada en Front-End y WordPress. Mi formación en moda me permite aportar una sensibilidad estética junto a una ejecución técnica estructurada, sin olvidar la importancia de la accesibilidad y el SEO en cada proyecto digital.
            </p>
<div className="flex flex-wrap gap-4 justify-center mt-6 w-full">
  <a href="#proyectos" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
    Ver Proyectos
  </a>
  <a href="https://wa.me/34638243614" className="px-8 py-3 border border-gray-700 bg-black text-white font-semibold rounded-full flex items-center gap-2">
    <FaWhatsapp className="text-green-500" size={18} /> ¿Hablamos?
  </a>
</div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
              <Image src="/imgPortada.png" alt="Hero" fill className="object-contain" priority />
            </div>
          </div>
        </div>

        {/* SECCIÓN: SOBRE MÍ */}
        <section id="sobre-mi" className="max-w-7xl w-full py-24 relative z-10 border-t border-white/10 mt-20 scroll-mt-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  <div className="space-y-6">
    <h2 className="text-4xl font-bold italic">Sobre mí</h2>
    <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
      <p>
        ¡Bienvenidos a mi portfolio! Soy una desarrolladora web enfocada en Front-End, tanto en desarrollo de código con nuevas tecnologías (NODE.JS, Tailwind CSS) como en CMS. Mi pasado en patronaje y moda es mi mayor activo: me permite unir la creatividad visual con la parte técnica.
      </p>

      {/* Tarjeta WordPress */}
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-purple-400 font-bold mb-1">CMS WordPress</h3>
        <p className="text-sm">
          Especialista en Elementor Pro y creación de plantillas personalizadas, priorizando siempre la coherencia visual, la accesibilidad y el SEO.
        </p>
                          <span className="text-xs font-mono text-gray-500 uppercase">Elementor pro - css - php - html - siteground</span>
      </div>

      {/* Tarjeta Front-end */}
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-blue-400 font-bold mb-1">Desarrollo Front-end</h3>
        <p className="text-sm">
          Enfoque en la precisión del código aplicando nuevas tecnologías como Node.js y Tailwind CSS. Mente inquieta aprendiendo nuevas tecnologías y lenguajes para tener el mejor rendimiento en cada arquitectura digital.
        </p>
                          <span className="text-xs font-mono text-gray-500 uppercase">html5 + CSS3 + js + PHP + PYTHON + tailwind + node.js + react + mongodb</span>
      </div>

      <p>
        Soy una persona organizada, autónoma y con una motivación constante por aprender nuevas tecnologías como JavaScript y rendimiento web. Mi foco siempre está en la precisión y la mejora continua.
      </p>
    </div>
  </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 p-8 rounded-3xl border border-white/10 backdrop-blur-sm text-center">
               <p className="text-purple-300 font-mono text-sm uppercase tracking-widest mb-4">Metodología</p>
               <h3 className="text-2xl font-semibold">"Replicar diseños con exactitud a la visión del cliente y mejorar la calidad de cada proyecto digital".</h3>
            </div>
          </div>
        </section>

        {/* SECCIÓN: PROYECTOS */}
        <section id="proyectos" className="max-w-7xl w-full py-24 relative z-10 scroll-mt-24">
          <h2 className="text-4xl font-bold mb-12 text-center md:text-left">Proyectos </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vestuari Compartit */}
<a 
  href="https://vestuari-compartit.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all block"
>
  <div className="p-6 space-y-4">
    <div className="flex justify-between items-start">
      <FaWordpress className="text-3xl text-purple-400" />
      <span className="text-xs font-mono text-gray-500 uppercase text-right">
        WordPress + Elementor Pro <br />+ Membresías
      </span>
    </div>
    
    <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors">
      Vestuari Compartit
    </h3>
    
    <p className="text-gray-400 text-sm">
      Proyecto basado en la moda sostenible y el intercambio de ropa, ofreciendo una alternativa al consumo masivo.
    </p>
    
    <p className="text-gray-400 text-sm">
      Creación y rescate de web con sistema de gestión de miembros, blog y cuentas de membresía personalizadas para fomentar la economía circular.
    </p>
  </div>
</a>

            {/* Proyecto 2: Asador Pampero */}
<a 
  href="https://pamperobarcelona.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all block"
>
  <div className="p-6 space-y-4">
    <div className="flex justify-between items-start">
      <div className="flex gap-2">
        <FaWordpress className="text-3xl text-blue-400" />
        <FaCode className="text-3xl text-orange-400" />
      </div>
      <span className="text-xs font-mono text-gray-500 uppercase text-right">
        PHP + CSS + HTML <br />+ PLANTILLA PERSONALIZADA
      </span>
    </div>
    
    <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
      Asador Pampero
    </h3>
    
    <p className="text-gray-400 text-sm">
      Renovación web para Kit Digital. Plantilla personalizada con modificación de código para accesibilidad y SEO.
    </p>
    
    <p className="text-gray-400 text-sm">
      Migración de web antigua a WordPress, manteniendo la identidad visual y mejorando la experiencia del usuario con un diseño moderno y funcional.
    </p>
  </div>
</a>
<a 
  href="http://delgadalinea-azul.gt.tc" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="group bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all block"
>
  <div className="p-6 space-y-4">
    <div className="flex justify-between items-start">
      <FaCode className="text-3xl text-blue-400" />
      <span className="text-xs font-mono text-gray-500 uppercase">
        Desarrollo Front-End <br />html5 + CSS3 + JS
      </span>
    </div>
    
    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
      Delgada Línea Azul
    </h3>
    
    <p className="text-gray-400 text-sm">
      Proyecto actualmente en curso desarrollado con tecnologías Front-End tradicionales.
    </p>
    
    <p className="text-gray-400 text-sm">
      Enfoque en una maquetación limpia y precisa, replicando el diseño con exactitud técnica y optimizando el rendimiento web desde la base.
    </p>
  </div>
</a>
          </div>
        </section>

{/* SECCIÓN: HABILIDADES */}
<section id="habilidades" className="max-w-7xl w-full py-24 relative z-10 text-center">
  <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
  <p className="text-gray-400 mb-12 italic">Herramientas que utilizo para dar vida a cada idea</p>
  
  <div className="flex flex-col gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 max-w-4xl mx-auto px-4">
    
    {/* Fila 1 */}
    <div className="grid grid-cols-4 gap-4 w-full">
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width={50} height={50} alt="HTML5" />
        <span className="text-xs font-mono">HTML5</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width={50} height={50} alt="CSS3" />
        <span className="text-xs font-mono">CSS3</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width={50} height={50} alt="JS" />
        <span className="text-xs font-mono">JavaScript</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" width={50} height={50} alt="Tailwind" />
        <span className="text-xs font-mono">Tailwind</span>
      </div>
    </div>

    {/* Fila 2  */}
    
    <div className="flex justify-around items-center w-full max-w-[85%] mx-auto">
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" width={50} height={50} alt="PHP" />
        <span className="text-xs font-mono">PHP</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width={50} height={50} alt="React" />
        <span className="text-xs font-mono">React</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width={50} height={50} alt="Node.js" />
        <span className="text-xs font-mono">Node.js</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" width={50} height={50} alt="Python" />
        <span className="text-xs font-mono">Python</span>
      </div>
    </div>

    {/* Fila 3 */}
    <div className="grid grid-cols-4 gap-4 w-full">
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" width={50} height={50} alt="WordPress" className="invert" />
        <span className="text-xs font-mono">WordPress</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" width={50} height={50} alt="Figma" />
        <span className="text-xs font-mono">Figma</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" width={50} height={50} alt="MongoDB" />
        <span className="text-xs font-mono">MongoDB</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width={50} height={50} alt="MySQL" />
        <span className="text-xs font-mono">MySQL</span>
      </div>
    </div>

  </div>
</section>


{/* FOOTER */}
<footer className="w-full py-10 relative z-10 border-t border-white/5 text-center">
  <p className="text-gray-500 text-sm font-mono tracking-wide">
    © 2026 Rosa López Izquierdo <span className="text-purple-500/50">@r-s-l-z</span>. 
    Todos los derechos reservados.
  </p>
</footer>

      </main>
    </>
  );
}