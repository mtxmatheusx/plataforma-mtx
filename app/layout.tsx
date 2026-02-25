export default function Dashboard() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-3xl font-bold border-b border-red-900 pb-4">MTX - Gestão de ROI</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">CPA Atual</p>
          <p className="text-2xl font-bold text-red-500">R$ 42,50</p>
        </div>
        
        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-zinc-400 text-sm">ROAS Médio</p>
          <p className="text-2xl font-bold text-green-500">4.2x</p>
        </div>

        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 shadow-[0_0_15px_rgba(255,0,0,0.1)]">
          <p className="text-zinc-400 text-sm">Lucro (Método RIC)</p>
          <p className="text-2xl font-bold">R$ 12.450,00</p>
        </div>
      </div>

      {/* Tabela de Campanhas aqui em baixo */}
    </main>
  );
}
