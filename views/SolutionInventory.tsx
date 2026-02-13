
import React from 'react';

interface SolutionInventoryProps {
  onAddSolution?: () => void;
  onReconcile?: () => void;
  onViewSolution: (id: string) => void;
}

const SolutionInventory: React.FC<SolutionInventoryProps> = ({ onAddSolution, onReconcile, onViewSolution }) => {
  const inventoryData = [
    { 
      name: 'Tween 80', 
      ref: 'SLN-T80-A',
      type: 'Neutralizer', 
      lot: 'MFR-8829-X', 
      usageStatus: 'AVAILABLE', 
      qcStatus: 'Approved',
      qcIcon: 'check_circle',
      qty: '325 mL', 
      storage: '2-8°C',
      storageColor: 'bg-blue-50 text-blue-600 border-blue-100',
      expiry: '12 Dec 2026',
      isCritical: false
    },
    { 
      name: 'Lecithin Powder', 
      ref: 'SLN-LEC-250',
      type: 'Supplement', 
      lot: 'LCT-0012-Y', 
      usageStatus: 'BLOCKED', 
      qcStatus: 'QC Pending',
      qcIcon: 'hourglass_empty',
      qty: '1,000 g', 
      storage: '15-25°C',
      storageColor: 'bg-orange-50 text-orange-600 border-orange-100',
      expiry: '15 Oct 2026',
      isCritical: false
    },
    { 
      name: 'Ampicillin Stock', 
      ref: 'ADD-AMP-V',
      type: 'Additives', 
      lot: 'AMP-V-229', 
      usageStatus: 'EXPIRED', 
      qcStatus: 'Rejected',
      qcIcon: 'cancel',
      qty: '40 mL', 
      storage: '-20°C',
      storageColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
      expiry: '30 Jan 2026',
      isCritical: true
    },
    { 
      name: 'Peptone Water', 
      ref: 'SLN-PW-500',
      type: 'Neutralizer', 
      lot: 'PW-4410-Z', 
      usageStatus: 'AVAILABLE', 
      qcStatus: 'Approved',
      qcIcon: 'check_circle',
      qty: '500 mL', 
      storage: '2-8°C',
      storageColor: 'bg-blue-50 text-blue-600 border-blue-100',
      expiry: '05 Mar 2027',
      isCritical: false
    },
  ];

  return (
    <div className="p-8 max-w-full animate-in fade-in duration-500 bg-[#F8FAFC] min-h-screen">
      {/* Header section with Actions */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-[#FF7043] p-2 bg-orange-50 rounded-lg">water_drop</span>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Solution & Reagent Inventory</h2>
          </div>
          <p className="text-sm text-slate-500 ml-12">Traceable management of buffers, diluents, and enrichment solutions used in production.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={onReconcile}
            className="bg-white text-slate-700 border border-slate-200 flex items-center gap-2 px-4 py-2.5 rounded font-bold text-xs uppercase tracking-wide hover:bg-slate-50 transition-all"
          >
            <span className="material-symbols-outlined text-sm">balance</span> Reconcile Reagents
          </button>
          <button 
            onClick={onAddSolution}
            className="bg-[#FF7043] text-white flex items-center gap-2 px-6 py-2.5 rounded shadow-lg shadow-orange-500/20 font-bold text-sm uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined">science</span> Add New Media Solution
          </button>
        </div>
      </div>

      {/* KPI Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm flex justify-between items-start group hover:shadow-md transition-shadow">
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Available for Use</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-slate-800">184</span>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">QC Approved / Non-Expired</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-emerald-500 text-2xl font-medium">check_circle</span>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm flex justify-between items-start group hover:shadow-md transition-shadow">
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Expiring &lt; 30 Days</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-slate-800">14</span>
              <p className="text-[10px] font-black text-amber-500 uppercase tracking-tighter">Action Required</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-amber-500 text-2xl font-medium">warning</span>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-sm flex justify-between items-start group hover:shadow-md transition-shadow">
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Blocked</p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-black text-slate-800">27</span>
              <p className="text-[10px] font-black text-red-500 uppercase tracking-tighter">Pending / Rejected / Expired</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-red-500 text-2xl font-medium">block</span>
        </div>
      </div>

      {/* Search and Filter section */}
      <div className="bg-white p-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 mb-8">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input 
            type="text" 
            placeholder="Search by Item, Lot #..."
            className="w-full pl-12 pr-4 py-3 bg-transparent border-none text-sm focus:ring-0 placeholder:text-slate-400 font-medium"
          />
        </div>
        <div className="h-8 w-px bg-slate-100 mx-2"></div>
        <div className="flex gap-3 pr-2">
          <select className="bg-[#F8FAFC] border border-slate-200 rounded-lg py-2.5 px-4 text-xs font-bold text-slate-600 outline-none focus:ring-0 appearance-none min-w-[120px]">
            <option>Status: All</option>
            <option>Released</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
          <select className="bg-white border-2 border-[#FF7043] rounded-lg py-2.5 px-4 text-xs font-bold text-slate-700 outline-none focus:ring-0 appearance-none min-w-[120px]">
            <option>Type: All</option>
            <option>Buffer</option>
            <option>Reagent</option>
            <option>Stain</option>
          </select>
        </div>
      </div>

      {/* Re-designed Table Area */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#1e293b] text-white">
              <tr className="text-[10px] font-black uppercase tracking-widest">
                <th className="px-6 py-4">ITEM NAME</th>
                <th className="px-6 py-4">TYPE</th>
                <th className="px-6 py-4">LOT #</th>
                <th className="px-6 py-4">USAGE STATUS</th>
                <th className="px-6 py-4">QC STATUS</th>
                <th className="px-6 py-4">CURRENT QTY</th>
                <th className="px-6 py-4">STORAGE REQUIREMENT</th>
                <th className="px-6 py-4">EXPIRY DATE</th>
                <th className="px-6 py-4 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inventoryData.map((item, i) => (
                <tr key={i} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-black text-slate-800 text-sm">{item.name}</span>
                      <span className="text-[10px] text-slate-400 font-bold mt-0.5">Ref: {item.ref}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium text-slate-500">{item.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-black tracking-tight ${item.isCritical ? 'text-red-500' : 'text-slate-700'}`}>
                      {item.lot}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 w-fit px-3 py-1 rounded-full border text-[10px] font-black ${
                      item.usageStatus === 'AVAILABLE' ? 'bg-green-50 text-green-600 border-green-200' :
                      item.usageStatus === 'BLOCKED' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                      'bg-red-50 text-red-600 border-red-200'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${
                        item.usageStatus === 'AVAILABLE' ? 'bg-green-600' :
                        item.usageStatus === 'BLOCKED' ? 'bg-amber-600' :
                        'bg-red-600'
                      }`} />
                      {item.usageStatus}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-2 text-[11px] font-bold ${
                      item.qcStatus === 'Approved' ? 'text-green-600' :
                      item.qcStatus === 'QC Pending' ? 'text-amber-600' :
                      'text-red-600'
                    }`}>
                      <span className="material-symbols-outlined text-sm">{item.qcIcon}</span>
                      {item.qcStatus}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-black ${item.isCritical ? 'text-red-500' : 'text-slate-800'}`}>
                      {item.qty}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-black border ${item.storageColor}`}>
                      {item.storage}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-bold ${item.isCritical ? 'text-red-500' : 'text-slate-600'}`}>
                      {item.expiry}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => onViewSolution(item.lot)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2D3E50] text-white rounded font-black text-[9px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[14px]">visibility</span>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-6 bg-slate-50 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
             <span>Total Items: {inventoryData.length}</span>
             <span className="w-1 h-1 rounded-full bg-slate-300"></span>
             <span>GMP Compliance Status: Verified</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-white border border-gray-200 rounded-lg text-[10px] font-black uppercase text-slate-600 hover:bg-slate-100 transition-all">Previous</button>
            <button className="px-4 py-1.5 bg-[#1e293b] text-white rounded-lg text-[10px] font-black uppercase shadow-sm">Next Page</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionInventory;
