import Link from "next/link";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Amroha?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Amroha and nearby areas travel there for consultations.",
  },
  {
    q: "What is hysteroscopy used for?",
    a: "It examines the uterine cavity and diagnoses or treats problems such as polyps, adhesions, a septum, causes of abnormal bleeding and some fertility concerns.",
  },
  {
    q: "Are there any cuts or stitches?",
    a: "No. Hysteroscopy is done through the vagina and cervix, with no abdominal incision.",
  },
  {
    q: "Is it painful?",
    a: "Many women feel mild to moderate cramping. Your doctor will choose suitable pain relief or sedation for you.",
  },
  {
    q: "Can hysteroscopy help me get pregnant?",
    a: "If a polyp, adhesion or septum affects the uterine cavity, treating it may improve the chance of conception in some women.",
  },
  {
    q: "When will I get my results?",
    a: "Your doctor will explain what was seen after the procedure. A biopsy report may take some days, so ask when it will be ready.",
  },
  {
    q: "Where will the procedure take place?",
    a: "Please confirm this directly with the clinic when you book.",
  },
  {
    q: "When can I resume normal activities?",
    a: "Most women resume routine activities within a day or two. Your doctor will advise when intercourse is safe.",
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

export default function HysteroscopySpecialistNearAmroha() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-7 text-gray-700 lg:col-span-2">
            <header className="space-y-4">
              <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Hysteroscopy Specialist near Amroha – Dr. Priyanka Pachauri,
                Moradabad
              </h1>

              <p>
                Hysteroscopy is a simple idea: a thin camera looks directly
                inside the uterus. Yet the reasons for it, and the meaning of
                what is found, vary a great deal from woman to woman. Knowing
                your own reason makes the procedure feel less mysterious.
              </p>

              <p>
                If you live in Amroha,{" "}
                <strong>Dr. Priyanka Pachauri</strong> of Dr. Priyanka Gynaec
                in neighbouring <strong>Moradabad</strong> is an option to
                consider. The clinic is located in <strong>Moradabad</strong>,
                not in Amroha, and women from Amroha and surrounding areas
                travel there for consultations. It offers{" "}
                <strong>diagnostic hysteroscopy</strong> and{" "}
                <strong>hysteroscopic polypectomy</strong>. Its philosophy is{" "}
                <strong>&quot;Her Health First.&quot;</strong>
              </p>
            </header>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Hysteroscopy?
              </h2>

              <p>
                A thin, lighted telescope called a hysteroscope is passed
                through the vagina and cervix into the uterus, and a camera
                shows the cavity on a monitor. No abdominal incision is
                needed. It can be <strong>diagnostic</strong> (to look and
                find the cause) or <strong>operative</strong> (to treat a
                problem, such as removing a polyp, in the same sitting).
              </p>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                Five Common Reasons for Hysteroscopy
              </h2>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  1. Heavy or Irregular Bleeding
                </h3>

                <p>
                  <em>
                    &quot;My periods are heavy, or I bleed between periods,
                    and medicines have not fixed it.&quot;
                  </em>
                </p>

                <p>
                  Hysteroscopy can reveal polyps, fibroids projecting into the
                  cavity or an abnormal lining, which an ultrasound may only
                  hint at. A biopsy can be taken if needed.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  2. Bleeding After Menopause
                </h3>

                <p>
                  <em>
                    &quot;My periods stopped years ago, and now I am
                    spotting.&quot;
                  </em>
                </p>

                <p>
                  Any bleeding after menopause needs prompt evaluation.
                  Hysteroscopy allows the doctor to see the lining directly
                  and take a sample, so the cause can be found early.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  3. Difficulty Conceiving
                </h3>

                <p>
                  <em>
                    &quot;We have been trying for over a year, and the tests
                    look fine.&quot;
                  </em>
                </p>

                <p>
                  The uterine cavity is one of the factors checked. A polyp,
                  adhesion, septum or cavity-distorting fibroid can affect
                  implantation. Finding and treating it can sometimes improve
                  outcomes. The clinic also offers fertility and IVF services,
                  so findings can be built straight into your fertility plan.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  4. Repeated Miscarriage
                </h3>

                <p>
                  <em>&quot;I have lost more than one pregnancy.&quot;</em>
                </p>

                <p>
                  A structural cause, such as a uterine septum or adhesions,
                  is one possibility among several. Hysteroscopy helps rule
                  it in or out, alongside other tests your doctor may advise.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  5. A Finding on Ultrasound
                </h3>

                <p>
                  <em>
                    &quot;My scan shows a thickened lining or something that
                    looks like a polyp.&quot;
                  </em>
                </p>

                <p>
                  Hysteroscopy confirms what ultrasound suggested, and an
                  operative procedure can remove a polyp at the same time.
                </p>
              </div>
            </section>

            <section className="space-y-5">
              <h2 className="text-2xl font-bold text-gray-900">
                How to Read Your Hysteroscopy Findings
              </h2>

              <p>
                After the procedure, your doctor will explain what was seen.
                These are common findings and what they may mean. Your own
                doctor will give personal advice.
              </p>

              <div className="space-y-3">
                <p>
                  <strong>Normal cavity.</strong> The uterine cavity looks
                  healthy. If your symptoms persist, other causes are looked
                  for, such as hormones or conditions outside the cavity.
                </p>

                <p>
                  <strong>Polyp.</strong> A soft growth from the lining. Often
                  benign. It can be removed through hysteroscopic polypectomy,
                  and removed tissue may be sent for examination.
                </p>

                <p>
                  <strong>Submucosal fibroid.</strong> A fibroid projecting
                  into the cavity. Depending on its size and position, it may
                  be removed hysteroscopically, or another approach may be
                  advised.
                </p>

                <p>
                  <strong>Adhesions (scar tissue).</strong> Bands of scar
                  tissue inside the cavity, sometimes after infection, surgery
                  or a procedure. They may be divided, and your doctor will
                  discuss follow-up and fertility plans.
                </p>

                <p>
                  <strong>Septum.</strong> A band of tissue dividing part of
                  the cavity. Whether treatment is needed depends on your
                  history.
                </p>

                <p>
                  <strong>Thickened or irregular lining.</strong> A biopsy
                  helps identify the cause. The report guides treatment, and
                  your doctor will explain it.
                </p>

                <p>
                  <strong>Retained tissue.</strong> Remnants after a
                  miscarriage or delivery, which may need removal.
                </p>
              </div>

              <p>
                A biopsy report may take some days. Ask when it will be ready
                and who will explain it. Keep the report in your folder.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hysteroscopic Polypectomy
              </h2>

              <p>
                Uterine polyps are common and often harmless, but they can
                cause irregular bleeding and may interfere with conception.
                Hysteroscopic polypectomy removes them under direct vision,
                with no external cuts. Diagnosis and treatment can often be
                combined in one sitting.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Is It Safe?
              </h2>

              <p>
                Hysteroscopy is commonly performed and generally safe when
                done by an experienced doctor. Small risks, which your doctor
                will explain, include temporary cramping, light bleeding,
                infection or, very rarely, injury to the uterus. Your doctor
                will review your health and decide whether the procedure
                suits you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Will It Hurt?
              </h2>

              <p>
                Many women feel mild to moderate cramping. Your doctor will
                choose suitable pain relief, local anaesthesia or sedation
                depending on the procedure and your needs. Tell the team if
                you are anxious. Discussing your worries beforehand helps.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for the Procedure
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Timing:</strong> It is often scheduled soon after a
                  period ends, when the lining is thin and the view is
                  clearer. Your doctor will advise the best day.
                </li>
                <li>
                  <strong>Pregnancy check:</strong> Make sure you are not
                  pregnant.
                </li>
                <li>
                  <strong>Medicines:</strong> Tell your doctor about all
                  medicines, especially blood thinners, and allergies.
                </li>
                <li>
                  <strong>Fasting:</strong> Follow instructions if anaesthesia
                  or sedation is planned.
                </li>
                <li>
                  <strong>Records:</strong> Bring ultrasounds, blood tests and
                  earlier procedure reports.
                </li>
                <li>
                  <strong>Support:</strong> Consider bringing a family member,
                  particularly if sedation is planned.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Happens During the Procedure
              </h2>

              <ol className="list-decimal space-y-3 pl-6">
                <li>
                  You are positioned comfortably, and suitable pain relief or
                  sedation is given.
                </li>
                <li>
                  A speculum is placed, and the hysteroscope is gently passed
                  through the cervix.
                </li>
                <li>
                  A clear fluid expands the cavity so the doctor can see it
                  well.
                </li>
                <li>
                  The cavity is examined, and any polyp or other problem is
                  treated if the procedure is operative.
                </li>
                <li>A biopsy is taken if needed.</li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Recovery at Home
              </h2>

              <p>
                Most women recover quickly. You may notice mild cramping,
                light spotting or watery discharge for a few days, and
                tiredness if sedation was used.
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Rest for the remainder of the day, then return to routine
                  activities as you feel comfortable
                </li>
                <li>Use prescribed pain relief</li>
                <li>
                  Avoid intercourse, tampons and swimming until your doctor
                  says it is safe
                </li>
                <li>
                  Share reports and attend follow-up to discuss findings and
                  next steps
                </li>
              </ul>

              <p className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 text-gray-800">
                <strong>Contact your doctor if you have</strong> heavy
                bleeding, severe or worsening pain, fever, foul-smelling
                discharge or fainting. If you cannot reach the clinic quickly,
                go to the nearest emergency facility. Do not delay care to
                travel to another city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning the Visit From Amroha
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  Book in advance by phone or WhatsApp, and confirm current
                  timings
                </li>
                <li>
                  Ask whether the consultation and the procedure can be
                  planned close together, to avoid extra trips
                </li>
                <li>
                  Ask about preparation, fasting and the best day of your
                  cycle
                </li>
                <li>
                  Ask where the procedure will take place. Please confirm this
                  directly with the clinic.
                </li>
                <li>Travel with a family member</li>
                <li>Carry sanitary pads, water and your records</li>
                <li>Ask when it is safe to travel home, and how</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Getting a Second Opinion
              </h2>

              <p>
                If hysteroscopy or surgery has been advised elsewhere, a
                second opinion is reasonable. Bring your scans, blood tests
                and the written advice you received, and the doctor will
                review them and explain your options. Your concerns are
                discussed respectfully, and your medical details are kept
                confidential.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Why Women Trust Dr. Priyanka Gynaec
              </h2>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Gentle endoscopic care</strong> with no external cuts
                </li>
                <li>
                  <strong>Honest guidance:</strong> Procedures advised only
                  when they add value
                </li>
                <li>
                  <strong>Integration with fertility, pregnancy and
                  laparoscopic services</strong>
                </li>
                <li>
                  <strong>Detailed imaging</strong> with a Voluson E22 3D/4D
                  ultrasound machine
                </li>
                <li>
                  <strong>Continuity you can count on:</strong> An integrated
                  team that knows your history
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

              <div className="space-y-3">
                <p className="flex flex-wrap items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0" />
                  <strong>Call for appointment:</strong>
                  <a
                    href="tel:+919079765578"
                    className="underline hover:text-[#8F1738]"
                  >
                    +91 90797 65578
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  <strong>WhatsApp:</strong>
                  <a
                    href="https://wa.me/918979670705"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[#8F1738]"
                  >
                    +91 89796 70705
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0" />
                  <strong>Email:</strong>
                  <a
                    href="mailto:drpriyankagynaec@gmail.com"
                    className="break-all underline hover:text-[#8F1738]"
                  >
                    drpriyankagynaec@gmail.com
                  </a>
                </p>

                <p className="flex flex-wrap items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0" />
                  <strong>Website:</strong>
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