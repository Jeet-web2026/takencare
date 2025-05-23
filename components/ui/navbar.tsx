"use client"
import Image from "next/image";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <section className="flex flex-row justify-between px-[60px] pt-4 pb-[50px] relative items-center bg-[#E1EEFF]">
                <div className="flex flex-row items-center">
                    <Image
                        src="/images/logo.png"
                        alt="Hospital Logo"
                        width={40}
                        height={40}
                    ></Image>
                    <h3 className="text-3xl ms-2 font-medium">Taken<span className="text-[#017EFF]">Care</span></h3>
                </div>
                <div className="md:flex flex-row items-center hidden">
                    <a href="tel:+919163715179" className="flex items-center flex-row me-8">
                        <p className="bg-white px-3 py-2 rounded-[50%] shadow-md text-base"><i className="bi bi-telephone-plus"></i></p>
                        <div className="ms-2">
                            <p className="capitalize">contact us</p>
                            <h5 className="text-[#017EFF]">+91 9163715179</h5>
                        </div>
                    </a>
                    <a href="mailto:jeetnath2110@gmail.com" className="flex items-center flex-row me-8">
                        <p className="bg-white px-3 py-2 rounded-[50%] shadow-md text-base"><i className="bi bi-envelope-at"></i></p>
                        <div className="ms-2">
                            <p className="capitalize">mail us</p>
                            <h5 className="text-[#017EFF]">jeetnath2110@gmail.com</h5>
                        </div>
                    </a>
                    <button className="rounded-full bg-[#017EFF] px-4 py-2 cursor-pointer text-white shadow-sm capitalize text-base">book appointment now</button>
                </div>
                <div className="absolute bg-[#017EFF] px-5 py-3 text-white -bottom-6 w-[91%] rounded-lg flex flex-row justify-between items-center">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>Home</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>about us</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>department</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>pages<i className="bi bi-plus-lg ms-2 font-bold"></i></MenubarTrigger>
                            <MenubarContent>
                                <MenubarRadioGroup value="benoit">
                                    <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                                    <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                                    <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                                </MenubarRadioGroup>
                                <MenubarSeparator />
                                <MenubarItem inset>Edit...</MenubarItem>
                                <MenubarSeparator />
                                <MenubarItem inset>Add Profile...</MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>blog</MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>contact</MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                    <div className="md:inline hidden">
                        <a href="" className="px-[10px] py-[8px] border rounded-[50%] border-white hover:bg-white hover:text-[#017EFF] text-sm me-2 transition delay-100 duration-200 ease-in-out"><i className="bi bi-linkedin"></i></a>
                        <a href="" className="px-[10px] py-[8px] border rounded-[50%] border-white hover:bg-white hover:text-[#017EFF] text-sm me-2 transition delay-100 duration-200 ease-in-out"><i className="bi bi-facebook"></i></a>
                        <a href="" className="px-[10px] py-[8px] border rounded-[50%] border-white hover:bg-white hover:text-[#017EFF] text-sm me-2 transition delay-100 duration-200 ease-in-out"><i className="bi bi-twitter-x"></i></a>
                        <a href="" className="px-[10px] py-[8px] border rounded-[50%] border-white hover:bg-white hover:text-[#017EFF] text-sm transition delay-100 duration-200 ease-in-out me-4"><i className="bi bi-youtube"></i></a>
                        <AlertDialog>
                            <AlertDialogTrigger className="border rounded-[50%] border-white cursor-pointer text-sm px-[8px] py-[5.5px] hover:bg-white hover:text-[#017EFF] text-sm transition delay-100 duration-200 ease-in-out"><i className="bi bi-search"></i></AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>search anything you want</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        <form>
                                            <input
                                                type="text"
                                                name="searchcontent"
                                                className="w-full border p-2 rounded-sm"
                                            />
                                        </form>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>
                </div>
            </section>
        </nav>
    )
}
