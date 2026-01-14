import { useState } from "react"

export default function ContactUs() {
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
      const res = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      })
      const data = await res.json()
      console.log(data)
      alert('Message sent!')

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

    return (
        <>
        <div className="relative min-h-screen">
            <img src="./assets/form-bg.jpg" alt="contact-bg" 
            className="absolute inset-0 w-full h-full object-cover"/>

            <div className="absolute inset-0 z-10 flex justify-center md:items-center md:justify-end mx-4 my-6 md:my-10 md:mx-20">
                <div className="bg-white rounded-md shadow-md w-full max-w-lg md:my-4 md:py-4">
                <h1 className="px-8 py-2 font-bold text-md md:text-xl lg:text-2xl">Contact Us</h1>

            <div className="px-5">
                {/* form */}
          <form 
            onSubmit={handleSubmit}
            className="space-y-4">
            {/* row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className="w-full border rounded-sm py-1 px-2 md:py-2 outline-none focus:ring-2 focus:ring-purple-400"
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
                  className="w-full border rounded-sm py-1 px-2 md:py-2 outline-none focus:ring-2 focus:ring-purple-400"
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
                className="w-full border rounded-sm py-1 px-2 md:py-2 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
                rows="2 "
                className="w-full border rounded-sm py-1 px-2 md:py-2 md:h-32 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-600 text-white py-1 px-4 md:py-2 rounded-sm hover:bg-purple-700 transition"
              >
                Send
              </button>
            </div>
          </form>
            </div>
                </div>
                
            </div>
        </div>
        </>
    )
}