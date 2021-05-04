import React from 'react'
import styled from 'styled-components'
const SidebarOption = ({ Icon, title, addChannelOption }) => {
    const addChannel = () => {

    }
    const selectChannel = () => {
        
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
const SidebarOptionChannel = styled.div`

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