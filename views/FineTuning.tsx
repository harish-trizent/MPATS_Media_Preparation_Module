
import React, { useState } from 'react';

interface Supplement {
  id: string;
  component: string;
  batch: string;
  lot: string;
  quantity: string;
}

interface FineTuningProps {
  onNext: () => void;
  onBack: () => void;
}

const FineTuning: React.FC<FineTuningProps> = ({ onNext, onBack }) => {
  const [phVerified, setPhVerified] = useState(false);
  const [visualClear, setVisualClear] = useState(false);
  const [supplements, setSupplements] = useState<Supplement[]>([
    { id: '1', component: '', batch: '', lot: '', quantity: '' }
  ]);

  const addComponent = () => {
    setSupplements([
      ...supplements,
      { id: Math.random().toString(36).substr(2, 9), component: '', batch: '', lot: '', quantity: '' }
    ]);
  };

  const removeComponent = (id: string) => {
    setSupplements(supplements.filter(s => s.id !== id));
  };

  const updateSupplement = (id: string, field: keyof Supplement, value: string) => {
    setSupplements(supplements.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  return (
    <div className="flex flex-col h-full bg-[#F3F6F9] font-['Inter']">
      {/* View Header - Standardized circular stepper */}
      <div className="bg-white border-b border-slate-200 px-8 py-4 shrink-0 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-black text-[#2D3E50] tracking-tight">Process Fine Tuning</h2>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xs font-black">check</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xs font-black">check</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xs font-black">check</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black ring-4 ring-slate-100">4</div>
              
              <div className="ml-6 flex flex-col">
                <span className="text-[7px] font-black text-orange-500 uppercase tracking-[0.2em] leading-none">Active Phase</span>
                <span className="text-[9px] font-black text-[#2D3E50] uppercase tracking-wider">Final Verification & Audit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto flex-1 overflow-y-auto space-y-6 animate-in fade-in duration-500">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9 space-y-8">
            
            {/* 01 Final Solidification Audit */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
               <div className="bg-[#2D3E50] px-6 py-4 flex justify-between items-center">
                 <div className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-md bg-white/20 text-white flex items-center justify-center text-[10px] font-black">01</div>
                   <h3 className="text-xs font-black text-white uppercase tracking-widest">Final Solidification Audit</h3>
                 </div>
                 <span className="text-[10px] font-bold text-white/50 italic">Batch: MB-260202-X</span>
               </div>
               <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                   <div className="space-y-3">
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Final pH Check (Solid State)</p>
                     <div className="flex gap-4">
                        <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                          <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Reading</p>
                          <p className="text-2xl font-black text-[#2D3E50]">7.25</p>
                        </div>
                        <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                          <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Target</p>
                          <p className="text-2xl font-black text-emerald-600">7.3 ± 0.2</p>
                        </div>
                     </div>
                     <button 
                      onClick={() => setPhVerified(!phVerified)}
                      className={`w-full py-3 rounded-lg text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${phVerified ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                     >
                       {phVerified ? <span className="material-symbols-outlined text-sm">check_circle</span> : null}
                       {phVerified ? 'Verified Within Range' : 'Verify pH Calibration'}
                     </button>
                   </div>
                 </div>

                 <div className="space-y-6">
                   <div className="space-y-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Media Appearance</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: 'Color Match', icon: 'palette' },
                          { label: 'No Bubbles', icon: 'blur_off' },
                          { label: 'Homogeneous', icon: 'texture' },
                          { label: 'Solid Surface', icon: 'square' }
                        ].map((attr, i) => (
                          <div key={i} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                             <span className="material-symbols-outlined text-sm text-slate-400">{attr.icon}</span>
                             <span className="text-[10px] font-bold text-slate-700">{attr.label}</span>
                          </div>
                        ))}
                      </div>
                      <button 
                        onClick={() => setVisualClear(!visualClear)}
                        className={`w-full py-3 rounded-lg text-[10px] font-black uppercase transition-all flex items-center justify-center gap-2 ${visualClear ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                      >
                        {visualClear ? <span className="material-symbols-outlined text-sm">visibility</span> : null}
                        {visualClear ? 'Visual Standards Met' : 'Certify Visual Clarity'}
                      </button>
                   </div>
                 </div>
               </div>
            </div>

            {/* 02 OPTIONAL ADDITIVES & REAGENTS - Matching screenshot exactly */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
               <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black uppercase">02</div>
                   <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Optional Additives & Reagents</h3>
                 </div>
                 <span className="material-symbols-outlined text-slate-400 text-lg">expand_less</span>
               </div>
               
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead className="bg-[#2D3E50] text-white text-[9px] font-black uppercase tracking-widest">
                     <tr>
                       <th className="px-6 py-3.5 w-1/3">Component</th>
                       <th className="px-6 py-3.5">Batch</th>
                       <th className="px-6 py-3.5">Lot Number</th>
                       <th className="px-6 py-3.5 text-right">Quantity</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-slate-100">
                     {supplements.map((s, idx) => (
                       <tr key={s.id} className="hover:bg-slate-50/50">
                         <td className="px-6 py-4">
                           <input 
                             type="text" 
                             placeholder="Search component..." 
                             value={s.component}
                             onChange={(e) => updateSupplement(s.id, 'component', e.target.value)}
                             className="w-full px-4 py-2 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 focus:border-[#FF7043] focus:ring-1 focus:ring-[#FF7043]/10 outline-none" 
                           />
                         </td>
                         <td className="px-6 py-4">
                           <div className="relative">
                             <select 
                               value={s.batch}
                               onChange={(e) => updateSupplement(s.id, 'batch', e.target.value)}
                               className="w-full px-4 py-2 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 focus:border-[#FF7043] focus:ring-1 focus:ring-[#FF7043]/10 outline-none appearance-none cursor-pointer"
                             >
                               <option value="">Select Batch</option>
                               <option value="B-001">B-001</option>
                               <option value="B-002">B-002</option>
                             </select>
                             <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none text-sm">expand_more</span>
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <div className="relative">
                             <select 
                               value={s.lot}
                               onChange={(e) => updateSupplement(s.id, 'lot', e.target.value)}
                               className="w-full px-4 py-2 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 focus:border-[#FF7043] focus:ring-1 focus:ring-[#FF7043]/10 outline-none appearance-none cursor-pointer"
                             >
                               <option value="">Select Lot</option>
                               <option value="L-992">L-992</option>
                             </select>
                             <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none text-sm">expand_more</span>
                           </div>
                         </td>
                         <td className="px-6 py-4">
                           <div className="flex items-center justify-end gap-3">
                             <input 
                               type="text" 
                               placeholder="0.00" 
                               value={s.quantity}
                               onChange={(e) => updateSupplement(s.id, 'quantity', e.target.value)}
                               className="w-20 px-3 py-2 bg-white border border-slate-200 rounded text-xs font-black text-slate-800 text-center focus:border-[#FF7043] focus:ring-1 focus:ring-[#FF7043]/10 outline-none" 
                             />
                             <span className="text-[10px] font-black text-slate-400 uppercase">ML</span>
                             <button 
                               onClick={() => removeComponent(s.id)}
                               className="material-symbols-outlined text-slate-200 hover:text-red-500 transition-colors text-lg"
                             >cancel</button>
                           </div>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>

               <div className="p-6">
                 <button 
                   onClick={addComponent}
                   className="flex items-center gap-2 px-6 py-2.5 bg-white border-2 border-orange-500 rounded-lg text-[10px] font-black text-orange-600 uppercase tracking-widest hover:bg-orange-50 transition-all shadow-sm active:scale-95"
                 >
                   <span className="material-symbols-outlined text-sm font-black">add_circle</span>
                   Add Component
                 </button>
               </div>
            </div>

            {/* 03 Retained Sample Reference */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col md:flex-row gap-8 items-center">
               <div className="w-full md:w-32 h-32 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-200 border-dashed group hover:border-orange-500 transition-colors cursor-pointer">
                 <span className="material-symbols-outlined text-4xl text-slate-300 group-hover:text-orange-500">add_a_photo</span>
               </div>
               <div className="flex-1 space-y-2">
                  <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest">Retained Sample Reference</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">Please capture a macro photograph of a randomly selected plate from the batch to serve as the visual quality benchmark in the final release certificate.</p>
                  <div className="flex gap-4 pt-2">
                     <span className="text-[9px] font-black text-orange-500 uppercase tracking-widest">SOP-QC-72 Attachment Required</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-3 space-y-6">
             <div className="bg-[#2D3E50] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-40">Prep Completion Stats</h4>
                <div className="space-y-6 relative z-10">
                   <div className="flex justify-between items-end">
                      <span className="text-[9px] font-black uppercase text-white/40">Total Preparation Time</span>
                      <span className="text-xl font-black">2.4 Hours</span>
                   </div>
                   <div className="flex justify-between items-end">
                      <span className="text-[9px] font-black uppercase text-white/40">Waste Percentage</span>
                      <span className="text-xl font-black text-emerald-400">1.2%</span>
                   </div>
                   <div className="flex justify-between items-end">
                      <span className="text-[9px] font-black uppercase text-white/40">Energy Consumption</span>
                      <span className="text-xl font-black">12.5 kWh</span>
                   </div>
                </div>
                <div className="absolute -bottom-6 -left-6 text-white/5">
                  <span className="material-symbols-outlined text-9xl">analytics</span>
                </div>
             </div>

             <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                <div className="flex items-center gap-2 mb-4 text-orange-700">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Release Readiness</span>
                </div>
                <p className="text-[11px] text-orange-900 leading-relaxed">
                  By clicking proceed, you are certifying that this batch has been visually inspected and is physically ready for Final Quality Review.
                </p>
             </div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-white border border-gray-200 p-6 rounded-xl shadow-lg sticky bottom-6 mt-10">
          <button onClick={onBack} className="px-6 py-2.5 rounded border border-slate-200 text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">Back to Dispensing</button>
          <button 
            onClick={onNext}
            disabled={!phVerified || !visualClear}
            className="bg-[#FF7043] text-white flex items-center gap-3 px-12 py-3 rounded shadow-lg shadow-orange-500/20 font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all disabled:opacity-50"
          >
            Proceed to Final Quality Review
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FineTuning;
