
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
    q: "Can stress delay my period?",
    a: "Yes. Stress, poor sleep, travel, sudden weight change and intense exercise can disturb hormones and delay periods, though other causes should be ruled out.",
  },
  {
    q: "Is it normal for periods to be irregular after delivery?",
    a: "Often yes. Cycles can take months to settle, and breastfeeding can delay them. Mention persistent changes or very heavy bleeding to your doctor.",
  },
  {
    q: "Is PCOS a common cause of irregular periods?",
    a: "Yes. PCOS is one of the most common causes, due to irregular ovulation. It is treatable.",
  },
  {
    q: "Which tests are done for irregular periods?",
    a: "Commonly a pregnancy test when relevant, an ultrasound and blood tests such as haemoglobin, thyroid and hormone levels. Your doctor chooses tests based on your symptoms.",
  },
  {
    q: "Should I take hormonal pills on my own to regulate periods?",
    a: "It is best to consult a doctor first. Hormonal medicines need proper evaluation, and self-medication can hide the real cause.",
  },
  {
    q: "Can irregular periods affect pregnancy?",
    a: "They often mean irregular ovulation, which can make conceiving harder. Many women still conceive with the right treatment.",
  },
  {
    q: "Can follow-up checks be done in Amroha?",
    a: "Some routine tests may be possible locally. Ask your doctor which ones, and share the reports with the clinic.",
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

export default function IrregularPeriodsDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Irregular Periods Doctor near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                When your period goes off schedule, the first question is
                usually &quot;what is wrong with me?&quot; A more useful
                question is &quot;what changed?&quot; Cycles respond to stress,
                sleep, weight, travel, feeding a baby and medicines, as well
                as to conditions such as PCOS or thyroid disease. Looking at
                recent changes often points toward the cause.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong>{" "}
                of Dr. Priyanka Gynaec in neighbouring{" "}
                <strong>Moradabad</strong> is an option to consider. The clinic
                is located in <strong>Moradabad</strong>, not in Amroha, and
                women from Amroha and surrounding areas travel there for
                consultations. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong> You are listened
                to, informed and never judged.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Counts as Irregular?
              </h2>

              <p>
                A typical cycle runs about 21 to 35 days, counted from the
                first day of one period to the first day of the next, with
                bleeding for around 3 to 7 days. You may have irregular
                periods if cycles are often shorter or longer than this, vary
                widely from month to month, stop for three months or more
                when you are not pregnant, or come with unusually heavy,
                light or prolonged bleeding. Some variation is normal in the
                first couple of years after periods begin and in the years
                before menopause.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                First, Rule Out Pregnancy
              </h2>

              <p>
                If a period is late and pregnancy is possible, take a
                pregnancy test first. A negative test with a continuing delay
                is the point to book a consultation.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                The &quot;What Changed?&quot; Checklist
              </h2>

              <p>
                Go through these and note any that apply. Bring the list to
                your visit.
              </p>

              <div className="space-y-5">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Body and weight
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Rapid weight loss or gain.</strong> Both can
                      disturb ovulation.
                    </li>
                    <li>
                      <strong>Very low body weight or intense exercise.</strong>{" "}
                      Can reduce hormone levels and delay or stop periods.
                    </li>
                    <li>
                      <strong>New acne, excess hair or hair thinning.</strong>{" "}
                      May suggest a hormonal condition such as PCOS.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Life and stress
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Exams, a new job, family stress or grief.</strong>{" "}
                      Stress hormones can delay ovulation.
                    </li>
                    <li>
                      <strong>Travel or shift work.</strong> A disturbed body
                      clock can shift a cycle.
                    </li>
                    <li>
                      <strong>Poor sleep.</strong> Long-term sleep loss
                      affects hormones.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Reproductive events
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Recent delivery or miscarriage.</strong> Cycles
                      often take months to settle.
                    </li>
                    <li>
                      <strong>Breastfeeding.</strong> Periods may be absent or
                      irregular while feeding.
                    </li>
                    <li>
                      <strong>Stopping a contraceptive.</strong> Cycles may
                      take time to regulate. Ask your doctor what to expect.
                    </li>
                    <li>
                      <strong>Approaching menopause.</strong> Cycles often
                      become unpredictable in the forties.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Medical
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Thyroid symptoms,</strong> such as tiredness,
                      weight change, feeling too cold or hot.
                    </li>
                    <li>
                      <strong>Chronic illness or recent illness.</strong>
                    </li>
                    <li>
                      <strong>New medicines or supplements.</strong> Some can
                      affect cycles. Never stop a prescribed medicine without
                      asking your doctor.
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Pelvic symptoms
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Heavy bleeding, clots or tiredness.</strong> May
                      point to fibroids, polyps or anaemia.
                    </li>
                    <li>
                      <strong>Pelvic pain or pain during intercourse.</strong>{" "}
                      May point to endometriosis or other conditions.
                    </li>
                    <li>
                      <strong>Bleeding between periods or after intercourse.</strong>{" "}
                      Always worth checking.
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                Several answers may apply. A doctor can sort out which matters
                most.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Possible Causes at a Glance
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>PCOS:</strong> Irregular ovulation, often with acne,
                  excess hair and weight changes
                </li>
                <li>
                  <strong>Thyroid disorders:</strong> Underactive or overactive
                  thyroid
                </li>
                <li>
                  <strong>Raised prolactin or other hormone imbalance</strong>
                </li>
                <li>
                  <strong>Stress, weight change or intense exercise</strong>
                </li>
                <li>
                  <strong>Pregnancy, breastfeeding or recent miscarriage</strong>
                </li>
                <li>
                  <strong>Fibroids and polyps</strong>
                </li>
                <li>
                  <strong>Endometriosis or adenomyosis</strong>
                </li>
                <li>
                  <strong>Perimenopause</strong>
                </li>
                <li>
                  <strong>Contraceptive or medicine effects</strong>
                </li>
              </ul>

              <p className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 font-medium text-red-800">
                Please avoid taking hormonal pills on your own to
                &quot;fix&quot; periods. They can hide the real cause.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How Irregular Periods Are Evaluated
              </h2>

              <p>
                A first visit begins with a conversation about your cycle,
                your checklist and your health history. Depending on your
                situation, evaluation may include:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>A pregnancy test, when relevant</li>
                <li>
                  A gentle examination, only if needed and explained first
                </li>
                <li>
                  Ultrasound of the uterus and ovaries, using a Voluson E22
                  3D/4D ultrasound machine for detailed imaging
                </li>
                <li>
                  Blood tests, such as haemoglobin, thyroid function, hormones
                  and blood sugar
                </li>
                <li>
                  Hysteroscopy, when a closer look inside the uterus is needed
                </li>
              </ul>

              <p>
                Each test is explained in advance, and hormone tests may need
                to be timed to your cycle.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Treatment Depends on the Cause
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Lifestyle-related causes:</strong> Guidance on
                  nutrition, weight, sleep, exercise and stress. Many cycles
                  settle once the trigger eases
                </li>
                <li>
                  <strong>PCOS:</strong> Lifestyle changes, medicines, and
                  ovulation induction if you want to conceive
                </li>
                <li>
                  <strong>Thyroid disease:</strong> Thyroid treatment with
                  periodic checks
                </li>
                <li>
                  <strong>Fibroids or polyps:</strong> Medicines, hysteroscopic
                  polypectomy or laparoscopic myomectomy when needed
                </li>
                <li>
                  <strong>Endometriosis:</strong> Medicines or 3D laparoscopic
                  surgery to relieve pain
                </li>
                <li>
                  <strong>Heavy bleeding with anaemia:</strong> Iron and other
                  treatment alongside the main treatment
                </li>
              </ul>

              <p>
                Surgery is recommended only when it is truly the best option,
                and alternatives are discussed first.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                If You Want to Conceive
              </h2>

              <p>
                Irregular cycles often mean irregular ovulation. The clinic
                offers ovulation tracking, ovulation induction, IVF, time-lapse
                embryo monitoring, and AI-powered semen analysis with DNA
                integrity testing. Generally, seek help after 12 months of
                trying if you are under 35, and after 6 months if you are 35
                or older. Seek help sooner if your periods are irregular.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Habits That Support Regular Cycles
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Eat balanced meals with vegetables, fruit, pulses, grains
                  and adequate protein
                </li>
                <li>Include iron-rich foods if your periods are heavy</li>
                <li>
                  Stay active, with walking, yoga or exercise you enjoy,
                  without overdoing it
                </li>
                <li>
                  Aim for a healthy weight through gradual change, not crash
                  diets
                </li>
                <li>Keep a regular sleep routine</li>
                <li>Make time for stress relief</li>
                <li>Avoid smoking</li>
                <li>Avoid self-medication</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Keep a Simple Cycle Record
              </h2>

              <p>
                For two or three months, note the first day of each period,
                the cycle length, the flow, any pain, any bleeding between
                periods, and anything from the checklist that changed that
                month. A notebook or phone calendar is enough. Patterns
                across months are more useful than a single memory.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Follow-Up From Amroha
              </h2>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Ask your doctor:
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>How often will I need to come to the clinic?</li>
                  <li>
                    Which blood tests can be repeated closer to home, if the
                    doctor agrees?
                  </li>
                  <li>
                    When should I repeat tests, and which results should I
                    share?
                  </li>
                  <li>
                    What changes should make me contact you sooner?
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 p-5">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  Make visits easier:
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Book in advance and confirm timings</li>
                  <li>
                    Bring your cycle record, previous reports, ultrasounds and
                    a list of medicines
                  </li>
                  <li>
                    Ask whether tests and consultation can be planned on the
                    same day
                  </li>
                  <li>Travel with a family member where helpful</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When to See a Doctor
              </h2>

              <p>
                Book a consultation if you have missed three periods in a row
                with a negative pregnancy test, cycles consistently shorter
                than 21 days or longer than 35 days, heavy bleeding or severe
                pain, bleeding between periods or after intercourse, bleeding
                after menopause, or trouble conceiving along with irregular
                cycles.
              </p>

              <p className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 font-medium text-red-800">
                Go to the nearest emergency facility immediately for very
                heavy bleeding with dizziness or fainting, or sudden severe
                abdominal pain. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>
                    A listening-first, judgement-free consultation
                  </strong>
                </li>
                <li>
                  <strong>Clear explanations</strong> in simple language
                </li>
                <li>
                  <strong>Modern diagnostic imaging</strong> and 3D laparoscopy
                  when needed
                </li>
                <li>
                  <strong>Honest advice,</strong> with surgery suggested only
                  when necessary
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

              <p>
                Your concerns are discussed respectfully, and your medical
                details are kept confidential.
              </p>
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
                <a
                  href="tel:+919079765578"
                  className="flex items-center gap-3 hover:text-[#8F1738]"
                >
                  <Phone size={20} />
                  <span>
                    <strong>Call for appointment:</strong> +91 90797 65578
                  </span>
                </a>

                <a
                  href="https://wa.me/918979670705"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#8F1738]"
                >
                  <MessageCircle size={20} />
                  <span>
                    <strong>WhatsApp:</strong> +91 89796 70705
                  </span>
                </a>

                <a
                  href="mailto:drpriyankagynaec@gmail.com"
                  className="flex items-center gap-3 hover:text-[#8F1738]"
                >
                  <Mail size={20} />
                  <span>
                    <strong>Email:</strong> drpriyankagynaec@gmail.com
                  </span>
                </a>

                <a
                  href="https://www.gynaecologistmoradabad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-[#8F1738]"
                >
                  <Globe size={20} />
                  <span>
                    <strong>Website:</strong> www.gynaecologistmoradabad.com
                  </span>
                </a>
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
                      Q{index + 1}. {faq.q}
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
