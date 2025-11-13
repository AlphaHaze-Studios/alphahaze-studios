import { Card } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold" data-testid="text-page-title">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <Card className="p-8 md:p-12 prose prose-lg max-w-none">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using AlphaHaze Studios' games and services, you agree to be bound by 
                these Terms and Conditions. If you disagree with any part of these terms, you may not 
                access our games or services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">License to Use</h2>
              <p>
                Subject to your compliance with these Terms, AlphaHaze Studios grants you a limited, 
                non-exclusive, non-transferable, revocable license to download, install, and use our 
                games on your personal devices for your personal, non-commercial use.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">User Accounts</h2>
              <p>When you create an account with us, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Be responsible for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Prohibited Uses</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Use our games for any illegal purpose</li>
                <li>Attempt to hack, reverse engineer, or modify our games</li>
                <li>Use cheats, exploits, or automation software</li>
                <li>Harass, abuse, or harm other players</li>
                <li>Sell, trade, or transfer your account to others</li>
                <li>Upload viruses or malicious code</li>
                <li>Impersonate others or provide false information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">In-Game Purchases</h2>
              <p>
                Our games may offer virtual items for purchase using real money. All purchases are final 
                and non-refundable unless required by law. Virtual items have no real-world value and 
                cannot be exchanged for real money.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Intellectual Property</h2>
              <p>
                All content, features, and functionality in our games, including but not limited to 
                graphics, design, code, and trademarks, are owned by AlphaHaze Studios and protected 
                by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Disclaimer of Warranties</h2>
              <p>
                Our games are provided "as is" without warranties of any kind, either express or implied. 
                We do not guarantee that our games will be uninterrupted, error-free, or free of viruses 
                or other harmful components.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, AlphaHaze Studios shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages resulting from your 
                use or inability to use our games or services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account and access to our games 
                immediately, without prior notice or liability, for any reason, including if you breach 
                these Terms and Conditions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is 
                material, we will provide at least 30 days' notice prior to any new terms taking effect. 
                Continued use of our games after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction 
                in which AlphaHaze Studios operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, please contact us at: 
                <a href="mailto:legal@alphahazestudios.com" className="text-primary hover:underline"> legal@alphahazestudios.com</a>
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
