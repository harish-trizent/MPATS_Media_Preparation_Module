
import React, { useState, useEffect } from 'react';

interface PowderLotCreationProps {
  onSave: () => void;
  onCancel: () => void;
}

interface ProductInfo {
  id: string;
  name: string;
  manufacturer: string;
  sku: string;
}

const mockProducts: ProductInfo[] = [
  { id: '1', name: 'Tryptic Soy Agar - HiMedia - M173 - 500 g', manufacturer: 'HiMedia', sku: 'M173' },
  { id: '2', name: 'Sabouraud Dextrose Agar - Merck - 1.05438 - 500 g', manufacturer: 'Merck', sku: '1.05438' },
  { id: '3', name: 'MacConkey Agar - BD Diagnostics - 212123 - 500 g', manufacturer: 'BD Diagnostics', sku: '212123' },
];

const PowderLotCreation: React.FC<PowderLotCreationProps> = ({ onSave, onCancel }) => {
  const [selectedProductId, setSelectedProductId] = useState('');
  const [productData, setProductData] = useState({ manufacturer: '', sku: '' });
  const [receivedGms, setReceivedGms] = useState<number | string>(0);
  const [numContainers, setNumContainers] = useState<number | string>(1);
  const [qtyPerContainer, setQtyPerContainer] = useState<string | number>('Calculated');

  useEffect(() => {
    const product = mockProducts.find(p => p.id === selectedProductId);
    if (product) {
      setProductData({ manufacturer: product.manufacturer, sku: product.sku });
    } else {
      setProductData({ manufacturer: '', sku: '' });
    }
  }, [selectedProductId]);

  useEffect(() => {
    const total = parseFloat(receivedGms.toString());
    const count = parseFloat(numContainers.toString());
    if (!isNaN(total) && !isNaN(count) && count > 0) {
      setQtyPerContainer((total / count).toFixed(2));
    } else {
      setQtyPerContainer('Calculated');
    }
  }, [receivedGms, numContainers]);

  return (
    <div className="p-8 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom duration-500 pb-24">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-[#2D3E50] tracking-tight">Media Powder Inventory</h2>
        </div>
      </div>

      <div className="space-y-6">
        {/* Material Details Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-slate-50/50 border-b border-slate-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FF7043] text-xl">category</span>
            <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Material Details</h3>
          </div>
          <div className="p-8 space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Media Product Selection *</label>
              <select 
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 text-sm font-medium text-slate-700"
              >
                <option value="">Search and select product (e.g. Tryptic Soy Agar - HiMedia - M173 - 500 g)</option>
                {mockProducts.map(p => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Manufacturer</label>
                <input 
                  type="text" 
                  value={productData.manufacturer}
                  readOnly
                  placeholder="Auto-fills on product selection"
                  className="w-full rounded-lg border-slate-200 bg-slate-50/50 py-3 text-sm font-medium text-slate-500 cursor-not-allowed"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">SKU / Catalog Number</label>
                <input 
                  type="text" 
                  value={productData.sku}
                  readOnly
                  placeholder="Auto-fills on product selection"
                  className="w-full rounded-lg border-slate-200 bg-slate-50/50 py-3 text-sm font-medium text-slate-500 cursor-not-allowed"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lot Information Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-slate-50/50 border-b border-slate-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FF7043] text-xl">grid_view</span>
            <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Lot Information</h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Manufacturer Lot Number *</label>
                <input 
                  type="text" 
                  className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 text-sm font-medium text-slate-700"
                  placeholder="Enter lot number"
                />
                <p className="text-[9px] text-slate-400 italic">Enter exactly as printed on the container label</p>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Manufacture Date *</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 text-sm font-medium text-slate-700"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Expiry Date *</label>
                <div className="relative">
                  <input 
                    type="date" 
                    className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 text-sm font-medium text-slate-700"
                  />
                </div>
                <p className="text-[9px] text-red-500 font-bold uppercase">Must be after manufacture date</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quantity & Containers Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-slate-50/50 border-b border-slate-100 flex items-center gap-3">
            <span className="material-symbols-outlined text-[#FF7043] text-xl">science</span>
            <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Quantity & Containers</h3>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Total Received (gms) *</label>
                <div className="relative">
                  <input 
                    type="number" 
                    value={receivedGms}
                    onChange={(e) => setReceivedGms(e.target.value)}
                    className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 text-sm font-bold text-slate-800"
                    placeholder="0.00"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-300 uppercase">gms</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Number of Containers *</label>
                <input 
                  type="number" 
                  value={numContainers}
                  onChange={(e) => setNumContainers(e.target.value)}
                  className="w-full rounded-lg border-slate-200 focus:ring-[#FF7043] focus:border-[#FF7043] py-3 text-sm font-bold text-slate-800"
                  placeholder="1"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Quantity per Container</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={qtyPerContainer}
                    readOnly
                    className="w-full rounded-lg border-slate-200 bg-slate-50/50 py-3 text-sm font-bold text-slate-400 cursor-not-allowed"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-200 uppercase">Auto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 flex justify-center gap-4">
        <button 
          onClick={onCancel}
          className="px-12 py-3.5 bg-white border border-slate-200 rounded-lg text-xs font-black text-slate-600 uppercase tracking-widest hover:bg-slate-50 transition-all min-w-[180px]"
        >
          Cancel
        </button>
        <button 
          onClick={onSave}
          className="bg-[#FF7043] text-white flex items-center justify-center gap-3 px-12 py-3.5 rounded-lg shadow-lg shadow-orange-500/20 font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all min-w-[240px]"
        >
          <span className="material-symbols-outlined text-lg">shopping_bag</span>
          Add to Inventory
        </button>
      </div>
    </div>
  );
};

export default PowderLotCreation;
