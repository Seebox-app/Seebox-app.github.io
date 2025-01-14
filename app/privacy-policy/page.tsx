import { Link } from "@nextui-org/link";

import { WhatWeCollect } from "@/app/privacy-policy/components/what-we-collect";

export default function PrivacyPolicyPage() {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          PRIVACY POLICY
        </h1>
        <p className="text-sm text-gray-600 mb-8">
          Last updated January 14, 2025
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
          following each key point or by using our table of contents below to
          find the section you are looking for.
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
            <Link className="text-blue-600 hover:underline" href="#">
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
            <Link className="text-blue-600 hover:underline" href="#">
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
            <Link className="text-blue-600 hover:underline" href="#">
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
            <Link className="text-blue-600 hover:underline" href="#">
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
            <Link className="text-blue-600 hover:underline" href="#">
              Learn more about how we keep your information safe.
            </Link>
          </li>
          <li>
            <span className="font-bold">What are your rights?</span> Depending
            on where you are located geographically, the applicable privacy law
            may mean you have certain rights regarding your personal
            information.{" "}
            <Link className="text-blue-600 hover:underline" href="#">
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

        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          TABLE OF CONTENTS
        </h2>
        <ol className="list-decimal list-inside space-y-2 mb-8">
          <li>WHAT INFORMATION DO WE COLLECT?</li>
          <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
          <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
          <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
          <li>DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</li>
          <li>HOW DO WE HANDLE YOUR SOCIAL LOGINS?</li>
          <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
          <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
          <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
          <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
          <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
          <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
          <li>
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </li>
        </ol>
        <WhatWeCollect />
      </div>
    </div>
  );
}
