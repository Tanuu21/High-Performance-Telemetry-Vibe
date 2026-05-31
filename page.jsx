'use client';

import React, { useState } from 'react';
import { mockRepos } from './mockData';
import { BarChart3, ShieldAlert, Info, MessageSquare, ExternalLink, Activity, FolderGit2, AlertCircle, X, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('tracker');
  const [selectedRepo, setSelectedRepo] = useState('facebook/react');
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', message: '' });

  const currentRepo = mockRepos[selectedRepo];

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackSubmitted(false);
      setFeedbackForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen p-6 gap-6 max-w-[1600px] mx-auto">
      
      {/* SIDEBAR NAVIGATION PANEL */}
      <aside className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
        <div className="p-6 rounded-2xl shadow-neo-out flex items-center gap-3 bg-neo-bg">
          <div className="p-3 rounded-xl shadow-neo-in text-blue-600">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg tracking-tight text-slate-800">GitHealth</h1>
            <p className="text-xs font-semibold text-slate-500 tracking-wide">METRIC TELEMETRY ENGINE</p>
          </div>
        </div>

        <nav className="p-4 rounded-2xl shadow-neo-out flex flex-col gap-3 bg-neo-bg">
          <button 
            onClick={() => setActiveTab('tracker')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'tracker' ? 'shadow-neo-in text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <BarChart3 className="w-5 h-5" /> Tracker Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('about')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'about' ? 'shadow-neo-in text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <Info className="w-5 h-5" /> About Tracker
          </button>
          <button 
            onClick={() => setActiveTab('privacy')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'privacy' ? 'shadow-neo-in text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <ShieldAlert className="w-5 h-5" /> Privacy & Compliance
          </button>
          <button 
            onClick={() => setActiveTab('feedback')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${activeTab === 'feedback' ? 'shadow-neo-in text-blue-600 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}
          >
            <MessageSquare className="w-5 h-5" /> Feedback Queue
          </button>
        </nav>

        {/* REPOSITORY SELECTION MODULE */}
        {activeTab === 'tracker' && (
          <div className="p-5 rounded-2xl shadow-neo-out flex flex-col gap-4 bg-neo-bg">
            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-slate-400" /> Target Source Repository
            </label>
            <div className="relative">
              <select 
                value={selectedRepo}
                onChange={(e) => setSelectedRepo(e.target.value)}
                className="w-full bg-neo-bg text-slate-700 font-medium py-3 px-4 rounded-xl shadow-neo-out outline-none border border-transparent focus:border-blue-200 cursor-pointer appearance-none transition-all"
              >
                <option value="facebook/react">facebook / react</option>
                <option value="solana-labs/solana">solana-labs / solana</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">▼</div>
            </div>
          </div>
        )}
      </aside>

      {/* CORE DISPLAY STAGE */}
      <main className="flex-1 min-w-0">
        
        {/* VIEW 1: REPOSITORY DATA TRACKER */}
        {activeTab === 'tracker' && (
          <div className="flex flex-col gap-6">
            
            {/* CORE STATUS INFOGRAPHIC PANEL */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-2xl shadow-neo-out bg-neo-bg flex flex-col justify-between min-h-[140px]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Repository Vitality Score</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-4xl font-extrabold text-slate-800">{currentRepo.healthScore}%</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md shadow-neo-in ${currentRepo.healthScore >= 90 ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {currentRepo.healthScore >= 90 ? 'Optimal' : 'Warning Balance'}
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-2xl shadow-neo-out bg-neo-bg flex flex-col justify-between min-h-[140px]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Backlog Issues / Merged PRs</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-4xl font-extrabold text-slate-800">{currentRepo.openIssues} / {currentRepo.mergedPRs}</span>
                  <span className="text-xs font-semibold text-slate-500">Last 30d</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl shadow-neo-out bg-neo-bg flex flex-col justify-between min-h-[140px]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Active Unmerged PRs</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-4xl font-extrabold text-slate-800">{currentRepo.openPRs}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md text-blue-600 shadow-neo-in">Review Required</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl shadow-neo-out bg-neo-bg flex flex-col justify-between min-h-[140px]">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">PR Merge Velocity</span>
                <div className="flex items-baseline justify-between mt-2">
                  <span className="text-4xl font-extrabold text-slate-800">{currentRepo.velocity}</span>
                  <span className="text-xs font-semibold text-slate-400">Continuous Integration</span>
                </div>
              </div>
            </div>

            {/* REAL-TIME ISSUE TRACKER QUEUE */}
            <div className="p-6 rounded-2xl shadow-neo-out bg-neo-bg">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200/60 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-800">Live Dynamic Issue Registry</h2>
                  <p className="text-xs text-slate-500 font-medium">Click an element entry card below to reveal the full debug information module context</p>
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-xl shadow-neo-in text-slate-600 bg-neo-bg">
                  {currentRepo.issues.length} Issues Pulled
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {currentRepo.issues.map((issue) => (
                  <div 
                    key={issue.id}
                    onClick={() => setSelectedIssue(issue)}
                    className="p-4 rounded-xl shadow-neo-out hover:shadow-neo-in transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                  >
                    <div className="flex items-start gap-4 min-w-0">
                      <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 shadow-neo-in ${issue.status === 'Critical' ? 'text-rose-500' : issue.status === 'Major' ? 'text-amber-500' : 'text-slate-400'}`}>
                        <AlertCircle className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-slate-400 block tracking-tight mb-0.5">{issue.id}</span>
                        <h3 className="font-semibold text-slate-800 truncate group-hover:text-blue-600 transition-colors pr-2">{issue.title}</h3>
                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 font-medium">
                          <span>Opened by <b className="text-slate-600">@{issue.author}</b></span>
                          <span>•</span>
                          <span>{issue.created}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-slate-200/50">
                      <span className={`text-xs font-bold px-3 py-1 rounded-lg ${issue.status === 'Critical' ? 'bg-rose-50 text-rose-600 border border-rose-200' : issue.status === 'Major' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-slate-50 text-slate-600 border border-slate-200'}`}>
                        {issue.status}
                      </span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md shadow-neo-in text-slate-500">{issue.comments} comments</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: ABOUT THE SYSTEM CONTAINER */}
        {activeTab === 'about' && (
          <div className="p-8 rounded-2xl shadow-neo-out bg-neo-bg flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-800">About GitHealth Tracker Architecture</h2>
              <p className="text-sm text-slate-500 mt-1">Telemetry metric engine standard operational specifications</p>
            </div>
            <hr className="border-slate-200" />
            <p className="text-slate-600 leading-relaxed font-medium">
              This system compiles analytical health indicators from production software environments by looking at data pipelines. 
              By computing strict math equations against backlogs, incoming contribution traffic ratios, and code velocities, 
              GitHealth bypasses static repository reporting layers to output genuine development stability vectors.
            </p>
          </div>
        )}

        {/* VIEW 3: PRIVACY COMPLIANCE DECLARATION */}
        {activeTab === 'privacy' && (
          <div className="p-8 rounded-2xl shadow-neo-out bg-neo-bg flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-800">Privacy & Local Compliance Standard</h2>
              <p className="text-sm text-slate-500 mt-1">Data protection layer isolation framework parameters</p>
            </div>
            <hr className="border-slate-200" />
            <div className="flex flex-col gap-4 text-sm text-slate-600 font-medium leading-relaxed">
              <p><b>1. Context Transmission Isolation:</b> All queries communicate directly with GitHub servers. This application passes zero variables through external tracking servers.</p>
              <p><b>2. Encrypted Sandbox Persistence:</b> Configurations persist strictly within the user browser container using sandboxed localStorage blocks.</p>
              <p><b>3. Analytical Restraint:</b> We declare complete exclusion of invisible conversion tracking configurations or fingerprinting scripts.</p>
            </div>
          </div>
        )}

        {/* VIEW 4: SYSTEM FEEDBACK DISPATCH CONSOLE */}
        {activeTab === 'feedback' && (
          <div className="p-8 rounded-2xl shadow-neo-out bg-neo-bg flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-800">System Feedback Queue</h2>
              <p className="text-sm text-slate-500 mt-1">File architectural error statements or layout proposals directly into maintenance queues</p>
            </div>
            <hr className="border-slate-200" />
            
            {feedbackSubmitted ? (
              <div className="p-6 rounded-xl shadow-neo-in text-center flex flex-col items-center gap-3 bg-neo-bg my-8">
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                <h3 className="text-lg font-bold text-slate-800">Feedback Dispatched Successfully</h3>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase px-1">Operator Persona Name</label>
                    <input 
                      type="text" required
                      value={feedbackForm.name}
                      onChange={(e) => setFeedbackForm({...feedbackForm, name: e.target.value})}
                      placeholder="e.g. Creator Identity"
                      className="w-full shadow-neo-in bg-neo-bg rounded-xl py-3 px-4 outline-none border border-transparent focus:border-blue-300 transition-all font-medium text-slate-700"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-slate-500 uppercase px-1">Communications Routing Address</label>
                    <input 
                      type="email" required
                      value={feedbackForm.email}
                      onChange={(e) => setFeedbackForm({...feedbackForm, email: e.target.value})}
                      placeholder="developer@ecosystem.io"
                      className="w-full shadow-neo-in bg-neo-bg rounded-xl py-3 px-4 outline-none border border-transparent focus:border-blue-300 transition-all font-medium text-slate-700"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1">Feedback Payload Statement</label>
                  <textarea 
                    rows={4} required
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm({...feedbackForm, message: e.target.value})}
                    placeholder="Log architectural feedback variables..."
                    className="w-full shadow-neo-in bg-neo-bg rounded-xl py-3 px-4 outline-none border border-transparent focus:border-blue-300 transition-all font-medium text-slate-700 resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="mt-2 self-start px-6 py-3 rounded-xl font-bold text-sm tracking-wide text-blue-600 shadow-neo-out hover:shadow-neo-in active:scale-95 transition-all bg-neo-bg uppercase"
                >
                  Dispatch Payload
                </button>
              </form>
            )}
          </div>
        )}
      </main>

      {/* DETAILED DRILL-DOWN MODAL OVERLAY */}
      {selectedIssue && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-neo-bg rounded-2xl p-6 shadow-2xl border border-white/20 flex flex-col gap-5 relative">
            <button 
              onClick={() => setSelectedIssue(null)}
              className="absolute top-4 right-4 p-2 rounded-xl shadow-neo-out hover:shadow-neo-in text-slate-400 hover:text-slate-700 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            
            <div>
              <span className="text-xs font-bold text-blue-600 shadow-neo-in px-2.5 py-1 rounded-md bg-neo-bg">{selectedIssue.id} // Detailed Insight</span>
              <h3 className="text-xl font-bold text-slate-800 mt-3 pr-8 leading-snug">{selectedIssue.title}</h3>
            </div>

            <div className="grid grid-cols-3 gap-4 p-4 rounded-xl shadow-neo-in bg-neo-bg text-center">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Context Origin</span>
                <span className="text-xs font-bold text-slate-700 mt-0.5 block">@{selectedIssue.author}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Severity Profile</span>
                <span className="text-xs font-bold text-slate-700 mt-0.5 block">{selectedIssue.status}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Temporal Delay</span>
                <span className="text-xs font-bold text-slate-700 mt-0.5 block">{selectedIssue.created}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase px-1">Diagnostic Debug Log Reference</h4>
              <div className="p-4 rounded-xl shadow-neo-in bg-neo-bg text-xs font-mono text-slate-600 leading-relaxed whitespace-pre-wrap">
                [SYSTEM LOG INFO] Trigger state exception tracking initialized.
                Thread compilation vector reference: hash-id-2026-X99.
                Maintainer core action queue status: assigned to core development group.
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button 
                onClick={() => setSelectedIssue(null)}
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-500 hover:text-slate-800 uppercase tracking-wide transition-all"
              >
                Dismiss Modal
              </button>
              <a 
                href={`https://github.com/${selectedRepo}/issues`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-blue-600 shadow-neo-out hover:shadow-neo-in flex items-center gap-2 uppercase tracking-wide transition-all bg-neo-bg"
              >
                Inspect on GitHub <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
