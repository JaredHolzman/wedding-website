import RoomsSection from "./RoomsSection";
import BookingSection from "./BookingSection";
import LandingSection from "./LandingSection";
import DetailsSection from "./DetailsSection";
import FAQSection from "./FAQSection";

import heart from "./assets/heart.svg";

function NavMenu() {
  return (
    <details className="dropdown absolute right-4 top-4 z-10">
      <summary className="btn btn-circle swap swap-rotate">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        {/* hamburger icon */}
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        {/* close icon */}
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </details>
  );
}

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
