import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Sambhal?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Sambhal and nearby areas travel there for consultations.",
  },
  {
    q: "Are fibroids cancerous?",
    a: "Fibroids are almost always non-cancerous. Your doctor will still evaluate any rapidly growing or unusual fibroid carefully.",
  },
  {
    q: "Do all fibroids need surgery?",
    a: "No. Small fibroids without symptoms may only need monitoring. Treatment is advised when they cause problems or affect fertility.",
  },
  {
    q: "Can fibroids be removed without removing the uterus?",
    a: "Yes. Myomectomy removes fibroids while preserving the uterus. It can be done laparoscopically or hysteroscopically in suitable cases.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "Can fibroids come back after surgery?",
    a: "New fibroids can develop in some women. Regular follow-up helps detect them early.",
  },
  {
    q: "Can I get pregnant after fibroid removal?",
    a: "Many women conceive after myomectomy. Your doctor will advise on the right timing and the safest delivery plan.",
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

const treatmentGoals = [
  {
    title: 'Goal 1: "I want to keep my uterus."',
    points: [
      <>
        <strong>Laparoscopic myomectomy</strong> removes fibroids through
        keyhole incisions while preserving the uterus
      </>,
      <>
        <strong>Hysteroscopic removal</strong> suits fibroids or polyps inside
        the uterine cavity, with no cuts
      </>,
      <>
        <strong>Medicines</strong> may control symptoms, though they may not
        remove fibroids permanently
      </>,
    ],
  },
  {
    title: 'Goal 2: "I want to have a baby."',
    points: [
      "Tell your doctor at the very first visit",
      "Fibroids that distort the cavity may affect implantation or raise the chance of miscarriage, so treating them can sometimes help",
      "Many women with fibroids conceive and deliver normally, so not every fibroid needs removal first",
      "The clinic also offers fertility and IVF services, so fibroid treatment and fertility planning can be coordinated",
    ],
  },
  {
    title: 'Goal 3: "I want the heavy bleeding to stop."',
    points: [
      "Check haemoglobin and treat anaemia",
      "Medicines can reduce bleeding in some women",
      "Hysteroscopic treatment may help when the cause is inside the cavity",
      "Myomectomy or other surgery is considered when medicines are not enough",
    ],
  },
  {
    title: 'Goal 4: "My family is complete, and I want a lasting solution."',
    points: [
      "Hysterectomy may be considered, usually when other options are unsuitable or have not worked",
      "This is discussed carefully, with alternatives explained first",
    ],
  },
  {
    title: 'Goal 5: "My fibroid is small and I feel fine."',
    points: [
      "Observation with regular check-ups is often reasonable",
      "Treatment is advised if symptoms develop, if the fibroid grows quickly or if it affects fertility",
    ],
  },
];

export default function FibroidSurgeryDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Fibroid Surgery Doctor near Sambhal – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                Two women can both have fibroids and need completely different
                treatment. One may want a baby soon. Another may have finished
                her family and simply wants the heavy bleeding to stop. The
                right plan depends on your goals as much as on the scan.
              </p>

              <p>
                If you live in Sambhal, <strong>Dr. Priyanka Pachauri</strong>{" "}
                of Dr. Priyanka Gynaec in neighbouring{" "}
                <strong>Moradabad</strong> is an option to consider. The clinic
                is located in <strong>Moradabad</strong>, not in Sambhal, and
                women from Sambhal and surrounding areas travel there for
                consultations. Its philosophy is <strong>&quot;Her Health First.&quot;</strong>{" "}
                Your symptoms, plans and preferences shape every decision.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Are Fibroids?
              </h2>

              <p>
                Fibroids, also called myomas, are non-cancerous growths in or
                on the wall of the uterus. They can be tiny or very large, and
                a woman may have one or several. Location matters: subserosal
                fibroids grow on the outer surface, intramural ones within the
                muscular wall, submucosal ones project into the uterine cavity,
                and pedunculated ones hang on a stalk.
              </p>

              <p>
                Many fibroids cause no symptoms. When they do, signs include
                heavy or prolonged periods, clots, anaemia, pelvic pressure or
                pain, frequent urination, constipation, pain during
                intercourse and, in some women, difficulty conceiving.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Which Treatment Fits Which Goal?
              </h2>

              <p>Start with what matters most to you.</p>

              {treatmentGoals.map((goal) => (
                <div
                  key={goal.title}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {goal.title}
                  </h3>

                  <ul className="mt-3 list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                    {goal.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Fibroids Are Assessed
              </h2>

              <p>
                Assessment may include a discussion of your symptoms and
                periods, an examination, blood tests for haemoglobin and iron,
                and ultrasound. The clinic uses a Voluson E22 3D and 4D
                ultrasound machine for detailed imaging of the number, size
                and location of fibroids. Hysteroscopy may be used to look
                inside the cavity. Further imaging such as MRI may be needed
                in complex cases.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Laparoscopic Myomectomy at Dr. Priyanka Gynaec
              </h2>

              <p>
                Laparoscopic myomectomy is uterus-preserving 3D keyhole
                surgery. A camera and fine instruments are passed through a
                few small incisions. The surgeon removes the fibroids and
                carefully repairs the uterine wall.
              </p>

              <p>When suitable, benefits include:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  Preservation of the uterus and, for many women, fertility
                </li>
                <li>Smaller scars</li>
                <li>Less pain after surgery</li>
                <li>Reduced blood loss compared with open surgery</li>
                <li>A shorter hospital stay</li>
                <li>Faster return to daily activities</li>
              </ul>

              <p>
                Not every fibroid is suited to laparoscopy. The number, size
                and position of the fibroids, your age and previous surgeries
                influence the decision, and open surgery may sometimes be
                safer. Your surgeon explains the reasons clearly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Fibroids and Anaemia: Do Not Overlook It
              </h2>

              <p>
                Long-term heavy bleeding can quietly drain iron. Signs include
                tiredness, pale skin, hair fall, dizziness, breathlessness and
                palpitations. A blood test confirms it. Treating anaemia
                before surgery makes the operation and recovery safer, so
                your doctor may advise iron treatment first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Fibroid Surgery and Future Pregnancy
              </h2>

              <p>After myomectomy, the uterus needs time to heal. Your doctor will advise:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>How long to wait before trying to conceive</li>
                <li>
                  Whether a normal delivery is suitable or a planned caesarean
                  is safer, which depends on the type and depth of the surgery
                </li>
                <li>How to monitor the pregnancy more closely</li>
              </ul>

              <p>
                Plan these discussions before surgery if pregnancy is your
                goal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Sambhal
              </h2>

              <p>
                If surgery has been advised elsewhere, a second opinion is
                reasonable. Bring:
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>Ultrasound reports, and images if you have them</li>
                <li>Blood tests, previous prescriptions and discharge summaries</li>
                <li>The written surgical advice you were given</li>
                <li>A list of treatments you have already tried</li>
              </ul>

              <h3 className="font-bold text-gray-900">Questions to ask:</h3>

              <ol className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-[#8F1738]">
                <li>How many fibroids do I have, how big are they and where?</li>
                <li>Can my uterus be preserved?</li>
                <li>Is keyhole surgery suitable, or is open surgery safer?</li>
                <li>How will this affect my fertility?</li>
                <li>What happens if I wait or use medicines instead?</li>
                <li>What is recovery like?</li>
              </ol>

              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Surgery From Sambhal
              </h2>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  Ask which pre-operative tests can be done in advance, or
                  closer to home
                </li>
                <li>Correct anaemia before surgery, if present</li>
                <li>Share your medical history, allergies and medicines</li>
                <li>Follow fasting instructions exactly</li>
                <li>
                  Ask where the surgery will take place. Please confirm this
                  directly with the clinic.
                </li>
                <li>Arrange a family member to accompany you</li>
                <li>
                  Ask whether you will need to stay in Moradabad for a few
                  days afterwards
                </li>
                <li>Arrange help at home for the first week or two</li>
                <li>Ask when it is safe to travel home, and how</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>Gentle walking soon after surgery, as advised</li>
                <li>Light, balanced meals with plenty of fluids and fibre</li>
                <li>Medicines on time</li>
                <li>Clean, dry wounds</li>
                <li>
                  No heavy lifting or strenuous exercise until your doctor
                  approves
                </li>
                <li>Follow-up visits</li>
              </ul>

              <p>Ask which follow-up checks may be possible closer to home.</p>
            </section>

            <section className="space-y-4 rounded-xl border border-red-200 bg-red-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs After Surgery
              </h2>

              <p>
                Contact your doctor promptly if you notice fever, heavy
                bleeding, worsening pain, wound redness or discharge, vomiting
                that does not settle, difficulty passing urine or calf pain or
                swelling. If you cannot reach the clinic quickly, go to the
                nearest emergency facility. Do not delay care to travel to
                another city.
              </p>
            </section>

            <section className="space-y-4 rounded-xl border border-red-200 bg-red-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Seek Urgent Care Before Surgery If You Have
              </h2>

              <ul className="list-disc space-y-2 pl-6 marker:text-red-600">
                <li>Very heavy bleeding that soaks a pad within an hour</li>
                <li>Dizziness or fainting</li>
                <li>Sudden severe pelvic pain</li>
                <li>Inability to pass urine</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Honest guidance:</strong> Surgery advised only when
                  needed, with alternatives discussed first
                </li>
                <li>
                  <strong>Focus on preserving the uterus and fertility</strong>{" "}
                  wherever possible
                </li>
                <li>
                  <strong>3D laparoscopic expertise</strong> and detailed
                  ultrasound assessment
                </li>
                <li>
                  <strong>Hysteroscopy services</strong> for fibroids and
                  polyps inside the cavity
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
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
              <h2 className="mb-5 text-2xl font-bold">
                Contact Dr. Priyanka Gynaec
              </h2>

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

                <p className="pt-2">
                  <strong>Address:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad, Uttar Pradesh – 244001
                </p>
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
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#8F1738] hover:text-white"
                >
                  View Services
                </Link>
              </div>
            </section>

            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Frequently Asked Questions (FAQs)
              </h2>

              {faqs.map((faq, index) => (
                <div key={faq.q} className="border-b border-gray-200 pb-5">
                  <h3 className="font-bold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>

                  <p className="mt-2">{faq.a}</p>
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