
import React from 'react';

interface MediaStatisticsProps {
  onViewDetailedReport: (id: string) => void;
}

const MediaStatistics: React.FC<MediaStatisticsProps> = ({ onViewDetailedReport }) => {
  const activeBatchId = 'MB-260116-TSA-482';

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-8 pb-20 animate-in fade-in duration-500">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-800 tracking-tight uppercase">Regulatory Media Batch Statistics Report</h1>
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">water_drop</span>
              Prepared: 1000 mL
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">grid_view</span>
              Dispensed: 50 Plates
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">opacity</span>
              Unit Volume: 20 mL
            </div>
          </div>
        </div>
        <div className="flex bg-slate-100 p-1 rounded-lg shadow-inner">
          <button className="px-4 py-1.5 text-[10px] font-black uppercase text-slate-500">Today</button>
          <button className="px-4 py-1.5 text-[10px] font-black uppercase text-slate-500">Last 7 Days</button>
          <button className="px-4 py-1.5 text-[10px] font-black uppercase bg-white text-slate-800 rounded shadow-sm">Last 30 Days</button>
          <button className="px-4 py-1.5 text-[10px] font-black uppercase text-slate-500">Custom Range</button>
        </div>
      </div>

      {/* Search / Selection Bar */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#FF7043]">search</span>
          <input 
            type="text" 
            defaultValue={`[${activeBatchId} | TSA | Released]`} 
            className="w-full pl-12 pr-12 py-4 bg-white border border-slate-200 rounded-xl shadow-sm text-sm font-bold text-slate-700 focus:ring-2 focus:ring-[#FF7043]/10 focus:border-[#FF7043] outline-none transition-all"
          />
          <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer hover:text-slate-600">sync_alt</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Batch Info Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Batch Identifier</p>
              <h2 className="text-2xl font-black text-slate-800">{activeBatchId}</h2>
            </div>
            <div className="h-10 w-px bg-slate-100 hidden md:block"></div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Media Type</p>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-700">Tryptic Soy Agar (TSA)</span>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[8px] font-black uppercase rounded border border-emerald-200">● Released</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => onViewDetailedReport(activeBatchId)}
              className="bg-[#FF7043] text-white px-6 py-2.5 rounded-lg shadow-lg shadow-orange-500/20 font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined text-sm">visibility</span>
              View Detailed Report
            </button>
            <button className="bg-white border-2 border-orange-200 text-[#FF7043] px-6 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest flex items-center gap-2 hover:bg-orange-50 transition-all">
              <span className="material-symbols-outlined text-sm">download</span>
              Download PDF
            </button>
          </div>
        </div>

        {/* Top KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { label: 'Theoretical Yield', val: '50', unit: 'Plates', color: 'border-slate-800' },
            { label: 'Passed at Dispensing', val: '48', unit: '96%', color: 'border-blue-500' },
            { label: 'Used in Activities', val: '40', unit: 'Active', color: 'border-orange-500' },
            { label: 'Lab Rejections', val: '2', unit: 'CRITICAL', color: 'border-red-500' },
            { label: 'Overall Pass Rate', val: '95%', unit: 'VERIFIED', color: 'border-emerald-500', icon: 'verified' },
          ].map((kpi, i) => (
            <div key={i} className={`bg-white p-6 rounded-2xl border-t-4 ${kpi.color} shadow-sm space-y-2`}>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{kpi.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-800 tracking-tight">{kpi.val}</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{kpi.unit}</span>
                {kpi.icon && <span className="material-symbols-outlined text-emerald-500 text-sm ml-auto">{kpi.icon}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Overview Row */}
        <div className="grid grid-cols-12 gap-8">
          {/* Donut Chart Utilization */}
          <div className="col-span-12 lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-orange-500">data_usage</span>
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Utilization Overview</h3>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-around gap-12">
               <div className="relative w-48 h-48 rounded-full border-[18px] border-slate-100 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[18px] border-orange-500 border-l-transparent border-b-transparent rotate-45"></div>
                  <div className="absolute inset-0 rounded-full border-[18px] border-blue-500 border-t-transparent border-r-transparent border-b-transparent -rotate-[10deg]"></div>
                  <div className="absolute inset-0 rounded-full border-[18px] border-emerald-500 border-t-transparent border-r-transparent border-l-transparent rotate-[160deg]"></div>
                  <div className="text-center">
                    <p className="text-3xl font-black text-slate-800">50</p>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Units</p>
                  </div>
               </div>
               <div className="flex-1 space-y-4 max-w-xs w-full">
                  {[
                    { label: 'Used in Activities', count: 40, color: 'bg-orange-500' },
                    { label: 'In Incubation', count: 5, color: 'bg-blue-500' },
                    { label: 'In Lab Testing', count: 2, color: 'bg-emerald-500' },
                    { label: 'Not Yet Used', count: 3, color: 'bg-slate-200' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-2 h-2 rounded-full ${stat.color}`}></div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight flex-1">{stat.label}</span>
                      <span className="text-xs font-black text-slate-800">{stat.count}</span>
                      <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden ml-2">
                        <div className={`h-full ${stat.color}`} style={{ width: `${(stat.count/50)*100}%` }}></div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Exception Summary */}
          <div className="col-span-12 lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-red-500">error</span>
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">Exception Summary</h3>
            </div>
            <div className="flex-1 space-y-8">
              <div className="bg-red-50 border border-red-100 p-6 rounded-xl flex items-center justify-between">
                <p className="text-[10px] font-black text-red-800 uppercase tracking-widest">Total Exceptions Raised</p>
                <p className="text-4xl font-black text-red-600 tracking-tighter">2</p>
              </div>
              <div className="space-y-6">
                <div>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Exception Type</p>
                   <p className="text-xs font-bold text-slate-700 tracking-tight">Lab Rejection (Contamination Risk)</p>
                </div>
                <div>
                   <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Linked Activities Count</p>
                   <p className="text-xs font-bold text-slate-700 tracking-tight"><span className="text-red-500 font-black">3</span> Work Orders</p>
                </div>
              </div>
            </div>
            <button className="mt-8 w-full py-3 bg-white border-2 border-orange-500 text-orange-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-50 transition-all">
              Investigate Exceptions
            </button>
          </div>
        </div>

        {/* Activity Logs Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-8 py-6 flex justify-between items-center border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#2D3E50]">history</span>
              <h3 className="text-xs font-black text-[#2D3E50] uppercase tracking-widest">Batch Activity Logs</h3>
            </div>
            <button className="text-[10px] font-black text-orange-500 uppercase tracking-widest flex items-center gap-2 hover:underline">
              Audit Trail Access
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">
                <tr>
                  <th className="px-8 py-4">Plate ID</th>
                  <th className="px-8 py-4">Process Activity</th>
                  <th className="px-8 py-4">Timestamp (ISO)</th>
                  <th className="px-8 py-4">Authorized Operator</th>
                  <th className="px-8 py-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { id: 'TSA-482-01', act: 'Environmental Monitoring', time: '2026-01-26 09:15:22', op: 'A. Miller [OPS-2]', status: 'USED', color: 'orange' },
                  { id: 'TSA-482-02', act: 'Product Contact Testing', time: '2026-01-26 10:22:14', op: 'S. Chen [OPS-1]', status: 'IN INCUBATION', color: 'blue' },
                  { id: 'TSA-482-03', act: 'Lab Sterility Check', time: '2026-01-26 11:05:08', op: 'R. Taylor [LAB-Q]', status: 'REJECTED', color: 'red' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-slate-700 text-xs">{row.id}</td>
                    <td className="px-8 py-5 text-slate-500 text-xs font-medium">{row.act}</td>
                    <td className="px-8 py-5 font-mono text-[10px] text-slate-400">{row.time}</td>
                    <td className="px-8 py-5 text-slate-700 font-bold text-xs">{row.op}</td>
                    <td className="px-8 py-5 text-right">
                       <span className={`px-2 py-0.5 text-[8px] font-black uppercase rounded bg-${row.color}-50 text-${row.color}-600 border border-${row.color}-200`}>
                         {row.status}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Report Footer */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-between items-center text-[9px] font-black text-slate-400 uppercase tracking-widest border-t border-slate-200 pt-6">
        <div>
          <p>MPATS-SEC-RPT-772 - REGULATORY GRADE DOCUMENT</p>
          <p className="mt-1 opacity-50 italic">All statistics derived from batch lifecycle records (READ-ONLY)</p>
        </div>
        <div className="flex gap-12 items-center">
           <div className="flex items-center gap-2">
             <span className="material-symbols-outlined text-xs">lock</span>
             GENERATED: JAN 26, 2026 14:20 GMT
           </div>
           <p className="text-slate-900">CONFIDENTIAL</p>
        </div>
      </div>
    </div>
  );
};

export default MediaStatistics;
