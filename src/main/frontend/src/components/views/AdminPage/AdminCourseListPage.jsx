import { React, useState } from "react";
import styled from "styled-components"
import axios from "axios";
import { useEffect } from "react";

function AdminCourseListPage() {


    const courseAxios = async() => {
        try{
            const response = await axios.get("/api/adminSubjectGet")
            console.log(response.data)
        }
        catch{
            
        }
    }


    return (
        <Wrapper>
            전체과목
        </Wrapper>
    );
}
export default AdminCourseListPage;

const Wrapper = styled.div`
    width: 100%;
    height: 820px;
    border-bottom: 1px solid black;
    box-sizing: border-box;
`

