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
    q: "Is a female gynaecologist available at the clinic?",
    a: "Yes. You will consult Dr. Priyanka Pachauri.",
  },
  {
    q: "Is an internal examination always needed?",
    a: "No. It is done only when it is necessary, and it is explained to you first. You can ask for a pause or decline any step.",
  },
  {
    q: "Can unmarried women or teenagers consult a gynaecologist?",
    a: "Yes. Women of any age or marital status can consult for periods, hormonal concerns, infections or preventive care.",
  },
  {
    q: "Can I bring someone with me?",
    a: "Yes, if it helps you feel comfortable. You can also choose to speak with the doctor alone.",
  },
  {
    q: "Will my consultation be private?",
    a: "Yes. Concerns are discussed respectfully, and your medical details are kept confidential.",
  },
  {
    q: "Does the clinic offer pregnancy and fertility care?",
    a: "Yes. It offers antenatal care, normal delivery support, high-risk pregnancy management, fertility and IVF treatment, and postnatal care.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports and scans, and the doctor will review them and explain your options.",
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

export default function FemaleGynaecologistNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Female Gynaecologist near Sambhal – Myths, Facts and Care
              </h1>

              <p>
                Many women put off seeing a gynaecologist for years. Some worry
                about being judged. Some fear the examination. Others have
                been told that certain problems are &quot;normal&quot; or
                &quot;not worth a doctor.&quot; If you are looking for a female
                gynaecologist near Sambhal, it helps to separate myths from
                facts first.
              </p>

              <p>
                Dr. Priyanka Pachauri of Dr. Priyanka Gynaec in neighbouring
                Moradabad is an option to consider. The clinic is located in
                Moradabad, not in Sambhal, and women from Sambhal and
                surrounding areas travel there for consultations. Its
                philosophy is &quot;Her Health First.&quot; You are listened
                to, informed and never rushed.
              </p>
            </header>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Myths and Facts About Visiting a Gynaecologist
              </h2>

              <div className="space-y-4">
                {[
                  {
                    myth: "Only married or pregnant women need a gynaecologist.",
                    fact: "Women of any age or marital status can consult one for periods, hormones, infections, pain or preventive care.",
                  },
                  {
                    myth: "Painful periods are normal, so there is no point seeing a doctor.",
                    fact: "Mild cramps are common, but severe pain that disrupts daily life may signal PCOS, endometriosis or another treatable cause.",
                  },
                  {
                    myth: "Every visit involves an internal examination.",
                    fact: "Examination is done only when it is necessary, and it is explained beforehand. Many concerns can be assessed through discussion, ultrasound and tests.",
                  },
                  {
                    myth: "A gynaecologist will judge my questions.",
                    fact: "Doctors hear these concerns every day. Honest information leads to better care, and no question is too small or too embarrassing.",
                  },
                  {
                    myth: "PCOS means I can never have a baby.",
                    fact: "PCOS is one of the most common and most treatable causes of difficulty conceiving. Many women conceive with lifestyle changes and ovulation induction.",
                  },
                  {
                    myth: "Surgery for a cyst or fibroid always means removing the uterus or ovary.",
                    fact: "Fertility-preserving options such as laparoscopic cystectomy and myomectomy exist for many women. Many conditions are first managed with medicines or monitoring.",
                  },
                  {
                    myth: "A caesarean is always safer than a normal delivery.",
                    fact: "Normal delivery is preferred when it is safe. A caesarean is advised only when medically necessary.",
                  },
                  {
                    myth: "Ultrasound is harmful in pregnancy.",
                    fact: "Ultrasound does not use radiation, and it is considered safe when done for medical reasons by trained professionals.",
                  },
                  {
                    myth: "If I feel fine, I do not need a check-up.",
                    fact: "Some conditions cause few symptoms at first. Preventive visits help catch problems early.",
                  },
                ].map((item) => (
                  <div
                    key={item.myth}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <p className="font-semibold text-gray-900">
                      Myth: {item.myth}
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold text-[#8F1738]">
                        Fact:
                      </span>{" "}
                      {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Choose a Female Gynaecologist?
              </h2>

              <p>
                This is a personal preference, not a rule. Many women feel
                more relaxed during examinations, more open about intimate
                topics and better understood during pregnancy. Family members
                are often more comfortable too. What matters most is that you
                feel safe enough to speak honestly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What an Examination Is Actually Like
              </h2>

              <p>
                Fear of the examination keeps many women away, so here is what
                to expect.
              </p>

              <ol className="list-decimal space-y-3 pl-6 marker:font-semibold marker:text-[#8F1738]">
                <li>
                  <strong>A conversation first.</strong> The doctor asks about
                  your symptoms, cycle and history before anything else.
                </li>
                <li>
                  <strong>A clear explanation.</strong> If an examination is
                  needed, you are told what will be done and why.
                </li>
                <li>
                  <strong>Your consent.</strong> You can ask questions, ask for
                  a pause or decline any step.
                </li>
                <li>
                  <strong>Privacy.</strong> You are given space and covering,
                  and the examination is kept as brief as possible.
                </li>
                <li>
                  <strong>Ultrasound or tests only if useful.</strong> The
                  clinic uses a Voluson E22 3D and 4D ultrasound machine for
                  detailed imaging.
                </li>
                <li>
                  <strong>A plain explanation of findings.</strong> You hear
                  what was found and what your options are.
                </li>
              </ol>

              <p>
                You may bring a family member or friend, or choose to speak
                with the doctor alone.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What a Female Gynaecologist Can Help With
              </h2>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Periods:</strong> Irregular, missed, painful or heavy
                  periods
                </li>
                <li>
                  <strong>PCOS and hormones:</strong> Acne, excess hair, weight
                  changes and irregular cycles
                </li>
                <li>
                  <strong>Infections:</strong> Discharge, itching, burning or
                  odour
                </li>
                <li>Pelvic pain and pain during intercourse</li>
                <li>Fibroids, cysts, polyps and endometriosis</li>
                <li>Contraception and family planning</li>
                <li>
                  <strong>Fertility:</strong> Difficulty conceiving
                </li>
                <li>
                  <strong>Pregnancy:</strong> Antenatal care, delivery and
                  postnatal recovery
                </li>
                <li>
                  <strong>Menopause:</strong> Hot flushes, sleep trouble and
                  bleeding after menopause
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Services at Dr. Priyanka Gynaec
              </h2>

              <p>
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                centre.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Gynaecology and PCOS
                  </h3>
                  <p>
                    Evaluation and treatment of menstrual and hormonal
                    problems.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Pregnancy care</h3>
                  <p>
                    Trimester-wise check-ups, ultrasound, normal delivery
                    support and high-risk pregnancy monitoring.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Fertility and IVF</h3>
                  <p>
                    Evaluation of both partners, ovulation induction, IVF,
                    time-lapse embryo monitoring, and AI-powered semen
                    analysis with DNA integrity testing.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    3D laparoscopic surgery
                  </h3>
                  <p>
                    Cystectomy, myomectomy, hysterectomy, endometriosis
                    surgery, sacrocolpopexy and sterilization.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Hysteroscopy</h3>
                  <p>
                    Diagnostic hysteroscopy and hysteroscopic polypectomy.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Paediatric care</h3>
                  <p>Consultations, vaccinations and newborn care.</p>
                </div>
              </div>

              <p className="rounded-xl border-l-4 border-[#8F1738] bg-gray-50 p-4 font-medium text-gray-900">
                Surgery is recommended only when it is truly the best option,
                and alternatives are always discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Symptoms Worth a Visit
              </h2>

              <p>Book a consultation if you notice:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>Cycles shorter than 21 days or longer than 35 days</li>
                <li>Missed periods for three months or more</li>
                <li>Very heavy bleeding or large clots</li>
                <li>Severe period pain that disrupts daily life</li>
                <li>
                  Bleeding between periods, after intercourse or after
                  menopause
                </li>
                <li>Persistent pelvic pain or pain during intercourse</li>
                <li>Unusual discharge, itching, burning or odour</li>
                <li>A cyst, fibroid or polyp found on a scan</li>
                <li>Difficulty conceiving after 6 to 12 months of trying</li>
                <li>A positive pregnancy test</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for Your Visit From Sambhal
              </h2>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  Book in advance by phone or WhatsApp, and confirm current
                  timings
                </li>
                <li>
                  Bring previous prescriptions, blood tests, ultrasounds and
                  surgical records
                </li>
                <li>Note the date of your last period, your symptoms and your questions</li>
                <li>List your medicines and supplements</li>
                <li>Consider travelling with a family member or friend</li>
                <li>If pregnant, carry your antenatal card</li>
              </ul>

              <p>
                Ask your doctor how often you will need to return, which
                routine checks may be possible closer to home, and whether
                tests and consultation can be planned on the same day.
              </p>
            </section>

            <section className="space-y-3 rounded-xl border border-red-200 bg-red-50 p-5">
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
              <h2 className="text-2xl font-bold text-gray-900">Privacy</h2>

              <p>
                At Dr. Priyanka Gynaec, your concerns are discussed
                respectfully, and your medical details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
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
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Clinic Address and Appointments
              </h2>

              <p>
                Dr. Priyanka Gynaec is located at A2, near Old Roadways,
                Gandhi Nagar, Moradabad, Uttar Pradesh – 244001.
              </p>

              <p>
                Women travelling from Sambhal should confirm appointment
                availability and current clinic timings before visiting.
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
                <div
                  key={faq.q}
                  className="border-b border-gray-200 pb-5"
                >
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