
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "How do I book a gynaecologist appointment as an Amroha patient?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on www.gynaecologistmoradabad.com.',
  },
  {
    q: "Is the clinic in Amroha?",
    a: "No. It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
  },
  {
    q: "What should I tell the clinic when booking?",
    a: "Your name, age, reason for the visit, whether it is a first or follow-up visit, preferred days and that you are travelling from Amroha.",
  },
  {
    q: "Can both partners be seen for a fertility consultation?",
    a: "Yes. Both partners are encouraged to attend, with their reports.",
  },
  {
    q: "Can tests or a scan be done on the same day?",
    a: "It depends on what you need. Ask the clinic when you book, so you can plan your day.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Previous prescriptions, blood tests, ultrasounds, surgical records, a list of medicines, identification and your questions. If pregnant, bring your antenatal card.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "What if I need to reschedule?",
    a: "Inform the clinic as early as possible by phone or WhatsApp, and offer alternative days. Do not skip time-sensitive visits without telling your doctor.",
  },
  {
    q: "Is my consultation confidential?",
    a: "Yes. Your concerns are discussed respectfully, and your medical details are kept confidential.",
  },
  {
    q: "What should I do in an emergency?",
    a: "Go to the nearest emergency facility immediately. Do not delay care to travel to another city.",
  },
];

const bookingSituations = [
  {
    title: "Situation 1: First Visit",
    subtitle: "You have never consulted this clinic.",
    tell: "Your name, age, reason for the visit in a few words, that it is your first visit and that you are travelling from Amroha.",
    ask: "How long the first consultation takes, whether tests or a scan can be done on the same day, and what to bring.",
    bring: "Previous prescriptions, blood tests, ultrasounds and surgical records, a list of medicines, your last period date and your questions.",
  },
  {
    title: "Situation 2: Returning Patient",
    subtitle: "You have been seen here before.",
    tell: "That it is a follow-up, the date of your last visit and what you are following up (for example, a scan result, a treatment review or a post-procedure check).",
    ask: "Whether any new tests are needed before the visit, and whether results from a local lab should be sent in advance.",
    bring: "All reports since your last visit, your notes and any symptom diary.",
  },
  {
    title: "Situation 3: A Couple",
    subtitle: "You are consulting about fertility.",
    tell: "That both partners wish to attend, and whether any tests have been done.",
    ask: "What each partner should bring, and whether any test needs preparation, such as abstinence before a semen analysis.",
    bring: "Both partners' reports, and previous treatment records. The clinic offers fertility evaluation for both partners, ovulation tracking and induction, IVF, time-lapse embryo monitoring, and AI-powered semen analysis with DNA integrity testing.",
  },
  {
    title: "Situation 4: Pregnant",
    subtitle: "You have a positive test, or you are already under care.",
    tell: "Your weeks of pregnancy, whether it is your first visit, any medical conditions and whether a scan is due.",
    ask: "Which scan or tests are planned, and whether they can be done on the same day. The clinic uses a Voluson E22 3D and 4D ultrasound machine.",
    bring: "Your antenatal card and all previous scans and blood tests.",
  },
  {
    title: "Situation 5: Urgent, but Not an Emergency",
    subtitle: "Your symptoms are worrying, but you are stable.",
    tell: "Exactly what is happening and how long it has been going on, and ask for the earliest available slot.",
    ask: "Whether you should do anything before you come.",
    bring: "Remember: if your symptoms are severe, go to the nearest emergency facility instead of waiting for an appointment.",
  },
];

const bookingMistakes = [
  {
    title: "Not saying you are travelling.",
    description:
      "Mention it, so the team can think about grouping tests with your consultation.",
  },
  {
    title: "Giving no reason for the visit.",
    description:
      "A short reason helps the clinic plan time and preparation.",
  },
  {
    title: "Forgetting preparation instructions.",
    description:
      "Some scans and tests need fasting or a full bladder. Ask when you book.",
  },
  {
    title: "Leaving reports at home.",
    description:
      "Previous scans and blood tests prevent repeat tests and speed up decisions.",
  },
  {
    title: "Booking only one visit when you need a series.",
    description:
      "For fertility treatment, antenatal care or post-surgery review, ask for the likely schedule.",
  },
  {
    title: "Assuming fees and timings.",
    description:
      "Always confirm current timings and fees directly with the clinic.",
  },
  {
    title: "Skipping follow-up.",
    description:
      "Time-sensitive visits, such as pregnancy scans or fertility monitoring, should not be skipped without telling your doctor.",
  },
  {
    title: "Not saving the clinic's reply.",
    description:
      "Keep the WhatsApp message or note down the confirmed date and time.",
  },
];

const appointmentQuestions = [
  "What are the current timings, and which time suits my visit?",
  "Do I need to prepare, such as fasting, a full bladder or a particular day of my cycle?",
  "Can tests or a scan be done on the same day?",
  "What should I bring?",
  "What are the consultation fees and accepted payment methods?",
  "What should I do if I am running late, or need to reschedule?",
];

const emergencySigns = [
  "Heavy bleeding that soaks a pad every hour",
  "Bleeding during pregnancy",
  "Sudden severe abdominal or pelvic pain",
  "Fainting, dizziness or breathlessness",
  "Reduced or absent baby movements",
  "Leaking fluid or regular contractions before your due date",
];

const appointmentTracker = [
  "Date and time:",
  "Reason:",
  "Who is coming with me:",
  "Preparation needed:",
  "Documents to bring:",
  "Questions to ask:",
  "Result or advice:",
  "Next step and date:",
];

const appointmentSteps = [
  "A discussion of your symptoms, cycle history and medical background",
  "A gentle examination only if necessary, explained beforehand",
  "Ultrasound or blood tests if required",
  "A clear explanation of findings and treatment options",
  "Time to ask questions without pressure",
];

const beforeLeaving = [
  "Ask for the plan in simple words, and write it down",
  "Confirm medicines, doses and duration",
  "Ask which tests to repeat, and when",
  "Ask when to return, and what might change that date",
  "Ask which checks may be possible closer to home",
  "Ask how to contact the clinic with questions afterwards",
  "Book your next appointment before leaving, if one is needed",
];

export default function GynaecologistAppointmentForAmrohaPatients() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-8 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Gynaecologist Appointment for Amroha Patients – Dr. Priyanka Pachauri
              </h1>

              <p className="leading-7">
                A good appointment starts with a good booking. The right type
                of visit, the right preparation and the right questions save
                you time and an extra trip. This guide is written for patients
                from Amroha who want to consult{" "}
                <strong>Dr. Priyanka Pachauri</strong> at{" "}
                <strong>Dr. Priyanka Gynaec</strong>.
              </p>

              <p className="leading-7">
                To be clear, the clinic is located in{" "}
                <strong>Moradabad</strong>, not in Amroha. Women from Amroha
                and surrounding areas travel there for consultations. Its
                philosophy is <strong>&quot;Her Health First.&quot;</strong>
              </p>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h2 className="mb-2 text-lg font-semibold text-gray-900">
                  Clinic Address
                </h2>
                <p>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </p>
              </div>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Ways to Book
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:+919079765578"
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-[#8F1738]"
                >
                  <Phone className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong className="block text-gray-900">Phone call</strong>
                    +91 90797 65578
                  </span>
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-[#8F1738]"
                >
                  <Phone className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong className="block text-gray-900">WhatsApp</strong>
                    +91 89796 70705
                  </span>
                </a>

                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-[#8F1738]"
                >
                  <Globe className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong className="block text-gray-900">Website</strong>
                    Book Appointment option
                  </span>
                </a>

                <a
                  href="mailto:drpriyankagynaec@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 transition hover:border-[#8F1738]"
                >
                  <Mail className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong className="block text-gray-900">Email</strong>
                    drpriyankagynaec@gmail.com
                  </span>
                </a>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Which Situation Are You In?
              </h2>

              {bookingSituations.map((situation) => (
                <div
                  key={situation.title}
                  className="rounded-xl border border-gray-200 p-5 sm:p-6"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {situation.title}
                  </h3>

                  <p className="mt-2 italic text-gray-600">
                    {situation.subtitle}
                  </p>

                  <div className="mt-4 space-y-3">
                    <p className="leading-7">
                      <strong className="text-gray-900">Tell the clinic: </strong>
                      {situation.tell}
                    </p>

                    <p className="leading-7">
                      <strong className="text-gray-900">Ask: </strong>
                      {situation.ask}
                    </p>

                    <p className="leading-7">
                      <strong className="text-gray-900">
                        {situation.title.startsWith("Situation 5")
                          ? "Remember: "
                          : "Bring: "}
                      </strong>
                      {situation.bring}
                    </p>
                  </div>
                </div>
              ))}
            </section>

            <section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-red-900">
                When It Is an Emergency, Not an Appointment
              </h2>

              <p className="leading-7 text-red-900">
                Go to the nearest emergency facility immediately if you have:
              </p>

              <ul className="list-disc space-y-2 pl-6 text-red-900">
                {emergencySigns.map((sign) => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>

              <p className="font-semibold leading-7 text-red-900">
                Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Common Booking Mistakes
              </h2>

              <div className="space-y-3">
                {bookingMistakes.map((mistake, index) => (
                  <div
                    key={mistake.title}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {index + 1}. {mistake.title}
                    </h3>
                    <p className="mt-2 leading-7">{mistake.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Questions to Ask While Booking
              </h2>

              <ul className="list-disc space-y-3 pl-6 leading-7">
                {appointmentQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4 rounded-2xl bg-gray-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Appointment Tracker
              </h2>

              <p className="leading-7">
                Keep one line per appointment on your phone or in a notebook.
              </p>

              <div className="space-y-3">
                {appointmentTracker.map((item) => (
                  <div
                    key={item}
                    className="min-h-10 border-b border-dashed border-gray-300 pb-2 text-gray-800"
                  >
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>

              <p className="font-medium leading-7 text-gray-900">
                After a few visits, this becomes a clear health history.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Happens at the Appointment
              </h2>

              <p className="leading-7">
                A first visit is a conversation first. You can expect:
              </p>

              <ol className="list-decimal space-y-3 pl-6 leading-7">
                {appointmentSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <p className="leading-7">
                You can ask for a pause or decline any step. You may bring a
                family member or friend, or choose to speak with the doctor
                alone. Your concerns are discussed respectfully, and your
                medical details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Before You Leave the Clinic
              </h2>

              <ul className="list-disc space-y-3 pl-6 leading-7">
                {beforeLeaving.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                If You Need to Reschedule
              </h2>

              <p className="leading-7">
                Inform the clinic as early as possible by phone or WhatsApp,
                and offer two or three alternative days. Do not skip a
                time-sensitive visit without telling your doctor. If your
                symptoms get worse while you wait, contact the clinic.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                About Dr. Priyanka Gynaec
              </h2>

              <p className="leading-7">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                centre offering gynaecology, laparoscopy, IVF and pregnancy
                care, along with paediatric support. It uses 3D laparoscopy,
                3D and 4D ultrasound, time-lapse embryo imaging and AI-powered
                semen analysis. Surgery is recommended only when it is truly
                the best option, and alternatives are always discussed first.
              </p>
            </section>

            <section className="space-y-4 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p className="leading-7">
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="space-y-3">
                <p>
                  <strong>Call for appointment:</strong>{" "}
                  <a
                    href="tel:+919079765578"
                    className="font-semibold underline"
                  >
                    +91 90797 65578
                  </a>
                </p>

                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="font-semibold underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </p>
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
                  className="rounded-lg border border-black px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-white"
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
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="font-semibold leading-7 text-gray-900">
                      Q{index + 1}. {faq.q}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-700">{faq.a}</p>
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
