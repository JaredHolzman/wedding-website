import RoomsSection from "./RoomsSection";
import BookingSection from "./BookingSection";
import LandingSection from "./LandingSection";
import DetailsSection from "./DetailsSection";
import FAQSection from "./FAQSection";

import heart from "./assets/heart.svg";

function App() {
  return (
    <>
      <main className="w-full text-center">
        <LandingSection />
        <DetailsSection />
        <BookingSection />
        <RoomsSection />
        <FAQSection />
      </main>
      <footer className="footer footer-center mt-8 bg-base-300 p-4 text-base-content">
        <aside>
          <p>
            made with
            <img
              src={heart}
              className="mx-1.5 inline h-4"
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
