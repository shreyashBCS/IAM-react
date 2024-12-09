import React from 'react'
import telemarking from '../assets/tele marketing.png'

import '../App.css'
function Services() {
    return (

        <>

            <div style={{ marginTop: "70px" }}>
                <img style={{ width: "1300px", height: "500px", marginTop: "0" }} src={telemarking} />
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------ */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '40px',
                    flexWrap: 'wrap', // Stacks cards on smaller screens
                    backgroundColor: '#F5F7FB',
                }}
            >
                {/* Card 1 */}
                <div
                    style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '320px',
                        backgroundColor: '#556B8F',
                        color: '#FFFFFF',
                        borderRadius: '16px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#7C8CA3',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            margin: '0 auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        {/* Icon Placeholder */}
                        <span role="img" aria-label="icon">
                            📄
                        </span>
                    </div>
                    <h3 style={{ marginBottom: '10px' }}>Lead Generation</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
                        Leverage personalized telemarketing and lead generation to drive conversions.
                    </p>
                </div>

                {/* Card 2 */}
                <div
                    style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '320px',
                        backgroundColor: '#FFFFFF',
                        color: '#000000',
                        borderRadius: '16px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#D9D9D9',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            margin: '0 auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        {/* Icon Placeholder */}
                        <span role="img" aria-label="icon">
                            🔗
                        </span>
                    </div>
                    <h3 style={{ marginBottom: '10px' }}>Lead Conversion into Customers</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
                        Customize strategies to convert leads effectively into loyal customers.
                    </p>
                </div>

                {/* Card 3 */}
                <div
                    style={{
                        flex: '1',
                        minWidth: '280px',
                        maxWidth: '320px',
                        backgroundColor: '#F6A254',
                        color: '#FFFFFF',
                        borderRadius: '16px',
                        padding: '20px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#F8C091',
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            margin: '0 auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        {/* Icon Placeholder */}
                        <span role="img" aria-label="icon">
                            ⚙️
                        </span>
                    </div>
                    <h3 style={{ marginBottom: '10px' }}>After-Sales Services</h3>
                    <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
                        Enhance after-sales processes to boost customer loyalty and retention.
                    </p>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------------------ */}
        </>
    )
}

export default Services
