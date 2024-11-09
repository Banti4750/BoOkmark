import React from "react";

const Faq = () => {
  return (
    <>
      <div className="m-6">
        <section id="faq">
          <div className="container mx-auto">
            <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-lg px-6 mx-auto text-center text-gray-500">
              Here are some of our FAQs. If you have any other questions you'd
              like answered, please feel free to email us.
            </p>
          </div>
        </section>

        <section id="faq-accordion">
          <div className="container mx-auto px-6 mb-32">
            <div className="max-w-2xl m-8 mx-auto overflow-hidden">
              {/* FAQ Item */}
              {[
                { question: "What is Bookmark?", id: 1 },
                { question: "How can I request a new browser?", id: 2 },
                { question: "Is there a mobile app?", id: 3 },
                { question: "What about other Chromium browsers?", id: 4 },
              ].map((faq) => (
                <div
                  key={faq.id}
                  className="py-1 border-b outline-none group"
                  tabIndex={faq.id}
                >
                  <div className="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease">
                    <div className="transition duration-500 ease group-hover:text-red-500">
                      {faq.question}
                    </div>

                    <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="12"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          d="M1 1l8 8 8-8"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                    <p className="py-2 text-justify text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat, repellat amet doloribus consequuntur eos similique
                      provident tempora voluptates iure quia fuga dicta
                      voluptatibus culpa mollitia recusandae delectus id
                      suscipit labore?
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faq;
