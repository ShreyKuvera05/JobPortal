// /* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars

// import React, {
//     createContext,
//     useReducer,
//     useContext,
//     useState,
//     useEffect,
//   } from "react";
//   import { encryptCBC, decryptCBC } from "./CryptoUtils";
//   import CryptoJS from "crypto-js";
  
//   const AuthContext = createContext();
  
//   export const useAuthContext = () => {
//     return useContext(AuthContext);
//   };
  
//   const initialState = {
//     userData: null,
//     decryptedData: {},
//     loading: false,
//   };
  
//   const authReducer = (state, action) => {
//     switch (action.type) {
//       case "LOGIN_SUCCESS":
//         return {
//           ...state,
//           userData: action.payload,
//           loading: false,
//         };
//       case "LOGOUT":
//         return {
//           ...state,
//           userData: null,
//         };
//       case "SET_LOADING":
//         return {
//           ...state,
//           loading: action.payload,
//         };
//       case "SET_DECRYPTED_DATA":
//         return {
//           ...state,
//           decryptedData: action.payload,
//         };
//       case "SET_CUSTOMER_ID":
//         return {
//           ...state,
//           customerId: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
//   const SESSION_STORAGE_KEY = "authData";
//   export const AuthProvider = ({ children }) => {
//     const secretKey = process.env.REACT_APP_SECRET_KEY;
//     const url = process.env.REACT_APP_PRO_BASEURL;
//     const port = process.env.REACT_APP_PRO_PORT;
//     const [key] = useState(CryptoJS.enc.Utf8.parse(secretKey));
//     const [iv] = useState(CryptoJS.lib.WordArray.create());
  
//     const getEncData = JSON.parse(sessionStorage.getItem("encryptedData"));
  
//     const storedData = getEncData
//       ? JSON.parse(decryptCBC(getEncData, key, iv))
//       : null;
//     const [decryptionComplete, setDecryptionComplete] = useState(false);
  
//     // console.log(url, 'in context page')
  
//     // console.log(port, 'in context page')
  
//     const [state, dispatch] = useReducer(authReducer, {
//       ...initialState,
//       customerId: sessionStorage.getItem("customerId") || null,
//       decryptedData: storedData || initialState.decryptedData,
//     });
  
//     useEffect(() => {
//       if (getEncData) {
//         dispatch({ type: "SET_DECRYPTED_DATA", payload: storedData });
//         setDecryptionComplete(true);
//       }
//     }, [getEncData]);
  
//     const loginSuccess = (userData) => {
//       dispatch({ type: "LOGIN_SUCCESS", payload: userData });
//     };
  
//     const logout = () => {
//       dispatch({ type: "LOGOUT" });
//     };
  
//     const setLoading = (loading) => {
//       dispatch({ type: "SET_LOADING", payload: loading });
//     };
  
//     const setDecryptData = (decryptedData) => {
//       dispatch({ type: "SET_DECRYPTED_DATA", payload: decryptedData });
//       sessionStorage.setItem(
//         SESSION_STORAGE_KEY,
//         encryptCBC(JSON.stringify(decryptedData), key, iv)
//       );
//     };
  
//     const setCustomerId = (customerId) => {
//       dispatch({ type: "SET_CUSTOMER_ID", payload: customerId });
//       sessionStorage.setItem("customerId", customerId);
//     };
//     //  const setCustomerId = (customerId) => {
//     //   dispatch({ type: 'SET_CUSTOMER_ID', payload: customerId });
//     //  }
  
//     const contextValue = {
//       state,
//       url,
//       port,
//       actions: {
//         loginSuccess,
//         logout,
//         setLoading,
//         setDecryptData,
//         setCustomerId,
//       },
//     };
  
//     console.table(contextValue, "contextValue auth");
//     return (
//       <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
//     );
//   };
  