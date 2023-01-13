import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="https://images.pexels.com/photos/2833362/pexels-photo-2833362.png?auto=compress&cs=tinysrgb&w=1600" class="card-img" alt="..." height="600px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className='container'>
                        <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2"> CHECK OUT ALL THE TRENDS</p>
                    </div>


                </div>
            </div>
            <Products/>
        </div>
     
    )
}

export default Home