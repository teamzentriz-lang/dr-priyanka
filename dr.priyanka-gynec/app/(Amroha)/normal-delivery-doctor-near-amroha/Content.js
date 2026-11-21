
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
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for pregnancy care.",
  },
  {
    q: "Who is a normal delivery doctor for patients from Amroha?",
    a: "Dr. Priyanka Pachauri provides antenatal care and delivery support, prioritising normal vaginal delivery wherever it is safe.",
  },
  {
    q: "Is normal delivery always possible?",
    a: "Not always. It depends on your health, the baby's position and size, and how labour progresses. Your doctor will assess this throughout pregnancy.",
  },
  {
    q: "When should I start preparing?",
    a: "From early pregnancy, with regular visits and healthy habits. The last eight weeks are a good time to finalise your plan and bag.",
  },
  {
    q: "Can I have a normal delivery after a previous caesarean?",
    a: "Some women can attempt a trial of labour, depending on the reason for the earlier caesarean and the current pregnancy. Discuss this with your doctor early.",
  },
  {
    q: "Where will my delivery take place?",
    a: "Please confirm this directly with the clinic when you book, and discuss the plan during antenatal visits.",
  },
  {
    q: "When should I leave for delivery if I live in Amroha?",
    a: "Ask your doctor for a personal plan in the third trimester. In an emergency, go to the nearest hospital.",
  },
  {
    q: "What are the signs of labour?",
    a: "Regular, strengthening contractions, a show, leaking fluid and persistent lower back pain. Contact your doctor promptly.",
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

export default function NormalDeliveryDoctorNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Normal Delivery Doctor near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                The last two months of pregnancy go quickly. Visits become
                more frequent, the baby grows fast, and family members start
                asking about the plan. A clear countdown helps you feel
                prepared rather than anxious.
              </p>

              <p>
                If you live in Amroha,{" "}
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
                in neighbouring <strong>Moradabad</strong> is an option to
                consider. The clinic is located in <strong>Moradabad</strong>,
                not in Amroha, and women from Amroha and surrounding areas
                travel there for pregnancy care. Dr. Priyanka supports{" "}
                <strong>normal vaginal delivery wherever it is safe</strong>{" "}
                for mother and baby. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong>
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is a Normal Delivery?
              </h2>

              <p>
                A normal delivery is when the baby is born through the birth
                canal without surgery. Labour begins on its own, or is
                carefully induced when medically needed, and moves through
                three stages: the opening of the cervix, the birth of the
                baby and the delivery of the placenta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When It Is Suitable
              </h2>

              <p>
                Your doctor considers the baby&apos;s position (head-down is
                ideal), the baby&apos;s size, the placenta&apos;s position,
                your health and medical conditions, previous deliveries or
                caesarean history, and how labour progresses. This is assessed
                throughout pregnancy, not only at the end. A caesarean is
                advised only when medically necessary, and the reasons are
                explained openly.
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                The 8-Week Countdown
              </h2>

              <p>
                Your doctor will tailor this to your pregnancy. Use it as a
                guide for conversation.
              </p>

              <div className="space-y-5">
                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Weeks 32 to 33 (about 8 weeks to go)
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Attend your scheduled visit, and ask about the
                      baby&apos;s growth and position
                    </li>
                    <li>Review blood pressure, weight and any test results</li>
                    <li>
                      Discuss delivery options and what a normal delivery
                      means for you
                    </li>
                    <li>
                      Start gentle, doctor-approved activity if you have not
                      already
                    </li>
                    <li>Begin learning about the stages of labour</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Weeks 34 to 35
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>
                      Ask about the baby&apos;s position, and whether anything
                      affects the plan
                    </li>
                    <li>Practise breathing and relaxation techniques</li>
                    <li>Discuss pain relief options</li>
                    <li>Agree on who will accompany you</li>
                    <li>
                      Confirm the plan with the clinic, including where the
                      delivery will take place
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Weeks 36 to 37
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Visits are often weekly or as advised</li>
                    <li>Pack your hospital bag</li>
                    <li>
                      Keep your antenatal card, reports and identification
                      together
                    </li>
                    <li>Arrange transport, and plan the route</li>
                    <li>
                      Learn the signs of labour, and when to call the doctor
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-gray-200 p-5">
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    Weeks 38 to 40
                  </h3>
                  <ul className="list-disc space-y-2 pl-6">
                    <li>Keep your phone charged and your bag by the door</li>
                    <li>
                      Count baby movements as your doctor has taught you
                    </li>
                    <li>Rest, eat well and stay hydrated</li>
                    <li>
                      Know exactly who to call and where to go if labour starts
                    </li>
                    <li>Attend every scheduled check-up</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Past your Due Date
              </h2>

              <p>
                Many babies arrive after the due date. Your doctor will
                monitor you and the baby more closely, and discuss whether
                induction is advisable. Do not skip visits during this period.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Care Behind a Safe Birth
              </h2>

              <p>At Dr. Priyanka Gynaec, antenatal services include:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Early registration and trimester-wise check-ups</li>
                <li>Ultrasound on a Voluson E22 3D and 4D machine</li>
                <li>
                  Blood tests and screening for gestational diabetes, anaemia
                  and thyroid problems
                </li>
                <li>
                  Monitoring of blood pressure, weight and the baby&apos;s
                  growth
                </li>
                <li>Nutrition, activity and lifestyle guidance</li>
                <li>
                  Counselling on labour, pain relief options and newborn care
                </li>
              </ul>

              <p>
                Early attention to conditions like high blood pressure or
                diabetes greatly improves the chance of a safe delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting Your Body and Mind Ready
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Stay active:</strong> Gentle walking and
                  doctor-approved exercises help. Ask before starting
                  anything new
                </li>
                <li>
                  <strong>Practise breathing and relaxation:</strong> Simple
                  techniques help during contractions
                </li>
                <li>
                  <strong>Eat balanced meals and stay hydrated</strong>
                </li>
                <li>
                  <strong>Sleep and manage stress:</strong> Rest well, and ask
                  family for help
                </li>
                <li>
                  <strong>Learn what to expect:</strong> Knowing the stages
                  reduces fear
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Signs That Labour Has Started
              </h2>

              <p>Contact your doctor if you notice:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Regular contractions that grow stronger and closer together
                </li>
                <li>A &quot;show,&quot; a mucus plug that may be blood-tinged</li>
                <li>Leaking or a gush of fluid</li>
                <li>Persistent lower back pain with tightening</li>
                <li>Reduced baby movements, which needs urgent care</li>
              </ul>

              <p className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 font-medium text-red-800">
                Do not wait at home if you have heavy bleeding, severe
                constant pain, fever or no baby movements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Pain Relief and Comfort
              </h2>

              <p>
                Fear of pain is natural. Discuss options during antenatal
                visits. These may include breathing techniques, position
                changes, supportive company and medical pain relief where
                appropriate. Your doctor will explain what is suitable for
                you, and the benefits and limits of each.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                The Go-Plan: Decide Before Labour Starts
              </h2>

              <p>
                Write these answers on one page, and share it with your family.
              </p>

              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Who do I call first?</strong> Doctor&apos;s clinic
                  number, saved on every family member&apos;s phone
                </li>
                <li>
                  <strong>Where do we go?</strong> Confirm directly with the
                  clinic where deliveries take place
                </li>
                <li>
                  <strong>Who drives, and what is the backup?</strong> A second
                  driver or vehicle
                </li>
                <li>
                  <strong>When do we leave?</strong> Ask your doctor for a
                  personal plan
                </li>
                <li>
                  <strong>What if labour starts suddenly?</strong> Know the
                  nearest hospital with emergency and delivery facilities to
                  your home
                </li>
                <li>
                  <strong>Who looks after other children?</strong>
                </li>
                <li>
                  <strong>Where are the documents and bag?</strong> In one
                  place, by the door
                </li>
              </ol>

              <p className="rounded-xl bg-red-50 p-4 font-medium text-red-800">
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                The Go-Bag
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Antenatal card, reports and identification</li>
                <li>Comfortable clothes and sanitary pads</li>
                <li>Toiletries, a towel and slippers</li>
                <li>Snacks and water</li>
                <li>Baby clothes, wraps and diapers</li>
                <li>Phone, charger and important contact numbers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When a Pregnancy Needs Extra Attention
              </h2>

              <p>
                A high-risk pregnancy does not automatically rule out a normal
                delivery. Diabetes, high blood pressure, thyroid disease,
                previous miscarriage, twins or pregnancy after IVF may need
                closer monitoring and a careful plan. Dr. Priyanka Pachauri
                assesses each case individually and chooses the safest route.
                Some women with a previous caesarean can attempt a trial of
                labour, depending on the reason and the current pregnancy.
                Discuss this early.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When a Caesarean Becomes Necessary
              </h2>

              <p>A caesarean may be advised if:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>The baby shows signs of distress</li>
                <li>
                  Labour does not progress despite adequate time and support
                </li>
                <li>The baby is in an unfavourable position</li>
                <li>The placenta covers the cervix</li>
                <li>There are serious maternal health risks</li>
              </ul>

              <p>
                The goal is a safe birth for both of you, not one particular
                method.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery After a Normal Delivery
              </h2>

              <p>
                Postnatal care includes stitch care and pain relief, guidance
                on bleeding and hygiene, breastfeeding support, advice on diet
                and rest, contraception counselling and follow-up visits.
                Newborn care, paediatric consultations and vaccinations are
                available at the clinic.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Expertise with heart:</strong> Training in
                  laparoscopy, fertility treatment and women&apos;s health,
                  with a compassionate approach
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
                </li>
                <li>
                  <strong>Advanced imaging:</strong> A Voluson E22 3D/4D
                  ultrasound machine
                </li>
                <li>
                  <strong>Complete care in one place:</strong> Fertility,
                  pregnancy, delivery and paediatric services
                </li>
                <li>
                  <strong>Honest guidance:</strong> Advice on the safest mode
                  of delivery
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
