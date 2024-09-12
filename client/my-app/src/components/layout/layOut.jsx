import React from 'react'
import Footer from './footer';
import Header from './header';
import About from '../../pages/About';
import Policy from '../../pages/Policy';
import Contact from '../../pages/Contact';
import HomePage from '../../pages/HomePage';
import {Helmet} from "react-helmet"
import{ Toaster} from 'react-hot-toast'

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div> 
        <Helmet>
                <meta charSet="utf-8" />
                <div>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
</div>

                <title>{title}</title>
                
            </Helmet>
      <Header/>
    <main style={{minHeight: '80vh'}}>
     <Toaster/> 
{children}



    </main>
    <Footer/>
    </div>
  );
}


export default Layout    
