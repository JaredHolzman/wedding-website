import wideSideBySide from "./assets/wideSideBySide.jpg";

// eslint-disable-next-line no-unused-vars
function HeroLanding() {
  return (
    <div
      className="hero min-h-screen items-start"
      style={{
        backgroundImage: `url(${wideSideBySide})`,
      }}
    >
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content pt-16 text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-thin text-primary-content">
            {"We're Getting Married!"}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default function LandingSection() {
  return (
    <section className="grid w-full scroll-mt-6">
      <div className="overflow-hidden">
        <img
          src={wideSideBySide}
          className="ml-[-50vw] h-auto w-[200vw] max-w-none object-cover object-bottom lg:ml-0 lg:max-w-full"
        />
      </div>
      <div className="grid justify-center px-6 py-8 md:py-32">
        <h2 className="mb-8 text-4xl md:text-7xl">
          {"We're Getting Married!"}
        </h2>
        <div className="max-w-prose space-y-4 text-xl md:space-y-12 md:text-4xl">
          <p className="mb-8 text-base italic md:text-2xl">
            Come join us for a beach-side destination wedding as we celebrate
            our love and say &quot;I do&quot;
          </p>
          <p>
            We are having a destination wedding in{" "}
            <span className="font-bold">Punta Cana</span> and would love for you
            to join us for our wedding celebration at the beautiful Majestic
            Mirage Resort.
          </p>
          <p>
            Our ceremony will take place{" "}
            <span className="font-bold">June 6, 2025</span>, and we hope you
            come to enjoy a well-deserved vacation with us!
          </p>
          <p>We look forward to seeing you in Paradise!</p>
          <p>Love,</p>
          <p className="text-lg font-semibold md:text-3xl">Jared & Joanna</p>
        </div>
        <div className="mb-8 mt-12 flex justify-around md:mt-24">
          <a
            role="button"
            className="btn btn-accent btn-lg btn-wide text-xl md:text-4xl"
            href="https://withjoy.com/joanna-and-jared-jun-25/rsvp"
          >
            RSVP
          </a>
          {/* <button className="btn">More Info</button> */}
        </div>
      </div>
    </section>
  );
}
