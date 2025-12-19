import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <>
        <Navbar />
        <section className="relative mx-auto h-[80vh]">
            <img src="./assets/Home-hero.jpg" alt="home-hero" 
                className="w-full h-full object-cover object-center"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* text */}
            <div className="absolute inset-0 flex items-end px-6 py-8 md:px-20">
                <h1 className="text-white text-3xl font-bold md:text-4xl leading-tight max-w-3xl">Embrace the Beauty of <br />
                Nature, Crafted by Gary's <br />
                Florists in Southampton</h1>
            </div>
        </section>
        </>
    )
}