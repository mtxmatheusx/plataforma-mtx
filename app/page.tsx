export default function Dashboard() {
  return (
    <main className="p-8 space-y-8">
      <header className="flex justify-between items-center border-b border-red-900 pb-6">
        <h1 className="text-3xl font-bold tracking-tighter">MTX - DASHBOARD DE ROI</h1>
        <span className="text-red-500 font-mono text-sm">● LIVE DATA</span>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-zinc-400 text-xs uppercase tracking-widest">Investimento Total</p>
          <p className="text-2xl font-bold text-white">R$ 5.000,00</p>
        </div>
        
        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
          <p className="text-zinc-400 text-xs uppercase tracking-widest">CPA Meta</p>
          <p className="text-2xl font-bold text-red-500">R$ 35,00</p>
        </div>

        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 shadow-[0_0_20px_rgba(255,0,0,0.1)]">
          <p className="text-zinc-400 text-xs uppercase tracking-widest">Lucro Estimado</p>
          <p className="text-2xl font-bold text-green-500">R$ 18.240,00</p>
        </div>
      </div>
    </main>
  );
}
