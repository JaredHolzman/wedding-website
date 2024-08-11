import wideSideBySide from "./assets/wideSideBySide.jpg";

export default function Section() {
  return (
    <section>
      <img src={wideSideBySide} className="max-h-96" />
      <h2>{"We're getting married"}</h2>
      <p>
        Come join us for a beach-side destination wedding as we say &quot;I
        do&quot; under the beautiful Punta Cana sun
      </p>
    </section>
  );
}
