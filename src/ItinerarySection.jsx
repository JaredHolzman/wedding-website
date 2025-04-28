import itinerary from "./assets/itinerary.png";

export default function ItinerarySection() {
  return (
    <section
      id="itinerary"
      className="grid w-full justify-center bg-neutral py-10 text-neutral-content md:pb-16 md:pt-32"
    >
      <h2 className="mb-8 text-4xl md:text-7xl">Itinerary</h2>
      <div className="flex w-full justify-center md:px-32 md:py-16">
        <img src={itinerary} />
      </div>
    </section>
  );
}
