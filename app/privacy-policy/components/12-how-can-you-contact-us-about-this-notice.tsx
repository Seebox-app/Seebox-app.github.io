export const HowCanYouContactUsAboutThisNotice = () => {
  return (
    <div className="space-y-6 text-gray-800">
      <h1
        className="text-2xl font-bold"
        id="12-how-can-you-contact-us-about-this-notice"
      >
        12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
      </h1>

      <p>
        If you have questions or comments about this notice, you may email us at{" "}
        <a
          className="text-blue-500 hover:underline"
          href="mailto:info@seebox.app"
        >
          info@seebox.app
        </a>{" "}
        or contact us by post at:
      </p>

      <address className="not-italic">
        Seebox.app
        <br />
        No. 12, Zaferanieh St.
        <br />
        Tehran
        <br />
        Iran
      </address>
    </div>
  );
};
