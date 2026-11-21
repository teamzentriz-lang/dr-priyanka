
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Amroha?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for pregnancy care.",
  },
  {
    q: 'What does "high-risk pregnancy" mean?',
    a: "It means the mother, baby or both have a higher chance of complications, so closer monitoring is advised. It does not mean a bad outcome is certain.",
  },
  {
    q: "Which conditions make a pregnancy high-risk?",
    a: "Examples include diabetes, high blood pressure, thyroid disease, previous miscarriage, twin pregnancy, advanced maternal age, pregnancy after IVF and placenta problems.",
  },
  {
    q: "How often will I need check-ups?",
    a: "Usually more often than in a low-risk pregnancy. Your doctor will set a schedule according to your needs.",
  },
  {
    q: "Can some checks be done closer to home?",
    a: "Some routine checks may be possible locally. Ask your doctor which ones, and carry the reports to the clinic.",
  },
  {
    q: "Can I still have a normal delivery?",
    a: "Sometimes. It depends on your condition, the baby's health and how the pregnancy progresses.",
  },
  {
    q: "Where will my delivery take place?",
    a: "Please confirm this with the clinic when you book, and discuss the plan during antenatal visits.",
  },
  {
    q: "What should I do in an emergency?",
    a: "Go to the nearest emergency facility immediately. Do not delay care to travel to another city.",
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

const fearsAndFacts = [
  {
    fear: '"High-risk means I will lose the baby."',
    fact: "It means a higher chance of complications, which closer monitoring helps to catch and manage early.",
  },
  {
    fear: '"I must stay in bed for nine months."',
    fact: "Activity advice depends on your condition. Many women stay active within limits their doctor sets.",
  },
  {
    fear: '"I will definitely need a caesarean."',
    fact: "Not necessarily. Normal delivery is prioritised wherever it is safe. The mode of delivery is decided individually.",
  },
  {
    fear: '"It is my fault."',
    fact: "Most risk factors, such as thyroid disease, age or a previous caesarean, are not anyone's fault.",
  },
  {
    fear: '"More scans and tests mean something is wrong."',
    fact: "They usually mean careful watching, which is the point of high-risk care.",
  },
];

const highRiskFactors = [
  "Diabetes, or gestational diabetes",
  "High blood pressure or pre-eclampsia",
  "Thyroid disorders",
  "Anaemia",
  "Previous miscarriage, stillbirth or preterm birth",
  "Previous caesarean or uterine surgery",
  "Twin or multiple pregnancy",
  "Pregnancy after IVF or long-standing infertility",
  "Older maternal age",
  "Placenta problems or slow baby growth",
];

const greenSymptoms = [
  "Mild nausea or tiredness, especially early on",
  "Occasional mild, short-lived stretching or tugging in the lower abdomen",
  "Mild ankle puffiness at the end of the day that eases with rest",
  "Mild backache",
  "Heartburn and constipation",
];

const amberSymptoms = [
  "Persistent vomiting, or unable to keep fluids down",
  "Headache that does not settle",
  "Increasing swelling of the face or hands",
  "Burning when passing urine, or frequent urination with discomfort",
  "Unusual discharge, itching or a strong smell",
  "Fewer baby movements than usual for you. Follow the movement-counting method your doctor taught you, and call promptly",
  "Readings outside the limits your doctor gave you, such as blood pressure or blood sugar",
  "Fever",
  "Mild spotting. Always call, even if it stops",
];

const redSymptoms = [
  "Heavy vaginal bleeding",
  "Leaking or a gush of fluid",
  "Severe or persistent abdominal pain",
  "Absent baby movements",
  "Severe headache with blurred vision, flashing lights or upper abdominal pain",
  "Fits or fainting",
  "Chest pain or breathlessness",
  "Regular painful contractions before your due date",
];

const careServices = [
  "Early registration and detailed history review",
  "More frequent visits when required",
  "Ultrasound on a Voluson E22 3D and 4D machine",
  "Growth scans and checks on amniotic fluid and the placenta",
  "Blood and urine tests, including screening for gestational diabetes, anaemia and thyroid problems",
  "Blood pressure and weight monitoring",
  "Nutrition and lifestyle counselling",
  "Review of medicines for pregnancy safety",
  "Delivery planning and preparation",
  "Postnatal follow-up and newborn guidance",
];

const doctorQuestions = [
  "Why is my pregnancy considered high-risk, in simple words?",
  "How often will I need visits and scans?",
  "What readings should I record at home, and what limits should make me call?",
  "What activity and diet changes do I need?",
  "Which of my medicines are safe in pregnancy?",
  "What is the plan for delivery, and could it change?",
  "Where will the delivery take place? Please confirm this directly with the clinic.",
];

const planningSteps = [
  "Book appointments in advance and confirm timings",
  "Ask which scans and tests must be done at the clinic, and which routine checks may be possible locally if the doctor agrees",
  "Carry your antenatal card and all reports to every visit",
  "Travel with a family member where possible",
  "Take breaks on long journeys, and ask whether travel limits apply as your pregnancy advances",
  "Identify the nearest hospital with emergency and delivery facilities to your home, and save its number",
  "Keep transport on standby as your due date nears",
];

const everydaySteps = [
  "Attend every scheduled visit and scan",
  "Take medicines and supplements exactly as prescribed",
  "Eat balanced meals with adequate protein, vegetables, fruit and fluids",
  "Follow doctor-approved activity and rest guidance",
  "Avoid smoking, alcohol, tobacco and self-medication",
  "Sleep well and manage stress",
];

const trustPoints = [
  {
    title: "Expertise with heart",
    description:
      "Training in laparoscopy, fertility treatment and women's health, with a compassionate approach",
  },
  {
    title: "Continuity you can count on",
    description: "An integrated team that knows your history",
  },
  {
    title: "Advanced imaging",
    description: "A Voluson E22 3D/4D ultrasound machine",
  },
  {
    title: "Complete care in one place",
    description: "Fertility, pregnancy, delivery and paediatric services",
  },
  {
    title: "Honest guidance",
    description: "Advice on the safest mode of delivery",
  },
];

const conditionCare = [
  {
    title: "Gestational diabetes",
    description:
      "Managed with diet, activity, blood sugar monitoring and sometimes medicines. Good control lowers the risk of an oversized baby and delivery complications.",
  },
  {
    title: "High blood pressure and pre-eclampsia",
    description: "Regular checks catch changes early.",
  },
  {
    title: "Thyroid disease",
    description:
      "Levels are monitored through pregnancy, since medicine needs often change.",
  },
  {
    title: "History of miscarriage",
    description:
      "Early scans and careful follow-up can ease anxiety and improve outcomes where a treatable cause is found.",
  },
  {
    title: "Twin pregnancy",
    description:
      "More frequent scans, closer growth monitoring and careful delivery planning.",
  },
  {
    title: "Pregnancy after IVF",
    description:
      "Often monitored more closely. If you were treated at this clinic, your fertility history is already known.",
  },
  {
    title: "Low-lying placenta",
    description:
      "Ultrasound monitoring and activity advice. A caesarean may be recommended if the placenta still covers the cervix near term.",
  },
];

export default function HighRiskPregnancyDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-8 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                High Risk Pregnancy Doctor near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p className="leading-7">
                &quot;High-risk&quot; is a frightening phrase. It does not
                mean something will go wrong. It means your pregnancy needs
                closer attention, more visits and a doctor who plans ahead.
                Most women with high-risk pregnancies go on to have healthy
                babies.
              </p>

              <p className="leading-7">
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong>{" "}
                is an option to consider. The clinic is located in{" "}
                <strong>Moradabad</strong>, not in Amroha, and women from
                Amroha and surrounding areas travel there for pregnancy care.
                Its philosophy is <strong>&quot;Her Health First.&quot;</strong>{" "}
                You are listened to, informed and never rushed.
              </p>
            </header>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Fears and Facts
              </h2>

              {fearsAndFacts.map((item) => (
                <div
                  key={item.fear}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="font-semibold text-gray-900">
                    Fear: {item.fear}
                  </h3>
                  <p className="mt-2 leading-7">
                    <strong className="text-[#74122E]">Fact: </strong>
                    {item.fact}
                  </p>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Makes a Pregnancy High-Risk?
              </h2>

              <ul className="list-disc space-y-3 pl-6 leading-7">
                {highRiskFactors.map((factor) => (
                  <li key={factor}>{factor}</li>
                ))}
              </ul>

              <p className="rounded-xl bg-gray-50 p-5 font-medium leading-7 text-gray-900">
                One factor does not guarantee a problem. It guides the level
                of care.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                The Traffic-Light Guide to Symptoms
              </h2>

              <p className="leading-7">
                This is general guidance, not a diagnosis. When unsure, call
                your doctor. Your own doctor may give you different limits.
              </p>

              <div className="rounded-xl border border-green-200 bg-green-50 p-5">
                <h3 className="text-xl font-bold text-green-900">
                  Green: Usually fine, mention at your next visit
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-green-950">
                  {greenSymptoms.map((symptom) => (
                    <li key={symptom}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <h3 className="text-xl font-bold text-amber-900">
                  Amber: Call your doctor the same day
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-amber-950">
                  {amberSymptoms.map((symptom) => (
                    <li key={symptom}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="text-xl font-bold text-red-900">
                  Red: Go to the nearest hospital immediately
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-red-950">
                  {redSymptoms.map((symptom) => (
                    <li key={symptom}>{symptom}</li>
                  ))}
                </ul>

                <p className="mt-4 font-semibold leading-7 text-red-900">
                  In a red situation, go to the nearest emergency facility
                  with delivery facilities. Do not delay care to travel to
                  another city. Call the clinic once you are on your way or
                  settled.
                </p>
              </div>

              <p className="font-medium leading-7 text-gray-900">
                Stick the guide on your fridge, and share it with your family.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                High-Risk Pregnancy Care at Dr. Priyanka Gynaec
              </h2>

              <p className="leading-7">
                Care is tailored to your risk profile and includes:
              </p>

              <ul className="list-disc space-y-3 pl-6 leading-7">
                {careServices.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Condition by Condition
              </h2>

              {conditionCare.map((condition) => (
                <div
                  key={condition.title}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {condition.title}
                  </h3>
                  <p className="mt-2 leading-7">{condition.description}</p>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Normal Delivery in a High-Risk Pregnancy
              </h2>

              <p className="leading-7">
                Dr. Priyanka Pachauri prioritises normal delivery wherever it
                is safe for mother and baby. A high-risk pregnancy does not
                automatically rule it out. The timing and mode of delivery
                are decided individually, based on your health, the
                baby&apos;s condition and how the pregnancy progresses. If a
                caesarean is safer, the reasons are explained openly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Questions to Ask Your Doctor
              </h2>

              <ol className="list-decimal space-y-3 pl-6 leading-7">
                {doctorQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Seeking a Second Opinion
              </h2>

              <p className="leading-7">
                If you have been told your pregnancy is high-risk elsewhere,
                or want to confirm a plan, bring all your reports, scans and
                prescriptions. Your doctor will review them, explain whether
                the plan fits and answer your questions. Your concerns are
                discussed respectfully, and your medical details are kept
                confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Care From Amroha
              </h2>

              <ul className="list-disc space-y-3 pl-6 leading-7">
                {planningSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Everyday Steps for a Safer Pregnancy
              </h2>

              <ul className="list-disc space-y-3 pl-6 leading-7">
                {everydaySteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>

              <p className="leading-7">
                Extra visits and tests can create stress, and feeling anxious
                is natural. Share your worries with your doctor, since clear
                information often reduces fear. Lean on family support, and
                ask for help if sadness or anxiety becomes hard to manage.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                After Delivery
              </h2>

              <p className="leading-7">
                Women with high-risk pregnancies may need extra follow-up for
                blood pressure, blood sugar or recovery. The clinic also
                offers newborn care, paediatric consultations and
                vaccinations.
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
