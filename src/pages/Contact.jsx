import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const respons = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      })
      const data = await respons.json()
      console.log(data)
      alert('Message sent!!')

      setForm({
        name: '',
        phone: '',
        email: '',
        message: ''
      })
  
    } catch(err) {
      console.error(err)
      alert('Error sending message!')
    }
  }
  
    return(
        <>
        <Navbar />
        <section className="relative">
            <img src="./assets/contact-hero.jpg" alt="contact-hero" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/20 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end my-10">
            <h1 className="text-black text-4xl md:text-5xl xl:text-7xl font-bold px-6 lg:px-10 md:mb-6 lg:mb-8">Contact Gary's Florist</h1>
            </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0 h-full ">
            <div className="flex flex-col px-12 py-8 lg:py-20 ">
              <div className="xl:px-30 lg:px-8">
                <h1 className="font-bold text-3xl">
                    Let'sConnect Through Flowers: <br />
                    Visit Us Today
                </h1>
                <p className="mt-4">
                    Immerse yourself in the world of Gray's Florists and let 
                    out blooms tell your story. Visit our boutique at 63 
                    Example Lane, Southampton, and experience the magic 
                    of floral artistry. For inquities, collaborations, or 
                    consultations, our team is just a call away at 01234 567 891 
                    or reachable via email at garry@example.com
                </p>
                </div>
            </div>
            <div className="flex items-center lg:justify-end pb-8 px-8 py-8 lg:px-0 lg:my-5 lg:mx-20">
                <div className="bg-white border rounded-md shadow-2xl w-150">
                <h1 className="px-8 py-4 font-bold text-2xl">Contact Us</h1>

            <div className="px-5">
                {/* form */}
          <form 
          onSubmit={handleSubmit}
          className="space-y-4">
            {/* row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                name="name"
                value={form.name}
                onChange={handleChange}
                  type="text"
                  className="w-full border rounded-sm px-2 py-1 outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Telephone Number
                </label>
                <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                  type="text"
                  className="w-full border rounded-sm px-2 py-1 outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
              name="email"
              value={form.email}
              onChange={handleChange}
                type="email"
                className="w-full border rounded-sm px-2 py-1 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
                rows="3"
                className="w-full border rounded-sm px-2 py-1 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 mb-4 rounded-sm hover:bg-purple-700 transition"
              >
                Send
              </button>
            </div>
          </form>
            </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}