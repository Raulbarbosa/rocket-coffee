import axios from "axios";

export async function getAddress(zip: string) {
  try {
    const addressFound = await axios.get(`https://viacep.com.br/ws/${zip}/json/`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });
    if (addressFound) {
      return addressFound
    }
  }
  catch (error) {
    console.log(error);

  }
}