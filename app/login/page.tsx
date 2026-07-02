"use client";

import { useState } from "react";
import { insforge } from "@/lib/insforge-client";

const providers = [
  { id: "google", name: "Continue with Google", color: "bg-surface text-text-primary border border-border hover:bg-surface-secondary" },
  { id: "github", name: "Continue with GitHub", color: "bg-surface text-text-primary border border-border hover:bg-surface-secondary" },
];

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = async (providerId: string) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await insforge.auth.signInWithOAuth(providerId, {
        redirectTo: `${window.location.origin}/dashboard`,
      });

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      if (data?.url) {
        window.location.href = data.url;
        return;
      }

      setLoading(false);
    } catch (caught) {
      setError((caught as Error).message || "Failed to sign in. Please try again.");
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-14">
      <div className="w-full max-w-md rounded-[28px] border border-border bg-surface p-10 shadow-xl">
        <div className="space-y-6 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-accent text-surface text-2xl font-semibold">
            JP
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Welcome back</p>
            <h1 className="mt-4 text-3xl font-semibold text-text-primary">Sign in to JobPilot</h1>
            <p className="mt-3 text-sm leading-6 text-text-secondary">Use Google or GitHub to quickly access your dashboard and job matches.</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {providers.map((provider) => (
            <button
              key={provider.id}
              type="button"
              disabled={loading}
              onClick={() => signIn(provider.id)}
              className={`${provider.color} flex w-full items-center justify-center gap-3 rounded-[16px] px-4 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60`}
            >
              {loading ? "Redirecting..." : provider.name}
            </button>
          ))}
        </div>

        {error ? (
          <div className="mt-6 rounded-[20px] border border-error bg-error-light p-4 text-sm text-error-dark">
            {error}
          </div>
        ) : null}

        <div className="mt-8 rounded-[20px] bg-surface-secondary p-5 text-sm text-text-secondary">
          <p className="font-semibold text-text-primary">Need help?</p>
          <p className="mt-2">If the redirect does not work, please check your browser settings and try again.</p>
        </div>
      </div>
    </main>
  );
}
