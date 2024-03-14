import axios from "axios";

export async function getAddress(zip: string) {
  const userAddressData = {
    city: "",
    state: ""
  }
  try {
    const addressFound = await axios.get(`https://viacep.com.br/ws/${zip}/json/`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    });
    if (addressFound) {
      userAddressData.city = addressFound.data.localidade;
      userAddressData.state = addressFound.data.uf;

      localStorage.setItem("userAdressData", JSON.stringify(userAddressData))

      return addressFound
    }
  }
  catch (error) {
    console.log(error);

  }
}