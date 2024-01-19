import axios from 'axios';
const URL_API = "http://localhost:5555/api/prompt";

// async function always receives message (from the user) according to the model
export const makeRequest = async(message) => {

    console.log('message: ' + message);
    const {data} = await axios.post(URL_API, message);
    console.log('data: ' + data);
    return data

    // const {data} = await axios.post(URL_API, message)
    // .then(response => {
    //   // Lógica para manipular uma resposta bem-sucedida
    //   console.log('OK');
    //   return data;
    // })
    // .catch(error => {
    //   if (error.response.status === 404) {
    //     console.error('Recurso não encontrado');
    //   } else {
    //     console.error('Erro inesperado:', error.message);
    //   }
    // });
} 
