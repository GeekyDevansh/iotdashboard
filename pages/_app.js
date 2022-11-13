import '../styles/index.css'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return(
  <>
  
    
      
    <div className='md:block hidden' >

    <Navbar/>
    </div>
  
  
   <Component {...pageProps} />

  </>
)}

export default MyApp
