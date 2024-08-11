import wideSideBySide from "./assets/wideSideBySide.jpg";

export default function Section() {
  return (
    <section className="grid w-full">
      <img src={wideSideBySide} />
      <div className="p-8 text-center">
        <h2 className="text-2xl mb-4">{"We're getting married!"}</h2>
        <p>
          Come join us for a beach-side destination wedding as we say &quot;I
          do&quot; under the beautiful Punta Cana sun
        </p>
        <div className="flex my-8 justify-around">
          <button className="btn">RSVP</button>
          <button className="btn">More Info</button>
        </div>
      </div>
    </section>
  );
}
