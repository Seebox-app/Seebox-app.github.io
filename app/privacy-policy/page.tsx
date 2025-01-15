import { Link } from "@nextui-org/link";

import { WhatWeCollect } from "@/app/privacy-policy/components/1-what-information-do-we-collect";
import { HowDoWeProcessYourInformation } from "@/app/privacy-policy/components/2-how-do-we-process-your-information";
import { WhenAndWithWhomDoWeShareYourPersonalInformation } from "@/app/privacy-policy/components/3-when-and-with-whom-do-we-share-your-personal-information";
import { DoWeUseCookiesAndOtherTrackingTechnologies } from "@/app/privacy-policy/components/4-do-we-use-cookies-and-other-tracking-technologies";
import { DoWeOfferArtificialIntelligenceBasedProducts } from "@/app/privacy-policy/components/5-do-we-offer-artificial-intelligence-based-products";
import { HowDoWeHandleYourSocialLogins } from "@/app/privacy-policy/components/6-how-do-we-handle-your-social-logins";
import { HowLongDoWeKeepYourInformation } from "@/app/privacy-policy/components/7-how-long-do-we-keep-your-information";
import { HowDoWeKeepYourInformationSafe } from "@/app/privacy-policy/components/8-how-do-we-keep-your-information-safe";
import { WhatAreYourPrivacyRights } from "@/app/privacy-policy/components/9-what-are-your-privacy-rights";
import { ControlsForDoNotTrackFeatures } from "@/app/privacy-policy/components/10-controls-for-do-not-track-features";
import { DoWeMakeUpdatesToThisNotice } from "@/app/privacy-policy/components/11-do-we-make-updates-to-this-notice";
import { HowCanYouContactUsAboutThisNotice } from "@/app/privacy-policy/components/12-how-can-you-contact-us-about-this-notice";
import { HowCanYouReviewUpdateOrDeleteTheDataWeCollectFromYou } from "@/app/privacy-policy/components/13-how-can-you-review-update-or-delete-the-data-we-collect-from-you";
import { TableOfContent } from "@/app/privacy-policy/components/table-of-content";

export default function PrivacyPolicyPage() {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          PRIVACY POLICY
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          <time dateTime="2025-01-14 20:00">Last updated January 14, 2025</time>
        </p>

        <p className="mb-4">
          This Privacy Notice for <span className="font-bold">Seebox.app</span>{" "}
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), describes how
          and why we might access, collect, store, use, and/or share
          (&quot;process&quot;) your personal information when you use our
          services (&quot;Services&quot;), including when you:
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>
            Visit our website at{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://seebox.app"
            >
              https://seebox.app
            </a>
            , or any website of ours that links to this Privacy Notice
          </li>
          <li>
            Download and use our Facebook application (Seebox.app), or any other
            application of ours that links to this Privacy Notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <p className="mb-4">
          Questions or concerns? Reading this Privacy Notice will help you
          understand your privacy rights and choices. We are responsible for
          making decisions about how your personal information is processed. If
          you do not agree with our policies and practices, please do not use
          our Services. If you still have any questions or concerns, please
          contact us at{" "}
          <a
            className="text-blue-600 hover:underline"
            href="mailto:privacy@seebox.app"
          >
            privacy@seebox.app
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          SUMMARY OF KEY POINTS
        </h2>
        <p className="mb-4">
          This summary provides key points from our Privacy Notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our{" "}
          <Link
            className="text-blue-600 hover:underline"
            href="#table-of-contents"
          >
            table of contents
          </Link>{" "}
          below to find the section you are looking for.
        </p>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>
            <span className="font-bold">
              What personal information do we process?
            </span>{" "}
            When you visit, use, or navigate our Services, we may process
            personal information depending on how you interact with us and the
            Services, the choices you make, and the products and features you
            use.{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="#2-how-do-we-process-your-information"
            >
              Learn more about personal information you disclose to us.
            </Link>
          </li>
          <li>
            <span className="font-bold">
              Do we process any sensitive personal information?
            </span>{" "}
            Some of the information may be considered &quot;special&quot; or
            &quot;sensitive&quot; in certain jurisdictions, for example your
            racial or ethnic origins, sexual orientation, and religious beliefs.{" "}
            <span className="font-bold">
              We do not process sensitive personal information.
            </span>
          </li>
          <li>
            <span className="font-bold">
              Do we collect any information from third parties?
            </span>{" "}
            We may collect information from public databases, marketing
            partners, social media platforms, and other outside sources.{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="#1-what-information-do-we-collect"
            >
              Learn more about information collected from other sources.
            </Link>
          </li>
          <li>
            <span className="font-bold">
              How do we process your information?
            </span>{" "}
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent.{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="#2-how-do-we-process-your-information"
            >
              Learn more about how we process your information.
            </Link>
          </li>
          <li>
            <span className="font-bold">
              In what situations and with which types of parties do we share
              personal information?
            </span>{" "}
            We may share information in specific situations and with specific
            categories of third parties.{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="#3-when-and-with-whom-do-we-share-your-personal-information"
            >
              Learn more about when and with whom we share your personal
              information.
            </Link>
          </li>
          <li>
            <span className="font-bold">
              How do we keep your information safe?
            </span>{" "}
            We have adequate organizational and technical processes and
            procedures in place to protect your personal information. However,
            no electronic transmission over the internet or information storage
            technology can be guaranteed to be 100% secure.{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="#8-how-do-we-keep-your-information-safe"
            >
              Learn more about how we keep your information safe.
            </Link>
          </li>
          <li>
            <span className="font-bold">What are your rights?</span> Depending
            on where you are located geographically, the applicable privacy law
            may mean you have certain rights regarding your personal
            information.{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="#9-what-are-your-privacy-rights"
            >
              Learn more about your privacy rights.
            </Link>
          </li>
          <li>
            <span className="font-bold">How do you exercise your rights?</span>{" "}
            The easiest way to exercise your rights is by visiting{" "}
            <Link
              className="text-blue-600 hover:underline"
              href="https://seebox.app/data-request"
            >
              seebox.app/data-request
            </Link>
            , or by contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </li>
        </ul>

        <h2
          className="text-2xl font-bold text-gray-900 mb-4"
          id="table-of-contents"
        >
          TABLE OF CONTENTS
        </h2>
        <TableOfContent />
        <br />
        <WhatWeCollect />
        <br />
        <HowDoWeProcessYourInformation />
        <br />
        <WhenAndWithWhomDoWeShareYourPersonalInformation />
        <br />
        <DoWeUseCookiesAndOtherTrackingTechnologies />
        <br />
        <DoWeOfferArtificialIntelligenceBasedProducts />
        <br />
        <HowDoWeHandleYourSocialLogins />
        <br />
        <HowLongDoWeKeepYourInformation />
        <br />
        <HowDoWeKeepYourInformationSafe />
        <br />
        <WhatAreYourPrivacyRights />
        <br />
        <ControlsForDoNotTrackFeatures />
        <br />
        <DoWeMakeUpdatesToThisNotice />
        <br />
        <HowCanYouContactUsAboutThisNotice />
        <br />
        <HowCanYouReviewUpdateOrDeleteTheDataWeCollectFromYou />
      </div>
    </div>
  );
}
