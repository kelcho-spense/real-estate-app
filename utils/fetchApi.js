import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'
export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '53a6b71583msh6b8b98cb11f4c3ep163d80jsn12b04f34c4c6'
          }
    });
    return data;
}