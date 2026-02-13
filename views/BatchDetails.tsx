import React from 'react';

interface BatchDetailsProps {
  batchId: string;
  onBack: () => void;
}

const BatchDetails: React.FC<BatchDetailsProps> = ({ batchId, onBack }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 pb-20 animate-in fade-in duration-500">
      {/* Header */}
      <div className="max-w-7xl mx-auto flex justify-between items-start mb-10 border-b border-gray-200 pb-6">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Batch {batchId || 'MB-260116-TSA-482'}</h1>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-black uppercase rounded-md border border-emerald-200">Released</span>
          </div>
          <div className="flex gap-6 text-sm">
            <div className="flex gap-2">
              <span className="font-bold text-slate-400">Media Type:</span>
              <span className="text-slate-600 font-medium">Tryptic Soy Agar (TSA)</span>
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex gap-2">
              <span className="font-bold text-slate-400">Intended Use:</span>
              <span className="text-slate-600 font-medium">General Purpose Culture</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 text-[11px] font-black uppercase rounded-lg hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to List
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 text-[11px] font-black uppercase rounded-lg hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined text-sm">history</span>
            Audit Log
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        {/* Main Content Sections */}
        <div className="col-span-12 lg:col-span-9 space-y-8">
          
          {/* Section 1: Batch Creation */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 bg-[#2D3E50] text-white flex items-center justify-center rounded font-black text-sm">1</span>
                <h3 className="text-sm font-black text-[#2D3E50] uppercase tracking-wider">Batch Creation Information</h3>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Last Modified: Jan 16, 2026 08:30 AM</span>
            </div>
            <div className="p-8 grid grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Lead Technician</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-black text-slate-500 text-xs">SM</div>
                  <span className="text-sm font-bold text-slate-700">Sarah Miller (8842)</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Timestamp</p>
                <p className="text-sm font-black text-slate-800 font-mono">16 Jan 2026 | 08:15:22</p>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Initial Remarks</p>
                <p className="text-xs text-slate-500 italic bg-slate-50 p-3 rounded-lg border border-slate-100 leading-relaxed">
                  "Standard batch for weekly stock. New hydration system calibrated this morning."
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Preparation Data */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 flex items-center gap-3 border-b border-slate-100">
              <span className="w-8 h-8 bg-[#2D3E50] text-white flex items-center justify-center rounded font-black text-sm">2</span>
              <h3 className="text-sm font-black text-[#2D3E50] uppercase tracking-wider">Preparation Data</h3>
            </div>
            <div className="p-0">
              <table className="w-full text-left">
                <thead className="bg-slate-50/50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                  <tr>
                    <th className="px-8 py-4">Component</th>
                    <th className="px-8 py-4 text-center">Target Value</th>
                    <th className="px-8 py-4 text-center">Actual Value</th>
                    <th className="px-8 py-4 text-center">Variance</th>
                    <th className="px-8 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-700 text-sm">Dry Media (Casein Digest)</td>
                    <td className="px-8 py-5 text-center text-slate-400 font-medium">15.000 kg</td>
                    <td className="px-8 py-5 text-center text-slate-800 font-black">15.002 kg</td>
                    <td className="px-8 py-5 text-center text-emerald-500 font-black">+0.01%</td>
                    <td className="px-8 py-5 text-right"><span className="material-symbols-outlined text-emerald-500">check_circle</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-700 text-sm">Deionized Water</td>
                    <td className="px-8 py-5 text-center text-slate-400 font-medium">500.00 L</td>
                    <td className="px-8 py-5 text-center text-slate-800 font-black">500.05 L</td>
                    <td className="px-8 py-5 text-center text-emerald-500 font-black">+0.01%</td>
                    <td className="px-8 py-5 text-right"><span className="material-symbols-outlined text-emerald-500">check_circle</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: Sterilization Record */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 flex items-center gap-3 border-b border-slate-100">
              <span className="w-8 h-8 bg-[#2D3E50] text-white flex items-center justify-center rounded font-black text-sm">3</span>
              <h3 className="text-sm font-black text-[#2D3E50] uppercase tracking-wider">Sterilization Record</h3>
            </div>
            <div className="p-8 grid grid-cols-4 gap-6">
              {[
                { label: 'Autoclave ID', val: 'AC-404-B' },
                { label: 'Cycle Type', val: 'Standard Media' },
                { label: 'Sterilization Temp', val: '121.1°C' },
                { label: 'Hold Time', val: '15 mins' },
              ].map((item, i) => (
                <div key={i} className="bg-slate-50/50 p-4 rounded-xl border border-slate-100 flex flex-col gap-1">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                  <p className="text-sm font-black text-slate-800 uppercase tracking-tight">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 & 5: Combined Row */}
          <div className="grid grid-cols-2 gap-8">
            {/* Section 4: Dispensing */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 flex items-center gap-3 border-b border-slate-100">
                <span className="w-8 h-8 bg-[#2D3E50] text-white flex items-center justify-center rounded font-black text-sm">4</span>
                <h3 className="text-sm font-black text-[#2D3E50] uppercase tracking-wider">Dispensing Summary</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">Container Type</span>
                  <span className="font-black text-slate-700 uppercase">90mm Petri Dish</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">Total Yield</span>
                  <span className="font-black text-slate-700 uppercase">482 Units</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-bold uppercase tracking-widest text-[9px]">Recorded Waste</span>
                  <span className="font-black text-red-500 uppercase">18 Units</span>
                </div>
              </div>
            </div>

            {/* Section 5: Fine Tuning */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 flex items-center gap-3 border-b border-slate-100">
                <span className="w-8 h-8 bg-[#2D3E50] text-white flex items-center justify-center rounded font-black text-sm">5</span>
                <h3 className="text-sm font-black text-[#2D3E50] uppercase tracking-wider">Fine-Tuning</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="bg-orange-50/50 border border-orange-100 p-3 rounded-lg">
                   <p className="text-[8px] font-black text-orange-400 uppercase tracking-widest mb-1">Additive Lot</p>
                   <div className="flex justify-between items-baseline">
                      <span className="text-xs font-black text-slate-800">Sheep Blood (5%)</span>
                      <span className="text-[10px] font-mono font-bold text-slate-400">DSB-00219</span>
                   </div>
                </div>
                <div className="flex justify-between items-baseline">
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Final pH</span>
                   <span className="text-lg font-black text-emerald-600">7.34 pH</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Validation & Quality Release */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 flex items-center gap-3 border-b border-slate-100">
              <span className="w-8 h-8 bg-[#2D3E50] text-white flex items-center justify-center rounded font-black text-sm">6</span>
              <h3 className="text-sm font-black text-[#2D3E50] uppercase tracking-wider">Validation & Quality Release</h3>
            </div>
            <div className="p-8 grid grid-cols-2 gap-12">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Quality Compliance</p>
                <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-xl flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                      <span className="text-xs font-bold text-slate-700 leading-tight">Sterility Check (7 days / 35°C)</span>
                   </div>
                   <span className="px-2 py-0.5 bg-emerald-500 text-white text-[9px] font-black uppercase rounded tracking-widest">Pass</span>
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Digital Signatures</p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 relative overflow-hidden group">
                   <div className="relative z-10">
                      <div className="flex justify-between items-center mb-4">
                         <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm text-slate-400">verified</span>
                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Released By</span>
                         </div>
                         <span className="text-[8px] font-mono text-slate-300">ID: QA-SEC-4201</span>
                      </div>
                      <p className="text-xl font-black italic text-slate-800 font-serif border-b border-slate-200 pb-2 mb-2">Robert D. Vance</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase">Jan 23, 2026 14:12 PM | Electronic Stamp</p>
                   </div>
                   <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-slate-200/50 text-8xl pointer-events-none transition-transform group-hover:scale-110">shield_with_heart</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="col-span-12 lg:col-span-3 space-y-8">
          
          {/* Progress Timeline */}
          <div className="bg-[#2D3E50] rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 space-y-6">
               <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <span className="material-symbols-outlined text-orange-400">route</span>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Process Steps</h4>
               </div>
               <div className="space-y-4">
                 {[
                   { label: 'Batch Creation', status: 'completed', active: true },
                   { label: 'Preparation', status: 'completed' },
                   { label: 'Sterilization', status: 'completed' },
                   { label: 'Dispensing', status: 'completed' },
                   { label: 'Fine-Tuning', status: 'completed' },
                   { label: 'Validation', status: 'completed' },
                 ].map((step, i) => (
                   <div key={i} className="flex items-center justify-between group cursor-default">
                      <div className="flex items-center gap-3">
                         <span className="text-[11px] font-black text-white/30">{i+1}.</span>
                         <span className={`text-[11px] font-black uppercase tracking-wider ${step.active ? 'text-orange-400' : 'text-white/60'}`}>{step.label}</span>
                      </div>
                      <span className="material-symbols-outlined text-emerald-400 text-lg">check_circle</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-3">Batch Statistics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                 <span className="text-[10px] font-bold text-slate-500 uppercase">Efficiency</span>
                 <span className="text-xs font-black text-slate-800 tracking-tight">98.4%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500 w-[98.4%]"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                 <div className="bg-slate-50 p-3 rounded-lg text-center">
                    <p className="text-[8px] font-black text-slate-400 uppercase mb-1">Total Units</p>
                    <p className="text-xl font-black text-slate-800 uppercase tracking-tight">482</p>
                 </div>
                 <div className="bg-red-50 p-3 rounded-lg text-center">
                    <p className="text-[8px] font-black text-red-400 uppercase mb-1">Waste KG</p>
                    <p className="text-xl font-black text-red-500 uppercase tracking-tight">0.45</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Supportive SOPs */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-3">Supportive SOPs</h4>
            <div className="space-y-3">
               <button className="w-full flex items-center gap-3 p-2 hover:bg-slate-50 transition-all group rounded-lg">
                  <span className="material-symbols-outlined text-orange-400 text-lg group-hover:scale-110 transition-transform">description</span>
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">SOP-MED-042: Prep TSA</span>
               </button>
               <button className="w-full flex items-center gap-3 p-2 hover:bg-slate-50 transition-all group rounded-lg">
                  <span className="material-symbols-outlined text-orange-400 text-lg group-hover:scale-110 transition-transform">description</span>
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-widest">SOP-QC-109: pH Testing</span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
