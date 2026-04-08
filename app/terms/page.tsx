import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";
import {
  PolicySection,
  PolicyPara,
  PolicySubhead,
  PolicyList,
  HighlightBox,
} from "@/components/PolicyComponents";

export const metadata: Metadata = {
  title: "Terms & Conditions — Lookbook",
  description: "The terms governing your use of the Lookbook app.",
};

const sidebarLinks = [
  { href: "#intellectual-property", label: "Intellectual Property" },
  { href: "#changes-app", label: "Changes to Application" },
  { href: "#data-security", label: "Data & Security" },
  { href: "#camera-photos", label: "Camera & Photos" },
  { href: "#storage", label: "Data Storage" },
  { href: "#third-party", label: "Third Party Services" },
  { href: "#internet", label: "Internet & Charges" },
  { href: "#responsibilities", label: "Your Responsibilities" },
  { href: "#termination", label: "Updates & Termination" },
  { href: "#contact", label: "Contact Us" },
];

export default function TermsPage() {
  return (
    <PolicyLayout
      badge="📄 Legal"
      title="Terms & Conditions"
      meta="Effective: April 5, 2026"
      heroBg="dark"
      sidebarLinks={sidebarLinks}
    >
      {/* Intro callout */}
      <div className="bg-accent-light border-l-4 border-accent rounded-2xl px-6 py-5 mb-10">
        <p className="text-sm text-charcoal leading-relaxed font-dm font-light">
          These terms and conditions apply to the <strong>Lookbook - Virtual Closet</strong> app (&quot;Application&quot;) for mobile devices created by <strong>Arvin Edouard</strong> (&quot;Service Provider&quot;) as a Free service. By downloading or utilizing the Application, you automatically agree to these terms.
        </p>
      </div>

      <PolicySection id="intellectual-property"title="Intellectual Property">
        <PolicyPara>
          Unauthorized copying or modification of the Application, any part of the Application, or our trademarks is strictly prohibited. 
        </PolicyPara>
        <PolicyList
          items={[
            "You may not attempt to extract the source code of the Application.",
            "Translating the Application into other languages or creating derivative versions is not permitted.",
            "All trademarks, copyrights, and database rights related to the Application remain the property of the Service Provider.",
          ]}
        />
      </PolicySection>

      <PolicySection id="changes-app" title="Changes to the Application">
        <PolicyPara>
          The Service Provider reserves the right to modify the Application or charge for its services at any time and for any reason. 
        </PolicyPara>
        <HighlightBox>
          The Service Provider assures you that any future charges for the Application or its services will be clearly communicated to you in advance.
        </HighlightBox>
      </PolicySection>

      <PolicySection id="data-security" title="Personal Data & Security">
        <PolicyPara>
          The Application processes personal data provided to the Service Provider to deliver the Service. It is your responsibility to maintain the security of your phone and access to the Application.
        </PolicyPara>
        <PolicySubhead>Device Security Notice</PolicySubhead>
        <PolicyPara>
          We strongly advise against <strong>jailbreaking or rooting</strong> your phone. Such actions could expose your device to malware, compromise security features, and may result in the Application not functioning correctly or at all.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="camera-photos" title="Camera and Photo Library">
        <PolicyPara>
          The Application requires access to your device&apos;s camera and photo library to allow you to upload images of your clothing items.
        </PolicyPara>
        <PolicyList
          items={[
            "All images are stored locally on your device only.",
            "Images are never uploaded to any external server or cloud service.",
            "The Service Provider does not share, sell, or use your photos for any purpose other than core app functionality.",
          ]}
        />
        <PolicyPara>
          You may revoke access at any time via device settings, though this will limit Application functionality.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="storage" title="Data Storage">
        <PolicyPara>
          <strong>The Application stores all data locally on your device only.</strong> This includes all clothing items, outfit combinations, and photos you upload. No user content is transmitted to or stored on any external server.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="third-party" title="Third Party Services">
        <PolicyPara>
          The Application utilizes third-party services that have their own Terms and Conditions:
        </PolicyPara>
        <PolicyList
          items={[
            <a key="expo-terms" href="https://expo.dev/terms" target="_blank" rel="noopener noreferrer" className="text-accent underline">Expo Terms and Conditions</a>
          ]}
        />
      </PolicySection>

      <PolicySection id="internet" title="Internet Connection">
        <PolicyPara>
          The Application functions primarily offline. An internet connection may be required for initial download and app updates only.
        </PolicyPara>
        <PolicyPara>
          If you use the Application outside of Wi-Fi, your mobile network provider&apos;s terms still apply. You accept responsibility for any data charges or roaming fees incurred while using the Application.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="responsibilities" title="Your Responsibilities">
        <PolicyPara>
          The Service Provider cannot assume responsibility for aspects of usage within your control:
        </PolicyPara>
        <PolicyList
          items={[
            "Ensuring your device remains charged to access the Service.",
            "Accepting that the Service Provider accepts no liability for loss resulting from reliance on Application functionality.",
          ]}
        />
      </PolicySection>

      <PolicySection id="termination" title="Updates & Termination">
        <PolicyPara>
          You agree to accept updates to the Application when offered. The Service Provider may also cease providing the Application at any time without notice.
        </PolicyPara>
        <PolicyPara>Upon termination:</PolicyPara>
        <PolicyList
          items={[
            "All rights and licenses granted to you will end.",
            "You must cease using the Application and delete it from your device.",
          ]}
        />
      </PolicySection>

      <PolicySection id="children" title="Children">
        <PolicyPara>
          The Application does not knowingly solicit data from or market to children under 13. If you are aware that a child under 13 has provided personal information, please contact us.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="contact" title="Contact Us">
        <PolicyPara>
          If you have any questions or suggestions about these Terms, please reach out:
        </PolicyPara>
        <PolicyList
          items={[
            <span key="email">Email: <strong>trythelookbook@gmail.com</strong></span>,
          ]}
        />
      </PolicySection>
    </PolicyLayout>
  );
}