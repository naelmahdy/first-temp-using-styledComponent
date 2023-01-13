/*
    ===============================
       Profile + Skills Styles
    ===============================


*/
import styled from "styled-components"
export const ProfileSkills = styled.div`
padding: 50px 0;
overflow:hidden;
`
export const Profiles = styled.div`
width:50%;
float:left;
@media (max-width:768px) {
    width: 100%;
    float: none;
    margin-bottom: 20px;

}
`
export const ProfileList = styled.ul`
list-style: none;
`
export const ProfileItem = styled.li`
margin-bottom: 8px;
`
export const Span1 = styled.span`
display: inline-block;
width: 100px;
font-weight: bold;
`
export const Span2 = styled(Span1)`
font-weight: normal;
color: #eb5424;
`
export const Skills = styled.div`
width:50%;
    float:left;
    @media (max-width:768px) {
        width: 100%;
        float: none;
    }
`
export const SkillsDesc = styled.p`
font-size: 15px;
color: #888;
line-height: 1.5;
margin-bottom: 20px
`
export const SkillsBar = styled.div`
overflow:hidden;
padding:10px 0;
margin-bottom: 10px;
`
export const BarTitle = styled.span`float: left;`
export const BarPercentage = styled.span`
float: right;
margin-right: 100px;
`
export const BarParent = styled.div`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px;

`
export const Sp = styled.span`
background: #eb5424;
position: absolute;
display: block;
top: 0;
left: 0;
bottom: 0;
width:${props => props.item === 3 ? '50%' : null};
width:${props => props.item === 2 ? '90%' : null};
width:${props => props.item === 1 ? '100%' : null};
        `

// export const Sp = styled(barParentSpan)`width: 900%; `
// export const Sp2 = styled(barParentSpan)` width: 90 %; `
// export const Sp3 = styled(barParentSpan)`width: 80 %; `

export const ProfileTitle = styled.h2`
font-size: 40px;
margin-bottom: 20px;
`
export const SkillsTitle = styled(ProfileTitle)`

    `


export const ProfileTitleSpan = styled.span`
font-weight: normal;
`
export const SkillsTitleSpan = styled(ProfileTitleSpan)``



    // :${props => props.sp1 = '100%'}
    // width:${props => props.sp2 = '90%'}
    // width:${props => props.sp3 = '80%'}


