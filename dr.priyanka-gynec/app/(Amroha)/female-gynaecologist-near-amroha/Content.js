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

export default function FemaleGynaecologistNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Female Gynaecologist near Amroha – Questions Women Are Too Shy
                to Ask
              </h1>

              <p>
                Many women carry questions about their bodies for years because
                they do not know whom to ask or feel embarrassed. A female
                gynaecologist can make these conversations easier, and honest
                answers can ease a lot of worry.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong>{" "}
                is an option to consider. The clinic is located in{" "}
                <strong>Moradabad, not in Amroha</strong>, and women from Amroha
                and surrounding areas travel there for consultations. Its
                philosophy is <strong>&quot;Her Health First.&quot;</strong>{" "}
                You are listened to, informed and never judged. The answers
                below are general information. Your own doctor will advise you
                personally.
              </p>
            </header>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                About Periods
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Is it normal for my periods to be irregular?
                </h3>
                <p>
                  A cycle of about 21 to 35 days is typical, and some variation
                  is common, especially in the first years after periods begin
                  and before menopause. Cycles that are consistently shorter,
                  longer or missed for three months deserve a check. PCOS,
                  thyroid problems, stress and weight changes are common
                  causes.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  How heavy is too heavy?
                </h3>
                <p>
                  If you soak a pad every hour or two, pass large clots, bleed
                  beyond seven days or feel tired and dizzy, see a doctor.
                  Heavy bleeding can cause anaemia and has treatable causes,
                  such as fibroids or polyps.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Do I have to suffer period pain?
                </h3>
                <p>
                  Mild cramps are common. Pain that stops you from working or
                  studying is not something to endure silently. Causes such as
                  endometriosis can be treated.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                About Intimate Health
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Is vaginal discharge normal?
                </h3>
                <p>
                  Some discharge is normal and changes through the cycle.
                  Discharge with itching, burning, a strong smell or an unusual
                  colour may point to an infection and should be checked.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Why does intercourse hurt?
                </h3>
                <p>
                  Pain can have many causes, including infection, dryness,
                  endometriosis, fibroids or pelvic floor tension. It is a
                  medical concern, not something to hide. A doctor can find the
                  cause and treat it.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Do I need a check-up if I am not sexually active?
                </h3>
                <p>
                  Yes, if you have symptoms. Periods, hormonal problems, cysts
                  and fibroids affect women regardless of sexual activity. Your
                  doctor will explain whether any examination is needed.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                About Weight, Skin and Hair
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Could acne and facial hair mean something hormonal?
                </h3>
                <p>
                  They can. With irregular periods and weight changes, they may
                  suggest PCOS. It is common and treatable, with lifestyle
                  changes, medicines and, if you want a baby, ovulation
                  induction.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Does PCOS mean I cannot have children?
                </h3>
                <p>
                  No. PCOS is one of the most common and most treatable causes
                  of difficulty conceiving. Many women conceive with the right
                  plan.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                About Contraception and Family Planning
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Which contraceptive is best?
                </h3>
                <p>
                  There is no single best method. The right one depends on your
                  health, age, lifestyle and plans. Your doctor will explain
                  the options so you can choose.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Can I take hormonal pills on my own to delay or fix periods?
                </h3>
                <p>
                  It is safer to consult a doctor first. Hormonal medicines need
                  proper evaluation, and self-medication can hide the real
                  problem.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Is sterilization reversible?
                </h3>
                <p>
                  It is intended to be permanent. The clinic offers laparoscopic
                  sterilization as a safe day-care procedure for women who are
                  sure their family is complete.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                About Fertility
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  How long should we try before seeing a doctor?
                </h3>
                <p>
                  Generally 12 months if you are under 35, and about 6 months
                  if you are 35 or older. Seek help sooner if your periods are
                  irregular or you have known conditions.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Is it always the woman&apos;s problem?
                </h3>
                <p>
                  No. Fertility involves both partners, which is why evaluation
                  of both is advised. The clinic offers ovulation tracking,
                  ovulation induction, IVF, time-lapse embryo monitoring, and
                  AI-powered semen analysis with DNA integrity testing.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                About Pregnancy
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  When should I book my first visit?
                </h3>
                <p>
                  As soon as your pregnancy test is positive, ideally within 6
                  to 8 weeks.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Are scans safe?
                </h3>
                <p>
                  Ultrasound does not use radiation, and it is considered safe
                  when performed for medical reasons by trained professionals.
                  Under Indian law (the PCPNDT Act), determining or disclosing
                  the baby&apos;s sex is strictly prohibited, and the clinic
                  does not perform or disclose it.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Is normal delivery always better?
                </h3>
                <p>
                  Normal delivery is preferred when it is safe. A caesarean is
                  advised only when medically necessary, and the reasons are
                  explained openly.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                About Surgery
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  If I need an operation, will I lose my uterus or ovary?
                </h3>
                <p>
                  Not necessarily. Fertility-preserving options such as
                  laparoscopic cystectomy and myomectomy exist for many women.
                  Many conditions are first managed with medicines or
                  monitoring. Surgery is recommended only when it is truly the
                  best option, and alternatives are discussed first.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  What is keyhole surgery?
                </h3>
                <p>
                  Surgery through a few small incisions with a camera, often
                  with smaller scars, less pain and quicker recovery when
                  suitable. The clinic uses 3D laparoscopy.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                About Menopause
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Is bleeding after menopause normal?
                </h3>
                <p>
                  No. Any bleeding after menopause should be examined promptly.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Are hot flushes and poor sleep something I must tolerate?
                </h3>
                <p>
                  No. Symptoms can be eased with advice and treatment, so speak
                  to your doctor.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How a Female Gynaecologist Visit Works
              </h2>

              <p>
                A first visit is a conversation first. You can expect:
              </p>

              <ol className="list-decimal space-y-2 pl-6">
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
                <li>A clear explanation of findings and options</li>
                <li>Time to ask questions without pressure</li>
              </ol>

              <p>
                You can ask for a pause or decline any step. You may bring a
                family member or friend, or choose to speak with the doctor
                alone. Your concerns are discussed respectfully, and your
                medical details are kept confidential.
              </p>
            </section>

            <section className="rounded-xl border border-[#8F1738]/20 bg-[#FDF7F8] p-6 space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                A Tip for Shy Patients
              </h2>

              <p>
                Write your questions on paper before you go, and hand the page
                to the doctor if speaking feels hard. You can also write a
                short note about your symptoms, cycle dates and medicines.
                Doctors read these notes all the time, and they make the visit
                smoother.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Services at Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Gynaecology and PCOS:</strong> Evaluation and
                  treatment of menstrual and hormonal problems
                </li>
                <li>
                  <strong>Pregnancy care:</strong> Antenatal visits, normal
                  delivery support and high-risk pregnancy monitoring
                </li>
                <li>
                  <strong>Fertility and IVF</strong>
                </li>
                <li>
                  <strong>3D laparoscopic surgery:</strong> Cystectomy,
                  myomectomy, hysterectomy, endometriosis surgery,
                  sacrocolpopexy and sterilization
                </li>
                <li>
                  <strong>Hysteroscopy:</strong> Diagnostic hysteroscopy and
                  hysteroscopic polypectomy
                </li>
                <li>
                  <strong>Postnatal and paediatric care:</strong> Recovery
                  support, newborn care and vaccinations
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for Your Visit From Amroha
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
                Ask your doctor how often you will need to return, and which
                routine checks may be possible closer to home.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When Not to Wait
              </h2>

              <p className="rounded-xl border-l-4 border-red-600 bg-red-50 p-5 text-gray-800">
                Go to the nearest emergency facility immediately for very heavy
                bleeding, sudden severe pain, bleeding during pregnancy,
                fainting, reduced baby movements, leaking fluid or regular
                contractions before your due date. Do not delay care to travel
                to another city.
              </p>
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
                    <a
                      href="tel:+919079765578"
                      className="underline hover:text-[#8F1738]"
                    >
                      +91 90797 65578
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-[#8F1738]"
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
                      className="break-all underline hover:text-[#8F1738]"
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
                      className="break-all underline hover:text-[#8F1738]"
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

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="mb-2 font-semibold text-gray-900">
                      Q{index + 1}. {faq.q}
                    </h3>
                    <p className="text-gray-700">{faq.a}</p>
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