export const mockRepositories = {
  "facebook/react": {
    name: "facebook / react",
    vitalityScore: 94,
    backlogIssues: 42,
    mergedPRs: 95,
    activeUnmergedPRs: 18,
    prVelocity: "High",
    issues: [
      { id: "R-101", title: "Fix concurrent rendering memory leak in Transition workflows", user: "gaearon", time: "2 hours ago" },
      { id: "R-102", title: "Severe: Suspense boundary falls back infinitely under network jitter", user: "sebmarkbage", time: "5 hours ago" },
      { id: "R-103", title: "Docs: Clarify useActionState state mutation constraints", user: "acdlite", time: "1 day ago" }
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
      { id: "N-401", title: "App Router: Edge runtime dynamic fetch caching mismatch on cold boot", user: "timneutkens", time: "12 mins ago" },
      { id: "N-402", title: "Turbopack fails to resolve conditional exports in monorepos", user: "sokra", time: "3 hours ago" }
    ]
  },
  "tailwindlabs/tailwindcss": {
    name: "tailwindlabs / tailwindcss",
    vitalityScore: 98,
    backlogIssues: 8,
    mergedPRs: 120,
    activeUnmergedPRs: 4,
    prVelocity: "Moderate",
    issues: [
      { id: "T-801", title: "V4 Alpha: Container queries engine breaking on nested arbitrary variants", user: "adamwathan", time: "45 mins ago" }
    ]
  }
};
