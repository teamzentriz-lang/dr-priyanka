import Link from "next/link";
import { Phone, Mail, Globe } from "lucide-react";
import LandingEnquiryForm from "@/components/LandingEnquiryForm";
import Banner from "./Banner";

const faqs = [
  {
    q: "Is Dr. Priyanka Gynaec located in Sambhal?",
    a: "No. The clinic is in Gandhi Nagar, Moradabad. Women from Sambhal and nearby areas travel there for consultations.",
  },
  {
    q: "Why is hysteroscopy advised instead of just an ultrasound?",
    a: "Ultrasound gives an indirect picture. Hysteroscopy shows the inside of the uterus directly and can allow a biopsy or removal of a polyp in the same procedure.",
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
    q: "When in my cycle should it be done?",
    a: "Often soon after a period ends, when the lining is thin. Your doctor will advise the best day.",
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

export default function HysteroscopySpecialistNearSambhal() {
  return (
    <main className="bg-white">
      <Banner />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-3">
          <article className="min-w-0 space-y-6 text-gray-700 lg:col-span-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Hysteroscopy Specialist near Sambhal – Dr. Priyanka Pachauri,
              Moradabad
            </h1>

            <p>
              Women are often told, &quot;You need a hysteroscopy,&quot; with
              little explanation. Why that test and not another scan? Is it
              painful? Is it really needed? Clear answers help you decide
              calmly.
            </p>

            <p>
              If you live in Sambhal, <strong>Dr. Priyanka Pachauri</strong> of
              Dr. Priyanka Gynaec in neighbouring <strong>Moradabad</strong> is
              an option to consider. The clinic is located in{" "}
              <strong>Moradabad, not in Sambhal</strong>, and women from Sambhal
              and surrounding areas travel there for consultations. It offers{" "}
              <strong>diagnostic hysteroscopy</strong> and{" "}
              <strong>hysteroscopic polypectomy</strong>. Its philosophy is{" "}
              <strong>&quot;Her Health First.&quot;</strong>
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What Is Hysteroscopy?
              </h2>
              <p>
                Hysteroscopy is an endoscopic procedure. A thin, lighted
                telescope is passed through the vagina and cervix into the
                uterus, and a camera shows the cavity on a monitor. No
                abdominal incision is needed. It can be diagnostic (to look
                and find the cause) or operative (to treat a problem, such as
                removing a polyp, in the same sitting).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hysteroscopy Compared With Other Tests
              </h2>
              <p>
                Each test answers a different question. Your doctor chooses
                based on your problem.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Ultrasound (including 3D)
                  </h3>
                  <p>
                    Painless and widely used. It shows the size and shape of
                    the uterus and ovaries and can suggest polyps, fibroids or
                    a thickened lining. But it gives an indirect picture, and
                    small or flat problems can be missed or unclear.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    HSG (hysterosalpingography)
                  </h3>
                  <p>
                    An X-ray test using dye, mainly to check whether the
                    fallopian tubes are open and to outline the uterine cavity.
                    It involves radiation and does not allow treatment.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Saline sonography
                  </h3>
                  <p>
                    Fluid is placed in the uterus during ultrasound to outline
                    the cavity better. It helps with polyps and fibroids but
                    does not allow removal.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Hysteroscopy
                  </h3>
                  <p>
                    A direct look inside the cavity. It can confirm what
                    ultrasound suggested, take a biopsy and, in the operative
                    form, remove a polyp in the same procedure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Laparoscopy
                  </h3>
                  <p>
                    Examines the outside of the uterus, tubes, ovaries and
                    pelvis through small abdominal incisions. It answers
                    different questions, such as endometriosis or tubal
                    disease.
                  </p>
                </div>
              </div>

              <p>
                A woman may need more than one test. Ask your doctor why a
                particular one is advised.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                When Is Hysteroscopy Recommended?
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>Heavy, prolonged or irregular periods</li>
                <li>Bleeding between periods</li>
                <li>Bleeding after menopause</li>
                <li>Difficulty conceiving</li>
                <li>Repeated miscarriages</li>
                <li>Repeated IVF failure, in selected cases</li>
                <li>
                  A thickened lining, suspected polyp or fibroid on ultrasound
                </li>
                <li>Suspected scar tissue inside the uterus</li>
                <li>A suspected uterine septum</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Hysteroscopy Before Fertility Treatment
              </h2>
              <p>
                The uterine cavity is one of the factors checked when
                conception is difficult or miscarriages repeat. Polyps,
                fibroids inside the cavity, adhesions or a septum can reduce
                the chance of implantation or raise miscarriage risk. If a
                problem is found, correcting it can sometimes improve the
                outcome. The clinic also offers fertility and IVF services, so
                findings can be built straight into your fertility plan.
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
                with no external cuts. The polyp is seen and removed in one
                sitting, and removed tissue may be sent for examination, as
                your doctor advises.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Common Fears, Answered
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Will it hurt?&quot;
                  </h3>
                  <p>
                    Many women feel mild to moderate cramping. Your doctor
                    will choose suitable pain relief, local anaesthesia or
                    sedation depending on the procedure.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Will there be cuts or stitches?&quot;
                  </h3>
                  <p>
                    No. It is done through the vagina and cervix, with no
                    abdominal incision.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Could it harm my chance of pregnancy?&quot;
                  </h3>
                  <p>
                    When done for a valid reason by an experienced doctor,
                    hysteroscopy is generally safe, and treating a polyp or
                    adhesion can sometimes improve fertility. Your doctor
                    will explain risks specific to you.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;What if they find something serious?&quot;
                  </h3>
                  <p>
                    Most findings, such as polyps, are benign. If a biopsy is
                    taken, your doctor will discuss the report and next steps
                    with you.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    &quot;Is it only for older women?&quot;
                  </h3>
                  <p>
                    No. Women of many ages have hysteroscopy for bleeding,
                    miscarriage or fertility concerns.
                  </p>
                </div>
              </div>
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
                will review your health and decide whether the procedure suits
                you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Questions to Ask Your Doctor
              </h2>
              <ol className="list-decimal space-y-2 pl-6">
                <li>
                  Why is hysteroscopy needed, rather than another test?
                </li>
                <li>
                  Will it be diagnostic only, or could treatment happen at the
                  same time?
                </li>
                <li>What pain relief or anaesthesia will be used?</li>
                <li>On which day of my cycle should it be done?</li>
                <li>What are the risks in my case?</li>
                <li>
                  When will I get the result, and who will explain it?
                </li>
                <li>
                  Where will the procedure take place? Please confirm this
                  directly with the clinic.
                </li>
              </ol>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Preparing for the Procedure
              </h2>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  <strong>Timing:</strong> It is often scheduled soon after a
                  period ends, when the lining is thin and the view is clearer.
                  Your doctor will advise the best day.
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
              <ol className="list-decimal space-y-2 pl-6">
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

              <p>
                Contact your doctor if you have heavy bleeding, severe or
                worsening pain, fever, foul-smelling discharge or fainting. If
                you cannot reach the clinic quickly, go to the nearest
                emergency facility. Do not delay care to travel to another
                city.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Planning the Visit From Sambhal
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
                <p className="flex items-center gap-3">
                  <Phone size={20} />
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
                  <Phone size={20} />
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
                  <Mail size={20} />
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
                  <Globe size={20} />
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

              <div className="flex flex-wrap gap-4 pt-3">
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
                  Explore Services
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
                      {`Q${index + 1}. ${faq.q}`}
                    </h3>
                    <p>{faq.a}</p>
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