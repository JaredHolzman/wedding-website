import Section from "./Section";
import wideSideBySide from "./assets/wideSideBySide.jpg";

export default function LandingSection() {
  return (
    <>
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
      <Section heading={"We're Getting Married!"} imgSrc={wideSideBySide}>
        <div className="space-y-4">
          <p className="italic">
            Come join us for a beach-side destination wedding as we celebrate
            our love and say &quot;I do&quot;
          </p>
          <p>
            We are having a destination wedding in Punta Cana and would love for
            you to join us for our wedding celebration at the beautiful Majestic
            Mirage Resort.
          </p>
          <p>
            Our ceremony will take place{" "}
            <span className="font-bold">June 6, 2025</span>, and we hope you
            come to enjoy a well-deserved vacation with us!
          </p>
          <p>We look forward to seeing you in Paradise!</p>
          <p>Love,</p>
          <p className="text-lg font-semibold">Jared & Joanna</p>
        </div>
        <div className="mt-8 flex justify-around">
          <button className="btn btn-primary">RSVP</button>
          <button className="btn">More Info</button>
        </div>
      </Section>
    </>
  );
}
