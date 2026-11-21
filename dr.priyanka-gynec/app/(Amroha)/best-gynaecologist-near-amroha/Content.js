import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Amroha?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for consultations.",
  },
  {
    q: "How many visits will I need in the first three months?",
    a: "It depends on your concern. A simple periods problem may need two or three visits, while fertility treatment or pregnancy needs more. Ask your doctor for the likely schedule at your first visit.",
  },
  {
    q: "What happens at the first consultation?",
    a: "A discussion of your symptoms and history, a gentle examination only if needed, tests or ultrasound if required, a clear explanation of options and time for questions.",
  },
  {
    q: "Can some follow-up checks be done closer to home?",
    a: "Some routine tests may be possible locally. Ask your doctor which ones, and share the reports with the clinic.",
  },
  {
    q: "Does the clinic offer IVF?",
    a: "Yes. It offers fertility and IVF treatment with time-lapse embryo monitoring and AI-powered semen analysis with DNA integrity testing.",
  },
  {
    q: "Is normal delivery supported?",
    a: "Yes. Normal vaginal delivery is prioritised wherever it is safe, and a caesarean is advised only when medically necessary.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports and scans, and the doctor will review them and explain your options.",
  },
  {
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on www.gynaecologistmoradabad.com.',
  },
];

const journeys = [
  {
    title: "Journey 1: Periods and Hormonal Concerns",
    steps: [
      {
        heading: "Day 1: First consultation",
        text: "Conversation about your cycle, symptoms and health. A gentle examination only if needed. Ultrasound and blood tests, such as haemoglobin, thyroid and hormones, as advised. The clinic uses a Voluson E22 3D and 4D ultrasound machine.",
      },
      {
        heading: "Week 1 to 2: Results and plan",
        text: "Findings are explained in plain words. Conditions such as PCOS, thyroid imbalance, fibroids or polyps are discussed, along with options.",
      },
      {
        heading: "Month 1: Starting the plan",
        text: "Lifestyle changes, medicines if needed and a period diary. A follow-up date is set.",
      },
      {
        heading: "Month 2 to 3: Review",
        text: "Your doctor reviews your diary, symptoms and test results, and adjusts the plan. Many women notice clearer cycles or fewer symptoms by this stage, though this varies.",
      },
    ],
  },
  {
    title: "Journey 2: Trying to Conceive",
    steps: [
      {
        heading: "Day 1: First consultation",
        text: "Both partners are encouraged to attend. Discussion of your history, cycles and previous treatments. Initial tests are planned.",
      },
      {
        heading: "Week 1 to 3: Evaluation",
        text: "Ovulation tracking, ultrasound, blood tests and semen analysis. The clinic offers AI-powered semen analysis with DNA integrity testing.",
      },
      {
        heading: "Month 1: First plan",
        text: "Lifestyle guidance, timing advice and, if appropriate, ovulation induction with ultrasound monitoring.",
      },
      {
        heading: "Month 2 to 3: Review and next steps",
        text: "If pregnancy has not occurred, the plan is reviewed. Options may include adjusting treatment or considering IVF, with time-lapse embryo monitoring. Treatment is personalised to your age, history and test results.",
      },
    ],
  },
  {
    title: "Journey 3: Pregnancy",
    steps: [
      {
        heading: "Week 6 to 8: First visit",
        text: "Confirmation of pregnancy, dating scan, medical history, blood tests and supplements.",
      },
      {
        heading: "Month 2 to 3: Early follow-up",
        text: "Screening scan and blood tests as advised, nutrition guidance and answers to your early questions.",
      },
      {
        heading: "Month 4 to 5: Detailed scans",
        text: "Anomaly scan around the middle of pregnancy, blood pressure and weight checks, and screening for gestational diabetes in the later part of this period.",
      },
      {
        heading: "Month 6 onwards: Closer follow-up",
        text: "More frequent visits, growth scans and delivery planning. Normal delivery is prioritised wherever it is safe, and a caesarean is advised only when medically necessary. High-risk pregnancies receive closer monitoring from the start.",
      },
    ],
  },
  {
    title: "Journey 4: Cyst, Fibroid or Endometriosis",
    steps: [
      {
        heading: "Day 1: First consultation or second opinion",
        text: "Bring your scans and reports. The doctor reviews them, examines you if needed and explains your options, including non-surgical ones.",
      },
      {
        heading: "Week 1 to 2: Decision time",
        text: "You decide whether to watch, use medicines or have a procedure. If surgery is advised, you hear the benefits, risks and alternatives. The clinic offers 3D laparoscopic cystectomy, myomectomy, hysterectomy, endometriosis surgery and sacrocolpopexy, along with hysteroscopy and polypectomy. Surgery is recommended only when it is truly the best option.",
      },
      {
        heading: "Month 1: If surgery is planned",
        text: "Pre-operative tests, anaesthesia assessment, planning for travel and family support. Please confirm with the clinic where the surgery will take place.",
      },
      {
        heading: "Month 2 to 3: Recovery and follow-up",
        text: "Wound checks, review of reports, return to normal activity as advised and a plan for ongoing care.",
      },
    ],
  },
];

const myths = [
  {
    myth: "One visit should solve everything.",
    fact: "Many conditions need follow-up, and results often take time.",
  },
  {
    myth: "If the first treatment does not work, nothing will.",
    fact: "Plans are adjusted, and many women improve after a change.",
  },
  {
    myth: "Asking for a second opinion is rude.",
    fact: "It is a normal and reasonable step, especially before surgery.",
  },
  {
    myth: "Good doctors always prescribe a lot of tests.",
    fact: "Good doctors advise tests only when they add useful information.",
  },
];

const travelQuestions = [
  "How many visits are likely over the first three months?",
  "Which checks can be done locally, if the doctor agrees?",
  "Can tests and consultation be planned on the same day?",
  "What should I do if my symptoms change between visits?",
];

const preparationList = [
  "Book in advance by phone or WhatsApp, and confirm timings",
  "Bring previous prescriptions, blood tests, ultrasounds and surgical records",
  "Note the date of your last period, your symptoms and your questions",
  "List your medicines and supplements",
  "Consider travelling with a family member or friend",
  "If pregnant, carry your antenatal card",
];

export default function BestGynaecologistNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Best Gynaecologist near Amroha – Your First 90 Days of Care
              </h1>

              <p>
                Choosing a gynaecologist is only the first step. What matters
                just as much is what happens next: the first visit, the tests,
                the follow-ups and the way your plan changes over time. Knowing
                this journey in advance helps you choose with confidence.
              </p>

              <p>
                If you live in Amroha,{" "}
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
                in neighbouring <strong>Moradabad</strong> is an option to
                consider. The clinic is located in <strong>Moradabad</strong>,
                not in Amroha, and women from Amroha and surrounding areas
                travel there for consultations. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong> You are listened
                to, informed and never rushed.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Look at the Whole Journey?
              </h2>

              <p>
                A single good consultation is not enough if follow-up is
                confusing. When you compare doctors, ask what the next three
                months will look like. A clear answer shows that the clinic
                plans care, not just one-off visits.
              </p>
            </section>

            {journeys.map((journey) => (
              <section key={journey.title} className="space-y-5">
                <h2 className="text-2xl font-bold text-gray-900">
                  {journey.title}
                </h2>

                <div className="space-y-4">
                  {journey.steps.map((step, index) => (
                    <div
                      key={step.heading}
                      className="relative rounded-xl border border-gray-200 p-5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8F1738] text-sm font-bold text-white">
                          {index + 1}
                        </span>

                        <div className="min-w-0 space-y-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {step.heading}
                          </h3>

                          <p>{step.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                What Makes the Journey Smooth?
              </h2>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>A clear next step at every visit.</strong> You should
                  leave knowing what happens next.
                </li>
                <li>
                  <strong>Reports kept in order.</strong> A tidy folder saves
                  repeat tests and confusion.
                </li>
                <li>
                  <strong>Honest timelines.</strong> Your doctor tells you
                  what is realistic.
                </li>
                <li>
                  <strong>Reachability.</strong> You know how to contact the
                  clinic with questions.
                </li>
                <li>
                  <strong>Flexibility.</strong> The plan changes if your
                  situation changes.
                </li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Myths About Starting Treatment
              </h2>

              <div className="space-y-4">
                {myths.map((item) => (
                  <div
                    key={item.myth}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <p className="font-semibold text-gray-900">
                      Myth: {item.myth}
                    </p>

                    <p className="mt-2">
                      <strong className="text-[#8F1738]">Fact:</strong>{" "}
                      {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Is Travelling From Amroha Practical for This Journey?
              </h2>

              <p>
                Some stages need you at the clinic, such as consultations,
                scans and procedures. Others may be done closer to home. At
                your first visit, ask:
              </p>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                {travelQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>

              <p className="font-semibold text-gray-900">
                Plan around the schedule, not just the first appointment.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for Day 1
              </h2>

              <ul className="space-y-3">
                {preparationList.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#8F1738] text-xs text-[#8F1738]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                When Not to Wait
              </h2>

              <p>
                Go to the nearest emergency facility immediately for very
                heavy bleeding, sudden severe pain, bleeding during pregnancy,
                fainting, reduced baby movements, leaking fluid or regular
                contractions before your due date. Do not delay care to travel
                to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and endometriosis care, with
                  a compassionate approach.
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history.
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services.
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice based on what you
                  truly need.
                </li>
                <li>
                  <strong>Trust earned over time:</strong> A reputation built
                  on families recommending the clinic to one another.
                </li>
              </ul>
            </section>

            <section className="space-y-5 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p>
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#8F1738]" />
                  <div>
                    <p className="font-semibold">Call for appointment</p>
                    <a
                      href="tel:+919079765578"
                      className="text-[#8F1738] hover:underline"
                    >
                      +91 90797 65578
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#8F1738]" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8F1738] hover:underline"
                    >
                      +91 89796 70705
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-[#8F1738]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="break-all text-[#8F1738] hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="mt-1 h-5 w-5 shrink-0 text-[#8F1738]" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="break-all text-[#8F1738] hover:underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/services"
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  Our Services
                </Link>
              </div>
            </section>

            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {faq.q}
                    </h3>

                    <p className="mt-2 leading-relaxed text-gray-700">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24">
            <LandingEnquiryForm />
          </aside>
        </div>
      </section>
    </main>
  );
}