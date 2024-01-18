import axios from 'axios';
const URL_API = "http://localhost:5555/api/prompt";

// async function always receives message (from the user) according to the model
export const makeRequest = async(message) => {
    // destructuring the "data" variable
    const {data} = await axios.post(URL_API, message)
    return data
} 