"use client";

import fetchClient from "@/lib/fetch-client";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyEmailForm() {
  const router = useRouter();
  const { update } = useSession();
  const searchParams = useSearchParams();
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const url = searchParams.get("url");
      const signature = searchParams.get("signature");
      const pathname = `${url}&signature=${signature}`;
      const response = await fetchClient({
        url: pathname,
      });

      if (!response.ok) {
        throw response;
      }

      await update({ type: "MANUAL" });

      router.push("/dashboard");
    } catch (error) {
      throw new Error("Could not verify email", { cause: error });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <button type="submit" className="px-2 py-2 text-blue-200 bg-blue-600 rounded">Click to Verify Email</button>
    </form>

  );
}
