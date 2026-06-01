import React, { useState } from 'react';
import { BarChart2, Info, ChevronDown, GitPullRequest, AlertCircle } from 'lucide-react';
import { mockRepositories } from './mockData';

export default function TelemetryDashboard() {
  const [selectedRepo, setSelectedRepo] = useState("facebook/react");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedIssue, setSelectedIssue] = useState(null);

  const currentData = mockRepositories[selectedRepo];

  return (
    <div className="min-h-screen bg-neo-bg p-4 md:p-8 flex justify-center items-start font-sans">
      <div className="w-full max-w-md bg-neo-bg rounded-3xl p-6 shadow-neo-out space-y-6">
        
        {/* Header / Integrated Logo */}
        <div className="flex items-center space-x-3 pt-2">
          <div className="w-12 h-12 rounded-2xl shadow-neo-out flex items-center justify-center bg-neo-bg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            </svg>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-800">GitHealth</h1>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Metric Telemetry Engine</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            type="button"
            onClick={() => setActiveTab("dashboard")}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${activeTab === 'dashboard' ? 'shadow-neo-in text-blue-600' : 'shadow-neo-out text-slate-600'}`}
          >
            <BarChart2 size={14} />
            <span>Dashboard</span>
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab("about")}
            className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${activeTab === 'about' ? 'shadow-neo-in text-blue-600' : 'shadow-neo-out text-slate-600'}`}
          >
            <Info size={14} />
            <span>About</span>
          </button>
        </div>

        {activeTab === 'dashboard' ? (
          <>
            {/* Repo Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block px-1">Target Source Repository</label>
              <div className="relative shadow-neo-out rounded-2xl bg-neo-bg">
                <select 
                  value={selectedRepo} 
                  onChange={(e) => { setSelectedRepo(e.target.value); setSelectedIssue(null); }}
                  className="w-full bg-transparent p-4 pr-10 text-sm font-bold text-slate-700 appearance-none rounded-2xl focus:outline-none cursor-pointer"
                >
                  <option value="facebook/react">facebook / react</option>
                  <option value="vercel/next.js">vercel / next.js</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Score Component */}
            <div className="p-5 rounded-2xl shadow-neo-in bg-neo-bg text-center space-y-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Repository Vitality Score</span>
              <div className="text-4xl font-black text-emerald-500 tracking-tight">{currentData.vitalityScore}%</div>
            </div>

            {/* Grid Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl shadow-neo-out bg-neo-bg space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Backlog / Merged</span>
                <div className="text-lg font-bold text-slate-700">{currentData.backlogIssues} <span className="text-xs text-slate-400">/ {currentData.mergedPRs}</span></div>
              </div>
              <div className="p-4 rounded-2xl shadow-neo-out bg-neo-bg space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Unmerged PRs</span>
                <div className="text-lg font-bold text-amber-600 flex items-center space-x-1">
                  <GitPullRequest size={16} />
                  <span>{currentData.activeUnmergedPRs}</span>
                </div>
              </div>
            </div>

            {/* Velocity Info */}
            <div className="p-4 rounded-2xl shadow-neo-out bg-neo-bg flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">PR Merge Velocity</span>
              <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl shadow-neo-in">{currentData.prVelocity}</span>
            </div>

            {/* Issues List */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider px-1">Live Issue Registry</h3>
              {currentData.issues.map((issue) => (
                <div 
                  key={issue.id}
                  onClick={() => setSelectedIssue(selectedIssue === issue.id ? null : issue.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all ${selectedIssue === issue.id ? 'shadow-neo-in bg-slate-50/50' : 'shadow-neo-out bg-neo-bg'}`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-red-500 mt-0.5"><AlertCircle size={16} /></div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black text-slate-400">{issue.id}</span>
                        <span className="text-[10px] text-slate-400">{issue.time}</span>
                      </div>
                      <p className="text-xs font-bold text-slate-700">{issue.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="p-4 rounded-2xl shadow-neo-in bg-neo-bg space-y-2 text-xs font-medium text-slate-600">
            <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">Engine Purpose</h3>
            <p>GitHealth monitors development ecosystem telemetry directly on client UI terminals.</p>
          </div>
        )}
      </div>
    </div>
  );
}
