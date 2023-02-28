import React, { FormEvent, useEffect, useState } from "react";
import { DonateButtons } from "@/components/DonateButtons";
import { DonateInput } from "@/components/DonateInput";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_PUBLISHABLE_SECRET_KEY!
);

export const DonateForm = () => {
  const [customAmount, setCustomAmount] = useState("");
  const [amount, setAmount] = useState<null | number>(100);

  const handleChangeAmount = (value: number) => {
    setAmount(value);
  };
  const handleChangeCustomAmount = (value?: string) => {
    setCustomAmount(value!);
  };

  const handleCheckout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { sessionId } = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount || customAmount }),
    }).then((res) => res.json());

    const stripe = await stripePromise;

    if (!stripe || !sessionId) return;

    await stripe.redirectToCheckout({ sessionId });
  };

  useEffect(() => {
    if (!customAmount) return;
    setAmount(null);
  }, [customAmount]);

  useEffect(() => {
    if (!amount) return;
    setCustomAmount("");
  }, [amount]);

  return (
    <form onSubmit={handleCheckout}>
      <DonateButtons
        name="amount"
        options={[{ value: 10 }, { value: 50 }, { value: 100 }]}
        value={amount}
        onChange={handleChangeAmount}
      />

      <div className="my-3 w-full text-center text-sm">or</div>

      <DonateInput
        name="customAmount"
        value={customAmount}
        onChange={handleChangeCustomAmount}
      />

      <button
        type="submit"
        disabled={!amount && !customAmount}
        className="mt-6 w-full bg-green-500 py-3 px-5 rounded-xl text-white hover:bg-green-400 disabled:bg-gray-200"
      >
        Donate
      </button>
    </form>
  );
};
