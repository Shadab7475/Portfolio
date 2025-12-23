// // BackgroundDots

// import { useEffect, useRef, useState } from "react";
// import TRUNK from "vanta/dist/vanta.trunk.min";
// import * as THREE from "three";

// const BackgroundDots = () => {
//   const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         TRUNK({
//           el: vantaRef.current,
//           THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           spacing: 0.5,
//           chaos: 1.5,
//         })
//       );
//     }

//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);
  

//   return (
//     <div
//       ref={vantaRef}
//       className="w-full h-screen"
//     >
//       {/* 👇 Tumhara content yahan aayega */}
//     </div>
//   );
// };

// export default BackgroundDots;


