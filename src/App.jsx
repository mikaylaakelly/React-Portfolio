// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import AboutMe from './components/aboutMe/aboutMe';
// import Resume from './components/Resume/Resume';
// import Portfolio from './components/Portfolio/Portfolio';
// import ContactMe from './components/ContactMe/ContactMe';
// import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';



// function App() {
//   const [selectedSection, setSelectedSection] = useState('AboutMe'); 

//   const handleNavigationClick = (section) => {
//     setSelectedSection(section);
//   };

//   useEffect(() => {
//   }, [selectedSection]);

//   return (
//     <div className="App">
//       <Header />
//       <Navbar onNavigationClick={handleNavigationClick} />
//       <main>
//         {selectedSection === 'aboutMe' && <AboutMe />}
//         {selectedSection === 'resume' && <Resume />}
//         {selectedSection === 'portfolio' && <Portfolio />}
//         {selectedSection === 'contactMe' && <ContactMe />}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Resume from './components/Resume/Resume';
import Portfolio from './components/Portfolio/Portfolio';
import ContactMe from './components/ContactMe/ContactMe';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const [selectedSection, setSelectedSection] = useState('aboutMe'); // Set initial value to 'aboutMe'

  const handleNavigationClick = (section) => {
    setSelectedSection(section);
  };

  useEffect(() => {
    
  }, [selectedSection]);

  return (
    <div className="App">
      <Header />
      <Navbar onNavigationClick={handleNavigationClick} />
      <main>
        {selectedSection === 'aboutMe' && <AboutMe />}
        {selectedSection === 'resume' && <Resume />}
        {selectedSection === 'portfolio' && <Portfolio />}
        {selectedSection === 'contactMe' && <ContactMe />}
      </main>
      <Footer />
    </div>
  );
}

export default App;