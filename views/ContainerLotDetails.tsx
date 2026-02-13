
import React from 'react';

interface ContainerLotDetailsProps {
  lotId: string;
  onBack: () => void;
}

const ContainerLotDetails: React.FC<ContainerLotDetailsProps> = ({ lotId, onBack }) => {
  const distributionData = [
    {
      unitId: 'CONT-UNIT-4820-A',
      usageCount: 12,
      maxUsage: 50,
      lastSterilization: 'Jan 28, 2026',
      currentStatus: 'STERILE',
      statusColor: 'text-emerald-500',
      condition: 'EXCELLENT'
    },
    {
      unitId: 'CONT-UNIT-4820-B',
      usageCount: 48,
      maxUsage: 50,
      lastSterilization: 'Jan 15, 2026',
      currentStatus: 'NEAR RETIREMENT',
      statusColor: 'text-orange-500',
      condition: 'MINOR SCRATCHES'
    },
    {
      unitId: 'CONT-UNIT-4820-C',
      usageCount: 0,
      maxUsage: 1,
      lastSterilization: 'Feb 01, 2026',
      currentStatus: 'NEW / UNUSED',
      statusColor: 'text-blue-500',
      condition: 'PRISTINE'
    }
  ];

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500 font-['Inter']">
      {/* Top Summary Header Bar */}
      <div className="px-12 py-8 bg-white flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-16 flex-1">
          {/* Container Name */}
          <div className="space-y-1.5 border-r border-slate-100 pr-12">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Container Batch Name</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 text-xl font-bold">radio_button_unchecked</span>
              <span className="text-xl font-black text-[#2D3E50] tracking-tight">{lotId || 'LOT-90-TSA-01'}</span>
            </div>
          </div>
          
          {/* Manufacturer */}
          <div className="space-y-1.5 border-r border-slate-100 pr-12">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Manufacturer Name</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 text-xl font-bold">corporate_fare</span>
              <span className="text-xl font-black text-[#2D3E50] tracking-tight">Corning Glass Works</span>
            </div>
          </div>

          {/* Mfg Date */}
          <div className="space-y-1.5 border-r border-slate-100 pr-12">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Manufacture Date</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 text-xl font-bold">calendar_today</span>
              <span className="text-xl font-black text-[#2D3E50] tracking-tight">Oct 10, 2024</span>
            </div>
          </div>

          {/* Expiry / Retirement */}
          <div className="space-y-1.5 pr-12">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Retirement Date</p>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-red-500 text-xl font-bold">event_busy</span>
              <span className="text-xl font-black text-red-500 tracking-tight">Oct 10, 2026</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full border border-blue-100 text-[10px] font-black uppercase tracking-wider">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
            Batch Sterile
          </span>
          <button onClick={onBack} className="text-slate-400 hover:text-[#2D3E50] transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      <div className="p-12">
        {/* Detailed Distribution Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 flex justify-between items-center border-b border-slate-50 bg-[#FBFDFE]">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-orange-500 font-bold">view_cozy</span>
              <h3 className="text-base font-black text-[#2D3E50] tracking-tight uppercase">Container Batch Unit Distribution</h3>
            </div>
            <span className="text-[11px] font-bold text-slate-300 italic">Last Usage Trace: Today 11:20 AM</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#F8FAFC] text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <tr>
                  <th className="px-10 py-5">Unit Identifier</th>
                  <th className="px-10 py-5">Usage Lifecycle</th>
                  <th className="px-10 py-5">Last Sterilization</th>
                  <th className="px-10 py-5 text-right">Operational Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {distributionData.map((unit, i) => {
                  const usagePercentage = (unit.usageCount / unit.maxUsage) * 100;
                  return (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-10 py-8">
                        <span className="text-base font-black text-[#2D3E50] tracking-tight">{unit.unitId}</span>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-4 w-64">
                          <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full transition-all duration-1000 ${usagePercentage > 80 ? 'bg-orange-500' : 'bg-emerald-500'}`}
                              style={{ width: `${usagePercentage}%` }}
                            ></div>
                          </div>
                          <span className="text-[11px] font-black text-slate-400 tracking-widest">{unit.usageCount}/{unit.maxUsage}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8">
                        <div className="flex items-center gap-3 px-4 py-2 bg-white border border-slate-200 rounded-lg w-fit shadow-sm">
                          <span className="material-symbols-outlined text-orange-500 text-sm">calendar_today</span>
                          <span className="text-[11px] font-black text-slate-700">{unit.lastSterilization}</span>
                        </div>
                      </td>
                      <td className="px-10 py-8 text-right">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${unit.statusColor}`}>
                          {unit.currentStatus}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Actions */}
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
               <span className="material-symbols-outlined text-sm">qr_code</span>
               Print Unit Tags
             </button>
             <button className="px-8 py-3.5 bg-[#FF7043] text-white rounded-xl text-[11px] font-black uppercase tracking-widest hover:brightness-110 shadow-lg shadow-orange-500/20 transition-all flex items-center gap-3">
               <span className="material-symbols-outlined text-sm">history</span>
               View Audit Trail
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerLotDetails;
