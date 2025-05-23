export default function Home() {
  return (
    <main className="h-screen relative flex justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-[90%] bg-[#002570] z-1 rounded-b-[25%]"></div>
      <div className="w-[50%]"></div>
      <div className="w-[50%] z-30">
        <div className="mb-3 bg-gray-500 w-65 rounded-full py-1">
          <p className="mb-0 uppercase text-base text-white text-center"><i className="ri-service-fill me-2"></i>healthcare specialist</p>
        </div>
        <h1 className="capitalize text-6xl font-semibold text-white">
          best caring,
        </h1>
        <h1 className="capitalize text-6xl font-semibold text-white">
          better doctors.
        </h1>
      </div>
    </main>
  );
}
