import { NextResponse } from "next/server"
import axios from "axios"

const clientId = process.env.PAYPAL_CLIENT_ID
const clientSecret = process.env.PAYPAL_CLIENT_SECRET
const baseURL = "https://api-m.sandbox.paypal.com" // Use 'https://api-m.paypal.com' for live

const getAccessToken = async () => {
  const response = await axios({
    url: `${baseURL}/v1/oauth2/token`,
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
      username: clientId!,
      password: clientSecret!,
    },
    params: {
      grant_type: "client_credentials",
    },
  })
  return response.data.access_token
}

export async function POST() {
  try {
    const accessToken = await getAccessToken()
    const response = await axios({
      url: `${baseURL}/v2/checkout/orders`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "100.00", // Set the order amount here
            },
          },
        ],
      },
    })
    return NextResponse.json(response.data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
