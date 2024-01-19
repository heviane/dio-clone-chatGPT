const openai = require("../config/openai")
const inputPrompt = require("../models/input-prompt")

console.log('controller')

module.exports = {

	async sendText(req, res){

        console.log('sendText...')
		const openaiAPI = openai.configuration()
		const inputModel = new inputPrompt(req.body)

		try {
			const response = await openaiAPI.createCompletion(
				openai.textCompletion(inputModel)
			)

			return res.status(200).json({
				sucess: true,
				data: response.data.choices[0].text
			})

		} catch (error) {

			return res.status(400).json({
				sucess: false,
				error: error.response
				? error.response.data
				: 'There was an inssue on the server'
			})
		}
	}
}

// module.exports = {

//     async sendText(req, res){

//         console.log('async function sendText') // *** não está entrando aqui ***

//         const openaiAPI = openai.configuration()
//         const inputModel = new inputPrompt(req.body)

//         try{
//             console.log('inputModel'+inputModel)
//             const response = await openaiAPI.createCompletion(
//                 openai.textCompletion(inputModel)
//                 // openai.textCompletion("hello world em python")
//             )
//             return res.status(200).json({
//                 sucess: true,
//                 data: response.data.choices[0].text
//             })
//         } catch (error){
//             return res.status(400).json({
//                 sucess: false, 
//                 error: error.response 
//                 ? error.response.data
//                 : "There was an inssue on the server"
//             })
//         }
//     }
// }

console.log('controller...end')