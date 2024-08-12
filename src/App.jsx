import RoomsSection from "./RoomsSection";
import Section from "./Section";
import wideSideBySide from "./assets/wideSideBySide.jpg";
import majesticMirage from "./assets/majestic-mirage.jpg";

// <a href="https://vitejs.dev" target="_blank">
//   <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>

function App() {
  return (
    <main className="w-full text-center">
      <Section
        heading={"We're Getting Married!"}
        subheading={
          'Come join us for a beach-side destination wedding as we say "I do" under the beautiful Punta Cana sun'
        }
        imgSrc={wideSideBySide}
      >
        <div className="mt-8 flex justify-around">
          <button className="btn">RSVP</button>
          <button className="btn">More Info</button>
        </div>
      </Section>
      <section className="mb-4 grid w-full">
        <h2 className="mb-4 text-2xl">Accommodations</h2>
        <img src={majesticMirage} />
        <div className="m-6">
          <p>
            The ceremony will be held at Majestic Mirage Punta Cana. We are
            working with Honeymoons, Inc. to handle room reservations. All
            bookings will include shuttle transfer to and from the airport. To
            allow for flexibility, rooms are NOT reserved. Please book as early
            as possible to lock-in the best possible rate for yourself. See
            below for room options and booking details.
          </p>
        </div>
      </section>
      <RoomsSection />
    </main>
  );
}

export default App;
