// import reactLogo from './assets/react.svg'
import './App.css';
import AboutUs from './components/AboutUs';
import ExclusiveCourses from './components/ExclusiveCourses';
import Footer from './components/Footer';
import Header from './components/Header'
import LegacyOfExcellence from './components/LegacyOfExcellence';
import Mainbanner from './components/Mainbanner';
import NextStep from './components/NextStep';
import OurTeam from './components/OurTeam';
import Partners from './components/Partners';
import SkillCertificate from './components/SkillCertificate';

function App() {

  return (
    <>
      <div className="relative h-[945px]">
        <Header />
        <Mainbanner />
      </div>
      <Partners />
      <LegacyOfExcellence />
      <ExclusiveCourses />
      <OurTeam />
      <SkillCertificate />
      <AboutUs />
      <NextStep />
      <Footer />
    </>
  )
}

export default App
