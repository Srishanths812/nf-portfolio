import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NF APP",
  description: "Privacy policy for the NF APP.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-12">
      <div className="mx-auto w-full max-w-3xl rounded-2xl border-4 border-comic-black bg-comic-yellow p-6 shadow-comic md:p-10">
        <h1 className="font-comic text-4xl text-comic-black md:text-5xl">
          Privacy Policy
        </h1>

        <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-comic-black md:text-lg">
          <p>This privacy policy applies to the app NF APP.</p>

          <p>
            We respect your privacy. This app does not collect, store, or share any
            personal user data.
          </p>

          <section>
            <h2 className="font-comic text-2xl md:text-3xl">
              Information Collection and Use:
            </h2>
            <p className="mt-2">
              The app may use basic device information required for proper
              functioning (such as network state) but does not collect personally
              identifiable information like name, email, phone number, or location.
            </p>
          </section>

          <section>
            <h2 className="font-comic text-2xl md:text-3xl">
              Third-Party Services:
            </h2>
            <p className="mt-2">
              This app does not use third-party services that collect user data.
            </p>
          </section>

          <section>
            <h2 className="font-comic text-2xl md:text-3xl">
              Children&apos;s Information:
            </h2>
            <p className="mt-2">
              This app is not designed to knowingly collect data from children under
              the age of 13.
            </p>
          </section>

          <section>
            <h2 className="font-comic text-2xl md:text-3xl">Changes:</h2>
            <p className="mt-2">
              This policy may be updated in the future. Any changes will be reflected
              on this page.
            </p>
          </section>

          <section>
            <h2 className="font-comic text-2xl md:text-3xl">Contact:</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, contact us at:
            </p>
            <p className="mt-2">
              <a
                className="underline decoration-comic-black underline-offset-4"
                href="mailto:developer@nittfest.in"
              >
                developer@nittfest.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
