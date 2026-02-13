
import React, { useState, useEffect } from 'react';

interface ContainerLotCreationProps {
  onSave: () => void;
  onCancel: () => void;
}

const ContainerLotCreation: React.FC<ContainerLotCreationProps> = ({ onSave, onCancel }) => {
  const [totalContainers, setTotalContainers] = useState<number | string>('');
  const [noOfLots, setNoOfLots] = useState<number | string>('');
  const [containerPerLot, setContainerPerLot] = useState<number>(0);
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const total = Number(totalContainers);
    const lots = Number(noOfLots);
    if (total > 0 && lots > 0) {
      setContainerPerLot(Math.floor(total / lots));
    } else {
      setContainerPerLot(0);
    }
  }, [totalContainers, noOfLots]);

  return (
    <div className="p-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-500 pb-24">
      {/* Step 1: Container Selection */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#FF7043]/10 flex items-center justify-center">
            <span className="text-[10px] font-black text-[#FF7043]">1</span>
          </div>
          <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Container Selection</h3>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest block">Select Container Type *</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <select 
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full pl-12 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 focus:ring-2 focus:ring-[#FF7043]/10 focus:border-[#FF7043] outline-none appearance-none transition-all"
              >
                <option value="">Search or select type...</option>
                <option value="petri-90">Petri Dish (90mm)</option>
                <option value="petri-150">Petri Dish (150mm)</option>
                <option value="flask-250">Flask (250mm)</option>
                <option value="flask-500">Flask (500mm)</option>
                <option value="conical-flask">Conical Flask</option>
                <option value="blue-cap-bottle">Blue Cap Bottle</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-slate-100 rounded-xl p-6 grid grid-cols-3 gap-8">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Material</p>
              <p className="text-xs font-bold text-slate-600">Selected material details</p>
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Usage Type</p>
              <span className="inline-block px-3 py-1 bg-slate-200 text-slate-500 rounded text-[9px] font-black uppercase tracking-wider">Info</span>
            </div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Specifications</p>
              <p className="text-xs font-bold text-slate-600">General specifications</p>
            </div>
          </div>
        </div>
      </div>

      {/* Step 2: Lot Details */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#FF7043]/10 flex items-center justify-center">
            <span className="text-[10px] font-black text-[#FF7043]">2</span>
          </div>
          <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Lot Details</h3>
        </div>
        <div className="p-8">
          <div className="space-y-2 max-w-md">
            <label className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest block">Manufacturer Lot Number *</label>
            <input 
              type="text" 
              placeholder="e.g. MFG-2023-009-X"
              className="w-full py-3 px-4 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-[#FF7043]/10 focus:border-[#FF7043] outline-none transition-all"
            />
          </div>
        </div>
      </div>

      {/* Step 3: Quantity & Logistics */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-[#FF7043]/10 flex items-center justify-center">
            <span className="text-[10px] font-black text-[#FF7043]">3</span>
          </div>
          <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Quantity & Logistics</h3>
        </div>
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest block">Total Number of Containers *</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">inventory_2</span>
                <input 
                  type="number" 
                  value={totalContainers}
                  onChange={(e) => setTotalContainers(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-[#FF7043]/10 focus:border-[#FF7043] outline-none transition-all"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest block">No. of Lots *</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">layers</span>
                <input 
                  type="number" 
                  value={noOfLots}
                  onChange={(e) => setNoOfLots(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:ring-2 focus:ring-[#FF7043]/10 focus:border-[#FF7043] outline-none transition-all"
                  placeholder="0"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Container/Lot <span className="lowercase font-medium">(Auto-calculated)</span></label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 text-lg">list_alt</span>
                <input 
                  type="text" 
                  value={containerPerLot}
                  readOnly
                  className="w-full pl-12 pr-4 py-3 bg-[#F8FAFC] border border-slate-100 rounded-xl text-sm font-bold text-slate-400 cursor-not-allowed outline-none"
                />
              </div>
            </div>
          </div>

          <div className="bg-[#EFF6FF] p-4 rounded-xl flex items-center gap-4">
            <span className="material-symbols-outlined text-blue-500">info</span>
            <p className="text-[11px] font-medium text-blue-600 leading-relaxed">
              The <span className="font-bold">Container/Lot</span> value is automatically calculated based on the total containers and number of lots provided.
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex justify-end items-center gap-4">
        <button 
          onClick={onCancel}
          className="px-10 py-3.5 bg-[#F8FAFC] border border-slate-200 rounded-xl text-xs font-black text-slate-600 uppercase tracking-widest hover:bg-slate-100 transition-all"
        >
          Cancel
        </button>
        <button 
          onClick={onSave}
          className="bg-[#F37F13] text-white flex items-center justify-center gap-3 px-10 py-3.5 rounded-xl shadow-lg shadow-orange-500/20 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-lg">add_task</span>
          Add to Inventory
        </button>
      </div>
    </div>
  );
};

export default ContainerLotCreation;
