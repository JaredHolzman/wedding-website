import Section from "./Section";

const reservations = [
  { name: "CHRISTOPHER DAVID ABREU", number: "803834" },
  { name: "LICHEN STEPHANIE YANG", number: "780887" },
  { name: "CHEN YANG", number: "794661" },
  { name: "JOANNA LICHUENG YANG ABREU", number: "728636" },
  { name: "SETH HOLZMAN", number: "755689" },
  { name: "ANDRES GUILLERMO ABREU", number: "863135" },
  { name: "SIMON L HOLZMAN", number: "740072" },
  { name: "JENNY CHAU", number: "796750" },
  { name: "TAYLOR MULLENIX", number: "795319" },
  { name: "AMY L BOULTER", number: "838484" },
  { name: "GUILLERMO URBANO ABREU", number: "775947" },
  { name: "KATHERINE MARIE EVANS", number: "759158" },
  { name: "MICHAEL YANG ABREU", number: "806532" },
  { name: "NANCY S YANG", number: "798274" },
  { name: "LIA MICHELLE YANG", number: "781404" },
  { name: "NIEL ESARY", number: "769590" },
  { name: "KEN KWAN INGAI", number: "766515" },
  { name: "GILBERTO DAVILA", number: "778774" },
  { name: "JOSEPH E HOLZMAN", number: "754908" },
  { name: "YOUNG KWAN YANG", number: "737809" },
];

function HotelCheckInSection() {
  return (
    <section
      id="details"
      className="grid w-full scroll-mt-6 justify-center bg-base-300 py-10 md:py-32"
    >
      <h2 className="text-4xl md:text-7xl ">Hotel Early Check-In</h2>
      <div className="mx-6 max-w-prose space-y-4 py-12 text-xl md:space-y-12 md:text-4xl">
        <p>
          To expedite your arrival, please complete the online check-in process
          before your stay. Follow these steps:
        </p>
        <ol className="list-decimal pl-6 text-justify">
          <li className="mb-4">
            Visit:
            <br />
            <a
              href="https://checkin.civitfun.com/chain/majestic"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              https://checkin.civitfun.com/chain/majestic
            </a>
          </li>
          <li className="mb-4">Enter your reservation number (listed below)</li>
          <li className="mb-4">Complete the required information</li>
          <li>Submit the form</li>
        </ol>
        <table className="table w-full text-xl md:text-2xl">
          <thead>
            <tr>
              <th className="text-xl md:text-3xl">Guest Name</th>
              <th className="text-xl md:text-3xl">Reservation Number</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.name}</td>
                <td>{reservation.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// function CheckInSection() {
//   return (
//     <Section id="check-in" title="Hotel Check-In">
//       <div className="mx-auto max-w-4xl px-4">
//         <h2 className="text-4xl md:text-7xl ">Hotel Early Check-In</h2>
//         <div className="mx-6 max-w-prose space-y-4 py-12 text-xl md:space-y-12 md:text-4xl">
//           <p>
//             To expedite your arrival, please complete the online check-in
//             process before your stay. Follow these steps:
//           </p>
//           <ol className="list-decimal pl-6 text-justify">
//             <li className="mb-4">
//               Visit{" "}
//               <a
//                 href="https://checkin.civitfun.com/chain/majestic"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="link"
//               >
//                 https://checkin.civitfun.com/chain/majestic
//               </a>
//             </li>
//             <li className="mb-4">
//               Enter your reservation number (listed below)
//             </li>
//             <li className="mb-4">Complete the required information</li>
//             <li>Submit the form</li>
//           </ol>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="table w-full text-xl md:text-2xl">
//             <thead>
//               <tr>
//                 <th className="text-xl md:text-3xl">Guest Name*</th>
//                 <th className="text-xl md:text-3xl">Reservation Number</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reservations.map((reservation, index) => (
//                 <tr key={index}>
//                   <td>{reservation.name}</td>
//                   <td>{reservation.number}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Section>
//   );
// }

export default HotelCheckInSection;
