import { useState } from 'react'
import './App.css'
import Silk from './components/Silk/Silk.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import SplitText from "./components/Split-Text.jsx";
import GreetingBar from './components/GreetingBar/GreetingBar.jsx';
import GridGallery from './components/GridGallery/GridGallery.jsx';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx';
import Footer from './components/Footer/Footer.jsx';
import TextType from './components/TextType/TextType.jsx'
import CurvedLoop from './components/CurvedLoop/CurvedLoop.jsx';

import Poster1 from './assets/images/DA2002-Proj-2.jpg';
import Poster2 from './assets/images/DA2002-Proj-3.jpg';
import Test from './assets/images/Test.png';
import Checkout from './assets/images/ebookshop-checkout.jpg'
import Model1 from './assets/images/Segue Front.jpg';
import Model2 from './assets/images/Segue Bottom.jpg';
import Telebot1 from './assets/images/Stock-telebot.jpg';
import Telebot2 from './assets/images/Stock-telebot-exp.jpg';
import Telebot3 from './assets/images/Stock-telebot-exp2.jpg';
import Unity1 from './assets/images/Unity-Game.png';
import Unity2 from './assets/images/Unity-Game-2.png';
import Android from './assets/images/clicker-login.jpg'
import Android2 from './assets/images/clicker-main.jpg'

function App() {
  const [count, setCount] = useState(0)

// Gallery images data
  const galleryImages = [
    {
      src: Poster1,
      title: "Design Project 1",
      description: "Done with Adobe Illustrator",
      size: 'gallery-item-large',
    },
    {
      src: Poster2,
      title: "Design Project 2",
      description: "Done with Adobe Illustrator",
      size: 'gallery-item-large',
    },
    {
      src: Test,
      title: "E-Bookshop Store",
      description: "Web application for online book shopping experience",
      size: 'gallery-item-wide',
    },
    {
      src: Model1,
      title: "Glasses Front",
      description: "3D model of AR Glasses",
      size: 'gallery-item-medium',
    },
    {
      src: Model2,
      title: "Glasses Bottom",
      description: "3D model of AR Glasses",
      size: 'gallery-item-small',
    },
    {
      src: Unity1,
      title: "Unity Game",
      description: "FPS game made in Unity",
      size: 'gallery-item-small',
    },
    {
      src: Telebot1,
      title: "Telebot for Stock",
      description: "Example code for the project",
      size: 'gallery-item-wide',
    },
    {
      src: Telebot2,
      title: "Telebot for Stock",
      description: "Working example",
      size: 'gallery-item-tall',
    },
    {
      src: Telebot3,
      title: "Telebot for Stock",
      description: "Working example",
      size: 'gallery-item-tall',
    },
    {
      src: Checkout,
      title: "E-Bookshop Store",
      description: "Checkout page example",
      size: 'gallery-item-wide',
    },
    {
      src: Unity2,
      title: "Unity Game",
      description: "In game screen capture",
      size: 'gallery-item-wide',
    },
    {
      src: Android,
      title: "Anroid Quiz App",
      description: "Login Page",
      size: 'gallery-item-medium',
    },
    {
      src: Android2,
      title: "Anroid Quiz App",
      description: "Main example",
      size: 'gallery-item-medium',
   }    
  
  ];


  return (
    <>
      {/* Background*/}
      <div style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        }}>
      <Silk
        speed={5}
        scale={0.5}
        color="#2e2f30"
        noiseIntensity={0}
        rotation={0}
        />
      </div>
      
      {/* Navigation Bar */}
        <Navbar/>
      {/* Hero Section */}
      <div id="home" style={{
        position: 'relative',
        zIndex: 1,
        width: '100vw',
        height: '100vh',
        marginTop: '-80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <GreetingBar
          text="Hello, I'm Qi Heng">
        </GreetingBar>
        <h1 className="hero-title">
        <SplitText
          text="Front-End | Engineering | Design "
        />
        </h1>

        <div>
          <CurvedLoop 
            marqueeText="Python | C | Java | HTML | CSS | mySQL | React | "
            speed={1}
            curveAmount={0}
            interactive={false}
          />
          <br />
          <CurvedLoop 
            marqueeText="Unity  |  Adobe Illustrator  |  Fusion 360 |  "
            speed={1}
            curveAmount={0}
            interactive={false}
          />
        </div>
      </div>
        
      {/* Gallery Section */}
      <div id="gallery" style={{
        position: 'relative',
        zIndex: 1,
        width: '100vw',
        minHeight: '100vh',
        padding: '40px 20px',
        boxSizing: 'border-box',
      }}>
        <h1 style={{ 
          color: '#ffffff', 
          textAlign: 'center', 
          marginBottom: '40px',
          fontSize: '2.5rem' 
        }}>
          My Portfolio
        </h1>
        <div style={{
          maxWidth: '90vw',
          margin: '0 auto'
        }}>
        {/* Grid Gallery */}
        <GridGallery images={galleryImages} />
        </div>
      </div>

      {/* About Me Section - Updated for Mobile */}
      <div id="about" style={{
        position: 'relative',
        zIndex: 1,
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        <div className="about-container" style={{
          display: 'flex',
          gap: 'clamp(20px, 5vw, 60px)',
          maxWidth: '1200px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <div className="about-text" style={{
            flex: '1 1 400px',
            minWidth: '300px',
            maxWidth: '600px',
            textAlign: 'left',
            padding: '0 20px',
          }}>
            <h1 style={{ 
              color: '#ffffff', 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}>
            <TextType 
            text={["About me"]}
            typingSpeed={75}
            pauseDuration={100}
            showCursor={true}
            cursorCharacter="!"
            />
            </h1>
            <div style={{
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
              lineHeight: '1.6',
              color: '#ffffff'
            }}>
            <p>
            <TextType 
            text={["My hobbies are reading mangas and novels, and stock trading! I also enjoy watching movies and going on a run!"]}
            typingSpeed={65}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            />
            </p>
            <br />
            <p>
            <TextType 
            text={["Coming from an Information Engineering & Media background, I've had my hands in a ton of different tech. I've coded in Python, C, Java, HTML, CSS and mySQL!. I've even made games in Unity and dabbled in digital design."]}
            typingSpeed={55}
            pauseDuration={100}
            showCursor={false}
            cursorCharacter="|"
            />
            </p>
            <br />
            <p>
            <TextType 
            text={["Basically, I have a really strong, broad foundation that helps me learn and adapt super quickly."]}
            typingSpeed={65}
            pauseDuration={1500}
            showCursor={false}
            cursorCharacter="|"
            />
            </p>
            </div>
          </div>
          
          <div className="profile-card-container" style={{
            flex: '0 0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '280px',
            maxWidth: '400px',
          }}> 
            <ProfileCard/>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div id="contact">
        <Footer/>
      </div>
    </>
  )
}

export default App
