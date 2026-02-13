
import React, { useState, useEffect } from 'react';
import { AppView } from '../types';

interface HeaderProps {
  currentView: AppView;
}

const Header: React.FC<HeaderProps> = ({ currentView }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getViewTitle = (view: AppView) => {
    switch (view) {
      case AppView.DASHBOARD: return 'Compliance Overview Dashboard';
      case AppView.BATCH_MANAGEMENT: return 'Media Batch Management';
      case AppView.BATCH_CREATION: return 'New Batch Creation';
      case AppView.MEDIA_PREP: return 'Media Powder & Solution Prep';
      case AppView.STERILIZATION: return 'Sterilization Process';
      case AppView.DISPENSING: return 'Manual Dispensing Entry';
      case AppView.FINE_TUNING: return 'Process Fine Tuning';
      case AppView.RECONCILIATION: return 'Final Batch Reconciliation';
      case AppView.QUALITY_VALIDATION: return 'Quality Release Validation';
      case AppView.INVENTORY_POWDER: return 'Media Powder Inventory';
      case AppView.INVENTORY_CONTAINERS: return 'Container Inventory';
      case AppView.INVENTORY_SOLUTIONS: return 'Solution Inventory';
      case AppView.AUDIT_LOG: return 'System Audit Trail';
      case AppView.PRODUCT_MASTER: return 'Media Product Master';
      case AppView.REPORTS_STATISTICS: return 'Media Statistics Report';
      default: return view.replace(/_/g, ' ');
    }
  };

  return (
    <div className="flex flex-col shrink-0 z-50">
      <header className="bg-[#2D3E50] text-white h-12 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-orange-400">menu</span>
          <h2 className="text-[11px] font-bold tracking-widest uppercase opacity-90">Microbial Media Plates Tracking & Management System</h2>
        </div>
        <div className="flex items-center gap-8 text-[11px] font-bold">
          <button className="flex items-center gap-1 hover:text-orange-400 transition-colors">
            <span className="material-symbols-outlined text-sm">help</span>
            Help
          </button>
          <div className="flex items-center gap-4">
            <span className="opacity-80">02 Feb 2026</span>
            <span className="font-mono tracking-widest">{time}</span>
          </div>
        </div>
      </header>
      
      <div className="bg-white border-b border-gray-200 h-14 flex items-center justify-between px-6 shadow-sm">
        <h1 className="text-sm font-black text-slate-800 uppercase tracking-tight">{getViewTitle(currentView)}</h1>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Session Logout In</span>
            <span className="text-xs font-black text-[#FF7043]">16:22</span>
          </div>
          <div className="h-8 w-px bg-gray-200"></div>
          <div className="flex items-center gap-4">
            <p className="text-xs font-black text-slate-700">P Shyam Kumar [ Admin ]</p>
            <div className="relative">
              <span className="material-symbols-outlined text-red-500 cursor-pointer">notifications</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-[8px] font-black text-white rounded-full flex items-center justify-center border-2 border-white">3</span>
            </div>
            <button className="material-symbols-outlined text-[#FF7043] transition-colors hover:text-orange-600">power_settings_new</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
