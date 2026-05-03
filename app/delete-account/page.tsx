import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Your Numex Account",
  description: "How to permanently delete your Numex account and data.",
};

const deletedItems = [
  "account",
  "sessions",
  "profile",
  "user-created financial records",
  "sync data",
  "encryption backups",
  "local app data on that device",
];

export default function DeleteAccountPage() {
  return (
    <div className="w-full max-w-2xl mt-8 text-left">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold text-[#6C5CE7] mb-3">Numex</p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Delete your Numex account
        </h1>
        <p className="text-sm leading-6 text-gray-400">
          Deletion is immediate and permanent. Once deletion succeeds, your
          Numex account and eligible Numex data cannot be restored.
        </p>
      </div>

      <div className="space-y-6">
        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">Delete in the app</h2>
          <p className="text-sm leading-6 text-gray-300">
            To delete your account in the app, open Numex, go to Settings &gt;
            Security &gt; Delete Account, then confirm with Google sign-in.
          </p>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">
            Need help without the app?
          </h2>
          <p className="text-sm leading-6 text-gray-300">
            If you cannot access the app, email{" "}
            <a
              href="mailto:support@numex.uz"
              className="font-medium text-[#6C5CE7] hover:underline"
            >
              support@numex.uz
            </a>{" "}
            from your account email and request account deletion.
          </p>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">What we delete</h2>
          <p className="text-sm leading-6 text-gray-300 mb-4">
            When deletion succeeds, Numex deletes your:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-gray-300">
            {deletedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">What may be retained</h2>
          <p className="text-sm leading-6 text-gray-300">
            Polar and other payment providers may retain historic payment/order
            records where required for legal, tax, fraud prevention, dispute, or
            compliance purposes. Numex requests Polar customer anonymization
            when deleting Polar-linked accounts.
          </p>
        </section>
      </div>
    </div>
  );
}
