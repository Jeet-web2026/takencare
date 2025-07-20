"use client"

import Image from "next/image"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { usePathname } from "next/navigation"


export const Navbar = () => {
    const presentpage = usePathname();
    return (
        <header className="fixed top-0 left-0 w-full shadow-md px-5 py-3 flex lg:flex-row flex-col justify-between items-center">
            <div className="flex flex-row items-center">
                <Image src="/images/logo.png" height={70} width={70} alt="main-logo" className="me-1" />
                <div>
                    <h2 className="text-xl font-semibold col-1">TakenCare</h2>
                    <span className="text-sm capitalize opacity-75 font-medium">best healthcare management system</span>
                </div>
            </div>
            <nav>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger className={presentpage === '/' ? `col-2` : 'col-1'}>Home</MenubarTrigger>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className={presentpage === '/pages' ? `col-2` : 'col-1'}>Pages<i className="ri-add-line ms-2 text-sm"></i></MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className={presentpage === '/team' ? `col-2` : 'col-1'}>Team<i className="ri-add-line ms-2 text-sm"></i></MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className={presentpage === '/services' ? `col-2` : 'col-1'}>Services<i className="ri-add-line ms-2 text-sm"></i></MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className={presentpage === '/blogs' ? `col-2` : 'col-1'}>Blogs<i className="ri-add-line ms-2 text-sm"></i></MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem>New Window</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem>Print</MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className={presentpage === '/contact-us' ? `col-2` : 'col-1'}>Contact Us</MenubarTrigger>
                    </MenubarMenu>
                </Menubar>
            </nav>
        </header>
    )
}
