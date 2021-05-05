import React from 'react'
import styled from 'styled-components'
const Chat = () => {
    return (
        <ChatContainer>
            <h1>chat</h1>
            <Header>
                <HeaderLeft>

                </HeaderLeft>
                <HeaderRight>

                </HeaderRight>
            </Header>
        </ChatContainer>
    )
}

export default Chat
const HeaderRight = styled.div`

`

const HeaderLeft = styled.div`

`
const Header = styled.div`

`
const ChatContainer = styled.div`
flex: 0.7;
flex-grow: 1;
overflow-y: scroll;
margin-top: 60px;
`