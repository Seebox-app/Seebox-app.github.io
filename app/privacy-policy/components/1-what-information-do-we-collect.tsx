export const WhatWeCollect = () => {
  return (
    <div className="space-y-6 text-gray-800">
      <h1 className="text-2xl font-bold" id="1-what-information-do-we-collect">
        1. WHAT INFORMATION DO WE COLLECT?
      </h1>

      <section>
        <h2 className="text-lg font-semibold">
          Personal information you disclose to us
        </h2>
        <p className="text-gray-600">
          <strong>In Short:</strong> We collect personal information that you
          provide to us.
        </p>
        <p>
          We collect personal information that you voluntarily provide to us
          when you register on the Services, express an interest in obtaining
          information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you
          contact us.
        </p>
        <h3 className="font-medium">Personal Information Provided by You</h3>
        <p>
          The personal information that we collect depends on the context of
          your interactions with us and the Services, the choices you make, and
          the products and features you use. The personal information we collect
          may include the following:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Names</li>
          <li>Phone numbers</li>
          <li>Contact preferences</li>
          <li>Email addresses</li>
        </ul>
        <p>
          <strong>Sensitive Information.</strong> We do not process sensitive
          information.
        </p>
        <h3 className="font-medium">Payment Data</h3>
        <p>
          We may collect data necessary to process your payment if you choose to
          make purchases, such as your payment instrument number and the
          security code associated with your payment instrument. All payment
          data is handled and stored by PayPal. You may find their privacy
          notice link(s) here:{" "}
          <a
            className="text-blue-500 underline"
            href="https://www.paypal.com/myaccount/privacy/privacyhub"
          >
            PayPal Privacy Hub
          </a>
          .
        </p>
        <h3 className="font-medium">Social Media Login Data</h3>
        <p>
          We may provide you with the option to register with us using your
          existing social media account details, like your Facebook, X, or other
          social media account. If you choose to register in this way, we will
          collect certain profile information about you from the social media
          provider, as described in the section called{" "}
          <strong>"HOW DO WE HANDLE YOUR SOCIAL LOGINS?"</strong> below.
        </p>
        <h3 className="font-medium">Application Data</h3>
        <p>
          If you use our application(s), we also may collect the following
          information if you choose to provide us with access or permission:
        </p>
        <h4 className="font-semibold">Mobile Device Data</h4>
        <p>
          We automatically collect device information (such as your mobile
          device ID, model, and manufacturer), operating system, version
          information, and system configuration information, device and
          application identification numbers, browser type and version, hardware
          model, Internet service provider and/or mobile carrier, and Internet
          Protocol (IP) address (or proxy server). If you are using our
          application(s), we may also collect information about the phone
          network associated with your mobile device, your mobile device’s
          operating system or platform, the type of mobile device you use, your
          mobile device’s unique device ID, and information about the features
          of our application(s) you accessed.
        </p>
        <p>
          This information is primarily needed to maintain the security and
          operation of our application(s), for troubleshooting, and for our
          internal analytics and reporting purposes.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          Information automatically collected
        </h2>
        <p>
          <strong>In Short:</strong> Some information — such as your Internet
          Protocol (IP) address and/or browser and device characteristics — is
          collected automatically when you visit our Services.
        </p>
        <p>
          We automatically collect certain information when you visit, use, or
          navigate the Services. This information does not reveal your specific
          identity (like your name or contact information) but may include
          device and usage information, such as your IP address, browser and
          device characteristics, operating system, language preferences,
          referring URLs, device name, country, location, information about how
          and when you use our Services, and other technical information. This
          information is primarily needed to maintain the security and operation
          of our Services and for our internal analytics and reporting purposes.
        </p>
        <p>
          Like many businesses, we also collect information through cookies and
          similar technologies. You can find out more about this in our Cookie
          Notice:{" "}
          <a
            className="text-blue-500 underline"
            href="https://seebox.app/cookies"
          >
            seebox.app/cookies
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">
          Information collected from other sources
        </h2>
        <p>
          <strong>In Short:</strong> We may collect limited data from public
          databases, marketing partners, social media platforms, and other
          outside sources.
        </p>
        <p>
          In order to enhance our ability to provide relevant marketing, offers,
          and services to you and update our records, we may obtain information
          about you from other sources, such as public databases, joint
          marketing partners, affiliate programs, data providers, social media
          platforms, and from other third parties.
        </p>
      </section>
    </div>
  );
};
