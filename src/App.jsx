import RoomsSection from "./RoomsSection";
import BookingSection from "./BookingSection";
import LandingSection from "./LandingSection";
import LocationSection from "./LocationSection";
import FAQSection from "./FAQSection";

function App() {
  return (
    <main className="w-full text-center">
      <LandingSection />
      <LocationSection />
      <BookingSection />
      <RoomsSection />
      <FAQSection />
    </main>
  );
}

export default App;
