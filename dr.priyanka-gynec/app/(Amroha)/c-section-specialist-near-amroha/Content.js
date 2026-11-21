import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Amroha?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for pregnancy care.",
  },
  {
    q: "Does the clinic prioritise normal delivery?",
    a: "Yes. Normal delivery is prioritised whenever it is safe for mother and baby. A caesarean is advised only when medically necessary.",
  },
  {
    q: "Where will my C-section take place?",
    a: "Please confirm this directly with the clinic when you book, and discuss the delivery plan during antenatal visits.",
  },
  {
    q: "Is a C-section safe?",
    a: "It is a commonly performed and generally safe surgery when done for a valid medical reason by an experienced team. Like any surgery, it carries some risks, which your doctor will explain.",
  },
  {
    q: "Will I be awake during the surgery?",
    a: "Usually yes, if regional anaesthesia is used. Your anaesthetist will discuss the best option for you.",
  },
  {
    q: "How long does recovery take?",
    a: "Many women feel considerably better within a few weeks, though full healing takes longer. Your doctor will give a personalised plan.",
  },
  {
    q: "How do I care for the scar?",
    a: "Keep it clean and dry, avoid scratching and heavy lifting, wear loose clothing and follow your doctor's wound care instructions. Report redness, discharge, fever or increasing pain.",
  },
  {
    q: "Can I have a normal delivery after a C-section?",
    a: "Some women can, depending on the reason for the earlier caesarean, the type of incision and current health. This needs individual assessment.",
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

export default function CSectionSpecialistNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                C-Section Specialist near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                A caesarean is a common operation, but for the family waiting
                outside it can feel long and stressful. Knowing what happens on
                the day, how the scar heals and what a later pregnancy may look
                like removes much of the uncertainty.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong>{" "}
                is an option to consider. The clinic is located in{" "}
                <strong>Moradabad, not in Amroha</strong>, and women from Amroha
                and surrounding areas travel there for pregnancy care. The
                clinic prioritises normal delivery wherever it is safe and
                advises a caesarean only when it is medically necessary. Its
                philosophy is <strong>&quot;Her Health First.&quot;</strong>
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What a C-Section Is
              </h2>

              <p>
                A caesarean section is a surgical procedure in which the baby is
                born through an incision in the mother&apos;s abdomen and
                uterus. It may be <strong>planned</strong> in advance for a
                known reason, or <strong>emergency</strong>, decided during
                labour or late pregnancy when a concern arises. Both are safe
                when performed by an experienced team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When It May Be Advised
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>The baby shows signs of distress</li>
                <li>
                  Labour does not progress despite adequate time and support
                </li>
                <li>The baby is in a breech or transverse position</li>
                <li>The placenta covers the cervix</li>
                <li>
                  There is a serious maternal condition, such as severe
                  pre-eclampsia
                </li>
                <li>Previous uterine surgery raises specific risks</li>
              </ul>

              <p>
                Not every case in these groups needs surgery. Your doctor
                weighs your situation and explains the plan in simple terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Care Before Surgery
              </h2>

              <p>
                Antenatal care at the clinic includes early registration,
                trimester-wise check-ups, ultrasound on a Voluson E22 3D and
                4D machine, blood tests, screening for anaemia, gestational
                diabetes and thyroid problems, review of the placenta and the
                baby&apos;s position, and counselling on anaesthesia and
                recovery. Regular monitoring lets decisions be made calmly.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                The Day of Surgery: A Family Walkthrough
              </h2>

              <p>
                Hospital routines vary, so confirm the details with your care
                team. This is a general picture.
              </p>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Before the operation
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    The mother arrives at the agreed time, having followed
                    fasting instructions
                  </li>
                  <li>
                    Documents are checked, and a consent discussion takes
                    place. Ask any remaining questions before signing
                  </li>
                  <li>
                    Basic checks are done: blood pressure, pulse, haemoglobin
                    and baby&apos;s heartbeat
                  </li>
                  <li>She changes into hospital clothes, and a drip is started</li>
                  <li>
                    The anaesthetist reviews her history and explains the
                    anaesthesia
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  In the operating theatre
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Most women receive regional anaesthesia, which numbs the
                    lower body while she stays awake. General anaesthesia is
                    used in some situations
                  </li>
                  <li>The baby is delivered, usually within minutes</li>
                  <li>The placenta is removed and the layers are stitched</li>
                  <li>The whole procedure usually takes about 30 to 60 minutes</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Right after
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>
                    Mother and baby are checked, and early contact and
                    breastfeeding are encouraged when both are stable
                  </li>
                  <li>She moves to a recovery area, then to a room</li>
                  <li>
                    Pain relief is given, and nurses monitor bleeding, blood
                    pressure and the wound
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  For the family waiting outside
                </h3>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Keep the ID, documents and phone numbers ready</li>
                  <li>
                    Expect to wait. Delays do not necessarily signal a problem
                  </li>
                  <li>Ask staff for updates at sensible intervals</li>
                  <li>
                    Prepare the room, clothes and meals for when she is ready
                    for visitors
                  </li>
                  <li>
                    Do not give her food or drink until the team says it is safe
                  </li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning From Amroha
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Decide who will accompany you, and who will care for other
                  children
                </li>
                <li>Arrange family accommodation if needed</li>
                <li>Keep transport on standby as your due date nears</li>
                <li>
                  Identify the nearest hospital with emergency and delivery
                  facilities to your home, in case labour begins suddenly
                </li>
                <li>Ask when it is safe to travel home after surgery, and how</li>
                <li>
                  Confirm directly with the clinic where the surgery will take
                  place
                </li>
              </ul>

              <p className="rounded-xl border-l-4 border-red-600 bg-red-50 p-4 font-medium text-gray-800">
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hospital Bag Checklist
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Antenatal card, reports and identification</li>
                <li>Loose, comfortable clothes and sanitary pads</li>
                <li>Toiletries and a towel</li>
                <li>Baby clothes, wraps and diapers</li>
                <li>Phone, charger and contact numbers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Scar Care and Long-Term Healing
              </h2>

              <p>
                The skin heals in weeks, but deeper layers take months. A few
                habits help.
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Keep the wound clean and dry,</strong> and follow your
                  doctor&apos;s instructions on dressings
                </li>
                <li>
                  <strong>Do not scratch or pick</strong> scabs or stitches
                </li>
                <li>
                  <strong>Wear loose, soft clothing</strong> that does not rub
                  the wound
                </li>
                <li>
                  <strong>Support the incision</strong> when coughing, laughing
                  or getting up
                </li>
                <li>
                  <strong>Avoid heavy lifting</strong> until your doctor allows
                </li>
                <li>
                  <strong>Eat well and drink fluids,</strong> since protein and
                  hydration support healing
                </li>
                <li>
                  <strong>Avoid applying home remedies</strong> to the wound
                  without asking your doctor
                </li>
                <li>
                  <strong>Expect changes over time:</strong> the scar may feel
                  numb, itchy or tender for months, and its colour fades
                  gradually
                </li>
              </ul>

              <p className="rounded-xl bg-amber-50 p-5 text-gray-800">
                <strong>Contact your doctor if you notice</strong> redness
                spreading from the wound, swelling, discharge, a foul smell,
                fever, increasing pain or the wound opening.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Walk gently, supporting the incision</li>
                <li>
                  Eat balanced meals with fluids and fibre to prevent
                  constipation
                </li>
                <li>Take medicines on time</li>
                <li>Rest when the baby sleeps</li>
                <li>
                  Try breastfeeding positions that avoid pressure on the wound
                </li>
                <li>Attend follow-up visits</li>
              </ul>

              <p>
                Report fever, heavy bleeding, foul-smelling discharge, leg
                swelling or pain, or breathlessness without delay. If you
                cannot reach the clinic quickly, go to the nearest hospital.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Repeat Caesarean and Future Pregnancies
              </h2>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Will my next baby also need a caesarean?
                </h3>
                <p>
                  Not always. Some women can attempt a trial of labour,
                  depending on the reason for the first caesarean, the type of
                  uterine incision, the gap between pregnancies and current
                  health.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  What does a repeat caesarean involve?
                </h3>
                <p>
                  It is similar to the first, though scar tissue can make
                  surgery more complex. Your doctor will plan accordingly.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  How soon can I get pregnant again?
                </h3>
                <p>
                  Doctors usually recommend a gap, so the uterus can heal well.
                  Ask your doctor for personal advice.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  When should I discuss this?
                </h3>
                <p>
                  Early, ideally before conceiving again, and at the first
                  antenatal visit of the next pregnancy.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Wellbeing
              </h2>

              <p>
                Some women feel disappointed if the birth did not go as they
                imagined. Others feel anxious about recovery. These feelings
                are common and valid. Talk to your doctor, partner or a trusted
                family member. If low mood or anxiety lasts beyond the first
                couple of weeks, or stops you coping, ask for professional
                support.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                High-Risk Pregnancy and Delivery Planning
              </h2>

              <p>
                Women with diabetes, high blood pressure, thyroid disease, twin
                pregnancy, previous uterine surgery or pregnancy after IVF may
                need a detailed birth plan. Dr. Priyanka Pachauri assesses each
                case individually, monitors closely and chooses the safest
                mode and timing of delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Newborn and Postnatal Care
              </h2>

              <p>
                The clinic supports recovery, breastfeeding, contraception
                counselling and emotional wellbeing. Paediatric consultations,
                vaccinations and newborn care are also available.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Honest guidance:</strong> A caesarean advised only
                  when medically necessary
                </li>
                <li>
                  <strong>Expertise with heart:</strong> Training in laparoscopy,
                  fertility treatment and women&apos;s health, with a
                  compassionate approach
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Advanced imaging:</strong> A Voluson E22 3D/4D
                  ultrasound machine
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