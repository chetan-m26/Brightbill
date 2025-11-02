import Image from "next/image"


const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span className="">Sponsored Ads</span>
                <Image 
                src="/more.png" 
                alt="" 
                width={16} 
                height={10}
                />
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image 
                    src="https://images.pexels.com/photos/1661496/pexels-photo-1661496.jpeg" 
                    alt="" 
                    fill 
                    className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <Image 
                    src="https://images.pexels.com/photos/1661496/pexels-photo-1661496.jpeg" 
                    alt=""
                    width={24}
                    height={24}
                    className="rounded-full w-6 h-6 object-cover"
                    />
                    <span className="text-blue-500 font-medium">Enjoy the Experience</span>
                </div>
                <p className={size === "sm" ? "text-xs" : "text-sm"}>
                    {size === "sm" ? "Discover new places and adventures with us." : size === "md" 
                    ? "Discover new places and adventures with us. Join now and explore the world like never before!" 
                    : "Discover new places and adventures with us. Join now and explore the world like never before! Unleash your wanderlust and create unforgettable memories today."}
                </p>
                <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">Learn More</button>
            </div>
        </div>
    )
}

export default Ad