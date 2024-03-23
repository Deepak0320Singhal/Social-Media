import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import CreatePost from '../components/CreatePost'
import Footer from '../components/Footer'




function CreatePostPage() {
    return (

        <div className="app-container">
            <Sidebar />
            <div className="content">
                <Header />
                <CreatePost />
                <Footer />
            </div>

        </div>

    )
}

export default CreatePostPage;