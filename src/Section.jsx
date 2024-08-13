export default function Section({ heading, imgSrc, children }) {
  return (
    <section className="mb-4 grid w-full">
      <img src={imgSrc} />
      <div className="mx-6 my-8">
        <h2 className="mb-4 text-2xl">{heading}</h2>
        {children}
      </div>
    </section>
  );
}
