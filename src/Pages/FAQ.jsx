import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className=" lg:mx-24 mx-5 mt-10 ">
        <div className="container flex flex-col  p-4 mx-auto md:p-8">
          <p className="px-6 py-2 border rounded-3xl w-max">Faq</p>
          <h1 className="text-lg mb-10 lg:text-3xl font-bold mt-5">
            Frequently Asked Questions
          </h1>
          <div data-aos="fade-up" data-aos-duration="1000">
            <div className="collapse  collapse-arrow mb-2 bg-[#FFFFF5]">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What are your office hours?
              </div>
              <div className="collapse-content">
                <p>
                  Our office hours vary by location, but typically we are open
                  Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                  may offer extended hours or weekend appointments. Please
                  contact your nearest clinic for specific hours.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow  mb-2 bg-[#FFFFF5]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                How can I schedule an appointment?
              </div>
              <div className="collapse-content">
                <p>
                  Visit Our Website: Go to our website and click on the
                  "Schedule Appointment" button.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow mb-2  bg-[#FFFFF5]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Do you accept insurance?
              </div>
              <div className="collapse-content">
                <p>
                  Check Our Website: Visit our website and navigate to the
                  "Insurance" section for a list of accepted providers.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow mb-2  bg-[#FFFFF5]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                What should I bring to my appointment?
              </div>
              <div className="collapse-content">
                <p>
                  Insurance Information: Bring your insurance card and any
                  necessary forms.
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow mb-2  bg-[#FFFFF5]">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Do you offer telemedicine appointments?
              </div>
              <div className="collapse-content">
                <p>
                  Visit Our Website: Go to our website and select the
                  "Telemedicine Appointment" option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
