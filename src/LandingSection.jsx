import Section from "./Section";
import wideSideBySide from "./assets/wideSideBySide.jpg";

export default function LandingSection() {
  return (
    <Section
      heading={"We're Getting Married!"}
      subheading={
        'Come join us for a beach-side destination wedding as we say "I do" under the beautiful Punta Cana sun'
      }
      imgSrc={wideSideBySide}
    >
      <div className="mt-8 flex justify-around">
        <button className="btn">RSVP</button>
        <button className="btn">More Info</button>
      </div>
    </Section>
  );
}
