import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../App.css'
import carimg from '../assets/car img.jpg'


function HomePage() {

    const items = [
        <div className="item" data-value="1" key="1" style={{ backgroundColor: 'lightblue', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 1</div>,
        <div className="item" data-value="2" key="2" style={{ backgroundColor: 'lightgreen', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 2</div>,
        <div className="item" data-value="3" key="3" style={{ backgroundColor: 'lightcoral', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Item 3</div>,
    ];

    return (
        <>
            {/* Carousel Section */}
            <div style={{ width: '100%', marginBottom: '50px' }}>
                <AliceCarousel
                    autoPlay
                    autoPlayControls
                    autoPlayStrategy="none"
                    autoPlayInterval={1000}
                    animationDuration={1000}
                    animationType="fadeout"
                    infinite
                    touchTracking={false}
                    disableDotsControls
                    disableButtonsControls
                    items={items}
                />
            </div>
            {/* ----------------------------------------------------------------------------------------------------------- */}
            <h2 className='text-center'>Welcome</h2>
            <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: '20px', padding: '20px', flexWrap: 'wrap' }} >

                {/* Text Section */}
                <div style={{ flex: '1', minWidth: '280px', maxWidth: '600px', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>

                    <p style={{ margin: '0', fontSize: "26px" }}>
                        At Innovation Advertising and Marketing, we specialize in tele-marketing, lead generation,
                        and customer conversion solutions designed specifically for automobile companies and car
                        dealerships. Our innovative strategies ensure that your after-sales services, like car
                        maintenance and repairs, attract more customers and keep them coming back. By connecting
                        directly with vehicle owners, we help you maximize foot traffic to your service outlets,
                        improving customer satisfaction and loyalty.
                    </p>
                </div>

                {/* Image Section */}
                <div style={{ flex: '1', minWidth: '280px', maxWidth: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={carimg} alt="Automobile Marketing"
                        style={{
                            maxWidth: '100%',
                            maxHeight: "100%",
                            width: "auto",
                            objectFit: "cover",
                            height: 'auto', // Fixed height to match the text
                            borderRadius: '8px',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            marginBottom: "-35px"
                        }}
                    />
                </div>
            </div>


            {/* ------------------------------------------------------------------------------------------------------------- */}
            {/* <h2 className='text-center'>Why Us</h2> */}





            {/* ---------------------------------------------------------------------------------------------------- */}
            {/* Testimonial Cards Section */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '20px',
                marginTop: "30px",
                padding: '0 10px',
            }}>
                {/* Testimonial Card 1 */}
                <div style={{
                    width: '100%', /* Full width on small screens */
                    maxWidth: '48%', /* 50% width on medium and large screens */
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '20px',
                    position: 'relative',
                    boxSizing: 'border-box',
                    backgroundColor: '#f9f9f9',
                }}>
                    <div style={{
                        position: 'absolute', top: '-30px', left: '20px', width: '60px', height: '60px',
                        borderRadius: '50%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}>
                        <img src="https://via.placeholder.com/60" alt="Person 1" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <h3 style={{ marginTop: '40px' }}>John Doe</h3>
                    <p style={{ fontStyle: 'italic', color: '#555' }}>"This company is amazing! They delivered exactly what I was looking for, and I couldn’t be happier with the results!"</p>
                </div>

                {/* Testimonial Card 2 */}
                <div style={{
                    width: '100%', /* Full width on small screens */
                    maxWidth: '48%', /* 50% width on medium and large screens */
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    padding: '20px',
                    position: 'relative',
                    boxSizing: 'border-box',
                    backgroundColor: '#f9f9f9',
                }}>
                    <div style={{
                        position: 'absolute', top: '-30px', left: '20px', width: '60px', height: '60px',
                        borderRadius: '50%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    }}>
                        <img src="https://via.placeholder.com/60" alt="Person 2" style={{ width: '100%', height: '100%' }} />
                    </div>
                    <h3 style={{ marginTop: '40px' }}>Jane Smith</h3>
                    <p style={{ fontStyle: 'italic', color: '#555' }}>"I love working with this team! They truly understand our needs and always go above and beyond to exceed expectations."</p>
                </div>
            </div>
        </>
    );
}

export default HomePage;
