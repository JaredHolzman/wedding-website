import majesticMirage from "./assets/majestic-mirage.jpg";

export default function DetailsSection() {
  return (
    <section className="mb-4 grid w-full">
      <h2 className="mb-4 text-2xl">Event Details</h2>
      <img src={majesticMirage} />
      <div className="m-6 space-y-4">
        <p>
          The ceremony will be held on{" "}
          <span className="font-semibold">June 06, 2025, 6:00PM</span> at the{" "}
          <a className="link" href="https://majesticmiragepuntacana.com/">
            Majestic Mirage Punta Cana
          </a>
          . The Majestic Mirage is an all-inclusive resort with several
          restaurants, bars, and pools, live music, and beach-side service.
        </p>
        <p>
          The plan is to hang out with family, sip cocktails by the beach, get
          married, and then go back to the beach &#x1F334;. Expect dancing,
          love, tears, Piña Coladas, quality family time, and of course, plenty
          of SUN.
        </p>
        <p>
          We are working with a travel agency to help coordinate resort
          bookings. See below for room options and booking details.
        </p>
      </div>
    </section>
  );
}
