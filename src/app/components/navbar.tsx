import Link from "next/link"
import MobileMenu from "./mobilemenu"
import Image from "next/image"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"
import { SignedIn, SignedOut } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
        {/*left*/}
        <div className="md:hidden lg:block w-[20%]">
            <Link href="/" className="font-bold text-xl text-violet-500">Brightbill</Link>
        </div>
        {/*center*/}
        <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
            {/*Links*/}
            <div className="flex gap-5 text-gray-600">
                <Link href="/" className="flex items-center gap-2">
                <Image src="/home.png" alt="Homepage" width={22} height={16} className="w-5 h-5" />
                <span>Homepage</span>
                </Link>
                <Link href="/" className="flex items-center gap-2">
                <Image src="/friends.png" alt="Friends" width={33} height={33} className="w-6 h-6" />
                <span>Friends</span>
                </Link>
                <Link href="/" className="flex items-center gap-2">
                <Image src="/stories.png" alt="Stories" width={22} height={16} className="w-5 h-5" />
                <span>Stories</span>
                </Link>
            </div>
            <div className="ml-10 hidden xl:flex p-2 bg-slate-100 items-center rounded-xl">
                <input type="text" placeholder="search..." className="bg-transparent outline-none w-full"/>
                <Image src="/search.png" alt="" width={16} height={16}/>
            </div>
        </div>
        {/*right*/}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
            <ClerkLoading>
                <div className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-violet-500 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className="cursor-pointer">
                        <Image src="/people.png" alt="" width={24} height={24} />
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/messages.png" alt="" width={24} height={24} />
                    </div>
                    <div className="cursor-pointer">
                        <Image src="/notifications.png" alt="" width={24} height={24} />
                    </div>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <div className="flex items-center gap-2 text-sm">
                        <Image src="/login.png" alt="" width={20} height={20} />
                        <Link href="/sign-in">Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu/>
        </div>
    </div>
  )
}

export default Navbar