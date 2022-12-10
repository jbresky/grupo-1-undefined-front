import React from 'react';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import Spacing from '../Components/Spacing';

function Home() {
    return (
        <div>
            <header>
                <Header/>
            </header>
            {/* <Spacing/> */}
            {/* <footer>
                <Footer/>
                <Spacing bg={'gray.100'}/>
            </footer> */}
        </div>
      );
}

export default Home;
