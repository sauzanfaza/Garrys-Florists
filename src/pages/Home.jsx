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
                <h1 className="text-white text-3xl font-bold md:text-4xl leading-tight max-w-3xl">Embrace the Beauty of <br />
                Nature, Crafted by Gary's <br />
                Florists in Southampton</h1>
            </div>
        </section>
        <div className="py-10 px-15">
            <div className="grid grid-cols-1  md:grid-cols-2 h-[80vh]">
                <div className="py-20 px-20">
                    <h1 className="text-xl font-bold"
                        data-aos="fade-right"
                        data-aos-delay="0">Florist Southampton</h1>
                    <p className="py-6"
                        data-aos="fade-right"
                        data-aos-delay="300">At Gary's Florist, we believe in the language of flowers, <br />
                    a silent poetry that speaks volumes. Nestled in the heart <br />
                    of Southampton, our boutique flower shop is a haven for <br />
                    those seeking the perfect bloom to express their <br />
                    emotions</p>
                    <p data-aos="fade-right"
                    data-aos-delay="400">Let Gary's Florists be your choice for exquisite blooms, <br />
                    where every petal whispers a tale of beauty and emotions.</p>
                </div>
                <div className="py-15 px-20">
                    <img src="./assets/Home-img1.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="py-10 px-15 h-[80vh] bg-[#ebd3e1]">
            <div className="py-10 px-20">
                <h1 className="font-bold text-4xl">Why Choose Gary's Florist</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-20 gap-8 text-justify">
                <div className="">
                    <p className="mb-6" data-aos="fade-right"
                    data-aos-delay="0">Passionate Florists: Our team of passionate florists berings
                    years of expertise and creativity to every arrangement. We infuse love and dedication into our work, 
                    ensuring that each bloom tells a unique story.</p>
                    <p data-aos="fade-right" data-aos-delay="200">Freshness Guaranteed: We source the finest and freshnest
                    flowers to ensure longevity and vibrancy. Our commitment to
                    quality extends to every petal, promising you the finest floral
                    experience</p>
                </div>
                <div className="">
                    <p className="mb-6" data-aos="fade-right" data-aos-delay="400">Local Southampton Charm: As a part of the Southampton
                    community, we take pride in being your neighborhood florist.
                    Supporting local and spreading floral joy is at the heart of
                    what we do.</p>
                    <p data-aos="fade-right" data-aos-delay="600">Customer-Centric Approach: Your satisfaction is our priority.
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