import { React, useEffect, useState } from "react";
import styled from "styled-components"
import axios from "axios";


function AdminMenubarPage(props) {

    // useEffect(() =>{
    //     props.getMenuState("checkUser");
    // }, [])
    
    const onclickMenuButton1 = async () =>{
        await props.getMenuState("checkUser");
        await axios
            .get("/api/adminUserGet")
            .then((res) => {console.log(res.data)})
            .catch(function (error) {});
    }

    const onclickMenuButton2 = async () =>{
        await props.getMenuState("courseList");
        await axios
            .get("/api/adminSubjectGet")
            .then((res) => {console.log(res.data)})
            .catch(function (error) {});


    }

    const onclickMenuButton3 = async() =>{
        await props.getMenuState("checkRegister");
        await axios
            .get("/api/adminUserSubjectGet")
            .then((res) => {console.log(res.data)})
            .catch(function (error) {});
    }

    function onclickMenuButton4(){
        props.getMenuState("Control");
    }

    return (
        <Wrapper>
            <MenubarNav>
                <MenubarUl>
                    <MenubarLi>
                        <MenuButtonA onClick={onclickMenuButton1}>
                            전체사용자
                        </MenuButtonA>
                    </MenubarLi>
                    <MenubarLi>
                        <MenuButtonA onClick={onclickMenuButton2}>
                            전체과목
                        </MenuButtonA>
                    </MenubarLi>
                    <MenubarLi>
                        <MenuButtonA onClick={onclickMenuButton3}>
                            수강신청현황
                        </MenuButtonA>
                    </MenubarLi>
                    <MenubarLi>
                        <MenuButtonA onClick={onclickMenuButton4}>
                            서버관리
                        </MenuButtonA>
                    </MenubarLi>
                </MenubarUl>
            </MenubarNav>
        </Wrapper>
    );
}
export default AdminMenubarPage;

const Wrapper = styled.div`
    width: 100%;
    height: 100px;
    border-bottom: 1px solid black;
`

const MenubarNav = styled.nav`
    
`

const MenubarUl = styled.ul`
    
`

const MenubarLi = styled.li`
    list-style: none;
    float: left;
    display: block;
    width: 10%;
    height: 100px;
    border: 1px solid black;
    text-align: center;
    box-sizing: border-box;
`
const MenuButtonA = styled.a`
    display: block;
    width : 100%;
    height: 100%;
    background-color: #ecd1ae79;
    text-decoration: none;
    line-height: 90px;
    &:hover{
        background-color: white;
        cursor: pointer;
    }
`

