import React,{ useState, useRef } from 'react';
import styled from 'styled-commponents';

//UI
import Button from '';

const Wrapper = styled.div`

`;

const Img = styled.img`
`;

const InputID = styled.input`
`;

const InputPW = styled.input`
`;

const P = styled.p`
`;

function LoginPage(props){
    const[isLogin, setIsLogin] = useState(false);

    return (
        <Wrapper>
            <Img />
            <InputID type="id" name="id" p  />
            <InputPW />
            <Button />          
        </Wrapper>
    );
}

export default LoginPage;