export default function CriativosPage() {
  const criativos = [
    { id: 1, nome: "Criativo 01 - Método RIC", hook: "Forte", cpa: "R$ 12,50", status: "Escalando" },
    { id: 2, nome: "Vidal Paula Valio - Gancho 02", hook: "Médio", cpa: "R$ 45,00", status: "Atenção" },
  ];

  return (
    <main className="p-8 bg-black min-h-screen text-white font-sans">
      <h1 className="text-3xl font-bold mb-8 border-b border-zinc-800 pb-4">Gestão de Criativos (Hooks)</h1>
      
      <div className="grid grid-cols-1 gap-4">
        {criativos.map((item) => (
          <div key={item.id} className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 flex justify-between items-center">
            <div>
              <p className="font-bold text-lg">{item.nome}</p>
              <p className="text-zinc-500 text-sm">Hook Analisado: <span className="text-red-500">{item.hook}</span></p>
            </div>
            <div className="text-right">
              <p className="text-sm uppercase text-zinc-500 tracking-tighter">CPA Real</p>
              <p className={`font-bold ${item.id === 1 ? 'text-green-500' : 'text-red-500'}`}>{item.cpa}</p>
              <span className="text-[10px] bg-zinc-800 px-2 py-1 rounded uppercase">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-8 w-full py-4 bg-red-600 hover:bg-red-700 rounded-xl font-bold transition-all">
        + Subir Novo Criativo Estratégico
      </button>
    </main>
  );
}
