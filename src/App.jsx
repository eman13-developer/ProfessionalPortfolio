
// import React from 'react'
// import Navbar from "./mycomponents/common/navbar"
// import Navbar2 from "./mycomponents/common/navbar2"
// import Homepage from "./pages/homepage"
// import './index.css'
// import About from "./pages/about"
// import Servicespage from './pages/Servicespage'
// import Testimonialspage from './pages/testimonialpage'
// import { Routes,Route,useLocation } from 'react-router-dom'
// import ContactPage from './mycomponents/uicomponents/contact'
// import Footerpage from './pages/footerpage'
// function App() {
// const location = useLocation();

//   return(
//     <>
//       {location.pathname !== "/contact" && <Navbar />}

//       <Routes>

//         {/* Portfolio sections */}
//         <Route
//           path="/"
//           element={
//             <>
//               <section id="home"><Homepage /></section>
//               <section id="about"><About /></section>
//               <section id="services"><Servicespage /></section>
//               <section id="review"><Testimonialspage /></section>
//             </>
//           }
//         />

//         {/* Contact page */}
//         <Route path="/contact" element={<ContactPage />} />

//       </Routes>

//       {location.pathname !== "/contact" && <Footerpage/>}
//     </>
//   )



  

// }

// export default App;





import React from 'react'
import Navbar from "./mycomponents/common/navbar"
import Navbar2 from "./mycomponents/common/navbar2"
import Homepage from "./pages/homepage"
import './index.css'
import About from "./pages/about"
import Servicespage from './pages/Servicespage'
import Testimonialspage from './pages/testimonialpage'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ContactPage from './mycomponents/uicomponents/contact'
import Footerpage from './pages/footerpage'

function App() {


  return (
    <div>

      <BrowserRouter>

        {location.pathname !== "/contact" && <Navbar />}

        <Routes>

    
          <Route path="/" element={
            <>
              <section id="home"><Homepage /></section>
              <section id="about"><About /></section>
              <section id="services"><Servicespage /></section>
              <section id="review"><Testimonialspage /></section>
            </>
          } />

          {/* Only Contact is separate */}
          <Route path="/contact" element={<ContactPage />} />

        </Routes>

        {location.pathname !== "/contact" && <Footerpage/>}

      </BrowserRouter>

    </div>
  )
}

export default App