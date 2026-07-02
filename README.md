
#  Job Pilot — AI-Agent Powered Job Application & Analytics Platform

Job Pilot is an advanced full-stack application that leverages cloud-managed AI browser automation agents to find, match, and optimize the job application process for developers. Rather than scraping data through brittle selectors, it dynamically navigates real browsers across the web to research organizations and cross-analyze profiles.

##  Key Features
* **Browserbase & Stagehand Automation:** Spawns actual managed cloud browsers via Browserbase, driving agents through pages utilizing natural language logic with Stagehand to pull structural data rather than using fragile CSS selectors.
* **Resume Matching & Scoring System:** Programmatically scores found job openings against user profiles to highlight technical fit, identifying exact credential gaps and generating optimized matching metrics.
* **Automated Tailoring Engine:** Contextually updates and rewrites cover letters and tailors application resumes dynamically to increase response likelihood.
* **Product Analytics Integration:** Seamlessly handles user behavior analytics using PostHog to calculate engagement conversions, funnel drop-offs, and monitor model processing states.

##  Tech Stack & Agentic Framework
* **Framework:** Next.js (App Router, TypeScript, Tailwind CSS)
* **Browser Automation:** Browserbase (Managed Cloud Browsers), Stagehand (Natural Language Web Actions)
* **Product Analytics:** PostHog
* **Development Flow:** Agentic Development System (Architect, Remember, Review, Recover, and Imprint open-source patterns)

##  How to Run
1. Clone the repository: `git clone https://github.com/AyeshaK007/job_pilot.git`
2. Install dependencies:
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

