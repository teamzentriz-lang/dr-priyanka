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
    q: "When should I have my first pregnancy scan?",
    a: "Usually in the early weeks after a positive pregnancy test, as advised by your doctor. Earlier scans are done if you have bleeding or pain.",
  },
  {
    q: "Why was I asked to repeat my scan?",
    a: "Reasons can be routine, such as the baby's position, tracking growth over time or monitoring a finding. Ask your doctor to explain the reason.",
  },
  {
    q: "How many scans will I need?",
    a: "It depends on your health and pregnancy. Low-risk pregnancies need fewer scans, while high-risk pregnancies may need more.",
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
    q: "Do I need a full bladder?",
    a: "It may be advised for early scans. Ask the clinic about preparation when you book.",
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

export default function PregnancyScanDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Pregnancy Scan Doctor near Sambhal – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              For many couples, a pregnancy scan is both exciting and
              nerve-racking. You hope for good news, yet you are not sure what
              the sonographer is looking at or what the words in the report
              mean. Knowing what to expect makes scan day calmer.
            </p>

            <p>
              If you live in Sambhal, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in{" "}
              <strong>Moradabad, not in Sambhal</strong>, and women from Sambhal
              and surrounding areas travel there for pregnancy care. It uses a{" "}
              <strong>Voluson E22 3D and 4D ultrasound machine</strong>, and
              scans are explained by the doctor who follows your pregnancy.
              Its philosophy is <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What a Scan Can and Cannot Tell You
              </h2>

              <p>
                An ultrasound uses sound waves, not radiation, to create images
                of the baby, uterus and surroundings. It is considered safe
                when performed for medical reasons by trained professionals.
              </p>

              <p>
                <strong>It can show:</strong> the heartbeat, the number of
                babies, the due date, the baby&apos;s growth, the placenta&apos;s
                position, fluid levels and many structural features.
              </p>

              <p>
                <strong>It cannot guarantee:</strong> that everything is normal.
                Some conditions are not visible on ultrasound, or become
                visible only later. This is why regular antenatal check-ups and
                blood tests are still needed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Scan Day: What to Expect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900">
                Before You Go
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Book in advance, and ask about preparation. Early scans may
                  need a comfortably full bladder
                </li>
                <li>Wear comfortable two-piece clothing</li>
                <li>Bring your antenatal card, previous scans and blood tests</li>
                <li>Write down your questions</li>
                <li>Bring your partner or a family member, if you wish</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900">
                During the Scan
              </h3>

              <p>
                You lie on an examination couch, and gel is applied to the
                abdomen. The probe is moved gently. In early pregnancy, a slim
                vaginal probe may be used for clearer images, which can cause
                brief, mild discomfort. The doctor takes measurements, checks
                organs and structures and explains findings in simple language.
                Most scans are painless.
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                After the Scan
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>Ask for a clear explanation of the main findings</li>
                <li>Ask whether anything needs a repeat scan, and why</li>
                <li>Keep a copy of the report and images</li>
                <li>Ask when the next scan is due</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What &quot;Come Back for a Follow-Up Scan&quot; Really Means
              </h2>

              <p>
                Many women panic when told to repeat a scan. Often, the reason
                is routine.
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>
                    The baby was in a position that made some views difficult.
                  </strong>{" "}
                  A repeat gives a better look.
                </li>
                <li>
                  <strong>A structure needs a second look,</strong> which is
                  common and often reassuring.
                </li>
                <li>
                  <strong>The pregnancy is high-risk,</strong> so scans are
                  scheduled more often.
                </li>
                <li>
                  <strong>Growth is being tracked</strong> over time, which
                  needs scans spaced weeks apart.
                </li>
                <li>
                  <strong>A finding needs monitoring,</strong> such as a
                  low-lying placenta, which may move upward as pregnancy
                  advances.
                </li>
              </ul>

              <p>
                Ask your doctor: &quot;Why do I need another scan, and what are
                you checking?&quot; You deserve a plain answer.
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

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Early (Dating) Scan
                  </h3>
                  <p>
                    Confirms the pregnancy is in the uterus, shows the
                    heartbeat, counts the babies and sets the due date. If you
                    have bleeding or pain early on, a scan helps find the cause.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    First Trimester Screening
                  </h3>
                  <p>
                    Usually near the end of the first trimester. It may include
                    a measurement at the back of the baby&apos;s neck and is
                    often combined with blood tests. It gives a risk estimate,
                    not a final diagnosis.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Anomaly Scan
                  </h3>
                  <p>
                    A detailed scan around the middle of pregnancy that checks
                    the baby&apos;s head, brain, face, spine, heart, abdomen,
                    kidneys and limbs, along with the placenta and fluid.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Growth Scans
                  </h3>
                  <p>
                    In later months, they check the baby&apos;s size, position
                    and fluid levels.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Doppler Studies
                  </h3>
                  <p>
                    In selected pregnancies, a special technique checks blood
                    flow in the umbilical cord and the baby&apos;s vessels.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">2D, 3D and 4D</h2>

              <p>
                <strong>2D</strong> is the standard flat view used for
                measurements and most medical assessments. <strong>3D</strong>{" "}
                builds a three-dimensional picture that can help show surface
                structures in selected situations. <strong>4D</strong> is a 3D
                image shown moving in real time. 2D scanning remains the
                foundation of routine pregnancy assessment, and your doctor
                will choose what is useful for you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Myths About Scans
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Myth: More scans always mean better care.
                  </h3>
                  <p>
                    <strong>Fact:</strong> Scans should be done when they add
                    useful information. Your doctor advises the number and
                    timing.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Myth: A scan can tell everything about the baby.
                  </h3>
                  <p>
                    <strong>Fact:</strong> Ultrasound finds many concerns, but
                    not all.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Myth: Scans harm the baby.
                  </h3>
                  <p>
                    <strong>Fact:</strong> Ultrasound does not use radiation,
                    and it is considered safe when done for medical reasons.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Myth: A &quot;good&quot; scan means I can skip check-ups.
                  </h3>
                  <p>
                    <strong>Fact:</strong> Blood pressure checks, blood tests
                    and your doctor&apos;s assessment remain important.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Important Note on Fetal Sex Determination
              </h2>

              <p>
                Under Indian law (the PCPNDT Act), determining or disclosing the
                sex of the baby during ultrasound is{" "}
                <strong>strictly prohibited</strong>. Dr. Priyanka Gynaec does
                not perform or disclose fetal sex determination. Families
                should not ask for it. The focus of every scan is the health of
                mother and baby.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Keep a Scan Record
              </h2>

              <p>
                Doctors compare scans over time, so a tidy record helps. In one
                folder, or one phone album, keep:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>The date of each scan</li>
                <li>The gestational age on that date</li>
                <li>The main findings and measurements</li>
                <li>The doctor&apos;s advice and next scan date</li>
                <li>Printed reports and images</li>
              </ul>

              <p>
                Photograph each report on the day, in case a paper copy is lost.
                Bring the whole record to every visit.
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
                Planning Scans From Sambhal
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Ask your doctor which scans you will need, and roughly when
                </li>
                <li>Ask which scans must be done at the clinic</li>
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
                  Ask whether any travel limits apply as your pregnancy advances
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs Between Scans
              </h2>

              <p>
                Contact your doctor or seek emergency care if you have:
              </p>

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
                Antenatal Care Beyond Scans
              </h2>

              <p>
                Ultrasound is one part of complete pregnancy care. At Dr.
                Priyanka Gynaec, antenatal services also include trimester-wise
                check-ups, blood tests, screening for gestational diabetes and
                thyroid problems, nutrition guidance and labour preparation.
                Normal delivery is prioritised wherever it is safe. Postnatal
                care, newborn care and vaccinations are available in the same
                place.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Detailed imaging</strong> with a Voluson E22 3D/4D
                  ultrasound machine
                </li>
                <li>
                  <strong>Scan findings explained</strong> by the doctor who
                  follows your pregnancy
                </li>
                <li>
                  <strong>Clear, calm communication</strong> that puts your
                  comfort first
                </li>
                <li>
                  <strong>Antenatal, high-risk, delivery and paediatric care</strong>{" "}
                  in one place
                </li>
                <li>
                  <strong>Honest guidance,</strong> with tests advised only when
                  useful
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
              <h2 className="mb-4 text-2xl font-bold">
                Book Your Pregnancy Scan Appointment
              </h2>

              <p className="mb-6">
                Contact Dr. Priyanka Gynaec to ask about pregnancy scan
                preparation, appointment availability and antenatal care.
              </p>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="font-semibold hover:underline"
                    >
                      +91 90797 65578
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                    >
                      +91 89796 70705
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="font-semibold hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
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
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="leading-relaxed text-gray-700">{faq.a}</p>
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