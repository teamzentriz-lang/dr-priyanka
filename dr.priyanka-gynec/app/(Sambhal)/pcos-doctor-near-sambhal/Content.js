
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
    q: "Can PCOS be cured?",
    a: "PCOS is a long-term condition, but symptoms can be managed very well with lifestyle changes, medication and regular follow-up.",
  },
  {
    q: "Can I get pregnant if I have PCOS?",
    a: "Yes, many women with PCOS conceive naturally or with treatment such as ovulation induction. Your doctor will guide you.",
  },
  {
    q: "Which tests are done for PCOS?",
    a: "Commonly an ultrasound and blood tests for hormones, thyroid, prolactin, blood sugar and haemoglobin. Your doctor chooses tests based on your symptoms.",
  },
  {
    q: "Does PCOS always cause weight gain?",
    a: "No. Many women with PCOS are of normal weight, though weight gain is common and can worsen symptoms.",
  },
  {
    q: "What diet is best for PCOS?",
    a: "A balanced diet with vegetables, fruit, whole grains, pulses and adequate protein, with limited sugary and refined foods. Your doctor can personalise this.",
  },
  {
    q: "Will I need IVF for PCOS?",
    a: "Not always. Many women conceive with lifestyle changes and ovulation induction. IVF is considered when other treatments do not work or other factors are present.",
  },
  {
    q: "Can follow-up tests be done closer to home?",
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

export default function PCOSDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              PCOS Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              PCOS is surrounded by confusion. Women hear different advice
              from relatives, friends and social media, and many are unsure
              which tests they need or whether the condition can be managed
              at all. The good news is that PCOS is common, well understood
              and treatable.
            </p>

            <p>
              If you live in Sambhal, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in{" "}
              <strong>Moradabad</strong>, not in Sambhal, and women from
              Sambhal and surrounding areas travel there for consultations.
              Its philosophy is <strong>&quot;Her Health First.&quot;</strong>{" "}
              Your symptoms, goals and story shape the plan.
            </p>

            <section className="space-y-3">
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
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Common Signs
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Irregular, infrequent or absent periods</li>
                <li>Difficulty conceiving</li>
                <li>Acne and oily skin</li>
                <li>Excess hair on the face, chest or abdomen</li>
                <li>Thinning scalp hair</li>
                <li>Weight gain, especially around the abdomen</li>
                <li>Dark, velvety patches on the neck or underarms</li>
                <li>Mood changes and tiredness</li>
              </ul>
              <p>
                One sign alone does not prove PCOS. A proper evaluation is
                needed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS Tests in Plain Language
              </h2>
              <p>
                Your doctor chooses tests based on your symptoms. These are
                the common ones.
              </p>

              <div className="space-y-3">
                <p>
                  <strong>Ultrasound of the ovaries and uterus.</strong> Shows
                  the follicles and the thickness of the uterine lining. The
                  clinic uses a Voluson E22 3D and 4D ultrasound machine for
                  detailed imaging.
                </p>

                <p>
                  <strong>Hormone tests.</strong> Check hormones linked to
                  ovulation and androgen levels. Results depend on the day of
                  your cycle, so your doctor will advise when to test.
                </p>

                <p>
                  <strong>Thyroid tests.</strong> An underactive or overactive
                  thyroid can mimic PCOS, so it is usually checked first.
                </p>

                <p>
                  <strong>Prolactin.</strong> Raised levels can disturb periods
                  and are ruled out as another cause.
                </p>

                <p>
                  <strong>Blood sugar and related tests.</strong> Check for
                  insulin resistance and diabetes risk.
                </p>

                <p>
                  <strong>Cholesterol and blood pressure.</strong> PCOS can
                  affect heart health, so these are monitored.
                </p>

                <p>
                  <strong>Haemoglobin.</strong> Checks for anaemia, especially
                  if bleeding is heavy.
                </p>
              </div>

              <p>
                Ask your doctor why each test is advised. Keep every report in
                date order, since trends across months matter.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Myths and Facts
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: PCOS means I cannot have children.
                  </p>
                  <p>
                    Fact: Many women with PCOS conceive naturally or with
                    treatment such as ovulation induction.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: Only overweight women get PCOS.
                  </p>
                  <p>
                    Fact: Women of normal weight can have PCOS too, though
                    weight gain can worsen symptoms.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: Birth control pills cure PCOS.
                  </p>
                  <p>
                    Fact: Hormonal treatment can regulate periods and manage
                    symptoms, but PCOS is a long-term condition that needs
                    ongoing care. Hormonal medicines should only be taken on a
                    doctor&apos;s advice.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: Cutting out all carbohydrates is the answer.
                  </p>
                  <p>
                    Fact: A balanced diet with whole grains, vegetables, fruit,
                    pulses and adequate protein works better than extreme
                    restriction.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: PCOS goes away after marriage or pregnancy.
                  </p>
                  <p>
                    Fact: It can change over time, but it needs continued
                    management.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: Surgery on the ovaries is the standard treatment.
                  </p>
                  <p>
                    Fact: Most women are managed with lifestyle changes and
                    medicines. The clinic offers laparoscopic surgery for
                    other conditions, but it is not the usual first step for
                    PCOS.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                A Simple Weekly Routine
              </h2>
              <p>
                Small, regular habits work better than short bursts of effort.
                Adjust this to your doctor&apos;s advice.
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Movement, most days:</strong> A brisk walk, yoga or
                  exercise you enjoy, plus some strength work through the week.
                </li>
                <li>
                  <strong>Meals:</strong> Regular times, with vegetables,
                  pulses, whole grains and protein at most meals, and fewer
                  sugary drinks and refined snacks.
                </li>
                <li>
                  <strong>Sleep:</strong> A regular bedtime and enough hours.
                </li>
                <li>
                  <strong>Stress:</strong> A few minutes daily of something
                  calming, such as breathing exercises or time outdoors.
                </li>
                <li>
                  <strong>Tracking:</strong> Note period dates, weight and
                  symptoms once a week.
                </li>
                <li>
                  <strong>Medicines:</strong> Take them as prescribed, and ask
                  before stopping any.
                </li>
              </ul>

              <p>Avoid crash diets and unproven supplements.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Treatment Depends on Your Goal
              </h2>

              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    If you want regular periods and symptom control:
                  </h3>
                  <p>
                    Lifestyle changes form the foundation. Your doctor may add
                    hormonal treatment to regulate periods and protect the
                    uterine lining, treatment for acne or excess hair, and
                    medicines that improve insulin sensitivity where suitable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    If you want to conceive:
                  </h3>
                  <p>
                    Ovulation tracking and induction, guided by ultrasound
                    monitoring. If simpler measures do not work, further
                    options include IVF. The clinic offers fertility
                    evaluation for both partners, IVF, time-lapse embryo
                    monitoring, and AI-powered semen analysis with DNA
                    integrity testing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    If you are a teenager:
                  </h3>
                  <p>
                    Irregular periods are common in the first couple of years,
                    so a doctor assesses carefully before labelling it PCOS.
                    Gentle guidance on diet, activity and emotional support
                    often comes first.
                  </p>
                </div>
              </div>

              <p>
                Never start or stop hormonal medicines on your own.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                PCOS and Pregnancy
              </h2>
              <p>
                Many women with PCOS have healthy pregnancies. Some face a
                higher chance of gestational diabetes, high blood pressure or
                miscarriage, so regular antenatal care matters. Dr. Priyanka
                Pachauri provides antenatal services and high-risk pregnancy
                monitoring, so care can continue under one roof.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Long-Term Health
              </h2>
              <p>
                PCOS can be linked with insulin resistance, higher diabetes
                risk, raised cholesterol and thickening of the uterine lining
                when periods are infrequent. Regular review and healthy habits
                reduce these risks. This is why PCOS care should not stop once
                periods or pregnancy are sorted.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>
              <p>
                Visible symptoms and fertility worries can affect confidence
                and mood. Talk openly with your doctor, family or a trusted
                friend. If low mood or anxiety becomes persistent, please ask
                for support. Emotional health is part of good PCOS care.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Visits From Sambhal
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
                <li>
                  When should I repeat tests, and which results should I share?
                </li>
                <li>
                  What changes should make me contact you sooner?
                </li>
                <li>
                  If I am trying to conceive, what is the monitoring schedule?
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Make visits easier:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Book in advance and confirm timings.</li>
                <li>
                  Bring your period record, previous reports, ultrasounds and
                  a list of medicines.
                </li>
                <li>
                  Ask whether tests and consultation can be planned on the
                  same day.
                </li>
                <li>Travel with a family member where helpful.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                When to See a PCOS Doctor
              </h2>
              <p>Book a consultation if you have:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Periods less often than every 35 days, or absent for several months.</li>
                <li>Difficulty conceiving after 6 to 12 months of trying.</li>
                <li>Persistent acne, excess hair or hair thinning.</li>
                <li>Rapid or unexplained weight gain.</li>
                <li>A PCOS diagnosis and uncertainty about the next steps.</li>
                <li>Very heavy or prolonged bleeding.</li>
              </ul>

              <p>
                For sudden severe pain or very heavy bleeding with dizziness,
                go to the nearest emergency facility immediately. Do not delay
                care to travel to another city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>A listening-first approach</strong> with personalised
                  plans, never one-size-fits-all.
                </li>
                <li>
                  <strong>Complete support</strong> from PCOS diagnosis to
                  fertility treatment, pregnancy and delivery.
                </li>
                <li>
                  <strong>Advanced imaging and laboratory technology.</strong>
                </li>
                <li>
                  <strong>Honest guidance</strong> on what is needed and what
                  is not.
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history.
                </li>
              </ul>

              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p className="mb-4">
                Dr. Priyanka Gynaec is located at A2, near Old Roadways, Gandhi
                Nagar, Moradabad, Uttar Pradesh – 244001.
              </p>

              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
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
                  <Phone className="h-5 w-5 shrink-0" />
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
                  <Mail className="h-5 w-5 shrink-0" />
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
                  <Globe className="h-5 w-5 shrink-0" />
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

              <div className="mt-6 flex flex-wrap gap-3">
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
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="mt-2 text-gray-700">{faq.a}</p>
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
