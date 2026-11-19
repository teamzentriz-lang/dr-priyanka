import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Sambhal?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Sambhal and nearby areas travel there for antenatal care.",
  },
  {
    q: "When should we book the first antenatal visit?",
    a: "As soon as the pregnancy test is positive, ideally within the first 6 to 8 weeks.",
  },
  {
    q: "Can the husband or family attend the visits?",
    a: "Yes, if the mother is comfortable. She can also choose to speak with the doctor privately.",
  },
  {
    q: "How often are antenatal checkups needed?",
    a: "Usually monthly in early and mid-pregnancy, becoming more frequent in the last trimester. The doctor will set a schedule based on the mother's health and risk factors.",
  },
  {
    q: "Does the clinic have 3D/4D ultrasound?",
    a: "Yes. The clinic uses a Voluson E22 3D and 4D ultrasound machine. Fetal sex determination is prohibited by law in India and is not performed.",
  },
  {
    q: "Can the clinic manage high-risk pregnancies?",
    a: "Yes. High-risk pregnancies are monitored with closer follow-up, appropriate tests and timely decisions.",
  },
  {
    q: "Is normal delivery possible?",
    a: "Yes. Normal delivery is prioritised whenever it is safe for mother and baby. A caesarean is advised only when medically necessary.",
  },
  {
    q: "Where will the delivery take place?",
    a: "Please confirm this directly with the clinic when you book, and discuss the plan during antenatal visits.",
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

export default function AntenatalCareDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Antenatal Care Doctor near Sambhal – A Guide for Families
            </h1>

            <p>
              Pregnancy is not only a medical journey. It involves the whole
              family. Husbands, in-laws, parents and siblings all play a part in
              how a woman eats, rests, travels and feels. When families
              understand antenatal care, mothers get better support and make
              better decisions.
            </p>

            <p>
              If you are looking for an antenatal care doctor near Sambhal,{" "}
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring <strong>Moradabad</strong> is an option to consider.
              The clinic is located in <strong>Moradabad</strong>, not in
              Sambhal, and women from Sambhal and surrounding areas travel
              there for pregnancy care. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong> The mother is
              listened to, informed and never rushed.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Antenatal Care?
              </h2>
              <p>
                Antenatal care is the medical care a woman receives from
                confirmation of pregnancy until delivery. It includes
                check-ups, blood tests, ultrasound scans, supplements,
                nutrition advice and emotional support. Its goals are to keep
                the mother healthy, monitor the baby, detect complications
                early and prepare for a safe delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Month-by-Month Planner
              </h2>
              <p>
                Your doctor will set the exact schedule. This is a general
                picture.
              </p>

              <div className="space-y-4">
                {[
                  {
                    month: "Month 1 to 2",
                    detail:
                      "Confirm the pregnancy, book the first visit within 6 to 8 weeks, begin folic acid and other prescribed supplements, and have a dating scan.",
                  },
                  {
                    month: "Month 3",
                    detail:
                      "Blood tests and a first trimester screening scan, as advised. Nausea and tiredness are common.",
                  },
                  {
                    month: "Month 4 to 5",
                    detail:
                      "Many women feel better. A detailed anomaly scan is usually done around the middle of pregnancy.",
                  },
                  {
                    month: "Month 6",
                    detail:
                      "Screening for gestational diabetes, often in the later part of this period. Iron and calcium as prescribed.",
                  },
                  {
                    month: "Month 7 to 8",
                    detail:
                      "Visits become more frequent. Growth scans check the baby's size, position and fluid, and blood pressure is monitored closely.",
                  },
                  {
                    month: "Month 9",
                    detail:
                      "Final preparation. Discuss birth plans, signs of labour and newborn care. Pack the hospital bag.",
                  },
                ].map((item) => (
                  <div
                    key={item.month}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <h3 className="font-semibold text-gray-900">
                      {item.month}
                    </h3>
                    <p className="mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Husbands Can Help
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Attend visits when possible.</strong> Hearing the
                  doctor first-hand helps you support her better.
                </li>
                <li>
                  <strong>Learn the warning signs</strong> so you can act
                  quickly.
                </li>
                <li>
                  <strong>Share the load at home,</strong> including heavy
                  lifting and long hours on her feet.
                </li>
                <li>
                  <strong>Make sure she eats well and rests,</strong>{" "}
                  especially in the first and last months.
                </li>
                <li>
                  <strong>Help plan travel</strong> to appointments, and keep
                  transport ready near the due date.
                </li>
                <li>
                  <strong>Listen without dismissing.</strong> Worry,
                  tearfulness and tiredness are common and real.
                </li>
                <li>
                  <strong>Support medical advice,</strong> including
                  supplements and scan schedules, even when others at home
                  disagree.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Other Family Members Can Help
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>In-laws and parents:</strong> Offer rest and
                  nourishing food, and avoid pressuring her about delivery type
                  or the baby's sex.
                </li>
                <li>
                  <strong>Siblings and friends:</strong> Offer company, and
                  help with errands.
                </li>
                <li>
                  <strong>Everyone:</strong> Check with the doctor before
                  giving herbal remedies, home medicines or traditional
                  treatments.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Myths Families Often Hear
              </h2>

              <div className="space-y-4">
                {[
                  {
                    myth: "She should eat double.",
                    fact: "She needs extra nutrients, not double the food. Balanced meals and prescribed supplements matter more.",
                  },
                  {
                    myth: "She should rest completely.",
                    fact: "Gentle activity is usually encouraged unless the doctor advises otherwise.",
                  },
                  {
                    myth: "Scans harm the baby.",
                    fact: "Ultrasound does not use radiation, and it is considered safe when done for medical reasons.",
                  },
                  {
                    myth: "Normal delivery depends only on her strength.",
                    fact: "It depends on the baby's position and size, her health and how labour progresses. Sometimes a caesarean is medically necessary.",
                  },
                  {
                    myth: "Home or herbal remedies are always safe.",
                    fact: "Some can be harmful in pregnancy. Ask the doctor first.",
                  },
                ].map((item) => (
                  <div
                    key={item.myth}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <p className="font-semibold text-gray-900">
                      Myth: {item.myth}
                    </p>
                    <p className="mt-2">
                      <strong>Fact:</strong> {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Services at Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Early registration and trimester-wise consultations</li>
                <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
                <li>Blood and urine tests</li>
                <li>
                  Screening for gestational diabetes, thyroid problems and
                  anaemia
                </li>
                <li>Blood pressure and weight monitoring</li>
                <li>Nutrition and lifestyle counselling</li>
                <li>High-risk pregnancy monitoring</li>
                <li>Labour and delivery preparation</li>
                <li>
                  Postnatal follow-up, newborn care and vaccinations
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Normal Delivery and Safe Birth
              </h2>
              <p>
                Dr. Priyanka Pachauri prioritises{" "}
                <strong>normal vaginal delivery</strong> wherever it is safe
                for mother and baby. If a caesarean becomes necessary, the
                reasons are explained openly so the mother and family
                understand the decision. Families should avoid demanding a
                particular mode of delivery before the doctor has assessed the
                situation.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                High-Risk Pregnancy: What Families Should Know
              </h2>
              <p>
                A pregnancy may be considered high-risk if the mother has
                diabetes, high blood pressure, thyroid disease, a history of
                miscarriage or preterm birth, a previous caesarean, twins,
                pregnancy after IVF or an older maternal age. This does not
                mean something will go wrong. It means closer monitoring and
                timely decisions. If the doctor labels the pregnancy
                high-risk, ask what the plan is and how the family can help.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Important Note on Fetal Sex
              </h2>
              <p>
                Under Indian law (the PCPNDT Act), determining or disclosing
                the sex of the baby during ultrasound is{" "}
                <strong>strictly prohibited</strong>. Dr. Priyanka Gynaec does
                not perform or disclose fetal sex determination. Families
                should not ask for it. The focus of every scan is the health
                of mother and baby.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Visits From Sambhal
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Book appointments in advance and confirm timings</li>
                <li>
                  Ask which visits and scans must be done at the clinic, and
                  which routine checks may be possible locally if the doctor
                  agrees
                </li>
                <li>
                  Carry the antenatal card and all reports to every visit
                </li>
                <li>Travel with a family member, and take breaks on long journeys</li>
                <li>
                  Ask whether any travel limits apply as the pregnancy advances
                </li>
                <li>Keep photos of every report on a phone as a backup</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                The Family Emergency Plan
              </h2>
              <p>Every family should agree on this together.</p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Know the warning signs:</strong> Bleeding, leaking
                  fluid, severe abdominal pain, reduced baby movements, severe
                  headache, blurred vision, sudden swelling of the face or
                  hands, high fever, or regular painful contractions before
                  the due date.
                </li>
                <li>
                  <strong>Identify the nearest hospital</strong> with emergency
                  and delivery facilities to your home, and save its number.
                </li>
                <li>
                  <strong>Keep the antenatal file</strong> within reach at all
                  times.
                </li>
                <li>
                  <strong>Arrange transport</strong> in advance, and keep it on
                  standby near the due date.
                </li>
                <li>
                  <strong>Assign roles:</strong> who drives, who accompanies
                  her, who looks after other children.
                </li>
                <li>
                  <strong>Confirm the delivery plan</strong> with the clinic,
                  including where the delivery will take place.
                </li>
              </ul>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <p className="font-semibold text-red-800">
                  Important emergency advice
                </p>
                <p className="mt-2 text-red-900">
                  In an emergency, go to the nearest emergency facility
                  immediately. Do not delay care to travel to another city.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hospital Bag Checklist
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Antenatal card, reports and identification</li>
                <li>Comfortable clothes and sanitary pads</li>
                <li>Toiletries and a towel</li>
                <li>Baby clothes, wraps and diapers</li>
                <li>Phone, charger and important contact numbers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Support
              </h2>
              <p>
                Hormones, tiredness and worry can affect mood in pregnancy.
                Families should watch for persistent sadness, panic or loss of
                interest in daily life, and encourage her to speak to the
                doctor. Support is available.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                After the Baby Arrives
              </h2>
              <p>
                Care continues after delivery. The clinic supports recovery,
                breastfeeding, contraception counselling and emotional
                wellbeing. Paediatric consultations, vaccinations and newborn
                care are available, so mother and baby can continue with the
                same trusted team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Families Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and women's health, with a
                  compassionate approach.
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows the mother's history.
                </li>
                <li>
                  <strong>Advanced imaging:</strong> Detailed assessment with
                  a Voluson E22 3D/4D ultrasound machine.
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Fertility,
                  pregnancy, delivery and paediatric services.
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice on the safest mode
                  of delivery.
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
                <h3 className="text-xl font-bold">
                  Dr. Priyanka Gynaec
                </h3>
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