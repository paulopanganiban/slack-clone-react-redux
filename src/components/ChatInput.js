import React from 'react'
import { Input, FormControl, InputLabel, FormHelperText, Button } from '@material-ui/core';
import styled from 'styled-components'
import { useRef } from 'react';
import { auth, db } from '../firebase';
import firebase from 'firebase'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
const ChatInput = ({ channelName, channelId, chatRef }) => {
    // pop user in
    const [user] = useAuthState(auth);


    // kesa mag usestate e.target.value
    //   <Input placeholder={`Message room`} ref={inputRef} aria-describedby="my-helper-text" />
    const inputRef = useRef(null);
    const [input, setInput] = useState('')
    const sendMessage = (e) => {
        e.preventDefault()
        // prevent bugs
        if (!channelId) {
            return false;
        }
        console.log(channelId)
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            // server timestamp
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            userImage: user.photoURL,
        })
        chatRef.current.scrollIntoView({
            behavior: 'smooth',
        })
        setInput('')
    }
    return (
        <ChatInputContainer>
            <form>
                <FormControl>
                    <Input
                        placeholder={`Message #${channelName}`}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <Button onClick={sendMessage} hidden type="SUBMIT">SEND</Button>
                </FormControl>
            </form>

        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
border-radius: 20px;
> form > .MuiFormControl-root {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
> form > .MuiFormControl-root > .MuiInputBase-root {
    position: fixed;
    bottom: 30px;
    width: 70%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
    margin-right: auto;
}
> form > .MuiFormControl-root > .MuiButtonBase-root {
    display: none;
}
`
