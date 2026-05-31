export const mockRepos = {
  "facebook/react": {
    name: "facebook/react",
    healthScore: 94,
    openIssues: 42,
    closedIssues: 180,
    openPRs: 18,
    mergedPRs: 95,
    velocity: "High",
    issues: [
      { id: "R-101", title: "Fix concurrent rendering memory leak in Transition workflows", status: "Critical", author: "gaearon", comments: 14, created: "2 hours ago" },
      { id: "R-102", title: "Docs: Update Server Components API reference architecture documentation", status: "Normal", author: "acdlite", comments: 3, created: "5 hours ago" },
      { id: "R-103", title: "Bug: DevTools profiling crashes systematically on exceptionally deep component trees", status: "Major", author: "bvaughn", comments: 22, created: "1 day ago" }
    ]
  },
  "solana-labs/solana": {
    name: "solana-labs/solana",
    healthScore: 81,
    openIssues: 114,
    closedIssues: 310,
    openPRs: 52,
    mergedPRs: 140,
    velocity: "Very High",
    issues: [
      { id: "S-404", title: "Optimize banking stage hash verification pipeline parallel processing loops", status: "Critical", author: "mvines", comments: 31, created: "1 hour ago" },
      { id: "S-405", title: "Feature: Add customized optional RPC endpoint aggressive rate limiting layer", status: "Normal", author: "carson-sol", comments: 8, created: "3 hours ago" }
    ]
  }
};