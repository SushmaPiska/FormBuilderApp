// import React, { createContext, useState, useEffect } from "react";

// export const userContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [addresses, setAddresses] = useState([]);
//   const [isAddressChanged, setIsAddressChanged] = useState(false);

//   const fetchAddresses = async () => {
//     try {
//       const res = await getAddresses();
      
//       setAddresses(res);
//     } catch (err) {
//       console.error("Error fetching addresses:", err);
//     }
//   };

//   useEffect(() => {
//     fetchAddresses()
//     .finally(()=>setIsAddressChanged(false))
    
//   }, [isAddressChanged]); 

//   return (
//     <AddressContext.Provider value={{ addresses, setIsAddressChanged }}>
//       {children}
//     </AddressContext.Provider>
//   );
// };

