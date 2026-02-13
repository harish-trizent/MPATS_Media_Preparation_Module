import React from 'react';

interface ReconcileBatchesListProps {
  onSelectBatch: (id: string) => void;
}

const ReconcileBatchesList: React.FC<ReconcileBatchesListProps> = ({ onSelectBatch }) => {
  const reconciliationJobs = [
    { id: 'MB-260202-TSA', type: 'TSA (Tryptic Soy Agar)', status: 'Pending', operator: 'P Shyam Kumar', date: '02 Feb 2026', variance: '-' },
    { id: 'MB-250128-SDA', type: 'SDA (Sabouraud Dextrose)', status: 'Completed', operator: 'Sarah Miller', date: '28 Jan 2026', variance: '0.8%' },
    { id: 'MB-250120-MAC', type: 'MacConkey Agar', status: 'Completed', operator: 'Sarah Miller', date: '20 Jan 2026', variance: '1.2%' },
    { id: 'MB-250115-BA', type: 'Blood Agar', status: 'Flagged', operator: 'James Chen', date: '15 Jan 2026', variance: '5.4%' },
  ];

  return (
    <div className="p-8 max-w-full animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-[#FF7043] p-2 bg-orange-50 rounded-lg">fact_check</span>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Media Batch Reconciliation</h2>
          </div>
          <p className="text-sm text-slate-500 ml-12">Accountability management for material consumption and unit yields across all production batches.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Awaiting Reconciliation</p>
          <p className="text-3xl font-black text-[#FF7043]">04</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Batches pending sign-off</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Avg. Batch Variance</p>
          <p className="text-3xl font-black text-emerald-500">1.4%</p>
          <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Within SOP tolerance (±5%)</p>
        </div>
        <div className="bg-[#2D3E50] p-6 rounded-xl text-white shadow-lg">
          <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2">Total Reconciled YTD</p>
          <p className="text-3xl font-black">1,284</p>
          <p className="text-[10px] text-white/40 font-bold uppercase mt-1">Traceable GMP Records</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Active Batch Ledger</h3>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[10px] font-black uppercase text-slate-500 hover:bg-white">Filter Status</button>
            <button className="px-4 py-1.5 border border-slate-200 rounded-lg text-[10px] font-black uppercase text-slate-500 hover:bg-white">Export Log</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#2D3E50] text-white text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-5">Batch ID</th>
                <th className="px-6 py-5">Media Type</th>
                <th className="px-6 py-5">Operator</th>
                <th className="px-6 py-5">Date</th>
                <th className="px-6 py-5">Variance</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {reconciliationJobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <span className="font-black text-slate-800 text-sm">{job.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-slate-600">{job.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-slate-500">{job.operator}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-mono text-slate-400">{job.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-black ${job.variance === '-' ? 'text-slate-300' : parseFloat(job.variance) > 5 ? 'text-red-500' : 'text-emerald-500'}`}>
                      {job.variance}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase border ${
                      job.status === 'Completed' ? 'text-green-600 bg-green-50 border-green-200' :
                      job.status === 'Flagged' ? 'text-red-600 bg-red-50 border-red-200' :
                      'text-[#FF7043] bg-orange-50 border-orange-200'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => onSelectBatch(job.id)}
                      className="px-4 py-1.5 bg-[#FF7043] text-white text-[9px] font-black uppercase rounded shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-105"
                    >
                      {job.status === 'Completed' ? 'View Details' : 'Execute Recon'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReconcileBatchesList;
