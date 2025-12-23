export default function ContactUs() {
    return (
        <>
        <div className="relative h-[90vh]">
            <img src="./assets/form-bg.jpg" alt="contact-bg" 
            className="w-full h-full object-cover"/>

            <div className="absolute inset-0 z-10 flex justify-end my-10 mx-20">
                <div className="bg-white rounded-md shadow-md w-[600px]">
                <h1 className="px-8 py-4 font-bold text-2xl">Contact Us</h1>

            <div className="px-5">
                {/* form */}
          <form className="space-y-4">
            {/* row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-sm px-2 py-1 outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Telephone Number
                </label>
                <input
                  type="text"
                  className="w-full border rounded-sm px-2 py-1 outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>

            {/* email */}
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                className="w-full border rounded-sm px-2 py-1 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* message */}
            <div>
              <label className="text-sm text-gray-600">Message</label>
              <textarea
                rows="3"
                className="w-full border rounded-sm px-2 py-1 outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded-sm hover:bg-purple-700 transition"
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