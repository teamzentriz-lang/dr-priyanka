
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
    q: "What is laparoscopic surgery?",
    a: "It is keyhole surgery using a few small incisions and a camera, generally with less pain, smaller scars and quicker recovery than open surgery when suitable.",
  },
  {
    q: "Will I be awake during laparoscopy?",
    a: "No. It is usually done under general anaesthesia. Your anaesthetist will explain the plan.",
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
    q: "Where will my surgery take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "When can I travel back to Amroha after surgery?",
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

export default function LaparoscopicSurgeonNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Laparoscopic Surgeon near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                The word &quot;surgery&quot; frightens most people. Keyhole
                surgery is gentler than traditional operations, but fears
                remain: Will I feel pain? What if something goes wrong? How
                soon can I look after my family again? Clear answers make the
                decision easier.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong>{" "}
                of Dr. Priyanka Gynaec in neighbouring{" "}
                <strong>Moradabad</strong> is an option to consider. The clinic
                is located in <strong>Moradabad</strong>, not in Amroha, and
                women from Amroha and surrounding areas travel there for
                consultations. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong> Surgery is
                advised only when needed, and alternatives are discussed first.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Laparoscopic Surgery?
              </h2>

              <p>
                Laparoscopy, also called keyhole surgery, is done through a
                few small incisions, usually about half a centimetre to one
                centimetre long. A thin camera and fine instruments are passed
                through them, and a monitor shows a magnified view of the
                pelvis. The clinic uses{" "}
                <strong>high-definition 3D laparoscopy</strong>, which adds
                depth perception and clearer visualisation of delicate
                structures.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Common Fears, Answered
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Will I feel the surgery?&quot;
                  </h3>
                  <p>
                    No. Laparoscopy is done under anaesthesia, usually general.
                    The anaesthetist assesses you beforehand and explains the
                    plan.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Is a few small cuts really safer than one big
                    one?&quot;
                  </h3>
                  <p>
                    When suitable, keyhole surgery generally means less pain,
                    smaller scars, less blood loss and quicker recovery. It is
                    not right for every case, and open surgery is sometimes
                    safer.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;What if the surgeon cannot finish it by keyhole?&quot;
                  </h3>
                  <p>
                    Occasionally, for safety, the surgeon switches to open
                    surgery. This is discussed in advance as part of consent.
                    It is a safety decision, not a failure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Will I be left with big scars?&quot;
                  </h3>
                  <p>
                    The incisions are small, and most fade over time.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Will I lose my ovary or uterus?&quot;
                  </h3>
                  <p>
                    Not necessarily. Fertility-preserving options such as
                    laparoscopic cystectomy and myomectomy exist for many
                    women. Your doctor explains what is planned and why.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Will I be able to have children afterwards?&quot;
                  </h3>
                  <p>
                    That depends on the condition and the operation. Tell your
                    doctor about your plans before surgery.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;What if I get worse pain afterwards?&quot;
                  </h3>
                  <p>
                    Some discomfort is expected, and pain relief is given.
                    Worsening or severe pain should be reported straight away.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Conditions Treated With Laparoscopy
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Ovarian cysts</li>
                <li>Uterine fibroids</li>
                <li>Endometriosis and chronic pelvic pain</li>
                <li>Uterine or vaginal vault prolapse</li>
                <li>Heavy or abnormal bleeding not responding to medicines</li>
                <li>Tubal problems and certain causes of infertility</li>
                <li>Need for permanent contraception</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Procedures at Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Laparoscopic cystectomy:</strong> Removes ovarian
                  cysts while preserving healthy ovarian tissue
                </li>
                <li>
                  <strong>Laparoscopic myomectomy:</strong> Removes fibroids
                  while preserving the uterus
                </li>
                <li>
                  <strong>Laparoscopic hysterectomy:</strong> A minimally
                  invasive option when removing the uterus is medically
                  necessary
                </li>
                <li>
                  <strong>Endometriosis surgery:</strong> Excises
                  endometriosis to relieve pelvic pain
                </li>
                <li>
                  <strong>Sacrocolpopexy:</strong> Repairs uterine and vaginal
                  vault prolapse
                </li>
                <li>
                  <strong>Laparoscopic sterilization:</strong> A safe,
                  permanent, day-care procedure
                </li>
                <li>
                  <strong>
                    Diagnostic hysteroscopy and hysteroscopic polypectomy:
                  </strong>{" "}
                  Examine the uterine cavity and remove polyps without
                  external cuts
                </li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                A General Recovery Timeline
              </h2>

              <p>
                Every woman recovers at her own pace, and recovery depends on
                the operation, your health and your doctor&apos;s instructions.
                This is a general picture, not a promise.
              </p>

              <div className="space-y-5">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Day of surgery
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      You wake up in a recovery area, with monitoring and pain
                      relief
                    </li>
                    <li>
                      Mild nausea, sore throat and sleepiness are common
                    </li>
                    <li>
                      Shoulder-tip pain can occur, from the gas used during
                      surgery, and usually eases quickly
                    </li>
                    <li>
                      You start sipping fluids and moving as the team advises
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    First few days
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Soreness around the small incisions and some lower
                      abdominal discomfort
                    </li>
                    <li>
                      Gentle walking, as advised, helps circulation and
                      recovery
                    </li>
                    <li>Light meals and plenty of fluids</li>
                    <li>
                      Some vaginal spotting may occur after certain procedures
                    </li>
                    <li>
                      Take medicines on time, and keep the wounds clean and
                      dry
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    First one to two weeks
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Energy gradually returns, though tiredness is common
                    </li>
                    <li>
                      Many women resume light daily activities as advised
                    </li>
                    <li>
                      Avoid heavy lifting and strenuous exercise until your
                      doctor allows
                    </li>
                    <li>
                      Attend the follow-up visit, where wounds and reports are
                      reviewed
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Weeks two to six
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Activity gradually increases, as advised</li>
                    <li>Scars soften and fade over time</li>
                    <li>
                      Your doctor advises when it is safe to resume intimacy,
                      exercise and any heavy household work
                    </li>
                    <li>
                      Further results or treatment, such as medicines or
                      fertility planning, are discussed
                    </li>
                  </ul>
                </div>
              </div>

              <p>
                Recovery after hysterectomy or more extensive surgery may take
                longer. Your doctor will give personal advice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs After Surgery
              </h2>

              <p>Contact your doctor promptly if you notice:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Fever</li>
                <li>Heavy bleeding</li>
                <li>Severe or worsening pain</li>
                <li>Redness, swelling or discharge from a wound</li>
                <li>Vomiting that does not settle</li>
                <li>Difficulty passing urine</li>
                <li>Calf pain or swelling</li>
                <li>Breathlessness or chest pain</li>
              </ul>

              <p className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 font-medium text-red-800">
                If you cannot reach the clinic quickly, go to the nearest
                emergency facility. Do not delay care to travel to another
                city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Do You Really Need Surgery?
              </h2>

              <p>
                Many conditions are first managed with medicines or
                monitoring. A good doctor explains the diagnosis, the
                alternatives, the benefits and risks, and gives you time to
                decide. If surgery has been advised elsewhere, a second
                opinion is reasonable. Bring ultrasound reports, blood tests,
                prescriptions and the written advice you were given. Your
                concerns are discussed respectfully, and your medical details
                are kept confidential.
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
                  Treat anaemia, diabetes, blood pressure or thyroid problems
                  before surgery, as advised
                </li>
                <li>Share your medical history, allergies and medicines</li>
                <li>Follow fasting instructions exactly</li>
                <li>
                  Ask where the surgery will take place. Please confirm this
                  directly with the clinic.
                </li>
                <li>Arrange a family member to accompany you</li>
                <li>
                  Ask whether you will need to stay in Moradabad afterwards
                </li>
                <li>Arrange help at home for the first week or two</li>
                <li>Ask when it is safe to travel home, and how</li>
                <li>Pack comfortable clothes, identification and your records</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Surgery and Fertility
              </h2>

              <p>
                For many women, preserving fertility matters as much as
                treating the disease. The clinic uses fertility-preserving
                techniques wherever possible. It also offers fertility and
                IVF services, so surgical and fertility planning can be
                coordinated.
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
                  <strong>Fertility-preserving techniques</strong> wherever
                  possible
                </li>
                <li>
                  <strong>3D laparoscopic expertise</strong> and detailed
                  ultrasound assessment on a Voluson E22 machine
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
