export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0a]">
      {/* Esfera Púrpura */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-900/20 blur-[120px] animate-pulse" />
      
      {/* Esfera Azul/Índigo */}
      <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-900/20 blur-[120px] animate-blob" />
      
      {/* Textura de Grano (Opcional pero recomendado) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
