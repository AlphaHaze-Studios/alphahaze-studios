import { Card } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold" data-testid="text-page-title">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <Card className="p-8 md:p-12 prose prose-lg max-w-none">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Introduction</h2>
              <p>
                Welcome to AlphaHaze Studios. We respect your privacy and are committed to protecting 
                your personal data. This privacy policy will inform you about how we look after your 
                personal data when you visit our website or use our games and tell you about your 
                privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Identity Data:</strong> username, player ID</li>
                <li><strong>Contact Data:</strong> email address</li>
                <li><strong>Technical Data:</strong> device information, IP address, browser type</li>
                <li><strong>Usage Data:</strong> information about how you use our games and website</li>
                <li><strong>Game Data:</strong> progress, achievements, scores, and in-game purchases</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To provide and maintain our games and services</li>
                <li>To improve and personalize your gaming experience</li>
                <li>To process in-game transactions</li>
                <li>To send you updates and notifications about our games</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze usage patterns and improve our products</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p>
                We have implemented appropriate security measures to prevent your personal data from 
                being accidentally lost, used, or accessed in an unauthorized way. We limit access to 
                your personal data to those employees, agents, contractors, and other third parties who 
                have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
              <p>
                Our games may use third-party services such as Google Play Games, analytics providers, 
                and advertising networks. These services may collect information about you in accordance 
                with their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
              <p>
                Our games are designed for general audiences. We do not knowingly collect personal 
                information from children under 13 years of age. If we learn that we have collected 
                personal information from a child under 13, we will delete that information as quickly 
                as possible.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>The right to access your personal data</li>
                <li>The right to request correction of your personal data</li>
                <li>The right to request erasure of your personal data</li>
                <li>The right to object to processing of your personal data</li>
                <li>The right to request restriction of processing your personal data</li>
                <li>The right to request transfer of your personal data</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please 
                contact us at: <a href="mailto:privacy@alphahazestudios.com" className="text-primary hover:underline">privacy@alphahazestudios.com</a>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date at 
                the top of this Privacy Policy.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
