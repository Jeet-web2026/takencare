import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Home() {
  return (
    <main className="h-[110vh] relative flex justify-center items-center px-[100px] pt-[8.5vh]">
      <div className="absolute top-0 left-0 w-full h-[90%] bg-[#002570] z-1 rounded-b-[18%]"></div>
      <div className="w-[50%] z-30 relative h-full">
        <Image
          src="/images/main-bg-image.png"
          alt="Hospital person Logo"
          width={450}
          height={450}
          className="absolute top-20 right-0 h-[70vh] w-[70vh]"
        ></Image>
      </div>
      <div className="w-[50%] z-30">
        <div className="mb-2 bg-[#505c6e6b] w-[45%] font-semibold rounded-full py-1">
          <p className="mb-0 uppercase text-[2.5vh] text-white text-center"><i className="ri-service-fill me-2"></i>healthcare specialist</p>
        </div>
        <h1 className="capitalize text-[8vh] font-semibold text-white mb-[-2.5vh]">
          best caring,
        </h1>
        <h1 className="capitalize text-[8vh] font-semibold text-white mb-0">
          better doctors.
        </h1>
        <p className="text-[2.5vh] opacity-50 text-white mt-3">Experience the highest standard of medical care management with our comprehensive, patient-centered solutions. We specialize in streamlining healthcare services, ensuring timely treatments, accurate medical records, and efficient coordination between providers and patients.</p>
        <div className="flex flex-row mt-6">
          <Button asChild className="px-5 shadow-lg">
            <Link href="/learn-more" className="capitalize items-center">learn more</Link>
          </Button>
          <Button asChild className="px-5 ms-4 duration-300 ease-in shadow-lg border hover:ms-5 bg-transparent hover:bg-[#017EFF]/20 hover:border-0">
            <Link href="tel:+919163715179" className="capitalize">(+91) 9163-7151-79</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 rounded-full py-3 px-10 shadow-lg bg-[#017EFF] w-250 z-32">
        <div className="max-w-sm p-2 bg-transparent">
          <h5 className="mb-2 text-[2.5vh] font-semibold tracking-tight text-white dark:text-white capitalize">24*7 services</h5>
          <p className="mb-3 font-normal text-white text-[2.2vh] opacity-75">Go to this step by step guideline process on how to certify for your weekly benefits.</p>
        </div>
      </div>
    </main>
  );
}
