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
    q: "Are fibroids cancerous?",
    a: "Fibroids are almost always non-cancerous. Your doctor will still evaluate any rapidly growing or unusual fibroid carefully.",
  },
  {
    q: "Do all fibroids need surgery?",
    a: "No. Small fibroids without symptoms may only need monitoring. Treatment is advised when they cause problems or affect fertility.",
  },
  {
    q: "Can fibroids be removed without removing the uterus?",
    a: "Yes. Myomectomy removes fibroids while preserving the uterus. It can be done laparoscopically or hysteroscopically in suitable cases.",
  },
  {
    q: "Why does the position of a fibroid matter?",
    a: "Different positions cause different symptoms and need different treatments. For example, fibroids inside the cavity may be removed through hysteroscopy.",
  },
  {
    q: "Can fibroids come back after surgery?",
    a: "New fibroids can develop in some women. Regular follow-up helps detect them early.",
  },
  {
    q: "Can I get pregnant after fibroid removal?",
    a: "Many women conceive after myomectomy. Your doctor will advise on the right timing and the safest delivery plan.",
  },
  {
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
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

export default function FibroidSurgeryDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Fibroid Surgery Doctor near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                Fibroids are common, and most are not dangerous. Yet the word
                &quot;fibroid&quot; on a scan report often sends women into
                worry, especially when family members start talking about
                removing the uterus. In truth, treatment depends heavily on
                the type and position of the fibroid and on what you want from
                treatment.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong>{" "}
                is an option to consider. The clinic is located in{" "}
                <strong>Moradabad, not in Amroha</strong>, and women from Amroha
                and surrounding areas travel there for consultations. Its
                philosophy is <strong>&quot;Her Health First.&quot;</strong>{" "}
                Your symptoms, plans and preferences shape every decision.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Are Fibroids?
              </h2>

              <p>
                Fibroids, also called myomas, are non-cancerous growths in or
                on the wall of the uterus. A woman may have one or many, tiny
                or large. They are linked to hormones and often shrink after
                menopause.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Fibroid Types by Position
              </h2>

              <p>
                Where a fibroid grows often matters more than how big it is.
              </p>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Subserosal fibroids
                </h3>
                <p>
                  Grow on the outer surface of the uterus. They often cause
                  pressure symptoms, such as bladder irritation, constipation
                  or an enlarged lower abdomen, rather than heavy bleeding.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Intramural fibroids
                </h3>
                <p>
                  Grow within the muscular wall. They can enlarge the uterus
                  and may cause heavy or prolonged periods and pain.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Submucosal fibroids
                </h3>
                <p>
                  Project into the uterine cavity. Even small ones can cause
                  heavy bleeding and may affect fertility or raise miscarriage
                  risk. Some can be treated through hysteroscopy, with no
                  abdominal cuts.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Pedunculated fibroids
                </h3>
                <p>Hang on a stalk, inside or outside the uterus.</p>
              </div>

              <p>
                Your scan report may use these words. Ask your doctor which
                type you have, and what it means for treatment.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Fibroid Symptom Diary
              </h2>

              <p>
                A diary helps your doctor see how fibroids affect your daily
                life. For two or three months, note:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Period dates and length</strong>
                </li>
                <li>
                  <strong>Flow:</strong> pads used per day, clots, nights when
                  you had to change
                </li>
                <li>
                  <strong>Pain:</strong> where, how severe and what helps
                </li>
                <li>
                  <strong>Pressure symptoms:</strong> frequent urination,
                  constipation, bloating
                </li>
                <li>
                  <strong>Energy:</strong> tiredness, dizziness, breathlessness
                </li>
                <li>
                  <strong>Pain during intercourse</strong>
                </li>
                <li>
                  <strong>Missed work, school or household tasks</strong>
                </li>
                <li>
                  <strong>Medicines taken and their effect</strong>
                </li>
              </ul>

              <p>
                Bring the diary with your scan reports. It often decides
                whether treatment is needed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Do All Fibroids Need Surgery?
              </h2>

              <p>
                No. Small fibroids without symptoms may only need regular
                monitoring. Treatment is considered when fibroids cause heavy
                bleeding or anaemia, significant pain or pressure, bladder or
                bowel symptoms, difficulty conceiving or pregnancy problems,
                or rapid growth or concerning features on imaging.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Treatment Options
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Observation
                </h3>
                <p>
                  Regular check-ups for small, symptom-free fibroids.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Medicines
                </h3>
                <p>
                  Can help control bleeding or pain, or temporarily reduce
                  size. They manage symptoms but may not remove the fibroid
                  permanently.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Hysteroscopic removal
                </h3>
                <p>
                  For fibroids or polyps inside the cavity, removed through the
                  vagina with no cuts.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Laparoscopic myomectomy
                </h3>
                <p>
                  Keyhole removal of fibroids while preserving the uterus.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Hysterectomy
                </h3>
                <p>
                  Removal of the uterus, considered when other options are
                  unsuitable and a woman does not wish to conceive.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Fibroids Are Assessed
              </h2>

              <p>
                Assessment may include a discussion of your symptoms and
                periods, an examination, blood tests for haemoglobin and iron,
                and ultrasound. The clinic uses a Voluson E22 3D and 4D
                ultrasound machine for detailed imaging of the number, size and
                position of fibroids. Hysteroscopy may be used to look inside
                the cavity, and further imaging such as MRI may be needed in
                complex cases.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Laparoscopic Myomectomy at Dr. Priyanka Gynaec
              </h2>

              <p>
                Laparoscopic myomectomy is uterus-preserving 3D keyhole
                surgery. A camera and fine instruments are passed through a few
                small incisions. The surgeon removes the fibroids and carefully
                repairs the uterine wall.
              </p>

              <p>When suitable, benefits include:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Preservation of the uterus and, for many women, fertility
                </li>
                <li>Smaller scars</li>
                <li>Less pain after surgery</li>
                <li>Reduced blood loss compared with open surgery</li>
                <li>A shorter hospital stay</li>
                <li>Faster return to daily activities</li>
              </ul>

              <p>
                Not every fibroid is suited to laparoscopy. The number, size
                and position of fibroids, your age and previous surgeries
                influence the decision, and open surgery may sometimes be
                safer. Your surgeon explains the reasons clearly.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Worries Families Raise
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  &quot;Will the fibroid turn into cancer?&quot;
                </h3>
                <p>
                  Fibroids are almost always non-cancerous. Your doctor still
                  evaluates any rapidly growing or unusual fibroid carefully.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  &quot;Is it better to remove the whole uterus so the fibroids
                  never return?&quot;
                </h3>
                <p>
                  Not necessarily. Hysterectomy ends fibroids for good, but it
                  also ends fertility and has its own effects. If you want to
                  keep your uterus, myomectomy is an option, though new fibroids
                  can develop in some women.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  &quot;Will surgery make her weak?&quot;
                </h3>
                <p>
                  Recovery needs rest and support. Keyhole surgery often means
                  a faster recovery, though everyone is different.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  &quot;Is it caused by something she did?&quot;
                </h3>
                <p>
                  No. Fibroids are linked to hormones and are not anyone&apos;s
                  fault.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  &quot;Can she still have a baby?&quot;
                </h3>
                <p>
                  Many women with fibroids conceive and deliver normally. After
                  myomectomy, your doctor will advise on the right time to try
                  and the safest delivery plan. The clinic also offers
                  fertility and IVF services, so fibroid treatment and
                  fertility planning can be coordinated.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Fibroids and Anaemia
              </h2>

              <p>
                Long-term heavy bleeding can quietly drain iron. Signs include
                tiredness, pale skin, hair fall, dizziness, breathlessness and
                palpitations. A blood test confirms it. Treating anaemia before
                surgery makes the operation and recovery safer, so your doctor
                may advise iron treatment first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Amroha
              </h2>

              <p>
                If surgery has been advised elsewhere, a second opinion is
                reasonable. Bring all scan reports and images, blood tests,
                previous prescriptions, the written surgical advice and your
                symptom diary. Your concerns are discussed respectfully, and
                your medical details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Surgery From Amroha
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Ask which pre-operative tests can be done in advance, or
                  closer to home
                </li>
                <li>Correct anaemia before surgery, if present</li>
                <li>Share your medical history, allergies and medicines</li>
                <li>Follow fasting instructions exactly</li>
                <li>
                  Ask where the surgery will take place. Please confirm this
                  directly with the clinic.
                </li>
                <li>Arrange a family member to accompany you</li>
                <li>Ask whether you will need to stay in Moradabad afterwards</li>
                <li>Arrange help at home for the first week or two</li>
                <li>Ask when it is safe to travel home, and how</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Gentle walking soon after surgery, as advised</li>
                <li>Light, balanced meals with plenty of fluids and fibre</li>
                <li>Medicines on time</li>
                <li>Clean, dry wounds</li>
                <li>
                  No heavy lifting or strenuous exercise until your doctor
                  approves
                </li>
                <li>Follow-up visits</li>
              </ul>

              <p>
                Ask which follow-up checks may be possible closer to home.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs
              </h2>

              <p>
                Contact your doctor promptly after surgery if you notice fever,
                heavy bleeding, worsening pain, wound redness or discharge,
                vomiting that does not settle, difficulty passing urine or
                calf pain or swelling.
              </p>

              <p className="rounded-xl border-l-4 border-red-600 bg-red-50 p-5 text-gray-800">
                Seek urgent care at any time for very heavy bleeding that soaks
                a pad within an hour, dizziness or fainting, sudden severe
                pelvic pain or inability to pass urine. If you cannot reach
                the clinic quickly, go to the nearest emergency facility. Do
                not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Honest guidance:</strong> Surgery advised only when
                  needed, with alternatives discussed first
                </li>
                <li>
                  <strong>
                    Focus on preserving the uterus and fertility
                  </strong>{" "}
                  wherever possible
                </li>
                <li>
                  <strong>3D laparoscopic expertise</strong> and detailed
                  ultrasound assessment
                </li>
                <li>
                  <strong>Hysteroscopy services</strong> for fibroids and
                  polyps inside the cavity
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
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