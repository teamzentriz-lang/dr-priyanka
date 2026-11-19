
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
    q: "Who is a top lady doctor for patients from Sambhal?",
    a: '"Top" depends on your needs. Dr. Priyanka Pachauri offers PCOS care, pregnancy care, fertility and IVF, and 3D laparoscopic surgery for women seeking specialised care in a nearby city.',
  },
  {
    q: "Is there a lady doctor for pregnancy care?",
    a: "Yes. Dr. Priyanka Pachauri provides antenatal care, normal delivery support, high-risk pregnancy management and postnatal care.",
  },
  {
    q: "Can a college student or teenager consult for painful periods?",
    a: "Yes. Girls and women of any age can consult for painful, heavy or irregular periods. A parent can stay with her, or she can speak privately.",
  },
  {
    q: "Can a newly married woman consult before planning a baby?",
    a: "Yes. A preconception consultation helps with contraception, cycle tracking, health checks and starting supplements.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports and scans, and the doctor will review them and explain your options.",
  },
  {
    q: "Is my consultation private?",
    a: "Yes. Concerns are discussed respectfully, and your medical details are kept confidential.",
  },
  {
    q: "Do I need an appointment before travelling?",
    a: "Yes, booking in advance is recommended. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
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

export default function TopLadyDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Top Lady Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              Many women feel more comfortable discussing periods, pregnancy,
              intimacy and fertility with a female doctor. If you are looking
              for a top lady doctor near Sambhal,{" "}
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring <strong>Moradabad</strong> is an option to consider.
            </p>

            <p>
              The clinic is located in <strong>Moradabad</strong>, not in
              Sambhal. Women from Sambhal and surrounding areas travel there
              for consultations. Its philosophy is{" "}
              <strong>&ldquo;Her Health First.&rdquo;</strong> You are
              listened to, informed and never rushed.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What &ldquo;Top&rdquo; Really Means
              </h2>
              <p>
                A top lady doctor is not simply the busiest or the most
                expensive. Look for someone who:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Listens fully before advising</li>
                <li>Explains diagnoses and options in simple language</li>
                <li>Recommends tests and surgery only when needed</li>
                <li>Respects your privacy and comfort</li>
                <li>Has suitable technology and facilities</li>
                <li>Follows you over time, not just once</li>
              </ul>
              <p>Real situations show how these qualities matter.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Situation 1: A College Student With Painful Periods
              </h2>
              <p className="italic text-gray-600">
                Her periods are so painful that she misses classes, and she
                has been told it is &ldquo;normal.&rdquo;
              </p>
              <p>
                Severe cramps are common, but pain that disrupts daily life
                deserves a check. Causes can include hormonal changes, PCOS
                or endometriosis. A lady doctor can take a gentle history,
                arrange an ultrasound if needed and suggest treatment. A
                parent can stay in the room, or she can speak privately. The
                aim is relief and reassurance, not embarrassment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Situation 2: A Newly Married Woman Planning Ahead
              </h2>
              <p className="italic text-gray-600">
                She wants to understand contraception, her cycle and when to
                start a family.
              </p>
              <p>
                A preconception visit is useful even before a pregnancy test.
                The doctor can review her cycle, check for PCOS or thyroid
                problems, advise on folic acid and discuss contraception if
                she wishes to wait. If a baby is the goal, the clinic can
                guide her through tracking ovulation and, if needed, fertility
                evaluation for both partners.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Situation 3: A Woman Trying for a Baby for Over a Year
              </h2>
              <p className="italic text-gray-600">
                She and her husband feel pressure from family, and she blames
                herself.
              </p>
              <p>
                Difficulty conceiving is rarely one person&apos;s fault.
                Evaluation of both partners is the best first step. The clinic
                offers ovulation tracking and induction, IVF, time-lapse
                embryo monitoring, and AI-powered semen analysis with DNA
                integrity testing. PCOS is one of the most common and most
                treatable causes, and many women conceive with lifestyle
                changes and ovulation induction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Situation 4: A First-Time Mother-to-Be
              </h2>
              <p className="italic text-gray-600">
                She has just seen a positive test and does not know where to
                begin.
              </p>
              <p>
                She should book an antenatal visit within the first 6 to 8
                weeks. Care includes trimester-wise check-ups, ultrasound on
                a Voluson E22 3D and 4D machine, blood tests, nutrition guidance
                and labour preparation. Normal delivery is prioritised
                wherever it is safe, and a caesarean is advised only when
                medically necessary.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Situation 5: A Mother of Two With Heavy Bleeding
              </h2>
              <p className="italic text-gray-600">
                She has put up with heavy periods for years and now feels
                constantly tired.
              </p>
              <p>
                Heavy bleeding can lead to anaemia and has treatable causes
                such as fibroids, polyps and hormonal imbalance. Evaluation
                may include blood tests, ultrasound and, if needed,
                hysteroscopy. Treatment ranges from medicines to hysteroscopic
                polypectomy or laparoscopic myomectomy. Surgery is recommended
                only when it is truly the best option, and alternatives are
                discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Situation 6: A Woman Told She Needs Surgery
              </h2>
              <p className="italic text-gray-600">
                She has been advised a hysterectomy and wants another view.
              </p>
              <p>
                A second opinion is reasonable. She should bring all scans,
                blood tests and the written advice she was given. The doctor
                can review them, explain whether keyhole or uterus-preserving
                options may be suitable, and answer questions about recovery
                and hormones. The clinic offers 3D laparoscopic cystectomy,
                myomectomy, hysterectomy, endometriosis surgery, sacrocolpopexy
                and sterilization.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Situation 7: A New Mother Feeling Overwhelmed
              </h2>
              <p className="italic text-gray-600">
                She is exhausted, struggling with feeding and unsure about her
                recovery.
              </p>
              <p>
                Postnatal care covers wound healing, bleeding, breastfeeding,
                contraception and emotional wellbeing. Persistent sadness,
                anxiety or hopelessness after birth is treatable and should be
                mentioned early. The clinic also offers paediatric
                consultations, newborn care and vaccinations, so mother and
                baby can be looked after by one team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Situation 8: A Woman in Her Fifties Facing Menopause
              </h2>
              <p className="italic text-gray-600">
                She has hot flushes, poor sleep and occasional spotting.
              </p>
              <p>
                Menopausal symptoms can be eased with advice and treatment.
                Any bleeding after menopause should always be examined
                promptly. She may also want to ask about pelvic floor health,
                such as urine leakage or a feeling of heaviness, which is
                common and treatable.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Care That Fits Into One Visit
              </h2>
              <p>
                Because the clinic offers gynaecology, fertility, pregnancy,
                surgery and paediatric services together, several needs can
                often be reviewed in one place. A woman can discuss her own
                health and ask about her baby&apos;s vaccinations on the same
                trip, where appropriate. Ask the clinic what can be combined
                when you book.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Privacy and Comfort
              </h2>
              <p>
                At Dr. Priyanka Gynaec, your concerns are discussed
                respectfully, and your medical details are kept confidential.
                During examinations:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>You are told what will be done and why</li>
                <li>Examination happens only when it is necessary</li>
                <li>You can ask for a pause or say no to any step</li>
                <li>
                  You may bring a family member or friend, or choose to speak
                  with the doctor alone
                </li>
              </ul>
              <p>No question is too small or too embarrassing.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for Your Visit From Sambhal
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Book in advance by phone or WhatsApp, and confirm current
                  timings
                </li>
                <li>
                  Bring previous prescriptions, blood tests, ultrasounds and
                  surgical records
                </li>
                <li>
                  Note the date of your last period, your symptoms and your
                  questions
                </li>
                <li>List your medicines and supplements</li>
                <li>Consider travelling with a family member or friend</li>
                <li>If pregnant, carry your antenatal card</li>
              </ul>
              <p>
                A first visit is a conversation first. You can expect a
                discussion of your symptoms and history, a gentle examination
                only if needed, tests if required, a clear explanation of
                options and time to ask questions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Follow-Up From a Distance
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ask how often you will need to return</li>
                <li>
                  Ask which routine checks may be possible closer to home, if
                  the doctor agrees
                </li>
                <li>
                  Ask whether tests and consultation can be planned on the
                  same day
                </li>
                <li>
                  Keep reports in one folder, with photos on your phone as a
                  backup
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                When Not to Wait
              </h2>
              <p>
                Go to the nearest emergency facility immediately if you have
                very heavy bleeding, sudden severe pain, bleeding during
                pregnancy, fainting, reduced baby movements, leaking fluid or
                regular contractions before your due date. Do not delay care
                to travel to another city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and endometriosis care,
                  with a compassionate approach
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
                <li>
                  <strong>Trust earned over time:</strong> A reputation built
                  on families recommending the clinic to one another
                </li>
              </ul>
            </section>

            <section className="space-y-3">
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
                Contact Dr. Priyanka Gynaec
              </h2>
              <p className="mb-6">
                For appointments and information about women&apos;s healthcare
                services, contact the clinic directly.
              </p>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="underline underline-offset-4"
                    >
                      +91 90797 65578
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      +91 89796 70705
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="underline underline-offset-4"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
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
                  className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-[#8F1738] hover:text-white"
                >
                  Our Services
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
                  className="border-b border-gray-200 pb-5"
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
