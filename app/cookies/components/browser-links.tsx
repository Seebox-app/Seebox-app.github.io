import React from "react";

export const BrowserLinks: React.FC = () => {
  const links = [
    {
      name: "Chrome",
      url: "https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies",
    },
    {
      name: "Internet Explorer",
      url: "https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d",
    },
    {
      name: "Firefox",
      url: "https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop",
    },
    {
      name: "Safari",
      url: "https://support.apple.com/en-ie/guide/safari/sfri11471/mac",
    },
    {
      name: "Edge",
      url: "https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy",
    },
    { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/" },
  ];

  return (
    <ul className="list-disc ml-5 mt-4">
      {links.map((link) => (
        <li key={link.name}>
          <a
            className="text-blue-500"
            href={link.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
