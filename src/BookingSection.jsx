import honeymoonsInc from "./assets/honeymoons-inc.jpg";

export default function BookingSection() {
  return (
    <section className="mb-4 grid w-full">
      <h2 className="mb-4 text-2xl">Booking</h2>
      <img src={honeymoonsInc} />
      <div className="m-6">
        <p>
          We are working with Honeymoons, Inc. to handle reservations.
          Reservations include a resort stay as well as shuttle transfer to and
          from the airport. Airline flights must be booked separately.
        </p>
        <p className="mt-2">
          To allow for flexibility, rooms are NOT reserved. Please book as early
          as possible to lock-in the best possible rate for yourself.
        </p>
        <p className="mt-2">
          Please contact Catherina Eberhart with any questions or concerns.
        </p>
        <ul className="mt-2">
          <li>
            Email:{" "}
            <a
              className="link link-primary"
              href="mailto:catherina@honeymoonsinc.com"
              target="_blank"
            >
              catherina@honeymoonsinc.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a
              className="link link-primary no-underline"
              href="tel:6788944070"
              target="_blank"
            >
              678-894-4070
            </a>
          </li>
          <li>Business Hours: Monday-Friday, 9am-5pm EST</li>
        </ul>
        <a
          role="button"
          className="btn btn-primary mt-8"
          href="https://traveljoy.com/groups/aymFt2DRBCWzNrFUU2M3qkVk/forms/sJH1S2cdP8kWsCrejSTh6pqq"
          target="_blank"
        >
          Request Room
        </a>
      </div>
    </section>
  );
}
