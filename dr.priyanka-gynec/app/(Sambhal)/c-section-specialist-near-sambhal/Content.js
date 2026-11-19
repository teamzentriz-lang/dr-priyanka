import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Sambhal?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Sambhal and nearby areas travel there for pregnancy care.",
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
    q: "How long does recovery take?",
    a: "Many women feel considerably better within a few weeks, though full healing takes longer. Your doctor will give a personalised plan.",
  },
  {
    q: "When can I travel back to Sambhal after surgery?",
    a: "Ask your doctor before discharge. They will advise on timing and how to travel comfortably and safely.",
  },
  {
    q: "Can I have a normal delivery after a C-section?",
    a: "Some women can, depending on the reason for the earlier caesarean, the type of incision and current health. This needs individual assessment.",
  },
  {
    q: "Can I breastfeed after a C-section?",
    a: "Yes. Most mothers can begin breastfeeding soon after surgery with support on comfortable positions.",
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

export default function CSectionSpecialistNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              C-Section Specialist near Sambhal – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              Being told you may need a caesarean can bring relief, worry or
              confusion. Families often have strong opinions, and advice comes
              from every direction. What you need is a doctor who explains the
              reason clearly, answers your questions and puts your safety and
              your baby&apos;s first.
            </p>

            <p>
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring <strong>Moradabad</strong> prioritises normal
              delivery wherever it is safe and advises a caesarean only when it
              is medically necessary. The clinic is located in{" "}
              <strong>Moradabad</strong>, not in Sambhal, and women from Sambhal
              and surrounding areas travel there for pregnancy care. Its
              philosophy is <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What a C-Section Is
              </h2>
              <p>
                A caesarean section is a surgical procedure in which the baby
                is born through an incision in the mother&apos;s abdomen and
                uterus. It can be <strong>planned</strong> in advance for a
                known reason, or <strong>emergency</strong>, decided during
                labour or late pregnancy when a concern arises. Both are safe
                when performed by an experienced team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Understanding the Recommendation
              </h2>
              <p>A caesarean may be advised if:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>The baby shows signs of distress</li>
                <li>Labour does not progress despite adequate time and support</li>
                <li>The baby is in a breech or transverse position</li>
                <li>The placenta covers the cervix</li>
                <li>
                  There is a serious maternal condition, such as severe
                  pre-eclampsia
                </li>
                <li>A multiple pregnancy has complicating factors</li>
                <li>Previous uterine surgery raises specific risks</li>
              </ul>
              <p>
                Not every case in these groups automatically needs surgery.
                Your doctor weighs your situation and explains the plan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Questions to Ask Before Agreeing
              </h2>
              <p>
                Write these down and ask them calmly. A good doctor welcomes
                them.
              </p>
              <ol className="list-decimal space-y-3 pl-6">
                <li>What exactly is the medical reason for the caesarean?</li>
                <li>Is it planned or could it still change?</li>
                <li>
                  What are the alternatives, and why are they not suitable for
                  me?
                </li>
                <li>What are the benefits and risks in my case?</li>
                <li>What type of anaesthesia will be used?</li>
                <li>How long will recovery take?</li>
                <li>How will this affect future pregnancies?</li>
                <li>
                  Where will the surgery take place? Please confirm this
                  directly with the clinic.
                </li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Myths Families Often Hear
              </h2>

              <div className="space-y-4">
                {[
                  {
                    myth: "A caesarean is an easier way to deliver.",
                    fact: "It is major abdominal surgery with a longer recovery and its own risks.",
                  },
                  {
                    myth: "After one caesarean, every delivery must be a caesarean.",
                    fact: "Some women can attempt a vaginal birth later, depending on the reason, the incision and their health.",
                  },
                  {
                    myth: "A mother who has a caesarean cannot breastfeed well.",
                    fact: "Most mothers can begin breastfeeding soon after surgery with support on comfortable positions.",
                  },
                  {
                    myth: "Choosing a date or time is better for the baby.",
                    fact: "Timing should follow medical advice, not astrology or convenience.",
                  },
                ].map((item) => (
                  <div
                    key={item.myth}
                    className="rounded-xl border border-gray-200 p-5"
                  >
                    <p className="font-semibold text-gray-900">
                      Myth: {item.myth}
                    </p>
                    <p className="mt-2">
                      <strong>Fact:</strong> {item.fact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Care Before a C-Section
              </h2>
              <p>
                Good preparation makes surgery safer. Antenatal care at the
                clinic includes:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Early registration and trimester-wise check-ups</li>
                <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
                <li>
                  Blood tests and screening for anaemia, gestational diabetes
                  and thyroid problems
                </li>
                <li>
                  Review of the placenta&apos;s position and the baby&apos;s
                  growth and presentation
                </li>
                <li>Blood pressure and weight monitoring</li>
                <li>Counselling on anaesthesia, surgery and hospital stay</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for a Planned C-Section
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Complete the pre-operative check-up and blood tests</li>
                <li>Discuss anaesthesia with the anaesthetist</li>
                <li>Follow fasting instructions exactly</li>
                <li>Share your full medical history, allergies and medicines</li>
                <li>Pack the hospital bag early</li>
                <li>Arrange help at home for the first few weeks</li>
              </ul>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">Hospital Bag</h3>
                <p className="mt-2">
                  Antenatal card, reports and identification; loose comfortable
                  clothes and sanitary pads; toiletries; baby clothes and
                  wraps; phone, charger and contact numbers.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                During the Surgery
              </h2>
              <p>
                Most women receive regional anaesthesia, which numbs the lower
                body while you stay awake. A careful incision is made, the baby
                is delivered usually within minutes, and the layers are then
                stitched. When both mother and baby are stable, early contact
                and breastfeeding are often possible. The whole procedure
                usually takes about 30 to 60 minutes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning From Sambhal
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
                <li>
                  Ask when it is safe to travel home after surgery, and how
                </li>
              </ul>

              <div className="rounded-xl border border-red-200 bg-red-50 p-5">
                <p className="font-semibold text-red-800">
                  Important emergency advice
                </p>
                <p className="mt-2 text-red-900">
                  In an emergency, go to the nearest emergency facility
                  immediately. Do not delay care to travel to another city.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Family Recovery Plan
              </h2>
              <p>
                Recovery takes longer than after a normal delivery, and family
                support makes a real difference.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                For the mother:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Follow wound care instructions carefully</li>
                <li>
                  Walk gently, supporting the incision, and avoid heavy
                  lifting until the doctor allows
                </li>
                <li>
                  Eat balanced meals with fluids and fibre to prevent
                  constipation
                </li>
                <li>Take medicines on time</li>
                <li>Rest when the baby sleeps</li>
                <li>
                  Try breastfeeding positions that avoid pressure on the wound
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                For the family:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Take over household chores, cooking and lifting</li>
                <li>Help with night feeds and baby care where possible</li>
                <li>
                  Watch for warning signs, and help her reach care quickly
                </li>
                <li>
                  Be patient with mood changes, and encourage her to speak to
                  the doctor if low mood continues
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs After Surgery
              </h2>
              <p>
                Contact your doctor promptly if you notice fever, increasing
                pain, redness or discharge from the wound, heavy bleeding,
                foul-smelling discharge, leg swelling or pain, or
                breathlessness. If you cannot reach the clinic quickly, go to
                the nearest hospital.
              </p>
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
                Future Pregnancies
              </h2>
              <p>
                Depending on the reason for the first surgery, the type of
                uterine incision and your health, you may be able to attempt a
                vaginal birth next time, or you may be advised to plan another
                caesarean. Doctors also usually recommend a gap between
                pregnancies, so the uterus can heal. Discuss this early,
                ideally before conceiving again.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                High-Risk Pregnancy and Delivery Planning
              </h2>
              <p>
                Women with diabetes, high blood pressure, thyroid disease,
                twin pregnancy, previous uterine surgery or pregnancy after IVF
                may need a detailed birth plan. Dr. Priyanka Pachauri assesses
                each case individually, monitors closely and chooses the
                safest mode and timing of delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Newborn and Postnatal Care
              </h2>
              <p>
                The clinic supports recovery, breastfeeding, contraception
                counselling and emotional wellbeing. Paediatric consultations,
                vaccinations and newborn care are also available, so mother
                and baby can continue with the same trusted team.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Honest guidance:</strong> A caesarean advised only
                  when medically necessary.
                </li>
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and women&apos;s health,
                  with a compassionate approach.
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history.
                </li>
                <li>
                  <strong>Advanced imaging:</strong> A Voluson E22 3D/4D
                  ultrasound machine.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
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

              <div className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
                <h3 className="text-xl font-bold">Dr. Priyanka Gynaec</h3>
                <p className="mt-3">
                  <strong>Doctor:</strong> Dr. Priyanka Pachauri
                </p>
                <p className="mt-2">
                  <strong>Address:</strong> A2, near Old Roadways, Gandhi
                  Nagar, Moradabad, Uttar Pradesh – 244001
                </p>

                <div className="mt-5 space-y-3">
                  <p className="flex flex-wrap items-center gap-2">
                    <Phone size={18} />
                    <strong>Call for appointment:</strong>
                    <a
                      href="tel:+919079765578"
                      className="underline underline-offset-2"
                    >
                      +91 90797 65578
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Phone size={18} />
                    <strong>WhatsApp:</strong>
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      +91 89796 70705
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Mail size={18} />
                    <strong>Email:</strong>
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="underline underline-offset-2"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </p>

                  <p className="flex flex-wrap items-center gap-2">
                    <Globe size={18} />
                    <strong>Website:</strong>
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </p>
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
                    Explore Services
                  </Link>
                </div>
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
                  <p className="mt-2">{faq.a}</p>
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