
import React, { useState, useEffect } from 'react';
import { AppView } from '../types';

interface SidebarProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange }) => {
  const inventorySubItems = [
    { id: AppView.INVENTORY_POWDER, label: 'Media Powder' },
    { id: AppView.INVENTORY_SOLUTIONS, label: 'Solution' },
    { id: AppView.INVENTORY_CONTAINERS, label: 'Container' },
  ];

  const reconciliationSubItems = [
    { id: AppView.RECONCILE_POWDER, label: 'Media Powder' },
    { id: AppView.RECONCILE_SOLUTIONS, label: 'Solution' },
    { id: AppView.RECONCILE_CONTAINERS, label: 'Container' },
    { id: AppView.RECONCILE_BATCHES_LIST, label: 'Media Batch' },
  ];

  const reportsSubItems = [
    { id: AppView.REPORTS_STATISTICS, label: 'Media Statistics' },
  ];

  const isInventoryActive = inventorySubItems.some(item => item.id === currentView);
  const isReconcileActive = reconciliationSubItems.some(item => item.id === currentView) || currentView === AppView.RECONCILIATION;
  const isReportsActive = reportsSubItems.some(item => item.id === currentView);
  const isBatchActive = [AppView.BATCH_MANAGEMENT, AppView.BATCH_CREATION, AppView.MEDIA_PREP, AppView.STERILIZATION, AppView.DISPENSING, AppView.FINE_TUNING, AppView.QUALITY_VALIDATION, AppView.BATCH_DETAILS].includes(currentView);

  const [inventoryExpanded, setInventoryExpanded] = useState(isInventoryActive);
  const [reconcileExpanded, setReconcileExpanded] = useState(isReconcileActive);
  const [reportsExpanded, setReportsExpanded] = useState(isReportsActive);

  useEffect(() => {
    if (isInventoryActive) setInventoryExpanded(true);
    if (isReconcileActive) setReconcileExpanded(true);
    if (isReportsActive) setReportsExpanded(true);
  }, [isInventoryActive, isReconcileActive, isReportsActive]);

  return (
    <aside className="w-64 bg-[#F8FAFC] border-r border-gray-200 flex flex-col shrink-0 overflow-y-auto custom-scrollbar">
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#2D3E50] tracking-tighter">MPATS</h1>
      </div>
      
      <nav className="flex-1 px-4 space-y-1">
        {/* Dashboard */}
        <button
          onClick={() => onViewChange(AppView.DASHBOARD)}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all rounded-lg ${
            currentView === AppView.DASHBOARD 
            ? 'bg-white text-[#FF7043] font-bold shadow-sm' 
            : 'text-slate-500 hover:bg-gray-100'
          }`}
        >
          <span className={`material-symbols-outlined text-[20px] ${currentView === AppView.DASHBOARD ? 'text-[#FF7043]' : 'text-slate-400'}`}>
            grid_view
          </span>
          Dashboard
        </button>

        {/* Inventory Expandable */}
        <div>
          <button
            onClick={() => setInventoryExpanded(!inventoryExpanded)}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all rounded-lg ${
              isInventoryActive 
              ? 'bg-white text-[#FF7043] font-bold shadow-sm' 
              : 'text-slate-500 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`material-symbols-outlined text-[20px] ${isInventoryActive ? 'text-[#FF7043]' : 'text-slate-400'}`}>
                inventory
              </span>
              Inventory
            </div>
            <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${inventoryExpanded ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${inventoryExpanded ? 'max-h-64 mt-1 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="ml-8 border-l-2 border-slate-100 pl-2 space-y-1 py-1">
              {inventorySubItems.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => onViewChange(sub.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-[11px] uppercase tracking-wider font-bold transition-all rounded-md ${
                    currentView === sub.id 
                    ? 'text-[#FF7043] bg-orange-50/50' 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${currentView === sub.id ? 'bg-[#FF7043]' : 'bg-slate-200'}`}></div>
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Media Preparation Batch */}
        <button
          onClick={() => onViewChange(AppView.BATCH_MANAGEMENT)}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all rounded-lg ${
            isBatchActive 
            ? 'bg-white text-[#FF7043] font-bold shadow-sm' 
            : 'text-slate-500 hover:bg-gray-100'
          }`}
        >
          <span className={`material-symbols-outlined text-[20px] ${isBatchActive ? 'text-[#FF7043]' : 'text-slate-400'}`}>
            layers
          </span>
          Media Prep Batch
        </button>

        {/* Reconciliation Expandable */}
        <div>
          <button
            onClick={() => setReconcileExpanded(!reconcileExpanded)}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all rounded-lg ${
              isReconcileActive 
              ? 'bg-white text-[#FF7043] font-bold shadow-sm' 
              : 'text-slate-500 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`material-symbols-outlined text-[20px] ${isReconcileActive ? 'text-[#FF7043]' : 'text-slate-400'}`}>
                balance
              </span>
              Reconciliation
            </div>
            <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${reconcileExpanded ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${reconcileExpanded ? 'max-h-64 mt-1 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="ml-8 border-l-2 border-slate-100 pl-2 space-y-1 py-1">
              {reconciliationSubItems.map((sub) => {
                const isSubActive = currentView === sub.id || (sub.id === AppView.RECONCILE_BATCHES_LIST && currentView === AppView.RECONCILIATION);
                return (
                  <button
                    key={sub.id}
                    onClick={() => onViewChange(sub.id)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-[11px] uppercase tracking-wider font-bold transition-all rounded-md ${
                      isSubActive 
                      ? 'text-[#FF7043] bg-orange-50/50' 
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${isSubActive ? 'bg-[#FF7043]' : 'bg-slate-200'}`}></div>
                    {sub.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Reports Expandable */}
        <div>
          <button
            onClick={() => setReportsExpanded(!reportsExpanded)}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all rounded-lg ${
              isReportsActive 
              ? 'bg-white text-[#FF7043] font-bold shadow-sm' 
              : 'text-slate-500 hover:bg-gray-100'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`material-symbols-outlined text-[20px] ${isReportsActive ? 'text-[#FF7043]' : 'text-slate-400'}`}>
                bar_chart
              </span>
              Reports
            </div>
            <span className={`material-symbols-outlined text-lg transition-transform duration-300 ${reportsExpanded ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${reportsExpanded ? 'max-h-64 mt-1 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="ml-8 border-l-2 border-slate-100 pl-2 space-y-1 py-1">
              {reportsSubItems.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => onViewChange(sub.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-[11px] uppercase tracking-wider font-bold transition-all rounded-md ${
                    currentView === sub.id 
                    ? 'text-[#FF7043] bg-orange-50/50' 
                    : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full ${currentView === sub.id ? 'bg-[#FF7043]' : 'bg-slate-200'}`}></div>
                  {sub.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Audit Log */}
        <button
          onClick={() => onViewChange(AppView.AUDIT_LOG)}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all rounded-lg ${
            currentView === AppView.AUDIT_LOG 
            ? 'bg-white text-[#FF7043] font-bold shadow-sm' 
            : 'text-slate-500 hover:bg-gray-100'
          }`}
        >
          <span className={`material-symbols-outlined text-[20px] ${currentView === AppView.AUDIT_LOG ? 'text-[#FF7043]' : 'text-slate-400'}`}>
            history_edu
          </span>
          Audit Log
        </button>

        {/* Product Master */}
        <button
          onClick={() => onViewChange(AppView.PRODUCT_MASTER)}
          className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-all rounded-lg ${
            currentView === AppView.PRODUCT_MASTER 
            ? 'bg-white text-[#FF7043] font-bold shadow-sm' 
            : 'text-slate-500 hover:bg-gray-100'
          }`}
        >
          <span className={`material-symbols-outlined text-[20px] ${currentView === AppView.PRODUCT_MASTER ? 'text-[#FF7043]' : 'text-slate-400'}`}>
            fact_check
          </span>
          Product Master
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
