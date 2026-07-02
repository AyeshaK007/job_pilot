import { redirect } from "next/navigation";
import { createInsforgeServer } from "@/lib/insforge-server";

export default async function DashboardPage() {
  const insforge = await createInsforgeServer();
  const { data, error } = await insforge.auth.getCurrentUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-background px-6 py-14">
      <div className="mx-auto max-w-4xl rounded-[28px] border border-border bg-surface p-10 shadow-xl">
        <h1 className="text-3xl font-semibold text-text-primary">Dashboard</h1>
        <p className="mt-3 text-base text-text-secondary">Welcome back, {data.user.email}.</p>
      </div>
    </main>
  );
}
