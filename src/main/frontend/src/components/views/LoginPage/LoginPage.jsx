import React,{ useState } from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    height:100%;
    width:100%;
    justify-content:center;
    align-items: center;

    backroud:#eee !important;
`;

const LogoImg = styled.img`
    width:5.7%;
    height: auto;
`;

const ButtonImg = styled.img`
    width:85%;
    height: auto;
    opacity:0.4;
`;

const Form = styled.form`
    max-width:20vm;
    padding:15px 30px 30px;
    margin:0 auto;
    background-color: #fff;
`;

const IDPWDiv = styled.div`
    display:flex;
    flex-direction: column;
    width:30vw;
    height:6vh;
    justify-content:center;
    align-items: center;
    margin-top:15px;
    margin-bottom:5px;
`;

const PWButtonDiv = styled.div`
    display:flex;
    flex-direction: row;
    width:12vw;
    height:auto;
`;

const InputID = styled.input`
    position: relative;
    font-size: 0.9rem;
    height: auto;
    width:12vw;
    padding: 12px;
    padding-left: 16px;
    border:1px solid rgba(0,0,0,0.1);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    @include box-sizing(border-box);
    &:focus {
    z-index: 2;
    }
    &::-webkit-input-placeholder{
        font-size: 0.9rem;
        color: rgba(0,0,0,0.3);
    }
`;

const InputPW = styled.input`
    position: relative;
    font-size: 0.9rem;
    height: auto;
    width:9.8vw;
    padding: 12px;
    padding-left: 16px;
    border:1px solid rgba(0,0,0,0.1);
    border-bottom-left-radius: 6px;
    @include box-sizing(border-box);
    &:focus {
    z-index: 2;
    }
    &::-webkit-input-placeholder{
        font-size: 0.9rem;
        color: rgba(0,0,0,0.3);
    }
`;

const Button = styled.button`
    position: relative;
    font-size: 16px;
    height: auto;
    width:2.2vw;
    padding-top:6px;
    border:1px solid rgba(0,0,0,0.1);
    border-bottom-right-radius: 6px;
    @include box-sizing(border-box);
    &:focus {
    z-index: 2;
    }
    &:hover{
        background:rgb(223, 223, 223,0.9);
    }
`;

const P = styled.p`
    padding:0;
    margin:0;
    margin-bottom:10px;
    font-size: 0.8rem;
`;

const Span = styled.span`
    color:#d32f2fcb;
    font-weight:600;
`;

function LoginPage(props){
    const[isLogin, setIsLogin] = useState(false);

    return (
        <Wrapper>
            <LogoImg src="assets/img/mayoUniversityLogo.png" alt="mayoUniversityLogo1"/>
            <Form>
                <IDPWDiv>
                    <InputID type="id" name="id" placeholder='ID'/>
                    <PWButtonDiv>
                        <InputPW type="password" name='pw' placeholder='Password' />
                        <Button type="submit"><ButtonImg src="assets/img/sign-in.png" alt="signIn"/></Button>
                    </PWButtonDiv>
                </IDPWDiv>
            </Form>
            <P>게스트로 로그인 하시려면 아이디와 비밀번호를 <Span>mayo</Span> 로 입력하세요.</P>        
        </Wrapper>
    );
}

export default LoginPage;