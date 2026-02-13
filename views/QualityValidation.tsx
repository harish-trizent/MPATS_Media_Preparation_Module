
import React from 'react';

interface QualityValidationProps {
  onFinish: () => void;
}

const QualityValidation: React.FC<QualityValidationProps> = ({ onFinish }) => {
  return (
    <div className="flex flex-col h-full bg-[#F3F6F9] font-['Inter']">
      {/* View Header - Standardized circular stepper */}
      <div className="bg-white border-b border-slate-200 px-8 py-4 shrink-0 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-black text-[#2D3E50] tracking-tight">Batch Release Validation</h2>
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
                <span className="text-[9px] font-black text-[#2D3E50] uppercase tracking-wider">Final Quality Certification</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-5xl mx-auto flex-1 overflow-y-auto space-y-8">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="bg-[#2D3E50] px-6 py-4 flex items-center justify-between">
             <h3 className="text-xs font-black text-white uppercase tracking-widest">Final Quality Parameters</h3>
             <span className="text-[10px] font-bold text-white/50">BATCH ID: TSA-2023-1024-001</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                 <tr>
                   <th className="px-6 py-3">Parameter</th>
                   <th className="px-6 py-3 text-center">Outcome</th>
                   <th className="px-6 py-3 text-center">Failed Count</th>
                 </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                 {[
                   'Visual clarity (Cloudiness / Precipitate)',
                   'Color (Standardized against reference)',
                   'Volume/fill level (20mL +/- 0.5mL)',
                   'Physical defects (Cracks, Bubbles, Loose lids)',
                 ].map((param, i) => (
                   <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                     <td className="px-6 py-4 font-medium text-slate-800 text-sm">{param}</td>
                     <td className="px-6 py-4">
                       <div className="flex justify-center gap-6">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input type="radio" name={`p-${i}`} className="text-green-600 focus:ring-green-500" defaultChecked />
                            <span className="text-[10px] font-black uppercase text-green-700">Pass</span>
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input type="radio" name={`p-${i}`} className="text-red-600 focus:ring-red-500" />
                            <span className="text-[10px] font-black uppercase text-red-700">Fail</span>
                          </label>
                       </div>
                     </td>
                     <td className="px-6 py-4 text-center">
                       <input type="number" className="w-16 h-8 rounded border-gray-200 text-xs text-center focus:ring-[#FF7043]" defaultValue={0} />
                     </td>
                   </tr>
                 ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex items-center gap-2">
             <span className="material-symbols-outlined text-[#FF7043] text-sm">draw</span>
             <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Digital Sign-off</h3>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Technician Signature</p>
                <div className="h-28 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center bg-slate-50/50">
                   <span className="material-symbols-outlined text-gray-300 text-4xl mb-1">fingerprint</span>
                   <p className="text-[10px] text-slate-400 font-medium italic">Awaiting E-Signature Verification...</p>
                </div>
              </div>
              <div>
                 <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 block">MFA Verification Code *</label>
                 <input className="w-full rounded-lg border-gray-300 py-3 text-center font-mono text-xl tracking-[0.5em] focus:ring-[#FF7043] focus:border-[#FF7043]" placeholder="XXXXXX" maxLength={6} />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 relative">
              <div className="absolute top-0 left-6 -translate-y-1/2 bg-blue-600 text-white px-3 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">Legal Certification</div>
              <p className="text-xs font-medium text-blue-900 leading-relaxed mb-6">
                "I, the undersigned supervisor, hereby certify that the above batch has been validated against established standard operating procedures (SOP-QC-004) and meets all pre-defined quality release criteria for distribution and use."
              </p>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 rounded text-blue-600 focus:ring-blue-600" />
                <span className="text-[11px] font-bold text-blue-900 leading-tight">I authorize this batch for final release and confirm audit trail integrity.</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button 
            onClick={onFinish}
            className="flex-1 bg-[#FF7043] text-white py-4 rounded-xl font-black text-lg shadow-lg shadow-orange-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">verified</span>
            APPROVE & RELEASE BATCH
          </button>
          <button className="flex-1 bg-white border-2 border-red-500 text-red-500 py-4 rounded-xl font-black text-lg hover:bg-red-50 transition-all flex items-center justify-center gap-3">
            <span className="material-symbols-outlined">cancel</span>
            REJECT BATCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default QualityValidation;
