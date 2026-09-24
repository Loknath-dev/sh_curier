import {
  AlertCircle,
  ArrowUpRight,
  ChevronRight,
  FileText,
  Gavel,
  LockKeyhole,
  PackageCheck,
  Scale,
  ShieldCheck,
  Truck,
} from "lucide-react";

// Change dates here only
const TERMS = {
  effectiveDate: "2026-09-23",
  lastUpdated: "2026-09-24",
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
      {/* HERO */}
      <header className="relative overflow-hidden bg-[#0b1220]">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="flex items-start gap-5">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-orange-400 shadow-xl sm:flex">
              <Truck size={30} />
            </div>

            <div>
              <div className="mb-5 flex items-center gap-2 text-sm font-medium">
                <span className="text-orange-400">SHCOURIER & SUPPLY</span>
                <ChevronRight size={15} className="text-slate-500" />
                <span className="text-slate-400">Legal</span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Terms of Service
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                The terms and conditions governing courier, delivery, logistics,
                supply, and related services provided by{" "}
                <span className="font-semibold text-white">
                  SHCOURIER & SUPPLY
                </span>
                .
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Delivering Trust & Speed
                </span>

                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  Effective: {formatDate(TERMS.effectiveDate)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* DOCUMENT */}
      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:py-12">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* NOTICE */}
          <div className="border-b border-orange-100 bg-orange-50 px-6 py-5 sm:px-10">
            <div className="flex gap-3">
              <AlertCircle
                size={20}
                className="mt-1 shrink-0 text-orange-600"
              />

              <div>
                <p className="font-semibold text-orange-950">
                  Important information
                </p>

                <p className="mt-1 text-sm leading-6 text-orange-900/80">
                  Please read these Terms of Service carefully before booking or
                  using any SHCOURIER & SUPPLY service.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-14">
            {/* INTRO */}
            <div className="mb-12 border-b border-slate-100 pb-10">
              <p className="text-[15px] leading-8 text-slate-600">
                These Terms of Service form an agreement between you and
                <strong> SHCOURIER & SUPPLY</strong>. They apply to courier,
                parcel delivery, transportation, logistics, supply-chain,
                pickup, last-mile delivery, first-mile pickup, and related
                services provided by us.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-slate-600">
                By placing an order, requesting a pickup, scheduling a delivery,
                creating an account, or using our platform, you acknowledge that
                you have read and accepted these terms.
              </p>
            </div>

            <Section
              id="acceptance"
              number="01"
              title="Acceptance of Terms"
              icon={<Scale />}
            >
              <p>
                By using SHCOURIER & SUPPLY services, you agree to comply with
                these Terms of Service and any service-specific conditions
                presented at the time of booking.
              </p>

              <p>
                If you are placing an order on behalf of a business or
                organization, you confirm that you are authorized to do so.
              </p>
            </Section>

            <Section
              id="services"
              number="02"
              title="Our Services"
              icon={<Truck />}
            >
              <p>
                SHCOURIER & SUPPLY provides logistics and delivery services that
                may include:
              </p>

              <List
                items={[
                  "First-mile pickup",
                  "Local and scheduled parcel delivery",
                  "Last-mile delivery",
                  "Business-to-business shipments",
                  "Document and package transportation",
                  "Supply and logistics support",
                  "Shipment tracking and delivery updates",
                ]}
              />

              <p>
                Service availability, delivery areas, estimated delivery times,
                and applicable restrictions may vary depending on location,
                shipment type, operational conditions, and applicable law.
              </p>
            </Section>

            <Section
              id="bookings"
              number="03"
              title="Bookings & Orders"
              icon={<PackageCheck />}
            >
              <p>
                Customers are responsible for providing complete and accurate
                information when creating a shipment or booking a pickup.
              </p>

              <List
                items={[
                  "Correct sender and recipient details.",
                  "Accurate pickup and delivery addresses.",
                  "Correct package dimensions and weight where required.",
                  "Accurate description of the shipment contents.",
                  "A valid contact number for delivery coordination.",
                ]}
              />

              <p>
                SHCOURIER & SUPPLY may contact the sender or recipient when
                additional information is reasonably required to complete a
                delivery.
              </p>
            </Section>

            <Section
              id="responsibilities"
              number="04"
              title="Customer Responsibilities"
              icon={<ShieldCheck />}
            >
              <p>
                Customers are responsible for properly preparing, packaging,
                labeling, and handing over shipments in accordance with
                applicable requirements.
              </p>

              <p>
                You must ensure that the shipment does not contain prohibited or
                restricted materials and that all information supplied to
                SHCOURIER & SUPPLY is accurate.
              </p>
            </Section>

            <Section
              id="delivery"
              number="05"
              title="Shipment & Delivery"
              icon={<Truck />}
            >
              <p>
                Delivery times provided by SHCOURIER & SUPPLY are generally
                estimates unless a specific guaranteed service has been
                expressly agreed upon.
              </p>

              <p>
                Delivery may be affected by weather, traffic, public
                authorities, strikes, operational disruptions, incorrect
                addresses, recipient availability, security concerns, or other
                circumstances outside reasonable operational control.
              </p>

              <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                <p className="text-sm leading-6 text-blue-900">
                  <strong>Delivery confirmation:</strong> Depending on the
                  service, delivery may be confirmed through a signature, OTP,
                  digital confirmation, photograph, scan, or another approved
                  delivery record.
                </p>
              </div>
            </Section>

            <Section
              id="prohibited"
              number="06"
              title="Prohibited Items"
              icon={<AlertCircle />}
            >
              <p>
                Customers must not use our services to transport goods that are
                prohibited by applicable law, regulation, or SHCOURIER & SUPPLY
                policy.
              </p>

              <p>
                Examples may include dangerous or hazardous materials, illegal
                goods, improperly packaged restricted items, or goods requiring
                special authorization that has not been obtained.
              </p>

              <p>
                We may refuse, hold, return, or otherwise handle a shipment
                where reasonably necessary for safety, legal, regulatory, or
                operational reasons.
              </p>
            </Section>

            <Section
              id="payments"
              number="07"
              title="Pricing & Payments"
              icon={<Scale />}
            >
              <p>
                Service charges are based on the applicable pricing shown or
                communicated at the time of booking and may depend on factors
                such as distance, shipment size, weight, service type, delivery
                location, and additional services.
              </p>

              <p>
                Applicable taxes, surcharges, additional handling fees, or other
                charges may apply where permitted by law and applicable service
                terms.
              </p>
            </Section>

            <Section
              id="claims"
              number="08"
              title="Loss, Damage & Claims"
              icon={<ShieldCheck />}
            >
              <p>
                If a shipment is lost, damaged, or otherwise affected during
                transit, customers should notify SHCOURIER & SUPPLY promptly and
                provide the information reasonably required to investigate the
                matter.
              </p>

              <p>
                Any compensation, reimbursement, or claim resolution will be
                handled according to the applicable service terms, declared
                value, available evidence, and applicable law.
              </p>

              <p>
                Customers should retain relevant receipts, shipment information,
                photographs, invoices, and other supporting documents when
                submitting a claim.
              </p>
            </Section>

            <Section
              id="privacy"
              number="09"
              title="Privacy & Data"
              icon={<LockKeyhole />}
            >
              <p>
                SHCOURIER & SUPPLY may process information necessary to provide
                pickup, transportation, delivery, customer support, tracking,
                billing, security, and related services.
              </p>

              <p>
                Personal information is handled in accordance with our Privacy
                Policy and applicable data protection requirements.
              </p>

              <a
                href="/privacy-policy"
                className="inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Read our Privacy Policy
                <ArrowUpRight size={15} />
              </a>
            </Section>

            <Section
              id="property"
              number="10"
              title="Intellectual Property"
              icon={<FileText />}
            >
              <p>
                The SHCOURIER & SUPPLY name, branding, logo, website,
                application, software, content, graphics, and related materials
                may be protected by applicable intellectual property laws.
              </p>

              <p>
                You may not reproduce, modify, distribute, or commercially
                exploit our protected materials without appropriate
                authorization.
              </p>
            </Section>

            <Section
              id="termination"
              number="11"
              title="Suspension & Termination"
              icon={<AlertCircle />}
            >
              <p>
                We may suspend, restrict, refuse, or terminate access to
                services where reasonably necessary due to misuse, safety
                concerns, fraudulent activity, violation of these terms,
                applicable legal requirements, or operational reasons.
              </p>
            </Section>

            <Section
              id="liability"
              number="12"
              title="Limitation of Liability"
              icon={<Gavel />}
            >
              <p>
                To the maximum extent permitted by applicable law, SHCOURIER &
                SUPPLY will not be liable for indirect, incidental, special,
                consequential, or exemplary losses arising from the use of our
                services.
              </p>

              <p>
                Nothing in these terms limits liability or rights that cannot
                legally be limited or excluded under applicable law.
              </p>
            </Section>

            <Section
              id="changes"
              number="13"
              title="Changes to These Terms"
              icon={<FileText />}
            >
              <p>
                SHCOURIER & SUPPLY may update these Terms of Service when
                necessary to reflect changes in our services, business
                operations, technology, or legal requirements.
              </p>

              <p>
                The updated version will be published through the appropriate
                SHCOURIER & SUPPLY platform or website and will include an
                updated effective date.
              </p>
            </Section>
          </div>

          {/* DOCUMENT META */}
          <div className="border-t border-slate-200 bg-slate-50 px-6 py-6 sm:px-10">
            <div className="flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                Last updated:{" "}
                <span className="font-medium text-slate-700">
                  {formatDate(TERMS.lastUpdated)}
                </span>
              </p>

              <div className="flex gap-5">
                <a
                  href="/privacy-policy"
                  className="transition hover:text-orange-600"
                >
                  Privacy Policy
                </a>

                <a href="/contact" className="transition hover:text-orange-600">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}

function Section({ id, number, title, icon, children, last }) {
  return (
    <section
      id={id}
      className={`scroll-mt-8 ${
        !last ? "mb-11 border-b border-slate-100 pb-11" : ""
      }`}
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
          {icon}
        </div>

        <span className="text-xs font-bold tracking-widest text-orange-500">
          {number}
        </span>

        <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
          {title}
        </h2>
      </div>

      <div className="space-y-5 text-[15px] leading-8 text-slate-600 sm:pl-[52px]">
        {children}
      </div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
