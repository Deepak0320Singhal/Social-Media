import React from 'react'
import CreatePost from '../components/CreatePost'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <Header />
        <Footer />
      </div>

    </div>
    
  )
}

export default HomePage;