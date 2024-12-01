import React from "react"
import { useNewArrivals } from "../../Context/new-arrival-context"
import { ProductCard } from "../../index"
import Lottie from "react-lottie"
import LoadingLottie from "../../Assets/Lottie/loading-0.json"
import "./NewArrival.css"

function NewArrivals() {
    const { newArrivalsProductList } = useNewArrivals()

    const loadingObj = {
        loop: true,
        autoplay: true,
        animationData: LoadingLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <section className='new-arrivals-section'>
            <h1 className="section-title">New Arrivals</h1>
            <div className='new-arrivals-container'>
                
                {newArrivalsProductList.length === 0 ? (
                    <div className="loading-container">
                        <Lottie
                            options={loadingObj}
                            height={380}
                            style={{ margin: "auto" }}
                            isStopped={false}
                            isPaused={false}
                        />
                    </div>
                ) : (
                    <div className="new-arrivals-grid">
                        {newArrivalsProductList.slice(0, 3).map(product => (
                            <ProductCard 
                                key={product._id} 
                                productdetails={product}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export { NewArrivals };