import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Amroha?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for antenatal care.",
  },
  {
    q: "When should I book my first antenatal visit?",
    a: "As soon as your pregnancy test is positive, ideally within the first 6 to 8 weeks.",
  },
  {
    q: "Which tests are done in pregnancy?",
    a: "Commonly haemoglobin, blood group, blood sugar, thyroid and urine tests, plus ultrasound scans and screening as advised. Your doctor chooses tests based on your health.",
  },
  {
    q: "Does a screening test give a final answer?",
    a: "No. Screening estimates risk. Your doctor will explain what a result means and whether further discussion or testing is advised.",
  },
  {
    q: "Can I work during pregnancy?",
    a: "Many women can, depending on their health and the nature of their job. Ask your doctor about activity limits and when to plan leave.",
  },
  {
    q: "How often are antenatal checkups needed?",
    a: "Usually monthly in early and mid-pregnancy, becoming more frequent in the last trimester. Your doctor will set a schedule based on your health and risk factors.",
  },
  {
    q: "Can the baby's sex be told during the scan?",
    a: "No. Fetal sex determination is prohibited by law in India, and the clinic does not perform or disclose it.",
  },
  {
    q: "Where will my delivery take place?",
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

const testTracker = [
  "Test name",
  "Date done",
  "Result in one line",
  "Doctor's comment",
  "Next due date",
];

export default function AntenatalCareDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Antenatal Care Doctor near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                Pregnancy comes with a lot of paperwork: blood tests, scans,
                screenings and forms. Many women sign up for each test without
                being sure what it checks or why it matters. Understanding the
                purpose of each one makes antenatal care less confusing and
                helps you ask better questions.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring{" "}
                <strong>Moradabad</strong> is an option to consider. The clinic
                is located in <strong>Moradabad</strong>, not in Amroha, and
                women from Amroha and surrounding areas travel there for
                pregnancy care. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong> You are listened
                to, informed and never rushed.
              </p>
            </header>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Tests in Plain Language
              </h2>

              <p>
                Your doctor decides which tests you need and when. This guide
                explains the common ones. It is general information, not a
                personal prescription.
              </p>

              <div className="space-y-4">
                <p>
                  <strong>Haemoglobin and blood count.</strong> Shows whether
                  you are anaemic. Anaemia is common in pregnancy and treatable
                  with iron and diet.
                </p>

                <p>
                  <strong>Blood group and Rh factor.</strong> Matters for
                  planning if you are Rh-negative, so that the baby is
                  protected.
                </p>

                <p>
                  <strong>Blood sugar tests.</strong> Screen for gestational
                  diabetes, which can develop in pregnancy even if you never
                  had diabetes before. Early detection allows diet, activity
                  and, if needed, medicines to protect you and the baby.
                </p>

                <p>
                  <strong>Thyroid tests.</strong> Thyroid hormones support the
                  baby&apos;s development. Medicine needs often change during
                  pregnancy.
                </p>

                <p>
                  <strong>Urine tests.</strong> Check for infection and protein.
                  Protein in the urine, along with raised blood pressure, can
                  signal pre-eclampsia.
                </p>

                <p>
                  <strong>Infection screening.</strong> Blood tests may check
                  for certain infections, as advised, so they can be treated or
                  managed to protect the baby.
                </p>

                <p>
                  <strong>Blood pressure and weight checks.</strong> Not a lab
                  test, but one of the most useful measures at every visit.
                </p>

                <p>
                  <strong>Ultrasound scans.</strong> A dating scan early on, a
                  detailed anomaly scan around the middle of pregnancy and
                  growth scans later, as advised. The clinic uses a Voluson E22
                  3D and 4D ultrasound machine.
                </p>
              </div>

              <p>
                Ask your doctor why each test is advised. Keep every report in
                date order.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                About Screening Tests
              </h2>

              <p>
                Screening tests estimate risk. They do not give a final answer.
                A &quot;high-risk&quot; screening result does not mean the baby
                has a condition. It means further discussion or testing may be
                offered. A &quot;low-risk&quot; result is reassuring but not a
                guarantee. Your doctor will explain what each result means for
                you.
              </p>
            </section>

            <section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Important Note on Fetal Sex
              </h2>

              <p>
                Under Indian law (the PCPNDT Act), determining or disclosing
                the sex of the baby during ultrasound is{" "}
                <strong>strictly prohibited</strong>. Dr. Priyanka Gynaec does
                not perform or disclose fetal sex determination. The focus of
                every scan is the health of mother and baby.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                A Simple Test Tracker
              </h2>

              <p>Keep a table on paper or your phone:</p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full min-w-[400px] border-collapse text-left text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">
                        Test Tracker
                      </th>
                      <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {testTracker.map((item) => (
                      <tr key={item}>
                        <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-800">
                          {item}
                        </td>
                        <td className="border-b border-gray-100 px-4 py-3 text-gray-500">
                          ____________________
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Bring it to every visit. It prevents duplicate tests and helps
                your doctor spot changes over time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Services at Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
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
                For Working Women
              </h2>

              <p>
                Many women in Amroha work through pregnancy, whether in
                offices, schools, shops or at home. A few habits help.
              </p>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Plan appointments early.</strong> Book the next visit
                  before you leave, and add it to your calendar.
                </li>
                <li>
                  <strong>Tell your employer what you need,</strong> such as
                  time for scans, within your workplace&apos;s policies.
                </li>
                <li>
                  <strong>Avoid long standing and heavy lifting,</strong> and
                  take breaks to walk and sit.
                </li>
                <li>
                  <strong>Carry water and healthy snacks</strong> to work.
                </li>
                <li>
                  <strong>Keep your antenatal card and a short summary of your
                  pregnancy</strong> in your bag.
                </li>
                <li>
                  <strong>Do not ignore warning signs</strong> because of work
                  pressure.
                </li>
                <li>
                  <strong>Plan your leave</strong> with your doctor, including
                  when to stop working, based on your health and job.
                </li>
              </ul>

              <p className="font-semibold text-gray-900">
                Rest is part of antenatal care, not a luxury.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                If This Is Your Second Pregnancy
              </h2>

              <p>
                Second pregnancies are not simply a repeat of the first. Tell
                your doctor about:
              </p>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  How your first delivery went, including any caesarean, tears
                  or complications
                </li>
                <li>
                  Gestational diabetes or high blood pressure in the earlier
                  pregnancy
                </li>
                <li>The gap between pregnancies</li>
                <li>Any breastfeeding or health issues since</li>
                <li>
                  How you will manage a toddler during pregnancy and labour
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900">
                Other points to plan:
              </h3>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                <li>
                  <strong>Childcare</strong> during appointments, and for the
                  day of delivery.
                </li>
                <li>
                  <strong>Rest,</strong> which is harder with a toddler. Ask
                  family to help.
                </li>
                <li>
                  <strong>Delivery planning,</strong> especially if you had a
                  previous caesarean. Some women can attempt a trial of labour,
                  depending on the reason and the current pregnancy. Discuss
                  this early.
                </li>
                <li>
                  <strong>Preparing your older child</strong> for the new baby.
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
                reasons are explained openly so you understand the decision. A
                high-risk pregnancy, such as one with diabetes, high blood
                pressure, thyroid disease, previous miscarriage, twins or
                conception after IVF, receives closer monitoring and an
                individual plan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Nutrition Basics
              </h2>

              <ul className="list-disc space-y-2 pl-6 marker:text-[#8F1738]">
                <li>
                  Choose balanced meals with vegetables, fruit, pulses, grains,
                  dairy and adequate protein.
                </li>
                <li>
                  Take iron, folic acid and calcium exactly as prescribed.
                </li>
                <li>Drink plenty of fluids.</li>
                <li>
                  Avoid raw or undercooked foods and unpasteurised dairy.
                </li>
                <li>Limit caffeine.</li>
                <li>
                  Avoid smoking, alcohol and tobacco in any form.
                </li>
                <li>
                  Ask your doctor before taking any herbal remedy or home
                  medicine.
                </li>
              </ul>

              <p>
                Your doctor will tailor advice to your weight, blood tests and
                any conditions.
              </p>
            </section>

            <section className="space-y-5 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs: Do Not Wait for Your Next Appointment
              </h2>

              <p>Seek urgent medical care if you have:</p>

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

              <p className="font-semibold text-gray-900">
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Care From Amroha
              </h2>

              <ul className="list-disc space-y-3 pl-6 marker:text-[#8F1738]">
                <li>Book appointments in advance and confirm timings.</li>
                <li>
                  Ask which visits and scans must be done at the clinic, and
                  which routine checks may be possible locally if the doctor
                  agrees.
                </li>
                <li>
                  Carry your antenatal card and all reports to every visit.
                </li>
                <li>Travel with a family member where possible.</li>
                <li>
                  Take breaks on long journeys, and ask whether any travel
                  limits apply as your pregnancy advances.
                </li>
                <li>
                  Identify the nearest hospital with emergency and delivery
                  facilities to your home.
                </li>
                <li>
                  Confirm directly with the clinic where deliveries take
                  place, and discuss the plan during your visits.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                After the Baby Arrives
              </h2>

              <p>
                Care continues after delivery. The clinic supports recovery,
                breastfeeding, contraception counselling and emotional
                wellbeing. Paediatric consultations, vaccinations and newborn
                care are also available, so mother and baby can continue with
                the same trusted team.
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
                  with a compassionate approach.
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history.
                </li>
                <li>
                  <strong>Advanced imaging:</strong> A Voluson E22 3D/4D
                  ultrasound machine.
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
                      {faq.q}
                    </h3>

                    <p className="mt-2 leading-relaxed text-gray-700">
                      {faq.a}
                    </p>
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