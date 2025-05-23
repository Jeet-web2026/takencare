import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="h-screen relative flex justify-center items-center px-[100px] pt-15">
      <div className="absolute top-0 left-0 w-full h-[90%] bg-[#002570] z-1 rounded-b-[25%]"></div>
      <div className="w-[50%]"></div>
      <div className="w-[50%] z-30">
        <div className="mb-4 bg-gray-500 w-55 font-semibold rounded-full py-1">
          <p className="mb-0 uppercase text-sm text-white text-center"><i className="ri-service-fill me-2"></i>healthcare specialist</p>
        </div>
        <h1 className="capitalize text-5xl font-semibold text-white mb-2">
          best caring,
        </h1>
        <h1 className="capitalize text-5xl font-semibold text-white">
          better doctors.
        </h1>
        <p className="text-sm opacity-50 text-white mt-4">Experience the highest standard of medical care management with our comprehensive, patient-centered solutions. We specialize in streamlining healthcare services, ensuring timely treatments, accurate medical records, and efficient coordination between providers and patients.</p>
        <div className="flex flex-row mt-5">
          <Button asChild>
            <Link href="/learn-more" className="capitalize">learn more</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
