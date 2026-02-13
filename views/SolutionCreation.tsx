
import React, { useState, useEffect } from 'react';

interface SolutionCreationProps {
  onSave: () => void;
  onCancel: () => void;
}

interface SolutionProduct {
  id: string;
  name: string;
  type: string;
  manufacturer: string;
  catalog: string;
}

const mockSolutionProducts: SolutionProduct[] = [
  { 
    id: '1', 
    name: 'Microbial Media Supplement - Sigma-Aldrich - M7167-100ML', 
    type: 'Microbial Media Supplement', 
    manufacturer: 'Sigma-Aldrich Corp.', 
    catalog: 'M7167-100ML' 
  },
  { 
    id: '2', 
    name: 'Tween 80 - Merck - 8.22187.0500', 
    type: 'Neutralizer', 
    manufacturer: 'Merck KGaA', 
    catalog: '8.22187.0500' 
  },
  { 
    id: '3', 
    name: 'L-Cysteine - BD - 212392', 
    type: 'Additive', 
    manufacturer: 'BD Diagnostics', 
    catalog: '212392' 
  }
];

const SolutionCreation: React.FC<SolutionCreationProps> = ({ onSave, onCancel }) => {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [productDetails, setProductDetails] = useState({ type: '', manufacturer: '', catalog: '' });
  const [totalVolume, setTotalVolume] = useState<number | string>('');
  const [unit, setUnit] = useState<'mL' | 'gms'>('mL');
  const [numUnits, setNumUnits] = useState<number | string>('');
  const [qtyPerUnit, setQtyPerUnit] = useState<string>('0.00');

  useEffect(() => {
    const product = mockSolutionProducts.find(p => p.id === selectedProductId);
    if (product) {
      setProductDetails({
        type: product.type,
        manufacturer: product.manufacturer,
        catalog: product.catalog
      });
    } else {
      setProductDetails({ type: '', manufacturer: '', catalog: '' });
    }
  }, [selectedProductId]);

  useEffect(() => {
    const vol = parseFloat(totalVolume.toString());
    const count = parseFloat(numUnits.toString());
    if (!isNaN(vol) && !isNaN(count) && count > 0) {
      setQtyPerUnit((vol / count).toFixed(2));
    } else {
      setQtyPerUnit('0.00');
    }
  }, [totalVolume, numUnits]);

  return (
    <div className="p-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom duration-500 pb-24">
      {/* Product Selection Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FF7043] text-xl">search</span>
            <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Product Selection</h3>
          </div>
          <span className="bg-[#2D3E50] text-white text-[9px] font-black px-2 py-1 rounded uppercase tracking-wider">GMP Compliant</span>
        </div>
        <div className="p-8 space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Solution / Supplement Product *</label>
            <div className="relative">
              <select 
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 pl-4 pr-10 text-sm font-medium text-slate-700 appearance-none bg-white"
              >
                <option value="">Search by name or catalog #...</option>
                {mockSolutionProducts.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">search</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Type</label>
              <input 
                type="text" 
                value={productDetails.type}
                readOnly
                placeholder="Microbial Media Supplement"
                className="w-full rounded-lg border-slate-100 bg-slate-50/70 py-3 px-4 text-sm font-medium text-slate-500 italic cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Manufacturer</label>
              <input 
                type="text" 
                value={productDetails.manufacturer}
                readOnly
                placeholder="Sigma-Aldrich Corp."
                className="w-full rounded-lg border-slate-100 bg-slate-50/70 py-3 px-4 text-sm font-medium text-slate-500 italic cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Catalog Number</label>
              <input 
                type="text" 
                value={productDetails.catalog}
                readOnly
                placeholder="M7167-100ML"
                className="w-full rounded-lg border-slate-100 bg-slate-50/70 py-3 px-4 text-sm font-mono font-medium text-slate-500 italic cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lot Details Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-6">
        <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#FF7043] text-xl">inventory_2</span>
          <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Lot Details</h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Manufacturer Lot # *</label>
              <input 
                type="text" 
                className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 px-4 text-sm font-medium text-slate-700"
                placeholder="e.g. SLBX9281"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Manufacture Date *</label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 px-4 text-sm font-medium text-slate-700"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Expiry Date *</label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 px-4 text-sm font-medium text-slate-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quantity Tracking Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-12">
        <div className="px-6 py-4 bg-white border-b border-slate-100 flex items-center gap-3">
          <span className="material-symbols-outlined text-[#FF7043] text-xl">bar_chart</span>
          <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Quantity Tracking</h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Total Volume Received *</label>
              <div className="flex border border-slate-200 rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#FF7043] focus-within:border-[#FF7043]">
                <input 
                  type="number" 
                  value={totalVolume}
                  onChange={(e) => setTotalVolume(e.target.value)}
                  className="flex-1 border-none focus:ring-0 py-3 px-4 text-sm font-medium text-slate-700"
                  placeholder="0.00"
                />
                <select 
                  value={unit}
                  onChange={(e) => setUnit(e.target.value as 'mL' | 'gms')}
                  className="bg-white border-l border-slate-200 focus:ring-0 py-3 px-3 text-xs font-bold text-slate-500 border-none outline-none appearance-none"
                >
                  <option value="mL">mL</option>
                  <option value="gms">gms</option>
                </select>
                <div className="flex items-center pr-3 pointer-events-none">
                   <span className="material-symbols-outlined text-sm text-slate-400">expand_more</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest block">Number of Units *</label>
              <input 
                type="number" 
                value={numUnits}
                onChange={(e) => setNumUnits(e.target.value)}
                className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 px-4 text-sm font-medium text-slate-700"
                placeholder="e.g. 10"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Quantity per Unit</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={qtyPerUnit}
                  readOnly
                  className="w-full rounded-lg border-slate-100 bg-slate-50/70 py-3 px-4 text-sm font-bold text-slate-400 italic cursor-not-allowed"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-300 italic">{unit}/unit</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center bg-transparent mt-8">
        <button 
          onClick={onCancel}
          className="px-10 py-3 bg-white border border-slate-200 rounded-lg text-xs font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm"
        >
          Cancel
        </button>
        <button 
          onClick={onSave}
          className="bg-[#FF7043] text-white flex items-center justify-center gap-3 px-10 py-3 rounded-lg shadow-lg shadow-orange-500/20 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-lg">save</span>
          Add to Inventory
        </button>
      </div>
    </div>
  );
};

export default SolutionCreation;
