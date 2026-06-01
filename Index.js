import React, { useState } from 'react';
import Head from 'next/head';
import { BarChart2, Info, ChevronDown, GitPullRequest, AlertCircle } from 'lucide-react';

const mockRepositories = {
  "facebook/react": {
    name: "facebook / react",
    vitalityScore: 94,
    backlogIssues: 42,
    mergedPRs: 95,
    activeUnmergedPRs: 18,
    prVelocity: "High",
    issues: [
      { id: "R-101", title: "Fix concurrent rendering memory leak in Transition workflows", time: "2 hours ago" },
      { id: "R-102", title: "Severe: Suspense boundary falls back infinitely under network jitter", time: "5 hours ago" }
    ]
  },
  "vercel/next.js": {
    name: "vercel / next.js",
    vitalityScore: 89,
    backlogIssues: 112,
    mergedPRs: 340,
    activeUnmergedPRs: 57,
    prVelocity: "Extreme",
    issues: [
      { id: "N-401", title: "App Router: Edge runtime dynamic fetch caching mismatch", time: "12 mins ago" }
    ]
  }
};

export default function TelemetryDashboard() {
  const [selectedRepo, setSelectedRepo] = useState("facebook/react");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedIssue, setSelectedIssue] = useState(null);

  const currentData = mockRepositories[selectedRepo];

  return (
    <div className="min-h-screen bg-[#e6eef8] p-4 md:p-8 flex justify-center items-start font-sans text-slate-700">
      <Head>
        <title>GitHealth // Metric Telemetry Engine</title>
        <meta name="description" content="Track repository vitality status" />
      </Head>

      <div className="w-full max-w-md bg-[#e6eef8] rounded-3xl p-6 space-y-6" style={{ boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}>
        
        {/* Header / Inline SVG Logo */}
        <div className="flex items-center space-x-3 pt-2">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#e6eef8]" style={{ boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}>
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
            className="py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2"
            style={activeTab === 'dashboard' ? { boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff', color: '#2563eb' } : { boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}
          >
            <BarChart2 size={14} />
            <span>Dashboard</span>
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab("about")}
            className="py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2"
            style={activeTab === 'about' ? { boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff', color: '#2563eb' } : { boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}
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
              <div className="relative rounded-2xl bg-[#e6eef8]" style={{ boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}>
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
            <div className="p-5 rounded-2xl bg-[#e6eef8] text-center space-y-1" style={{ boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff' }}>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Repository Vitality Score</span>
              <div className="text-4xl font-black text-emerald-500 tracking-tight">{currentData.vitalityScore}%</div>
            </div>

            {/* Grid Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#e6eef8] space-y-1" style={{ boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Backlog / Merged</span>
                <div className="text-lg font-bold text-slate-700">{currentData.backlogIssues} <span className="text-xs text-slate-400">/ {currentData.mergedPRs}</span></div>
              </div>
              <div className="p-4 rounded-2xl bg-[#e6eef8] space-y-1" style={{ boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Unmerged PRs</span>
                <div className="text-lg font-bold text-amber-600 flex items-center space-x-1">
                  <GitPullRequest size={16} />
                  <span>{currentData.activeUnmergedPRs}</span>
                </div>
              </div>
            </div>

            {/* Velocity Info */}
            <div className="p-4 rounded-2xl bg-[#e6eef8] flex items-center justify-between" style={{ boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">PR Merge Velocity</span>
              <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl" style={{ boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff' }}>{currentData.prVelocity}</span>
            </div>

            {/* Issues List */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider px-1">Live Issue Registry</h3>
              {currentData.issues.map((issue) => (
                <div 
                  key={issue.id}
                  onClick={() => setSelectedIssue(selectedIssue === issue.id ? null : issue.id)}
                  className="p-4 rounded-2xl cursor-pointer transition-all bg-[#e6eef8]"
                  style={selectedIssue === issue.id ? { boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff' } : { boxShadow: '6px 6px 12px #c5cdd8, -6px -6px 12px #ffffff' }}
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
          <div className="p-4 rounded-2xl space-y-2 text-xs font-medium text-slate-600" style={{ boxShadow: 'inset 4px 4px 8px #c5cdd8, inset -4px -4px 8px #ffffff' }}>
            <h3 className="text-sm font-black text-slate-700 uppercase tracking-wider">Engine Purpose</h3>
            <p>GitHealth monitors development ecosystem telemetry directly on client UI terminals.</p>
          </div>
        )}
      </div>
    </div>
  );
}
