import Image from "next/image";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"


export default function Home() {
  return (
    <div className="h-screen max-h-screen">
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
        <div className="flex flex-row items-center">
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
        <div className="absolute bg-[#017EFF] px-5 py-3 text-white -bottom-5 w-[91%] rounded-lg">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>
                  Print... <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                <MenubarCheckboxItem checked>
                  Always Show Full URLs
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>
                  Reload <MenubarShortcut>⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled inset>
                  Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
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
          </Menubar>
        </div>
      </section>
    </div>
  )
}
