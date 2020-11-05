import React, { useEffect } from 'react'
import CustomButton from "../custom/CustomButton";
import { PRIVATE_WHITE_COLOR, publicStyles } from "../types/publicStyles";
import CustomLabel from "../custom/CustomLabel";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import CustomModal from '../custom/CustomModal'
import Cookies from 'js-cookie'


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #6875dd;
`

const BlackOpacity = styled.div`
  width: 1500;
  height: 100vh;
  background-color: #6875dd;
  /* padding: 21pt; */
  
`

const logoImage = {
    width: '550px',
    height: '500px',

}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 97%;
  position: absolute;
  top: 40px;
`

interface Props {
    type: 'index' | 'login'
}

const LoginComponent: React.FunctionComponent<Props> = ({ type }) => {

    const router = useRouter()
    const isLogin = React.useCallback(() => {
        router.push('/authorization/login')
    }, [])
    const Header = () => (
        <HeaderContainer>
            {type == 'index' && <CustomButton text={'시작하기'} onClick={isLogin} fontColor={'white'} fontSize={10} style={{ background: '#A2AAEA' }} />}
        </HeaderContainer>
    )

    const Content = () => (
        <div style={{
            ...publicStyles.startCenter,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',


        }}>
            {
                type == 'index' ?
                    <div style={{ textAlign: 'center', marginTop: -200 }}>
                        <img src={'/images/logo.png'} alt='logo' style={logoImage} />
                        <div style={{ marginTop: -250 }}>
                            <CustomLabel text={'과외 관리의 마침표'} fontSize={23} fontWeight={'bold'} fontType={'pt'} color={PRIVATE_WHITE_COLOR} />
                        </div>
                    </div>
                    : <CustomModal type={'login'} />

            }
        </div>
    )

    return (<div style={{ minWidth: 1500 }}><Container>
        <BlackOpacity>
            {Header()}
            {Content()}
        </BlackOpacity>
    </Container></div>)
}
export default LoginComponent
