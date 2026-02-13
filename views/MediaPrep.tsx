
import React, { useState } from 'react';

interface MediaPrepProps {
  onNext: () => void;
  onBack: () => void;
}

const MediaPrep: React.FC<MediaPrepProps> = ({ onNext, onBack }) => {
  const [justification, setJustification] = useState('');
  const [isSopExpanded, setIsSopExpanded] = useState(false);
  const [isAdditivesExpanded, setIsAdditivesExpanded] = useState(true);

  return (
    <div className="flex flex-col h-full bg-[#F3F6F9] font-['Inter']">
      {/* View Header - Standardized circular stepper */}
      <div className="bg-white px-8 py-4 shrink-0 border-b border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-black text-[#2D3E50] tracking-tight">Media Preparation</h2>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xs font-black">check</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black ring-4 ring-slate-100">2</div>
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center text-[10px] font-black">3</div>
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center text-[10px] font-black">4</div>
              
              <div className="ml-6 flex flex-col">
                <span className="text-[7px] font-black text-orange-500 uppercase tracking-[0.2em] leading-none">Active Phase</span>
                <span className="text-[9px] font-black text-[#2D3E50] uppercase tracking-wider">Powder & Solution Prep</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Batch Info Sub-Header */}
        <div className="flex items-center justify-between border-t border-slate-50 pt-4 pb-2">
          <div className="flex gap-10">
            <div className="space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Media Type</p>
              <p className="text-[11px] font-black text-[#2D3E50]">Tryptic Soy Agar (TSA)</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Batch ID</p>
              <p className="text-[11px] font-black text-[#2D3E50]">#B9920-TSA</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Intended Use</p>
              <p className="text-[11px] font-black text-[#2D3E50]">Environmental Monitoring</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">SOP Reference</p>
              <p className="text-[11px] font-black text-[#2D3E50]">SOP-QC-MP-042 v3.1</p>
            </div>
            <button className="bg-[#2D3E50] text-white w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-xs">description</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto space-y-6">
        {/* SOP Target Specification Section - Collapsible */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
          <div 
            className="px-6 py-3 flex justify-between items-center border-b border-slate-50 bg-slate-50/30 cursor-pointer hover:bg-slate-50 transition-colors"
            onClick={() => setIsSopExpanded(!isSopExpanded)}
          >
            <div className="flex items-center gap-2">
              <span className={`material-symbols-outlined text-slate-400 text-lg transition-transform duration-300 ${isSopExpanded ? 'rotate-180' : ''}`}>
                expand_more
              </span>
              <h3 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em]">View SOP Target Specification</h3>
            </div>
            <span className="text-[9px] font-bold text-slate-400 uppercase border border-slate-200 px-2 py-0.5 rounded">Ref: SOP-QC-MP-042</span>
          </div>
          {isSopExpanded && (
            <div className="p-6 grid grid-cols-4 gap-8 animate-in slide-in-from-top-2 duration-300">
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Powder Target</p>
                <p className="text-lg font-black text-slate-800">40.00 g <span className="text-[10px] text-slate-400">±0.01</span></p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Solvent Volume</p>
                <p className="text-lg font-black text-slate-800">1000 mL</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Target pH</p>
                <p className="text-lg font-black text-slate-800">7.3 ± 0.2</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Materials</p>
                <p className="text-[10px] font-bold text-slate-600">TSA, DI Water, Tween 80</p>
              </div>
            </div>
          )}
        </div>

        {/* 01 Media Powder Selection */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-3">
             <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">01</div>
             <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Media Powder Selection</h3>
          </div>
          <div className="p-6 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Batch</label>
                <div className="relative">
                  <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none appearance-none">
                    <option>TSA-POWDER-2026-X</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">expand_more</span>
                </div>
                <div className="flex items-center gap-4 text-[8px] font-bold text-slate-400 uppercase">
                  <span>Expiry: 12-NOV-2027</span>
                  <span>Stock: <span className="text-red-500">4,800.00 G</span></span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Lot</label>
                <div className="relative">
                  <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none appearance-none">
                    <option>LOT-MP-7822</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">expand_more</span>
                </div>
                <div className="flex items-center gap-1.5 text-[8px] font-black text-emerald-500 uppercase">
                  <span className="material-symbols-outlined text-[10px]">verified</span>
                  QC Status: Released
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
               <div className="bg-[#FBFDFB] border border-emerald-100 rounded-2xl p-6 relative group overflow-hidden">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Quantity Taken (GMS) *</label>
                  <div className="flex items-center justify-between">
                     <span className="text-4xl font-black text-slate-800">40.05</span>
                     <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <span className="material-symbols-outlined text-sm font-black">check</span>
                     </div>
                  </div>
                  <p className="text-[9px] text-slate-300 italic mt-4 font-medium uppercase tracking-tight">Accuracy: Metrological Class II</p>
                  <div className="absolute -bottom-4 -right-4 text-emerald-500/5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-8xl">balance</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 02 Solution / Solvent Selection */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-3">
             <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">02</div>
             <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Solution / Solvent Selection</h3>
          </div>
          <div className="p-6 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7 space-y-6">
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Batch</label>
                <div className="relative">
                  <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none appearance-none">
                    <option>DI-WATER-BATCH-004</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">expand_more</span>
                </div>
                <div className="flex items-center gap-4 text-[8px] font-bold text-slate-400 uppercase">
                  <span>Utility: <span className="text-slate-600 font-black">DEIONIZED WATER</span></span>
                  <span>Available: <span className="text-orange-500 font-black">BULK UTILITY</span></span>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Lot</label>
                <div className="relative">
                  <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none appearance-none">
                    <option>WTR-L-004</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">expand_more</span>
                </div>
                <div className="flex items-center gap-1.5 text-[8px] font-black text-emerald-500 uppercase">
                  <span className="material-symbols-outlined text-[10px]">water_drop</span>
                  Conductivity: PASS
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
               <div className="bg-[#FBFDFB] border border-emerald-100 rounded-2xl p-6 relative group overflow-hidden">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4">Quantity Taken (ML) *</label>
                  <div className="flex items-center justify-between">
                     <span className="text-4xl font-black text-slate-800">1000</span>
                     <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <span className="material-symbols-outlined text-sm font-black">check</span>
                     </div>
                  </div>
                  <p className="text-[9px] text-slate-300 italic mt-4 font-medium uppercase tracking-tight">Dispensed via Calibrated Volumetric Cylinder</p>
                  <div className="absolute -bottom-4 -right-4 text-emerald-500/5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-8xl">precision_manufacturing</span>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* 03 Optional Additives & Reagents - Collapsible */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-300">
          <div 
            className="px-6 py-3 border-b border-slate-100 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
            onClick={() => setIsAdditivesExpanded(!isAdditivesExpanded)}
          >
             <div className="flex items-center gap-3">
               <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">03</div>
               <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Optional Additives & Reagents</h3>
             </div>
             <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isAdditivesExpanded ? '' : 'rotate-180'}`}>
                expand_less
             </span>
          </div>
          {isAdditivesExpanded && (
            <div className="animate-in slide-in-from-top-2 duration-300">
              <table className="w-full text-left">
                <thead className="bg-[#2D3E50] text-white text-[9px] font-black uppercase tracking-widest">
                  <tr>
                    <th className="px-6 py-3">Component</th>
                    <th className="px-6 py-3">Batch</th>
                    <th className="px-6 py-3">Lot Number</th>
                    <th className="px-6 py-3">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3">
                      <input type="text" placeholder="Search component..." className="w-full px-4 py-2 bg-white border border-slate-200 rounded text-xs outline-none" />
                    </td>
                    <td className="px-4 py-3">
                      <select className="w-full px-4 py-2 bg-white border border-slate-200 rounded text-xs outline-none">
                        <option>Select Batch</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <select className="w-full px-4 py-2 bg-white border border-slate-200 rounded text-xs outline-none">
                        <option>Select Lot</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <input type="number" placeholder="0.00" className="w-24 px-4 py-2 bg-white border border-slate-200 rounded text-xs outline-none text-right" />
                        <span className="text-[10px] font-black text-slate-400">ML</span>
                        <button className="material-symbols-outlined text-slate-300 text-lg hover:text-red-500">cancel</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-6">
                <button className="flex items-center gap-2 px-6 py-2.5 border-2 border-orange-500 text-orange-500 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-orange-50 transition-all">
                  <span className="material-symbols-outlined text-sm font-black">add_circle</span>
                  Add Component
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 04 Process Parameters */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-3">
             <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">04</div>
             <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Process Parameters</h3>
          </div>
          <div className="p-8 space-y-10">
            <div className="grid grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Start Time</label>
                <div className="relative group">
                  <input type="text" defaultValue="14:50" className="w-full px-4 py-2 bg-[#F9FAFB] border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none focus:border-orange-500" />
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 text-sm">schedule</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">End Time</label>
                <div className="relative group">
                  <input type="text" placeholder="--:--" className="w-full px-4 py-2 bg-[#F9FAFB] border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none focus:border-orange-500" />
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 text-sm">schedule</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Stirring (Min)</label>
                <input type="number" defaultValue={15} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none focus:border-orange-500" />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Agitation (RPM)</label>
                <input type="number" defaultValue={300} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none focus:border-orange-500" />
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8 items-stretch">
               <div className="col-span-12 lg:col-span-4 flex flex-col items-center justify-center p-8 bg-slate-50 border border-slate-100 rounded-2xl">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">Final Observed PH Recording</p>
                  <div className="bg-white border-2 border-slate-200 rounded-2xl px-12 py-6 text-center">
                    <span className="text-5xl font-black text-[#2D3E50]">7.2</span>
                  </div>
                  <p className="text-[8px] font-bold text-slate-400 uppercase mt-4">Target: 7.3 ± 0.2 @ 25°C</p>
               </div>
               <div className="col-span-12 lg:col-span-8 flex flex-col">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2">Process Remarks</label>
                  <textarea 
                    placeholder="Enter any technical observations..." 
                    className="flex-1 w-full bg-[#F9FAFB] border border-slate-200 rounded-2xl p-6 text-xs font-medium text-slate-600 outline-none focus:border-orange-500 resize-none"
                  ></textarea>
               </div>
            </div>
          </div>
        </div>

        {/* Deviation and SOP Guidelines Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-[#FFF1F1] border border-red-200 rounded-2xl p-8 relative">
              <div className="flex items-center gap-4 text-red-600 mb-4">
                 <span className="material-symbols-outlined font-black">report_problem</span>
                 <h4 className="text-[10px] font-black uppercase tracking-widest">Deviation Alert</h4>
              </div>
              <p className="text-xs font-bold text-red-800 mb-6 leading-relaxed">
                Powder weight (40.05g) is +0.05g above target. Please document justification below.
              </p>
              <textarea 
                value={justification}
                onChange={(e) => setJustification(e.target.value)}
                placeholder="Reason for deviation..."
                className="w-full bg-white border border-red-100 rounded-xl p-4 text-[10px] font-medium text-slate-600 outline-none min-h-[60px] resize-none"
              ></textarea>
           </div>
           <div className="bg-[#EEF6FF] border border-blue-100 rounded-2xl p-8 flex items-start gap-5">
              <span className="material-symbols-outlined text-blue-500 text-xl font-black mt-1">info</span>
              <div>
                <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3">SOP Guideline</h4>
                <p className="text-xs font-medium text-blue-800 leading-relaxed italic">
                  "Add powder gradually under continuous agitation to prevent clumping. Ensure pH is verified at room temperature."
                </p>
              </div>
           </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-white border-t border-slate-200 px-10 py-6 flex items-center justify-between shrink-0 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 px-8 py-3.5 text-[11px] font-black text-slate-500 uppercase tracking-widest border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Batch
        </button>
        
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-500 font-black">verified_user</span>
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Compliance Status</span>
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">Secure Entry Mode Active</span>
            </div>
          </div>
          <button className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500 transition-colors">Discard Draft</button>
          <button 
            onClick={onNext}
            className="bg-[#FF7043] text-white flex items-center gap-4 px-12 py-4 rounded-2xl shadow-xl shadow-orange-500/20 font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
          >
            Proceed to Sterilization
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaPrep;
