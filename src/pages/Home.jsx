import { useEffect } from "react"
import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import Aos from "aos"
import "aos/dist/aos.css"
import Footer from "../components/Footer"

export default function Home() {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: true, 
        })
    }, [])
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
                <h1 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl lg:mb-6 leading-tight max-w-3xl">Embrace the Beauty of <br />
                Nature, Crafted by Gary's <br />
                Florists in Southampton</h1>
            </div>
        </section>
        <div className="py-10 px-15">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="md:py-20 md:px-20">
                    <h1 className="md:text-2xl font-bold"
                        data-aos="fade-right"
                        data-aos-delay="0">Florist Southampton</h1>
                    <p className="py-4 md:py-6 md:text-xl"
                        data-aos="fade-right"
                        data-aos-delay="300">At Gary's Florist, we believe in the language of flowers, <br />
                    a silent poetry that speaks volumes. Nestled in the heart <br />
                    of Southampton, our boutique flower shop is a haven for <br />
                    those seeking the perfect bloom to express their <br />
                    emotions</p>
                    <p data-aos="fade-right"
                    data-aos-delay="400"
                    className="md:text-xl"
                    >Let Gary's Florists be your choice for exquisite blooms, <br />
                    where every petal whispers a tale of beauty and emotions.</p>
                </div>
                <div className="flex justify-center m-10 md:my-10 md:mx-15">
                    <img 
                    className=" object-contain"
                    src="./assets/Home-img1.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="md:py-10 md:px-10 lg:py-25 lg:px-10 xl:px-30 h-full md:h-[80vh] lg:h-[80vh] bg-[#ebd3e1]">
            <div className="pb-4 pt-8 px-10  md:py-5 md:px-10 lg:py-10 xl:py-8">
                <h1 className="text-2xl font-bold md:text-3xl lg:text-5xl xl:text-6xl">Why Choose Gary's Florist</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:gap-8 lg:gap-10 xl:gap-20 text-justify">
                <div className="md:py-2 md:text-md lg:text-xl xl:text-3xl">
                    <p className="mb-6 md:mb-6" data-aos="fade-right"
                    data-aos-delay="0">Passionate Florists: Our team of passionate florists berings
                    years of expertise and creativity to every arrangement. We infuse love and dedication into our work, 
                    ensuring that each bloom tells a unique story.</p>
                    <p className="mb-6" data-aos="fade-right" data-aos-delay="200">Freshness Guaranteed: We source the finest and freshnest
                    flowers to ensure longevity and vibrancy. Our commitment to
                    quality extends to every petal, promising you the finest floral
                    experience</p>
                </div>
                <div className="md:py-2 md:text-md lg:text-xl xl:text-3xl">
                    <p className="mb-6 md:mb-6 lg:mb-12 xl:mb-16" data-aos="fade-right" data-aos-delay="400">Local Southampton Charm: As a part of the Southampton
                    community, we take pride in being your neighborhood florist.
                    Supporting local and spreading floral joy is at the heart of
                    what we do.</p>
                    <p className="mb-8" data-aos="fade-right" data-aos-delay="500">Customer-Centric Approach: Your satisfaction is our priority.
                    We go the extra mile to understand your preferences,
                    ensuring that every creation surpasses your expectations.</p>
                </div>
            </div>
        </div>
        <ContactUs />
        <Footer />
        </>
    )
}