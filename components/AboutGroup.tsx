"use client";

export default function AboutGroup() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:grid lg:grid-cols-2 lg:gap-12">
        
        {/* Left image */}
        <div className="mb-10 lg:mb-0">
          <img
            src="/122.jpg"
            alt="Factory manufacturing"
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Right text */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold text-brand-500 uppercase">
            About SIM 
          </p>

          <h2 className="mt-2 text-4xl font-extrabold text-steel-900">
            Industrial Mold & Plastic Injection Expertise
          </h2>

          <p className="mt-4 text-steel-500 max-w-md">
            We design and manufacture precision molds and plastic parts with
            strong focus on quality, cost control, and on-time delivery.
          </p>

          {/* Benefits list */}
          <ul className="mt-6 space-y-3 text-steel-700">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              Decades of mold design expertise
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              In-house tooling & fabrication
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
