import { Link } from "@heroui/link";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>
          Transparency, Efficiency, and a Unique &nbsp;
        </span>
        <span className={title({ color: "violet" })}>Shopping&nbsp;</span>
        <br />
        <span className={title()}>Experience</span>
        <div className={subtitle({ class: "mt-4" })}>
          Empowering your shopping experience since 2024
        </div>
        <div className={subtitle({ class: "mt-4" })}>
          Contact us via email at{" "}
          <Link href="mailto:info@seebox.app">info@seebox.app</Link>
        </div>
      </div>
    </section>
  );
}
