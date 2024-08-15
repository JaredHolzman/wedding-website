import RoomsSection from "./RoomsSection";
import BookingSection from "./BookingSection";
import LandingSection from "./LandingSection";
import DetailsSection from "./DetailsSection";
import FAQSection from "./FAQSection";
import NavMenu from "./NavMenu";

import heart from "./assets/heart.svg";

function App() {
  return (
    <>
      <main className="w-full text-center">
        <NavMenu />
        <LandingSection />
        <DetailsSection />
        <BookingSection />
        <RoomsSection />
        <FAQSection />
      </main>
      <footer className="footer footer-center bg-base-300 p-4 text-base-content md:p-6 md:text-2xl">
        <aside>
          <p>
            made with
            <img
              src={heart}
              className="mx-1.5 inline h-4 md:h-6"
              alt="love"
              title="love"
            />
            by Jared & Joanna
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;
