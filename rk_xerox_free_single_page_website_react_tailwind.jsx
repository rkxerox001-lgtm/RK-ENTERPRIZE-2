import { useState } from "react";

export default function RKXeroxSite() {
  const [year] = useState(new Date().getFullYear());

  const services = [
    { name: "Black & White Print (1 Side)", price: "₹1 / page" },
    { name: "Black & White Print (2 Side)", price: "₹2 / page" },
    { name: "Color Print", price: "₹10 / page" },
    { name: "Photocopy / Xerox", price: "From ₹1 / page" },
    { name: "Spiral Binding", price: "₹10" },
    { name: "Lamination (ID/Card)", price: "₹10" },
  ];

  const extras = [
    "A4 / Legal / A3 sizes available",
    "Online form fill-up & print",
    "Email & PDF print from mobile",
    "Document scan & share",
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📄</span>
            <h1 className="text-xl font-extrabold tracking-tight">RK XEROX</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#pricing" className="hover:text-blue-600">Pricing</a>
            <a href="#hours" className="hover:text-blue-600">Hours</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href="#contact" className="md:inline-flex hidden px-4 py-2 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">Book Now</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Fast, Affordable <span className="text-blue-700">Xerox & Printing</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              High‑quality photocopy, color/B&W prints, lamination & spiral binding. Bring files on
              mobile or email—get prints in minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="px-5 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700">View Prices</a>
              <a href="#contact" className="px-5 py-3 rounded-2xl bg-white border font-semibold hover:bg-gray-50">WhatsApp / Call</a>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
              {extras.map((e) => (
                <li key={e} className="flex items-start gap-2">
                  <span className="mt-1">✅</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-lg border flex items-center justify-center">
              <div className="p-6 text-center">
                <div className="text-6xl">🖨️</div>
                <p className="mt-4 text-gray-700 font-semibold">Professional Xerox & Printing</p>
                <p className="text-gray-500">A4 • Legal • Color • B&W • Scan • Email</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow px-4 py-2 border text-sm font-semibold">
              Open Today: <span className="text-green-700">10:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-14">
        <h3 className="text-2xl md:text-3xl font-extrabold">Our Services</h3>
        <p className="mt-2 text-gray-600">Quick, clean and reliable—priced for everyone.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🖨️", title: "Photocopy / Xerox", desc: "Sharp copies with proper contrast" },
            { icon: "🖼️", title: "Color / B&W Prints", desc: "From phone, pen‑drive or email" },
            { icon: "📎", title: "Spiral Binding", desc: "Projects, notes & reports" },
            { icon: "🪪", title: "Lamination", desc: "ID cards, photos & documents" },
            { icon: "📧", title: "Scan & Email", desc: "Clear PDF scans, share instantly" },
            { icon: "📝", title: "Online Forms", desc: "Form filling & print support" },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-3xl p-6 border shadow-sm hover:shadow-md transition">
              <div className="text-3xl">{card.icon}</div>
              <h4 className="mt-3 font-bold text-lg">{card.title}</h4>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white/70 border-y">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h3 className="text-2xl md:text-3xl font-extrabold">Simple Pricing</h3>
          <p className="mt-2 text-gray-600">No surprises. Bulk/college orders welcome.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.name} className="rounded-3xl border bg-white p-6 shadow-sm">
                <div className="text-sm text-gray-500">Service</div>
                <div className="mt-1 font-bold">{s.name}</div>
                <div className="mt-4 text-2xl font-extrabold">{s.price}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-sm text-gray-600">
            * Prices are indicative for A4. Color density & special sizes may vary. GST extra if applicable.
          </div>
        </div>
      </section>

      {/* Hours */}
      <section id="hours" className="max-w-6xl mx-auto px-4 py-14">
        <h3 className="text-2xl md:text-3xl font-extrabold">Working Hours</h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <ul className="space-y-2 text-gray-700">
              {[
                ["Mon–Sat", "10:00 AM – 8:00 PM"],
                ["Sunday", "10:00 AM – 2:00 PM"],
              ].map(([day, time]) => (
                <li key={day} className="flex items-center justify-between">
                  <span className="font-semibold">{day}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h4 className="font-bold">Quick Notes</h4>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>• Urgent prints & bulk Xerox available</li>
              <li>• College/office project support</li>
              <li>• Mobile to print via WhatsApp</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h3 className="text-2xl md:text-3xl font-extrabold">Contact & Location</h3>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="space-y-2 text-gray-700">
                <div>
                  <div className="text-sm text-gray-500">Shop Name</div>
                  <div className="font-bold">RK XEROX</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Address</div>
                  <div className="font-medium">Add your full address here (Landmark, City, Pincode)</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <a
                    href="tel:+910000000000" // TODO: replace with your number
                    className="px-4 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-center shadow hover:bg-blue-700"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/910000000000" // TODO: replace with your WhatsApp number (country code first)
                    className="px-4 py-3 rounded-2xl bg-white border font-semibold text-center hover:bg-gray-50"
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                </div>
                <div className="pt-4 text-sm text-gray-600">
                  Email for prints: <span className="font-semibold">rkxerox@example.com</span> {/* TODO: replace */}
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border bg-white shadow-sm">
              {/* Replace src with your Google Maps embed link */}
              <iframe
                title="RK Xerox Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31547.403!2d72.13!3d24.17!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v0000000000000"
                className="w-full aspect-video"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm">© {year} RK XEROX. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/910000000000" // TODO: replace with your number
        className="fixed bottom-6 right-6 rounded-full shadow-lg hover:shadow-xl px-5 py-3 bg-green-500 text-white font-bold"
        target="_blank"
      >
        WhatsApp Us
      </a>
    </div>
  );
}
