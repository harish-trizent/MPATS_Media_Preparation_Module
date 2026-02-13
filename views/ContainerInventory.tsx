
import React from 'react';

interface ContainerInventoryProps {
  onAddLot?: () => void;
  onReconcile?: () => void;
  onViewContainer: (id: string) => void;
}

const ContainerInventory: React.FC<ContainerInventoryProps> = ({ onAddLot, onReconcile, onViewContainer }) => {
  const containers = [
    { 
      id: 'LOT-90-TSA-01',
      name: 'Petri Dish', 
      spec: '90mm, Vented', 
      type: 'SINGLE-USE', 
      typeColor: 'bg-slate-100 text-slate-500',
      status: 'STERILE - AVAILABLE', 
      statusColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      date: '2026-02-01 09:15',
      icon: 'radio_button_unchecked',
      iconBg: 'bg-orange-50 text-orange-400'
    },
    { 
      id: 'LOT-FL-500-B',
      name: 'Flask (Erlenmeyer)', 
      spec: '500ml, Wide Neck', 
      type: 'REUSABLE', 
      typeColor: 'bg-orange-50 text-orange-400',
      status: 'IN STERILIZATION', 
      statusColor: 'bg-blue-50 text-blue-600 border-blue-100',
      date: 'In progress...',
      icon: 'experiment',
      iconBg: 'bg-orange-50 text-orange-400'
    },
    { 
      id: 'LOT-TT-16-Z',
      name: 'Test Tube', 
      spec: '16x150mm, ID: TT-882', 
      type: 'REUSABLE', 
      typeColor: 'bg-orange-50 text-orange-400',
      status: 'IN USE', 
      statusColor: 'bg-amber-50 text-amber-600 border-amber-100',
      date: '2026-01-28 14:20',
      icon: 'reorder',
      iconBg: 'bg-orange-50 text-orange-400'
    },
    { 
      id: 'LOT-BT-1000-X',
      name: 'Media Bottle', 
      spec: '1000ml, Graduated', 
      type: 'REUSABLE', 
      typeColor: 'bg-orange-50 text-orange-400',
      status: 'BLOCKED / DAMAGED', 
      statusColor: 'bg-red-50 text-red-600 border-red-100',
      date: '2026-01-15 11:30',
      icon: 'timeline',
      iconBg: 'bg-red-50 text-red-400'
    },
  ];

  return (
    <div className="p-8 max-w-full animate-in fade-in duration-500 bg-[#F8FAFC] min-h-screen font-['Inter']">
      {/* View Header */}
      <div className="flex justify-between items-start mb-10">
        <div>
          <h2 className="text-2xl font-black text-[#2D3E50] tracking-tight mb-1 uppercase">Media Container Inventory</h2>
          <p className="text-sm text-slate-400 font-medium ml-0">Real-time lifecycle tracking of laboratory glassware and media containers</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={onReconcile}
            className="bg-white text-slate-700 border border-slate-200 flex items-center gap-2 px-4 py-2.5 rounded font-bold text-xs uppercase tracking-wide hover:bg-slate-50 transition-all"
          >
            <span className="material-symbols-outlined text-sm">reorder</span> Reconcile Count
          </button>
          <button 
            onClick={onAddLot}
            className="bg-[#FF7043] text-white flex items-center gap-2 px-6 py-2.5 rounded shadow-lg shadow-orange-500/20 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined">add_box</span>
            Add Container Lot
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'AVAILABLE (STERILE)', val: '8,420', sub: 'READY FOR PREP', icon: 'check_circle', color: 'border-l-emerald-500', iconColor: 'text-emerald-500' },
          { label: 'IN STERILIZATION', val: '1,245', sub: 'ACTIVE CYCLES', icon: 'change_circle', color: 'border-l-blue-500', iconColor: 'text-blue-500' },
          { label: 'IN USE', val: '2,785', sub: 'DISTRIBUTED', icon: 'biotech', color: 'border-l-amber-500', iconColor: 'text-amber-500' },
          { label: 'BLOCKED / DAMAGED', val: '56', sub: 'QUARANTINED', icon: 'warning', color: 'border-l-red-500', iconColor: 'text-red-500' },
        ].map((kpi, i) => (
          <div key={i} className={`bg-white p-6 rounded-2xl border border-slate-100 border-l-4 ${kpi.color} shadow-sm flex justify-between items-start hover:shadow-md transition-shadow`}>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">{kpi.label}</p>
              <div className="flex flex-col gap-1">
                <span className="text-4xl font-black text-slate-800 tracking-tight">{kpi.val}</span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{kpi.sub}</p>
              </div>
            </div>
            <span className={`material-symbols-outlined ${kpi.iconColor} text-2xl font-medium`}>{kpi.icon}</span>
          </div>
        ))}
      </div>

      {/* Filter and Table Container */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
          <div className="relative flex-1 max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search by container ID, type, or lot #..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#FF7043]/10 focus:border-[#FF7043] outline-none transition-all"
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase text-slate-600 hover:bg-slate-50 transition-all">Filter</button>
            <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-black uppercase text-slate-600 hover:bg-slate-50 transition-all">Export</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#2D3E50] text-white">
              <tr className="text-[10px] font-black uppercase tracking-widest">
                <th className="px-8 py-5">CONTAINER & LOT IDENTIFIER</th>
                <th className="px-8 py-5">USAGE TYPE</th>
                <th className="px-8 py-5">LIFECYCLE STATUS</th>
                <th className="px-8 py-5 text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {containers.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 ${row.iconBg} rounded-2xl flex items-center justify-center`}>
                        <span className="material-symbols-outlined text-2xl">{row.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{row.name}</span>
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Lot: {row.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest ${row.typeColor}`}>
                      {row.type}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`px-4 py-1.5 rounded-lg text-[10px] font-black border ${row.statusColor}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button 
                      onClick={() => onViewContainer(row.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2D3E50] text-white rounded font-black text-[9px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-sm ml-auto"
                    >
                      <span className="material-symbols-outlined text-[14px]">visibility</span>
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 4 of 124 records</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-[#2D3E50] text-white rounded text-[10px] font-bold">1</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold text-slate-400">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerInventory;
