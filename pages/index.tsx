import { DonateForm } from "@/components/DonateForm";

export default function Home() {
  return (
    <main className="bg h-screen w-full flex flex-col justify-center items-center">
      <h2 className="text-2xl text-neutral-800 mb-6">
        How much do you want to donate?
      </h2>

      <div className="w-[370px] mt-10 px-10 py-8 shadow rounded-xl text-center">
        <DonateForm />
      </div>
    </main>
  );
}
