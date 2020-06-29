import styled from 'styled-components';

const LoaderWrapper = styled.div`

.display {
    position: relative;
    display: flex;
}
.img1 {
    position : relative;
height:690px;
}
.image {
    position: absolute;
    top: 35%;
    left:117px;
    width: 25%;
}

.part2 {
    position: absolute;
    top: 43%;
    left: 50%; 

}
p{
  position: relative;
  left: 18%;
  color: #7851AE;
  font-size: 20px;
}
.arrow {
  position:relative;
  width: 12%;
  left: 50%;
  top:10%;
  cursor: pointer;
}



@keyframes bouncing-loader {
  to {
    opacity: 0.1;
    transform: translate3d(0, -1rem, 0);
  }
}

.bouncing-loader {
  display: flex;
  justify-content: center;
}

.bouncing-loader > div {
  width: 1rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}

.bouncing-loader > div:nth-child(2) {
  animation-delay: 0.2s;
}

.bouncing-loader > div:nth-child(3) {
  animation-delay: 0.4s;
}

@media only screen   
and (min-device-width : 375px)   
and (max-device-width : 667px){
  p{
  position: relative;
  left: 31%;
  color: #7851AE;
  font-size: 14px;
}
.arrow {
  position:relative;
  width: 17%;
  height: 24px;
  left: 57%;
  top: -22px;
  cursor: pointer;
}
.img1 {
    position : relative;
     height: 664px;
     width: 250px;
}
.image {
    position: absolute;
    top: 35%;
    left:26px;
    width: 40%;
    height: 164px;
}
.bouncing-loader > div {
  width: 0.5rem;
  height: 1rem;
  margin: 3rem 0.2rem;
  background: #8385aa;
  border-radius: 50%;
  animation: bouncing-loader 0.6s infinite alternate;
}
}


`;

export default LoaderWrapper;
