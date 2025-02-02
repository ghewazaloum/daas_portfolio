import {ImageBox ,Information ,Headings, Cards,Shape ,HeadingWithoutIcon, InfoList, WorkCard, Button} from './components/index';
import './App.css';
import { Container , GlassContainer ,Navbar ,ContainerWithImage, CardContainer ,
  GlassContainerFlexColumn, ContainerWithImage2,Footer} from './sections/index';
  import { FaPython ,FaReact,FaGithub ,FaDocker ,FaBootstrap,FaVuejs  } from "react-icons/fa";  
  import { SiDjango } from "react-icons/si";
  import { IoLogoJavascript } from "react-icons/io";
  import { TbApi ,TbFileTypeCss} from "react-icons/tb";
  import { PiFileHtml } from "react-icons/pi";
  import { SiMicrosoftazure  ,SiMui } from "react-icons/si";

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
            <Cards skill='Material UI'><SiMui/></Cards>
            <Cards skill='Azure'><SiMicrosoftazure/></Cards>
            <Cards skill='Vue.js'><FaVuejs/></Cards>
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
                <img className='image' src="https://i.ibb.co/jRJLfgM/sneak-Peak.png" alt='sneakPeak online shop'/>
              </div>
              <h4>sneakPeak online shop</h4>
              <div className='workButtons'>
                <Button href={"https://drive.google.com/file/d/1OKaozp55U_7A2l4JD0SONurnZWZKnKm-/view?usp=sharing&usp=embed_facebook"}>Promo</Button>
                <Button href={"https://drive.google.com/file/d/1TOZ0-cTUgE5uV7-Bnkls3RSYPDS-HBgl/view?usp=sharing&usp=embed_facebook"}>Review</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src="https://i.ibb.co/zFf3fsy/wadiMed.png" alt='alwadi medical center'/>
              </div>
              <h4>alWadi medical center application</h4>
              <div className='workButtons'>
              <Button href={"https://drive.google.com/file/d/10sJcHTLdjDuVWmFH9Rf59hxNnnKyR5uW/view?usp=sharing&usp=embed_facebook"}>Promo</Button>
                <Button href={"https://drive.google.com/file/d/1X3d6VgvA2tC6izAjLqsOn2Y3XwLdcMGq/view?usp=sharing&usp=embed_facebook"}>Review</Button>
                  <Button href={"https://www.figma.com/file/g2QP6tQH5pGpR2gwjBkkts/medical-center?type=design&node-id=83%3A9&mode=design&t=nbUOqLubZyFsem70-1"}>Figma</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src="https://i.ibb.co/VvS3PF5/bear.png" alt='bear'/>
              </div>
              <h4>Bear social media app</h4>
              <div className='workButtons'>
                 <Button href={" https://github.com/Daas33/Bear.git"}>github</Button>
                  <Button href={"https://bear-socialmedia.netlify.app/"}>netlify</Button>
            </div>
            </WorkCard>
            <WorkCard>
              <div className='imageDiv'>
                <img className='image' src="https://i.ibb.co/1vrYmH7/wbid.jpg" alt='bear'/>
              </div>
              <h4>W_bid app</h4>
              <div className='workButtons'>
              <Button href={"https://drive.google.com/file/d/1CofBuQT81dTfcVVcIM1y5agCuFyIJVG1/view"}>Promo</Button>
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
            <WorkCard>
              {/* <div className='imageDiv'>
                <img className='image' src={bear} alt='alwadi medical center'/>
              </div> */}
              <h4>forms-easy website</h4>
              <div className='workButtons'>
                 <Button href={"https://github.com/Daas33/forms-easy"}>github</Button>
            </div>
            </WorkCard>
            <WorkCard>
              {/* <div className='imageDiv'>
                <img className='image' src={bear} alt='alwadi medical center'/>
              </div> */}
              <h4>analysis app</h4>
              <div className='workButtons'>
                 <Button href={"https://github.com/Daas33/analysis-app"}>github</Button>
            </div>
            </WorkCard>
     
        </CardContainer>
      </ContainerWithImage2>
      <Footer/>
      


    </div>
  );
}

export default App;
