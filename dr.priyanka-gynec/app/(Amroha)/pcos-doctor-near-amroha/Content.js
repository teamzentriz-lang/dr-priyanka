import Link from "next/link";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Amroha?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for consultations.",
  },
  {
    q: "Can PCOS be cured?",
    a: "PCOS is a long-term condition, but symptoms can be managed very well with lifestyle changes, medication and regular follow-up.",
  },
  {
    q: "Can teenagers have PCOS?",
    a: "It is possible, but irregular periods are common in the first two years after a girl's first period, so doctors assess carefully before giving a diagnosis.",
  },
  {
    q: "Can I get pregnant if I have PCOS?",
    a: "Yes, many women with PCOS conceive naturally or with treatment such as ovulation induction. Your doctor will guide you.",
  },
  {
    q: "Does PCOS go away after menopause?",
    a: "Hormonal symptoms often ease, but metabolic risks such as raised blood sugar and cholesterol remain relevant, so continued health checks are important.",
  },
  {
    q: "Does PCOS always cause weight gain?",
    a: "No. Many women with PCOS are of normal weight, though weight gain is common and can worsen symptoms.",
  },
  {
    q: "Will I need IVF for PCOS?",
    a: "Not always. Many women conceive with lifestyle changes and ovulation induction. IVF is considered when other treatments do not work or other factors are present.",
  },
  {
    q: "Can follow-up checks be done closer to home?",
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

export default function PCOSDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                PCOS Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad
              </h1>

              <p>
                PCOS does not look the same at every age. A teenager may worry
                about acne and irregular periods. A newly married woman may
                worry about conceiving. A woman in her forties may worry about
                weight, sugar and long-term health. A good plan changes with
                the stage of life.
              </p>

              <p>
                If you live in Amroha,{" "}
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
                in neighbouring <strong>Moradabad</strong> is an option to
                consider. The clinic is located in <strong>Moradabad</strong>,
                not in Amroha, and women from Amroha and surrounding areas
                travel there for consultations. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong> Your symptoms,
                goals and story shape the plan.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is PCOS?
              </h2>

              <p>
                Polycystic ovary syndrome is a hormonal condition in which the
                ovaries may not release eggs regularly, and levels of certain
                hormones, especially androgens, may be higher than usual.
                Insulin resistance is also common. The ovaries may show many
                small follicles on ultrasound, but these are not harmful cysts
                in the usual sense.
              </p>

              <p>
                Common signs include irregular or absent periods, acne, excess
                hair on the face or body, thinning scalp hair, weight gain,
                dark skin patches and difficulty conceiving. One sign alone
                does not prove PCOS, so a proper evaluation is needed. It
                usually includes your history, an examination, ultrasound and
                blood tests. The clinic uses a Voluson E22 3D and 4D ultrasound
                machine for detailed imaging.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS in the Teenage Years
              </h2>

              <p>
                <strong>What is common:</strong> Irregular periods are normal
                in the first two years after a girl&apos;s first period, so
                doctors are careful before giving a label. Persistent
                irregular cycles, significant acne, excess hair or rapid
                weight gain deserve evaluation.
              </p>

              <p>
                <strong>What helps:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Gentle guidance on balanced meals and regular activity</li>
                <li>
                  Emotional support, since appearance changes can hurt
                  confidence
                </li>
                <li>
                  A doctor visit with a parent present if she prefers, or
                  privately if she wishes
                </li>
                <li>Avoiding crash diets and unproven supplements</li>
              </ul>

              <p>
                <strong>Ask the doctor:</strong> Is this PCOS or normal
                adjustment? Which tests are really needed? What can we do
                first without medicines?
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS in the Twenties
              </h2>

              <p>
                <strong>What is common:</strong> Cycles are unpredictable,
                acne and hair growth continue, and many women start worrying
                about marriage and pregnancy.
              </p>

              <p>
                <strong>What helps:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Regular, sustainable exercise and balanced eating</li>
                <li>A period diary, noting dates and flow</li>
                <li>
                  Treatment for acne, hair growth or irregular cycles, as
                  advised
                </li>
                <li>A preconception check-up before planning a baby</li>
              </ul>

              <p>
                <strong>Ask the doctor:</strong> Will PCOS affect my chances
                of conceiving? What should I do now to prepare? Which
                treatment suits my main concern?
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS When You Want a Baby
              </h2>

              <p>
                <strong>What is common:</strong> Irregular ovulation is a
                leading reason for difficulty conceiving with PCOS. It is also
                highly treatable.
              </p>

              <p>
                <strong>What helps:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Lifestyle changes, since even modest weight loss may help
                  in women who are overweight
                </li>
                <li>
                  Ovulation tracking and, if needed, ovulation induction with
                  ultrasound monitoring
                </li>
                <li>Evaluation of both partners</li>
                <li>
                  Further options, including IVF, when simpler measures do
                  not work
                </li>
              </ul>

              <p>
                The clinic offers fertility evaluation for both partners,
                IVF, time-lapse embryo monitoring, and AI-powered semen
                analysis with DNA integrity testing. Seek help after 12
                months of trying if you are under 35, after 6 months if you
                are 35 or older, and sooner if your periods are irregular.
              </p>

              <p>
                <strong>Ask the doctor:</strong> How long should we try before
                moving to the next step? What will monitoring involve, and
                how often will we need to visit?
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS in Pregnancy
              </h2>

              <p>
                Many women with PCOS have healthy pregnancies. Some face a
                higher chance of gestational diabetes, high blood pressure or
                miscarriage, so regular antenatal care matters. Dr. Priyanka
                Pachauri provides antenatal services and high-risk pregnancy
                monitoring, so care can continue under one roof.
              </p>

              <p>
                <strong>Ask the doctor:</strong> Do I need extra tests or
                scans? What diet and activity are safe? What warning signs
                should I watch for?
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS in the Thirties and Forties
              </h2>

              <p>
                <strong>What is common:</strong> Weight tends to creep up,
                blood sugar and cholesterol become more relevant, and periods
                may become heavier or less regular as perimenopause approaches.
              </p>

              <p>
                <strong>What helps:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Periodic checks of blood sugar, cholesterol and blood
                  pressure
                </li>
                <li>Strength training and regular activity</li>
                <li>
                  Balanced meals, with limited sugary and refined foods
                </li>
                <li>
                  Evaluation of heavy bleeding, since it may have causes
                  other than PCOS, such as fibroids or polyps
                </li>
                <li>Adequate sleep and stress care</li>
              </ul>

              <p>
                <strong>Ask the doctor:</strong> Which health checks do I
                need and how often? Could something besides PCOS explain my
                heavy periods?
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS Around and After Menopause
              </h2>

              <p>
                <strong>What is common:</strong> PCOS does not vanish at
                menopause. Hormonal symptoms such as irregular periods and
                acne often ease, but metabolic risks, such as raised blood
                sugar, cholesterol and blood pressure, remain relevant.
              </p>

              <p>
                <strong>What helps:</strong>
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Continued health checks</li>
                <li>Activity and balanced nutrition</li>
                <li>Prompt evaluation of any bleeding after menopause</li>
                <li>
                  Menopause symptom care, such as for hot flushes and sleep
                  trouble
                </li>
              </ul>

              <p>
                <strong>Ask the doctor:</strong> Which long-term risks should
                I keep an eye on? What screening is due?
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Lifestyle: The Constant at Every Stage
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Balanced meals:</strong> Vegetables, fruit, whole
                  grains, pulses and adequate protein, with limited sugary
                  and refined foods
                </li>
                <li>
                  <strong>Regular movement:</strong> Brisk walking, yoga or
                  exercise you enjoy, plus some strength work
                </li>
                <li>
                  <strong>Sleep and stress care:</strong> Both affect hormones
                </li>
                <li>
                  <strong>No smoking</strong>
                </li>
                <li>
                  <strong>Medicines only as prescribed.</strong> Never start
                  or stop hormonal medicines on your own
                </li>
              </ul>

              <p>
                Slow, steady changes work better than extreme ones.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>

              <p>
                Visible symptoms, weight concerns and fertility worries can
                affect confidence and mood at any age. Talk openly with your
                doctor, family or a trusted friend. If low mood or anxiety
                becomes persistent, please ask for support. Emotional health
                is part of good PCOS care.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Families Can Help
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Avoid comments on weight, skin or fertility</li>
                <li>Encourage regular meals and activity together</li>
                <li>Support medical advice over home remedies</li>
                <li>Attend a consultation with her, if she wishes</li>
                <li>Be patient. Progress takes months, not days</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Visits From Amroha
              </h2>

              <h3 className="text-lg font-semibold text-gray-900">
                Ask your doctor at the first visit:
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>How often will I need to come to the clinic?</li>
                <li>
                  Which blood tests can be done closer to home, if the doctor
                  agrees?
                </li>
                <li>When should I repeat tests, and which results should I share?</li>
                <li>What changes should make me contact you sooner?</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Make visits easier:
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>Book in advance and confirm timings</li>
                <li>
                  Bring your period diary, previous reports, ultrasounds and
                  a list of medicines
                </li>
                <li>
                  Ask whether tests and consultation can be planned on the
                  same day
                </li>
                <li>Travel with a family member where helpful</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When to See a PCOS Doctor
              </h2>

              <p>Book a consultation if you have:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Periods less often than every 35 days, or absent for several
                  months
                </li>
                <li>Difficulty conceiving after 6 to 12 months of trying</li>
                <li>Persistent acne, excess hair or hair thinning</li>
                <li>Rapid or unexplained weight gain</li>
                <li>
                  A PCOS diagnosis and uncertainty about the next steps
                </li>
                <li>Very heavy or prolonged bleeding</li>
              </ul>

              <p className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 text-gray-800">
                For sudden severe pain or very heavy bleeding with dizziness,
                go to the nearest emergency facility immediately. Do not
                delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>A listening-first approach</strong> with
                  personalised plans, never one-size-fits-all
                </li>
                <li>
                  <strong>Complete support</strong> from PCOS diagnosis to
                  fertility treatment, pregnancy and delivery
                </li>
                <li>
                  <strong>Advanced imaging and laboratory technology</strong>
                </li>
                <li>
                  <strong>Honest guidance</strong> on what is needed and what
                  is not
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
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
                  <Phone className="h-5 w-5 shrink-0" />
                  <strong>Call for appointment:</strong>
                  <a
                    href="tel:+919079765578"
                    className="underline hover:text-[#8F1738]"
                  >
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <strong>WhatsApp:</strong>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8F1738]"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="break-all underline hover:text-[#8F1738]"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <strong>Website:</strong>
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

              <div className="flex flex-wrap gap-4 pt-3">
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
                    <h3 className="font-semibold text-gray-900">
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