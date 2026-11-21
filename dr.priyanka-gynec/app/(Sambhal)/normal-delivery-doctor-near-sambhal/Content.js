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
    q: "Who is a normal delivery doctor for patients from Sambhal?",
    a: "Dr. Priyanka Pachauri provides antenatal care and delivery support, prioritising normal vaginal delivery wherever it is safe.",
  },
  {
    q: "Is normal delivery always possible?",
    a: "Not always. It depends on your health, the baby's position and size, and how labour progresses. Your doctor will assess this throughout pregnancy.",
  },
  {
    q: "Can I have a normal delivery after a previous caesarean?",
    a: "Some women can attempt a trial of labour, depending on the reason for the earlier caesarean and the current pregnancy. Discuss this with your doctor early.",
  },
  {
    q: "Can pain relief be discussed before labour?",
    a: "Yes. Options can be discussed during antenatal visits so you can prepare.",
  },
  {
    q: "Where will my delivery take place?",
    a: "Please confirm this directly with the clinic when you book, and discuss the plan during antenatal visits.",
  },
  {
    q: "When should I leave for delivery if I live in Sambhal?",
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

export default function NormalDeliveryDoctorNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Normal Delivery Doctor near Sambhal – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              Most women who hope for a normal delivery also carry some fear
              about it. Will the pain be unbearable? What if something goes
              wrong? What if I end up needing a caesarean anyway? These worries
              are natural. A good doctor does not dismiss them. She explains
              what happens, prepares you well and tells you honestly what is
              safe.
            </p>

            <p>
              <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec in
              neighbouring <strong>Moradabad</strong> supports{" "}
              <strong>normal vaginal delivery wherever it is safe</strong> for
              mother and baby. The clinic is located in{" "}
              <strong>Moradabad, not in Sambhal</strong>, and women from Sambhal
              and surrounding areas travel there for pregnancy care. Its
              philosophy is <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Common Fears About Normal Delivery
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    &quot;The pain will be too much.&quot;
                  </h3>
                  <p>
                    Labour is intense, and everyone feels it differently.
                    Preparation, breathing techniques, position changes,
                    supportive company and medical pain relief where
                    appropriate can all help. Ask about your options during
                    antenatal visits, so you know what is available.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    &quot;What if the baby is in trouble?&quot;
                  </h3>
                  <p>
                    During labour the baby&apos;s heartbeat and your condition
                    are monitored. If a concern arises, the plan can change
                    promptly, including to a caesarean.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    &quot;What if I tear?&quot;
                  </h3>
                  <p>
                    Some women have small tears or an episiotomy, and these are
                    repaired. Your doctor can explain how this is managed and
                    how recovery goes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    &quot;What if I cannot push the baby out?&quot;
                  </h3>
                  <p>
                    Pushing is guided step by step, and labour is assessed
                    throughout. If progress stalls despite adequate time, the
                    doctor will discuss options.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    &quot;Will I lose control?&quot;
                  </h3>
                  <p>
                    Having information beforehand gives most women a greater
                    sense of control. Knowing the stages of labour and what the
                    team is doing helps you feel part of the process.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    &quot;I had a caesarean before, so normal delivery is
                    impossible.&quot;
                  </h3>
                  <p>
                    Not always. Some women can attempt a trial of labour,
                    depending on the reason for the earlier caesarean and the
                    current pregnancy. This needs individual assessment,
                    ideally early.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is a Normal Delivery?
              </h2>

              <p>
                A normal delivery is when the baby is born through the birth
                canal without surgery. Labour starts on its own, or is carefully
                induced when medically needed, and moves through three stages:
                the opening of the cervix, the birth of the baby and the
                delivery of the placenta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Benefits When It Is Safe
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Generally faster recovery after birth</li>
                <li>No major abdominal surgery or surgical wound</li>
                <li>Lower risk of certain surgical complications</li>
                <li>Easier movement and baby care in the early days</li>
                <li>A shorter hospital stay in most cases</li>
              </ul>

              <p>
                When normal delivery is not safe, a caesarean is the better
                choice, and an honest doctor will say so.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Who Can Try for It?
              </h2>

              <p>Your doctor considers:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>The baby&apos;s position (head-down is ideal)</li>
                <li>The baby&apos;s size and growth</li>
                <li>The position of the placenta</li>
                <li>Your general health and medical conditions</li>
                <li>Previous deliveries or caesarean history</li>
                <li>How labour progresses</li>
              </ul>

              <p>
                This is assessed throughout pregnancy, not only at the end.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                A Birth Preferences Conversation to Have With Your Doctor
              </h2>

              <p>
                Around the third trimester, sit down with your doctor and talk
                through the following. Write your questions in advance.
              </p>

              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  <strong>Mode of delivery:</strong> What are the chances of a
                  normal delivery in my case?
                </li>
                <li>
                  <strong>Pain relief:</strong> What options are available, and
                  what are the benefits and limits of each?
                </li>
                <li>
                  <strong>Monitoring:</strong> How will the baby and I be
                  monitored during labour?
                </li>
                <li>
                  <strong>Support:</strong> Who can stay with me?
                </li>
                <li>
                  <strong>Movement:</strong> Can I walk or change positions
                  during labour?
                </li>
                <li>
                  <strong>If things change:</strong> When would a caesarean be
                  advised, and how will I be told?
                </li>
                <li>
                  <strong>After birth:</strong> How soon can I hold my baby and
                  start breastfeeding?
                </li>
                <li>
                  <strong>Plan B:</strong> What happens if labour starts
                  earlier than expected?
                </li>
              </ol>

              <p>
                Preferences are wishes, not guarantees. Safety comes first, and
                plans may change.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Antenatal Care: The Foundation
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
                Preparing Your Body and Mind
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>Stay active with gentle walking and doctor-approved exercises</li>
                <li>Practise breathing and relaxation</li>
                <li>Eat balanced meals and stay hydrated</li>
                <li>Sleep well and manage stress</li>
                <li>Learn the stages of labour</li>
                <li>Ask your doctor before starting any new exercise</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Labour Day: A Simple Timeline
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Early labour
                  </h3>
                  <p>
                    Contractions are mild and irregular, then become regular.
                    You may stay at home for part of this, as advised by your
                    doctor.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Active labour
                  </h3>
                  <p>
                    Contractions are stronger and closer together. This is
                    usually the time to head to the delivery location, as your
                    doctor has advised.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Pushing
                  </h3>
                  <p>
                    The cervix is fully open and you push as guided. The baby
                    is born.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    After birth
                  </h3>
                  <p>
                    The placenta is delivered. Mother and baby are checked, and
                    early contact and breastfeeding are encouraged when both
                    are stable.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Signs That Labour Has Started
              </h2>

              <p>Contact your doctor if you notice:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>Regular contractions that grow stronger and closer together</li>
                <li>A &quot;show,&quot; a mucus plug that may be blood-tinged</li>
                <li>Leaking or a gush of fluid</li>
                <li>Persistent lower back pain with tightening</li>
                <li>Reduced baby movements, which needs urgent care</li>
              </ul>

              <p className="font-medium text-gray-900">
                Do not wait at home if you have heavy bleeding, severe constant
                pain, fever or no baby movements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning the Birth When You Live in Sambhal
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Ask the clinic where delivery takes place, and confirm it
                  directly
                </li>
                <li>
                  Ask when to leave home once labour begins or fluid leaks
                </li>
                <li>Decide who will accompany you and who will drive</li>
                <li>
                  Keep transport arranged or on standby near your due date
                </li>
                <li>
                  Identify the nearest hospital with emergency and delivery
                  facilities to your home, in case labour begins suddenly
                </li>
                <li>Keep your antenatal card and reports with you at all times</li>
              </ul>

              <p>
                In an emergency, go to the nearest emergency facility
                immediately. Do not delay care to travel to another city.
              </p>
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
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When a Caesarean Becomes Necessary
              </h2>

              <p>A caesarean may be advised if:</p>

              <ul className="list-disc space-y-2 pl-6">
                <li>The baby shows signs of distress</li>
                <li>Labour does not progress despite adequate time and support</li>
                <li>The baby is in an unfavourable position</li>
                <li>The placenta covers the cervix</li>
                <li>There are serious maternal health risks</li>
              </ul>

              <p>
                At the clinic, the reasons are explained openly so you
                understand the decision and feel included in it.
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
                also available at the clinic.
              </p>
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
                      className="font-medium underline"
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
                      className="font-medium underline"
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
                      className="font-medium underline"
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
                      className="font-medium underline"
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
                    <h3 className="text-lg font-semibold text-gray-900">
                      {`Q${index + 1}. ${faq.q}`}
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