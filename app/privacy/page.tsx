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
  title: "Privacy Policy — Lookbook",
  description: "How Lookbook collects, uses, and protects your personal information.",
};

const sidebarLinks = [
  { href: "#collection", label: "Information Collection" },
  { href: "#camera", label: "Camera & Photos" },
  { href: "#storage", label: "Data Storage" },
  { href: "#third-party", label: "Third Party Access" },
  { href: "#opt-out", label: "Opt-Out Rights" },
  { href: "#retention", label: "Data Retention" },
  { href: "#children", label: "Children" },
  { href: "#security", label: "Security" },
  { href: "#contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      meta="Effective: April 5, 2026"
      heroBg="light"
      sidebarLinks={sidebarLinks}
    >
      {/* Intro callout */}
      <div className="bg-accent-light border-l-4 border-accent rounded-2xl px-6 py-5 mb-10">
        <p className="text-sm text-charcoal leading-relaxed font-dm font-light">
          This privacy policy applies to the <strong>Lookbook - Virtual Closet</strong> app for mobile devices created by <strong>Arvin Edouard</strong> (&quot;Service Provider&quot;) as a Free service. This service is intended for use &quot;AS IS&quot;.
        </p>
      </div>

      <PolicySection id="collection" title="Information Collection and Use">
        <PolicyPara>
          The Application collects information when you download and use it. This information may include:
        </PolicyPara>
        <PolicyList
          items={[
            "Your device's Internet Protocol address (IP address).",
            "The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages.",
            "The operating system you use on your mobile device.",
            "Photos and images you upload of your clothing items and outfits.",
            "Camera and photo library access to capture and select images.",
          ]}
        />
        <PolicyPara>
          The Application does <strong>not</strong> gather precise information about the location of your mobile device.
        </PolicyPara>
        <HighlightBox>
          The Application does <strong>not</strong> use Artificial Intelligence (AI) technologies to process your data or provide features.
        </HighlightBox>
      </PolicySection>

      <PolicySection id="camera" title="Camera and Photo Library Access">
        <PolicyPara>
          The Application requires access to your device&apos;s camera and photo library to allow you to upload images of your clothing items. 
        </PolicyPara>
        <PolicyList
          items={[
            "All images are stored locally on your device only.",
            "Images are never uploaded to any external server or cloud service.",
            "The Service Provider does not have access to any photos or images on any external server.",
            "We do not share, sell, or use your photos for any purpose other than providing core app functionality.",
          ]}
        />
        <PolicyPara>
          You may revoke access at any time through your device&apos;s Settings, though this will limit the Application&apos;s functionality.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="storage" title="Data Storage">
        <PolicyPara>
          <strong>The Application stores all data locally on your device only.</strong> This includes all clothing items, outfit combinations, and photos you upload. No personal data, images, or user content is transmitted to or stored on any external server or cloud service.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="third-party" title="Third Party Access">
        <PolicyPara>
          Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application. The Application utilizes the following third-party service:
        </PolicyPara>
        <PolicyList
          items={[
            <a key="expo" href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline">Expo Privacy Policy</a>
          ]}
        />
        <PolicySubhead>Legal Disclosures</PolicySubhead>
        <PolicyPara>
          The Service Provider may disclose Information as required by law (subpoenas, etc.), to protect rights and safety, investigate fraud, or respond to government requests.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="opt-out" title="Opt-Out Rights">
        <PolicyPara>
          You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes available as part of your mobile device or via the mobile application marketplace.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="retention" title="Data Retention Policy">
        <PolicyPara>
          The Service Provider will retain User Provided data for as long as you use the Application. Since all data is stored locally on your device, you may delete the Application at any time to remove all associated data. 
        </PolicyPara>
      </PolicySection>

      <PolicySection id="children" title="Children">
        <PolicyPara>
          The Application does not knowingly solicit data from or market to children under 13. If the Service Provider discovers that a child under 13 has provided personal information, it will be deleted immediately from our servers (where applicable).
        </PolicyPara>
      </PolicySection>

      <PolicySection id="security" title="Security">
        <PolicyPara>
          Since all data is stored locally on your device, your information is protected by your device&apos;s built-in security features. The Service Provider provides physical, electronic, and procedural safeguards to protect information maintained, though no system can prevent all potential breaches.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="changes" title="Changes">
        <PolicyPara>
          This Privacy Policy may be updated from time to time. The Service Provider will notify you of any changes by updating this page. Continued use is deemed approval of all changes.
        </PolicyPara>
      </PolicySection>

      <PolicySection id="contact" title="Contact Us">
        <PolicyPara>
          If you have any questions regarding privacy while using the Application, please reach out:
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