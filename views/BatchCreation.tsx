
import React from 'react';

interface BatchCreationProps {
  onNext: () => void;
}

const BatchCreation: React.FC<BatchCreationProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col h-full bg-[#F3F6F9] font-['Inter']">
      {/* View Header - Standardized Circular Stepper */}
      <div className="bg-white px-8 py-4 shrink-0 border-b border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-black text-[#2D3E50] tracking-tight">Batch Creation</h2>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black ring-4 ring-slate-100">1</div>
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center text-[10px] font-black">2</div>
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center text-[10px] font-black">3</div>
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center text-[10px] font-black">4</div>
              
              <div className="ml-6 flex flex-col">
                <span className="text-[7px] font-black text-orange-500 uppercase tracking-[0.2em] leading-none">Active Phase</span>
                <span className="text-[9px] font-black text-[#2D3E50] uppercase tracking-wider">Batch Initiation & Configuration</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Status Sub-Header */}
        <div className="flex items-center justify-between border-t border-slate-50 pt-4 pb-2">
          <div className="flex gap-10">
            <div className="space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Protocol Compliance</p>
              <p className="text-[11px] font-black text-emerald-600 uppercase">ISO 17025 Certified Workflow</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Operator</p>
              <p className="text-[11px] font-black text-[#2D3E50]">P Shyam Kumar [ADM-102]</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Server Timestamp</p>
              <p className="text-[11px] font-black text-[#2D3E50] font-mono">2026-02-02 14:22 GMT</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="grid grid-cols-12 gap-6 items-start">
          
          {/* Main Form Column */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            
            {/* 01 Batch Identity */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-3">
                 <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">01</div>
                 <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Batch Identity</h3>
              </div>
              <div className="p-6">
                <div className="bg-[#FFF8F3] border border-orange-100 rounded-2xl p-6 flex items-center justify-between shadow-sm mb-6">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-orange-100/50 rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-orange-500 text-3xl font-light">qr_code_2</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-[10px] font-black text-orange-400 uppercase tracking-widest mb-1">System-Generated Identifier</p>
                      <h3 className="text-2xl font-black text-[#2D3E50] tracking-tight">MB-260202-TSA-482</h3>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-[9px] font-black text-slate-500 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                    <span className="material-symbols-outlined text-sm">content_copy</span>
                    Copy ID
                  </button>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Batch Description / Project Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Weekly Environmental Monitoring Stock - Zone B"
                    className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner"
                  />
                </div>
              </div>
            </div>

            {/* 02 Media Selection & Specifications */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-3">
                 <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">02</div>
                 <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Media Selection & Target Specifications</h3>
              </div>
              <div className="p-6 space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Media Type *</label>
                    <div className="relative">
                      <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 outline-none appearance-none cursor-pointer transition-all">
                        <option>TSA (Tryptic Soy Agar)</option>
                        <option>SDA (Sabouraud Dextrose)</option>
                        <option>MacConkey Agar</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">science</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Intended Use *</label>
                    <div className="relative">
                      <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 outline-none appearance-none cursor-pointer transition-all">
                        <option>Settle Plate Monitoring</option>
                        <option>Surface Monitoring</option>
                        <option>Sterility Testing</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">biotech</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F8FAFC] border border-slate-100 rounded-2xl p-6 flex flex-wrap gap-12 items-center justify-center">
                  <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Target PH Range</p>
                    <div className="flex items-center gap-2 bg-[#E8F5E9] text-[#2E7D32] border border-[#C8E6C9] px-4 py-2 rounded-xl text-xs font-black">
                      <div className="w-2 h-2 rounded-full bg-[#2E7D32]"></div>
                      7.1 - 7.5
                    </div>
                  </div>
                  <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">SOP Mixing Ratio</p>
                    <div className="flex items-center gap-2 bg-[#E3F2FD] text-[#1976D2] border border-[#BBDEFB] px-4 py-2 rounded-xl text-xs font-black">
                      <div className="w-2 h-2 rounded-full bg-[#1976D2]"></div>
                      1:20 (P:W)
                    </div>
                  </div>
                  <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
                  <div className="text-center">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Sterilizer Load Pattern</p>
                    <div className="flex items-center gap-2 bg-[#FFFDE7] text-[#F9A825] border border-[#FFF9C4] px-4 py-2 rounded-xl text-xs font-black">
                      <div className="w-2 h-2 rounded-full bg-[#F9A825]"></div>
                      LP-TSA-001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="col-span-12 lg:col-span-4 space-y-6 h-full">
            
            {/* 03 Batch Details & Validation */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                 <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">03</div>
                 <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Validation & Remarks</h3>
              </div>
              <div className="p-6 space-y-8 flex-1">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Batch Initiated By</label>
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3">
                       <span className="material-symbols-outlined text-slate-300">person</span>
                       <span className="text-[11px] font-black text-slate-600">P Shyam Kumar (ADM-102)</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Initiation Timestamp</label>
                    <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-xl p-3">
                       <span className="material-symbols-outlined text-slate-300">event_available</span>
                       <span className="text-[11px] font-black text-slate-600 font-mono tracking-tighter">02-FEB-2026 14:22:45</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Process Remarks</label>
                  <textarea 
                    placeholder="Enter any initial observations or specific SOP references..."
                    className="w-full bg-slate-50/30 border border-slate-100 rounded-xl p-4 text-[10px] font-medium text-slate-600 outline-none min-h-[120px] resize-none focus:bg-white focus:ring-2 focus:ring-orange-500/10 focus:border-orange-200 transition-all"
                  ></textarea>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <div className="bg-[#EEF6FF] border border-blue-100 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3 text-blue-600">
                      <span className="material-symbols-outlined text-sm font-black">info</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em]">SOP Reference</span>
                    </div>
                    <p className="text-[11px] text-blue-800 italic leading-relaxed font-medium">
                      "Batch creation requires verification of lead technician credentials. All automated timestamps are logged to the persistent audit trail."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-white border-t border-slate-200 px-10 py-6 flex items-center justify-between shrink-0 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)]">
        <button 
          className="flex items-center gap-3 px-8 py-3.5 text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500 transition-all"
        >
          Cancel Initiation
        </button>
        
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-500 font-black">verified_user</span>
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Authorization Status</span>
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">Ready to Proceed</span>
            </div>
          </div>
          <button 
            onClick={onNext}
            className="bg-[#FF7043] text-white flex items-center gap-4 px-16 py-4 rounded-2xl shadow-xl shadow-orange-500/30 font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
          >
            Launch Media Preparation
            <span className="material-symbols-outlined">rocket_launch</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BatchCreation;
