
import React from 'react';

interface MediaLotDetailsProps {
  lotId: string;
  onBack: () => void;
}

const MediaLotDetails: React.FC<MediaLotDetailsProps> = ({ lotId, onBack }) => {
  const distributionData = [
    {
      name: 'TSA-B-PRIMARY-001',
      stockLevel: 75,
      availableStock: 450,
      firstOpenedDate: 'Nov 01, 2023',
      shelfLife: '11 Months',
      shelfLifeStatus: 'OPTIMAL',
      shelfLifeStatusColor: 'text-emerald-500'
    },
    {
      name: 'TSA-B-RESERVE-002',
      stockLevel: 15,
      availableStock: 90,
      firstOpenedDate: null, // NOT OPENED
      shelfLife: '12 Months',
      shelfLifeStatus: 'FULL DURATION',
      shelfLifeStatusColor: 'text-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500 font-['Inter']">
      {/* Top Summary Header Bar */}
      <div className="px-12 py-8 bg-white flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-16 flex-1">
          {/* Batch Name */}
          <div className="space-y-1.5 border-r border-slate-100 pr-12">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Media Batch Name</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 text-xl font-bold">inventory_2</span>
              <span className="text-xl font-black text-[#2D3E50] tracking-tight">{lotId || 'BATCH-QA-992'}</span>
            </div>
          </div>
          
          {/* Manufacturer */}
          <div className="space-y-1.5 border-r border-slate-100 pr-12">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Manufacturer Name</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 text-xl font-bold">corporate_fare</span>
              <span className="text-xl font-black text-[#2D3E50] tracking-tight">PharmaSolutions Int.</span>
            </div>
          </div>

          {/* Mfg Date */}
          <div className="space-y-1.5 border-r border-slate-100 pr-12">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Manufacture Date</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 text-xl font-bold">calendar_today</span>
              <span className="text-xl font-black text-[#2D3E50] tracking-tight">Oct 12, 2023</span>
            </div>
          </div>

          {/* Expiry Date */}
          <div className="space-y-1.5 pr-12">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Expiry Date</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-red-500 text-xl font-bold">event_busy</span>
              <span className="text-xl font-black text-red-500 tracking-tight">Oct 12, 2024</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full border border-emerald-100 text-[10px] font-black uppercase tracking-wider">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            Active
          </span>
          <button onClick={onBack} className="text-slate-400 hover:text-[#2D3E50] transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <div className="p-12">
        {/* Detailed Distribution Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 flex justify-between items-center border-b border-slate-50 bg-[#FBFDFE]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 font-bold">list_alt</span>
              <h3 className="text-base font-black text-[#2D3E50] tracking-tight">Media Lot Detailed Distribution</h3>
            </div>
            <span className="text-[11px] font-bold text-slate-300 italic">Last Sync: Today 10:45 AM</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#F8FAFC] text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <tr>
                  <th className="px-10 py-5">Lot Name</th>
                  <th className="px-10 py-5">Stock Level</th>
                  <th className="px-10 py-5">Available Stock</th>
                  <th className="px-10 py-5">First Opened Date</th>
                  <th className="px-10 py-5 text-right">Shelf Life</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {distributionData.map((lot, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-10 py-8">
                      <span className="text-base font-black text-[#2D3E50] tracking-tight">{lot.name}</span>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-center gap-4 w-64">
                        <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#FF7043] rounded-full transition-all duration-1000"
                            style={{ width: `${lot.stockLevel}%` }}
                          ></div>
                        </div>
                        <span className="text-[11px] font-black text-orange-400 tracking-widest">{lot.stockLevel}%</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-2xl font-black ${lot.availableStock < 100 ? 'text-red-500' : 'text-[#2D3E50]'}`}>
                          {lot.availableStock}
                        </span>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Units</span>
                      </div>
                    </td>
                    <td className="px-10 py-8">
                      {lot.firstOpenedDate ? (
                        <div className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-lg w-fit shadow-sm">
                          <span className="material-symbols-outlined text-orange-500 text-sm">calendar_today</span>
                          <span className="text-[11px] font-black text-slate-700">{lot.firstOpenedDate}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg w-fit">
                          <span className="material-symbols-outlined text-slate-300 text-sm">lock</span>
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Not Opened</span>
                        </div>
                      )}
                    </td>
                    <td className="px-10 py-8 text-right">
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-sm font-black text-slate-700 tracking-tight">{lot.shelfLife}</span>
                        <span className={`text-[9px] font-black uppercase tracking-widest ${lot.shelfLifeStatusColor}`}>
                          {lot.shelfLifeStatus}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="mt-12 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-3 px-8 py-3.5 text-[11px] font-black text-slate-500 uppercase tracking-widest border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Inventory
          </button>
          <div className="flex gap-4">
             <button className="px-8 py-3.5 bg-[#2D3E50] text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:brightness-110 shadow-lg shadow-slate-200 transition-all flex items-center gap-3">
               <span className="material-symbols-outlined text-sm">print</span>
               Print Label Set
             </button>
             <button className="px-8 py-3.5 bg-[#FF7043] text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:brightness-110 shadow-lg shadow-orange-500/20 transition-all flex items-center gap-3">
               <span className="material-symbols-outlined text-sm">history</span>
               View Audit History
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLotDetails;
