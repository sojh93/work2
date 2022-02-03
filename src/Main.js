import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineAddCircle } from "react-icons/md";


const style = { color: "black", fontSize: "3.5em", right: "5%", bottom: "10px", position: "fixed" }



const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
border: 1px dotted #ddd;
`
const Card = styled.div`
  margin: 50px 100px;
  border: 1px solid black;
  height: 170px;
  width: 250px;
  display: block;
  background-color: #aliceblue;
`
const Ex = styled.h3`
  font-weight: bold;
  font-size: 13px;
`
const UL = styled.ul`
  font-size: 10px;
`

export const Main = () => {



  return (
    <>
      <Title>나만의 단어장</Title>
      <Line />
      <Card>
        <Ex>단어</Ex>
        <UL></UL>
        <Ex>설명</Ex>
        <UL></UL>
        <Ex>예시</Ex>
        <UL></UL>
      </Card>
      <Link to="/detail">
        <MdOutlineAddCircle style={style} />
      </Link>
      
    </>
  )
}