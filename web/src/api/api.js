import axios from 'axios';
const URL_API = "http://localhost:5555/api/prompt";

// function assincrona que sempre recebe uma mensagem (enviada pelo usuário) de acordo com o model
export const makeRequest = async(message) => {
    // data (via desestruturação) que vem de dentro do axios
    const {data} = await axios.post(URL_API, message)
    return data
} 