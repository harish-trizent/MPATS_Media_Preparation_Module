
import React from 'react';

const ProductMaster: React.FC = () => {
  const products = [
    { name: 'Tryptic Soy Agar (TSA)', mf: 'Thermo Fisher Scientific', cat: 'TF-TSA-445', ph: '7.3 ± 0.2', sop: 'SOP-QC-MED-01' },
    { name: 'Sabouraud Dextrose Agar', mf: 'Merck KGaA', cat: 'MK-SDA-990', ph: '5.6 ± 0.2', sop: 'SOP-QC-MED-04' },
    { name: 'MacConkey Agar', mf: 'BD Life Sciences', cat: 'BD-MCA-112', ph: '7.1 ± 0.2', sop: 'SOP-QC-MED-09' },
    { name: 'Blood Agar (5% Sheep)', mf: 'Thermo Fisher Scientific', cat: 'TF-BA-556', ph: '7.3 ± 0.2', sop: 'SOP-QC-MED-02' },
  ];

  return (
    <div className="p-8 max-w-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Media Product Master</h2>
          <p className="text-sm text-slate-500">Central repository for all approved microbial media product specifications.</p>
        </div>
        <button className="bg-[#FF7043] text-white flex items-center gap-2 px-6 py-2.5 rounded shadow-lg shadow-orange-500/20 font-bold text-sm uppercase tracking-wide">
          <span className="material-symbols-outlined">add</span>
          Add Media Product
        </button>
      </div>

      <div className="bg-white p-4 border border-gray-200 rounded-xl shadow-sm mb-8 flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[300px]">
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Global Search</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-gray-200 rounded-lg text-sm focus:ring-[#FF7043] focus:border-[#FF7043]" placeholder="Search by Name, Manufacturer, or Catalog #..." />
          </div>
        </div>
        <div className="w-64">
           <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1 block">Filter by Form</label>
           <select className="w-full rounded-lg border-gray-200 py-2.5 text-sm focus:ring-[#FF7043]">
             <option>All Media Types</option>
             <option>Dehydrated Powder</option>
             <option>Prepared Plates</option>
           </select>
        </div>
        <button className="px-4 py-2.5 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 flex items-center gap-2 hover:bg-slate-50">
          <span className="material-symbols-outlined text-sm">filter_alt</span> More Filters
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#2D3E50] text-white">
              <tr className="text-[10px] font-black uppercase tracking-widest">
                <th className="px-6 py-4">Media Name</th>
                <th className="px-6 py-4">Manufacturer</th>
                <th className="px-6 py-4">Catalog #</th>
                <th className="px-6 py-4">pH Specs</th>
                <th className="px-6 py-4">SOP Ref</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((p, i) => (
                <tr key={i} className="hover:bg-orange-50/20 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-800 text-sm">{p.name}</td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{p.mf}</td>
                  <td className="px-6 py-4 font-mono text-xs text-slate-500">{p.cat}</td>
                  <td className="px-6 py-4 font-medium text-slate-700 text-sm">{p.ph}</td>
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-1 text-blue-600 text-[11px] font-bold underline hover:no-underline cursor-pointer">
                      <span className="material-symbols-outlined text-xs">link</span>
                      {p.sop}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="p-1.5 text-slate-300 hover:text-blue-600"><span className="material-symbols-outlined">visibility</span></button>
                      <button className="p-1.5 text-slate-300 hover:text-[#FF7043]"><span className="material-symbols-outlined">edit</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductMaster;
