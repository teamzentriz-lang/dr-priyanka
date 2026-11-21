
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
    q: "Who is a top lady doctor for patients from Amroha?",
    a: '"Top" depends on your needs. Dr. Priyanka Pachauri offers PCOS care, pregnancy care, fertility and IVF, and 3D laparoscopic surgery for women seeking specialised care in a nearby city.',
  },
  {
    q: "Is an internal examination always needed?",
    a: "No. It is done only when it is necessary, and it is explained to you first. You can ask for a pause or decline any step.",
  },
  {
    q: "Can unmarried women or teenagers consult a lady doctor?",
    a: "Yes. Women of any age or marital status can consult for periods, hormonal concerns, infections or preventive care.",
  },
  {
    q: "Is there a lady doctor for pregnancy care?",
    a: "Yes. Dr. Priyanka Pachauri provides antenatal care, normal delivery support, high-risk pregnancy management and postnatal care.",
  },
  {
    q: "Does the clinic offer IVF?",
    a: "Yes. The clinic offers fertility and IVF treatment with time-lapse embryo monitoring and AI-powered semen analysis with DNA integrity testing.",
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

const delayReasons = [
  {
    title: '"I feel embarrassed."',
    description:
      "Doctors hear these concerns every day. No question is too small or too personal. Write your concerns on paper and hand the note over if speaking feels hard. You can also ask to speak with the doctor privately.",
  },
  {
    title: '"I think my problem is normal."',
    description:
      "Painful, heavy or irregular periods are common, but common does not always mean normal. Severe cramps, very heavy bleeding or cycles that keep changing deserve a check. Many causes, such as PCOS, thyroid imbalance or fibroids, are treatable.",
  },
  {
    title: '"I am afraid of the examination."',
    description:
      "An examination is done only when it is necessary, and it is explained beforehand. You can ask questions, ask for a pause or decline a step. Many concerns can be assessed through discussion, ultrasound and tests.",
  },
  {
    title: '"I am afraid of what the doctor will find."',
    description:
      "Not knowing rarely makes a problem go away. Most findings, such as cysts and polyps, are benign and manageable. Early detection usually means simpler treatment.",
  },
  {
    title: '"I am too busy looking after everyone else."',
    description:
      "Family responsibilities push women's own health to the bottom of the list. Booking a single appointment and asking a family member to come along can make it easier. A healthier mother benefits the whole household.",
  },
  {
    title:
      '"I am not married, or I am not pregnant, so I do not need a gynaecologist."',
    description:
      "Women of any age or marital status can consult a gynaecologist for periods, hormones, infections, pain or preventive care.",
  },
  {
    title: '"It is too far to travel."',
    description:
      "For routine concerns, a doctor near home may be enough. A longer trip makes sense for specialised needs. Ask about shared care, so that routine checks stay local and key visits happen at the clinic.",
  },
];

const gynaecologyServices = [
  {
    title: "Periods",
    description: "Irregular, missed, painful or heavy periods",
  },
  {
    title: "PCOS and hormones",
    description: "Acne, excess hair, weight changes and irregular cycles",
  },
  {
    title: "Infections",
    description: "Discharge, itching, burning or odour",
  },
  {
    title: "Pelvic pain",
    description: "Pelvic pain and pain during intercourse",
  },
  {
    title: "Fibroids and related conditions",
    description: "Fibroids, cysts, polyps and endometriosis",
  },
  {
    title: "Contraception",
    description: "Contraception and family planning",
  },
  {
    title: "Fertility",
    description: "Difficulty conceiving",
  },
  {
    title: "Pregnancy",
    description: "Antenatal care, delivery and postnatal recovery",
  },
  {
    title: "Menopause",
    description: "Hot flushes, sleep trouble and bleeding after menopause",
  },
];

const qualityFactors = [
  "Listens fully before advising",
  "Explains diagnoses and options in simple language",
  "Recommends tests and surgery only when needed",
  "Respects your privacy and comfort",
  "Has suitable technology and facilities",
  "Follows you over time, not just once",
];

const firstVisitSteps = [
  "A discussion of your symptoms, cycle history and medical background",
  "A gentle examination only if necessary, explained beforehand",
  "Ultrasound or blood tests if required",
  "A clear explanation of findings and options",
  "Time to ask questions without pressure",
];

const ageWiseCare = [
  {
    title: "Teenagers",
    description:
      "Guidance on first periods, painful or irregular cycles, acne and hormonal concerns, with a parent present if she prefers.",
  },
  {
    title: "Twenties and thirties",
    description:
      "Contraception, PCOS, pregnancy planning, fertility, pregnancy and postnatal recovery.",
  },
  {
    title: "Forties",
    description:
      "Fibroids, heavy periods, perimenopause and preventive screening.",
  },
  {
    title: "After menopause",
    description:
      "Evaluation of any bleeding, pelvic floor health and long-term wellbeing.",
  },
];

const symptoms = [
  "Cycles shorter than 21 days or longer than 35 days",
  "Missed periods for three months or more",
  "Very heavy bleeding or large clots",
  "Severe period pain that disrupts daily life",
  "Bleeding between periods, after intercourse or after menopause",
  "Persistent pelvic pain or pain during intercourse",
  "Unusual discharge, itching, burning or odour",
  "A cyst, fibroid or polyp found on a scan",
  "Difficulty conceiving after 6 to 12 months of trying",
  "A positive pregnancy test",
];

const visitPreparation = [
  "Book in advance by phone or WhatsApp, and confirm current timings",
  "Bring previous prescriptions, blood tests, ultrasounds and surgical records",
  "Note the date of your last period, your symptoms and your questions",
  "List your medicines and supplements",
  "Consider travelling with a family member or friend",
  "If pregnant, carry your antenatal card",
];

const emergencySymptoms = [
  "Very heavy bleeding",
  "Sudden severe pain",
  "Bleeding during pregnancy",
  "Fainting",
  "Reduced baby movements",
  "Leaking fluid or regular contractions before your due date",
];

const trustPoints = [
  {
    title: "Expertise with heart",
    description:
      "Training in laparoscopy, fertility treatment and endometriosis care, with a compassionate approach",
  },
  {
    title: "Continuity you can count on",
    description: "An integrated team that knows your history",
  },
  {
    title: "Complete care in one place",
    description: "Gynaecology, fertility, pregnancy and paediatric services",
  },
  {
    title: "Honest guidance",
    description: "Advice based on what you truly need",
  },
  {
    title: "Trust earned over time",
    description:
      "A reputation built on families recommending the clinic to one another",
  },
];

export default function TopLadyDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-8 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Top Lady Doctor near Amroha – Dr. Priyanka Pachauri, Moradabad
              </h1>

              <p className="leading-7">
                Many women know they should see a lady doctor but keep
                postponing. The reasons are usually practical or emotional,
                not medical. Knowing why you hesitate is the first step toward
                getting care.
              </p>

              <p className="leading-7">
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong>{" "}
                is an option to consider. The clinic is located in{" "}
                <strong>Moradabad</strong>, not in Amroha, and women from
                Amroha and surrounding areas travel there for consultations.
                Its philosophy is <strong>&quot;Her Health First.&quot;</strong>{" "}
                You are listened to, informed and never rushed.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Many Women Prefer a Lady Doctor
              </h2>

              <p className="leading-7">
                A female doctor is a personal preference, not a rule. Many
                women feel more relaxed during examinations, more open about
                periods and intimacy, and better understood during pregnancy.
                Family members are often more comfortable too. What matters is
                that you feel safe enough to speak honestly.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Seven Reasons Women Delay a Visit, and What Helps
              </h2>

              {delayReasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {index + 1}. {reason.title}
                  </h3>
                  <p className="mt-2 leading-7">{reason.description}</p>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What a Lady Doctor Can Help With
              </h2>

              <div className="grid gap-3 sm:grid-cols-2">
                {gynaecologyServices.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-xl border border-gray-200 p-4"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="mt-1 leading-7">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Services at Dr. Priyanka Gynaec
              </h2>

              <p className="leading-7">
                Dr. Priyanka Gynaec is a women&apos;s health and fertility
                centre offering gynaecology, laparoscopy, IVF and pregnancy
                care.
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Gynaecology and PCOS
                  </h3>
                  <p className="mt-2 leading-7">
                    Evaluation and treatment of menstrual and hormonal
                    problems. PCOS is highly treatable, and many women
                    regulate cycles or conceive with lifestyle changes,
                    medicines and ovulation induction.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pregnancy care
                  </h3>
                  <p className="mt-2 leading-7">
                    Trimester-wise check-ups, ultrasound on a Voluson E22 3D
                    and 4D machine, blood tests, screening for gestational
                    diabetes and thyroid problems, and labour preparation.
                    Normal delivery is prioritised wherever it is safe, and a
                    caesarean is advised only when medically necessary.
                    High-risk pregnancies receive closer monitoring.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Fertility and IVF
                  </h3>
                  <p className="mt-2 leading-7">
                    Evaluation of both partners, ovulation tracking and
                    induction, IVF, time-lapse embryo monitoring, and
                    AI-powered semen analysis with DNA integrity testing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3D laparoscopic surgery
                  </h3>
                  <p className="mt-2 leading-7">
                    Cystectomy, myomectomy, hysterectomy, endometriosis
                    surgery, sacrocolpopexy and sterilization.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Hysteroscopy
                  </h3>
                  <p className="mt-2 leading-7">
                    Diagnostic hysteroscopy and hysteroscopic polypectomy.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Paediatric care
                  </h3>
                  <p className="mt-2 leading-7">
                    Consultations, vaccinations and newborn care.
                  </p>
                </div>
              </div>

              <p className="rounded-xl bg-gray-50 p-5 font-medium leading-7 text-gray-900">
                Surgery is recommended only when it is truly the best option,
                and alternatives are always discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Makes a Lady Doctor &quot;Top&quot;?
              </h2>

              <p className="leading-7">Look for someone who:</p>

              <ol className="list-decimal space-y-3 pl-6 leading-7">
                {qualityFactors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Gentle First Visit
              </h2>

              <p className="leading-7">
                A first visit is a conversation first. You can expect:
              </p>

              <ol className="list-decimal space-y-3 pl-6 leading-7">
                {firstVisitSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <p className="leading-7">
                You may bring a family member or friend, or choose to speak
                with the doctor alone. Your concerns are discussed
                respectfully, and your medical details are kept confidential.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Care at Different Ages
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {ageWiseCare.map((stage) => (
                  <div
                    key={stage.title}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {stage.title}
                    </h3>
                    <p className="mt-2 leading-7">{stage.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Symptoms Worth a Visit
              </h2>

              <p className="leading-7">
                Book a consultation if you notice:
              </p>

              <ul className="list-disc space-y-3 pl-6 leading-7">
                {symptoms.map((symptom) => (
                  <li key={symptom}>{symptom}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Your Visit From Amroha
              </h2>

              <ul className="list-disc space-y-3 pl-6 leading-7">
                {visitPreparation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="leading-7">
                Ask your doctor how often you will need to return, which
                routine checks may be possible closer to home, and whether
                tests and consultation can be planned on the same day.
              </p>
            </section>

            <section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-red-900">
                When Not to Wait
              </h2>

              <p className="leading-7 text-red-900">
                Go to the nearest emergency facility immediately for:
              </p>

              <ul className="list-disc space-y-2 pl-6 leading-7 text-red-900">
                {emergencySymptoms.map((symptom) => (
                  <li key={symptom}>{symptom}</li>
                ))}
              </ul>

              <p className="font-semibold leading-7 text-red-900">
                Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <div className="space-y-3">
                {trustPoints.map((point) => (
                  <div
                    key={point.title}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {point.title}
                    </h3>
                    <p className="mt-2 leading-7">{point.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="text-2xl font-bold">
                Clinic Address and Appointments
              </h2>

              <p className="leading-7">
                Dr. Priyanka Gynaec is located at{" "}
                <strong>
                  A2, near Old Roadways, Gandhi Nagar, Moradabad, Uttar Pradesh
                  – 244001
                </strong>
                .
              </p>

              <div className="space-y-3">
                <p>
                  <strong>Call for appointment:</strong>{" "}
                  <a
                    href="tel:+919079765578"
                    className="font-semibold underline"
                  >
                    +91 90797 65578
                  </a>
                </p>

                <p>
                  <strong>WhatsApp:</strong>{" "}
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="font-semibold underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.gynaecologistmoradabad.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
                  >
                    www.gynaecologistmoradabad.com
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <Link
                  href="/contact"
                  className="rounded-lg bg-[#8F1738] px-6 py-3 font-semibold text-white transition hover:bg-[#74122E]"
                >
                  Book Appointment
                </Link>

                <Link
                  href="/services"
                  className="rounded-lg border border-black px-6 py-3 font-semibold text-black transition hover:bg-black hover:text-white"
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
                    <h3 className="font-semibold leading-7 text-gray-900">
                      Q{index + 1}. {faq.q}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-700">{faq.a}</p>
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
