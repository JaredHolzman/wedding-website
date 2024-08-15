import majesticMirage from "./assets/majestic-mirage.jpg";

export default function DetailsSection() {
  return (
    <section
      id="details"
      className="grid w-full scroll-mt-6 bg-base-300 py-10 md:py-32"
    >
      <h2 className="text-4xl md:text-7xl ">Event Details</h2>
      <div className="flex w-full justify-center py-8 md:py-16">
        <img src={majesticMirage} />
      </div>
      <div className="mx-6 space-y-4 py-12 text-xl md:space-y-12 md:text-4xl">
        <p>
          The ceremony will be held on{" "}
          <span className="font-semibold">June 06, 2025, 6:00PM</span> at the{" "}
          <a className="link" href="https://majesticmiragepuntacana.com/">
            Majestic Mirage Punta Cana
          </a>
          . The Majestic Mirage is an all-inclusive resort with several
          restaurants, bars, pools, live music, and beach-side service.
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
