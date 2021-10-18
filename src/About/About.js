import React from 'react';
import './About.css'
import imagess from '../images/1.jpg';
import imagess1 from '../images/aim.jpg'

const About = () => {
    return (
        <div className='about-container'>
            <div style={{marginLeft:'30px'}}>
                <img style={{marginBottom:"10px"}} src={imagess} alt="" />
                <img style={{width:'84%'}} src={imagess1} alt="" />
            </div>
            <div style={{width:'100%',textAlign:'center',marginRight:"29px"}}>
                <h2 style={{color:"plum"}}>Our Doctors</h2>
                <p style={{color:'plum', fontSize:"20px"}}>After all, good communication isn’t just for being friendly with patients. It’s also one of the most vital doctor skills because it helps physicians to understand their patients’ concerns and explain a diagnosis.

“They should answer questions using language that is clear without using too much medical terminology,” says Dr. Lisa Doggett, a family physician. “They should be honest but also offer hope, even when a situation is difficult. And they should help their patients feel empowered to improve their own health.”</p>
                <h2 style={{color:"plum",marginTop:'10px'}}>Our Aim</h2>
                <p style={{color:'plum', fontSize:"20px"}}>To promote awareness of health care among all sections of people.
To promote awareness among functionaries involved in Health and Hospital Management.To promote research in the field of Health and Hospital Management. in order to   improve the  efficiency of Health Care delivery Systems.To promote the development of high quality hospital services and community health care.

</p>
            </div>
        </div>
    );
};

export default About;