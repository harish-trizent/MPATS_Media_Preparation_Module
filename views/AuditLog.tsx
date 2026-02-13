
import React from 'react';

const AuditLog: React.FC = () => {
  const logs = [
    { ts: '16 Jan 2026 | 08:30:45', user: 'Sarah Miller (8842)', step: 'Batch Creation', act: 'Modification', field: 'Initial Remarks', old: '-', new: 'Standard batch...', reason: 'Initial entry' },
    { ts: '23 Jan 2026 | 14:12:05', user: 'Robert D. Vance (4201)', step: 'Quality Release', act: 'Approval', field: 'Release Status', old: 'Pending', new: 'RELEASED', reason: 'All QC criteria met' },
    { ts: '16 Jan 2026 | 11:22:18', user: 'Sarah Miller (8842)', step: 'Preparation', act: 'Modification', field: 'Actual Weight', old: '0.000g', new: '15.002 kg', reason: 'Scale data capture' },
    { ts: '16 Jan 2026 | 13:45:10', user: 'James Chen (9122)', step: 'Sterilization', act: 'Modification', field: 'Temperature', old: '-', new: '121.1°C', reason: 'Sensor sync' },
  ];

  return (
    <div className="p-8 max-w-full">
       <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight uppercase">System Audit Trail</h2>
          <p className="text-sm text-slate-500">Chronological record of all system events, modifications, and quality releases.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#2D3E50] text-white text-xs font-bold rounded uppercase tracking-wider hover:brightness-110">
            <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 text-xs font-bold rounded uppercase tracking-wider hover:bg-slate-50">
            <span className="material-symbols-outlined text-sm">description</span>
            Export CSV
          </button>
        </div>
      </div>

      <div className="bg-white p-4 border border-gray-200 flex flex-col md:flex-row gap-4 items-center mb-6 shadow-sm rounded-lg">
        <div className="flex-1 relative w-full">
           <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
           <input className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded text-sm focus:ring-2 focus:ring-[#FF7043]/20" placeholder="Search by Field, User, or Step..." />
        </div>
        <select className="rounded border-gray-200 text-xs font-bold text-slate-500 uppercase tracking-widest focus:ring-[#FF7043]">
          <option>All Action Types</option>
          <option>Modification</option>
          <option>Approval</option>
          <option>Deletion</option>
        </select>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#2D3E50] text-white text-[9px] font-black uppercase tracking-[0.2em]">
              <tr>
                <th className="px-4 py-4">Timestamp</th>
                <th className="px-4 py-4">User (ID)</th>
                <th className="px-4 py-4">Process Step</th>
                <th className="px-4 py-4">Action</th>
                <th className="px-4 py-4">Field</th>
                <th className="px-4 py-4">Old Value</th>
                <th className="px-4 py-4">New Value</th>
                <th className="px-4 py-4">Reason</th>
              </tr>
            </thead>
            <tbody className="text-[11px] divide-y divide-gray-100">
              {logs.map((log, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-4 text-slate-400 font-mono">{log.ts}</td>
                  <td className="px-4 py-4 font-bold text-slate-700">{log.user}</td>
                  <td className="px-4 py-4 text-slate-500 font-medium">{log.step}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase ${
                      log.act === 'Approval' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                    }`}>{log.act}</span>
                  </td>
                  <td className="px-4 py-4 font-medium text-slate-700">{log.field}</td>
                  <td className="px-4 py-4 text-slate-400">{log.old}</td>
                  <td className="px-4 py-4 font-bold text-slate-800">{log.new}</td>
                  <td className="px-4 py-4 italic text-slate-500">{log.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center">
           <span className="text-[10px] font-bold text-slate-400">Showing 4 of 1,284 entries</span>
           <div className="flex gap-2">
             <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-bold text-slate-400 disabled:opacity-50">Prev</button>
             <button className="px-3 py-1 bg-[#2D3E50] text-white rounded text-[10px] font-bold">1</button>
             <button className="px-3 py-1 border border-slate-200 rounded text-[10px] font-bold text-slate-400">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AuditLog;
