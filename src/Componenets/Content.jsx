import React from 'react'
// import { Row ,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import landingImg from '../assets/images/landingImg.png'


function Content() {
  return (
    <div className='container' >

<div style={{ width: '100%', height: '70vh', backgroundColor:'darkgray' }} >
        <div style={{ height: '100%' }} className='container'>
          <div style={{ height: '100%' }} className="row align-items-center ">
            <div className="col-lg-6 " >
              <h1><b>START BUYING </b><br /><span className='text-danger'><b> ONLINE! </b></span></h1>
              <p style={{fontFamily:'peralta',fontSize:'35px'}}>GET THE BEST OUTFIT OF YOUR LIFE</p>
              <Button>SHOP NOW</Button>
            </div>
            <div className="col-lg-1" />
            <div className="col-lg-5 " >
              <img className='img' style={{ height: '50%',width:'70vh' ,marginTop:'180px'}} src={landingImg} alt="No image" />
            </div>
          </div>
        </div>
      </div>

      <div className='row mt-5'>
      <h2 style={{textAlign:'center'}}>womens</h2>
          <div className='col-lg-3'>
            
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://5.imimg.com/data5/SELLER/Default/2021/8/BX/XW/UE/48924283/party-wear-gown-500x500.jpeg" />
              <Card.Body>
                <Card.Title style={{fontFamily:'serif',fontSize:'25px'}}>Casual Frocks</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between '>
                  <Button  variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://cdn0.weddingwire.in/article/7052/original/1280/jpg/12507-churidar-designs-to-look-slim-aainagirl-navyblue.jpeg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Churidar</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://ik.imagekit.io/wb2spwtue/kreeva/tr:h-1100,w-800,q-80,cm-pad_resize/media/catalog/product/s/a/saree-2-04.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Saree</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://www.inddus.in/cdn/shop/products/firozi-organza-designer-lehenga-choli-215380_650x.jpg?v=1639518475" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Lehenga</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
      </div>
      <div className='row mt-5'>
      <h2 style={{textAlign:'center'}}>Gents</h2>
          <div className='col-lg-3'>
            
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src="https://assets.ajio.com/medias/sys_master/root/20230602/m4NR/64793b5f42f9e729d70d68a6/-473Wx593H-461653441-maroon-MODEL.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Shirts</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img  variant="top" src="https://i.etsystatic.com/35486431/r/il/4fb5eb/4603629674/il_570xN.4603629674_ap4t.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Kurta</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}}  class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img  variant="top" src="https://assets.ajio.com/medias/sys_master/root/20230810/QEFa/64d4f91fa9b42d15c9a1a801/-473Wx593H-420435620-cream-MODEL.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Shirt & Mundu</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'400px'}} variant="top" src="https://www.thefashionisto.com/wp-content/uploads/2023/07/Casual-Dress-Men-Chinos-Outfit.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Jeans</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
      </div>
      <div className='row mt-5'>
      <h2 style={{textAlign:'center'}}>Kids</h2>
          <div className='col-lg-3'>
            
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://fcity.in/images/products/134405109/isbia_512.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}} >Frocks</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://i.pinimg.com/736x/73/97/64/7397643606f4060f95481117f482ee2f.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Jeans</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://static3.azafashions.com/tr:w-317/uploads/product_gallery/g015_1611-0943318001637072518.JPG?noopt=true" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Saree</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://5.imimg.com/data5/ECOM/Default/2023/2/SG/OX/SX/90086993/sb-000707-02-500x500.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Kurta</Card.Title>
                <Card.Text>
                <p style={{fontSize:'20px'}}><b>$800.00</b></p>
                </Card.Text>
                <div className='d-flex justify-content-between'>
                  <Button variant="primary">Buy Now</Button>
                  <i style={{color:'red',fontSize:'20px'}} class="fa-solid fa-heart mt-2 me-3"></i>
                </div>
              </Card.Body>
            </Card>
              </div>
              
          </div>
      </div>
      <div className='row mt-5'>
        <h3 style={{textAlign:'center'}}>Special Offers</h3>
        <img src="https://fashiondream.co.in/cdn/shop/articles/www.fashiondream.co.in_MD1.png?v=1695977528" alt="" />
       <div id='button' style={{display:'flex',textAlign:'center',display:''}}>
          <Button  className='btn ' style={{width:'10% ',height:'50px',display:'space-evenly',justifyContent:'center',alignItems:'center'}} variant="primary">
            Buy Now
          </Button>
         
       </div>
      </div>
      <div className='row mt-5 mb-5'>
      <h2 style={{textAlign:'center'}}>Latest Collections</h2>
          <div className='col-lg-3'>
            
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://binfinite.in/cdn/shop/products/AA_cc7d6ce5-f947-43a0-b56f-b98ce546d05a_480x.jpg?v=1666174284" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Bodycon dress</Card.Title>
                <Card.Text>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>$790.50</p>
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://i.pinimg.com/originals/84/65/59/846559c29d322a0ffb574d0d193e2d1e.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Shirts & Pants</Card.Title>
                <Card.Text>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>$800.00</p>
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://i.etsystatic.com/24582521/r/il/d66556/3777136321/il_570xN.3777136321_gyml.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Baby girl dress</Card.Title>
                <Card.Text>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>$680.50</p>
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
              </div>
              
          </div>
          <div className='col-lg-3'>
              <div className='card'>
              <Card style={{ width: '20rem' }}>
              <Card.Img style={{height:'330px'}} variant="top" src="https://i.pinimg.com/736x/0d/7d/80/0d7d803e6b2b6f0e65f14ed37c502d4d.jpg" />
              <Card.Body>
                <Card.Title  style={{fontFamily:'serif',fontSize:'25px'}}>Casual Dress</Card.Title>
                <Card.Text>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <p>$569.50</p>
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
              </div>
              
          </div>
      </div>
      <div className='row'>
        <div className='col-lg-5'>
          <h2>About Us</h2>
          <p style={{fontFamily:'serif',fontSize:'20px'}}>We,Brenda,understand the ever-changing mind of a women & thus aim at providing & fully clothed closet that suits the unique styles of each women.
            We sell clothes at Malad West,Mumbai,Maharastra that are a part of the current fashion trends & turn every women into a fashionista.Our motto is make 
            to all the women feel like a diva when they dressed from head to toe in our eye-catching apparel.
          </p>
        </div>
        <div className='col mb-3'>
          <img style={{width:'100%'}} src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mvXWhFEZ3McY9uEvD19M3w.jpeg" alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default Content