import Link from "next/link"
import Image from "next/image"


const UserMediaCard = ({userId}:{userId:string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/* TOP */}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href="/" className="text-blue-500 text-xs" >See all</Link>
            </div>
            {/* BOTTOM */}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/34498269/pexels-photo-34498269.jpeg" 
                    alt="" 
                    fill 
                    className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/34473294/pexels-photo-34473294.jpeg" 
                    alt="" 
                    fill 
                    className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/33433603/pexels-photo-33433603.jpeg" 
                    alt="" 
                    fill 
                    className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/29229948/pexels-photo-29229948.jpeg" 
                    alt="" 
                    fill 
                    className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/529782/pexels-photo-529782.jpeg" 
                    alt="" 
                    fill 
                    className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/1637857/pexels-photo-1637857.jpeg" 
                    alt="" 
                    fill 
                    className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/34207229/pexels-photo-34207229.jpeg" 
                    alt="" 
                    fill 
                    className="object-cover rounded-md"
                    />
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/34354839/pexels-photo-34354839.jpeg" 
                    alt="" 
                    fill 
                    className="object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard