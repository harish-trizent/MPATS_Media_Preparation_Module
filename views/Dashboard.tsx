
import React from 'react';

const Dashboard: React.FC = () => {
  const kpis = [
    { label: 'Available Media', value: '42,500', unit: 'gms', color: 'border-emerald-500', sub: 'QC Approved' },
    { label: 'In Preparation', value: '12', unit: 'Batches', color: 'border-blue-500', sub: 'Active Processes' },
    { label: 'Near Expiry', value: '08', unit: 'Lots', color: 'border-amber-500', sub: '< 30 Days' },
    { label: 'Lab Rejections', value: '03', unit: 'Events', color: 'border-red-500', sub: 'Critical Disposal' },
  ];

  return (
    <div className="p-8 max-w-full">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-2xl font-black text-slate-800">Compliance Overview</h2>
          <p className="text-slate-500 text-sm">Real-time monitoring of microbial media lifecycle and quality metrics.</p>
        </div>
        <button className="bg-[#FF7043] text-white px-6 py-2.5 rounded-lg shadow-lg shadow-orange-500/20 font-bold text-sm uppercase tracking-wide hover:brightness-110 transition-all">
          New Prep Batch
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {kpis.map((kpi, idx) => (
          <div key={idx} className={`bg-white p-6 rounded-xl border-t-4 ${kpi.color} shadow-sm flex flex-col gap-1`}>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{kpi.label}</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-black text-slate-800">{kpi.value}</span>
              <span className="text-sm font-bold text-slate-400">{kpi.unit}</span>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mt-2 italic">{kpi.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#FF7043]">analytics</span>
              Recent Activity Logs
            </h3>
            <button className="text-[10px] font-black text-[#FF7043] uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-[10px] font-black text-gray-400 uppercase tracking-widest border-b border-gray-100">
                  <th className="px-6 py-4">Batch ID</th>
                  <th className="px-6 py-4">Activity</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Operator</th>
                  <th className="px-6 py-4 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { id: '#MB-2023-001', act: 'Sterilization', status: 'In Progress', op: 'M. Rajesh', time: '14:22' },
                  { id: '#MB-2023-005', act: 'Dispensing', status: 'Completed', op: 'S. Kapoor', time: '13:05' },
                  { id: '#MB-2023-008', act: 'Validation', status: 'Success', op: 'L. Mehra', time: '11:45' },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-700 text-sm">{row.id}</td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{row.act}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                        row.status === 'Success' || row.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-sm">{row.op}</td>
                    <td className="px-6 py-4 text-slate-400 font-mono text-xs text-right">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col">
          <h3 className="font-bold text-slate-800 flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-amber-500">warning</span>
            Alerts & Notifications
          </h3>
          <div className="space-y-4 flex-1">
            {[
              { msg: 'Incubator Temperature Deviation: Unit 04', type: 'error', time: '2m ago' },
              { msg: 'Calibration Due: Electronic Balance BL-QC-009', type: 'warning', time: '45m ago' },
              { msg: 'New Inventory Received: LOT-SDA-2024', type: 'info', time: '1h ago' },
            ].map((alert, i) => (
              <div key={i} className={`p-3 rounded-lg border-l-4 flex flex-col gap-1 ${
                alert.type === 'error' ? 'bg-red-50 border-red-500' : 
                alert.type === 'warning' ? 'bg-amber-50 border-amber-500' : 'bg-blue-50 border-blue-500'
              }`}>
                <p className="text-xs font-bold text-slate-700">{alert.msg}</p>
                <span className="text-[10px] text-slate-400 font-medium">{alert.time}</span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2 bg-slate-100 rounded-lg text-[10px] font-black uppercase text-slate-500 hover:bg-slate-200 transition-all">Clear All Alerts</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
