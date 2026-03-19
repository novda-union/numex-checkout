import { redirect } from "next/navigation";

// Root redirects to app store or a landing; for now just shows a placeholder.
export default function Home() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-2xl font-bold mb-2">Numex Checkout</h1>
      <p className="text-gray-400 text-sm">
        Please open the checkout link from the Numex app.
      </p>
    </div>
  );
}
