import Section from "./Section";
import wideSideBySide from "./assets/wideSideBySide.jpg";

// <a href="https://vitejs.dev" target="_blank">
//   <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>

function App() {
  return (
    <main className="w-full">
      <Section
        heading={"We're getting married!"}
        subheading={
          'Come join us for a beach-side destination wedding as we say "I do" under the beautiful Punta Cana sun'
        }
        imgSrc={wideSideBySide}
      >
        <div className="my-8 flex justify-around">
          <button className="btn">RSVP</button>
          <button className="btn">More Info</button>
        </div>
      </Section>
    </main>
  );
}

export default App;
