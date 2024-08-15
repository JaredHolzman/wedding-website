import room1B from "./assets/rooms/room-1b.jpg";
import roomSkyView from "./assets/rooms/room-sky-view.jpg";
import roomSwimUp from "./assets/rooms/room-swim-up.jpg";
import roomOceanView from "./assets/rooms/room-ocean-view.jpg";

const asterisk = <span className="align-text-top text-xs md:text-3xl">*</span>;

function RoomSlide({
  id,
  imgSrc,
  roomType,
  description,
  familyRates,
  clubRates,
}) {
  const familyRateRows = familyRates.map((rate, idx) => (
    <td key={idx} className="md:text-3xl">
      {rate}
    </td>
  ));
  const clubRateRows = clubRates.map((rate, idx) => (
    <td key={idx} className="md:text-3xl">
      {rate}
    </td>
  ));

  return (
    <div
      id={id}
      className="carousel-item grid w-full scroll-mt-44 justify-center"
    >
      <h3 className="mb-6 text-2xl md:mb-12 md:text-5xl">{roomType}</h3>
      <div className="flex w-full justify-center">
        <img src={imgSrc} className="max-h-[36rem]" />
      </div>
      <p className="mx-4 mt-6 max-w-prose md:mt-12 md:text-3xl">
        {description}
      </p>
      <div className="mt-4 overflow-x-auto md:mt-8">
        <table className="table md:table-lg">
          <thead>
            <tr>
              <th className="md:text-2xl">Est. Room Rates*</th>
              <th className="md:text-2xl">3 nights</th>
              <th className="md:text-2xl">4 nights</th>
              <th className="md:text-2xl">5 nights</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="md:text-3xl">Family Club:</th>
              {familyRateRows}
            </tr>
            <tr>
              <th className="md:text-3xl">Mirage Club (18+):</th>
              {clubRateRows}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function RoomsCarousel() {
  return (
    <div className="carousel mb-6 mt-8 w-full md:my-16">
      <RoomSlide
        id="room-1b"
        imgSrc={room1B}
        roomType="One Bedroom Suite"
        description={`
            Pool view, located on the second and third floors, with a bathtub
            and outdoor jacuzzi, living room and bedroom area separated by
            doors. Bedding 1 king or 2 queen size. 1000 sq ft.
          `}
        familyRates={["$612.00", "$805.00", "$999.00"]}
        clubRates={["$635.00", "$836.00", "$1038.00"]}
      />

      <RoomSlide
        id="room-sky-view"
        imgSrc={roomSkyView}
        roomType="Sky View Suite"
        description={`
            Pool and Sky view, located on 4th floor, room divided in two floors
            (Main room plus a large roof top terrace with an outdoor Jacuzzi).
            Bedding 1 king. 1000 sq ft divided room and terrace.
          `}
        familyRates={["$612.00", "$805.00", "$999.00"]}
        clubRates={["$635.00", "$836.00", "$1038.00"]}
      />
      <RoomSlide
        id="room-swim-up"
        imgSrc={roomSwimUp}
        roomType="Swim Up Suite"
        description={`
            Pool view, located on ground floor, with a bathtub and outdoor
            Jacuzzi, direct access to the pool and a small garden including
            a Bali Bed. Bedding 1 king or 2 queens. 1000 sq ft.
          `}
        familyRates={["$612.00", "$805.00", "$999.00"]}
        clubRates={["$635.00", "$836.00", "$1038.00"]}
      />
      <RoomSlide
        id="room-ocean-view"
        imgSrc={roomOceanView}
        roomType="Ocean View Suite"
        description={`
            Ocean view. Located 2nd, 3rd, or 4th floor. Bathtub. Outdoor
            Jacuzzi. Living room. Bedroom area separated by doors. Bedding 1
            king or 2 queen. 1000 sq ft.
          `}
        familyRates={["$612.00", "$805.00", "$999.00"]}
        clubRates={["$635.00", "$836.00", "$1038.00"]}
      />
    </div>
  );
}

export default function RoomsSection() {
  return (
    <section
      id="rooms"
      className="grid w-full scroll-mt-6 justify-center py-10 md:py-32"
    >
      <h2 className="mb-8 text-4xl md:mb-16 md:text-7xl">Room Options</h2>

      <div className="flex w-full justify-center gap-2 py-2 md:gap-4">
        <a
          href="#room-1b"
          className="btn btn-secondary btn-sm md:btn-lg md:text-2xl"
        >
          Standard
        </a>
        <a
          href="#room-sky-view"
          className="btn btn-secondary btn-sm md:btn-lg md:text-2xl"
        >
          Sky View
        </a>
        <a
          href="#room-swim-up"
          className="btn btn-secondary btn-sm md:btn-lg md:text-2xl"
        >
          Swim Up
        </a>
        <a
          href="#room-ocean-view"
          className="btn btn-secondary btn-sm md:btn-lg md:text-2xl"
        >
          Ocean View
        </a>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-5/6 max-w-prose border-t-2 border-base-300" />
      </div>
      <RoomsCarousel />
      <p className="mx-2 mb-6 max-w-prose place-self-center text-sm md:text-4xl">
        {asterisk}These are estimates and subject to change until you book.
        Rates are per person, based on 2 adults sharing a room. To receive a
        quote, please fill out the &quot;Request Room&quot; form where you can
        specify details about room occupancy, dates, etc.
      </p>
    </section>
  );
}
