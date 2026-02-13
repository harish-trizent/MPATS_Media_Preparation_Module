
import React from 'react';
import { Batch } from '../types';

interface BatchManagementProps {
  onNewBatch: () => void;
  onViewBatch: (id: string) => void;
}

const BatchManagement: React.FC<BatchManagementProps> = ({ onNewBatch, onViewBatch }) => {
  const batches: Batch[] = [
    { id: '#MB-2023-001', mediaType: 'SCDA (Soybean Casein)', status: 'Released', preparedBy: 'John Doe', dateCreated: '2023-10-24' },
    { id: '#MB-2023-005', mediaType: 'TSA (Tryptic Soy Agar)', status: 'In Preparation', preparedBy: 'Jane Smith', dateCreated: '2023-10-25' },
    { id: '#MB-2023-008', mediaType: 'SCDA (Soybean Casein)', status: 'Sterilizing', preparedBy: 'John Doe', dateCreated: '2023-10-25' },
    { id: '#MB-2023-012', mediaType: 'TSA (Tryptic Soy Agar)', status: 'Rejected', preparedBy: 'Alice Brown', dateCreated: '2023-10-24' },
  ];

  return (
    <div className="p-8 max-w-full animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Media Batch Management</h2>
          <p className="text-sm text-slate-500">Monitor and manage the preparation lifecycle of laboratory media batches.</p>
        </div>
        <button 
          onClick={onNewBatch}
          className="bg-[#FF7043] text-white flex items-center gap-2 px-6 py-2.5 rounded shadow-lg shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all font-black text-sm uppercase tracking-wide"
        >
          <span className="material-symbols-outlined text-lg">add</span>
          Create New Media Batch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Active Batches', value: '12', status: 'Preparation' },
          { label: 'In Sterilizer', value: '03', status: 'Busy' },
          { label: 'Success Rate', value: '98.4%', status: 'Optimal' },
          { label: 'Media Stock', value: '420kg', status: 'Steady' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-black text-slate-800">{stat.value}</span>
              <span className="text-[10px] font-bold bg-orange-50 text-[#FF7043] border border-orange-100 px-2 py-0.5 rounded uppercase">{stat.status}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 items-center bg-white">
          <div className="flex-1 relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded focus:ring-2 focus:ring-[#FF7043]/20 outline-none text-sm" 
              placeholder="Search Batch ID, Media Type..." 
              type="text" 
            />
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 bg-orange-100 text-[#FF7043] rounded-full text-[10px] font-black uppercase tracking-wider">In Preparation</button>
            <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-wider">Released</button>
            <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-wider">Sterilizing</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#2D3E50] text-white">
              <tr className="text-[11px] font-bold uppercase tracking-wider">
                <th className="px-6 py-5">Batch ID</th>
                <th className="px-6 py-5">Media Type</th>
                <th className="px-6 py-5">Status</th>
                <th className="px-6 py-5">Prepared By</th>
                <th className="px-6 py-5">Date Created</th>
                <th className="px-6 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {batches.map((batch) => (
                <tr key={batch.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 font-black text-slate-800 text-sm tracking-tight">{batch.id}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm font-medium">{batch.mediaType}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${
                      batch.status === 'Released' ? 'bg-green-100 text-green-700 border-green-200' :
                      batch.status === 'Rejected' ? 'bg-red-100 text-red-700 border-red-200' :
                      'bg-orange-100 text-[#FF7043] border-orange-200'
                    }`}>
                      {batch.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{batch.preparedBy}</td>
                  <td className="px-6 py-4 text-slate-400 font-mono text-xs">{batch.dateCreated}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => onViewBatch(batch.id)}
                        className="flex items-center gap-2 px-4 py-1.5 bg-slate-100 text-[#2D3E50] hover:bg-[#2D3E50] hover:text-white rounded-lg font-black text-[10px] uppercase tracking-widest transition-all shadow-sm"
                      >
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        View Details
                      </button>
                    </div>
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

export default BatchManagement;
