import {
  Clock3,
  Cookie,
  Database,
  FileText,
  Info,
  LockKeyhole,
  Scale,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import { useState } from "react";

const sections = [
  ["Information We Collect", Database],
  ["How We Use Your Information", ShieldCheck],
  ["Parcel & Address Information", Truck],
  ["Payment Information", ShieldCheck],
  ["Cookies & Website Technologies", Cookie],
  ["Sharing of Information", Users],
  ["Data Security", LockKeyhole],
  ["Data Retention", Clock3],
  ["Your Privacy Rights", Scale],
  ["Third-Party Services", Users],
  ["Children's Privacy", Users],
  ["Changes to This Privacy Policy", FileText],
];

function Section({ number, title, icon: Icon, children }) {
  return (
    <section className="border-b border-slate-200 py-8 last:border-0">
      <div className="mb-3 flex items-center gap-2">
        <Icon size={17} className="text-slate-500" />
        <h2 className="text-lg font-semibold text-slate-900">
          {number}. {title}
        </h2>
      </div>

      <div className="space-y-4 text-sm leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}

const List = ({ children }) => (
  <ul className="list-disc space-y-1 pl-5 marker:text-slate-400">{children}</ul>
);

export default function PrivacyPolicy() {
  const [updateDate] = useState("September 24, 2026");

  return (
    <div className="min-h-screen bg-white text-slate-700">
      {/* Header */}

      <header className="relative isolate overflow-hidden bg-[#071A33]">
        {/* Background decoration */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.06]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-medium text-blue-200 backdrop-blur">
              <ShieldCheck size={15} />
              Privacy & Data Protection
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Your privacy matters. Learn how SHCOURIER & SUPPLY collects, uses,
              and protects your information.
            </p>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-slate-300">
                <Clock3 size={14} />
                Last Updated: {updateDate}
              </div>

              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-slate-300">
                <Truck size={14} />
                SHCOURIER & SUPPLY
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-5 py-8 sm:px-8">
        <article>
          {/* Introduction */}
          <section className="border-b border-slate-200 py-8">
            <div className="mb-3 flex items-center gap-2">
              <Info size={17} className="text-slate-500" />

              <h2 className="text-lg font-semibold text-slate-900">
                Introduction
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-slate-600">
              <p>
                At{" "}
                <strong className="text-slate-900">SHCOURIER & SUPPLY</strong>{" "}
                (“SHCOURIER”, “we”, “us”, or “our”), we respect your privacy and
                are committed to protecting your personal information.
              </p>

              <p>
                This Privacy Policy explains how we collect, use, store, and
                protect information when you use{" "}
                <strong className="text-slate-900">shcourier.in</strong> or our
                parcel pickup, delivery, courier, logistics, and supply
                services.
              </p>
            </div>
          </section>

          {/* 1 */}
          <Section number="1" title={sections[0][0]} icon={sections[0][1]}>
            <p>Depending on the services you use, we may collect:</p>

            <List>
              <li>
                <strong className="text-slate-800">
                  Personal Information:
                </strong>{" "}
                Name, phone number, email address, and billing details.
              </li>

              <li>
                <strong className="text-slate-800">
                  Pickup & Delivery Information:
                </strong>{" "}
                Pickup address, delivery address, recipient details, parcel
                information, and delivery instructions.
              </li>

              <li>
                <strong className="text-slate-800">Booking Information:</strong>{" "}
                Shipment details, tracking information, service preferences, and
                transaction details.
              </li>

              <li>
                <strong className="text-slate-800">
                  Device & Website Information:
                </strong>{" "}
                IP address, browser type, device information, pages visited, and
                basic usage information.
              </li>

              <li>
                <strong className="text-slate-800">
                  Communication Information:
                </strong>{" "}
                Information you provide when contacting our customer support.
              </li>
            </List>

            <p>
              We only collect information that is reasonably necessary to
              provide and improve our services.
            </p>
          </Section>

          {/* 2 */}
          <Section number="2" title={sections[1][0]} icon={sections[1][1]}>
            <p>We may use your information to:</p>

            <List>
              <li>Arrange and manage parcel pickups and deliveries.</li>
              <li>Process bookings, payments, and service requests.</li>
              <li>Provide shipment tracking and delivery updates.</li>
              <li>Contact you regarding your shipment or account.</li>
              <li>Provide customer support.</li>
              <li>Improve our website, services, and user experience.</li>
              <li>Prevent fraud, misuse, and unauthorized activity.</li>
              <li>Meet applicable legal and regulatory requirements.</li>
            </List>
          </Section>

          {/* 3 */}
          <Section number="3" title={sections[2][0]} icon={sections[2][1]}>
            <p>
              Pickup and delivery addresses and recipient information are used
              primarily to complete the requested delivery service.
            </p>

            <p>
              We may share necessary shipment information with authorized
              delivery personnel, logistics partners, transport providers, or
              other service providers involved in fulfilling your shipment.
            </p>
          </Section>

          {/* 4 */}
          <Section number="4" title={sections[3][0]} icon={sections[3][1]}>
            <p>
              Payments may be processed through authorized third-party payment
              providers. We may not directly store complete payment card
              information on our servers.
            </p>

            <p>
              Payment providers may collect and process payment information
              according to their own privacy policies and security practices.
            </p>
          </Section>

          {/* 5 */}
          <Section number="5" title={sections[4][0]} icon={sections[4][1]}>
            <p>Our website may use cookies and similar technologies to:</p>

            <List>
              <li>Keep the website functioning properly.</li>
              <li>Remember preferences.</li>
              <li>Understand website usage.</li>
              <li>Improve performance and user experience.</li>
            </List>

            <p>
              You can manage or disable cookies through your browser settings.
              Some website features may not function properly if cookies are
              disabled.
            </p>
          </Section>

          {/* 6 */}
          <Section number="6" title={sections[5][0]} icon={sections[5][1]}>
            <p>We do not sell or rent your personal information.</p>

            <p>We may share relevant information with:</p>

            <List>
              <li>Delivery executives and logistics partners.</li>
              <li>Payment and technology service providers.</li>
              <li>Customer-support providers.</li>
              <li>Government authorities when legally required.</li>
              <li>
                Professional advisers or service providers where reasonably
                necessary.
              </li>
            </List>

            <p>
              We only share information that is necessary for the relevant
              purpose.
            </p>
          </Section>

          {/* 7 */}
          <Section number="7" title={sections[6][0]} icon={sections[6][1]}>
            <p>
              We take reasonable technical and organizational measures to
              protect your information against unauthorized access, misuse,
              alteration, disclosure, or destruction.
            </p>

            <p>
              However, no internet-based service can guarantee absolute
              security.
            </p>
          </Section>

          {/* 8 */}
          <Section number="8" title={sections[7][0]} icon={sections[7][1]}>
            <p>
              We retain personal and shipment information only for as long as
              reasonably necessary to:
            </p>

            <List>
              <li>Provide our services.</li>
              <li>Maintain business and transaction records.</li>
              <li>Resolve disputes.</li>
              <li>Meet legal, accounting, and regulatory obligations.</li>
            </List>

            <p>
              When information is no longer required, we may securely delete or
              anonymize it.
            </p>
          </Section>

          {/* 9 */}
          <Section number="9" title={sections[8][0]} icon={sections[8][1]}>
            <p>Depending on applicable law, you may have the right to:</p>

            <List>
              <li>Request access to your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of information where legally permitted.</li>
              <li>Ask how your information is being used.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Raise a privacy-related complaint.</li>
            </List>

            <p>To make a request, please contact us using the details below.</p>
          </Section>

          {/* 10 */}
          <Section number="10" title={sections[9][0]} icon={sections[9][1]}>
            <p>
              Our website may contain links to third-party websites, payment
              services, maps, communication tools, or other services.
            </p>

            <p>
              We are not responsible for the privacy practices of third-party
              services. We recommend reviewing their privacy policies before
              providing them with personal information.
            </p>
          </Section>

          {/* 11 */}
          <Section number="11" title={sections[10][0]} icon={sections[10][1]}>
            <p>
              Our services are intended for general users and businesses. We do
              not knowingly collect personal information from children where
              such collection is prohibited by applicable law.
            </p>
          </Section>

          {/* 12 */}
          <Section number="12" title={sections[11][0]} icon={sections[11][1]}>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our services, technology, or legal requirements.
            </p>

            <p>
              Any updated version will be published on{" "}
              <strong className="text-slate-900">shcourier.in</strong> with a
              revised “Last Updated” date.
            </p>
          </Section>
        </article>
      </main>
    </div>
  );
}
