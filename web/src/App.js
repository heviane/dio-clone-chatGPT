/* Hooks React
    Control the state of two things:
    - Message log.
    - User input.
*/
import {useState} from 'react'; 

import './styles/App.css';
import './styles/reset.css';
import {makeRequest} from './api/api';
import {SideMenu} from './components/SideMenu/SideMenu';
import {ChatMessage} from './components/ChatMessage/ChatMessage'; 

function App() {

  const [input, setInput] = useState("")
  const [chatLog, setChatLog ] = useState([{user:"gpt", message:"Como posso te ajudar hoje?"}])

  async function handleSubmit(e) {
    e.preventDefault();

    // return in a single line, with line break character (\n)
    let response = await makeRequest({prompt: input})

    // format with line wrapping and inclusion in a paragraph
    response = response.data.split('\n')
    .map(line => <p>{line}</p>);

    setChatLog(
      // argument/parameter vector
      [
        // spread operator
        ...chatLog, 
        // Common user object (What the user writes)
        {
          user: 'me', 
          message: `${input}`
        },
        // gpt user object (gpt's answer)
        {
          user: 'gpt', 
          message: response
        }
      ]
    )

    setInput("")
  }

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className="chatbox"> {/* section => div */}
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <ChatMessage
              Key={index}
              message={message}
              />
          ))}
        </div>
        <div className="chat-input-holder">
            <form onSubmit={handleSubmit}>
              <input
                  rows='1'
                  className='chat-input-textarea'
                  value={input}
                  onChange={e =>setInput(e.target.value)}>
                </input>
            </form>
        </div>
      </section>
    </div>
  );
}

export default App;
