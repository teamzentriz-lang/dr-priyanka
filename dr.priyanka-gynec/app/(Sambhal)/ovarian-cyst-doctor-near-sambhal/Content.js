
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
    q: "Are ovarian cysts dangerous?",
    a: "Most are harmless and resolve on their own. A few need treatment, and your doctor will assess the type and size through examination and scans.",
  },
  {
    q: "Do all ovarian cysts need surgery?",
    a: "No. Many are monitored with repeat ultrasounds. Surgery is considered for large, persistent, painful or suspicious cysts, or when complications occur.",
  },
  {
    q: "What is laparoscopic cystectomy?",
    a: "It is keyhole surgery that removes the cyst through small incisions while preserving healthy ovarian tissue.",
  },
  {
    q: "Will cyst removal affect my fertility?",
    a: "The aim is to protect fertility, and many women conceive after surgery. The effect depends on the cyst type, its size and your overall ovarian health.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "Is PCOS the same as an ovarian cyst?",
    a: "No. PCOS involves multiple small follicles and hormonal imbalance, and it is usually treated with lifestyle changes and medication rather than cyst removal.",
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

export default function OvarianCystDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Ovarian Cyst Doctor near Sambhal – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              Many women learn they have an ovarian cyst from a short line in
              an ultrasound report. The words can sound alarming, and the
              report rarely explains what happens next. Most ovarian cysts
              are harmless, and many settle on their own. A clear explanation
              and a sensible follow-up plan are often all that is needed.
            </p>

            <p>
              If you live in Sambhal, Dr. Priyanka Pachauri of Dr. Priyanka
              Gynaec in neighbouring Moradabad is an option to consider. The
              clinic is located in Moradabad, not in Sambhal, and women from
              Sambhal and surrounding areas travel there for consultations.
              Its philosophy is &quot;Her Health First.&quot; You are listened
              to, informed and never rushed into surgery.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Reading Your Scan Report
              </h2>
              <p>
                Reports vary, but these terms often appear. Always ask your
                doctor to explain your own report, since numbers need context.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Size:</strong> Measured in centimetres. Small cysts
                  often resolve, while larger or growing ones are watched more
                  closely.
                </li>
                <li>
                  <strong>Simple cyst:</strong> A thin-walled, fluid-filled
                  sac, usually harmless.
                </li>
                <li>
                  <strong>Complex cyst:</strong> Contains solid areas,
                  septations or debris, and needs closer assessment.
                </li>
                <li>
                  <strong>Haemorrhagic cyst:</strong> Contains blood, often
                  from a functional cyst, and usually settles with time.
                </li>
                <li>
                  <strong>Endometrioma:</strong> A &quot;chocolate cyst&quot;
                  linked to endometriosis.
                </li>
                <li>
                  <strong>Dermoid (teratoma):</strong> Contains tissue such as
                  fat or hair, usually non-cancerous.
                </li>
                <li>
                  <strong>Unilocular or multilocular:</strong> Single or
                  multiple compartments.
                </li>
                <li>
                  <strong>Polycystic ovaries:</strong> Many small follicles.
                  This is not the same as a single cyst and does not always
                  mean PCOS.
                </li>
              </ul>

              <p>
                Do not compare your report with the internet. A doctor reads
                the full picture, including your age, symptoms and cycle.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Types of Cysts at a Glance
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Functional cysts:</strong> Form as part of the normal
                  cycle and usually disappear within a few cycles.
                </li>
                <li>
                  <strong>Endometriomas:</strong> Are linked to endometriosis
                  and often cause pain and fertility problems.
                </li>
                <li>
                  <strong>Dermoid cysts:</strong> Are usually non-cancerous but
                  may need removal.
                </li>
                <li>
                  <strong>Cystadenomas:</strong> Are fluid- or mucus-filled and
                  can grow large.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Symptoms</h2>
              <p>
                Many cysts are silent. When symptoms appear, they may include
                lower abdominal or pelvic pain, bloating, pressure on the
                bladder or bowel, irregular or painful periods, pain during
                intercourse and difficulty conceiving.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                When It Is an Emergency
              </h2>
              <p>
                Seek urgent care if you have sudden, severe pelvic or abdominal
                pain, pain with fever or vomiting, faintness or rapid
                breathing. These can signal a cyst that has twisted or burst.
                Go to the nearest emergency facility immediately. Do not
                delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                A Follow-Up Scan Calendar
              </h2>
              <p>
                When a cyst is likely to be harmless, doctors often advise
                watching it. A simple calendar keeps you on track. Your doctor
                will set the exact timing.
              </p>

              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  <strong>At diagnosis:</strong> Note the scan date, cyst size
                  and type from the report.
                </li>
                <li>
                  <strong>After the next period or a few weeks later:</strong>{" "}
                  A repeat scan shows whether a functional cyst has resolved.
                </li>
                <li>
                  <strong>At each follow-up:</strong> Compare size, appearance
                  and symptoms.
                </li>
                <li>
                  <strong>If it persists or grows:</strong> Your doctor
                  discusses further tests or treatment.
                </li>
                <li>
                  <strong>After treatment:</strong> A follow-up scan confirms
                  the result and checks for new cysts.
                </li>
              </ol>

              <p>
                Keep every report in one folder, in date order. Doctors
                compare scans over time, so earlier reports are valuable. Try
                to have repeat scans done at the same place where possible,
                since measurements can differ slightly between machines and
                operators.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Watch, Medicines or Surgery?
              </h2>
              <p>Surgery is usually considered when a cyst:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Is large or growing</li>
                <li>Persists beyond several cycles</li>
                <li>Causes ongoing pain or pressure</li>
                <li>Looks suspicious on imaging</li>
                <li>Is an endometrioma affecting pain or fertility</li>
                <li>Causes complications such as torsion or rupture</li>
              </ul>

              <p>
                Hormonal medicines may help in certain situations, such as
                controlling pain or preventing new functional cysts, though
                they do not shrink every type of cyst.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                How Cysts Are Assessed
              </h2>
              <p>
                Assessment may include a discussion of your symptoms and
                periods, a pelvic examination, ultrasound, blood tests
                including tumour markers in selected cases, and further
                imaging such as MRI for complex cysts. The clinic uses a
                Voluson E22 3D and 4D ultrasound machine for detailed imaging.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Laparoscopic Cystectomy at Dr. Priyanka Gynaec
              </h2>
              <p>
                Laparoscopic cystectomy is precision 3D keyhole surgery that
                removes the cyst while preserving healthy ovarian tissue. A
                few small incisions are made, and a high-definition camera and
                fine instruments separate the cyst from the ovary carefully.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                When suitable, benefits include:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Preservation of healthy ovarian tissue and fertility
                  wherever possible
                </li>
                <li>Smaller scars</li>
                <li>Less pain after surgery</li>
                <li>Reduced blood loss</li>
                <li>A shorter hospital stay</li>
                <li>Faster return to daily activities</li>
              </ul>

              <p>
                Protecting ovarian reserve matters greatly for younger women
                and those planning pregnancy, so the technique is chosen with
                that in mind.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Cysts and Fertility
              </h2>
              <p>
                Most ovarian cysts do not harm fertility. Some, particularly
                endometriomas, can affect ovarian reserve or the pelvic
                environment, and surgery on the ovary needs careful technique.
                If you are trying to conceive, tell your doctor before any
                treatment decision is made. The clinic offers fertility and
                IVF services, so surgical and fertility planning can be
                coordinated.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Cysts and PCOS
              </h2>
              <p>
                Women with PCOS often have many small follicles on their
                ovaries, commonly called &quot;cysts,&quot; although they are
                not true cysts in the usual sense. PCOS is managed through
                lifestyle changes, medication and ovulation induction when
                pregnancy is desired, not usually by cyst removal.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Endometriosis and Chocolate Cysts
              </h2>
              <p>
                Endometriomas are linked to endometriosis, which can cause
                severe period pain, chronic pelvic pain and difficulty
                conceiving. Advanced 3D laparoscopic excision allows accurate
                diagnosis and removal of endometriosis tissue, helping
                relieve pain. The clinic offers dedicated endometriosis
                surgery.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Sambhal
              </h2>
              <p>
                If surgery has been advised elsewhere, a second opinion is
                reasonable. Bring all your scan reports and images, in date
                order, along with blood tests, prescriptions and the written
                surgical advice.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Questions to ask:
              </h3>
              <ol className="list-decimal space-y-2 pl-6">
                <li>What type of cyst is it?</li>
                <li>Is it likely to resolve by itself?</li>
                <li>What are the risks of waiting?</li>
                <li>Is keyhole surgery suitable?</li>
                <li>How will surgery protect my fertility?</li>
              </ol>

              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Surgery From Sambhal
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Ask which pre-operative tests can be done in advance, or
                  closer to home.
                </li>
                <li>
                  Share your medical history, allergies, medicines and
                  fertility plans.
                </li>
                <li>Follow fasting instructions exactly.</li>
                <li>
                  Ask where the surgery will take place. Please confirm this
                  directly with the clinic.
                </li>
                <li>Arrange a family member to accompany you.</li>
                <li>Ask whether you will need to stay in Moradabad afterwards.</li>
                <li>Arrange help at home for the first few days.</li>
                <li>Ask when it is safe to travel home, and how.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Gentle walking soon after surgery, as advised.</li>
                <li>Light, balanced meals with plenty of fluids.</li>
                <li>Medicines on time.</li>
                <li>Clean, dry wounds.</li>
                <li>
                  No heavy lifting or strenuous exercise until your doctor
                  allows.
                </li>
                <li>Follow-up visits, where reports and next steps are discussed.</li>
              </ul>

              <p>
                Ask which follow-up checks may be possible closer to home.
                Contact your doctor promptly if you have fever, heavy
                bleeding, worsening pain, wound redness or discharge, vomiting
                that does not settle or difficulty passing urine.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Can Cysts Come Back?
              </h2>
              <p>
                Some women develop new cysts later, especially with
                endometriosis or ongoing hormonal imbalance. Regular follow-up
                scans and your doctor&apos;s advice on medicines or lifestyle
                help detect and manage recurrence early.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Honest guidance:</strong> Surgery advised only when
                  needed, with alternatives discussed first.
                </li>
                <li>
                  <strong>Fertility-preserving 3D laparoscopic techniques.</strong>
                </li>
                <li>
                  <strong>Detailed imaging</strong> with 3D/4D ultrasound.
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history.
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services.
                </li>
              </ul>
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
