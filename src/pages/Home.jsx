import Navbar from "../components/Navbar"

export default function Home() {
    return (
        <>
        <Navbar />
        <section className="relative mx-auto h-[80vh]">
            <img src="./assets/Home-hero.jpg" alt="home-hero" 
                className="w-full h-full object-cover"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* text */}
            <div className="absolute inset-0 md:text-6xl">
                <h1>Embrace the Beauty of <br />
                Nature, Crafted by Gary's <br />
                Florists in Southampton</h1>
            </div>
        </section>
        </>
    )
}