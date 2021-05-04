import React from 'react'
import styled from 'styled-components'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
const SidebarOption = ({ Icon, title, addChannelOption, id }) => {

    const [channels, loading, error] = useCollection(db.collection('rooms'))

    const addChannel = () => {
        const channelName = prompt('Please enter the channel name')
        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }
    const selectChannel = () => {
        // use redux
        // push id 
    }
    return (
        // if my add channel as prop, trigger addChannel function, else select
        <SideBarOptionContainer 
        onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon fontSize='small' style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )
            }
        </SideBarOptionContainer>
    )
}

export default SidebarOption
const SidebarOptionChannel = styled.h3`
padding: 10px 0;
font-weight: 300;
`

const SideBarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

:hover {
    opacity: 0.8;
}
> h3 {
    font-weight: 500;
}
> h3 > span {
    padding: 15px;
}
`