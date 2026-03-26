const reviews = [
  {
    name: "Maria L.",
    neighborhood: "Arlington Heights",
    rating: 5,
    text: "I had no idea termites were already in my garage wall. The inspector was thorough, professional, and the whole thing was actually free. Saved me from thousands in damage.",
  },
  {
    name: "James T.",
    neighborhood: "Wood Streets",
    rating: 5,
    text: "Scheduled online on Monday, they came out Wednesday. The inspector explained everything clearly and gave me a detailed report. Couldn't be happier with the service.",
  },
  {
    name: "Patricia R.",
    neighborhood: "Canyon Crest",
    rating: 5,
    text: "We needed an inspection before selling our home. They were fast, professional, and gave us peace of mind. Highly recommend to any Riverside homeowner.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background image of Riverside homes */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-homes.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Trusted by Riverside Homeowners
          </h2>
          <p className="text-lg text-gray-600">
            See what your neighbors are saying about our free termite inspections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-md"
            >
              <StarRating count={review.rating} />
              <p className="mt-4 text-gray-700 leading-relaxed">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="font-semibold text-navy">{review.name}</p>
                <p className="text-sm text-gray-500">{review.neighborhood}, Riverside</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
