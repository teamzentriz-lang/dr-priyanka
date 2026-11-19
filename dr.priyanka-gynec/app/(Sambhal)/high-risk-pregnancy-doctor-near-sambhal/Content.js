import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Sambhal?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Sambhal and nearby areas travel there for pregnancy care.",
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

export default function HighRiskPregnancyDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                High Risk Pregnancy Doctor near Sambhal – Dr. Priyanka
                Pachauri, Moradabad
              </h1>

              <p>
                A &quot;high-risk&quot; label can feel alarming, but it simply
                means your pregnancy needs closer attention. With a clear plan
                and a doctor who explains things plainly, many women with
                high-risk pregnancies deliver healthy babies.
              </p>

              <p>
                If you live in Sambhal, <strong>Dr. Priyanka Pachauri</strong>{" "}
                of Dr. Priyanka Gynaec in neighbouring{" "}
                <strong>Moradabad</strong> is an option to consider. The clinic
                is located in <strong>Moradabad</strong>, not in Sambhal, and
                women from Sambhal and surrounding areas travel there for
                pregnancy care. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong> You are listened
                to, informed and never rushed.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Makes a Pregnancy High-Risk?
              </h2>

              <p>
                A pregnancy is high-risk when the mother, the baby or both
                have a greater chance of complications. Common reasons
                include:
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>Diabetes, or gestational diabetes</li>
                <li>High blood pressure or pre-eclampsia</li>
                <li>Thyroid disorders</li>
                <li>Anaemia</li>
                <li>Previous miscarriage, stillbirth or preterm birth</li>
                <li>Previous caesarean or uterine surgery</li>
                <li>Twin or multiple pregnancy</li>
                <li>Pregnancy after IVF or long-standing infertility</li>
                <li>Older maternal age</li>
                <li>Placenta problems or slow baby growth</li>
              </ul>

              <p>
                One factor does not guarantee a problem. It guides the level
                of care you need.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Your One-Page Pregnancy Summary Sheet
              </h2>

              <p>
                When your doctor is in another city, a single page that sums
                up your pregnancy can be very useful, especially if you must
                visit a local hospital in an emergency. Keep it in your
                antenatal file and on your phone.
              </p>

              <p>Write down:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Name, age and contact number</strong>
                </li>
                <li>
                  <strong>Expected due date</strong>
                </li>
                <li>
                  <strong>Blood group</strong>
                </li>
                <li>
                  <strong>Reason the pregnancy is high-risk</strong> (for
                  example, diabetes or previous caesarean)
                </li>
                <li>
                  <strong>Current medicines and doses</strong>
                </li>
                <li>
                  <strong>Allergies</strong>
                </li>
                <li>
                  <strong>Key test results and dates</strong>
                </li>
                <li>
                  <strong>Latest scan date and main findings</strong>
                </li>
                <li>
                  <strong>Doctor&apos;s name and the clinic&apos;s phone number</strong>
                </li>
                <li>
                  <strong>Emergency contact and the nearest hospital&apos;s number</strong>
                </li>
              </ul>

              <p>
                Update it after every visit, and ask your doctor to check that
                it is accurate.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What to Track at Home
              </h2>

              <p>
                Your doctor may ask you to record some readings. Only do this
                if advised.
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Blood pressure:</strong> Note the date, time and
                  reading
                </li>
                <li>
                  <strong>Blood sugar:</strong> Note readings as instructed,
                  and meals if asked
                </li>
                <li>
                  <strong>Weight:</strong> At intervals your doctor suggests
                </li>
                <li>
                  <strong>Baby movements:</strong> Follow the method your
                  doctor teaches you
                </li>
                <li>
                  <strong>Swelling, headaches or vision changes:</strong> Note
                  when they appear
                </li>
              </ul>

              <p>
                Bring the log to every visit. Do not adjust medicines yourself
                based on readings. Call your doctor first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                High-Risk Pregnancy Care at Dr. Priyanka Gynaec
              </h2>

              <p>
                Care is tailored to your risk profile and includes:
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>Early registration and detailed history review</li>
                <li>More frequent visits when required</li>
                <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
                <li>
                  Growth scans and checks on amniotic fluid and the placenta
                </li>
                <li>
                  Blood and urine tests, including screening for gestational
                  diabetes, anaemia and thyroid problems
                </li>
                <li>Blood pressure and weight monitoring</li>
                <li>Nutrition and lifestyle counselling</li>
                <li>Review of medicines for pregnancy safety</li>
                <li>Delivery planning and preparation</li>
                <li>Postnatal follow-up and newborn guidance</li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Condition by Condition
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-900">
                    Gestational diabetes
                  </h3>
                  <p>
                    Managed with diet, activity, blood sugar monitoring and
                    sometimes medicines. Good control lowers the risk of an
                    oversized baby and delivery complications.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    High blood pressure and pre-eclampsia
                  </h3>
                  <p>
                    Regular checks catch changes early. Severe headache,
                    blurred vision, sudden swelling or upper abdominal pain
                    need urgent attention.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Thyroid disease</h3>
                  <p>
                    Levels are monitored through pregnancy, since medicine
                    needs often change.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    History of miscarriage
                  </h3>
                  <p>
                    Early scans and careful follow-up can ease anxiety and
                    improve outcomes where a treatable cause is found.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Twin pregnancy</h3>
                  <p>
                    More frequent scans, closer growth monitoring and careful
                    delivery planning.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    Pregnancy after IVF
                  </h3>
                  <p>
                    Often monitored more closely. If you were treated at this
                    clinic, your fertility history is already known.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Low-lying placenta</h3>
                  <p>
                    Ultrasound monitoring and activity advice. A caesarean may
                    be recommended if the placenta still covers the cervix
                    near term.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Normal Delivery in a High-Risk Pregnancy
              </h2>

              <p>
                Dr. Priyanka Pachauri prioritises normal delivery wherever it
                is safe for mother and baby. A high-risk pregnancy does not
                automatically rule it out. The timing and mode of delivery are
                decided individually, based on your health, the baby&apos;s
                condition and how the pregnancy progresses. If a caesarean is
                safer, the reasons are explained openly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Briefing Your Family
              </h2>

              <p>Everyone at home should know the plan. Sit down together and cover:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  Why the pregnancy is considered high-risk, in simple words
                </li>
                <li>Which visits and scans cannot be skipped</li>
                <li>Which warning signs mean going to hospital at once</li>
                <li>
                  Who accompanies you, who drives and who looks after other
                  children
                </li>
                <li>
                  That medicines and diet advice come from the doctor, not
                  from home remedies
                </li>
                <li>
                  How to support rest, nutrition and emotional wellbeing
                </li>
              </ul>

              <p>
                Families that understand the plan are quicker to act when it
                matters.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Care From Sambhal
              </h2>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900">
                  Ask your doctor:
                </h3>

                <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                  <li>How often will I need to come to the clinic?</li>
                  <li>
                    Which scans and tests must be done at the clinic, and
                    which routine checks may be possible locally if you agree?
                  </li>
                  <li>What readings should I record, and when should I call?</li>
                  <li>
                    Where will the delivery take place? Please confirm this
                    directly with the clinic.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-gray-900">Plan travel:</h3>

                <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                  <li>Book appointments in advance and confirm timings</li>
                  <li>Travel with a family member where possible</li>
                  <li>Take breaks on long journeys and stay hydrated</li>
                  <li>Ask whether travel limits apply as your pregnancy advances</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Emergency Plan
              </h2>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Identify the nearest hospital</strong> with
                  emergency and delivery facilities to your home, and save its
                  number
                </li>
                <li>
                  <strong>Keep your summary sheet and antenatal file</strong>{" "}
                  within reach
                </li>
                <li>
                  <strong>Arrange transport</strong> in advance as your due
                  date nears
                </li>
                <li>
                  <strong>Know when to go locally.</strong> In an emergency, go
                  to the nearest emergency facility immediately. Do not delay
                  care to travel to another city.
                </li>
              </ul>
            </section>

            <section className="space-y-4 rounded-xl border border-red-200 bg-red-50 p-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs: Do Not Wait for Your Next Appointment
              </h2>

              <p>Seek urgent care if you have:</p>

              <ul className="list-disc space-y-2 pl-6 marker:text-red-600">
                <li>Vaginal bleeding</li>
                <li>Leaking fluid</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Reduced or absent baby movements</li>
                <li>
                  Severe headache, blurred vision or sudden swelling of the
                  face or hands
                </li>
                <li>High fever</li>
                <li>Regular painful contractions before your due date</li>
                <li>Breathlessness or chest pain</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Everyday Steps for a Safer Pregnancy
              </h2>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>Attend every scheduled visit and scan</li>
                <li>Take medicines and supplements exactly as prescribed</li>
                <li>
                  Eat balanced meals with adequate protein, vegetables, fruit
                  and fluids
                </li>
                <li>Follow doctor-approved activity and rest guidance</li>
                <li>Avoid smoking, alcohol, tobacco and self-medication</li>
                <li>Sleep well and manage stress</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                After Delivery
              </h2>

              <p>
                Women with high-risk pregnancies may need extra follow-up for
                blood pressure, blood sugar or recovery. The clinic also
                offers newborn care, paediatric consultations and vaccinations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and women&apos;s health,
                  with a compassionate approach
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Advanced imaging:</strong> A Voluson E22 3D/4D
                  ultrasound machine
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Fertility,
                  pregnancy, delivery and paediatric services
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice on the safest mode
                  of delivery
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
                <div key={faq.q} className="border-b border-gray-200 pb-5">
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