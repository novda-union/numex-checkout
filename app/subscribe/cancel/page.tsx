"use client";

import Link from "next/link";

const APP_SCHEME = process.env.NEXT_PUBLIC_APP_SCHEME ?? "numex";

export default function CancelPage() {
  const deepLink = `${APP_SCHEME}://subscription/cancel`;

  return (
    <div className="max-w-sm w-full text-center mt-8">
      <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <h1 className="text-2xl font-bold mb-2">Payment cancelled</h1>
      <p className="text-gray-400 text-sm mb-8">
        No charge was made. You can upgrade to Pro anytime from the Numex app.
      </p>

      <a
        href={deepLink}
        className="block w-full py-3.5 rounded-full border border-white/10 hover:bg-white/5 text-white font-semibold text-sm transition-colors text-center mb-3"
      >
        Back to Numex App
      </a>

      <p className="text-xs text-gray-500">
        Need help?{" "}
        <a href="mailto:support@numex.app" className="text-[#6C5CE7] hover:underline">
          Contact support
        </a>
      </p>
    </div>
  );
}
