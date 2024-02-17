import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='bg-body-secondary '>


<div className='container w-100 h-100  mb-5 mt-5'>

  <div className="footer-content  d-flex justify-content-between">
    <Row>

      <Col sm >
        <div style={{ color: 'black' }} className="title ">
          <h4 style={{ height: '50px' }} className='d-flex'><i class="fa-solid fa-bag-shopping me-2"></i> Dress World</h4>
          <span style={{ height: '50px' }} >Pulvinar aenean dignissim porttitor sed risus urna, pretium quis non id.</span><br />
        </div>
      </Col> 
      <Col sm  >
        <div className=" d-flex flex-column ">
          <h4 style={{ height: '55px', color: 'black' }}>Informations</h4>
          <ul>
                <li>About me</li>
                <li>My Story</li>
                <li>Awards & Acheivements</li>
              </ul>
        </div>
      </Col>
      <Col sm  >
        <div className="links d-flex flex-column ">
          <h4 style={{ height: '55px', color: 'black' }}>Discover</h4>
          <ul>
              <li>Dresses</li>
                <li>Bottoms</li>
                <li>Accessories</li>
            </ul>
        </div>
      </Col>
      <Col sm >
        <div style={{ color: 'black' }} className="contact">
          <h4 style={{ height: '55px' }}>Contact Us</h4>
          <div className='d-flex'>
            <input placeholder='Enter Your Mail' type="text" className="form-control" />
            <button className='btn btn-danger ms-2'><i class="fa-solid fa-arrow-right "></i></button>
          </div>
          <div style={{ color: 'black' }} className="icons mt-3 d-flex justify-content-between">
            <i style={{ height: '55px' }} class="fa-solid fa-envelope fa-2x"></i>
            <i style={{ height: '55px' }} class="fa-brands fa-twitter fa-2x"></i>
            <i style={{ height: '55px' }} class="fa-brands fa-facebook fa-2x"></i>
            <i style={{ height: '55px' }} class="fa-brands fa-instagram fa-2x"></i>
            <i style={{ height: '55px' }} class="fa-brands fa-linkedin fa-2x"></i>

          </div>
        </div>

      </Col>
    </Row>

  </div>
  <p style={{ color: 'black' }} className='text-center '>Copyright &copy; 2023 & All Rights Reserved.</p>
</div>

</div>




     
    </>
  )
}

export default Footer