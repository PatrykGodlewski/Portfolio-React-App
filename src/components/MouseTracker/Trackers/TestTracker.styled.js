import styled from "styled-components";

export const TestTrackerStyled = styled.div`

position: absolute;
width: 50px;
height: 50px;
background: linear-gradient(#33ccff, #ff0066);
border-radius: 50%;
animation: animate 0.5 linear infinite ;


@keyframes animate {
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg)
}
}

&:after {
content: '';
position: absolute;
top: 35px;
right: 35px;
bottom: 35px;
left: 35px;
border-radius: 50%;
background-color: black;

& span {
position: absolute;
width: 100;
height: 100%;
background: linear-gradient(#33ccff, #ff0066);
border-radius: 50%;
}

& span:nth-child(1){
filter: blur(10px);
}
& span:nth-child(2){
filter: blur(10px);
}
& span:nth-child(3){
filter: blur(20px);
}
& span:nth-child(4){
filter: blur(55px);
}

`;
