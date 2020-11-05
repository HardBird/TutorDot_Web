import React from 'react'
import styled from '@emotion/styled'
import LoginContainer from '../containers/LoginContainer'

interface Props {
    type: 'login'
}
const Container = styled.div`
background: white;
border-radius: 8pt;
opacity: 1;
backdrop-filter: blur(23pt);
-webkit-backdrop-filter: blur(23pt);

box-sizing: border-box;
*{
  box-sizing: border-box;
}

width: 100%;

max-width: ${(props: any) =>
        props.type === 'login' ?
            '458px' :
            ''
    };
padding: 20pt 37pt 20pt 37pt;
`

const LogoImg = styled.img`
  width: 174px;
  position: fixed;
  top: -115px;
  left: 50%;
  transform: translateX(-50%);
`

const CustomModal: React.FunctionComponent<Props> = ({ type }) => {
    return (
        <Container type={type}>
            {
                // type === 'login' && <LogoImg src="/images/logo.png" />
            }
            {
                type === 'login' && <LoginContainer />
            }
        </Container>

    )
}
export default CustomModal