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
    q: "What is laparoscopic surgery?",
    a: "It is keyhole surgery using a few small incisions and a camera, generally with less pain, smaller scars and quicker recovery than open surgery when suitable.",
  },
  {
    q: "Which conditions can be treated with laparoscopy?",
    a: "Ovarian cysts, fibroids, endometriosis, prolapse, heavy bleeding in selected cases, tubal problems and permanent sterilization, among others.",
  },
  {
    q: "Will cyst or fibroid surgery affect my fertility?",
    a: "Fertility-preserving techniques are used wherever possible. The effect depends on the size, location and type of the problem, which your doctor will explain before surgery.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "Is keyhole surgery suitable for everyone?",
    a: "Not always. The size of the growth, previous surgeries and overall health influence the decision, and open surgery may sometimes be safer.",
  },
  {
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "When can I travel back to Sambhal after surgery?",
    a: "Ask your doctor before discharge. They will advise on timing and how to travel safely and comfortably.",
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

export default function LaparoscopicSurgeonNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Laparoscopic Surgeon near Sambhal – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              Being advised surgery raises many questions. What exactly will
              be done? Will it affect my chances of having a child? Is there
              another option? Keyhole surgery has made many gynaecological
              operations gentler, but you still need clear answers before you
              agree.
            </p>

            <p>
              If you live in Sambhal, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in{" "}
              <strong>Moradabad, not in Sambhal</strong>, and women from Sambhal
              and surrounding areas travel there for consultations. Its
              philosophy is <strong>&quot;Her Health First.&quot;</strong>{" "}
              Surgery is advised only when needed, and alternatives are
              discussed first.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Laparoscopic Surgery?
              </h2>

              <p>
                Laparoscopy, also called keyhole surgery, is done through a few
                small incisions, usually about half a centimetre to one
                centimetre long. A thin camera and fine instruments are passed
                through them, and a monitor shows a magnified view of the
                pelvis. The clinic uses{" "}
                <strong>high-definition 3D laparoscopy</strong>, which adds
                depth perception and clearer visualisation of delicate
                structures.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Keyhole, Open or Vaginal: How They Differ
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Laparoscopic
                  </h3>
                  <p>
                    A few small cuts and a camera. Often less pain, smaller
                    scars, less blood loss and quicker recovery, when suitable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Open (abdominal)</h3>
                  <p>
                    One larger incision. Sometimes safer when the uterus or
                    growth is very large, or the situation is complex.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Vaginal</h3>
                  <p>
                    Done through the vagina with no abdominal cuts. Suitable
                    in selected cases, such as some prolapse patients.
                  </p>
                </div>
              </div>

              <p className="font-medium text-gray-900">
                The best approach is the safest one for you, not simply the
                newest.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Procedure-by-Procedure Guide
              </h2>

              <div className="space-y-5">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Laparoscopic Cystectomy
                  </h3>
                  <p className="mt-3">
                    <strong>What it treats:</strong> Ovarian cysts that are
                    large, persistent, painful or suspicious, and endometriomas.
                  </p>
                  <p className="mt-2">
                    <strong>Ask first:</strong> Is the cyst likely to resolve
                    with a repeat scan? What type is it?
                  </p>
                  <p className="mt-2">
                    <strong>Fertility:</strong> The aim is to remove the cyst
                    while preserving healthy ovarian tissue. The effect depends
                    on the cyst type and size.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Laparoscopic Myomectomy
                  </h3>
                  <p className="mt-3">
                    <strong>What it treats:</strong> Fibroids causing heavy
                    bleeding, pain, pressure or fertility problems.
                  </p>
                  <p className="mt-2">
                    <strong>Ask first:</strong> Do I need treatment at all? Can
                    medicines or hysteroscopic removal work?
                  </p>
                  <p className="mt-2">
                    <strong>Fertility:</strong> The uterus is preserved. Your
                    doctor will advise on the best time to try for pregnancy
                    and the safest delivery plan afterwards.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Laparoscopic Hysterectomy
                  </h3>
                  <p className="mt-3">
                    <strong>What it treats:</strong> Conditions such as
                    fibroids, heavy bleeding, endometriosis, adenomyosis,
                    prolapse or certain cancers, when other options are
                    unsuitable or have not worked.
                  </p>
                  <p className="mt-2">
                    <strong>Ask first:</strong> What are the uterus-preserving
                    alternatives? Will the ovaries be removed, and why?
                  </p>
                  <p className="mt-2">
                    <strong>Fertility:</strong> Pregnancy is no longer possible
                    after the uterus is removed, so fertility wishes must be
                    discussed beforehand.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Endometriosis Surgery
                  </h3>
                  <p className="mt-3">
                    <strong>What it treats:</strong> Severe period pain, chronic
                    pelvic pain, pain during intercourse and fertility problems
                    linked to endometriosis.
                  </p>
                  <p className="mt-2">
                    <strong>Ask first:</strong> Could medicines help first?
                    What are the chances of recurrence?
                  </p>
                  <p className="mt-2">
                    <strong>Fertility:</strong> Removing endometriosis may help
                    pain and, in some women, improve fertility outcomes.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Sacrocolpopexy
                  </h3>
                  <p className="mt-3">
                    <strong>What it treats:</strong> Uterine and vaginal vault
                    prolapse.
                  </p>
                  <p className="mt-2">
                    <strong>Ask first:</strong> Would pelvic floor exercises or
                    other measures help?
                  </p>
                  <p className="mt-2">
                    <strong>Fertility:</strong> Usually discussed in the
                    context of a woman&apos;s age and family plans.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Laparoscopic Sterilization
                  </h3>
                  <p className="mt-3">
                    <strong>What it treats:</strong> The need for permanent
                    contraception, as a day-care procedure.
                  </p>
                  <p className="mt-2">
                    <strong>Ask first:</strong> Am I sure I do not want more
                    children? Are reversible methods a better choice?
                  </p>
                  <p className="mt-2">
                    <strong>Fertility:</strong> It is intended to be permanent.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Hysteroscopy
                  </h3>
                  <p className="mt-3">
                    <strong>What it treats:</strong> Problems inside the uterus,
                    such as polyps, adhesions or a septum, through diagnostic
                    hysteroscopy and hysteroscopic polypectomy, with no external
                    cuts.
                  </p>
                  <p className="mt-2">
                    <strong>Ask first:</strong> Is a look inside the uterus
                    needed before any bigger surgery?
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Questions to Ask Any Surgeon
              </h2>

              <ol className="list-decimal space-y-2 pl-6">
                <li>What is my exact diagnosis, and how was it confirmed?</li>
                <li>What happens if I wait or choose another treatment?</li>
                <li>
                  Is keyhole surgery suitable for me, or is open surgery safer?
                </li>
                <li>Will my fertility be affected?</li>
                <li>What are the main risks?</li>
                <li>What type of anaesthesia will I have?</li>
                <li>Who will be in the operating team?</li>
                <li>
                  What is the recovery like, and when can I return to normal
                  activity?
                </li>
                <li>What warning signs should I watch for afterwards?</li>
                <li>
                  Where will the surgery take place? Please confirm this
                  directly with the clinic.
                </li>
              </ol>

              <p>
                A good surgeon welcomes these questions and answers them
                plainly.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Understanding Consent
              </h2>

              <p>
                Before surgery you will be asked to sign a consent form. It
                should only be signed after you understand the procedure, its
                benefits, its risks, the alternatives and what could change
                during surgery, such as a switch to open surgery if needed for
                safety. You can ask for time, ask more questions or seek a
                second opinion before signing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Sambhal
              </h2>

              <p>
                If surgery has been advised elsewhere, a second opinion is
                reasonable. Bring:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Ultrasound reports, and scan images if you have them</li>
                <li>Blood tests, previous prescriptions and discharge summaries</li>
                <li>The written surgical advice you were given</li>
                <li>A list of treatments you have already tried</li>
              </ul>

              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Surgery From Sambhal
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Ask which pre-operative tests can be done in advance, or
                  closer to home
                </li>
                <li>
                  Treat anaemia, diabetes, blood pressure or thyroid problems
                  before surgery, as advised
                </li>
                <li>Share your full medical history, allergies and medicines</li>
                <li>Follow fasting instructions exactly</li>
                <li>Arrange a family member to accompany you</li>
                <li>
                  Ask whether you will need to stay in Moradabad for a few days
                  afterwards
                </li>
                <li>Arrange help at home for the first week or two</li>
                <li>Pack comfortable clothes, identification and your records</li>
              </ul>

              <p>
                Ask when it is safe to travel home, and how. Avoid lifting
                luggage yourself, and take breaks on long journeys.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Gentle walking soon after surgery, as advised</li>
                <li>Light, balanced meals with fluids and fibre</li>
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
                Ask which follow-up checks may be possible closer to home.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs After Surgery
              </h2>

              <p>
                Contact your doctor promptly if you notice fever, heavy
                bleeding, worsening pain, redness or discharge from a wound,
                vomiting that does not settle, difficulty passing urine, calf
                pain or swelling, or breathlessness. If you cannot reach the
                clinic quickly, go to the nearest emergency facility. Do not
                delay care to travel to another city.
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
                  <strong>Fertility-preserving techniques</strong> wherever
                  possible
                </li>
                <li>
                  <strong>3D laparoscopic expertise</strong> and detailed
                  ultrasound assessment
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
                      className="font-medium underline"
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
                      className="font-medium underline"
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
                      className="font-medium underline"
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
                      className="font-medium underline"
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
                    <h3 className="text-lg font-semibold text-gray-900">
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