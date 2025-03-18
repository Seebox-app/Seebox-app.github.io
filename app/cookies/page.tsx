import { Metadata } from "next";

import { SectionTitle } from "@/app/cookies/components/section-title";
import { Paragraph } from "@/app/cookies/components/paragraph";
import { CookieTable } from "@/app/cookies/components/cookie-table";
import { BrowserLinks } from "@/app/cookies/components/browser-links";

export const metadata: Metadata = {
  title: "Cookie Policy",
  alternates: {
    canonical: "/cookies",
  },
};
export default function CookiePolicyPage() {
  return (
    <div className="p-8 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">COOKIE POLICY</h1>
        <p className="text-sm text-gray-600 mb-8">
          <time dateTime="2025-01-17 20:00">Last updated January 17, 2025</time>
        </p>

        <Paragraph>
          This Cookie Policy explains how Seebox.app (&#34;
          <strong>Company</strong>,&#34; &#34;<strong>we</strong>,&#34; &#34;
          <strong>us</strong>
          ,&#34; and &#34;<strong>our</strong>&#34;) uses cookies and similar
          technologies to recognize you when you visit our website at &nbsp;
          <a
            className="text-blue-600 hover:underline"
            href="https://seebox.app"
          >
            https://seebox.app
          </a>
          &nbsp;(&#34;
          <strong>Website</strong>&#34;). It explains what these technologies
          are and why we use them, as well as your rights to control our use of
          them.
        </Paragraph>
        <Paragraph>
          In some cases we may use cookies to collect personal information, or
          that becomes personal information if we combine it with other
          information.
        </Paragraph>
        <SectionTitle title="What are cookies?" />
        <Paragraph>
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners in order to make their websites work, or to work more
          efficiently, as well as to provide reporting information.
        </Paragraph>
        <Paragraph>
          Cookies set by the website owner (in this case, Seebox.app) are called
          &#34;first-party cookies.&#34; Cookies set by parties other than the
          website owner are called &#34;third-party cookies.&#34; Third-party
          cookies enable third-party features or functionality to be provided on
          or through the website (e.g., advertising, interactive content, and
          analytics). The parties that set these third-party cookies can
          recognize your computer both when it visits the website in question
          and also when it visits certain other websites.
        </Paragraph>
        <SectionTitle title="Why do we use cookies?" />
        <Paragraph>
          We use first- and third-party cookies for several reasons. Some
          cookies are required for technical reasons in order for our Website to
          operate, and we refer to these as &#34;essential&#34; or &#34;strictly
          necessary&#34; cookies. Other cookies also enable us to track and
          target the interests of our users to enhance the experience on our
          Online Properties. Third parties serve cookies through our Website for
          advertising, analytics, and other purposes. This is described in more
          detail below.
        </Paragraph>
        <SectionTitle title="How can I control cookies?" />
        <Paragraph>
          You have the right to decide whether to accept or reject cookies. You
          can exercise your cookie rights by setting your preferences in the
          Cookie Consent Manager. The Cookie Consent Manager allows you to
          select which categories of cookies you accept or reject. Essential
          cookies cannot be rejected as they are strictly necessary to provide
          you with services.
        </Paragraph>
        <Paragraph>
          The Cookie Consent Manager can be found in the notification banner and
          on our Website. If you choose to reject cookies, you may still use our
          Website though your access to some functionality and areas of our
          Website may be restricted. You may also set or amend your web browser
          controls to accept or refuse cookies.
        </Paragraph>
        <Paragraph>
          The specific types of first- and third-party cookies served through
          our Website and the purposes they perform are described in the table
          below (please note that the specific cookies served may vary depending
          on the specific Online Properties you visit):
          <strong>Essential website cookies:</strong>
        </Paragraph>
        <Paragraph>
          These cookies are strictly necessary to provide you with services
          available through our Website and to use some of its features, such as
          access to secure areas.
        </Paragraph>
        <CookieTable />
        <SectionTitle title="How can I control cookies on my browser?" />
        <Paragraph>
          As the means by which you can refuse cookies through your web browser
          controls vary from browser to browser, you should visit your
          browser&#39;s help menu for more information. The following is
          information about how to manage cookies on the most popular browsers:
        </Paragraph>
        <BrowserLinks />
      </div>
    </div>
  );
}
