import honeymoonsInc from "./assets/honeymoons-inc.jpg";

export default function BookingSection() {
  return (
    <section
      id="booking"
      className="grid w-full scroll-mt-6 bg-neutral py-10 text-neutral-content"
    >
      <h2 className="text-4xl">Booking</h2>
      <div className="flex w-full justify-center">
        <img src={honeymoonsInc} className="mt-8 max-h-[36rem]" />
      </div>
      <div className="mx-6 space-y-4 py-12 text-xl">
        <p>
          We are working with Honeymoons, Inc. to handle reservations.
          Reservations include a resort stay as well as shuttle transfer to and
          from the airport. Airline flights must be booked separately.
        </p>
        <p>
          To allow for flexibility, rooms are NOT reserved. Please book as early
          as possible to lock-in the best possible rate for yourself.
        </p>
        <div className="flex justify-center py-8">
          <a
            role="button"
            className="btn btn-primary btn-lg"
            href="https://traveljoy.com/groups/aymFt2DRBCWzNrFUU2M3qkVk/forms/sJH1S2cdP8kWsCrejSTh6pqq"
            target="_blank"
          >
            Request Room
          </a>
        </div>
        <p>Please contact Catherina Eberhart with any questions or concerns.</p>
        <ul>
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
      </div>
      {/* <div className="flex justify-center py-12">
        <a
          role="button"
          className="btn btn-primary"
          href="https://traveljoy.com/groups/aymFt2DRBCWzNrFUU2M3qkVk/forms/sJH1S2cdP8kWsCrejSTh6pqq"
          target="_blank"
        >
          Request Room
        </a>
      </div> */}
    </section>
  );
}
