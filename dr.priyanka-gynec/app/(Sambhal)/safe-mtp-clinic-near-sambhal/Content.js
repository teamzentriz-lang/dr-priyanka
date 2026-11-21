
import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is the clinic located in Sambhal?",
    a: "No. It is in Gandhi Nagar, Moradabad. Women from Sambhal and nearby areas travel there for consultations.",
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
    q: "Do I need my husband's or family's permission?",
    a: "An adult woman gives her own consent. For women under 18, a guardian's consent is generally required.",
  },
  {
    q: "How can I tell if an MTP clinic is safe?",
    a: "Look for a registered doctor, an approved facility, an ultrasound before any decision, clear explanations, proper consent, emergency arrangements and follow-up.",
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
    q: "What are the clinic timings and consultation fees?",
    a: "Please confirm current timings and fees directly with the clinic when you book.",
  },
  {
    q: "How do I book an appointment?",
    a: "Call +91 90797 65578, message on WhatsApp at +91 89796 70705, or use the Book Appointment option on www.gynaecologistmoradabad.com.",
  },
];

export default function SafeMTPClinicNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Safe MTP Clinic near Sambhal – Dr. Priyanka Pachauri, Moradabad
            </h1>

            <p>
              Deciding about a pregnancy is deeply personal. Some women face an
              unplanned pregnancy. Others receive difficult medical news about
              their own health or the baby&apos;s. Whatever your situation, you
              deserve respectful care, privacy and accurate information.
            </p>

            <p>
              If you live in Sambhal, Dr. Priyanka Pachauri of Dr. Priyanka
              Gynaec in neighbouring Moradabad is a doctor you can consult. The
              clinic is located in Moradabad, not in Sambhal, and women from
              Sambhal and surrounding areas travel there for consultations.
              Its philosophy is &quot;Her Health First.&quot; You are listened
              to without judgement.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is MTP?
              </h2>
              <p>
                Medical termination of pregnancy (MTP) is the ending of a
                pregnancy by a qualified doctor. In India it is governed by
                the MTP Act, as amended in 2021, which allows termination in
                specified circumstances and within defined time limits, when
                done by a registered medical practitioner at an approved
                facility.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Myths and Facts
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: Abortion is illegal in India.
                  </p>
                  <p>
                    Fact: It is legal within the conditions of the MTP Act.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: Only married women can get an MTP.
                  </p>
                  <p>
                    Fact: A woman&apos;s marital status does not prevent her
                    from seeking termination within the legal conditions.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: A husband&apos;s or family&apos;s permission is
                    required.
                  </p>
                  <p>
                    Fact: An adult woman gives her own consent. For women
                    under 18, a guardian&apos;s consent is generally required.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: Termination always causes infertility.
                  </p>
                  <p>
                    Fact: In most cases, a termination done safely by a
                    qualified doctor does not affect later fertility.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: Pills from a chemist are a safe shortcut.
                  </p>
                  <p>
                    Fact: Medicines taken without a doctor&apos;s assessment
                    can cause serious bleeding, infection and incomplete
                    termination.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: It is safe to wait and decide later.
                  </p>
                  <p>
                    Fact: Termination is generally safer when done early, and
                    legal limits apply. Do not delay a consultation if you
                    are considering your options.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Myth: A clinic that is cheap and quick is a safe clinic.
                  </p>
                  <p>
                    Fact: Safety depends on a registered doctor, an approved
                    facility, proper assessment and follow-up.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                The Legal Framework in Brief
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Up to 20 weeks:</strong> Termination may be allowed
                  on the opinion of one registered medical practitioner, for
                  reasons such as risk to the woman&apos;s physical or mental
                  health, or contraceptive failure.
                </li>
                <li>
                  <strong>20 to 24 weeks:</strong> Allowed for certain
                  categories of women, such as survivors of sexual assault,
                  minors, women whose marital status has changed during
                  pregnancy and women with specified disabilities, on the
                  opinion of two registered medical practitioners.
                </li>
                <li>
                  <strong>Beyond 24 weeks:</strong> Allowed only for
                  substantial fetal abnormalities diagnosed by a Medical
                  Board.
                </li>
              </ul>
              <p>
                Rules can be updated, so your doctor will explain what applies
                to you. Sex-selective termination is illegal.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Consent and Documents
              </h2>
              <p>
                Before any procedure, you will be asked for informed consent.
                This means you understand the options, risks and aftercare,
                and you agree freely.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                What to expect:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>You sign a consent form yourself, if you are an adult.</li>
                <li>
                  A guardian&apos;s consent is generally required for women
                  under 18.
                </li>
                <li>
                  Your doctor explains what will happen, what could go wrong
                  and what the alternatives are.
                </li>
                <li>
                  You can ask questions, ask for time or change your mind
                  before the procedure.
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                Documents that may be asked for:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Identification</li>
                <li>Previous medical records, if relevant</li>
                <li>For women under 18, the guardian&apos;s identification</li>
              </ul>

              <p>
                Ask the clinic in advance exactly what to bring. Your details
                are kept confidential, and the law protects the privacy of
                women seeking termination.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                How to Tell Whether a Clinic Is Safe
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>A registered doctor performs the procedure.</li>
                <li>
                  The facility is approved under the Act. Ask the clinic to
                  confirm.
                </li>
                <li>
                  An ultrasound confirms the pregnancy and its stage before
                  any decision.
                </li>
                <li>You are examined and your history is taken.</li>
                <li>
                  Options, risks and aftercare are explained in plain
                  language.
                </li>
                <li>Consent is taken properly, without pressure.</li>
                <li>Emergency arrangements exist.</li>
                <li>Follow-up and contraception counselling are offered.</li>
                <li>Your privacy is respected.</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Red Flags</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Anyone offering medicines without an examination or
                  ultrasound.
                </li>
                <li>
                  A chemist, unregistered practitioner or online seller
                  supplying pills.
                </li>
                <li>No explanation of risks or aftercare.</li>
                <li>Pressure to decide immediately.</li>
                <li>
                  A promise of &quot;guaranteed&quot; results, or a very low
                  price with no assessment.
                </li>
                <li>
                  No way to contact the provider if something goes wrong.
                </li>
                <li>Offers to reveal or act on the baby&apos;s sex.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                What Happens at the First Consultation
              </h2>
              <p>A first visit is a private conversation. You can expect:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  A listening-first discussion of your situation and wishes.
                </li>
                <li>
                  Questions about your periods, previous pregnancies and
                  health.
                </li>
                <li>
                  Confirmation of the pregnancy and its duration, usually by
                  ultrasound. The clinic uses a Voluson E22 3D and 4D
                  ultrasound machine.
                </li>
                <li>
                  Basic tests, such as haemoglobin and blood group, if needed.
                </li>
                <li>
                  A clear explanation of options, benefits, risks and legal
                  requirements.
                </li>
                <li>Time to ask questions.</li>
              </ul>
              <p>
                You are never pressured in any direction. If the clinic does
                not provide the service you need, it can tell you so honestly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Types of Methods
              </h2>
              <p>Your doctor will explain which methods suit you.</p>

              <p>
                <strong>Medical (medication-based) termination:</strong>{" "}
                Suitable only in the early weeks, under a doctor&apos;s
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

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Questions to Ask the Clinic
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  Do you provide MTP, and at what stages? Please confirm this
                  directly.
                </li>
                <li>Where will the procedure take place?</li>
                <li>Is the facility approved under the MTP Act?</li>
                <li>Who will perform it?</li>
                <li>How many visits will I need?</li>
                <li>
                  Can the consultation, ultrasound and tests be done on the
                  same day?
                </li>
                <li>What happens if there is a complication?</li>
                <li>Whom do I contact after I return home?</li>
              </ol>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning From Sambhal
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Book in advance, and confirm timings and what to bring.</li>
                <li>Travel with someone you trust, if you can.</li>
                <li>
                  Arrange transport home, especially if sedation is planned.
                </li>
                <li>Plan rest for the rest of the day.</li>
                <li>Carry sanitary pads, water and your records.</li>
                <li>
                  Identify the nearest hospital with emergency facilities to
                  your home.
                </li>
                <li>Keep the clinic&apos;s number saved.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                How a Partner or Trusted Person Can Help
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Listen without judging, and do not pressure her either way.</li>
                <li>Respect that the decision and consent are hers.</li>
                <li>
                  Go with her to the appointment if she wishes, and wait
                  outside if she prefers privacy.
                </li>
                <li>Help with transport, rest and food afterwards.</li>
                <li>
                  Learn the warning signs, and help her reach care quickly.
                </li>
                <li>Be patient with emotions, which can vary widely.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Aftercare and Warning Signs
              </h2>
              <p>
                After termination you can expect guidance on bleeding, pain
                and rest, advice on hygiene and diet, instructions on when to
                resume intercourse, and a follow-up to confirm that you are
                recovering well.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Seek urgent medical care if you have:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Very heavy bleeding that soaks a pad every hour.</li>
                <li>Severe or worsening abdominal pain.</li>
                <li>Fever or chills.</li>
                <li>Foul-smelling discharge.</li>
                <li>Dizziness or fainting.</li>
              </ul>

              <p>
                If you cannot reach the clinic quickly, go to the nearest
                emergency facility. Do not delay care to travel to another
                city.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>
              <p>
                Feelings after termination vary widely. Some women feel
                relief. Others feel sadness, guilt or anxiety, particularly
                if the decision was difficult or came from medical reasons.
                All of these reactions are valid. Talking with your doctor, a
                trusted family member or a counsellor can help. If distress
                continues, please ask for support.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Contraception and Miscarriage Care
              </h2>
              <p>
                A termination visit is also the time to plan ahead. Your
                doctor can help you choose a contraceptive method suited to
                your health and lifestyle, since fertility can return
                quickly. If you have bleeding or pain in early pregnancy, or
                have had a miscarriage, a prompt check-up is important.
                Ultrasound can show whether the miscarriage is complete or
                whether further treatment is needed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>A listening-first, judgement-free approach.</li>
                <li>Detailed assessment with 3D/4D ultrasound.</li>
                <li>Clear explanations of options and legal requirements.</li>
                <li>Confidential, respectful care.</li>
                <li>
                  Complete women&apos;s healthcare, including contraception,
                  fertility, pregnancy and postnatal services.
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
                    Call for appointment:{" "}
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
                    WhatsApp:{" "}
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
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="font-semibold underline"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
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
