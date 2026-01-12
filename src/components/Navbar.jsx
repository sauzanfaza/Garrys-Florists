import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function handleToggle() {
    setIsOpen(prev => !prev) //jdi toggle buka atau tutup, kalo urusan responsive di tailwind bukan di state buka tutup
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-[#f8f1f5] px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-xl font-bold leading-tight">
          <h1 className="text-[#B95E82]">
            Garry's <br /> Florists
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8"> 
            {/* hidden di desktop home, about, contact us tdk terlihat */}
          <Link to="/" className="text-[#B95E82] hover:text-[#6B3F69]">
            Home
          </Link>
          <Link to="/about" className="text-[#B95E82] hover:text-[#6B3F69]">
            About
          </Link>
          <Link to="/contact" className="text-[#B95E82] hover:text-[#6B3F69]">
            Contact Us
          </Link>
        </div>

        {/* BURGER BUTTON (MOBILE) */}
        <button
          onClick={handleToggle}
          className="md:hidden text-3xl text-[#B95E82]"
        //   pas di mobile toggle terlihat tpi hidden saat di ukuran middle ke atas
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f1f5] px-6 py-4 grid gap-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            // setelah salah satu menu d klik balik lagi toggle jdi false
            className="text-[#B95E82] hover:text-[#6B3F69]"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-[#B95E82] hover:text-[#6B3F69]"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-[#B95E82] hover:text-[#6B3F69]"
          >
            Contact Us
          </Link>
        </div>
      )}
    </>
  )
}
