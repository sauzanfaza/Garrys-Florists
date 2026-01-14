import Navbar from "../components/Navbar"
import ContactUs from "../components/ContactUs"
import Footer from "../components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function About() {
    useEffect(() => {
        Aos.init({
            duration:800,
            once:true
        })
    }, [])
    return(
        <>
            <Navbar />
            <section className="relative mx-auto h-[80vh]">
                <img src="./assets/About-hero.jpg" alt="about-hero" 
                className="w-full h-full object-cover object-center"/>

                {/* overlay putih */}
                <div className="absolute inset-0 bg-white/20"></div>

                {/* profile and name */}
                <div className="absolute inset-0 flex flex-col justify-end px-12 py-10 lg:py-16">
                    <div className="flex items-start">
                    <img src="./assets/Garryimg.png" alt="Garry-owner" 
                    className="mx-6 my-2 w-30 lg:my-6 lg:w-40"/>
                    </div>
                    <h1 className="text-black text-3xl lg:text-5xl font-bold px-6 lg:py-4">About Gary's Florists</h1>
                </div>
            </section>
            {/* about section */}
            <div className="py-8 px-6 xl:py-15 xl:px-15">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
                    <div className="flex flex-col py-8 xl:py-40">
                        <div className=" px-10 text-start"
                        data-aos="fade-right"
                        data-aos-delay="0">
                            <h1 className="font-bold text-4xl mb-2">Nurturing Nature's Elegance</h1>
                            <p>Gary's Florists was born out of deep-rooted passion for
                                nature's exquisite beauty and the desire to share it with
                                our community with humble beginnings, we embarked
                                on a journey to create a floral haven that transcends the 
                                oradinary. Our founder, Gary Long, envisioned a space
                                where the art of floristry harmonizes with emotions 
                                of those we serve.
                            </p>
                        </div>
                        <div className="py-4 px-10 text-start"
                        data-aos="fade-right"
                        data-aos-delay="200">
                            <h1 className="font-bold text-4xl mb-2">Blossoming Expertise: Our Dedicated Team</h1>
                            <p>At the heart of Gary's Florists is a team of skilled and 
                                dedicated florists, each with a unique flair of crafting 
                                enchanting arrangement. From classical compositions
                                to contemporary designs, our team merges 
                                creativity and expertise to bring your floral dreams to life.
                                We take pride in our commitment to continuous learning,
                                ensuring that we stay on the cutting edge of floral trend and techniques.
                            </p>
                        </div>
                        <div className="py-4 px-10 text-start"
                        data-aos="fade-right"
                        data-aos-delay="300">
                            <h1 className="font-bold text-4xl mb-2">A Shymphony of Blooms: Our Unique Approach</h1>
                            <p>What sets Gary's Florists apart is our dedication to
                                creating bespoke floral experiences. We understand that
                                every occasion is unique, and every esentiment is personal.
                                Our artisant carefully select eacg bloom,
                                harmonizing colors, textures, and fragrances to
                                compose arrangements that resonate with your emotions. 
                                Wheter it's a joyful celebration, a heartfelt apology,
                                or a moment of reflection, out blooms are designed to
                                speak the unspoken.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img src="./assets/buket.jpg" alt="buket" 
                        className="object-cover md:p-8 lg:px-12 lg:py-40 xl:py-40 xl:p-24"/>
                    </div>
                </div>
            </div>
            {/* contactus */}
            <ContactUs />
            <Footer/>
        </>
    )
}