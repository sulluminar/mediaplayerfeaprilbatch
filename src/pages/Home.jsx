import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'

function Home() {
    return (
        <>
            <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
                <div className='add_video'>
                    <Add />
                </div>
                <Link to='/watch' style={{ textDecoration: 'none', color: 'white', fontSize: '25px' }}> WATCH HISTORY</Link>
            </div>
            <div className='container mt-5 mb-5 d-flex justify-content-between'>
                    <div className='all-videos'>
                        <h4>All Videos</h4>
                        <View/>
                    </div>
                    <div className='category'>
                        <Category/>
                    </div>
            </div>
        </>

    )
}

export default Home