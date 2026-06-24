import { Link } from "react-router-dom"

const TESTIMONIALS = [
  {
    name: "राम परियार — Ram Pariyar",
    location: "इटहरी-५, सुनसरी",
    rating: 5,
    text: "मैले Nikhil Traders बाट आफ्नो नयाँ घरको लागि सबै इलेक्ट्रिकल सामान किनेको हुँ — LED bulbs, fans, switches, wires सबै। उहाँहरूले मलाई सही प्रोडक्ट छान्न धेरै मद्दत गर्नुभयो। Quality एकदमै राम्रो छ र price पनि अरू भन्दा सस्तो। म त भन्छु, यो ठाउँ Itahari मा electronics को लागि best हो। I've been coming here for years and will keep coming back!",
  },
  {
    name: "सीता कोइराला — Sita Koitala",
    location: "इटहरी-८, सुनसरी",
    rating: 5,
    text: "ग्राहक सेवाको त कुरै नगरौं! मलाई केही थाहा थिएन इलेक्ट्रोनिक्सको बारेमा, तर दाइले धेरै सजिलोसँग सबै कुरा सम्झाउनुभयो। मेरो kitchen को लागि exhaust fan र मेरो बुबाको लागि emergency light किनेको। दुवै product एकदमै राम्रो छ। They really care about their customers and don't try to push expensive stuff on you. Highly recommend! 🙏",
  },
  {
    name: "अनिल श्रेष्ठ — Anil Shrestha",
    location: "धरान-१५, सुनसरी",
    rating: 5,
    text: "I run a small electrical contracting business in Dharan and I source most of my materials from Nikhil Traders. उहाँहरूसँग wires, MCBs, switches, holders सबै कुरा stock मा हुन्छ। थोक मूल्य पनि राम्रो छ र समयमै सामान पाइन्छ। Their product quality is consistent and I've never had a complaint from my clients. If you're looking for genuine electrical products at honest prices, this is the place.",
  },
  {
    name: "विनिता अधिकारी — Binita Adhikari",
    location: "इटहरी-३, सुनसरी",
    rating: 5,
    text: "पहिलो पटक गएको थिएँ घरको लागि bulb र fan किन्न। मलाई के कति watt को bulb लिने, कस्तो fan लिने — केही थाहा थिएन। Nikhil Traders को भाइले धेरै राम्रो सुझाव दिनुभयो र मेरो budget मा नै सबै भयो। Price transparency मलाई धेरै मन पर्यो — कुनै hidden charges छैन, जति भन्छ त्यति नै। I'm definitely a customer for life! ⭐",
  },
  {
    name: "दीपक थापा — Deepak Thapa",
    location: "विराटनगर, मोरङ",
    rating: 5,
    text: "I traveled all the way from Biratnagar after a friend recommended Nikhil Traders. I needed specific types of PVC wires and modular switches for a big project. They had everything in stock and even gave me a good bulk discount. सामानको गुणस्तर एकदमै राम्रो छ र price पनि market भन्दा कम। Worth the trip! Will definitely order from them again.",
  },
  {
    name: "गीता भण्डारी — Gita Bhandari",
    location: "इटहरी-११, सुनसरी",
    rating: 5,
    text: "घरको wiring को लागि switch boards, MCB, wires, holders सबै यहीबाट किनेको। दाइले आफैं आएर के-के चाहिन्छ हेर्नुभयो र सुझाव दिनुभयो। एकदमै भरपर्दो पसल हो। उहाँहरू सधैं ग्राहकको हितमा सोच्नुहुन्छ, पैसा कमाउन मात्र होइन। Genuinely the best electronics shop in Itahari. Thanks Nikhil Traders!",
  },
]

const About = () => {
  return (
    <div className="pt-16">
      {/* HEADER */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">About Nikhil Traders</h1>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Your trusted electronics and electrical shop in Itahari — serving customers since{" "}
            <strong>2070 BS</strong>.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">हाम्रो कथा — Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Nikhil Traders started its journey in <strong>२०७० साल (2070 BS)</strong> with a
                simple mission — to provide quality electronics and electrical products to the people
                of Itahari and beyond at honest prices.
              </p>
              <p>
                What began as a small shop in Itahari has grown into a trusted destination for
                everything electrical — from LED bulbs and fans to wires, switches, and home
                appliances. Hundreds of satisfied customers across Sunsari, Morang, and beyond
                trust us for their electrical needs.
              </p>
              <p>
                हामी सधैं ग्राहकलाई पहिलो प्राथमिकता दिन्छौं। गुणस्तरीय सामान, उचित मूल्य र
                इमान्दार सेवा — यो नै हाम्रो परिचय हो।
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl aspect-[4/3] overflow-hidden">
            <img
              src="/shop.png"
              alt="Nikhil Traders shop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">२०७०</div>
              <p className="text-sm text-gray-500 mt-1">Since 2070 BS</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">१००+</div>
              <p className="text-sm text-gray-500 mt-1">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">४०+</div>
              <p className="text-sm text-gray-500 mt-1">Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          What Our Customers Say
        </h2>
        <p className="text-sm text-gray-500 text-center mb-8">
          हाम्रा ग्राहकहरूको अनुभव — कृपया पढ्नुहोस्
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(t.rating)].map((_, si) => (
                  <svg key={si} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">
                "{t.text}"
              </p>
              <div className="border-t border-gray-200 pt-3">
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAP */}
      <section className="bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Find Us</h2>
          <p className="text-sm text-gray-500 text-center mb-8">हामीलाई यहाँ भेट्नुहोस् — Itahari</p>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps?q=Nikhil+Traders+Itahari&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nikhil Traders location on Google Maps"
            />
          </div>
          <p className="text-xs text-gray-400 text-center mt-3">
            Search "Nikhil Traders Itahari" on Google Maps to get directions
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Visit Us Today!
          </h2>
          <p className="text-gray-400 mb-6">
            आजै हामीलाई भेट्नुहोस् — Itahari को सबैभन्दा भरपर्दो इलेक्ट्रोनिक्स पसल
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/products"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Browse Products
            </Link>
            <a
              href="https://wa.me/9779702668254"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
