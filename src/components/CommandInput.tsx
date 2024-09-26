import  { useState } from 'react';

const CommandInput = () => {
    const [command, setCommand] = useState<string>('');
    const [response, setResponse] = useState<string>('');
    const generatedResponse = 'Thank you for the opportunity! If you have any more questions or if theres anything else I can help you with, feel free to ask.'

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setCommand(event.target.value);
    };

    const handleGenerateClick = () => {
        setResponse(generatedResponse)
    };

    
    const handleInsertClick =()=>{
        const messageInput = document.querySelector('.msg-form__contenteditable'); 
        if(messageInput){
            messageInput.innerHTML += `<p>${generatedResponse}</p>`;
        }
    }
    return (
        <div >
            {  !command && <div> 
                                <input
                                    type="text"
                                    value={command}
                                    onChange={handleInputChange}
                                    placeholder="Type your command..."
                                />
                                <button onClick={handleGenerateClick} className="generate-btn">
                                    Generate
                                </button>
                            </div>
            }
            {                
                response && <div>
                                <p>{command}</p>
                                <p>{response}</p>
                                <input
                                    type="text"
                                    className="input-class"
                                    value={command}
                                    onChange={handleInputChange}
                                    placeholder="Your Prompt"
                                />
                                <div>
                                    <button onClick={handleInsertClick} className="generate-btn">
                                        insert
                                    </button>
                                    <button className="generate-btn">
                                        regenerate
                                    </button>
                                </div>
                                
                            </div>
            }
        </div>
    );
};

export default CommandInput;
