import Link from 'next/link'
import heroImg from './hero-pizza.jpg'
import chefImg from './chef.jpg'
import pizza1Img from './pizza1.jpg'
import pizza2Img from './pizza2.jpg'
import pizza3Img from './pizza3.jpg'
import pizza4Img from './pizza4.jpg'
import BackgroundVideos from '../components/BackgroundVideos'

export default async function Home(){
  return (
    <main className="min-h-screen">
  {/* Background videos played from public/videos directory (vid1 removed due to glitches) */}
  <BackgroundVideos sources={['/videos/vid2.mp4', '/videos/vid3.mp4']} />
      <section className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 grid gap-12 lg:grid-cols-2 items-center bg-white/70 backdrop-blur-sm">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium w-max shadow-sm">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">Fresh, Fast, and Unforgettable</h1>

          <p className="text-lg text-gray-600 max-w-lg">Quality ingredients, custom toppings, affordable prices and delivery anywhere in Nairobi.</p>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Link href="/menu" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg transition">Order Now</Link>
            <Link href="/menu" className="inline-flex items-center gap-2 border border-gray-200 px-4 py-3 rounded hover:bg-gray-50">View Menu</Link>
            <a 
              href="https://wa.me/254718144444?text=Hello%20from%20the%20website%2C%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded shadow-lg transition"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="flex flex-col items-start">
              <span className="font-semibold">30 min</span>
              <span className="text-gray-500">Avg delivery</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold">100k+</span>
              <span className="text-gray-500">Pizzas served</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-semibold">4.8 ★</span>
              <span className="text-gray-500">Customer rating</span>
            </div>
          </div>

          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm flex items-center gap-4">
            <img src={chefImg?.src || chefImg} alt="Chef" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <div className="text-sm font-semibold">Chef's Special</div>
              <div className="text-xs text-gray-500">Margherita with a spicy kick — limited time</div>
            </div>
          </div>
        </div>

        <div className="relative order-first lg:order-last">
          <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-100">
            <img src={heroImg?.src || heroImg} alt="GoGol signature pizza" className="w-full h-96 object-cover" />
          </div>
          <div className="absolute -bottom-10 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-md flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={pizza1Img?.src || pizza1Img} alt="mini" className="w-full h-full object-cover" />
            </div>
            <div className="text-sm">
              <div className="font-semibold">Limited Offer</div>
              <div className="text-xs text-gray-500">Get 10% off your first order</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-12 bg-white/80 backdrop-blur-sm py-8 rounded-xl">
        <h2 className="text-2xl font-semibold">Popular picks</h2>
        <p className="text-sm text-gray-500">Fan favourites — loved across Parklands & Westlands</p>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* creative cards — still static images but with nicer layout */}
          <article className="bg-white/90 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={pizza1Img?.src || pizza1Img} alt="Pepperoni" className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Pepperoni Classic</h3>
                <span className="text-sm font-bold">KSh 1200</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Savory, spicy, and cheesy.</p>
              <div className="mt-4 flex items-center justify-between">
                <Link href="/menu" className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-full text-sm">Order</Link>
                <button className="text-xs text-gray-500">★ Best seller</button>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={pizza2Img?.src || pizza2Img} alt="Margherita" className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Margherita</h3>
                <span className="text-sm font-bold">KSh 1250</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Fresh basil, gooey cheese.</p>
              <div className="mt-4 flex items-center justify-between">
                <Link href="/menu" className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-full text-sm">Order</Link>
                <button className="text-xs text-gray-500">✅ Veg-friendly</button>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={pizza3Img?.src || pizza3Img} alt="BBQ Chicken" className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">BBQ Chicken</h3>
                <span className="text-sm font-bold">KSh 1300</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Smoky and sweet.</p>
              <div className="mt-4 flex items-center justify-between">
                <Link href="/menu" className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-full text-sm">Order</Link>
                <button className="text-xs text-gray-500">🔥 Spicy</button>
              </div>
            </div>
          </article>

          <article className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
            <img src={pizza4Img?.src || pizza4Img} alt="Veggie" className="w-full h-44 object-cover" />
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Veggie Delight</h3>
                <span className="text-sm font-bold">KSh 1350</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Loaded with fresh veggies.</p>
              <div className="mt-4 flex items-center justify-between">
                <Link href="/menu" className="inline-flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-full text-sm">Order</Link>
                <button className="text-xs text-gray-500">🥦 Healthy</button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-12 bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-sm">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div>
            <h3 className="text-xl font-semibold">How it works</h3>
            <p className="text-sm text-gray-500 mt-2">Order, pay, and track — we handle the rest.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-full">🧾</div>
            <div>
              <div className="font-semibold">Choose</div>
              <div className="text-sm text-gray-500">Pick your favourite pizza</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-full">🚚</div>
            <div>
              <div className="font-semibold">Delivered</div>
              <div className="text-sm text-gray-500">Hot and on time</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 mt-12 text-center text-sm text-gray-600">© {new Date().getFullYear()} GoGol Pizza • Parklands, Nairobi • Contact: +254718144444</footer>
    </main>
  )
}
