import React from 'react'
import styled from "@emotion/styled";
import Cookies from 'js-cookie'
import CustomLabel from '../custom/CustomLabel'
import CustomButton from '../custom/CustomButton'
import { loginForm } from '../types/index'
import { publicStyles } from '../types/publicStyles'
import LoginContext from "../context/LoginContext"
import API_LOGIN from "../api/Account/AccountLogin";
import axios from 'axios'
const InputLogin = styled.input(() => ({
    /*  boxShadow: '2px 3px 2px 0px #00000029', */
    width: '372px',
    borderRadius: 8,
    height: 54,
    border: 0,
    padding: '0 20px',
    fontSize: 16,
    background: '#F0F0F0'
}))
const PInput = styled.p(() => ({
    padding: 0,
    margin: 3,
}))


const LoginContainer: React.FunctionComponent = () => {
    const [logins, setLogins] = React.useState<loginForm>({
        email: '',
        password: ''
    });
    const [errors, setErrors] = React.useState<loginForm>({
        email: '',
        password: ''
    });
    const loginContext = React.useContext(LoginContext);

    const Header = () => (
        <div>
            <CustomLabel
                fontSize={20}
                fontType={'px'}
                text={'시작하기'}
                fontWeight={'bold'}
                type={'center'}
                style={{ marginBottom: 7 }}
            />
            <CustomLabel
                fontSize={14}
                fontType={'px'}
                text={'관리자 전용페이지 입니다!. 관리자 계정으로 로그인해주세요.'}
                type={'center'}
                style={{ marginTop: 0, fontSize: 14, marginBottom: 20 }}
            />
        </div>
    )
    const Content = () => (
        <div>
            <PInput>이메일 주소</PInput>
            <InputLogin style={{ marginBottom: 20 }} onChange={(e) => setLogins({ ...logins, email: e.target.value })} value={logins.email} type='email' />

            <PInput>비밀번호</PInput>
            <InputLogin onChange={(e) => setLogins({ ...logins, password: e.target.value })} value={logins.password} type="password" />

            <div style={{ ...publicStyles.startCenter, marginTop: '24pt' }}>
                <CustomButton text={'로그인'} style={{ width: '80pt', height: '35pt', background: '#6875dd' }} onClick={login} background={false} fontColor={'white'} />
            </div>
        </div>
    )
    // { //console.log('ads', logins) }

    const Footer = () => (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
        </div>
    )

    const userValidationCheck = () => {
        const { email, password } = logins
        const errorCatch: loginForm = {
            email: '',
            password: ''
        };
        let getError = false
        if (email === '') {
            getError = true
        }

        if (password === '') {
            getError = true
        }

        setErrors({ ...errors, ...errorCatch })
        return getError;
    }

    const login = async () => {
        try {
            const error = await userValidationCheck()
            if (error) {
                alert('아이디나 비밀번호를 입력해주세요')
            }
            const response = await API_LOGIN(logins)
            //@ts-ignore
            const data: any = response.data
            console.log('@res : ', data)
            //@ts-ignore
            if (response.status === 200) {
                if (data.status === 200) {
                    alert('로그인 성공')
                    // Cookies.set('usertoken', data.data.token)
                    // Cookies.set('useremail', logins.email)
                }
            } else {
                alert('로그인이 실패하였습니다.')
            }
        } catch (error) {
            alert('서버 에러')
        }
    }

    return (
        <div style={{ zIndex: 50 }}>
            {Header()}
            {Content()}
            {Footer()}
        </div>
    )

}
export default LoginContainer