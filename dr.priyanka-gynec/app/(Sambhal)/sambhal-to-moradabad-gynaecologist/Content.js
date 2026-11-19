import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Where is the clinic in Moradabad?",
    a: "A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.",
  },
  {
    q: "Do patients from Sambhal visit this clinic?",
    a: "Yes, women from Sambhal and nearby areas travel to Moradabad for consultations, particularly for fertility, pregnancy and laparoscopic care.",
  },
  {
    q: "Can my local doctor and the Moradabad clinic share my care?",
    a: "Many women do this. Ask your doctor which checks can be done locally, and carry all reports so both doctors have the full picture.",
  },
  {
    q: "Do I need to book before travelling?",
    a: "Yes, booking in advance is recommended. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
  },
  {
    q: "Can tests and a scan be done on the same day?",
    a: "This depends on what you need. Ask the clinic when you book.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Previous prescriptions, blood tests, ultrasounds, surgical records, a list of medicines, identification and your questions. If pregnant, bring your antenatal card.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "What should I do in an emergency?",
    a: "Go to the nearest emergency facility immediately. Do not delay care to travel to another city.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on www.gynaecologistmoradabad.com.',
  },
];

export default function SambhalToMoradabadGynaecologist() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Sambhal to Moradabad Gynaecologist – Dr. Priyanka Pachauri
            </h1>

            <p>
              Many women from Sambhal make the trip to Moradabad to consult a
              gynaecologist. They go for fertility care, a high-risk pregnancy,
              a second opinion before surgery or a doctor they feel comfortable
              with. Not every need requires a long trip, though. A sensible
              approach is <strong>shared care</strong>: you keep a trusted
              doctor near home for routine matters, and you consult a specialist
              in Moradabad for the parts that need it.
            </p>

            <p>
              This page explains how that can work with{" "}
              <strong>Dr. Priyanka Pachauri</strong> at{" "}
              <strong>Dr. Priyanka Gynaec</strong>, a women&apos;s health and
              fertility centre in Moradabad. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <p>
              <strong>Address:</strong> A2, near Old Roadways, Gandhi Nagar,
              Moradabad, Uttar Pradesh – 244001
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Shared Care?
              </h2>

              <p>
                Shared care means different parts of your health are handled
                in different places.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Near home:</strong> Routine checks, simple blood
                  tests, minor illnesses and emergencies
                </li>
                <li>
                  <strong>In Moradabad:</strong> Specialist consultation,
                  planning, advanced tests, procedures and key milestones
                </li>
              </ul>

              <p>
                It reduces unnecessary trips without giving up specialist
                input. Ask your doctor in Moradabad which checks can be done
                locally and which should not be.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When a Trip to Moradabad Makes Sense
              </h2>

              <p>Consider travelling when you want:</p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Fertility evaluation or IVF:</strong> Evaluation of
                  both partners, ovulation induction, IVF, time-lapse embryo
                  monitoring, and AI-powered semen analysis with DNA integrity
                  testing
                </li>
                <li>
                  <strong>High-risk pregnancy monitoring:</strong> Diabetes,
                  high blood pressure, thyroid disease, previous miscarriage,
                  twins or pregnancy after IVF
                </li>
                <li>
                  <strong>Keyhole surgery advice:</strong> Cysts, fibroids,
                  endometriosis or prolapse, where 3D laparoscopy may be an
                  option
                </li>
                <li>
                  <strong>A second opinion:</strong> Especially before
                  hysterectomy or other major surgery
                </li>
                <li>
                  <strong>Detailed pregnancy ultrasound:</strong> The clinic
                  uses a Voluson E22 3D and 4D machine
                </li>
                <li>
                  <strong>A single place for several services:</strong>{" "}
                  Gynaecology, pregnancy, fertility and paediatric care
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When a Local Doctor May Be Enough
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>A mild infection or minor symptoms</li>
                <li>
                  Routine blood pressure, weight or basic blood tests during a
                  low-risk pregnancy, if your specialist agrees
                </li>
                <li>
                  Vaccination and general care for the baby, depending on what
                  your doctor advises
                </li>
                <li>Urgent problems that cannot wait</li>
              </ul>

              <p className="font-semibold text-red-700">
                Never delay urgent care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Building Your Shared Care Plan
              </h2>

              <p>At your first visit in Moradabad, ask:</p>

              <ol className="list-decimal space-y-2 pl-6">
                <li>Which visits must happen at the clinic?</li>
                <li>
                  Which tests can be done closer to home, and at what time in
                  my cycle or pregnancy?
                </li>
                <li>How should I share reports from a local lab or doctor?</li>
                <li>
                  What readings should I record at home, such as blood pressure
                  or blood sugar?
                </li>
                <li>What symptoms mean I should contact you, and how?</li>
                <li>
                  What symptoms mean I should go to the nearest hospital
                  instead?
                </li>
              </ol>

              <p>
                Write the answers down and share them with your local doctor.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Keeping Two Doctors on the Same Page
              </h2>

              <p>
                When two doctors are involved, miscommunication is the main
                risk. To prevent it:
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Carry one master folder</strong> with all
                  prescriptions, test results, scans and discharge summaries
                </li>
                <li>
                  <strong>Tell each doctor about the other,</strong> and share
                  medicines and advice honestly
                </li>
                <li>
                  <strong>Do not change medicines</strong> on one doctor&apos;s
                  advice without telling the other
                </li>
                <li>
                  <strong>Keep a simple timeline</strong> of dates, symptoms,
                  treatments and test results
                </li>
                <li>
                  <strong>Take photos</strong> of every report and prescription
                  as a backup
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Before You Travel
              </h2>

              <p>
                <strong>Book first.</strong> Call{" "}
                <a
                  href="tel:+919079765578"
                  className="font-semibold text-[#8F1738] hover:underline"
                >
                  +91 90797 65578
                </a>{" "}
                or message on WhatsApp at{" "}
                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#8F1738] hover:underline"
                >
                  +91 89796 70705
                </a>
                . Share your name, the reason for your visit and your preferred
                day. Ask the clinic about timings, preparation and whether
                tests or a scan can be done on the same day.
              </p>

              <p>
                <strong>Gather your records:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Previous prescriptions and discharge summaries</li>
                <li>Blood test reports</li>
                <li>Ultrasound reports and images</li>
                <li>Surgical records</li>
                <li>Antenatal card, if pregnant</li>
                <li>A list of medicines and supplements</li>
                <li>Your partner&apos;s reports, for fertility consultations</li>
                <li>Identification</li>
              </ul>

              <p>
                <strong>Write your story.</strong> Note the date of your last
                period, when symptoms began, what you have already tried, past
                pregnancies and surgeries, allergies and your top questions.
              </p>

              <p>
                <strong>Plan support.</strong> Consider travelling with a
                family member or friend. You can still speak with the doctor
                privately.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">At the Clinic</h2>

              <p>A first visit is a conversation first. You can expect:</p>

              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  A discussion of your symptoms, cycle history and medical
                  background
                </li>
                <li>
                  A gentle examination only if necessary, explained beforehand
                </li>
                <li>Ultrasound or blood tests if required</li>
                <li>A clear explanation of findings and options</li>
                <li>Time to ask questions without pressure</li>
              </ol>

              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Before You Leave the Clinic
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Ask for the plan in simple words, and write it down</li>
                <li>Confirm medicines, doses and duration</li>
                <li>Ask which tests to repeat, and when</li>
                <li>Ask when to return, and what might change that date</li>
                <li>Ask how to contact the clinic with questions</li>
                <li>Book your next appointment before leaving, if one is needed</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Shared Care in Pregnancy
              </h2>

              <p>Pregnancy is where shared care needs the most planning.</p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Ask which scans and visits must be done at the clinic, and
                  which routine checks may be possible locally
                </li>
                <li>Carry your antenatal card and all reports every time</li>
                <li>
                  Learn the warning signs: bleeding, leaking fluid, severe
                  abdominal pain, reduced baby movements, severe headache,
                  blurred vision or early contractions
                </li>
                <li>
                  Identify the nearest hospital with emergency and delivery
                  facilities to your home
                </li>
                <li>
                  As your due date nears, discuss when to leave, where to go and
                  who will accompany you
                </li>
              </ul>

              <p>
                Normal delivery is prioritised wherever it is safe, and a
                caesarean is advised only when medically necessary. Where the
                delivery will take place is something to confirm directly with
                the clinic.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Shared Care in Fertility Treatment
              </h2>

              <p>
                Fertility treatment is time-sensitive. Ask for the monitoring
                schedule at the start, and find out which parts, if any, can be
                done closer to home. Plan leave from work and family support in
                advance. Both partners are encouraged to attend the first
                consultation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Shared Care Around Surgery
              </h2>

              <p>If you need surgery, ask about:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Pre-operative tests you can complete in advance</li>
                <li>
                  Where the surgery will take place (please confirm this
                  directly with the clinic)
                </li>
                <li>
                  Expected length of stay and whether you will need to stay in
                  Moradabad afterwards
                </li>
                <li>When it is safe to travel home, and how</li>
                <li>Follow-up visits and which checks can be done locally</li>
              </ul>

              <p>
                The clinic offers 3D laparoscopic cystectomy, myomectomy,
                hysterectomy, endometriosis surgery, sacrocolpopexy and
                sterilization, along with diagnostic hysteroscopy and
                hysteroscopic polypectomy. Surgery is recommended only when it
                is truly the best option, and alternatives are always discussed
                first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs: Do Not Wait
              </h2>

              <p>
                Go to the nearest emergency facility immediately if you have:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Heavy bleeding that soaks a pad every hour</li>
                <li>Bleeding during pregnancy</li>
                <li>Sudden severe abdominal or pelvic pain</li>
                <li>Fainting, dizziness or breathlessness</li>
                <li>Reduced or absent baby movements</li>
                <li>
                  Fever with foul-smelling discharge after delivery or surgery
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in laparoscopy,
                  fertility treatment and endometriosis care, with a
                  compassionate approach
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice based on what you
                  truly need
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
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
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Book Your Appointment
              </h2>

              <p className="mb-6">
                Contact Dr. Priyanka Gynaec to discuss your consultation and
                plan your visit from Sambhal to Moradabad.
              </p>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="font-semibold hover:underline"
                    >
                      +91 90797 65578
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                    >
                      +91 89796 70705
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="font-semibold hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
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
                  Explore Services
                </Link>
              </div>
            </section>

            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              {faqs.map((faq, index) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="leading-relaxed text-gray-700">{faq.a}</p>
                </div>
              ))}
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