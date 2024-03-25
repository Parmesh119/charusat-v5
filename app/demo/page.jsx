"use client"
import React, { useState } from 'react';

const TwoColumnPage = () => {
    const [content, setContent] = useState('');

    const showContent = (type) => {
        switch (type) {
            case 'life':
                setContent(<div>Life content goes here.</div>);
                break;
            case 'food':
                setContent(<div>Food content goes here.</div>);
                break;
            case 'sports':
                setContent(<div>sports content goes here.</div>);
                break;
            case 'accommodation':
                setContent(<div>Accommodation content goe width: '80%', heighs here.</div>);
                break;
            case 'transportation':
                setContent(<div>Transportation content goes here.</div>);
                break;
            default:
                setContent('life');
                break;
        }
    };

    return (
        <div className="course-single-section padding-tb" style={{ display: 'flex'}}>
            <div className="container">
            <div style={{width: '100%',padding: '1rem',backgroundColor: "#f0f0f0",textAlign: 'center',  borderRadius: '10px', boxShadow:" 0 2px 5px rgba(0, 0, 0, 0.2)", marginBottom:' 1rem'}}>
                <h3>Campus Life</h3>
            </div>
                <div className="row">
                    <div className="col-lg-3" style={{alignContent:"flex-start"}}>
                    <div className="container">
                <button className="lab-btn btn111" onClick={() => showContent('life')}>Life at CHARUSAT</button><br/><br/>
                <button className="lab-btn btn111" onClick={() => showContent('sports')}>Sports & Healthcare</button><br/><br/>
                <button className="lab-btn btn111" onClick={() => showContent('food')}>Food & Hygiene</button><br/><br/>
                <button className="lab-btn btn111" onClick={() => showContent('accommodation')}>Accommodation</button><br/><br/>
                <button className="lab-btn btn111" onClick={() => showContent('transportation')}>Transportation</button><br/>
            </div>
                    </div>
                    <div className="col-lg-9">
                    <div style={styles.rightColumn}>
                        {content}
                    </div>
            
                    </div>
                </div>
            
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    leftColumn: {
        width: '100%',
        backgroundColor: 'lightgray',
        marginBottom: '10px',
    },
    rightColumn: {
        width: '100%',
        height: '100%',
        paddingLeft: '1rem',
        borderLeft:"5px solid black",
        backgroundColor: 'white',
    },
};

export default TwoColumnPage;
