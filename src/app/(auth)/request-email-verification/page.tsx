import { authOptions } from "@/lib/auth";
import fetchServer from "@/lib/fetch-server";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email_verified_at) {
    redirect("/dashboard");
  }

  async function sendVerificationLink() {
    "use server";

    try {
      const response = await fetchServer({
        method: "POST",
        url: process.env.NEXT_PUBLIC_BACKEND_API_URL + "/api/email/verification-notification",
      });

      if (!response.ok) {
        throw response;
      }
    } catch (error) {
      throw new Error("Could not send email verification request", { cause: error });
    }
  }

  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 bg-white">
        <div className="max-w-xl px-5 text-center">
          <h2 className="mb-2 text-[42px] font-bold text-zinc-800">Check your inbox</h2>
          <p className="mb-2 text-lg text-zinc-500">We are glad, that you’re with us ? We’ve sent you a verification link to the your email address.</p>
        </div>
      </div>
    </>
  );
}
