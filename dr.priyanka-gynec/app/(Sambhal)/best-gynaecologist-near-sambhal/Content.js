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
    q: "Who is the best gynaecologist for patients from Sambhal?",
    a: '"Best" depends on your needs. Dr. Priyanka Pachauri offers pregnancy care, fertility and IVF, PCOS treatment and 3D laparoscopic surgery for women seeking specialised care in a nearby city.',
  },
  {
    q: "Do I need an appointment before travelling?",
    a: "Yes, booking in advance is recommended. Call +91 90797 65578 or message on WhatsApp at +91 89796 70705.",
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
    q: "Can unmarried women consult a gynaecologist?",
    a: "Yes. Women of any age or marital status can consult for periods, hormonal concerns, infections or check-ups.",
  },
  {
    q: "Can some follow-up checks be done closer to home?",
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

export default function BestGynaecologistNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Best Gynaecologist near Sambhal – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              Finding the right gynaecologist matters, and &quot;best&quot;
              depends on what you need. A woman with irregular periods needs
              something different from a woman planning IVF or expecting her
              first baby. If you live in Sambhal and are looking for
              specialised women&apos;s healthcare,{" "}
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring <strong>Moradabad</strong> is an option to consider.
            </p>

            <p>
              The clinic is located in <strong>Moradabad</strong>, not in
              Sambhal. Women from Sambhal and surrounding areas travel there
              for consultations. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong> You are listened
              to, informed and never rushed.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Which Problem, Which Visit?
              </h2>
              <p>Use this quick guide to decide what to book.</p>

              <div className="space-y-4">
                {[
                  {
                    title: "Periods problems (irregular, painful, heavy or missed)",
                    detail:
                      "Book a general gynaecology consultation. Evaluation may include ultrasound and blood tests for thyroid, hormones and haemoglobin.",
                  },
                  {
                    title: "Trying to conceive",
                    detail:
                      "Book a fertility consultation, ideally with your partner. Seek help after 12 months of trying if you are under 35, after 6 months if you are 35 or older, and sooner if your periods are irregular.",
                  },
                  {
                    title: "Positive pregnancy test",
                    detail:
                      "Book an antenatal visit within the first 6 to 8 weeks.",
                  },
                  {
                    title: "Cyst, fibroid or polyp found on a scan",
                    detail:
                      "Book a consultation to discuss whether monitoring, medicines or surgery is the best choice.",
                  },
                  {
                    title: "Advised surgery elsewhere",
                    detail:
                      "Book a second-opinion visit with all your reports and scans.",
                  },
                  {
                    title: "Pelvic pain, discharge or pain during intercourse",
                    detail:
                      "Book a general consultation. These symptoms are treatable.",
                  },
                  {
                    title: "After delivery",
                    detail:
                      "Book a postnatal visit for recovery, feeding support and contraception, and plan your baby's vaccinations.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                About Dr. Priyanka Gynaec
              </h2>
              <p>
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                centre offering gynaecology, laparoscopy, IVF and pregnancy
                care. It uses 3D laparoscopy, 3D and 4D ultrasound, time-lapse
                embryo imaging and AI-powered semen analysis. The clinic&apos;s
                approach is to listen first, then apply advanced expertise with
                patience and genuine care.
              </p>
              <p>
                <strong>Address:</strong> A2, near Old Roadways, Gandhi Nagar,
                Moradabad, Uttar Pradesh – 244001
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Gynaecology and PCOS
              </h2>
              <p>
                Irregular, painful or heavy periods, infections, pelvic pain,
                contraception and menopause symptoms are all assessed. PCOS
                can cause irregular cycles, acne, excess hair, weight gain and
                difficulty conceiving, yet it is highly treatable. Lifestyle
                changes, medicines and ovulation induction help many women
                regulate their cycles or conceive.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Pregnancy and Antenatal Care
              </h2>
              <p>Structured prenatal care includes:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Early registration and trimester-wise check-ups</li>
                <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
                <li>
                  Blood tests and screening for gestational diabetes, anaemia
                  and thyroid problems
                </li>
                <li>Nutrition and lifestyle guidance</li>
                <li>Labour and delivery preparation</li>
              </ul>

              <p>
                <strong>Normal delivery</strong> is prioritised wherever it is
                safe for mother and baby. A caesarean is advised only when
                medically necessary, and the reasons are explained openly.{" "}
                <strong>High-risk pregnancies,</strong> such as those with
                diabetes, high blood pressure, thyroid disease, previous
                miscarriage, twins or conception after IVF, receive closer
                monitoring.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Fertility and IVF
              </h2>
              <p>
                Fertility care is personal and respectful. The clinic offers:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Evaluation of both partners</li>
                <li>Ovulation tracking and induction</li>
                <li>IVF with advanced laboratory support</li>
                <li>Time-lapse embryo monitoring</li>
                <li>AI-powered semen analysis and DNA integrity testing</li>
              </ul>
              <p>
                Treatment plans are built around your age, history and test
                results, not a fixed package.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                3D Laparoscopic Surgery and Hysteroscopy
              </h2>
              <p>
                When surgery is needed, keyhole techniques often mean smaller
                scars, less pain and quicker recovery. Procedures include:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Laparoscopic cystectomy for ovarian cysts</li>
                <li>Laparoscopic myomectomy for fibroids</li>
                <li>Laparoscopic hysterectomy when medically necessary</li>
                <li>Endometriosis surgery for pelvic pain</li>
                <li>Sacrocolpopexy for prolapse</li>
                <li>Laparoscopic sterilization as a day-care procedure</li>
                <li>Diagnostic hysteroscopy and hysteroscopic polypectomy</li>
              </ul>
              <p>
                Surgery is recommended only when it is truly the best option,
                and alternatives are always discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Postnatal and Paediatric Care
              </h2>
              <p>
                Recovery guidance, breastfeeding support, contraception
                counselling, paediatric consultations, vaccinations and
                newborn care are available, so mother and baby can stay with
                the same trusted team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Choosing the Best Gynaecologist for You
              </h2>
              <p>Ask yourself these questions when comparing doctors:</p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Does she listen?</strong> You should be able to
                  describe your concerns without being cut off.
                </li>
                <li>
                  <strong>Is she honest?</strong> Tests, surgery and caesarean
                  should be advised only when needed.
                </li>
                <li>
                  <strong>Does she explain alternatives?</strong> Non-surgical
                  options should be discussed first where suitable.
                </li>
                <li>
                  <strong>Is the clinic equipped?</strong> Modern imaging and
                  surgical options help accuracy and safety.
                </li>
                <li>
                  <strong>Is the care continuous?</strong> A team that
                  remembers your history saves time.
                </li>
                <li>
                  <strong>Do you feel comfortable?</strong> Trust matters as
                  much as qualifications.
                </li>
                <li>
                  <strong>Is it practical?</strong> Consider travel,
                  follow-ups and family support.
                </li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Is Travelling From Sambhal Worth It?
              </h2>
              <p>
                For routine concerns, a doctor close to home may be enough. A
                longer trip often makes sense when you want advanced fertility
                care, close monitoring of a high-risk pregnancy, minimally
                invasive surgery, a second opinion, or several services at one
                place. Weigh the benefit against repeat visits, and ask early
                how often you will need to come.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for Your First Visit
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Book in advance by phone or WhatsApp, and confirm current
                  timings
                </li>
                <li>
                  Gather previous prescriptions, blood tests, ultrasounds and
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
                A first visit is a conversation first. Examination is done
                only when it is needed and is explained beforehand. Your
                concerns are discussed respectfully, and your medical details
                are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Making Follow-Up Easier
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
                <li>Note follow-up dates in your calendar</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When Not to Wait
              </h2>
              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <p className="text-red-900">
                  Go to the nearest emergency facility immediately if you have
                  very heavy bleeding, sudden severe pain, bleeding during
                  pregnancy, fainting, reduced baby movements, leaking fluid or
                  regular contractions before your due date. Do not delay care
                  to travel to another city.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and endometriosis care,
                  with a compassionate approach.
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

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <h3 className="text-xl font-bold">Dr. Priyanka Gynaec</h3>
                <p className="mt-3">
                  <strong>Doctor:</strong> Dr. Priyanka Pachauri
                </p>
                <p className="mt-2">
                  <strong>Address:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad, Uttar Pradesh – 244001
                </p>

                <div className="mt-5 space-y-3">
                  <p className="flex flex-wrap items-center gap-2">
                    <Phone size={18} />
                    <strong>Call for appointment:</strong>
                    <a
                      href="tel:+919079765578"
                      className="underline underline-offset-2"
                    >
                      +91 90797 65578
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Phone size={18} />
                    <strong>WhatsApp:</strong>
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      +91 89796 70705
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Mail size={18} />
                    <strong>Email:</strong>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="underline underline-offset-2"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Globe size={18} />
                    <strong>Website:</strong>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
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
                    className="rounded-lg border border-[#8F1738] px-6 py-3 font-semibold text-[#8F1738] transition hover:bg-white"
                  >
                    Explore Services
                  </Link>
                </div>
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
                  <h3 className="font-semibold text-gray-900">
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