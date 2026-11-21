import Link from "next/link";
import { Phone, Mail, Globe, MessageCircle, Copy } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "How do I book a gynaecologist appointment as a Sambhal patient?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on www.gynaecologistmoradabad.com.',
  },
  {
    q: "Is the clinic in Sambhal?",
    a: "No. It is located at A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
  },
  {
    q: "What should I write in my booking message?",
    a: "Your name, age, reason for the visit, whether it is a first or follow-up visit, preferred days and that you are travelling from Sambhal.",
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
    q: "Can I book a second-opinion appointment for surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
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

const bookingMessage = `Hello, I would like to book an appointment with Dr. Priyanka Pachauri.
Name: [your name]
Age: [your age]
Reason for visit: [for example, irregular periods / pregnancy check-up / fertility consultation / second opinion for surgery]
First visit or follow-up: [first visit / follow-up]
I am travelling from Sambhal.
Preferred days: [first choice, second choice]
Please let me know the available timings, anything I should prepare, and whether any tests or a scan can be done on the same day.
Thank you.`;

export default function GynaecologistAppointmentForSambhalPatients() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Gynaecologist Appointment for Sambhal Patients – Dr. Priyanka
              Pachauri
            </h1>

            <p>
              Booking a gynaecology appointment can feel awkward. You may not
              know what to say, which type of visit to ask for, or what to
              bring. This guide makes it simple for patients from Sambhal who
              want to consult <strong>Dr. Priyanka Pachauri</strong> at{" "}
              <strong>Dr. Priyanka Gynaec</strong>.
            </p>

            <p>
              To be clear, the clinic is located in{" "}
              <strong>Moradabad, not in Sambhal</strong>. Women from Sambhal and
              surrounding areas travel there for consultations. Its philosophy
              is <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="rounded-xl border border-gray-200 p-5">
              <h2 className="mb-3 text-xl font-bold text-gray-900">
                Clinic Address
              </h2>
              <p>
                A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh –
                244001
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Ways to Book
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Phone call:</strong>{" "}
                  <a href="tel:+919079765578" className="text-[#8F1738] underline">
                    +91 90797 65578
                  </a>
                </li>
                <li>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8F1738] underline"
                  >
                    +91 89796 70705
                  </a>
                </li>
                <li>
                  <strong>Website:</strong> The &quot;Book Appointment&quot;
                  option on{" "}
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8F1738] underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="text-[#8F1738] underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-4 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  A Ready-to-Send WhatsApp Message
                </h2>
                <p className="mt-2">
                  Copy this, fill in the brackets and send it. You do not need
                  to share intimate details.
                </p>
              </div>

              <div className="whitespace-pre-line rounded-xl border border-gray-200 bg-white p-5 text-sm leading-7 text-gray-800">
                {bookingMessage}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof navigator !== "undefined" && navigator.clipboard) {
                      navigator.clipboard.writeText(bookingMessage);
                    }
                  }}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#8F1738] px-5 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  <Copy className="h-4 w-4" />
                  Copy Message
                </button>

                <a
                  href={`https://wa.me/918979670705?text=${encodeURIComponent(
                    bookingMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#8F1738] px-5 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Send on WhatsApp
                </a>
              </div>

              <p className="text-sm text-gray-600">
                Save the clinic&apos;s reply, since it becomes your record of
                what was agreed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Which Type of Appointment Should You Ask For?
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>General gynaecology:</strong> Periods problems, PCOS,
                  infections, pelvic pain, contraception or menopause symptoms
                </li>
                <li>
                  <strong>Pregnancy or antenatal:</strong> Confirmation,
                  regular visits, ultrasound and delivery planning
                </li>
                <li>
                  <strong>High-risk pregnancy:</strong> Diabetes, high blood
                  pressure, thyroid disease, previous miscarriage, twins or
                  pregnancy after IVF
                </li>
                <li>
                  <strong>Fertility and IVF:</strong> For couples trying to
                  conceive, ideally with both partners attending
                </li>
                <li>
                  <strong>Laparoscopy or surgery consultation:</strong> Cysts,
                  fibroids, endometriosis, prolapse or a second opinion
                </li>
                <li>
                  <strong>Hysteroscopy consultation:</strong> Abnormal bleeding,
                  repeated miscarriage, suspected polyps or fertility concerns
                </li>
                <li>
                  <strong>Postnatal and paediatric:</strong> Recovery after
                  delivery, breastfeeding, newborn care and vaccinations
                </li>
              </ul>

              <p>
                If you are unsure, say so. The team can suggest the most
                suitable visit.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Questions to Ask While Booking
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  What are the current timings, and which time suits a first
                  visit?
                </li>
                <li>
                  Do I need to prepare, such as fasting, a full bladder for a
                  scan or a particular day of my cycle?
                </li>
                <li>Can tests or a scan be done on the same day?</li>
                <li>What should I bring?</li>
                <li>
                  What are the consultation fees and accepted payment methods?
                </li>
                <li>
                  What should I do if I am running late, or need to reschedule?
                </li>
              </ul>

              <p>
                Please confirm timings and fees directly with the clinic,
                because they can change.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Document Folder
              </h2>

              <p>
                Put these in one folder, in date order, and keep photos on your
                phone as a backup.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Previous prescriptions and discharge summaries</li>
                <li>Blood test reports</li>
                <li>Ultrasound reports and images</li>
                <li>Surgical records</li>
                <li>Antenatal card, if pregnant</li>
                <li>A list of current medicines and supplements</li>
                <li>Your partner&apos;s reports, for fertility consultations</li>
                <li>Identification</li>
                <li>
                  For a second opinion on surgery, the written advice you were
                  given
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Story on One Page
              </h2>

              <p>Write these down before the visit:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Date of your last period and usual cycle length</li>
                <li>When symptoms began and how they have changed</li>
                <li>What treatments you have already tried</li>
                <li>Past pregnancies, surgeries and allergies</li>
                <li>Your three most important questions</li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Day-of Timeline
              </h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  The evening before
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Check your folder and phone charge</li>
                  <li>Confirm the appointment time with the clinic</li>
                  <li>Follow any fasting or preparation instructions you were given</li>
                  <li>Arrange who will travel with you</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Morning of the visit
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Leave early enough to arrive without rushing</li>
                  <li>
                    Carry water and a light snack, unless you were asked to fast
                  </li>
                  <li>Wear comfortable clothing</li>
                  <li>
                    Carry cash and a card, and ask the clinic about payment
                    methods
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  At the clinic
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Tell the staff you have travelled from out of town</li>
                  <li>Give your reports to the doctor in date order</li>
                  <li>Use your one-page story to explain your concerns</li>
                  <li>Ask your questions, and write down the answers</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Before you leave
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Ask for the plan in simple words, and write it down</li>
                  <li>Confirm medicines, doses and duration</li>
                  <li>Ask which tests to repeat, and when</li>
                  <li>Ask when to return, and what might change that date</li>
                  <li>Ask how to contact the clinic with questions afterwards</li>
                  <li>Book your next appointment before leaving, if one is needed</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  On the way home
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Rest, hydrate and eat</li>
                  <li>Save the doctor&apos;s advice in your notes</li>
                  <li>Share the plan with family members who are helping you</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Visit Notes Template
              </h2>

              <p>Keep one entry per visit in a notebook or your phone.</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Date:</li>
                <li>Reason for visit:</li>
                <li>Main findings:</li>
                <li>Tests advised and dates:</li>
                <li>Medicines and doses:</li>
                <li>Next appointment:</li>
                <li>Warning signs to watch for:</li>
                <li>Questions to ask next time:</li>
              </ul>

              <p>
                Over several visits, this becomes a clear health history.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Happens at the Appointment
              </h2>

              <p>A first visit is a conversation first. You can expect:</p>

              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  A discussion of your symptoms, cycle history and medical
                  background
                </li>
                <li>
                  A gentle examination only if necessary, explained beforehand
                </li>
                <li>
                  Ultrasound or blood tests if required. The clinic uses a
                  Voluson E22 3D and 4D ultrasound machine
                </li>
                <li>
                  A clear explanation of findings and treatment options
                </li>
                <li>Time to ask questions without pressure</li>
              </ol>

              <p>
                You can ask for a pause or decline any step. Your concerns are
                discussed respectfully, and your medical details are kept
                confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Follow-Up Appointments
              </h2>

              <p>
                Many needs involve more than one visit, such as fertility
                monitoring, antenatal check-ups, post-surgery review or
                periodic reviews for conditions like PCOS. Ask for the likely
                schedule early, so you can plan work, travel and family
                support. Ask which checks may be possible closer to home, and
                share those reports with the clinic.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                If You Need to Reschedule
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Inform the clinic as early as possible by phone or WhatsApp
                </li>
                <li>Offer two or three alternative days</li>
                <li>
                  Do not skip a time-sensitive visit, such as a pregnancy scan,
                  fertility monitoring or post-surgery follow-up, without
                  telling your doctor
                </li>
                <li>If symptoms get worse while you wait, contact the clinic</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When Not to Wait for an Appointment
              </h2>

              <p>
                Go to the nearest emergency facility immediately if you have
                heavy bleeding that soaks a pad every hour, bleeding during
                pregnancy, sudden severe abdominal or pelvic pain, fainting,
                dizziness or breathlessness, reduced or absent baby movements,
                or leaking fluid or regular contractions before your due date.
                Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                About Dr. Priyanka Gynaec
              </h2>

              <p>
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                centre offering gynaecology, laparoscopy, IVF and pregnancy
                care, along with paediatric support. It uses 3D laparoscopy, 3D
                and 4D ultrasound, time-lapse embryo imaging and AI-powered
                semen analysis. Surgery is recommended only when it is truly
                the best option, and alternatives are always discussed first.
              </p>
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-5 text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p className="mb-5">
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    <strong>Call for appointment:</strong>{" "}
                    <a href="tel:+919079765578" className="font-medium underline">
                      +91 90797 65578
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline"
                    >
                      +91 89796 70705
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="font-medium underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
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
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {`Q${index + 1}. ${faq.q}`}
                    </h3>
                    <p className="mt-2 text-gray-700">{faq.a}</p>
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