import React, { useState, useEffect } from 'react'

function Products() {


    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componetMounted = true;


    useEffect(() => {




        const getProducts = async () => {
            setLoading(true)
            const res = await fetch("https://fakestoreapi.com/products");


            if (componetMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false)

            }
        }


        return () => {
            componetMounted = false;
        }

    }, [])
    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    };


    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center md-5 pb-5">
                    <button className='btn btn-outline-dark me-2'>All</button>
                    <button className='btn btn-outline-dark me-2'>Men's Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Women's Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Jewelery Clothing</button>
                    <button className='btn btn-outline-dark me-2'>Electronic </button>
                </div>


                {
                    filter.map((Product) => {
                        console.log(Product)
                        return (
                            <>
                                <div className="col-md-3">

                                    <div className="card" style="width: 18rem;">
                                        <img src={Product.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{Product.title}</h5>
                                            <p className="card-text">${Product.price}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )

                    })
                }
            </>
        )

    }

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 md-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">

                    {loading ? <Loading /> : <ShowProducts />}

                </div>
            </div>
        </div>
    )
}

export default Products