import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen max-h-screen">
      <section className="flex flex-row justify-items-end px-[100px] py-4 items-center bg-[#E1EEFF]">
        <Image
          src="https://img.freepik.com/free-vector/hospital-logo-design-vector-medical-cross_53876-136743.jpg?uid=R126305893&ga=GA1.1.1378415623.1732413357&semt=ais_hybrid&w=740"
          alt="Hospital Logo"
          width={40}
          height={40}
          className="mix-blend-multiply rounded-full"
        ></Image>
      </section>
    </div>
  )
}
