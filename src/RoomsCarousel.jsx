import room1B from "./assets/rooms/room-1b.jpg";
import roomSkyView from "./assets/rooms/room-sky-view.jpg";
import roomSwimUp from "./assets/rooms/room-swim-up.jpg";
import roomOceanView from "./assets/rooms/room-ocean-view.jpg";

const asterick = <span className="align-text-top text-xs">*</span>;

function RoomSlide({
  id,
  imgSrc,
  roomType,
  description,
  familyRates,
  clubRates,
}) {
  const familyRateRows = familyRates.map((rate, idx) => (
    <td key={idx}>{rate}</td>
  ));
  const clubRateRows = clubRates.map((rate, idx) => <td key={idx}>{rate}</td>);
  return (
    <div id={id} className="carousel-item grid w-full">
      <div>
        <h3 className="mb-6 text-xl">{roomType}</h3>
        <img src={imgSrc} className="w-full" />
        <p className="mx-4 mt-6">{description}</p>
        <div className="mt-4 overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Est. Room Rates</th>
                <th>3 nights</th>
                <th>4 nights</th>
                <th>5 nights</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Family Club:</th>
                {familyRateRows}
              </tr>
              <tr>
                <th>Mirage Club (18+):</th>
                {clubRateRows}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function RoomsCarousel() {
  return (
    <div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#room-1b" className="btn btn-sm">
          Standard
        </a>
        <a href="#room-sky-view" className="btn btn-sm">
          Sky View
        </a>
        <a href="#room-swim-up" className="btn btn-sm">
          Swim Up
        </a>
        <a href="#room-ocean-view" className="btn btn-sm">
          Ocean View
        </a>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-5/6 border-t-2" />
      </div>
      <div className="carousel my-6 w-full">
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
      <p className="text-sm">
        {asterick}These are estimates and subject to change until you book.
        Rates are per person, based on 2 adults sharing a room. To recieve a
        quote, please fill out the &quot;Request Room&quot; form where you can
        specify details about room occupancy, dates, etc.
      </p>
    </div>
  );
}
