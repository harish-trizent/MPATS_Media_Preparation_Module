
import React, { useState, useRef } from 'react';

interface SterilizationProps {
  onNext: () => void;
  onBack: () => void;
}

const Sterilization: React.FC<SterilizationProps> = ({ onNext, onBack }) => {
  const [maxTemp, setMaxTemp] = useState<number>(121.2);
  const [avgPressure, setAvgPressure] = useState<number>(15.1);
  const [duration, setDuration] = useState<number>(20);
  const [location, setLocation] = useState<string>('Sterilization Room - Wing B');
  const [justification, setJustification] = useState<string>('');
  
  // Steam Clox specific states
  const [cloxPassed, setCloxPassed] = useState<boolean | null>(null);
  const [cloxImage, setCloxImage] = useState<string | null>(null);
  const [cloxRemarks, setCloxRemarks] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Broadened Deviation Logic: triggers if any parameter is outside SOP range
  // Temp: 121.0 +/- 0.5 | Pressure: 15.0 +/- 0.5 | Duration: Min 20
  const isProcessDeviation = 
    (maxTemp > 121.5 || maxTemp < 120.5) || 
    (avgPressure > 15.5 || avgPressure < 14.5) || 
    (duration < 20);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCloxImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F3F6F9] font-['Inter']">
      {/* View Header */}
      <div className="bg-white px-8 py-4 shrink-0 border-b border-slate-100 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-black text-[#2D3E50] tracking-tight">Media Sterilization</h2>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xs font-black">check</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xs font-black">check</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black ring-4 ring-slate-100">3</div>
              <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-300 flex items-center justify-center text-[10px] font-black">4</div>
              
              <div className="ml-6 flex flex-col">
                <span className="text-[7px] font-black text-orange-500 uppercase tracking-[0.2em] leading-none">Active Phase</span>
                <span className="text-[9px] font-black text-[#2D3E50] uppercase tracking-wider">Thermal Sterilization Cycle</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Batch Info Sub-Header */}
        <div className="flex items-center justify-between border-t border-slate-50 pt-4 pb-2">
          <div className="flex gap-10">
            <div className="space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Media Type</p>
              <p className="text-[11px] font-black text-[#2D3E50]">Tryptic Soy Agar (TSA)</p>
            </div>
            <div className="space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Batch ID</p>
              <p className="text-[11px] font-black text-[#2D3E50]">#B9920-TSA</p>
            </div>
            <div className="space-y-0.5 text-center">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Target Temp</p>
              <p className="text-[11px] font-black text-emerald-600">121.0°C ± 0.5</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right space-y-0.5">
              <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Equipment Reference</p>
              <p className="text-[11px] font-black text-[#2D3E50]">STR-AUTO-001 [AC-01]</p>
            </div>
            <button className="bg-[#2D3E50] text-white w-8 h-8 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors shadow-sm">
              <span className="material-symbols-outlined text-xs">settings_suggest</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="grid grid-cols-12 gap-6 items-start">
          
          {/* Main Content Column */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            
            {/* 01 Autoclave Selection */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-3">
                 <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">01</div>
                 <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Autoclave Selection</h3>
              </div>
              <div className="p-6 grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Select Unit *</label>
                  <div className="relative">
                    <select className="w-full pl-4 pr-10 py-2.5 bg-slate-50/50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                      <option>AC-01 (Wing B - Sterile Area)</option>
                      <option>AC-02 (Wing B - Washing)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-300">expand_more</span>
                  </div>
                  <div className="flex items-center gap-2 text-[8px] font-bold text-emerald-500 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Operational Status: Ready
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Location</label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 outline-none focus:border-orange-500 focus:bg-white transition-all"
                    />
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-300 text-sm">location_on</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 02 Observed Parameters (Manual Entry) */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-3">
                 <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">02</div>
                 <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Observed Parameters (Manual Entry)</h3>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-12 gap-8">
                  <div className="col-span-12 lg:col-span-7 flex flex-col justify-between">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Avg Pressure (psi)</label>
                        <input 
                          type="number" 
                          step="0.1"
                          value={avgPressure}
                          onChange={(e) => setAvgPressure(parseFloat(e.target.value) || 0)}
                          className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-lg font-black outline-none transition-all ${ (avgPressure > 15.5 || avgPressure < 14.5) ? 'border-red-200 text-red-600 focus:border-red-500' : 'border-slate-100 text-slate-800 focus:border-orange-500'}`} 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Hold Duration (min)</label>
                        <div className="flex items-center gap-3">
                          <input 
                            type="number" 
                            value={duration}
                            onChange={(e) => setDuration(parseInt(e.target.value) || 0)}
                            className={`w-full px-4 py-3 bg-white border-2 rounded-xl text-lg font-black outline-none transition-all ${ duration < 20 ? 'border-red-200 text-red-600 focus:border-red-500' : 'border-slate-100 text-slate-800 focus:border-orange-500'}`} 
                          />
                          <span className="text-[10px] font-black text-slate-300 uppercase">Min</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-around text-center">
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Temp</p>
                        <p className="text-xl font-black text-slate-600 tracking-tight">121.0°C</p>
                      </div>
                      <div className="h-10 w-px bg-slate-200"></div>
                      <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Target Pressure</p>
                        <p className="text-xl font-black text-slate-600 tracking-tight">15.0 psi</p>
                      </div>
                    </div>
                  </div>

                  {/* Input-Enabled Max Temp Observed Card */}
                  <div className="col-span-12 lg:col-span-5">
                    <div className={`h-full bg-white border-[4px] rounded-[2.5rem] flex flex-col items-center justify-center p-6 transition-all duration-300 ${ (maxTemp > 121.5 || maxTemp < 120.5) ? 'border-red-500 shadow-[0_0_40px_-10px_rgba(239,68,68,0.15)]' : 'border-[#2D3E50]'}`}>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Max Temp Observed *</p>
                      <div className="flex items-center justify-center gap-2 w-full group">
                        <input 
                          type="number" 
                          step="0.1"
                          value={maxTemp}
                          onChange={(e) => setMaxTemp(parseFloat(e.target.value) || 0)}
                          className={`w-32 bg-transparent border-none outline-none text-center text-6xl font-black tracking-tighter p-0 focus:ring-0 appearance-none ${ (maxTemp > 121.5 || maxTemp < 120.5) ? 'text-red-600' : 'text-[#2D3E50]'}`}
                        />
                        <span className="text-2xl font-black text-slate-200">°C</span>
                      </div>
                      <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-2 group-hover:text-[#FF7043] transition-colors">Direct Entry Mode</p>
                    </div>
                  </div>
                </div>

                {/* Deviation Alert UI precisely matching user screenshot */}
                {isProcessDeviation && (
                  <div className="mt-8 bg-[#FFF5F5] border border-[#FEE2E2] rounded-lg p-6 flex gap-6 animate-in slide-in-from-top-2">
                    <div className="shrink-0">
                      <div className="w-10 h-10 rounded-full bg-[#FEE2E2] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#B91C1C] font-black text-2xl">warning</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h4 className="text-xs font-black text-[#B91C1C] uppercase tracking-wider mb-1">MANUAL OBSERVATION DEVIATION DETECTED</h4>
                        <p className="text-[11px] text-[#991B1B] font-medium leading-relaxed">
                          { (maxTemp > 121.5 || maxTemp < 120.5) && `The entered temperature (${maxTemp.toFixed(1)}°C) exceeds the SOP tolerance of ±0.5°C. `}
                          { (avgPressure > 15.5 || avgPressure < 14.5) && `The entered pressure (${avgPressure.toFixed(1)} psi) exceeds the SOP tolerance of ±0.5 psi. `}
                          { duration < 20 && `The entered duration (${duration} min) is below the SOP minimum requirement of 20 min. `}
                          Please provide a justification for this deviation to proceed with audit compliance.
                        </p>
                      </div>
                      <textarea 
                        value={justification}
                        onChange={(e) => setJustification(e.target.value)}
                        placeholder="Enter justification..."
                        className="w-full bg-white border border-[#E5E7EB] rounded-lg p-4 text-[11px] font-medium text-slate-600 outline-none min-h-[80px] resize-none focus:ring-2 focus:ring-red-500/10 shadow-sm"
                      ></textarea>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 04 Safety & Compliance Checklist */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-3 border-b border-slate-100 flex items-center gap-3">
                 <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">04</div>
                 <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Safety & Compliance Checklist</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-12 gap-6">
                  {/* General Checks */}
                  <div className="col-span-12 md:col-span-4 space-y-3">
                    {[
                      'Vessel vacuum seal confirmed',
                      'Load density verified',
                      'Water levels validated'
                    ].map((check, i) => (
                      <label key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50/30 hover:bg-slate-50 transition-all cursor-pointer group">
                        <div className="w-5 h-5 rounded border-2 border-slate-200 flex items-center justify-center bg-white group-hover:border-orange-500 transition-colors">
                          <input type="checkbox" className="hidden" />
                          <div className="w-2.5 h-2.5 rounded-sm bg-orange-500 scale-0 transition-transform"></div>
                        </div>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-tight">{check}</span>
                      </label>
                    ))}
                  </div>

                  {/* Steam Clox Indicator Section */}
                  <div className="col-span-12 md:col-span-8">
                    <div className={`p-6 rounded-2xl border-2 transition-all ${cloxPassed === false ? 'border-red-200 bg-red-50/30' : 'border-slate-100 bg-slate-50/50'}`}>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Steam Clox Indicator Result</h4>
                            <div className="flex bg-white rounded-lg p-1 border border-slate-200">
                               <button 
                                 onClick={() => setCloxPassed(true)}
                                 className={`px-4 py-1.5 rounded-md text-[9px] font-black uppercase tracking-wider transition-all ${cloxPassed === true ? 'bg-emerald-500 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                               >Pass</button>
                               <button 
                                 onClick={() => setCloxPassed(false)}
                                 className={`px-4 py-1.5 rounded-md text-[9px] font-black uppercase tracking-wider transition-all ${cloxPassed === false ? 'bg-red-500 text-white shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                               >Fail</button>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex-1">
                               <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Indicator Evidence Upload *</p>
                               <input 
                                 type="file" 
                                 ref={fileInputRef}
                                 onChange={handleImageUpload}
                                 accept="image/*"
                                 className="hidden" 
                               />
                               <button 
                                 onClick={() => fileInputRef.current?.click()}
                                 className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-200 rounded-xl bg-white hover:border-orange-500 transition-all text-slate-400 hover:text-orange-500"
                               >
                                 <span className="material-symbols-outlined text-sm">photo_camera</span>
                                 <span className="text-[10px] font-black uppercase tracking-widest">{cloxImage ? 'Change Image' : 'Upload Indicator Image'}</span>
                               </button>
                            </div>
                            {cloxImage && (
                              <div className="w-24 h-24 rounded-xl border-2 border-white shadow-md overflow-hidden bg-white shrink-0">
                                <img src={cloxImage} alt="Indicator" className="w-full h-full object-cover" />
                              </div>
                            )}
                          </div>
                        </div>

                        {cloxPassed === false && (
                          <div className="flex-1 animate-in slide-in-from-right-2 duration-300">
                            <div className="space-y-2">
                              <label className="text-[9px] font-black text-red-600 uppercase tracking-widest flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">warning</span>
                                Indicator Deviation Remarks *
                              </label>
                              <textarea 
                                value={cloxRemarks}
                                onChange={(e) => setCloxRemarks(e.target.value)}
                                placeholder="State reason for indicator failure..."
                                className="w-full bg-white border border-red-100 rounded-xl p-3 text-[10px] font-medium text-slate-600 outline-none min-h-[100px] resize-none focus:ring-2 focus:ring-red-500/10"
                              ></textarea>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Column (Process Events) */}
          <div className="col-span-12 lg:col-span-4 space-y-6 h-full">
            
            {/* 03 Sterilization Process Events (Manual Entry) */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
              <div className="px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                 <div className="w-6 h-6 rounded-md bg-[#2D3E50] text-white flex items-center justify-center text-[10px] font-black">03</div>
                 <h3 className="text-[10px] font-black text-[#2D3E50] uppercase tracking-widest">Process Events (Manual Entry)</h3>
              </div>
              <div className="p-6 space-y-8 flex-1">
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Cycle Start Date & Time</label>
                  <div className="relative group">
                    <input type="datetime-local" className="w-full px-4 py-3 bg-[#F9FAFB] border border-slate-100 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-orange-500 focus:bg-white transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Time 121°C attained</label>
                    <span className="text-[8px] font-black text-orange-500 bg-orange-50 px-2 py-0.5 rounded tracking-tighter">Critical Node</span>
                  </div>
                  <input type="time" className="w-full px-4 py-3 bg-[#F9FAFB] border border-slate-100 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-orange-500 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Retained Duration (min)</label>
                  <input type="number" defaultValue={15} className="w-full px-4 py-3 bg-[#F9FAFB] border border-slate-100 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-orange-500 focus:bg-white transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Pressure Release Time</label>
                  <input type="time" className="w-full px-4 py-3 bg-[#F9FAFB] border border-slate-100 rounded-xl text-xs font-bold text-slate-700 outline-none focus:border-orange-500 focus:bg-white transition-all" />
                </div>

                <div className="pt-8 border-t border-slate-100 space-y-4">
                  {/* SOP Guideline */}
                  <div className="bg-[#EEF6FF] border border-blue-100 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3 text-blue-600">
                      <span className="material-symbols-outlined text-sm font-black">info</span>
                      <span className="text-[9px] font-black uppercase tracking-[0.2em]">SOP Guideline</span>
                    </div>
                    <p className="text-[11px] text-blue-800 italic leading-relaxed font-medium">
                      "Ensure autoclave door seal is inspected. Cycle data must be cross-verified with physical chart recorders if available."
                    </p>
                  </div>

                  {/* Sidebar Deviation Alert */}
                  {isProcessDeviation && (
                    <div className="bg-[#FFF5F5] border border-[#FEE2E2] rounded-lg p-6 animate-in fade-in slide-in-from-top-1">
                      <div className="flex items-center gap-3 mb-3 text-[#B91C1C]">
                        <span className="material-symbols-outlined text-sm font-black">report_problem</span>
                        <span className="text-[9px] font-black uppercase tracking-[0.2em]">Critical Deviation Detected</span>
                      </div>
                      <p className="text-[11px] text-[#991B1B] font-bold leading-relaxed">
                        Cycle parameters are outside the validated range. Mandatory justification and secondary review required before batch release.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="bg-white border-t border-slate-200 px-10 py-6 flex items-center justify-between shrink-0 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.05)]">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 px-8 py-3.5 text-[11px] font-black text-slate-500 uppercase tracking-widest border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Preparation
        </button>
        
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-emerald-500 font-black">shield_with_heart</span>
            <div className="flex flex-col">
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Safety Lock Status</span>
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-wider">Parameters Verified - Safe to Open</span>
            </div>
          </div>
          <button className="text-[11px] font-black text-slate-400 uppercase tracking-widest hover:text-red-500 transition-colors">Abort Cycle</button>
          <button 
            onClick={onNext}
            disabled={(cloxPassed === null || (cloxPassed === false && !cloxRemarks)) || (isProcessDeviation && !justification)}
            className="bg-[#FF7043] text-white flex items-center gap-4 px-12 py-4 rounded-2xl shadow-xl shadow-orange-500/30 font-black text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
          >
            Complete & Dispense
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sterilization;
