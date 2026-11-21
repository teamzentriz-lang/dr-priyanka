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
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for consultations.",
  },
  {
    q: "What is the difference between total and subtotal hysterectomy?",
    a: "A total hysterectomy removes the uterus and cervix. A subtotal one removes the uterus and leaves the cervix. Your doctor will explain which suits you.",
  },
  {
    q: "Will my ovaries be removed?",
    a: "Not necessarily. It depends on your age, the reason for surgery and your wishes. Ask your doctor to explain the decision.",
  },
  {
    q: "Will I go into menopause after hysterectomy?",
    a: "If both ovaries are removed, menopause begins immediately. If they are preserved, they usually keep working, though menopause may come a little earlier for some women.",
  },
  {
    q: "Are there alternatives to hysterectomy?",
    a: "Often yes. Depending on the condition, options include medicines, hormonal treatment, myomectomy, hysteroscopic procedures and other uterus-preserving surgeries.",
  },
  {
    q: "Can I get a second opinion before surgery?",
    a: "Yes. Bring your reports, scans and the surgical advice you received, and the doctor will review them and explain your options.",
  },
  {
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "Will a hysterectomy affect my sex life?",
    a: "Most women return to normal intimacy after healing, which is usually several weeks. Discuss any concerns openly with your doctor.",
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

export default function HysterectomySurgeonNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Hysterectomy Surgeon near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                &quot;Hysterectomy&quot; sounds like a single operation, but it
                is not. The word covers several procedures, and the differences
                matter for your hormones, your recovery and your long-term
                health. Understanding them helps you ask better questions.
              </p>

              <p>
                If you live in Amroha,{" "}
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
                neighbouring <strong>Moradabad</strong> is an option to
                consider. The clinic is located in <strong>Moradabad</strong>,
                not in Amroha, and women from Amroha and surrounding areas
                travel there for consultations. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong> Surgery is
                advised only when needed, and alternatives are discussed first.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is a Hysterectomy?
              </h2>

              <p>
                A hysterectomy is surgery to remove the uterus. After it,
                periods stop and pregnancy is no longer possible. It is usually
                considered when other treatments have not worked or are not
                suitable, for conditions such as fibroids, heavy bleeding,
                endometriosis, adenomyosis, prolapse or certain cancers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Types of Hysterectomy by What Is Removed
              </h2>

              <p>
                <strong>Total hysterectomy:</strong> The uterus and cervix are
                removed.
              </p>

              <p>
                <strong>Subtotal (supracervical) hysterectomy:</strong> The
                uterus is removed and the cervix is left in place.
              </p>

              <p>
                <strong>
                  Hysterectomy with removal of tubes and ovaries:
                </strong>{" "}
                The fallopian tubes, and sometimes the ovaries, are removed
                along with the uterus when medically needed.
              </p>

              <p>
                Your doctor will explain which type applies to you and why.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Types of Hysterectomy by Route
              </h2>

              <p>
                <strong>Laparoscopic:</strong> Through a few small abdominal
                incisions with a camera. When suitable, it usually means
                smaller scars, less pain, less blood loss and quicker recovery.
                The clinic uses high-definition 3D laparoscopy.
              </p>

              <p>
                <strong>Vaginal:</strong> Through the vagina, with no abdominal
                cuts. Suitable in selected cases, such as some prolapse
                patients.
              </p>

              <p>
                <strong>Open (abdominal):</strong> Through a larger abdominal
                incision, often when the uterus is very large or the case is
                complex.
              </p>

              <p>
                The best route is the safest one for you, not simply the
                newest.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                The Ovaries Question
              </h2>

              <p>This is the decision many women find hardest.</p>

              <p>
                <strong>If the ovaries are kept:</strong> They usually continue
                making hormones. Menopause may come slightly earlier for some
                women, but periods will have stopped because the uterus is
                gone.
              </p>

              <p>
                <strong>If both ovaries are removed:</strong> Menopause begins
                immediately, with possible hot flushes, night sweats, mood
                changes and vaginal dryness. Your doctor will discuss what
                support is available.
              </p>

              <p>
                <strong>How the decision is made:</strong> It depends on your
                age, the reason for surgery, your family history and your own
                wishes. Ask:
              </p>

              <ol className="list-decimal space-y-2 pl-6">
                <li>Do my ovaries need to be removed? Why or why not?</li>
                <li>What are the benefits and risks of keeping them?</li>
                <li>What happens if they are removed?</li>
              </ol>

              <p>
                Never agree to ovary removal without understanding the reason.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Alternatives Worth Asking About
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Medicines or hormonal treatment</strong> to control
                  bleeding or pain
                </li>
                <li>
                  <strong>Laparoscopic myomectomy</strong> to remove fibroids
                  while keeping the uterus
                </li>
                <li>
                  <strong>Hysteroscopic polypectomy</strong> to remove polyps
                  without cuts
                </li>
                <li>
                  <strong>Endometriosis surgery</strong> to relieve pelvic pain
                </li>
                <li>
                  <strong>Sacrocolpopexy</strong> to repair prolapse
                </li>
                <li>
                  <strong>Monitoring</strong> when symptoms are mild
                </li>
              </ul>

              <p>
                If you still wish to have children, uterus-preserving treatment
                is usually more suitable.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Life After Hysterectomy: Long-Term Health
              </h2>

              <p>
                <strong>Periods.</strong> They stop permanently. Many women are
                relieved to be free of heavy bleeding and pain.
              </p>

              <p>
                <strong>Hormones.</strong> If the ovaries remain, hormones
                usually continue. If removed, menopause care becomes part of
                your plan.
              </p>

              <p>
                <strong>Pelvic floor.</strong> The pelvic floor still needs
                care. Pelvic floor exercises, avoiding constipation and
                avoiding heavy lifting early on help. Mention leakage or a
                feeling of heaviness to your doctor.
              </p>

              <p>
                <strong>Bones and heart.</strong> If menopause begins early,
                ask your doctor about bone health, heart health and lifestyle
                measures, such as activity, balanced nutrition and regular
                check-ups.
              </p>

              <p>
                <strong>Check-ups.</strong> You may still need screening,
                depending on what was removed and why. Ask your doctor whether
                a Pap smear is still needed.
              </p>

              <p>
                <strong>Intimacy.</strong> Most women return to a satisfying
                intimate life once healed, usually after several weeks, when
                the doctor confirms. Dryness can be treated. Talk openly with
                your doctor.
              </p>

              <p>
                <strong>Emotions.</strong> Relief, sadness or uncertainty are
                all normal. Some women grieve the loss of fertility, even if
                their family is complete.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Laparoscopic Hysterectomy at Dr. Priyanka Gynaec
              </h2>

              <p>
                The clinic offers keyhole hysterectomy using high-definition
                3D laparoscopy. A few small cuts replace one large abdominal
                incision, and the camera lets the surgeon see the pelvis in
                magnified detail. Not everyone is suited to laparoscopy. The
                size of the uterus, previous surgeries and overall health
                influence the decision, and your surgeon will recommend the
                safest route.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion From Amroha
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
                Pre-Surgery Checklist
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Complete the tests your doctor advises</li>
                <li>
                  Treat anaemia, diabetes, blood pressure or thyroid problems
                  before surgery, as advised
                </li>
                <li>Share your full medical history, allergies and medicines</li>
                <li>Discuss anaesthesia with the anaesthetist</li>
                <li>Follow fasting instructions exactly</li>
                <li>
                  Ask where the surgery will take place. Please confirm this
                  directly with the clinic.
                </li>
                <li>Arrange a family member to accompany you</li>
                <li>Ask whether you will need to stay in Moradabad afterwards</li>
                <li>Arrange help at home for the first couple of weeks</li>
                <li>Ask when it is safe to travel home, and how</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Early days:</strong> Rest, pain relief and gentle
                  walking as advised
                </li>
                <li>
                  <strong>Vaginal spotting or discharge:</strong> Common for a
                  few weeks
                </li>
                <li>
                  <strong>Diet:</strong> Light, balanced meals with fibre and
                  plenty of fluids to avoid constipation
                </li>
                <li>
                  <strong>Activity:</strong> No heavy lifting or strenuous
                  exercise until your doctor approves
                </li>
                <li>
                  <strong>Intimacy:</strong> Usually delayed for several weeks,
                  until your doctor confirms healing
                </li>
                <li>
                  <strong>Follow-up:</strong> Wound check, review of reports
                  and guidance on returning to routine
                </li>
              </ul>

              <p>Ask which follow-up checks may be possible closer to home.</p>
            </section>

            <section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs After Surgery
              </h2>

              <p>
                Contact your doctor promptly if you have fever, heavy bleeding,
                severe or worsening pain, redness or discharge from wounds,
                vomiting that does not settle, difficulty passing urine, calf
                pain or swelling, or chest pain or breathlessness. If you
                cannot reach the clinic quickly, go to the nearest emergency
                facility. Do not delay care to travel to another city.
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
                  <strong>Focus on uterus-preserving options</strong> wherever
                  appropriate
                </li>
                <li>
                  <strong>3D laparoscopic expertise</strong> for precise,
                  minimally invasive surgery
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