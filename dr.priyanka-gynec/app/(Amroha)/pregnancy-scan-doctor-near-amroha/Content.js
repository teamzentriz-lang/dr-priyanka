import Link from "next/link";
import {
  Phone,
  Mail,
  Globe,
  MessageCircle,
} from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Amroha?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for pregnancy care.",
  },
  {
    q: "When should I have my first pregnancy scan?",
    a: "Usually in the early weeks after a positive pregnancy test, as advised by your doctor. Earlier scans are done if you have bleeding or pain.",
  },
  {
    q: "What does a low-lying placenta mean?",
    a: "The placenta sits low in the uterus. It often moves upward as pregnancy advances. Your doctor will monitor it with scans.",
  },
  {
    q: "Is the estimated fetal weight exact?",
    a: "No. It is an approximation based on measurements, and it can be off by a margin. Your doctor looks at growth over time.",
  },
  {
    q: 'What if my report says the baby is "breech"?',
    a: "Babies often change position until late in pregnancy. Your doctor will monitor and discuss options if it persists.",
  },
  {
    q: "Is ultrasound safe for my baby?",
    a: "Ultrasound does not use radiation, and it is considered safe when performed for medical reasons by trained professionals.",
  },
  {
    q: "Can the baby's sex be told during the scan?",
    a: "No. Fetal sex determination is prohibited by law in India, and the clinic does not perform or disclose it.",
  },
  {
    q: "Can a scan detect all problems in the baby?",
    a: "Ultrasound can detect many but not all conditions. Some issues become visible later in pregnancy or after birth, which is why regular antenatal follow-up is important.",
  },
  {
    q: "What are the clinic timings and scan fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: 'Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the "Book Appointment" option on www.gynaecologistmoradabad.com.',
  },
];

export default function PregnancyScanDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Pregnancy Scan Doctor near Amroha – Understand Your Scan Report
              </h1>

              <p>
                A pregnancy scan report is full of abbreviations and numbers.
                Many women leave the room holding a printout they cannot read,
                then search the internet and come away more worried. A
                plain-language guide helps, but your doctor&apos;s explanation
                always comes first.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring Moradabad is an option to
                consider. The clinic is located in Moradabad, not in Amroha,
                and women from Amroha and surrounding areas travel there for
                pregnancy care. It uses a Voluson E22 3D and 4D ultrasound
                machine, and scans are explained by the doctor who follows
                your pregnancy. Its philosophy is <strong>&quot;Her Health First.&quot;</strong>
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Numbers Alone Can Mislead
              </h2>

              <p>
                Normal ranges are wide and change week by week. A single
                number slightly above or below an average does not mean a
                problem. Doctors look at the whole picture: your dates, the
                trend across scans, your health and the baby&apos;s overall
                development. Please avoid comparing your report with charts
                you find online.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Plain-Language Scan Glossary
              </h2>

              <p>
                These terms appear in many reports. Your doctor will explain
                what they mean for you.
              </p>

              <div className="space-y-3">
                <p>
                  <strong>Gestational age (GA).</strong> How far along the
                  pregnancy is, in weeks and days, estimated from your last
                  period and measurements on the scan.
                </p>

                <p>
                  <strong>EDD (expected date of delivery).</strong> Your
                  estimated due date. Early scans give the most reliable
                  dating.
                </p>

                <p>
                  <strong>Crown-rump length (CRL).</strong> The baby&apos;s
                  length from head to bottom in early pregnancy, used to date
                  the pregnancy.
                </p>

                <p>
                  <strong>Fetal heart activity (FHA).</strong> Whether a
                  heartbeat is seen. In early pregnancy, this is a reassuring
                  sign.
                </p>

                <p>
                  <strong>Single or multiple pregnancy.</strong> The number of
                  babies.
                </p>

                <p>
                  <strong>Presentation.</strong> Which part of the baby is
                  nearest the birth canal. &quot;Cephalic&quot; means head-down,
                  the usual position by late pregnancy. &quot;Breech&quot;
                  means bottom or feet first. The baby often changes position
                  until late in pregnancy.
                </p>

                <p>
                  <strong>
                    Biparietal diameter (BPD), head circumference (HC),
                    abdominal circumference (AC), femur length (FL).
                  </strong>{" "}
                  Measurements of the baby&apos;s head, abdomen and thigh bone,
                  used to estimate growth.
                </p>

                <p>
                  <strong>Estimated fetal weight (EFW).</strong> A calculated
                  estimate of the baby&apos;s weight. It is approximate and can
                  be off by a margin, so treat it as a guide.
                </p>

                <p>
                  <strong>Liquor or amniotic fluid index (AFI).</strong> The
                  amount of fluid around the baby. Too little or too much needs
                  follow-up, and your doctor will explain why.
                </p>

                <p>
                  <strong>Placenta position.</strong> Where the placenta sits.
                  A low-lying placenta is often noted early and may move upward
                  as the uterus grows. If it still covers the cervix near term,
                  a caesarean may be advised.
                </p>

                <p>
                  <strong>Placental grade.</strong> A description of the
                  placenta&apos;s appearance. It is not usually a worry by
                  itself.
                </p>

                <p>
                  <strong>Cervical length.</strong> Sometimes measured in
                  selected pregnancies, as part of assessing the risk of early
                  labour.
                </p>

                <p>
                  <strong>Doppler.</strong> A technique that checks blood flow
                  in the umbilical cord and the baby&apos;s vessels, used in
                  selected pregnancies.
                </p>

                <p>
                  <strong>Nuchal translucency (NT).</strong> A fluid measurement
                  at the back of the baby&apos;s neck, used in first trimester
                  screening together with blood tests. It is a risk estimate,
                  not a diagnosis.
                </p>

                <p>
                  <strong>Anomaly scan.</strong> A detailed mid-pregnancy scan
                  checking the baby&apos;s head, brain, face, spine, heart,
                  abdomen, kidneys and limbs.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When Wording Sounds Alarming
              </h2>

              <p>Some phrases in reports sound worse than they are.</p>

              <div className="space-y-3">
                <p>
                  <strong>&quot;Echogenic focus&quot; or &quot;soft marker.&quot;</strong>{" "}
                  An incidental finding that is often normal. Your doctor will
                  explain whether any follow-up is advised.
                </p>

                <p>
                  <strong>&quot;Low-lying placenta.&quot;</strong> Often resolves
                  as pregnancy advances.
                </p>

                <p>
                  <strong>&quot;Small for dates&quot; or &quot;large for dates.&quot;</strong>{" "}
                  The baby may simply be a constitutionally small or large
                  baby. A repeat scan tracks growth.
                </p>

                <p>
                  <strong>&quot;Borderline liquor.&quot;</strong> Fluid levels
                  can change, so a repeat measurement is common.
                </p>

                <p>
                  <strong>&quot;Suboptimal views.&quot;</strong> The baby&apos;s
                  position or movement made some pictures hard. A repeat often
                  helps.
                </p>
              </div>

              <p className="rounded-xl bg-gray-50 p-4 font-medium text-gray-900">
                Ask your doctor: &quot;What does this mean for my baby, and do
                we need to do anything?&quot;
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Scans Through Pregnancy
              </h2>

              <p>
                Timing varies, and your doctor will advise the schedule that
                suits you.
              </p>

              <div className="space-y-3">
                <p>
                  <strong>Early (dating) scan:</strong> Confirms the pregnancy
                  is in the uterus, shows the heartbeat, counts the babies and
                  sets the due date. If you have bleeding or pain early on, a
                  scan helps find the cause.
                </p>

                <p>
                  <strong>First trimester screening:</strong> Usually near the
                  end of the first trimester, often with blood tests.
                </p>

                <p>
                  <strong>Anomaly scan:</strong> Around the middle of pregnancy.
                </p>

                <p>
                  <strong>Growth scans:</strong> In later months, tracking size,
                  position and fluid.
                </p>

                <p>
                  <strong>Doppler studies:</strong> In selected pregnancies.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                2D, 3D and 4D
              </h2>

              <p>
                2D is the standard flat view used for measurements and most
                medical assessments. 3D builds a three-dimensional picture
                that can help show surface structures in selected situations.
                4D is a 3D image shown moving in real time. 2D remains the
                foundation of routine pregnancy assessment, and your doctor
                will choose what is useful for you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Is Ultrasound Safe?
              </h2>

              <p>
                Ultrasound does not use radiation, and it is considered safe
                when performed for medical reasons by trained professionals.
                Scans should be done when they add useful information, not for
                entertainment. Your doctor will advise the number and timing
                appropriate for you.
              </p>
            </section>

            <section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Important Note on Fetal Sex Determination
              </h2>

              <p>
                Under Indian law (the PCPNDT Act), determining or disclosing
                the sex of the baby during ultrasound is strictly prohibited.
                Dr. Priyanka Gynaec does not perform or disclose fetal sex
                determination. Families should not ask for it. The focus of
                every scan is the health of mother and baby.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Scans in High-Risk Pregnancy
              </h2>

              <p>
                Women with a high-risk pregnancy may need more frequent or
                specialised scans. Examples include diabetes, high blood
                pressure, twin pregnancy, previous miscarriage or preterm
                birth, slow baby growth, low-lying placenta, and pregnancy
                after IVF or long-standing infertility. Dr. Priyanka Pachauri
                provides high-risk pregnancy monitoring, so scan findings link
                directly to your treatment and delivery plan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for a Scan
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Book in advance, and ask about preparation. Early scans may
                  need a comfortably full bladder
                </li>
                <li>Wear comfortable two-piece clothing</li>
                <li>Bring your antenatal card, earlier scans and blood tests</li>
                <li>Write down your questions</li>
                <li>Bring your partner or a family member, if you wish</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                After the Scan
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Ask for a clear explanation of the main findings</li>
                <li>Ask whether anything needs a repeat scan, and why</li>
                <li>
                  Keep the report and images in one folder, and photograph
                  them
                </li>
                <li>Note the date of the next scan</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Ultrasound Cannot Detect Everything
              </h2>

              <p>
                Ultrasound can find many concerns, but not all. Some conditions
                become visible only later in pregnancy or after birth. This is
                why regular antenatal follow-up matters, along with blood tests
                and your doctor&apos;s assessment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Scans From Amroha
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Ask which scans you will need, and roughly when</li>
                <li>
                  Ask whether a scan can be planned on the same day as an
                  antenatal check-up, so you make fewer trips
                </li>
                <li>
                  Note the expected scan windows on your phone calendar once
                  your due date is set, and book early
                </li>
                <li>
                  Travel with a family member, and take breaks on long journeys
                </li>
                <li>
                  Ask whether any travel limits apply as your pregnancy
                  advances
                </li>
              </ul>
            </section>

            <section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs Between Scans
              </h2>

              <p>Contact your doctor or seek emergency care if you have:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Vaginal bleeding</li>
                <li>Severe or persistent abdominal pain</li>
                <li>Leaking fluid</li>
                <li>Reduced or absent baby movements</li>
                <li>
                  Severe headache, blurred vision or sudden swelling of the
                  face or hands
                </li>
                <li>High fever</li>
                <li>Regular painful contractions before your due date</li>
              </ul>

              <p>
                Do not wait for your next scheduled scan if you are worried.
                Identify the nearest hospital with emergency and delivery
                facilities to your home. In an emergency, go to the nearest
                emergency facility immediately. Do not delay care to travel to
                another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Detailed imaging with a Voluson E22 3D/4D ultrasound machine
                </li>
                <li>
                  Scan findings explained by the doctor who follows your
                  pregnancy
                </li>
                <li>
                  Clear, calm communication that puts your comfort first
                </li>
                <li>
                  Antenatal, high-risk, delivery and paediatric care in one
                  place
                </li>
                <li>
                  Honest guidance, with tests advised only when useful
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
                  <Phone className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="font-semibold underline"
                    >
                      +91 90797 65578
                    </a>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0" />
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
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0" />
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="font-semibold underline"
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
                      className="font-semibold underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </p>
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
                    <h3 className="font-semibold text-gray-900">
                      Q{index + 1}. {faq.q}
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