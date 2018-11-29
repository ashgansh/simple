// we use axios to make api calls but you can use anything
import axios from 'axios'
// the request-signer api
const SIGNER_URL = process.env.SIGNER || 'https://baguette-signer.request.network/api/sign-request';
const API_KEY = process.env.SECRET;
const PAYMENT_ADDRESS = '0x474467F3fac841b5C37B399B6D410B2a3EBC9E41'

const getOrderInfo = () => {
  return {
    // for a list of available currency check this document
    currency : 'ETH',
    paymentAddress : PAYMENT_ADDRESS,
    // check the appropriate unit types on the following link ->
    expectedAmount : '10000000000000000000',
    data: { description: 'request-signer signed request' },
  }
}

export async function signRequest() {
  // you need get the necessary information to sign
  const requestInfo = getOrderInfo();
  // pass in your API_KEY to be able to sign requests
  const response = await axios.post(SIGNER_URL, requestInfo, {headers: { authorization: `${API_KEY}` }})
  return response.data;
}
