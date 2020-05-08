import React, { useState } from 'react';
import './Tabs.css';

const Input = props => {
    const {post, setPost} = props
    const [newMessageTab, setNewMessageTab] = useState("");
    const [newMessage, setNewMessage] = useState("");
    const [messageError, setMessageError] = useState("");
    const [tabError, setTabError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(newMessageTab.length !== 0){
            let submitMessage = [...post, {tab: newMessageTab, Content: newMessage}]
            setPost(submitMessage);
            setNewMessage("");
            setNewMessageTab("");
        }
        else{setTabError("Please input a tab name")}
    }

    const handleNewMessage = (e) =>{
        setNewMessage(e.target.value);
    }

    const handleNewMessageTab = (e) =>{
        setNewMessageTab(e.target.value);
        if(e.target.value.length < 1){
            setTabError("Please input a tab name")
        }
        else{
            setTabError("");
        }
        console.log(tabError)
    }
    return(
        <div className="messagebox">
            <h1>{tabError}</h1>
            <h1>{messageError}</h1>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Tab Name: </label>
                    <input type="text" value={newMessageTab} onChange={handleNewMessageTab}></input>
                </div>
                <div>
                    <label>Message: </label>
                    <input type="text" value={newMessage} onChange={handleNewMessage}></input>
                </div>
                <button>Submit a Message</button>
            </form>
        </div>
    )
}

export default Input;