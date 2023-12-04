import { useState } from "react";
import Container from "../../Layout/Container";

const Faq = () => {
  const [open, setOpen] = useState(false);
  const handleFAQ = (id) => {
    setOpen(!open);
    const element = document.getElementById(id);
    if (open) {
      element.classList.remove("collapse-open");
      element.classList.add("collapse-close");
    } else {
      element.classList.remove("collapse-close");
      element.classList.add("collapse-open");
    }
  };
  
  return (
    <div className="bg-white py-20">
      <Container>
        <section>
          <div className="text-center mb-10 space-y-4">
            <p className="tracking-widest font-bold text-primary-color">
              OUR FAQ
            </p>
            <h2 className="text-4xl text-secondary-color font-semibold">
              Frequency And Questions
            </h2>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <div
                id="accordion1"
                className="collapse collapse-arrow cursor-pointer"
                onClick={() => handleFAQ("accordion1")}
              >
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="my-accordion"
                />
                <div className="collapse-title text-xl font-medium text-secondary-color">
                  What is the purpose of this assignment website?
                </div>
                <div className="collapse-content">
                  <p className="text-active-color">
                    This assignment website serves as a platform for students to
                    access and submit assignments, receive instructions, and
                    track their progress throughout the course.
                  </p>
                </div>
              </div>
              <div
                id="accordion2"
                className="collapse collapse-arrow cursor-pointer"
                onClick={() => handleFAQ("accordion2")}
              >
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="my-accordion"
                />
                <div className="collapse-title text-xl font-medium text-secondary-color">
                  How do I submit an assignment on the website?
                </div>
                <div className="collapse-content">
                  <p className="text-active-color">
                    Log in to your account, go to the &#34;Assignments&#34;
                    section, select the assignment you want to submit, and
                    follow the instructions for uploading your assignment file.
                  </p>
                </div>
              </div>
              <div
                id="accordion3"
                className="collapse collapse-arrow cursor-pointer"
                onClick={() => handleFAQ("accordion3")}
              >
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="my-accordion"
                />
                <div className="collapse-title text-xl font-medium text-secondary-color">
                  How do I check the status of my assignment and view feedback?
                </div>
                <div className="collapse-content">
                  <p className="text-active-color">
                    You can view your assignment&#39;s status and feedback in
                    the or &#34;My Assignments&#34; section. Your instructor
                    will provide feedback and grades there.
                  </p>
                </div>
              </div>
              <div
                id="accordion4"
                className="collapse collapse-arrow cursor-pointer"
                onClick={() => handleFAQ("accordion4")}
              >
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="my-accordion"
                />
                <div className="collapse-title text-xl font-medium text-secondary-color">
                  Is there a deadline for assignment submission?
                </div>
                <div className="collapse-content">
                  <p className="text-active-color">
                    Yes, assignments typically have set deadlines. The deadline
                    will be specified in the assignment details, and late
                    submissions may not be accepted.
                  </p>
                </div>
              </div>
              <div
                id="accordion5"
                className="collapse collapse-arrow cursor-pointer"
                onClick={() => handleFAQ("accordion5")}
              >
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="my-accordion"
                />
                <div className="collapse-title text-xl font-medium text-secondary-color">
                  Is my personal information secure on the assignment website?
                </div>
                <div className="collapse-content">
                  <p className="text-active-color">
                    Yes, reputable assignment websites prioritize the security
                    of your personal information. They use encryption and
                    security measures to protect your data.
                  </p>
                </div>
              </div>
              <div
                id="accordion6"
                className="collapse collapse-arrow cursor-pointer"
                onClick={() => handleFAQ("accordion6")}
              >
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="my-accordion"
                />
                <div className="collapse-title text-xl font-medium text-secondary-color">
                  What file formats are accepted for assignment submissions?
                </div>
                <div className="collapse-content">
                  <p className="text-active-color">
                    The accepted file formats may vary, but common formats
                    include PDF, Word documents (DOC/DOCX). Check the assignment
                    instructions for specific requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img className="w-full"
                src="https://themeforest.wprealizer.com/html-educoda-preview/educoda/assets/images/faq-img.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Faq;
