// "use client"

// import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
// import axios from "axios"

// const PayPalButton = () => {
//   const createOrder = async () => {
//     const response = await axios.post("/api/paypal/create-order")
//     return response.data.id // Return the order ID
//   }

//   const onApprove = async (data: any) => {
//     const response = await axios.post("/api/paypal/capture-order", {
//       orderID: data.orderID,
//     })
//     console.log("Order captured successfully:", response.data)
//   }

//   return (
//     <PayPalScriptProvider
//       options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID! }}>
//       <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
//     </PayPalScriptProvider>
//   )
// }

// export default PayPalButton
