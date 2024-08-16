function FAQSection() {
  return (
    <section
      id="faq"
      className="grid w-full scroll-mt-6 bg-primary pb-16 pt-10 text-primary-content md:pb-32 md:pt-20"
    >
      <h2 className="mb-8 text-4xl md:mb-16 md:text-7xl">FAQ</h2>
      <FAQCollapse />
    </section>
  );
}

function FAQCollapse() {
  const stateGovURL =
    "https://travel.state.gov/content/travel/en/international-travel/" +
    "International-Travel-Country-Information-Pages/DominicanRepublic.html";
  return (
    <div className="join join-vertical w-full rounded-none md:container md:mx-auto md:rounded-lg">
      <CollapseItem title={"When Should I RSVP by?"}>
        <p>
          Please{" "}
          <a
            className="link"
            href="https://withjoy.com/joanna-and-jared-jun-25/rsvp"
            target="_blank"
          >
            RSVP
          </a>{" "}
          by October 31st.
        </p>
      </CollapseItem>
      <CollapseItem title={"When Should I Arrive and How Long Should I Stay?"}>
        <p>
          The ceremony will take place in the evening on June 6th. You should
          try and arrive the day before so you can get settled into the resort
          stress-free. The number of nights you want to stay is up to you, but
          we anticipate that most guests will want to stay for 3 nights (arrive
          on Thursday, June 05 - depart on Sunday, June 08). We will be staying
          at the resort June 03 - June 08.
        </p>
      </CollapseItem>
      <CollapseItem title={"Which Airport Should I Fly Into?"}>
        <p>
          The Punta Cana International airport (
          <span className="font-bold">PUJ</span>) is just 15 minutes away from
          the resort. Make sure to fly into{" "}
          <span className="font-bold">PUJ</span> and NOT the Santo Domingo
          airport (SDQ) located near the capital, as it is several hours away
          from the resort.
        </p>
      </CollapseItem>
      <CollapseItem title={"How Do I Get to the Resort from the Airport?"}>
        <p>
          If you book your resort stay through the travel agency, you will be
          able to take a shuttle directly from the airport to the resort. Once
          you&apos;ve landed in PUJ and collected your bags, head to the Nexus
          booth located just outside the airport near the taxi/bus pickup zone.
        </p>
      </CollapseItem>
      <CollapseItem
        title={
          "What Are the Requirements for U.S. Citizens Traveling to the DR?"
        }
      >
        <p>
          You will need a Passport book a minimum validity of six months from
          your travel date. You do not need a tourist visa, but you do need to
          fill out an{" "}
          <a className="link" href="https://eticket.migracion.gob.do/">
            E-Ticket
          </a>{" "}
          (language option in top-right corner) prior to arrival. See{" "}
          <a className="link" href={stateGovURL}>
            travel.state.gov
          </a>{" "}
          for additional details.
        </p>
      </CollapseItem>
      <CollapseItem title={"How Did You Get so Lucky, Jared?"}>
        <p>Haven&apos;t got a clue, but if this is a dream, nobody pinch me!</p>
      </CollapseItem>
      <CollapseItem title={"Will Communicating in English Be an Issue?"}>
        <p>Nope, almost everyone at the resort speaks English.</p>
      </CollapseItem>
      <CollapseItem title={"What Should I Pack?"}>
        <p>
          {" "}
          You should bring sunglasses, hats, swimsuits, sandals, bug spray, and
          lots of sunscreen. Some resort restaurants have a dress-code, so make
          sure to pack some &quot;business-casual&quot; outfits as well.
        </p>
      </CollapseItem>
      <CollapseItem title={"What Temperatures Should I Expect?"}>
        <p>
          Expect it to be hot, around 76-88 Degrees. Make sure to drink plenty
          of water!
        </p>
      </CollapseItem>
      <CollapseItem title={"What Should I Wear to The Ceremony?"}>
        <p>
          The dress code will be beach semi-formal attire. The ceremony and
          reception will be held in an outdoor private terrace. We recommend
          attire that is both comfortable and stylish given the warm weather.
          For example:
        </p>
        <p className="mt-4">- Her: Sundresses, maxi dresses, jumpsuits</p>
        <p>- Him: Linen suits, dress shorts or pants with button up shirt</p>
      </CollapseItem>
      <CollapseItem title={"Is There a Registry?"}>
        <p>
          Instead of gifts, we would be truly honored if you could celebrate
          with us by raising a toast and creating lasting memories together.
          Your presence at our wedding is the most valuable gift we could ask
          for.
        </p>
      </CollapseItem>
    </div>
  );
}

function CollapseItem({ title, children }) {
  return (
    <div
      className={`collapse join-item collapse-arrow border
        border-accent-content/30 bg-accent/30`}
    >
      <input type="radio" name="accordion-item" />
      <div className="collapse-title text-2xl font-bold md:text-5xl">
        {title}
      </div>
      <div className="collapse-content max-w-prose place-self-center text-lg md:text-4xl">
        <div className="py-2 md:py-8">{children}</div>
      </div>
    </div>
  );
}

export default FAQSection;
