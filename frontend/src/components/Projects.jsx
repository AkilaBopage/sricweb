// components/Projects.jsx
export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Global Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Sri Lanka Transport Network</h3>
            <p className="text-gray-600 mt-2">
              Development of modern bus & logistics infrastructure.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold">International Expansion</h3>
            <p className="text-gray-600 mt-2">
              Partnerships across Asia & Europe markets.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}