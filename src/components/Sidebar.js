import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const Sidebar = () => {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>Olo Fam HQ</h2>
                    <h3> <FiberManualRecordIcon/> Paulo Panganiban</h3>
                </SidebarInfo>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`

`
const SidebarHeader = styled.div`

`
const SidebarInfo = styled.div`

`