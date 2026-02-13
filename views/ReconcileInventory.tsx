import React, { useState, useMemo } from 'react';

interface ReconcileInventoryProps {
  type: 'Powder' | 'Solution' | 'Container';
  onBack: () => void;
}

const ReconcileInventory: React.FC<ReconcileInventoryProps> = ({ type, onBack }) => {
  const initialItems = useMemo(() => [
    { lot: 'TSA-23-011-A', containerId: 'CONT-00192', systemQty: 1000.00, physicalCount: 995.50, reason: 'Spillage' },
    { lot: 'TSA-23-011-A', containerId: 'CONT-00193', systemQty: 1000.00, physicalCount: 1002.50, reason: 'Weighing Error' },
    { lot: 'TSA-23-011-B', containerId: 'CONT-00201', systemQty: 500.00, physicalCount: 487.50, reason: 'Moisture Loss' },
    { lot: 'TSA-23-011-C', containerId: 'CONT-00205', systemQty: 2000.00, physicalCount: 2000.00, reason: '' },
  ], []);

  const [items, setItems] = useState(initialItems);

  const stats = useMemo(() => {
    const totalSystem = items.reduce((acc, item) => acc + item.systemQty, 0);
    const totalPhysical = items.reduce((acc, item) => acc + item.physicalCount, 0);
    const totalVariance = totalPhysical - totalSystem;
    return { totalSystem, totalPhysical, totalVariance };
  }, [items]);

  const handlePhysicalChange = (index: number, val: string) => {
    const numVal = parseFloat(val) || 0;
    const newItems = [...items];
    newItems[index].physicalCount = numVal;
    setItems(newItems);
  };

  const handleReasonChange = (index: number, val: string) => {
    const newItems = [...items];
    newItems[index].reason = val;
    setItems(newItems);
  };

  const adjustmentReasons = ['Spillage', 'Weighing Error', 'Moisture Loss', 'Sampling', 'Leakage', 'Evaporation'];

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="p-8 pb-32 overflow-y-auto flex-1">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">System Stock Total</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-slate-800">{stats.totalSystem.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">g</span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Physical Count Total</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-slate-800">{stats.totalPhysical.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">g</span>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl border-2 border-red-400 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Total Variance</p>
            <div className="flex items-baseline gap-2">
              <span className={`text-4xl font-black ${stats.totalVariance < 0 ? 'text-red-500' : 'text-emerald-500'}`}>
                {stats.totalVariance > 0 ? '+' : ''}{stats.totalVariance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">g</span>
            </div>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-10">
          <div className="bg-[#2D3E50] px-6 py-4 flex items-center gap-3">
            <span className="material-symbols-outlined text-white text-xl">analytics</span>
            <h3 className="text-sm font-black text-white tracking-tight">Container Breakdown: Lot #TSA-2023-011</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <th className="px-6 py-5">Lot Number</th>
                  <th className="px-6 py-5">Container ID</th>
                  <th className="px-6 py-5">System Qty (g)</th>
                  <th className="px-6 py-5 text-center">Physical Count (g)</th>
                  <th className="px-6 py-5 text-center">Variance (g)</th>
                  <th className="px-6 py-5">Adjustment Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item, idx) => {
                  const variance = item.physicalCount - item.systemQty;
                  return (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4 font-bold text-slate-700 text-xs tracking-tight">{item.lot}</td>
                      <td className="px-6 py-4 font-mono text-[11px] text-slate-500">{item.containerId}</td>
                      <td className="px-6 py-4 font-bold text-slate-800 text-xs">
                        {item.systemQty.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-center">
                          <input 
                            type="number" 
                            step="0.01"
                            value={item.physicalCount === 0 ? '' : item.physicalCount}
                            onChange={(e) => handlePhysicalChange(idx, e.target.value)}
                            className="w-28 text-center bg-white border border-gray-200 rounded-md py-1.5 text-xs font-black text-slate-800 focus:ring-[#FF7043] focus:border-[#FF7043]"
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-xs font-black ${variance < 0 ? 'text-red-500' : variance > 0 ? 'text-emerald-500' : 'text-slate-300'}`}>
                          {variance > 0 ? '+' : ''}{variance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select 
                          value={item.reason}
                          onChange={(e) => handleReasonChange(idx, e.target.value)}
                          disabled={variance === 0}
                          className={`w-full py-1.5 text-[11px] font-bold border rounded-md focus:ring-[#FF7043] transition-all ${
                            variance !== 0 ? 'bg-white border-gray-200 text-slate-700' : 'bg-gray-50 border-gray-100 text-slate-300 cursor-not-allowed'
                          }`}
                        >
                          <option value="">Select Reason...</option>
                          {adjustmentReasons.map(r => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regulatory Box */}
        <div className="bg-[#F8FAFC] border-l-4 border-[#2D3E50] p-6 rounded-r-xl flex items-start gap-4 shadow-sm">
          <span className="material-symbols-outlined text-[#2D3E50] mt-0.5">verified_user</span>
          <div>
            <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-1">Regulatory Compliance Information</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
              Variances exceeding 0.5% threshold require manual secondary sign-off. All reconciliation activities are captured in the system's tamper-proof audit trail for ISO/IEC 17025 compliance.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <footer className="fixed bottom-0 right-0 left-64 bg-white border-t border-gray-200 p-6 flex items-center justify-between z-40 shadow-[0_-10px_20px_-15px_rgba(0,0,0,0.1)]">
        <div className="flex gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-8 py-3 bg-[#E11D48] text-white rounded-lg font-black text-[11px] uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-sm">close</span>
            Reject Variance
          </button>
          <button className="px-8 py-3 bg-white border border-gray-200 text-slate-600 rounded-lg font-black text-[11px] uppercase tracking-widest hover:bg-gray-50 active:scale-95 transition-all">
            Save as Draft
          </button>
        </div>

        <div className="flex items-center gap-12">
          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Reconciliation Variance</p>
            <p className={`text-xl font-black ${stats.totalVariance < 0 ? 'text-red-500' : 'text-emerald-500'}`}>
              {stats.totalVariance > 0 ? '+' : ''}{stats.totalVariance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} g
            </p>
          </div>
          <button className="flex items-center gap-3 px-10 py-3 bg-[#FF7043] text-white rounded-lg font-black text-sm uppercase tracking-widest shadow-lg shadow-orange-500/30 hover:brightness-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined text-lg">check_circle</span>
            Post Reconciliation & Adjust Stock
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ReconcileInventory;