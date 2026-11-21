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
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for care.",
  },
  {
    q: "When should I have my first postnatal checkup?",
    a: "Usually within the first one to two weeks after delivery, and a full checkup around six weeks. Visit sooner if you have any warning signs.",
  },
  {
    q: "Is hair fall after delivery normal?",
    a: "Yes, it is common a few months after birth and usually temporary. Mention severe or persistent hair loss to your doctor.",
  },
  {
    q: "Is leaking urine after delivery normal?",
    a: "It is common but not something to ignore. Pelvic floor exercises and assessment can help.",
  },
  {
    q: "When can I exercise again?",
    a: "Gentle walking is usually fine early on. Your doctor will advise on stronger exercise based on your delivery type and recovery.",
  },
  {
    q: "When is it safe to resume intimacy?",
    a: "There is no fixed date. Many doctors suggest waiting until bleeding has settled and wounds have healed, often around the six-week visit. Your doctor will advise you.",
  },
  {
    q: "Is it normal to feel low after childbirth?",
    a: "Mild mood swings in the first two weeks are common. If sadness, anxiety or hopelessness continues or worsens, speak to your doctor, since postnatal depression is treatable.",
  },
  {
    q: "Can my baby's checkup and vaccination be planned with my visit?",
    a: "The clinic offers paediatric consultations, newborn care and vaccinations. Ask when you book whether both can be combined.",
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

export default function PostnatalCareDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Postnatal Care Doctor near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                The first three months after birth are sometimes called the
                &quot;fourth trimester.&quot; Your baby is adjusting to the
                world, and your body is adjusting to life after pregnancy.
                Many changes in this period surprise mothers, because few
                people talk about them.
              </p>

              <p>
                If you live in Amroha, <strong>Dr. Priyanka Pachauri</strong> of
                Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong>{" "}
                is an option to consider. The clinic is located in{" "}
                <strong>Moradabad</strong>, not in Amroha, and women from Amroha
                and surrounding areas travel there for care. It offers
                postnatal care for mothers along with newborn care and
                vaccinations for babies. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong>
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Body Changes Nobody Warned You About
              </h2>

              <p>
                <strong>Hair fall.</strong> Many mothers notice heavy hair
                shedding a few months after delivery as hormones settle. It is
                common and usually temporary. Persistent or severe hair loss,
                or signs of anaemia or thyroid trouble, deserve a check.
              </p>

              <p>
                <strong>Back and joint pain.</strong> Carrying, feeding and
                lifting a baby strain the back. Pregnancy also loosens
                ligaments. Posture, supported feeding positions and gentle
                strengthening help. Persistent or severe pain needs assessment.
              </p>

              <p>
                <strong>Night sweats.</strong> Hormonal shifts can cause
                sweating in the early weeks.
              </p>

              <p>
                <strong>Weight and shape.</strong> Bodies change gradually.
                Crash diets can reduce milk supply and energy. Steady, gentle
                activity and balanced meals work better.
              </p>

              <p>
                <strong>Skin and stretch marks.</strong> Marks fade with time.
                Skin changes often settle as hormones normalise.
              </p>

              <p>
                <strong>Breast changes.</strong> Fullness, leaking and
                tenderness are common while feeding. Hard, red, painful areas
                with fever need prompt attention.
              </p>

              <p>
                <strong>Emotional swings.</strong> Mood changes are common in
                the first two weeks. Persistent sadness or anxiety is different,
                and needs support.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Pelvic Floor: The Overlooked Muscles
              </h2>

              <p>
                The pelvic floor supports the bladder, uterus and bowel.
                Pregnancy and birth strain it, whether you had a normal
                delivery or a caesarean.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">
                Common signs of a weak pelvic floor:
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>Leaking urine when coughing, sneezing or laughing</li>
                <li>A feeling of heaviness or bulging in the vagina</li>
                <li>Difficulty controlling gas or bowel movements</li>
                <li>Discomfort during intercourse</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900">
                What helps:
              </h3>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Pelvic floor exercises, taught by your doctor or a trained
                  therapist
                </li>
                <li>Avoiding constipation, with fluids and fibre</li>
                <li>Avoiding heavy lifting early on</li>
                <li>Gradual return to exercise</li>
              </ul>

              <p>
                Many women feel embarrassed and suffer silently. These
                problems are common and treatable. Mention them at your visit.
                Persistent symptoms may need further assessment, and the clinic
                also offers surgical options such as sacrocolpopexy for
                prolapse when it is truly needed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Returning to Exercise and Intimacy
              </h2>

              <p>
                <strong>Exercise.</strong> Gentle walking is usually encouraged
                soon after delivery. Stronger exercise should wait until your
                doctor approves, particularly after a caesarean. Start slowly,
                and stop if you feel pain, heaviness or increased bleeding.
              </p>

              <p>
                <strong>Intimacy.</strong> There is no fixed date. Many doctors
                suggest waiting until bleeding has settled and stitches or
                wounds have healed, often around the six-week visit. Dryness
                and discomfort are common, particularly while breastfeeding.
                Talk openly with your doctor, and do not feel pressured by
                anyone.
              </p>

              <p>
                <strong>Contraception.</strong> Fertility can return sooner than
                many women expect, even while breastfeeding. Discuss options
                at your postnatal visit, including methods suited to
                breastfeeding. The clinic also offers laparoscopic
                sterilization as a safe day-care procedure for those who have
                completed their family.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Postnatal Services at Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Post-delivery physical examination</li>
                <li>
                  Wound care after a caesarean, or care of stitches after a
                  normal delivery
                </li>
                <li>Review of bleeding, pain and uterine recovery</li>
                <li>Blood pressure, weight and anaemia assessment</li>
                <li>Breastfeeding guidance</li>
                <li>Nutrition and rest advice</li>
                <li>Emotional wellbeing check</li>
                <li>Contraception and family planning counselling</li>
                <li>
                  Newborn care, paediatric consultations and vaccinations
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When to Have Checkups
              </h2>

              <p>Schedules vary, but a typical pattern is:</p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Within the first few days:</strong> Review in the
                  hospital or clinic, especially after a caesarean, stitches or
                  complications
                </li>
                <li>
                  <strong>Around 1 to 2 weeks:</strong> Wound check, bleeding
                  review, feeding support and the baby&apos;s weight check
                </li>
                <li>
                  <strong>Around 6 weeks:</strong> A full postnatal checkup,
                  including a general examination and contraception discussion
                </li>
              </ul>

              <p>
                If you had a high-risk pregnancy, diabetes, high blood pressure
                or a difficult delivery, your doctor may advise extra visits.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery After Delivery
              </h2>

              <p>
                After a <strong>normal delivery</strong>, expect soreness or
                stitches, bleeding that lightens over weeks and afterpains.
                Keep stitches clean and dry, walk gently and eat fibre-rich
                food with plenty of fluids.
              </p>

              <p>
                After a <strong>caesarean</strong>, recovery takes longer.
                Support the incision, walk gently, avoid heavy lifting until
                advised and take medicines on time.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Breastfeeding Support
              </h2>

              <p>
                Breastfeeding is natural, but it is also a skill that mother
                and baby learn together. Sore nipples, supply worries and
                engorgement are common. Your doctor can help with positions,
                latch, pain and feeding frequency, including breastfeeding
                after a caesarean. Most difficulties improve with timely
                support.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Nutrition and Rest
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Eat regular, balanced meals with protein, vegetables, fruit,
                  grains and dairy
                </li>
                <li>Drink enough water through the day</li>
                <li>
                  Continue iron, calcium or other supplements if prescribed
                </li>
                <li>Rest when the baby sleeps</li>
                <li>Accept help from family with housework and meals</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Health
              </h2>

              <p>
                &quot;Baby blues&quot; usually settle within two weeks.{" "}
                <strong>Postnatal depression</strong> involves persistent
                sadness, anxiety, loss of interest, trouble bonding with the
                baby or overwhelming guilt. It is a medical condition, not a
                weakness, and it is treatable. Talk to your doctor or a trusted
                family member early.
              </p>
            </section>

            <section className="space-y-4 rounded-2xl border border-red-200 bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs That Need Prompt Attention
              </h2>

              <p>Contact your doctor or seek emergency care if you have:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Heavy bleeding that soaks a pad within an hour or passes
                  large clots
                </li>
                <li>Fever or chills</li>
                <li>Foul-smelling vaginal discharge</li>
                <li>Severe or worsening abdominal pain</li>
                <li>Redness, swelling or pus at the wound or stitches</li>
                <li>Severe headache or vision changes</li>
                <li>Pain, redness or swelling in the leg</li>
                <li>Chest pain or breathlessness</li>
                <li>
                  Painful, hard, red areas in the breast with fever
                </li>
                <li>
                  Feelings of hopelessness, or thoughts of harming yourself or
                  the baby
                </li>
              </ul>

              <p>
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Follow-Up From Amroha
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Book appointments in advance and confirm timings</li>
                <li>
                  Ask whether your check-up and your baby&apos;s check-up or
                  vaccination can be planned on the same trip
                </li>
                <li>
                  Ask which checks could be done closer to home, if the doctor
                  agrees
                </li>
                <li>Travel with a family member who can help with the baby</li>
                <li>
                  Ask your doctor how and when to travel, especially after a
                  caesarean
                </li>
                <li>Carry your discharge summary, medicines and the baby&apos;s records</li>
                <li>
                  Pack feeding supplies, spare clothes, diapers and water
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-6">
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
                  <strong>Complete care in one place:</strong> Gynaecology,
                  fertility, pregnancy and paediatric services
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice based on what you
                  truly need
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