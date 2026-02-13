
import React, { useState } from 'react';

interface ReconciliationProps {
  onNext: () => void;
  onBack: () => void;
}

const Reconciliation: React.FC<ReconciliationProps> = ({ onNext, onBack }) => {
  const [reasons, setReasons] = useState<{ [key: string]: string }>({});
  const [isConfirming, setIsConfirming] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const resources = [
    { id: '1', res: 'TSA Media Powder (LOT-2023-X1)', plan: 40.00, act: 40.05, unit: 'g', impact: 'Sub-Optimal' },
    { id: '2', res: 'Petri Dish 90mm (LOT-PD-2024)', plan: 500, act: 502, unit: 'units', impact: '2 Rejected' },
    { id: '3', res: 'DI Water System (Prep-01)', plan: 1000, act: 1000, unit: 'mL', impact: 'Direct' },
  ];

  const handleReasonChange = (id: string, val: string) => {
    setReasons(prev => ({ ...prev, [id]: val }));
  };

  const handleFinalize = () => {
    if (isAgreed) {
      onNext();
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F3F6F9] font-['Inter']">
      {/* View Header - Standardized circular stepper */}
      <div className="bg-white border-b border-slate-200 px-8 py-4 shrink-0 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-black text-[#2D3E50] tracking-tight">Final Batch Reconciliation</h2>
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
                <span className="text-[9px] font-black text-[#2D3E50] uppercase tracking-wider">Inventory Accounting & Variance Audit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-7xl mx-auto flex-1 overflow-y-auto space-y-6 animate-in fade-in duration-500 relative pb-32">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Input Powder', val: '40.05 g', status: 'Accurate', icon: 'inventory_2' },
            { label: 'Target Vol', val: '1,000 mL', status: 'Matched', icon: 'water_drop' },
            { label: 'Produced Plates', val: '482', status: 'Units', icon: 'grid_view' },
            { label: 'Recon Result', val: '99.2%', status: 'Within Tolerance', icon: 'analytics', color: 'text-emerald-500' },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:shadow-lg transition-all">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.label}</span>
                <span className="material-symbols-outlined text-slate-300 text-lg">{item.icon}</span>
              </div>
              <p className={`text-3xl font-black ${item.color || 'text-slate-800'}`}>{item.val}</p>
              <span className="text-[9px] font-black uppercase bg-slate-100 text-slate-500 px-2 py-0.5 rounded w-fit">{item.status}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="px-6 py-4 bg-[#2D3E50] flex justify-between items-center">
                <h3 className="text-[10px] font-black text-white uppercase tracking-widest">Resource Consumption Ledger</h3>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[9px] font-bold text-white/50 uppercase">Inventory Links Active</span>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4">Resource</th>
                      <th className="px-6 py-4 text-center">Batch Plan</th>
                      <th className="px-6 py-4 text-center">Actual Used</th>
                      <th className="px-6 py-4 text-center">Impact</th>
                      <th className="px-6 py-4">Reason for Deviation</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-50">
                    {resources.map((row) => {
                      const hasDeviation = row.act !== row.plan;
                      return (
                        <tr key={row.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-slate-700">{row.res}</td>
                          <td className="px-6 py-4 text-center font-black text-slate-400">{row.plan}{row.unit}</td>
                          <td className="px-6 py-4 text-center font-black text-slate-800">{row.act}{row.unit}</td>
                          <td className="px-6 py-4 text-center">
                            <span className="text-[10px] font-black uppercase text-[#FF7043] bg-orange-50 px-2 py-0.5 rounded">{row.impact}</span>
                          </td>
                          <td className="px-6 py-4 min-w-[200px]">
                            <input 
                              type="text"
                              value={reasons[row.id] || ''}
                              onChange={(e) => handleReasonChange(row.id, e.target.value)}
                              disabled={!hasDeviation}
                              placeholder={hasDeviation ? "Required justification..." : "N/A"}
                              className={`w-full py-1.5 px-3 border rounded-lg text-xs font-bold transition-all ${
                                hasDeviation 
                                ? 'bg-white border-orange-200 focus:ring-orange-500 focus:border-orange-500 text-slate-800' 
                                : 'bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed'
                              }`}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
               <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-100">
                     <span className="material-symbols-outlined">rule</span>
                  </div>
                  <div>
                     <h4 className="text-xs font-black text-slate-800 uppercase tracking-tight">Yield Accuracy Audit</h4>
                     <p className="text-[10px] text-slate-400 font-bold uppercase">Comparing produced units vs substrate volume</p>
                  </div>
               </div>
               <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 flex justify-around items-center">
                  <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Theoretical Max</p>
                    <p className="text-4xl font-black text-slate-400 italic">500</p>
                  </div>
                  <div className="h-12 w-px bg-slate-200"></div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Final Actual</p>
                    <p className="text-4xl font-black text-[#2D3E50]">482</p>
                  </div>
                  <div className="h-12 w-px bg-slate-200"></div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2">Variance</p>
                    <p className="text-4xl font-black text-red-500">3.6%</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-6">
             <div className="bg-[#1a2531] text-white p-6 rounded-2xl shadow-xl relative overflow-hidden">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-40">Accountability Sign-off</h4>
                <div className="space-y-6 relative z-10">
                   <div className="space-y-2">
                     <label className="text-[9px] font-black uppercase text-white/40 block">Technician Verification</label>
                     <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3">
                        <span className="material-symbols-outlined text-white/50">draw</span>
                        <span className="text-[11px] font-bold">P Shyam Kumar</span>
                     </div>
                   </div>
                   <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
                      <p className="text-[10px] leading-tight text-orange-200 italic">"I certify that all materials used in Batch MB-260202-TSA have been accounted for and inventory records updated."</p>
                   </div>
                </div>
                <div className="absolute -bottom-6 -left-6 text-white/5 pointer-events-none">
                  <span className="material-symbols-outlined text-9xl">verified_user</span>
                </div>
             </div>

             <div className="bg-white border-2 border-[#FF7043] rounded-2xl shadow-lg p-6">
                <div className="flex items-center gap-2 mb-4 text-[#FF7043]">
                  <span className="material-symbols-outlined text-sm font-black">info</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Reconciliation Status</span>
                </div>
                <p className="text-xs font-bold text-slate-700 leading-relaxed mb-4">
                  Batch variance of <span className="text-[#FF7043]">3.6%</span> is within the permissible SOP threshold of <span className="text-slate-900 font-black">±5%</span>.
                </p>
                <div className="flex items-center gap-2 text-emerald-600">
                   <span className="material-symbols-outlined text-sm font-black">check_circle</span>
                   <span className="text-[10px] font-black uppercase tracking-widest">Ready for Final Quality Review</span>
                </div>
             </div>
          </div>
        </div>

        <div className="flex justify-between items-center bg-white border border-gray-200 p-6 rounded-2xl shadow-2xl sticky bottom-6 mt-10">
          <button 
            onClick={onBack} 
            className="px-8 py-3 rounded-lg font-black text-slate-400 text-xs uppercase tracking-widest hover:text-red-500 hover:bg-red-50 transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={() => setIsConfirming(true)}
            className="bg-[#FF7043] text-white flex items-center gap-3 px-16 py-4 rounded-xl shadow-xl shadow-orange-500/20 font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
          >
            Final Batch Reconciliation
            <span className="material-symbols-outlined text-xl">fact_check</span>
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isConfirming && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="px-8 py-6 flex items-center justify-between border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-orange-600 font-bold">verified_user</span>
                </div>
                <h3 className="text-lg font-black text-slate-800 tracking-tight">Confirm Final Batch Reconciliation</h3>
              </div>
              <button onClick={() => setIsConfirming(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              {/* Yield Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#f9fafa] p-4 rounded-xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Theoretical Yield</p>
                  <p className="text-xl font-black text-slate-800">50 <span className="text-xs font-bold text-slate-400">Units</span></p>
                </div>
                <div className="bg-[#f9fafa] p-4 rounded-xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Actual Yield</p>
                  <p className="text-xl font-black text-slate-800">48 <span className="text-xs font-bold text-slate-400">Units</span></p>
                </div>
                <div className="bg-[#f9fafa] p-4 rounded-xl border border-slate-100">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Losses/Rejections</p>
                  <p className="text-xl font-black text-slate-800">2 <span className="text-xs font-bold text-slate-400">Units</span></p>
                </div>
                <div className="bg-[#f1fef5] p-4 rounded-xl border border-emerald-100 flex flex-col justify-between">
                  <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest mb-1">Reconciliation Variance</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-black text-emerald-700">0%</p>
                    <span className="text-[8px] font-black uppercase px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full tracking-wider">Balanced</span>
                  </div>
                </div>
              </div>

              {/* Warning Box */}
              <div className="bg-[#fffbf0] border border-amber-100 p-4 rounded-2xl flex gap-3 items-start">
                <span className="material-symbols-outlined text-amber-600 text-xl">warning</span>
                <p className="text-[11px] font-bold text-amber-800 leading-relaxed">
                  This action is irreversible. Once submitted, the batch record will be locked and finalized for quality release.
                </p>
              </div>

              {/* Confirmation Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5">
                  <input 
                    type="checkbox" 
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                    className="w-5 h-5 rounded border-slate-300 text-orange-500 focus:ring-orange-500 cursor-pointer" 
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-600 leading-snug group-hover:text-slate-900 transition-colors">
                  I confirm that all dispensed units, discarded units, and waste have been accounted for according to <span className="text-slate-900 underline font-black">SOP-QA-22</span>.
                </span>
              </label>
            </div>

            {/* Modal Actions */}
            <div className="px-8 py-6 bg-slate-50 flex items-center justify-between">
              <button 
                onClick={() => setIsConfirming(false)}
                className="text-xs font-black text-slate-500 uppercase tracking-widest hover:text-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleFinalize}
                disabled={!isAgreed}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-lg ${
                  isAgreed 
                  ? 'bg-[#f37f13] text-white shadow-orange-500/20 hover:scale-105 active:scale-95' 
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                }`}
              >
                Confirm & Finalize
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reconciliation;
