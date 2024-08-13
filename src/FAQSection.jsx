function FAQSection() {
  return (
    <section className="mb-4 grid w-full">
      <h2 className="mb-4 text-2xl">FAQ</h2>
      <div className="m-6">
        <FAQCollapse />
      </div>
    </section>
  );
}

function FAQCollapse() {
  return (
    <div className="join join-vertical w-full">
      <div className="collapse join-item collapse-arrow border border-base-300">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse join-item collapse-arrow border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse join-item collapse-arrow border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
