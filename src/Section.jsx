export default function Section({ heading, subheading, imgSrc, children }) {
  return (
    <section className="grid w-full">
      <img src={imgSrc} />
      <div className="p-8 text-center">
        <h2 className="text-2xl mb-4">{heading}</h2>
        <p>{subheading}</p>
        {children}
      </div>
    </section>
  );
}
