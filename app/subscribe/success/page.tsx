"use client";

import Link from "next/link";

const APP_SCHEME = process.env.NEXT_PUBLIC_APP_SCHEME ?? "numex";

export default function SuccessPage() {
  const deepLink = `${APP_SCHEME}://subscription/success`;

  return (
    <div className="max-w-sm w-full text-center mt-8">
      <div className="w-16 h-16 rounded-full bg-[#6C5CE7]/15 flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-[#6C5CE7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-2xl font-bold mb-2">You're now Pro!</h1>
      <p className="text-gray-400 text-sm mb-8">
        Your Numex Pro subscription is active. Enjoy unlimited voice transactions,
        AI insights, and all premium features.
      </p>

      <a
        href={deepLink}
        className="block w-full py-3.5 rounded-full bg-[#6C5CE7] hover:bg-[#5a4dd0] text-white font-semibold text-sm transition-colors text-center mb-3"
      >
        Open Numex App
      </a>

      <p className="text-xs text-gray-500">
        If the app doesn&apos;t open,{" "}
        <Link href="/" className="text-[#6C5CE7] hover:underline">
          return to home
        </Link>
        .
      </p>
    </div>
  );
}
