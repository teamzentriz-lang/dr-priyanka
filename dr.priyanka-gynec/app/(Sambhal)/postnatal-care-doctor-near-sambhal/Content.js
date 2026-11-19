import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Sambhal?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Sambhal and nearby areas travel there for care.",
  },
  {
    q: "When should I have my first postnatal checkup?",
    a: "Usually within the first one to two weeks after delivery, and a full checkup around six weeks. Visit sooner if you have any warning signs.",
  },
  {
    q: "Can my baby's checkup and vaccination be planned with my visit?",
    a: "The clinic offers paediatric consultations, newborn care and vaccinations. Ask when you book whether both can be combined.",
  },
  {
    q: "How long does bleeding last after delivery?",
    a: "It usually lessens over several weeks. Heavy bleeding, large clots or foul-smelling discharge needs medical review.",
  },
  {
    q: "How long does C-section recovery take?",
    a: "Many women feel noticeably better within a few weeks, but full healing takes longer. Follow your doctor's guidance on activity and wound care.",
  },
  {
    q: "Is it normal to feel low after childbirth?",
    a: "Mild mood swings in the first two weeks are common. If sadness, anxiety or hopelessness continues or worsens, speak to your doctor, since postnatal depression is treatable.",
  },
  {
    q: "Can I get pregnant while breastfeeding?",
    a: "Yes, it is possible. Discuss suitable contraception at your postnatal visit.",
  },
  {
    q: "When is it safe to travel to the clinic after delivery?",
    a: "Ask your doctor before leaving the hospital. They will advise based on your delivery type and recovery.",
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

export default function PostnatalCareDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Postnatal Care Doctor near Sambhal – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              After delivery, the baby gets most of the attention. The
              mother&apos;s recovery matters just as much, and it follows a
              pattern. Knowing what is usual in each week helps you and your
              family tell normal healing from a problem.
            </p>

            <p>
              If you live in Sambhal, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in{" "}
              <strong>Moradabad, not in Sambhal</strong>, and women from Sambhal
              and surrounding areas travel there for care. It offers postnatal
              care for mothers along with newborn care and vaccinations for
              babies. Its philosophy is <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Postnatal Care?
              </h2>

              <p>
                Postnatal care is the medical care a mother receives after
                delivery. It covers physical recovery, emotional wellbeing,
                breastfeeding, contraception and the baby&apos;s early health.
                It usually runs through the first six weeks and often longer.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                The First Six Weeks: A Timeline
              </h2>

              <p>
                Every woman recovers at her own pace, and delivery type matters.
                This is a general picture.
              </p>

              <div className="space-y-5">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Days 1 to 3
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      <strong>Bleeding (lochia)</strong> is heaviest, with some
                      clots
                    </li>
                    <li>
                      <strong>Afterpains</strong> as the uterus contracts back
                    </li>
                    <li>
                      <strong>Soreness</strong> from stitches or the caesarean
                      wound
                    </li>
                    <li>
                      <strong>Breasts</strong> begin filling as milk comes in
                    </li>
                    <li>
                      <strong>Priorities:</strong> rest, pain relief as
                      prescribed, fluids and first feeds
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Week 1
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Bleeding is still present but gradually lighter</li>
                    <li>Fatigue and broken sleep are common</li>
                    <li>Wound or stitches need careful cleaning and watching</li>
                    <li>
                      Mood swings and tearfulness (&quot;baby blues&quot;) may
                      appear
                    </li>
                    <li>
                      <strong>Priorities:</strong> a check on the wound,
                      feeding support, the baby&apos;s weight check and rest
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Weeks 2 to 3
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Bleeding usually lightens and changes colour</li>
                    <li>Energy slowly improves, though tiredness remains</li>
                    <li>Breastfeeding settles for many mothers</li>
                    <li>Baby blues usually fade</li>
                    <li>
                      <strong>Priorities:</strong> gentle walking, balanced
                      meals, continued rest and attending the 1 to 2 week
                      follow-up
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Weeks 4 to 5
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Bleeding may be minimal or have stopped</li>
                    <li>
                      Wounds are healing more, though a caesarean scar may
                      still feel tender
                    </li>
                    <li>
                      The body feels more normal, but pelvic floor muscles are
                      still recovering
                    </li>
                    <li>
                      <strong>Priorities:</strong> gradual activity, pelvic
                      floor awareness, contraception planning
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    Week 6
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      A full postnatal checkup, including a general examination
                    </li>
                    <li>
                      Discussion of contraception, return to exercise and
                      intimacy
                    </li>
                    <li>Review of mood, sleep and long-term health</li>
                    <li>
                      <strong>Priorities:</strong> the six-week visit, and your
                      own questions
                    </li>
                  </ul>
                </div>
              </div>

              <p className="font-semibold text-[#8F1738]">
                Visit sooner than planned if something worries you.
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
                <li>Newborn care, paediatric consultations and vaccinations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery After a Normal Delivery
              </h2>

              <p>
                Common experiences include soreness or stitches, bleeding that
                lightens over weeks, afterpains and fatigue. Keep stitches clean
                and dry, use pain relief as advised, walk gently and eat
                fibre-rich food with plenty of fluids. Ask your doctor when it
                is safe to resume exercise and intimacy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery After a C-Section
              </h2>

              <p>
                Recovery takes longer because it involves abdominal surgery.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Follow wound care instructions carefully</li>
                <li>
                  Support the incision when coughing, laughing or getting up
                </li>
                <li>
                  Walk gently, but avoid heavy lifting until advised
                </li>
                <li>
                  Eat well and drink plenty of fluids to avoid constipation
                </li>
                <li>Take prescribed medicines on time</li>
              </ul>

              <p>
                Report fever, increasing pain, redness, swelling or discharge
                from the wound without delay.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Family Support Plan
              </h2>

              <p>Recovery goes better when the family shares the load.</p>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Husband:</strong> Take night shifts with the baby
                  where possible, handle errands and attend a visit if she
                  wishes
                </li>
                <li>
                  <strong>In-laws and parents:</strong> Cook nourishing meals,
                  manage housework and let her rest, rather than pressing
                  traditions that tire her
                </li>
                <li>
                  <strong>Everyone:</strong> Check with the doctor before
                  giving herbal remedies or special foods, and watch for
                  warning signs
                </li>
                <li>
                  <strong>Visitors:</strong> Keep them short, so she can rest
                  and feed in peace
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Breastfeeding Support
              </h2>

              <p>
                Breastfeeding is natural, but it is also a skill that mother and
                baby learn together. Sore nipples, supply worries and
                engorgement are common early on. Your doctor can help with
                positions, latch, pain, feeding frequency and breastfeeding
                after a caesarean. Most difficulties improve with timely
                support, so ask rather than struggle alone.
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
                <li>Rest whenever the baby sleeps</li>
                <li>Avoid crash diets and heavy exercise in the early weeks</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Emotional Health
              </h2>

              <p>
                Many mothers have &quot;baby blues,&quot; with mood swings and
                tearfulness in the first two weeks, which usually settle on
                their own. <strong>Postnatal depression</strong> is different.
                It involves persistent sadness, anxiety, loss of interest,
                trouble bonding with the baby or overwhelming guilt. It is a
                medical condition, not a weakness, and it is treatable. Talk to
                your doctor or a trusted family member early.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Warning Signs That Need Prompt Attention
              </h2>

              <p>
                Contact your doctor or seek emergency care if you have:
              </p>

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

              <p className="font-semibold text-red-700">
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning Follow-Up From Sambhal
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>Book appointments in advance and confirm timings</li>
                <li>
                  Ask which checks, such as blood pressure or wound review,
                  could be done closer to home if the doctor agrees
                </li>
                <li>
                  Ask whether your check-up and your baby&apos;s check-up or
                  vaccination can be planned on the same trip
                </li>
                <li>Travel with a family member who can help with the baby</li>
                <li>
                  Ask your doctor how and when to travel, especially after a
                  caesarean
                </li>
                <li>Carry your discharge summary, medicines and the baby&apos;s records</li>
                <li>Pack feeding supplies, spare clothes, diapers and water</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Contraception and Family Planning
              </h2>

              <p>
                Fertility can return sooner than many women expect, even while
                breastfeeding. The postnatal visit is the right time to discuss
                short-term and long-term options, methods suited to
                breastfeeding, and, for those who have completed their family,
                laparoscopic sterilization as a safe day-care procedure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
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
            </section>

            <section className="rounded-2xl bg-[#F8F4EA] p-8 text-black">
              <h2 className="mb-4 text-2xl font-bold">
                Book Your Postnatal Care Appointment
              </h2>

              <p className="mb-6">
                Contact Dr. Priyanka Gynaec for post-delivery recovery guidance,
                maternal check-ups and newborn care.
              </p>

              <div className="space-y-4">
                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Call for appointment:</strong>{" "}
                    <a
                      href="tel:+919079765578"
                      className="font-semibold hover:underline"
                    >
                      +91 90797 65578
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/918979670705"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                    >
                      +91 89796 70705
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:drpriyankagynaec@gmail.com"
                      className="font-semibold hover:underline"
                    >
                      drpriyankagynaec@gmail.com
                    </a>
                  </span>
                </p>

                <p className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0 text-[#8F1738]" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://www.gynaecologistmoradabad.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline"
                    >
                      www.gynaecologistmoradabad.com
                    </a>
                  </span>
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
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
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    Q{index + 1}. {faq.q}
                  </h3>
                  <p className="leading-relaxed text-gray-700">{faq.a}</p>
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