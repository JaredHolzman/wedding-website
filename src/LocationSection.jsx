import majesticMirage from "./assets/majestic-mirage.jpg";

export default function LocationSection() {
  return (
    <section className="mb-4 grid w-full">
      <h2 className="mb-4 text-2xl">Accommodations</h2>
      <img src={majesticMirage} />
      <div className="m-6">
        <p>
          The ceremony will be held at Majestic Mirage Punta Cana. See below for
          room options and booking details.
        </p>
      </div>
    </section>
  );
}
