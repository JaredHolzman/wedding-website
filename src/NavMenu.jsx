function HamburgerIcon() {
  return (
    <svg
      className="swap-off fill-current"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512"
    >
      <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="swap-on fill-current"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 512 512"
    >
      <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
    </svg>
  );
}

export default function NavMenu() {
  return (
    <div className="dropdown dropdown-end dropdown-bottom absolute right-4 top-4 z-10">
      <div tabIndex={0} role="button" className="btn btn-square btn-neutral">
        <HamburgerIcon />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
      >
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#details">Event Details</a>
        </li>
        <li>
          <a href="#booking">Accommodations</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </div>
  );
}
