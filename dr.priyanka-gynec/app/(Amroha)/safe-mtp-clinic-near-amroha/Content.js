
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
    q: "Is the clinic located in Amroha?",
    a: "No. It is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for consultations.",
  },
  {
    q: "Is abortion legal in India?",
    a: "Yes, under the MTP Act, within specified conditions and time limits, when performed by a registered medical practitioner at an approved facility.",
  },
  {
    q: "Up to how many weeks can a pregnancy be terminated?",
    a: "Generally up to 20 weeks, extending to 24 weeks for certain categories of women, and beyond that only for substantial fetal abnormalities, as per the Act. Your doctor will explain what applies to you.",
  },
  {
    q: "Can an unmarried woman or a minor get an MTP?",
    a: "An unmarried adult woman can, within the legal conditions, and gives her own consent. For a minor, a guardian's consent is generally required. Your doctor will explain the process.",
  },
  {
    q: "Is it safe to buy abortion pills from a chemist or online?",
    a: "No. Medicines taken without a doctor's assessment can cause serious bleeding, infection and incomplete termination. Always consult a qualified doctor first.",
  },
  {
    q: "Will my consultation be confidential?",
    a: "Yes. Your information is handled confidentially, and the law protects the privacy of women seeking termination.",
  },
  {
    q: "Does the clinic provide MTP, and where is it done?",
    a: "Please confirm service availability and the location of the procedure directly with the clinic when you call.",
  },
  {
    q: "When can I resume normal activities?",
    a: "Many women resume light activities within a day or two, but this varies. Your doctor will give personal advice on rest, work and intercourse.",
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

export default function SafeMTPClinicNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Safe MTP Clinic near Amroha – Dr. Priyanka Pachauri, Moradabad
              </h1>

              <p>
                No two women reach the same decision about a pregnancy in the
                same way. Some face contraceptive failure. Some receive
                worrying medical news. Some are young, some are survivors of
                assault, some are married and some are not. The law and the
                care they need differ in important ways.
              </p>

              <p>
                If you live in Amroha,{" "}
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
                in neighbouring <strong>Moradabad</strong> is a doctor you
                can consult. The clinic is located in{" "}
                <strong>Moradabad</strong>, not in Amroha, and women from
                Amroha and surrounding areas travel there for consultations.
                Its philosophy is <strong>"Her Health First."</strong> You
                are listened to without judgement.
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is MTP?
              </h2>

              <p>
                Medical termination of pregnancy (MTP) is the ending of a
                pregnancy by a qualified doctor. In India it is governed by
                the <strong>MTP Act</strong>, as amended in 2021, which allows
                termination in specified circumstances and within defined
                time limits, when done by a registered medical practitioner
                at an approved facility. Rules can be updated, so your doctor
                will explain what applies to you. Sex-selective termination
                is illegal.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                The Time Limits in Brief
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Up to 20 weeks:</strong> On the opinion of one
                  registered medical practitioner, for reasons such as risk
                  to the woman's physical or mental health, or contraceptive
                  failure
                </li>
                <li>
                  <strong>20 to 24 weeks:</strong> For certain categories of
                  women, on the opinion of two registered medical
                  practitioners
                </li>
                <li>
                  <strong>Beyond 24 weeks:</strong> Only for substantial
                  fetal abnormalities diagnosed by a Medical Board
                </li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                How the Law Applies in Different Situations
              </h2>

              <p>
                This is general information. Your doctor will explain your
                own situation.
              </p>

              <div className="space-y-4">
                <p>
                  <strong>Contraceptive failure.</strong> A pregnancy that
                  follows a failed contraceptive method is a recognised
                  ground within the early time limit.
                </p>

                <p>
                  <strong>Risk to the woman's health.</strong> If continuing
                  the pregnancy could harm her physical or mental health,
                  this is a recognised ground. A doctor assesses it.
                </p>

                <p>
                  <strong>Medical or fetal reasons.</strong> Serious fetal
                  abnormalities can allow termination beyond the usual
                  limits, with review by a Medical Board. This is an
                  extremely painful situation, and emotional support matters
                  as much as medical care.
                </p>

                <p>
                  <strong>A minor (under 18).</strong> The guardian's consent
                  is generally required, and the clinic must handle her
                  privacy with great care. If she is a survivor of sexual
                  abuse, special provisions apply, and the doctor will
                  explain the process.
                </p>

                <p>
                  <strong>A survivor of sexual assault.</strong> She is
                  among the categories of women who may seek termination up
                  to 24 weeks. Care should be sensitive, private and
                  unhurried. Counselling and support are important.
                </p>

                <p>
                  <strong>A married woman.</strong> She gives her own
                  consent. Her husband's permission is not required by the
                  Act.
                </p>

                <p>
                  <strong>An unmarried woman.</strong> Marital status does
                  not prevent her from seeking termination within the legal
                  conditions. She gives her own consent if she is an adult.
                </p>

                <p>
                  <strong>
                    A woman whose marital status has changed during pregnancy.
                  </strong>{" "}
                  She is among the categories of women who may seek
                  termination up to 24 weeks.
                </p>

                <p>
                  <strong>A woman with a disability.</strong> Specified
                  disabilities are among the categories covered up to 24
                  weeks.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Time Matters
              </h2>

              <p>
                Termination is generally safer when done early, and the right
                method depends on the number of weeks, your health and what
                the law allows. If you are considering your options, do not
                delay a consultation. At the same time, take the time you
                need to think while staying within the safe window.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                How to Tell Whether a Clinic Is Safe
              </h2>

              <ol className="list-decimal space-y-3 pl-6">
                <li>A registered doctor performs the procedure</li>
                <li>
                  The facility is approved under the Act. Ask the clinic to
                  confirm.
                </li>
                <li>
                  An ultrasound confirms the pregnancy and its stage before
                  any decision
                </li>
                <li>You are examined and your history is taken</li>
                <li>
                  Options, risks and aftercare are explained in plain
                  language
                </li>
                <li>Consent is taken properly, without pressure</li>
                <li>Emergency arrangements exist</li>
                <li>Follow-up and contraception counselling are offered</li>
                <li>Your privacy is respected</li>
              </ol>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-2 font-bold text-red-800">Red flags</h3>
                <p className="text-gray-700">
                  Anyone offering medicines without an examination or
                  ultrasound, a chemist, unregistered practitioner or online
                  seller supplying pills, no explanation of risks, pressure
                  to decide at once, "guaranteed" results, no way to contact
                  the provider and offers to reveal the baby's sex.
                  Unsupervised attempts can cause heavy bleeding, infection,
                  incomplete termination and serious harm.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Happens at the First Consultation
              </h2>

              <p>
                A first visit is a private conversation. You can expect:
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  A listening-first discussion of your situation and wishes
                </li>
                <li>
                  Questions about your periods, previous pregnancies and
                  health
                </li>
                <li>
                  Confirmation of the pregnancy and its duration, usually by
                  ultrasound. The clinic uses a Voluson E22 3D and 4D
                  ultrasound machine
                </li>
                <li>
                  Basic tests, such as haemoglobin and blood group, if needed
                </li>
                <li>
                  A clear explanation of options, benefits, risks and legal
                  requirements
                </li>
                <li>Time to ask questions</li>
              </ul>

              <p>
                You are never pressured in any direction. If the clinic does
                not provide the service you need, it can tell you so
                honestly.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Types of Methods
              </h2>

              <p>
                <strong>Medical (medication-based) termination:</strong>{" "}
                Suitable only in the early weeks, under a doctor's
                supervision and with clear follow-up arrangements.
              </p>

              <p>
                <strong>Surgical termination:</strong> A short procedure by a
                trained doctor under suitable anaesthesia, used for early
                pregnancy or when medication is not appropriate. Later
                terminations, where legally permitted, take place in settings
                with the necessary facilities.
              </p>

              <p>
                The right choice depends on gestational age, your health and
                your preference.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning From Amroha
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  Ask the clinic whether it provides MTP, at what stages, and
                  where the procedure takes place. Please confirm this
                  directly.
                </li>
                <li>Ask what documents to bring, such as identification</li>
                <li>Travel with someone you trust, if you can</li>
                <li>
                  Arrange transport home, especially if sedation is planned
                </li>
                <li>
                  Identify the nearest hospital with emergency facilities to
                  your home
                </li>
                <li>Keep the clinic's number saved</li>
              </ul>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Your Aftercare Plan at Home
              </h2>

              <p>
                Your doctor will give personal instructions. This is a
                general outline.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  The first day
                </h3>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Rest, and have someone with you</li>
                  <li>Expect cramping and bleeding, and use sanitary pads</li>
                  <li>Eat light meals and drink fluids</li>
                  <li>Take pain relief only as prescribed</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  The first few days
                </h3>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Bleeding and cramping usually lessen</li>
                  <li>Return to light activity as you feel able</li>
                  <li>
                    Keep a note of bleeding so you can describe it if you call
                    the clinic
                  </li>
                  <li>
                    Avoid intercourse, tampons and swimming until your doctor
                    says it is safe
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  The first two weeks
                </h3>

                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Attend the follow-up your doctor advises, to confirm you
                    are recovering well
                  </li>
                  <li>
                    Discuss contraception, since fertility can return quickly
                  </li>
                  <li>Mention low mood or distress. Support is available</li>
                </ul>
              </div>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <h3 className="mb-3 font-bold text-red-800">
                  Seek urgent medical care if you have:
                </h3>

                <ul className="list-disc space-y-2 pl-6 text-gray-700">
                  <li>Very heavy bleeding that soaks a pad every hour</li>
                  <li>Severe or worsening abdominal pain</li>
                  <li>Fever or chills</li>
                  <li>Foul-smelling discharge</li>
                  <li>Dizziness or fainting</li>
                </ul>

                <p className="mt-4 font-medium text-gray-800">
                  If you cannot reach the clinic quickly, go to the nearest
                  emergency facility. Do not delay care to travel to another
                  city.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Privacy</h2>

              <p>
                The MTP Act protects the privacy of women seeking termination.
                Details are kept confidential and not disclosed except as
                the law permits. At Dr. Priyanka Gynaec, your concerns are
                discussed respectfully, and your medical details are kept
                confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>

              <p>
                Feelings after termination vary widely. Some women feel
                relief. Others feel sadness, guilt or anxiety, particularly
                if the decision was difficult or came from medical reasons.
                All of these reactions are valid. Talking with your doctor,
                a trusted family member or a counsellor can help.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Contraception and Future Pregnancies
              </h2>

              <p>
                A termination visit is also the time to plan ahead. Your
                doctor can help you choose a contraceptive method suited to
                your health and lifestyle. In most cases, a termination done
                safely by a qualified doctor does not affect later fertility.
                The clinic's antenatal and fertility services are available
                when you are ready.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>A listening-first, judgement-free approach</strong>
                </li>
                <li>
                  <strong>Detailed assessment</strong> with 3D/4D ultrasound
                </li>
                <li>
                  <strong>Clear explanations</strong> of options and legal
                  requirements
                </li>
                <li>
                  <strong>Confidential, respectful care</strong>
                </li>
                <li>
                  <strong>Complete women's healthcare,</strong> including
                  contraception, fertility, pregnancy and postnatal services
                </li>
              </ul>
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
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
                  <MessageCircle className="h-5 w-5 shrink-0" />
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

              <div className="mt-7 flex flex-wrap gap-4">
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
