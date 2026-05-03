import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delete Numex Data",
  description: "How to delete Numex data without deleting your account.",
};

const appDataItems = [
  "transactions",
  "debts and repayment records",
  "custom categories",
  "balances and balance details",
  "voice entries and related parsed financial records",
  "local encrypted app data on your device",
];

export default function DeleteDataPage() {
  return (
    <div className="w-full max-w-2xl mt-8 text-left">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold text-[#6C5CE7] mb-3">Numex</p>
        <h1 className="text-3xl font-bold tracking-tight mb-3">
          Delete your Numex data
        </h1>
        <p className="text-sm leading-6 text-gray-400">
          You can delete financial data in Numex without deleting your account.
          Account deletion is a separate action.
        </p>
      </div>

      <div className="space-y-6">
        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">Delete data in the app</h2>
          <p className="text-sm leading-6 text-gray-300">
            To delete data in the app, open Numex, go to the relevant screen for
            the item you want to remove, such as Transactions, Debts, Categories,
            or Balances, then use the delete action for that item.
          </p>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">
            Need help deleting data?
          </h2>
          <p className="text-sm leading-6 text-gray-300">
            If you cannot access the app or need help deleting specific data,
            email{" "}
            <a
              href="mailto:support@numex.uz"
              className="font-medium text-[#6C5CE7] hover:underline"
            >
              support@numex.uz
            </a>{" "}
            from your account email. Tell us which Numex data you want deleted.
          </p>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">Data you can delete</h2>
          <p className="text-sm leading-6 text-gray-300 mb-4">
            Numex lets you delete user-created financial data, including:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-gray-300">
            {appDataItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">What may be kept</h2>
          <p className="text-sm leading-6 text-gray-300">
            Deleting individual data does not delete your Numex account,
            authentication records, active subscription status, or payment
            provider records. Polar and other payment providers may retain
            historic payment/order records where required for legal, tax, fraud
            prevention, dispute, or compliance purposes.
          </p>
        </section>

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <h2 className="text-lg font-semibold mb-3">Retention period</h2>
          <p className="text-sm leading-6 text-gray-300">
            App data deleted in Numex is removed from active app records.
            Provider, security, legal, tax, fraud-prevention, and dispute
            records may be retained only as long as required for those purposes.
          </p>
        </section>
      </div>
    </div>
  );
}
