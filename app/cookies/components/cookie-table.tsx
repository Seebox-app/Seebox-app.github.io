import React from "react";

import { Paragraph } from "@/app/cookies/components/paragraph";

export const CookieTable: React.FC = () => {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 font-semibold w-32">Name:</td>
            <td className="px-4 py-2">cf_clearance</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 font-semibold">Purpose:</td>
            <td className="px-4 py-2">
              Cloudflare clearance cookie stores the proof of challenge passed.
              It is used to no longer issue a challenge if present. It is
              required to reach an origin server.
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 font-semibold">Provider:</td>
            <td className="px-4 py-2">.seebox.app</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 font-semibold">Service:</td>
            <td className="px-4 py-2">
              Cloudflare{" "}
              <a
                className="text-blue-500 hover:underline"
                href="https://www.cloudflare.com/privacypolicy/"
              >
                View Service Privacy Policy
              </a>
            </td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 font-semibold">Type:</td>
            <td className="px-4 py-2">http_cookie</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Expires in:</td>
            <td className="px-4 py-2">11 months 30 days</td>
          </tr>
        </tbody>
      </table>
      <h3 className="text-xl font-bold text-gray-900 my-4">
        Unclassified cookies:
      </h3>
      <Paragraph>
        These are cookies that have not yet been categorized. We are in the
        process of classifying these cookies with the help of their providers.
      </Paragraph>
      <table className="min-w-full border border-gray-300 rounded-lg">
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 font-semibold">Name:</td>
            <td className="px-4 py-2">Priority</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 font-semibold">Provider:</td>
            <td className="px-4 py-2">seebox.app</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="px-4 py-2 font-semibold">Type:</td>
            <td className="px-4 py-2">server_cookie</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-semibold">Expires in:</td>
            <td className="px-4 py-2">session</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
