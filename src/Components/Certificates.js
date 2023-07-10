import './styles/Certificates.css';


import { useState } from 'react';
import m1 from './images/certificates/m1.jpg'
import m3 from './images/certificates/m3.png'
import m4 from './images/certificates/m4.png'

import c1 from './images/certificates/c1.png'


function Certificates() {

    const courseCertificates = [
      {
        icon : c1,
        name : "Smart Interviews"
    }
    ]
    const [selectedCertificate, setSelectedCertificate] = useState(null);
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
    const [currentIndex, setCurrentIndex] = useState(null);
    const handleCertificateClick = (certificate, index) => {
        setSelectedCertificate(certificate);
        setCurrentIndex(index);
      };
    
      const closeExpandedCertificate = () => {
        setSelectedCertificate(null);
        setCurrentIndex(null);
      };
    
    
    
      return (
        <div className="background">
          <div className="certificateTop"></div>
          <div className="bg-black text-white">
            <h3 className="text-center titles">Merit Certificates</h3>
            <div className="container my-5">
              <div className="row justify-content-around">
                {meritCertificate.map((certificate, index) => (
                  <div
                    key={index}
                    className={`col-10 col-md-5 col-lg-5 text-center eachMeritCertificate ${
                      selectedCertificate === certificate ? 'expanded' : ''
                    }`}
                    onClick={() => handleCertificateClick(certificate, index)}
                  >
                    <img src={certificate.icon} width="100%" alt="Certificate" />
                    <p className="mt-4 mb-0">{certificate.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white">
            <h3 className="text-center titles">Course Completion Certificates</h3>
            <div className="container my-5">
              <div className="row justify-content-around">
                {courseCertificates.map((certificate, index) => (
                  <div
                    key={index}
                    className={`col-10 col-md-5 col-lg-5 text-center eachCourseCertifiate ${
                      selectedCertificate === certificate ? 'expanded' : ''
                    }`}
                    onClick={() => handleCertificateClick(certificate, index)}
                  >
                    <img src={certificate.icon} width="100%" alt="Certificate" />
                    <p className="bg-black text-white mt-4 mb-0">{certificate.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {selectedCertificate && (
            <div className="expanded" onClick={closeExpandedCertificate}>
              <button className="closeButton" onClick={closeExpandedCertificate}>
                X
              </button>
              <img src={selectedCertificate.icon} alt="Expanded Certificate" />
            </div>
          )}
        </div>
      );
    }
    
    export default Certificates;