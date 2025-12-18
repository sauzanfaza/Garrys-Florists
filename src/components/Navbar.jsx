export default function Navbar() {
    return (
        <nav className="bg-[#f8f1f5] px-8 py-4 flex items-center justify-between">
            <div className="text-xl font-bold leading-tight px-8">
                <h1 className="text-[#B95E82]">Garry's <br /> Florists</h1>
            </div>
            <div className="flex gap-8">
                <div className="cursor-pointer text-[#B95E82] hover:text-[#6B3F69]">Home</div>
                <div className="cursor-pointer text-[#B95E82] hover:text-[#6B3F69]">About</div>
                <div className="cursor-pointer text-[#B95E82] hover:text-[#6B3F69]">Contact Us</div>
            </div>
        </nav>
    )

}