import { ChangeEvent, FormEvent, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import classNames from "classnames";
import { DonateButtons } from "@/components/DonateButtons";
import { DonateInput } from "@/components/DonateInput";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_PUBLISHABLE_SECRET_KEY!
);

export default function Home() {
  const [amount, setAmount] = useState<undefined | number>(undefined);
  const [selected, setSelected] = useState<undefined | number>(100);

  const handleCheckout = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    console.log(fieldValues);
    // const { sessionId } = await fetch("/api/checkout", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ ...fieldValues }),
    // }).then((res) => res.json());
    //
    // const stripe = await stripePromise;
    //
    // if (!stripe) return;
    //
    // const { error } = await stripe.redirectToCheckout({ sessionId });
  };

  const onInputsChange = (value?: number) => {
    console.log(value);
  };

  return (
    <main className="bg h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-5 font-bold text-neutral-800">Donation</h1>

      <form
        onSubmit={handleCheckout}
        className="w-[370px] mt-10 px-10 py-6 shadow rounded-xl text-center"
      >
        <h2 className="text-lg text-neutral-800 mb-6">
          How much do you want to donate?
        </h2>

        <DonateButtons
          name="amount"
          options={[{ value: 10 }, { value: 50 }, { value: 100 }]}
          defaultValue={100}
        />

        <div className="my-3 w-full text-center text-sm">or</div>

        <DonateInput name="customAmount" />

        <button
          type="submit"
          className="mt-6 w-full bg-green-500 py-3 px-5 rounded-xl text-white hover:bg-green-400"
        >
          Donate
        </button>
      </form>
    </main>
  );
}
