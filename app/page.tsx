import Image from "next/image";
import DraggableImage from "@/components/DraggableImage";


export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <DraggableImage src="/clothes/blackhoodie.png" alt="Black Hoodie" className="top-10 left-10 w-32" />
      <DraggableImage src="/clothes/whitesneakers.png" alt="White Sneakers" className="top-20 left-60 w-28" />
      <DraggableImage src="/clothes/jeans.png" alt="Blue Jeans" className="top-40 left-40 w-32" />
      <section className="w-full max-w-5xl px-6 py-24 text-center">
        <img src="/lookbookLogo.png" alt="The Lookbook logo" className="mx-auto w-40 mb-6" />
        <h1 className="text-5xl font-bold">Your closet, in your pocket.</h1>
        <p className="mt-4 text-lg text-gray-600">
          Organize, save, and style your outfits effortlessly.
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition">
          Join the Waitlist
        </button>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl px-6 py-16 grid md:grid-cols-3 gap-10 text-center">
        <div className="p-6 rounded-2xl shadow-md bg-gray-50">
          <h3 className="font-semibold text-xl">Digitize Your Closet</h3>
          <p className="mt-2 text-gray-600">Upload and organize all your pieces in one place.</p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-gray-50">
          <h3 className="font-semibold text-xl">Plan Outfits</h3>
          <p className="mt-2 text-gray-600">Create and save looks for any occasion.</p>
        </div>
        <div className="p-6 rounded-2xl shadow-md bg-gray-50">
          <h3 className="font-semibold text-xl">Carry It Anywhere</h3>
          <p className="mt-2 text-gray-600">Your wardrobe, always with you on your phone.</p>
        </div>
      </section>

      {/* Screenshots / Demo */}
      <section className="w-full max-w-5xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Preview the App</h2>
        <div className="flex justify-center gap-6">
          <img src="/screenshot1.png" alt="App Screenshot 1" className="rounded-xl shadow-lg w-60" />
          <img src="/screenshot2.png" alt="App Screenshot 2" className="rounded-xl shadow-lg w-60" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-5xl px-6 py-16 text-center bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold">Be the first to try The Lookbook</h2>
        <p className="mt-2 text-gray-600">Coming soon on iOS and Android</p>
        <button className="mt-6 px-8 py-3 bg-black text-white rounded-xl text-lg font-medium hover:bg-gray-800 transition">
          Join the Waitlist
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-10 text-center text-gray-500">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.instagram.com/trythelookbook/" target="_blank" className="hover:text-black">Instagram</a>
          <a href="https://www.tiktok.com/@trythelookbook?lang=en" target="_blank" className="hover:text-black">TikTok</a>
          <a href="https://x.com/trythelookbook" target="_blank" className="hover:text-black">X</a>
          <a href="mailto:trythelookbook@gmail.com" className="hover:text-black">Contact</a>
          
        </div>
        <p>© {new Date().getFullYear()} The Lookbook · All rights reserved</p>
      </footer>
    </main>
  )
}