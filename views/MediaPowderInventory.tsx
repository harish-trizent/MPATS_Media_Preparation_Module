
import React, { useState } from 'react';

interface MediaPowderInventoryProps {
  onLogShipment?: () => void;
  onReconcile?: () => void;
  onViewLot: (lotId: string) => void;
}

const MediaPowderInventory: React.FC<MediaPowderInventoryProps> = ({ onLogShipment, onReconcile, onViewLot }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const inventoryItems = [
    { name: 'Tryptic Soy Agar (TSA)', sku: 'TSA-00451-B', batch: 'LOT-2023-X1', stock: 12500, unit: 'gms', mf: 'Thermo Fisher', expiry: '2026-05-12', storage: '2-8°C', status: 'Optimal' },
    { name: 'Sabouraud Dextrose Agar (SDA)', sku: 'SDA-9982-M', batch: 'LOT-2023-A2', stock: 400, unit: 'gms', mf: 'Merck', expiry: '2026-02-15', storage: 'Room Temp', status: 'Critical' },
    { name: 'MacConkey Agar', sku: 'MAC-8802-C', batch: 'LOT-2024-B9', stock: 8200, unit: 'gms', mf: 'BD Diagnostics', expiry: '2027-11-20', storage: '2-8°C', status: 'Optimal' },
    { name: 'Mueller-Hinton Agar', sku: 'MHA-7711-D', batch: 'LOT-2024-C3', stock: 1500, unit: 'gms', mf: 'HiMedia', expiry: '2026-01-05', status: 'Near Expiry', storage: 'Room Temp' },
  ];

  return (
    <div className="p-8 max-w-full animate-in fade-in duration-500">
      <div className="flex justify-between items-start mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-[#FF7043] p-2 bg-orange-50 rounded-lg">inventory_2</span>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Media Powder Inventory</h2>
          </div>
          <p className="text-sm text-slate-500 ml-12">Centralized tracking of dehydrated media substrates and active lot management.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={onReconcile}
            className="bg-white text-slate-700 border border-slate-200 flex items-center gap-2 px-4 py-2.5 rounded font-bold text-xs uppercase tracking-wide hover:bg-slate-50 transition-all"
          >
            <span className="material-symbols-outlined text-sm">rebase_edit</span> Reconcile Stock
          </button>
          <button 
            onClick={onLogShipment}
            className="bg-[#FF7043] text-white flex items-center gap-2 px-6 py-2.5 rounded shadow-lg shadow-orange-500/20 font-bold text-sm uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined">add_box</span> Log New Shipment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Available (GMS)', val: '22,600', color: 'bg-green-100 text-green-700', icon: 'check_circle', trend: '+5% vs last month' },
          { label: 'Near Expiry', val: '08', color: 'bg-amber-100 text-amber-700', icon: 'schedule', trend: 'Requires attention' },
          { label: 'Expired', val: '03', color: 'bg-red-100 text-red-700', icon: 'report', trend: 'Awaiting disposal' },
          { label: 'QC Pending', val: '12', color: 'bg-orange-100 text-orange-700', icon: 'science', trend: 'In quarantine' },
        ].map((box, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-1 hover:border-[#FF7043] transition-colors group">
            <div className="flex justify-between items-start">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{box.label}</p>
              <span className={`material-symbols-outlined text-sm ${box.color.split(' ')[1]}`}>{box.icon}</span>
            </div>
            <p className="text-2xl font-black text-slate-800">{box.val}</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase">{box.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-fit">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">filter_alt</span>
              Advanced Filters
            </h3>
            <div className="space-y-6">
              {/* Media Type Filter */}
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Media Type</p>
                <select className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-2 text-xs font-bold text-slate-700 transition-all outline-none bg-white">
                  <option>All Media Types</option>
                  <option>Tryptic Soy Agar (TSA)</option>
                  <option>Sabouraud Dextrose Agar (SDA)</option>
                  <option>MacConkey Agar</option>
                  <option>Mueller-Hinton Agar</option>
                </select>
              </div>
              
              {/* Manufacturer Filter */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Manufacturer</p>
                <select className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-2 text-xs font-bold text-slate-700 transition-all outline-none bg-white">
                  <option>All Manufacturers</option>
                  <option>Thermo Fisher</option>
                  <option>Merck</option>
                  <option>BD Diagnostics</option>
                  <option>HiMedia</option>
                </select>
              </div>

              {/* Expiry Date Filter */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Expiry Date Range</p>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">From Date</span>
                    <input type="date" className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-2 text-xs font-bold text-slate-700 outline-none" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight block">To Date</span>
                    <input type="date" className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-2 text-xs font-bold text-slate-700 outline-none" />
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button className="w-full py-2 bg-slate-100 text-slate-500 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all">
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-[#2D3E50] p-6 rounded-xl text-white shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3 text-orange-400">
                  <span className="material-symbols-outlined text-sm">notifications_active</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Urgent Procurement</span>
                </div>
                <p className="text-xs font-medium text-slate-300 mb-4 leading-relaxed">
                  <span className="text-white font-bold uppercase">SDA Powder</span> stock is at <span className="text-red-400 font-black">400g</span>. This is below the 7-day safety threshold.
                </p>
                <button className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all">Create Requisition</button>
             </div>
             <div className="absolute -bottom-4 -right-4 text-white/5">
                <span className="material-symbols-outlined text-8xl">shopping_cart</span>
             </div>
          </div>
        </aside>

        <div className="col-span-12 lg:col-span-9 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-gray-50/50 border-b border-gray-100 flex items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input 
                type="text" 
                placeholder="Search by lot number, media name, or manufacturer..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-[#FF7043]/20 focus:border-[#FF7043] transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-400">
                <span className="material-symbols-outlined text-sm">view_list</span>
              </button>
              <button className="p-2 hover:bg-white rounded-lg transition-colors text-slate-400">
                <span className="material-symbols-outlined text-sm">grid_view</span>
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#2D3E50] text-white">
                <tr className="text-[10px] font-black uppercase tracking-widest">
                  <th className="px-6 py-5">Media & Lot Detail</th>
                  <th className="px-6 py-5">Storage</th>
                  <th className="px-6 py-5">Stock Level</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Expiry</th>
                  <th className="px-6 py-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inventoryItems.map((item, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-sm">{item.name}</span>
                        <div className="flex items-center gap-2 mt-0.5">
                           <span className="text-[10px] text-slate-400 font-mono">Lot: {item.batch}</span>
                           <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                           <span className="text-[10px] text-slate-400 uppercase font-bold">{item.mf}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${item.storage === '2-8°C' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'}`}>
                         {item.storage}
                       </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-700 text-sm">{item.stock.toLocaleString()} {item.unit}</span>
                        <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${item.status === 'Critical' ? 'bg-red-500 w-[15%]' : 'bg-emerald-500 w-[80%]'}`}></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase border ${
                        item.status === 'Optimal' ? 'text-green-600 bg-green-50 border-green-200' :
                        item.status === 'Critical' ? 'text-red-600 bg-red-50 border-red-200' :
                        'text-amber-600 bg-amber-50 border-amber-200'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                       <div className="flex flex-col">
                         <span className="text-xs font-bold text-slate-700">{item.expiry}</span>
                         <span className="text-[9px] text-slate-400 font-medium">Auto-lock on date</span>
                       </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end items-center gap-2">
                        <button 
                          onClick={() => onViewLot(item.batch)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2D3E50] text-white rounded font-black text-[9px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-sm"
                        >
                          <span className="material-symbols-outlined text-[14px]">visibility</span>
                          View
                        </button>
                        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="p-1.5 text-slate-400 hover:text-[#FF7043] transition-colors rounded hover:bg-white border border-transparent hover:border-slate-100 shadow-sm" title="View Logs"><span className="material-symbols-outlined text-sm">history</span></button>
                          <button className="p-1.5 text-slate-400 hover:text-[#FF7043] transition-colors rounded hover:bg-white border border-transparent hover:border-slate-100 shadow-sm" title="Edit Item"><span className="material-symbols-outlined text-sm">edit_square</span></button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-auto p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 4 of 28 unique media types</span>
            <div className="flex items-center gap-4">
               <div className="flex gap-1">
                 {[1, 2, 3].map(p => (
                   <button key={p} className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all ${p === 1 ? 'bg-[#FF7043] text-white' : 'text-slate-400 hover:bg-white'}`}>{p}</button>
                 ))}
               </div>
               <button className="flex items-center gap-1 text-[10px] font-black uppercase text-slate-500 hover:text-[#FF7043] transition-colors">
                 Next <span className="material-symbols-outlined text-sm">chevron_right</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaPowderInventory;
