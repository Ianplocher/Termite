const reasons = [
  {
    stat: "$5B+",
    title: "In Yearly Termite Damage",
    description: "Termites cause over $5 billion in property damage annually across the US — more than fires, storms, and earthquakes combined.",
  },
  {
    stat: "0%",
    title: "Insurance Coverage",
    description: "Most homeowners insurance policies do NOT cover termite damage. You could be on the hook for thousands in repairs.",
  },
  {
    stat: "$$$",
    title: "Early Detection Saves",
    description: "Catching termite activity early can save Riverside homeowners thousands in structural repair costs. Prevention is always cheaper than repair.",
  },
  {
    stat: "Required",
    title: "For Home Sales",
    description: "Most lenders require a termite inspection before approving a home sale. The inspection is free — if you need official clearance paperwork filed for escrow, a small filing fee applies.",
  },
];

export default function WhyInspect() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Riverside Homeowners Need a Termite Inspection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Riverside&apos;s warm climate makes it a hotspot for termite activity. Don&apos;t wait until the damage is done.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-orange transition-colors"
            >
              <div className="text-3xl font-bold text-orange mb-2">{reason.stat}</div>
              <h3 className="text-lg font-bold text-navy mb-2">{reason.title}</h3>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
