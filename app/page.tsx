import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen max-h-screen">
      <section className="flex flex-row justify-items-end px-[100px] py-4 items-center bg-[#E1EEFF]">
        <Image
          src="/images/logo.png"
          alt="Hospital Logo"
          width={40}
          height={40}
        ></Image>
      </section>
    </div>
  )
}
