"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";

type PlanInfo = {
  name: string;
  price: string;
  interval: string;
  currency: string;
};

type ValidateResponse = {
  valid: boolean;
  plan?: PlanInfo;
  error?: string;
};

type StripeSessionResponse = {
  checkout_url: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export default function SubscribePage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [state, setState] = useState<
    "loading" | "ready" | "redirecting" | "error"
  >("loading");
  const [plan, setPlan] = useState<PlanInfo | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!token) {
      setErrorMsg("Missing checkout token. Please open this link from the Numex app.");
      setState("error");
      return;
    }

    async function validate() {
      try {
        const res = await fetch(
          `${API_BASE}/api/v1/checkout/validate?token=${encodeURIComponent(token!)}`,
        );
        const data: ValidateResponse = await res.json();

        if (!res.ok || !data.valid) {
          setErrorMsg(data.error ?? "This checkout link is invalid or has expired.");
          setState("error");
          return;
        }

        setPlan(data.plan ?? null);
        setState("ready");
      } catch {
        setErrorMsg("Unable to verify your checkout link. Please try again.");
        setState("error");
      }
    }

    validate();
  }, [token]);

  async function handleCheckout() {
    if (!token) return;
    setState("redirecting");

    try {
      const res = await fetch(`${API_BASE}/api/v1/checkout/stripe-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg((data as { error?: string }).error ?? "Failed to create checkout session.");
        setState("error");
        return;
      }

      const data: StripeSessionResponse = await res.json();
      window.location.href = data.checkout_url;
    } catch {
      setErrorMsg("Something went wrong. Please go back to the app and try again.");
      setState("error");
    }
  }

  if (state === "loading") {
    return (
      <div className="flex flex-col items-center gap-4 mt-8">
        <Spinner />
        <p className="text-gray-400 text-sm">Verifying your checkout link…</p>
      </div>
    );
  }

  if (state === "error") {
    return (
      <div className="max-w-sm w-full text-center mt-8">
        <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-xl font-semibold mb-2">Something went wrong</h1>
        <p className="text-gray-400 text-sm">{errorMsg}</p>
      </div>
    );
  }

  return (
    <div className="max-w-sm w-full mt-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Your plan</p>
        <h2 className="text-2xl font-bold mb-1">{plan?.name ?? "Numex Pro"}</h2>
        {plan && (
          <p className="text-gray-300 text-sm">
            {plan.price}{" "}
            <span className="text-gray-500">/ {plan.interval}</span>
          </p>
        )}

        <ul className="mt-5 space-y-2 text-sm text-gray-300">
          {[
            "Unlimited voice transactions",
            "AI spending insights & coach",
            "Advanced analytics",
            "Recurring transaction detection",
          ].map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#6C5CE7] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleCheckout}
        disabled={state === "redirecting"}
        className="w-full py-3.5 rounded-full bg-[#6C5CE7] hover:bg-[#5a4dd0] active:bg-[#4a3dc0] text-white font-semibold text-sm transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {state === "redirecting" ? (
          <>
            <Spinner small />
            Redirecting to payment…
          </>
        ) : (
          "Continue to Payment"
        )}
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        Secure payment powered by Stripe. Cancel anytime.
      </p>
    </div>
  );
}

function Spinner({ small = false }: { small?: boolean }) {
  const size = small ? "w-4 h-4" : "w-8 h-8";
  return (
    <svg
      className={`${size} animate-spin text-[#6C5CE7]`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}
