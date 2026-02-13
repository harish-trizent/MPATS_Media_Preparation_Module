
import React, { useState } from 'react';

interface DispensingProps {
  onNext: () => void;
  onBack: () => void;
  onViewBatchDetails: (batchId: string) => void;
}

const Dispensing: React.FC<DispensingProps> = ({ onNext, onBack, onViewBatchDetails }) => {
  const [unitsDispensed, setUnitsDispensed] = useState<number>(12);
  const [totalYield] = useState<number>(50);
  const [selectedBatch, setSelectedBatch] = useState('MB-260116-TSA-482 (Tryptic Soy Agar)');
  const [selectedContainer, setSelectedContainer] = useState('Petri Dish');
  const [discardedUnits, setDiscardedUnits] = useState<number>(0);

  const progress = (unitsDispensed / totalYield) * 100;
  const remainingUnits = totalYield - unitsDispensed;

  const handleViewDetails = () => {
    // Extracting just the ID part from the mock selection string
    const id = selectedBatch.split(' ')[0];
    onViewBatchDetails(id);
  };

  return (
    <div className="flex flex-col h-full bg-[#F3F6F9] font-['Inter']">
      {/* View Header - New Circular Stepper */}
      <div className="bg-white border-b border-slate-200 px-8 py-4 shrink-0 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-black text-[#2D3E50] tracking-tight">Manual Dispensing Entry</h2>
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
                <span className="text-[9px] font-black text-[#2D3E50] uppercase tracking-wider">Dispensing & Quality Validation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 flex-1 overflow-y-auto space-y-6">
        {/* Batch Selection Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex items-center justify-between">
          <div className="flex-1 max-w-2xl space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Select Batch for Dispensing *</label>
            <div className="relative">
              <select 
                value={selectedBatch}
                onChange={(e) => setSelectedBatch(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 outline-none appearance-none transition-all"
              >
                <option>MB-260116-TSA-482 (Tryptic Soy Agar)</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest border border-emerald-100">Ready for Dispensing</span>
            <button 
              onClick={handleViewDetails}
              className="flex items-center gap-2 px-6 py-2.5 border border-slate-200 rounded-xl text-[10px] font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined text-orange-500 text-sm">visibility</span>
              Batch Details
            </button>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-4 gap-6">
          {[
            { label: 'Total Volume Prepared', value: '1000 ml', color: 'text-slate-800' },
            { label: 'Unit Volume', value: '20 ml', color: 'text-slate-800' },
            { label: 'Target Yield', value: '50 Units', color: 'text-orange-500', border: 'border-l-4 border-l-orange-500' },
            { label: 'Remaining Units', value: `${remainingUnits} Units`, color: 'text-slate-800' },
          ].map((m, i) => (
            <div key={i} className={`bg-white p-6 rounded-xl border border-slate-200 shadow-sm ${m.border || ''}`}>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">{m.label}</p>
              <p className={`text-2xl font-black ${m.color}`}>{m.value}</p>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Column 1: Container Selection */}
          <div className="col-span-12 lg:col-span-3 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-orange-500">inventory_2</span>
                <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Container Selection</h3>
              </div>
              <div className="p-4 flex-1 space-y-3">
                {[
                  { name: 'Petri Dish', desc: 'Standard 90mm plate. Requires aseptic environment.', icon: 'pet_supplies' },
                  { name: 'Flask', desc: 'Erlenmeyer 250ml. Autoclave compatible.', icon: 'science' },
                  { name: 'Test Tube', desc: '15ml standard tube. Use rack #B.', icon: 'reorder' },
                ].map((c) => (
                  <button 
                    key={c.name}
                    onClick={() => setSelectedContainer(c.name)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-4 ${
                      selectedContainer === c.name 
                      ? 'border-orange-500 bg-orange-50/30' 
                      : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedContainer === c.name ? 'bg-orange-100 text-orange-500' : 'bg-slate-50 text-slate-400'
                    }`}>
                      <span className="material-symbols-outlined">{c.icon}</span>
                    </div>
                    <div className="flex-1 pr-6 relative">
                      <p className="text-xs font-black text-slate-800 mb-1">{c.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium leading-tight">{c.desc}</p>
                      <div className={`absolute top-0 right-0 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedContainer === c.name ? 'border-orange-500 bg-orange-500' : 'border-slate-200'
                      }`}>
                        {selectedContainer === c.name && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Dispensing Details */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-orange-500 rotate-45">edit_square</span>
                  <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Dispensing Details</h3>
                </div>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Manual Data Entry</span>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Units Dispensed</label>
                    <input 
                      type="number" 
                      value={unitsDispensed}
                      onChange={(e) => setUnitsDispensed(Number(e.target.value))}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-lg font-black text-slate-800 focus:ring-2 focus:ring-orange-500/10 outline-none" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Date / Time</label>
                    <div className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-500 flex items-center justify-between">
                      2026-02-02 14:40
                    </div>
                  </div>
                </div>

                <div className="bg-[#2D3E50] rounded-2xl p-10 text-center space-y-4 mb-8">
                   <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Current Batch Yield</p>
                   <div className="flex items-baseline justify-center gap-4">
                      <span className="text-7xl font-black text-white">{unitsDispensed}</span>
                      <span className="text-3xl font-black text-white/20">/ {totalYield}</span>
                   </div>
                   <p className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Total Registered Units</p>
                </div>

                <button className="w-full py-4 bg-[#2D3E50] text-white rounded-xl font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-lg">
                  <span className="material-symbols-outlined text-lg">add_circle</span>
                  Record Dispensed Units
                </button>
              </div>
            </div>
          </div>

          {/* Column 3: Waste Log */}
          <div className="col-span-12 lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-red-500">delete_sweep</span>
                <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Waste Log</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Discarded Units</label>
                  <input 
                    type="number" 
                    value={discardedUnits}
                    onChange={(e) => setDiscardedUnits(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm font-bold text-slate-800 focus:ring-2 focus:ring-orange-500/10 outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Waste Reason</label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-[11px] font-bold text-slate-500 appearance-none">
                      <option>Select Reason...</option>
                      <option>Broken Container</option>
                      <option>Spillage</option>
                      <option>Contamination Risk</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none">expand_more</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-[#2D3E50] text-white rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">report_problem</span>
                  Log Waste Transaction
                </button>

                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Recent Waste Events</p>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                      <span className="text-[11px] font-bold text-slate-600">Broken Container</span>
                      <span className="text-[11px] font-black text-red-500">2 Units</span>
                    </div>
                    <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                      <span className="text-[11px] font-bold text-slate-600">Spillage</span>
                      <span className="text-[11px] font-black text-red-500">1 Unit</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Nav Bar */}
      <div className="bg-white border-t border-slate-200 px-8 py-6 flex items-center justify-between shrink-0 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col gap-2 w-1/3">
          <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
            <span>{Math.round(progress)}% of Batch Dispensed</span>
            <span className="text-slate-700">{unitsDispensed}/{totalYield} Units</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-orange-500 transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-10 py-3.5 bg-white border border-slate-200 rounded-xl text-[11px] font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
            Save Progress
          </button>
          <button 
            onClick={onNext}
            className="bg-[#FF7043] text-white flex items-center gap-3 px-12 py-3.5 rounded-xl shadow-xl shadow-orange-500/20 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
          >
            Next: Fine Tuning
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dispensing;
