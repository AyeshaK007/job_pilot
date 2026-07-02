import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-background text-text-primary">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5">
          <Link href="/" className="inline-flex items-center gap-3 text-text-primary font-semibold">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-surface">
              JP
            </span>
            <span className="text-lg">JobPilot</span>
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            <Link href="/dashboard" className="text-sm font-medium text-text-dark">Dashboard</Link>
            <Link href="/find-jobs" className="text-sm font-medium text-text-dark">Find Jobs</Link>
            <Link href="/profile" className="text-sm font-medium text-text-dark">Profile</Link>
          </nav>
          <Link
            href="/login"
            className="rounded-[12px] bg-text-primary px-5 py-3 text-sm font-medium text-surface transition hover:bg-text-dark"
          >
            Start for free
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1440px] px-6 py-14">
        <div className="overflow-hidden rounded-[28px] bg-surface p-10 shadow-xl">
          <div className="relative overflow-hidden rounded-[28px] bg-surface p-10">
            <div className="pointer-events-none absolute -left-28 -top-24 h-72 w-72 rounded-full bg-accent-light blur-3xl" />
            <div className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-info-light blur-3xl" />
            <div className="relative mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Stop applying blind</p>
                <h1 className="mt-6 text-5xl font-semibold tracking-[-0.04em] text-text-primary sm:text-6xl">
                  Job hunting is hard. Your tools shouldn’t be.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-text-secondary">
                  Stop applying blind. JobPilot finds the jobs, researches the companies, and gives you everything you need to stand out.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/login"
                    className="inline-flex min-w-[180px] items-center justify-center rounded-[12px] bg-text-primary px-6 py-3 text-sm font-medium text-surface transition hover:bg-text-dark"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/find-jobs"
                    className="inline-flex min-w-[180px] items-center justify-center rounded-[12px] border border-border bg-surface text-sm font-medium text-text-primary transition hover:border-text-primary"
                  >
                    Find Your First Match
                  </Link>
                </div>
              </div>

              <div className="mt-16 overflow-hidden rounded-[24px] border border-border bg-surface-secondary p-4 shadow-sm">
                <div className="flex justify-center">
                  <Image
                    src="/images/dashboard-demo.png"
                    alt="Dashboard preview"
                    width={1200}
                    height={560}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    priority
                    className="h-auto w-full rounded-[20px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <div className="space-y-8">
            <div>
              <p className="text-3xl font-semibold tracking-[-0.03em] text-text-primary">Manage Your Job Search With Ease</p>
            </div>
            <div className="space-y-6 rounded-[24px] border border-border bg-surface p-8">
              <div>
                <p className="text-lg font-semibold text-text-primary">Find jobs that actually fit</p>
                <p className="mt-3 text-sm font-medium leading-7 text-text-secondary">
                  Search by title and location or paste a job link. Get matched roles you can quickly scan.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-text-primary">Know the Company Before You Apply</p>
                <p className="mt-3 text-sm font-medium leading-7 text-text-secondary">
                  Stop guessing what a company is about. JobPilot browses their site and gives you everything you need to apply with confidence.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-text-primary">Keep track of every application</p>
                <p className="mt-3 text-sm font-medium leading-7 text-text-secondary">
                  Keep a clear view of every job you’ve found, tailored and tracked in one simple place.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-border bg-surface p-6 shadow-sm">
            <Image
              src="/images/jobs-lists.png"
              alt="Jobs list preview"
              width={560}
              height={640}
              sizes="(max-width: 640px) 100vw, 560px"
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-16">
        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">
          <div className="rounded-[24px] border border-border bg-surface p-6 shadow-sm">
            <Image
              src="/images/agnet-log.png"
              alt="Agent log preview"
              width={420}
              height={360}
              sizes="(max-width: 420px) 100vw, 420px"
              className="h-auto w-full rounded-[20px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="text-3xl font-semibold tracking-[-0.03em] text-text-primary">Apply With More Confidence, Every Time</p>
            </div>
            <div className="space-y-5 rounded-[24px] border border-border bg-surface p-8">
              <div>
                <p className="text-base font-semibold text-text-primary">Understand your match score</p>
                <p className="mt-2 text-sm font-medium leading-7 text-text-secondary">
                  See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what’s missing.
                </p>
              </div>
              <div>
                <p className="text-base font-semibold text-text-primary">AI-Powered Job Matching</p>
                <p className="mt-2 text-sm font-medium leading-7 text-text-secondary">
                  Stop guessing which jobs are worth applying to. JobPilot scores every role against your actual skills so you focus on the ones that matter.
                </p>
              </div>
              <div>
                <p className="text-base font-semibold text-text-primary">Focus on the right roles</p>
                <p className="mt-2 text-sm font-medium leading-7 text-text-secondary">
                  Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-20">
        <div className="rounded-[28px] bg-surface p-10 shadow-xl">
          <div className="relative overflow-hidden rounded-[28px] bg-surface p-10">
            <div className="pointer-events-none absolute -left-28 -top-16 h-72 w-72 rounded-full bg-accent-light blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-info-light blur-3xl" />
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Success stories</p>
              <p className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-text-primary sm:text-4xl">
                “I used to spend my evenings copy-pasting resumes. Now I open my dashboard to see interviews waiting. It feels like cheating. Had 3 offers on the table simultaneously.”
              </p>
              <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-surface-secondary px-5 py-3">
                <Image src="/images/user-icon.png" alt="Tom Wilson" width={40} height={40} className="rounded-full" />
                <div className="text-left">
                  <p className="text-sm font-semibold text-text-primary">Tom Wilson</p>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">Junior Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-surface p-14 shadow-xl">
          <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent-light blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-info-light blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
              Your next job search can feel a lot less overwhelming
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-text-secondary">
              Set up your profile, upload your resume, and start finding matches in minutes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex min-w-[180px] items-center justify-center rounded-[12px] bg-text-primary px-6 py-3 text-sm font-medium text-surface transition hover:bg-text-dark"
              >
                Get Started
              </Link>
              <Link
                href="/find-jobs"
                className="inline-flex min-w-[180px] items-center justify-center rounded-[12px] border border-border bg-surface text-sm font-medium text-text-primary transition hover:border-text-primary"
              >
                Find Your First Match
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-text-primary">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-surface">JP</span>
            <span className="font-semibold">JobPilot</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
