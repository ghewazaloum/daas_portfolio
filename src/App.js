import {ImageBox ,Information ,Headings, Cards,Shape ,HeadingWithoutIcon, InfoList, WorkCard, Button} from './components/index';
import './App.css';
import { Container , GlassContainer ,Navbar ,ContainerWithImage, CardContainer ,
  GlassContainerFlexColumn, ContainerWithImage2,Footer} from './sections/index';
  import { FaPython ,FaReact,FaGithub ,FaDocker ,FaBootstrap  } from "react-icons/fa";  
  import { SiDjango } from "react-icons/si";
  import { IoLogoJavascript } from "react-icons/io";
  import { TbApi ,TbFileTypeCss} from "react-icons/tb";
  import wadiMed from './Assests/Images/wadiMed.png' ;
  import bear from './Assests/Images/bear.png' ;
  import sneakPeak from './Assests/Images/sneakPeak.png' ;
  import { PiFileHtml } from "react-icons/pi";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Container>
        <GlassContainer>
          <Information/>
          <ImageBox/>
        </GlassContainer>
      </Container>
      <ContainerWithImage>
          <Headings>skills</Headings>
          <CardContainer>
            <Cards skill='Python'><FaPython /></Cards>
            <Cards skill='Django'><SiDjango/></Cards>
            <Cards skill='Restfull APIs'><TbApi/></Cards>
            <Cards skill='JavaScript'><IoLogoJavascript/></Cards>
            <Cards skill='Tailwind css'><TbFileTypeCss/></Cards>
            <Cards skill='React JS'><FaReact/></Cards>
            <Cards skill='Git'><FaGithub/></Cards>
            <Cards skill='Docker'><FaDocker /></Cards>
            <Cards skill='CSS'><TbFileTypeCss/></Cards>
            <Cards skill='Bootstrap'><FaBootstrap/></Cards>
            <Cards skill='HTML'><PiFileHtml /></Cards>
          </CardContainer>
      </ContainerWithImage>
      <Container>
        <Shape/>
        <GlassContainerFlexColumn>
          <HeadingWithoutIcon>
            Education
          </HeadingWithoutIcon>
          <InfoList/>

        </GlassContainerFlexColumn>
          

      </Container>
      <ContainerWithImage2>
        <HeadingWithoutIcon>work</HeadingWithoutIcon>
        <CardContainer>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src={sneakPeak} alt='sneakPeak online shop'/>
              </div>
              <h4>sneakPeak online shop</h4>
              <div className='workButtons'>
                <Button href={"https://github.com/ghewazaloum/shoes.git"}>github</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src={wadiMed} alt='alwadi medical center'/>
              </div>
              <h4>alWadi medical center application</h4>
              <div className='workButtons'>
                  <Button href={"https://github.com/ghewazaloum/WadiMedicalCenter.git"}>frontend</Button>
                  <Button href={"https://github.com/Daas33/WadiMedicalCenter"}>backend</Button>
                  <Button href={"https://www.figma.com/file/g2QP6tQH5pGpR2gwjBkkts/medical-center?type=design&node-id=83%3A9&mode=design&t=nbUOqLubZyFsem70-1"}>Figma</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src={bear} alt='bear'/>
              </div>
              <h4>Bear social media app</h4>
              <div className='workButtons'>
                 <Button href={" https://github.com/Daas33/Bear.git"}>github</Button>
                  <Button href={"https://bear-socialmedia.netlify.app/"}>netlify</Button>
            </div>
            </WorkCard>
            <WorkCard>
              {/* <div className='imageDiv'>
                <img className='image' src={bear} alt='alwadi medical center'/>
              </div> */}
              <h4>chats room api</h4>
              <div className='workButtons'>
                 <Button href={"https://github.com/Daas33/chating.git"}>github</Button>
            </div>
            </WorkCard>
     
        </CardContainer>
      </ContainerWithImage2>
      <Footer/>
      


    </div>
  );
}

export default App;
