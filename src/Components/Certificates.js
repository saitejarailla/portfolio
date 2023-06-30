import './styles/Certificates.css';

import c1 from './images/certificates/1.png'
import c2 from './images/certificates/7.jpeg'
import c3 from './images/certificates/3.jpg'
import c4 from './images/certificates/2.jpg'
import c5 from './images/certificates/5.jpeg'
import c6 from './images/certificates/6.jpeg'
import c7 from './images/certificates/4.jpg'


import m1 from './images/certificates/m1.jpg'
import m2 from './images/certificates/m2.jpg'
import m3 from './images/certificates/m3.png'
import m4 from './images/certificates/m4.png'


function Certificates() {

    const courseCertificates = [
        { 
            icon : c1 ,
            name : "Deep Learning Workshop"
        },
        { 
            icon : c2 ,
            name : "Git Training"
        },
        { 
            icon : c7 ,
            name : "Data Structures and Algorithms"
        }
    ]

    const meritCertificate = [
        {
            icon : m4,
            name : "NASA Space Apps Challenge"
        },
        {
            icon : m1,
            name : "My Big Idea Hackathon"
        },
        {
            icon : m3,
            name : "Convergence Project Contest"
    }
    ]

    return ( 
        <div className='background'> 
        <div className='bg-black text-white'>
                <h3 className='text-center titles'>Merit Certificates</h3>
                <div className='container my-5'>
                    <div className='row justify-content-around'>
                        {
                            meritCertificate.map(
                                        (ele) =>  <div className='col-10 col-md-5 col-lg-5 text-center eachMeritCertificate '>
                                                            <img src={ele.icon} width="100%"/>
                                                            <p className='mt-4 mb-0'>{ele.name}</p>
                                                    </div>
                                    )
                        }
                    </div>
                </div>
            </div>
        <div className='certificateTop'></div>
        {/* <h1 className='text-center p-3'>Skills</h1> */}
            <div className='bg-white'>
                <h3 className='text-center titles'>Course Completion Certificates</h3>
                <div className='container my-5'>
                    <div className='row justify-content-around'>
                        {
                            courseCertificates.map(
                                        (ele) =>  <div className='col-10 col-md-5 col-lg-5 text-center eachCourseCertifiate '>
                                                            <img src={ele.icon} width="100%"/>
                                                            <p className='bg-black text-white mt-4 mb-0'>{ele.name}</p>
                                                    </div>
                                    )
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Certificates;