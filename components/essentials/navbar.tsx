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
import Link from "next/link"
import { Button } from "../ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


export const Navbar = () => {
    const presentpage = usePathname();
    return (
        <header className="fixed top-0 pe-10 ps-7 left-0 w-full shadow-md px-5 py-3 flex lg:flex-row flex-col justify-between items-center bg-white dark:bg-dark z-50">
            <Link href="/" className="flex flex-row items-center">
                <Image src="/images/logo.png" height={70} width={70} alt="main-logo" className="me-1" />
                <div>
                    <h2 className="text-xl font-semibold col-1">TakenCare</h2>
                    <span className="text-sm capitalize opacity-75 font-medium">best healthcare management system</span>
                </div>
            </Link>
            <nav>
                <Menubar>
                    <MenubarMenu>
                        <Link href="/">
                            <MenubarTrigger className={presentpage === '/' ? `col-2` : 'col-1'}>Home</MenubarTrigger>
                        </Link>
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
                        <Link href="/contact-us">
                            <MenubarTrigger className={presentpage === '/contact-us' ? `col-2` : 'col-1'}>Contact Us</MenubarTrigger>
                        </Link>
                    </MenubarMenu>
                    <Button className="bg-2 cursor-pointer capitalize text-white me-2">
                        appointment
                    </Button>
                    <Sheet>
                        <SheetTrigger>
                            <Button className="bg-1 text-lg cursor-pointer rounded-md px-3"><i className="ri-menu-unfold-line"></i></Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </Menubar>
            </nav>
        </header>
    )
}
