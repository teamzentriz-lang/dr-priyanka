import Link from "next/link";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Amroha?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for consultations.",
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
    q: "Can I have an ovarian cyst during pregnancy?",
    a: "Yes. Many are harmless and are monitored with scans. Sudden severe pain needs urgent care.",
  },
  {
    q: "Is a cyst after menopause serious?",
    a: "It deserves proper assessment, since ovaries are no longer releasing eggs. Many are still benign, but your doctor will evaluate it carefully.",
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

export default function OvarianCystDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Ovarian Cyst Doctor near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                An ovarian cyst means different things at different ages. In a
                teenager, it is often a harmless part of the cycle. In
                pregnancy, it is usually watched. After menopause, it needs
                closer attention. Knowing which stage you are in helps you
                understand what your doctor is likely to advise.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong>{" "}
                of Dr. Priyanka Gynaec in neighbouring{" "}
                <strong>Moradabad</strong> is an option to consider. The clinic
                is located in <strong>Moradabad</strong>, not in Amroha, and
                women from Amroha and surrounding areas travel there for
                consultations. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong> You are
                listened to, informed and never rushed into surgery.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is an Ovarian Cyst?
              </h2>

              <p>
                An ovarian cyst is a fluid-filled sac on or inside an ovary.
                Many cause no symptoms. Common types include functional cysts
                that form during the normal cycle, endometriomas
                (&quot;chocolate cysts&quot;) linked to endometriosis, dermoid
                cysts and cystadenomas. The type decides the treatment.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Cysts by Life Stage
              </h2>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Teenage Years
                </h3>

                <p>
                  Cysts in girls are often functional and settle on their own.
                  Doctors usually prefer observation with repeat ultrasounds,
                  and aim to protect the ovaries, since they are needed for the
                  future.
                </p>

                <p>
                  <strong>See a doctor if:</strong> pain is severe, periods are
                  very irregular or heavy, or a scan shows a large or unusual
                  cyst. A parent may stay with her, or she may speak privately.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Reproductive Years
                </h3>

                <p>
                  Most cysts are found at this stage. Many are functional and
                  resolve. Others, such as endometriomas, can cause pain and
                  fertility problems. If you are trying to conceive, tell
                  your doctor before any treatment decision is made. The
                  clinic offers fertility and IVF services, so surgical and
                  fertility planning can be coordinated.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  During Pregnancy
                </h3>

                <p>
                  Cysts are sometimes found on a pregnancy scan. Many are
                  harmless, and a corpus luteum cyst, which supports early
                  pregnancy, is common and usually shrinks by itself. Doctors
                  usually monitor the cyst with scans.
                </p>

                <p>
                  <strong>Seek urgent care if:</strong> sudden severe pain,
                  vomiting or fever occurs, since a cyst can twist or burst.
                  Surgery in pregnancy is considered only when really needed,
                  and your doctor will discuss timing and safety. Dr. Priyanka
                  Pachauri provides antenatal care, so a cyst can be followed
                  alongside your pregnancy.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  After Menopause
                </h3>

                <p>
                  Ovaries no longer release eggs, so a new cyst deserves
                  closer attention. Evaluation may include ultrasound, blood
                  tests including tumour markers in selected cases and,
                  sometimes, further imaging. Many cysts at this age are
                  still benign, but they should be properly assessed and not
                  ignored. Report any pelvic pain, bloating, change in appetite
                  or bleeding after menopause.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Symptoms at Any Age
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Dull or sharp pain in the lower abdomen or pelvis</li>
                <li>Bloating or fullness</li>
                <li>Pressure on the bladder or bowel</li>
                <li>Irregular or painful periods</li>
                <li>Pain during intercourse</li>
                <li>Difficulty conceiving</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When It Is an Emergency
              </h2>

              <p>
                Seek urgent care for sudden, severe pelvic or abdominal pain,
                pain with fever or vomiting, faintness or rapid breathing.
                These can signal torsion (twisting) or rupture. Go to the
                nearest emergency facility immediately. Do not delay care to
                travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Pain and Symptom Diary
              </h2>

              <p>For a few weeks, note:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Date and time of pain</strong>
                </li>
                <li>
                  <strong>Where it is, and how severe (0 to 10)</strong>
                </li>
                <li>
                  <strong>Link to your cycle,</strong> such as mid-cycle or
                  during periods
                </li>
                <li>
                  <strong>Triggers,</strong> such as exercise or intercourse
                </li>
                <li>
                  <strong>Other symptoms:</strong> bloating, nausea, urinary
                  changes
                </li>
                <li>
                  <strong>What helped</strong>
                </li>
              </ul>

              <p>
                Bring the diary with your scans. It helps your doctor judge
                whether the cyst explains your symptoms.
              </p>
            </section>

            <section className="space-y-4">
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
                Hormonal medicines may help in certain situations, though they
                do not shrink every type of cyst. Many cysts are managed with
                repeat scans alone.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Cysts Are Assessed
              </h2>

              <p>
                Assessment may include a discussion of your symptoms and
                periods, a pelvic examination, ultrasound, blood tests and,
                in complex cases, further imaging such as MRI. The clinic uses
                a Voluson E22 3D and 4D ultrasound machine for detailed
                imaging.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Laparoscopic Cystectomy at Dr. Priyanka Gynaec
              </h2>

              <p>
                Laparoscopic cystectomy is precision 3D keyhole surgery that
                removes the cyst while preserving healthy ovarian tissue. A
                few small incisions are made, and a high-definition camera and
                fine instruments separate the cyst from the ovary carefully.
              </p>

              <p>When suitable, benefits include:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Preservation of healthy ovarian tissue and fertility
                  wherever possible
                </li>
                <li>Smaller scars</li>
                <li>Less pain after surgery</li>
                <li>Reduced blood loss</li>
                <li>Faster return to daily activities</li>
              </ul>

              <p>
                Protecting ovarian reserve matters greatly for younger women
                and those planning pregnancy, so the technique is chosen with
                that in mind.
              </p>
            </section>

            <section className="space-y-4">
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

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Endometriosis and Chocolate Cysts
              </h2>

              <p>
                Endometriomas can cause severe period pain, chronic pelvic
                pain and difficulty conceiving. Advanced 3D laparoscopic
                excision allows accurate diagnosis and removal of
                endometriosis tissue, helping relieve pain. The clinic offers
                dedicated endometriosis surgery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Amroha
              </h2>

              <p>
                If surgery has been advised elsewhere, a second opinion is
                reasonable. Bring all scan reports in date order, blood tests,
                previous prescriptions, the written surgical advice and your
                symptom diary.
              </p>

              <p>
                <strong>Questions to ask:</strong>
              </p>

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

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Surgery From Amroha
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Ask which pre-operative tests can be done in advance, or
                  closer to home
                </li>
                <li>
                  Share your medical history, allergies, medicines and
                  fertility plans
                </li>
                <li>Follow fasting instructions exactly</li>
                <li>
                  Ask where the surgery will take place. Please confirm this
                  directly with the clinic.
                </li>
                <li>Arrange a family member to accompany you</li>
                <li>
                  Ask whether you will need to stay in Moradabad afterwards
                </li>
                <li>Arrange help at home for the first few days</li>
                <li>Ask when it is safe to travel home, and how</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Gentle walking soon after surgery, as advised</li>
                <li>Light, balanced meals with plenty of fluids</li>
                <li>Medicines on time</li>
                <li>Clean, dry wounds</li>
                <li>
                  No heavy lifting or strenuous exercise until your doctor
                  allows
                </li>
                <li>
                  Follow-up visits, where reports and next steps are discussed
                </li>
              </ul>

              <p>
                Contact your doctor promptly if you have fever, heavy
                bleeding, worsening pain, wound redness or discharge, vomiting
                that does not settle or difficulty passing urine. If you
                cannot reach the clinic quickly, go to the nearest emergency
                facility.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Can Cysts Come Back?
              </h2>

              <p>
                Some women develop new cysts later, especially with
                endometriosis or ongoing hormonal imbalance. Regular follow-up
                scans and your doctor&apos;s advice help detect and manage
                recurrence early.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Honest guidance:</strong> Surgery advised only when
                  needed, with alternatives discussed first
                </li>
                <li>
                  <strong>Fertility-preserving 3D laparoscopic techniques</strong>
                </li>
                <li>
                  <strong>Detailed imaging</strong> with 3D/4D ultrasound
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services
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

              <div className="space-y-3">
                <p className="flex flex-wrap items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <strong>Call for appointment:</strong>
                  <a
                    href="tel:+919079765578"
                    className="underline hover:text-[#8F1738]"
                  >
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <strong>WhatsApp:</strong>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8F1738]"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="break-all underline hover:text-[#8F1738]"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <strong>Website:</strong>
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

              <div className="flex flex-wrap gap-4 pt-3">
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
                      {`Q${index + 1}. ${faq.q}`}
                    </h3>

                    <p className="mt-2 text-gray-700">{faq.a}</p>
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