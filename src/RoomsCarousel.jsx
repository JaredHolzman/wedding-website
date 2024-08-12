import room1B from "./assets/rooms/room-1b.jpg";
import roomSkyView from "./assets/rooms/room-sky-view.jpg";
import roomSwimUp from "./assets/rooms/room-swim-up.jpg";
import roomOceanView from "./assets/rooms/room-ocean-view.jpg";

function RoomSlide({ id, imgSrc, roomType, description, rates }) {
  const rateRows = rates.map((rate, idx) => <td key={idx}>{rate}</td>);
  return (
    <div id={id} className="carousel-item grid w-full">
      <img src={imgSrc} className="w-full" />
      <h3>{roomType}</h3>
      <p>{description}</p>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>3 nights</th>
              <th>4 nights</th>
              <th>5 nights</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Est. Room Rates:</th>
              {rateRows}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function RoomsCarousel() {
  return (
    <div>
      <div className="carousel w-full">
        <RoomSlide
          id="1b-suite"
          imgSrc={room1B}
          roomType="One Bedroom Suite"
          description={`
            Pool view. Located on 2nd, 3rd or 4th floor. Bathtub. Outdoor
            jacuzzi. Bedding 1 king or 2 queens. 1000 sq ft.
          `}
          rates={["$612.00", "$805.00", "$999.00"]}
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
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#1b-suite" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
