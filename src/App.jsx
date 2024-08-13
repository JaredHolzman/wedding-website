import RoomsSection from "./RoomsSection";
import BookingSection from "./BookingSection";
import LandingSection from "./LandingSection";
import LocationSection from "./LocationSection";

function App() {
  return (
    <main className="w-full text-center">
      <LandingSection />
      <LocationSection />
      <BookingSection />
      <RoomsSection />
    </main>
  );
}

export default App;
