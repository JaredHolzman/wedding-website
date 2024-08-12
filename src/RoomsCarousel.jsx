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
        <hgroup className="mx-6 mb-6">
          <h3 className="mb-4 text-xl">{roomType}</h3>
          <p>{description}</p>
        </hgroup>
        <img src={imgSrc} className="w-full" />
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
        <a href="#1b-suite" className="btn btn-sm">
          Standard
        </a>
        <a href="#item2" className="btn btn-sm">
          Sky View
        </a>
        <a href="#item3" className="btn btn-sm">
          Swim Up
        </a>
        <a href="#item4" className="btn btn-sm">
          Ocean View
        </a>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-5/6 border-t-2" />
      </div>
      <div className="carousel my-6 w-full">
        <RoomSlide
          id="1b-suite"
          imgSrc={room1B}
          roomType="One Bedroom Suite"
          description={`
            Pool view. Located on 2nd, 3rd or 4th floor. Bathtub. Outdoor
            jacuzzi. Bedding 1 king or 2 queens. 1000 sq ft.
          `}
          familyRates={["$612.00", "$805.00", "$999.00"]}
          clubRates={["$635.00", "$836.00", "$1038.00"]}
        />
        <div id="item2" className="carousel-item w-full">
          <img src={roomSkyView} className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={roomSwimUp} className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={roomOceanView} className="w-full" />
        </div>
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
