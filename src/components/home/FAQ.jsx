function FAQ() {
  const faqs = [
    {
      question: "Do you provide 24/7 home healthcare?",
      answer: "Yes, our healthcare services are available 24/7.",
    },
    {
      question: "Can I book an appointment online?",
      answer:
        "Yes, you can easily book an appointment through our website.",
    },
    {
      question: "Do you provide specialist doctors?",
      answer:
        "Yes, we have experienced specialists for different healthcare needs.",
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, emergency healthcare support is available.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-bold uppercase">
            FAQ
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-5">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-lg sm:text-xl font-bold text-blue-900">
                {item.question}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;