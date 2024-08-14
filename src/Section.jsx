export default function Section({ heading, imgSrc, children }) {
  return (
    <section className="grid w-full scroll-mt-6">
      <img src={imgSrc} />
      <div className="px-6 py-8">
        <h2 className="mb-4 text-2xl">{heading}</h2>
        {children}
      </div>
    </section>
  );
}
