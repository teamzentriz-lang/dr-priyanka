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
    q: "When should I worry about irregular periods?",
    a: "If cycles are consistently irregular, absent for three months or more, or accompanied by acne, weight changes, heavy bleeding or difficulty conceiving, see a gynaecologist.",
  },
  {
    q: "Can stress delay my period?",
    a: "Yes. Stress, sudden weight changes and intense exercise can disturb hormones and delay periods, though other causes should be ruled out.",
  },
  {
    q: "Is PCOS a common cause of irregular periods?",
    a: "Yes. PCOS is one of the most common causes, due to irregular ovulation. It is treatable.",
  },
  {
    q: "Which tests are done for irregular periods?",
    a: "Commonly a pregnancy test when relevant, an ultrasound and blood tests such as haemoglobin, thyroid and hormone levels. Your doctor chooses tests based on your symptoms.",
  },
  {
    q: "Should I take hormonal pills on my own to regulate periods?",
    a: "It is best to consult a doctor first. Hormonal medicines need proper evaluation, and self-medication can hide the real cause.",
  },
  {
    q: "Can irregular periods affect pregnancy?",
    a: "They often mean irregular ovulation, which can make conceiving harder. Many women still conceive with the right treatment.",
  },
  {
    q: "Can follow-up checks be done in Sambhal?",
    a: "Some routine tests may be possible locally. Ask your doctor which ones, and share the reports with the clinic.",
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

export default function IrregularPeriodsDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Irregular Periods Doctor near Sambhal – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              &quot;Irregular&quot; can mean many things. Your period may come
              too soon, too late, not at all, too heavy or in small spotting
              episodes. Each pattern points toward different causes, and
              describing yours clearly helps a doctor reach the answer faster.
            </p>

            <p>
              If you live in Sambhal, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in{" "}
              <strong>Moradabad, not in Sambhal</strong>, and women from Sambhal
              and surrounding areas travel there for consultations. Its
              philosophy is <strong>&quot;Her Health First.&quot;</strong> You
              are listened to, informed and never judged.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                First, Know What Is Typical
              </h2>
              <p>
                Cycles are counted from the first day of one period to the
                first day of the next. A typical cycle is about 21 to 35 days,
                with bleeding for around 3 to 7 days. Some variation is normal,
                especially in the first couple of years after a girl&apos;s
                first period and in the years before menopause.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Which Pattern Is Yours?
              </h2>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pattern 1: Cycles shorter than 21 days
                  </h3>
                  <p>Periods come very often, sometimes twice in a month.</p>
                  <p>
                    <strong>May suggest:</strong> Hormonal imbalance, thyroid
                    problems, stress, perimenopause, polyps or fibroids.
                  </p>
                  <p>
                    <strong>Worth noting:</strong> Is the flow also heavy? Are
                    you tired or pale?
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pattern 2: Cycles longer than 35 days
                  </h3>
                  <p>Gaps of 6 weeks, 2 months or more.</p>
                  <p>
                    <strong>May suggest:</strong> PCOS (a common cause), thyroid
                    disorders, raised prolactin, stress, weight change or
                    intense exercise.
                  </p>
                  <p>
                    <strong>Worth noting:</strong> Do you also have acne,
                    excess hair or weight gain?
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pattern 3: Missed periods
                  </h3>
                  <p>No period for three months or more, and you are not pregnant.</p>
                  <p>
                    <strong>May suggest:</strong> PCOS, thyroid problems,
                    hormonal imbalance, significant weight change, stress,
                    breastfeeding or approaching menopause.
                  </p>
                  <p>
                    <strong>Worth noting:</strong> Take a pregnancy test first.
                    Seek a consultation if it is negative.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pattern 4: Heavy or prolonged bleeding
                  </h3>
                  <p>
                    Soaking a pad every hour or two, clots, or bleeding beyond
                    seven days.
                  </p>
                  <p>
                    <strong>May suggest:</strong> Fibroids, polyps, adenomyosis,
                    hormonal imbalance or other causes.
                  </p>
                  <p>
                    <strong>Worth noting:</strong> Heavy bleeding can cause
                    anaemia. Tiredness, dizziness and breathlessness are
                    warning signs.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pattern 5: Very light or scanty periods
                  </h3>
                  <p>Short, light bleeding.</p>
                  <p>
                    <strong>May suggest:</strong> Hormonal factors, thyroid
                    changes, stress, weight change, contraceptive effects or,
                    less often, scarring inside the uterus.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pattern 6: Spotting between periods
                  </h3>
                  <p>Bleeding at unexpected times, or after intercourse.</p>
                  <p>
                    <strong>May suggest:</strong> Hormonal changes, polyps,
                    infections, or issues with the cervix or uterus.
                  </p>
                  <p>
                    <strong>Worth noting:</strong> This always deserves
                    evaluation, particularly if it repeats.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pattern 7: Bleeding after menopause
                  </h3>
                  <p>Any bleeding after periods have stopped for good.</p>
                  <p>
                    <strong>May suggest:</strong> Several causes, some needing
                    prompt attention. Never ignore it.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Quick Self-Check Before You Visit
              </h2>
              <p>Answer these and write them down:</p>
              <ol className="list-decimal space-y-2 pl-6">
                <li>When did my last period start?</li>
                <li>How many days between my last three periods?</li>
                <li>How heavy is the flow, and how many pads a day?</li>
                <li>Is there pain, and how severe?</li>
                <li>Have I gained or lost weight recently?</li>
                <li>
                  Am I under unusual stress, or exercising intensely?
                </li>
                <li>Could I be pregnant?</li>
                <li>Which medicines or contraceptives am I taking?</li>
                <li>Do I have acne, excess hair or hair thinning?</li>
              </ol>
              <p>
                Bring these notes. They are as useful as any test.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Irregular Periods Are Evaluated
              </h2>
              <p>
                A first visit begins with a conversation about your cycle,
                symptoms, health and family history. Depending on your
                situation, evaluation may include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>A pregnancy test, when relevant</li>
                <li>
                  A gentle examination, only if needed and explained first
                </li>
                <li>
                  Ultrasound of the uterus and ovaries, using a Voluson E22
                  3D/4D ultrasound machine for detailed imaging
                </li>
                <li>
                  Blood tests, such as haemoglobin, thyroid function, hormones
                  and blood sugar
                </li>
                <li>
                  Hysteroscopy, when a closer look inside the uterus is needed
                </li>
              </ul>
              <p>Each test is explained in advance.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Treatment Depends on the Cause
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>PCOS:</strong> Lifestyle changes, medicines, and
                  ovulation induction if you want to conceive
                </li>
                <li>
                  <strong>Thyroid disease:</strong> Thyroid treatment with
                  periodic checks
                </li>
                <li>
                  <strong>Lifestyle-related causes:</strong> Guidance on
                  nutrition, weight, sleep and stress
                </li>
                <li>
                  <strong>Fibroids or polyps:</strong> Medicines, hysteroscopic
                  polypectomy or laparoscopic myomectomy when needed
                </li>
                <li>
                  <strong>Endometriosis:</strong> Medicines or 3D laparoscopic
                  surgery to relieve pain
                </li>
                <li>
                  <strong>Anaemia from heavy bleeding:</strong> Iron and other
                  treatment alongside the main treatment
                </li>
              </ul>
              <p>
                Please avoid taking hormonal pills on your own to
                &quot;fix&quot; periods. They can hide the real problem.
                Surgery is recommended only when it is truly the best option,
                and alternatives are discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                If You Want to Conceive
              </h2>
              <p>
                Irregular cycles often mean irregular ovulation. The clinic
                offers ovulation tracking, ovulation induction, IVF, time-lapse
                embryo monitoring, and AI-powered semen analysis with DNA
                integrity testing. Generally, seek help after 12 months of
                trying if you are under 35, and after 6 months if you are 35 or
                older. Seek help sooner if your periods are irregular.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Everyday Habits That Support Regular Cycles
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Eat balanced meals with vegetables, fruit, pulses, grains
                  and adequate protein
                </li>
                <li>Include iron-rich foods if your periods are heavy</li>
                <li>
                  Stay active with walking, yoga or exercise you enjoy
                </li>
                <li>
                  Aim for a healthy weight through gradual change, not crash
                  diets
                </li>
                <li>Sleep well and manage stress</li>
                <li>Avoid smoking</li>
                <li>Avoid self-medication</li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Follow-Up From Sambhal
              </h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Ask your doctor:
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>How often will I need to come to the clinic?</li>
                  <li>
                    Which blood tests can be repeated closer to home, if the
                    doctor agrees?
                  </li>
                  <li>
                    When should I repeat tests, and which results should I
                    share?
                  </li>
                  <li>What changes should make me contact you sooner?</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Make visits easier:
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Book in advance and confirm timings</li>
                  <li>
                    Bring your cycle record, previous reports, ultrasounds and
                    a list of medicines
                  </li>
                  <li>
                    Ask whether tests and consultation can be planned on the
                    same day
                  </li>
                  <li>Travel with a family member where helpful</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When Not to Wait
              </h2>
              <p>
                Go to the nearest emergency facility immediately for very
                heavy bleeding with dizziness or fainting, or sudden severe
                abdominal pain. Do not delay care to travel to another city.
                Book a prompt consultation for bleeding after menopause,
                bleeding between periods or after intercourse, or three or
                more missed periods.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>A listening-first, judgement-free consultation</strong>
                </li>
                <li>
                  <strong>Clear explanations</strong> in simple language
                </li>
                <li>
                  <strong>Modern diagnostic imaging</strong> and 3D laparoscopy
                  when needed
                </li>
                <li>
                  <strong>Honest advice,</strong> with surgery suggested only
                  when necessary
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services
                </li>
              </ul>
              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
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

              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="font-semibold underline"
                    >
                      +91 90797 65578
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone size={20} />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      +91 89796 70705
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Mail size={20} />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="font-semibold underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Globe size={20} />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
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
                  Explore Services
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
                    <h3 className="mb-2 font-semibold text-gray-900">
                      {`Q${index + 1}. ${faq.q}`}
                    </h3>
                    <p>{faq.a}</p>
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