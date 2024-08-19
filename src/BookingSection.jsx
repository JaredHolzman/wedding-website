import honeymoonsInc from "./assets/honeymoons-inc.jpg";

export default function BookingSection() {
  return (
    <section
      id="booking"
      className="grid w-full scroll-mt-6 justify-center bg-neutral py-10 text-neutral-content md:py-32"
    >
      <h2 className="text-4xl md:text-7xl">Booking</h2>
      <div className="flex w-full justify-center py-8 md:py-16">
        <img src={honeymoonsInc} className="max-h-[36rem]" />
      </div>
      <div className="mx-6 max-w-prose py-12 text-xl md:text-4xl">
        <div className="space-y-4 md:space-y-12">
          <p>
            We are working with Honeymoons, Inc. to handle reservations.
            Reservations include a resort stay as well as shuttle transfer to
            and from the airport. Airline flights must be booked separately.
          </p>
          <p>
            To allow for flexibility, rooms have NOT been reserved ahead of
            time. Please book as early as possible to lock-in the best possible
            rate for yourself.
          </p>
        </div>
        <div className="my-12 flex justify-center md:my-20">
          <a
            role="button"
            className="btn btn-primary btn-lg md:text-4xl"
            href="https://traveljoy.com/groups/aymFt2DRBCWzNrFUU2M3qkVk/forms/sJH1S2cdP8kWsCrejSTh6pqq"
            target="_blank"
          >
            Book Room
          </a>
        </div>
        <p>
          There is a{" "}
          <span className="text-2xl font-bold md:text-5xl">
            $50 per-person deposit due by 4PM EST next day
          </span>{" "}
          after booking. Please keep an eye on your email after filling out the
          form as your reservation is not confirmed until the deposit is made.
        </p>
        <div
          id="booking-contact"
          className="mt-12 space-y-2 md:mt-20 md:space-y-8"
        >
          <p>
            Please contact Catherina Eberhart with any questions or concerns:
          </p>
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
      </div>
    </section>
  );
}
