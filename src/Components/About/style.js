import styled from "styled-components"



export const Creative = styled.div`
height: 500px;
background: url('../images/creative/about-bg.jpg');
background-size: cover;
background-position: center;
background-attachment: fixed
@media (max-width:991px) {
  height: auto;
}
`

export const CreativeInfo = styled.div`
padding-top: 70px;
width: 50%;
float:right;
@media (max-width:991px) {
  width: 100%;
  padding-top: 10px;
  float: none;
}
`
export const CreativeInfoTitle = styled.h2`
  font-weight: bold;
  font-size: 50px
  `


export const CreativeInfoSpan = styled.span`font-weight: normal`

export const CreativeInfoDir = styled.h4`
  font-size: 40px;
  color: #eb5424;
  margin: 20px 0px;
  @media (max-width:991px) {
    font-size: 30px;
  }

  `
export const CreativeInfDesc = styled.p`
color: #000;
margin-bottom: 15px;
line-height: 1.7;
`

export const CreativeInfDescA = styled.a`text-decoration: none
`





