import itinerary from "./assets/itinerary.png";

export default function ItinerarySection() {
  return (
    <section
      id="itinerary"
      className="grid w-full scroll-mt-6 justify-center bg-neutral text-neutral-content"
    >
      <div className="flex w-full justify-center">
        <img src={itinerary} />
      </div>
    </section>
  );
}
