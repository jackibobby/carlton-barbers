function Testimonials() {

  const testimonials = [
    {
      name: "James Wilson",
      review:
        "Best fade I've had in Melbourne. Highly recommended."
    },
    {
      name: "Michael Brown",
      review:
        "Professional team and premium atmosphere."
    },
    {
      name: "David Smith",
      review:
        "Outstanding service and attention to detail."
    }
  ];

  return (
    <section className="bg-zinc-950 py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-yellow-500 mb-16">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-xl"
            >
              <p className="text-zinc-300">
                "{item.review}"
              </p>

              <h4 className="mt-6 text-yellow-500 font-bold">
                {item.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;