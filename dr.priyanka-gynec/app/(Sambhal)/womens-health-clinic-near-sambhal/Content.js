
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
    q: "What kind of clinic is it?",
    a: "It is a women's health and fertility centre offering gynaecology, pregnancy care, fertility and IVF, laparoscopic surgery, hysteroscopy and paediatric care.",
  },
  {
    q: "How often should I have a gynaecological check-up?",
    a: "Many women benefit from a routine check-up about once a year, though your doctor will advise a schedule based on your age and health. Visit sooner if you have symptoms.",
  },
  {
    q: "Can unmarried women or teenagers visit?",
    a: "Yes. Women of any age or marital status can consult a gynaecologist for periods, hormonal concerns, infections or preventive care.",
  },
  {
    q: "Does the clinic offer IVF and pregnancy care?",
    a: "Yes. It offers fertility and IVF treatment, antenatal care, normal delivery support, high-risk pregnancy management and postnatal care.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports and scans, and the doctor will review them and explain your options.",
  },
  {
    q: "Can some follow-up checks be done closer to home?",
    a: "Some routine tests may be possible locally. Ask your doctor which ones, and share the reports with the clinic.",
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
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on www.gynaecologistmoradabad.com.",
  },
];

export default function WomensHealthClinicNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Women&apos;s Health Clinic near Sambhal – Dr. Priyanka Gynaec,
              Moradabad
            </h1>

            <p>
              Most women look for a clinic only when something goes wrong. A
              good women&apos;s health clinic does more. It helps you stay well
              through the year, plan pregnancies, and catch small problems
              early.
            </p>

            <p>
              If you live in Sambhal, <strong>Dr. Priyanka Gynaec</strong>, led
              by <strong>Dr. Priyanka Pachauri</strong> in neighbouring{" "}
              <strong>Moradabad</strong>, is an option to consider. The clinic
              is located in <strong>Moradabad</strong>, not in Sambhal, and
              women from Sambhal and surrounding areas travel there for care.
              It is a women&apos;s health and fertility centre offering
              gynaecology, laparoscopy, IVF and pregnancy care. Its philosophy
              is <strong>&ldquo;Her Health First.&rdquo;</strong>
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Simple Yearly Women&apos;s Health Calendar
              </h2>
              <p>
                Your doctor will tailor this to your age and history. Use it
                as a prompt for conversation, not a rulebook.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Start of the year: review
                  </h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>Book a routine check-up, even if you feel well</li>
                    <li>Note your cycle pattern from the past year</li>
                    <li>Review medicines and supplements</li>
                    <li>Update your reports folder</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Spring: cycle and hormone check
                  </h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>Discuss irregular, heavy or painful periods</li>
                    <li>
                      Ask about thyroid, haemoglobin and blood sugar tests if
                      advised
                    </li>
                    <li>
                      Ask about PCOS signs such as acne, excess hair or weight
                      change
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Summer: infection and hygiene check
                  </h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>Raise any discharge, itching, burning or odour</li>
                    <li>Ask about safe hygiene practices and contraception</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Monsoon: pregnancy planning
                  </h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>If you plan a baby, schedule a preconception visit</li>
                    <li>Start folic acid as advised</li>
                    <li>
                      If trying for over 12 months (6 months if 35 or older),
                      ask for a fertility evaluation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Autumn: screening and prevention
                  </h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>Ask whether screening such as a Pap smear is due</li>
                    <li>Discuss breast awareness and when to seek a check</li>
                    <li>Review contraception</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Year end: planning ahead
                  </h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>Note symptoms that returned or worsened</li>
                    <li>Book follow-ups before the new year</li>
                    <li>Store all reports safely</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Services Mapped to Life Events
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    First periods or teenage concerns
                  </h3>
                  <p>
                    Guidance on painful, heavy or irregular cycles, acne and
                    hormonal concerns, in a gentle setting.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Marriage and family planning
                  </h3>
                  <p>
                    Contraception advice, cycle tracking and preconception
                    check-ups.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Trying to conceive
                  </h3>
                  <p>
                    Evaluation of both partners, ovulation tracking and
                    induction, IVF, time-lapse embryo monitoring, and
                    AI-powered semen analysis with DNA integrity testing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pregnancy
                  </h3>
                  <p>
                    Trimester-wise check-ups, ultrasound on a Voluson E22 3D
                    and 4D machine, blood tests, screening for gestational
                    diabetes and thyroid problems and labour preparation.
                    Normal delivery is prioritised wherever it is safe.
                    High-risk pregnancies receive closer monitoring.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    After delivery
                  </h3>
                  <p>
                    Recovery guidance, breastfeeding support, contraception
                    counselling, paediatric consultations, vaccinations and
                    newborn care.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Mid-life health
                  </h3>
                  <p>
                    Heavy bleeding, fibroids, cysts, endometriosis and
                    prolapse, with 3D laparoscopic options such as cystectomy,
                    myomectomy, hysterectomy, endometriosis surgery and
                    sacrocolpopexy. Hysteroscopy and polypectomy are available
                    for problems inside the uterus.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Menopause
                  </h3>
                  <p>
                    Hot flushes, sleep trouble, pelvic floor concerns and
                    evaluation of any bleeding after menopause.
                  </p>
                </div>
              </div>

              <p>
                Surgery is recommended only when it is truly the best option,
                and alternatives are always discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Checklist for Judging Any Women&apos;s Clinic
              </h2>
              <p>Use these questions for any clinic you consider.</p>

              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Listening:</strong> Do I get enough time to explain
                  my concerns?
                </li>
                <li>
                  <strong>Clarity:</strong> Are diagnoses and options explained
                  in simple words?
                </li>
                <li>
                  <strong>Honesty:</strong> Are tests, surgery and caesarean
                  recommended only when needed?
                </li>
                <li>
                  <strong>Alternatives:</strong> Are non-surgical options
                  discussed first where suitable?
                </li>
                <li>
                  <strong>Equipment:</strong> Are imaging and surgical
                  facilities modern and well kept?
                </li>
                <li>
                  <strong>Range:</strong> Can several needs be met in one
                  place?
                </li>
                <li>
                  <strong>Privacy:</strong> Do I feel comfortable speaking
                  freely?
                </li>
                <li>
                  <strong>Continuity:</strong> Will the same team remember my
                  history?
                </li>
                <li>
                  <strong>Transparency:</strong> Are fees, timings and
                  procedures explained openly?
                </li>
                <li>
                  <strong>Practicality:</strong> Can I realistically attend
                  follow-ups?
                </li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs of a Poor Clinic
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Pressure to decide on surgery immediately</li>
                <li>No explanation of risks or alternatives</li>
                <li>
                  Advice to take hormonal pills without examination or tests
                </li>
                <li>
                  Dismissing your symptoms as &ldquo;nothing&rdquo; without
                  assessment
                </li>
                <li>No clear way to contact them with questions</li>
                <li>
                  Offers to reveal the baby&apos;s sex, which is illegal in
                  India
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Technology Used With Empathy
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>High-definition 3D laparoscopy</li>
                <li>Voluson E22 3D and 4D ultrasound</li>
                <li>Time-lapse imaging for embryo monitoring</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>
              <p>
                Technology supports the doctor&apos;s judgement. It does not
                replace the conversation with you.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Is Travelling From Sambhal Worth It?
              </h2>
              <p>
                For routine concerns, a doctor near home may be enough. A
                longer trip can make sense for advanced fertility or IVF care,
                close monitoring of a high-risk pregnancy, minimally invasive
                3D laparoscopic surgery, a second opinion, or when you want
                several services in one place. Weigh the benefit against
                repeat visits, and ask early how often you will need to come.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Making Visits Easier From Sambhal
              </h2>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Before your first visit
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    Book in advance by phone or WhatsApp, and confirm timings
                  </li>
                  <li>
                    Gather prescriptions, blood tests, ultrasounds and
                    surgical records
                  </li>
                  <li>Note your last period date, symptoms and questions</li>
                  <li>List your medicines and supplements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  At the first visit
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Ask how often you will need to return</li>
                  <li>
                    Ask which checks may be done closer to home, if the doctor
                    agrees
                  </li>
                  <li>
                    Ask whether tests and consultation can be planned on the
                    same day
                  </li>
                  <li>Ask how to reach the clinic with questions afterwards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Afterwards
                </h3>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>Keep reports in one folder, plus photos on your phone</li>
                  <li>Note follow-up dates in your calendar</li>
                  <li>Share local test reports with the clinic</li>
                </ul>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Your First Consultation
              </h2>
              <p>
                A first visit is a conversation first. You can expect a
                discussion of your symptoms, cycle history and medical
                background, a gentle examination only if necessary (explained
                beforehand), ultrasound or blood tests if required, a clear
                explanation of options and time to ask questions. You may
                bring a family member or friend, or speak with the doctor
                alone. Your concerns are discussed respectfully, and your
                medical details are kept confidential.
              </p>
            </section>

            <section className="space-y-3">
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
