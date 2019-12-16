// import React from 'react';

// const PlantCard = props => {
//   // array of dates by plant
//   // console.log(props.obj);

//   // for (let i = 0; i < props.obj.dates.length; i++) {
//   //   const element = props.obj.dates[i];
//   //   newArr.push(element);
//   // }

//   return (
//     <div>
//       <h3>{props.obj.name}</h3>
//       {/* something isn't right here...why is map returning a string of the entire array? */}
//       {props.obj.dates.map((date, i) => (
//         <div key={i}>
//           <ul>{date}</ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PlantCard;

// {
//   /* <div>
//         {plantArr.map(({ name, dates }, index) => {
//           return (
//             // console.log('index key', index); <--- key is unique, so another factor must be at play >> @self investigate when you have time

//             <div key={index}>
//               {/* <PlantCard obj={plant} key={index} /> */
// }
// // <div>
// //   <h1>{name}</h1>
// {
//   /* {dates.map((date, j) => {
//                   return (
//                     <ul>
//                       <li>{date}</li>
//                     </ul>
//                   );
//                   // console.log('date', date[j])
//                 })} */
// }
// {
//   /* {plantArr.dates.map((value, j) => {
//                   return <li key={j}>{value}</li>;
//                 })}
//               </div>
//             </div>
//           );
//         })}
//         ;
//       </div> */
// }
