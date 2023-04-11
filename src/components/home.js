import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () =>{
    const settings = {
        dots:false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const settingsreview = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1020,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 910,
            settings: {
              arrows: false,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              arrows: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 500,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 400,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
            
          },
          {
            breakpoint: 250,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
            
          }
        ]
      };
    return(
      <>
        <div className='slider-wrapper'>
        <Slider {...settings}>
          <div className='banner-scroll'>
           <img src={require('./../images/slider-01.jpg')} alt="slider1" className="image"/>
           <div className="centered"><h1>Welcome to Yamifood !</h1>   
           <p>In our restaurant our motive<br/> is to serve you delicious food with affordable price.</p> 
          <button className="button-59" role="button">Reserve a Table</button>
          </div>
          </div>
          <div className='banner-scroll'>            
          <img src={require('./../images/slider-02.jpg')} alt="slider1" className="image"/>
          <div className="centered"><h1>Welcome to Yamifood !</h1>  
          <p>In our restaurant our motive<br/> is to serve you delicious food with affordable price.</p> 
          <button className="button-59" role="button">Reserve a Table</button>
          </div>
          </div>
          <div className='banner-scroll'>
          <img src={require('./../images/slider-03.jpg')} alt="slider3" className="image"/>
          <div className="centered"><h1>Welcome to Yamifood !</h1>  
          <p>In our restaurant our motive<br/> is to serve you delicious food with affordable price.</p>  
          <button className="button-59" role="button">Reserve a Table</button>
          </div>
          </div>
          <div className='banner-scroll'>
          <img src={require('./../images/slider-01.jpg')} alt="slider1" className="image"/>
          <div className="centered"><h1>Welcome to Yamifood !</h1>  
          <p>In our restaurant our motive<br/> is to serve you delicious food with affordable price.</p> 
          <button className="button-59" role="button">Reserve a Table</button>
          </div>
          </div>
          <div className='banner-scroll'>
          <img src={require('./../images/slider-02.jpg')} alt="slider2" className="image"/>
          <div className="centered"><h1>Welcome to Yamifood !</h1>   
          <p>In our restaurant our motive<br/> is to serve you delicious food with affordable price.</p> 
          <button className="button-59" role="button">Reserve a Table</button>
          </div>
          </div>
          <div className='banner-scroll'>
          <img src={require('./../images/slider-03.jpg')} alt="slider3" className="image"/>
          <div className="centered"><h1>Welcome to Yamifood !</h1> 
          <p>In our restaurant our motive<br/> is to serve you delicious food with affordable price.</p> 
          <button className="button-59" role="button">Reserve a Table</button>
          </div>
          </div>
        </Slider>
      </div>
      <div className="about-section-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6">
					<img src={ require('./../images/home2.jpeg')} alt="" className="img-fluid"/>
				</div>
				<div className="col-lg-6 col-md-6 text-center">
					<div className="inner-column">
						<h1>Welcome To <span>Yamifood Restaurant</span></h1>
						<h4>Little Story</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
						<p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
            <button className="button-59" role="button" id="button59-about">Reserve a Table</button>
					</div>
				</div>
			</div>
		</div>
	    </div>
  {/* <div className="testimonials">
	<div className="container">
      <div className="row">
        <div className='textimonail-dishes'>
          <h3>Our Best Dishes are</h3>
          <p>You must try once.</p>
        </div>
       <Slider {...settingsreview}>
        <div className='col-md-4'>
        <img src={require('./../images/slider-03.jpg')} alt="slider3" className="image"/>
        </div>
        <div className='col-md-8'>
          
        </div>
      </Slider>
      </div>
      </div>
    </div> */}
    	<div id="special-section">
			<div className="container">
				<div className="title-section white">
					<h1>Today's Special</h1>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada <br/> erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
				</div>
			</div>
			<div className="container">
				<div className="today-special-box">
					<div className="food-line">
						
						<div className="food-post">
							<div className="inner-food-post">
								<div className="food-gal">
									<img src={require('./../images/sp1.jpg')} alt=""/>
								</div>
								<div className="food-content">
									<div className="food-content-box">
										<h2><a href="/#">CAMPO LINDO CHICKEN</a></h2>
										<p>Praesent dapibus, neque id cursus faucibus, tortor neque </p>
										<span className="price">$20.15</span>
										<span className="category">in Dinners</span>
									</div>
								</div>
							</div>
						</div>

						<div className="food-post">
							<div className="inner-food-post">
								<div className="food-gal">
                <img src={require('./../images/sp2.jpg')} alt=""/>
								</div>
								<div className="food-content">
									<div className="food-content-box">
										<h2><a href="/#">BROCCOLI SOUP</a></h2>
										<p>Praesent dapibus, neque id cursus faucibus, tortor neque </p>
										<span className="price">$7.50</span>
										<span className="category">in Breakfast</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="food-line">

						<div className="food-post">
							<div className="inner-food-post">
								<div className="food-gal">
								<img src={require('./../images/sp3.jpg')} alt=""/>
								</div>
								<div className="food-content">
									<div className="food-content-box">
										<h2><a href="/#">TUNA ROAST SOURCE</a></h2>
										<p>Praesent dapibus, neque id cursus faucibus, tortor neque </p>
										<span className="price">$14.30</span>
										<span className="category">in Dinners</span>
									</div>
								</div>
							</div>
						</div>

						<div className="food-post">
							<div className="inner-food-post">
								<div className="food-gal">
                <img src={require('./../images/sp4.jpg')} alt=""/>
								</div>
								<div className="food-content">
									<div className="food-content-box">
										<h2><a href="/#">CHOCOLATE FUDGE CAKE</a></h2>
										<p>Praesent dapibus, neque id cursus faucibus, tortor neque </p>
										<span className="price">$11.00</span>
										<span className="category">in Desserts</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    <section id="reservation-section">
			<div class="container">
				<div class="reservation-box">
					<div class="row">
						<div class="col-md-6">
							<div class="title-section white">
								<h1>Make Reservation</h1>
								<p>Booking a table has never been so easy with free &amp; instsstant online <br/> restaurant reservations, booking now!!</p>
							</div>
							<form class="reservation-form">
								<label>Guest Name:</label>
								<input type="text" name="name-guest" id="name-guest" placeholder="Name"/>
								<label>Date:</label>
								<input type="text" name="date-guest" id="date-guest" placeholder="mm/dd/yyyy"/>
								<div class="row">
									<div class="col-md-6">
										<label>Time:</label>
										<input type="text" name="time-guest" id="time-guest" placeholder="7:00 pm"/>
									</div>
									<div class="col-md-6">
										<label>Pers:</label>
										<input type="text" name="pers-guest" id="pers-guest" placeholder="2 people"/>
									</div>
								</div>
								<input type="submit" name="submit-reservation" id="submit-reservation" value="Find a Table" />
								<div id="msg-rsv"></div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>

    <div className="section">
 <div className="container">
   <div className="row p-3-vh">

      <div className="col-12 text-center">
        <div className="main-content">
          <div className="heading">
            <div className="title l-1">
              Our News & Events
            </div>
          </div>
          <div className="desc m-auto">
            Follow our lates news updates to know about our offers, recipes and events. One cannot think
            well, love well, sleep well, if one has not dined well.
          </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
      <div className="content-col">
        <div className="img">
				<img src={require('./../images/blog1.jpg')} alt=""/>
          <div className="date">
            Jan 14, 2021
          </div>
        </div>
        <div className="heading">
          Dinner Party for a Chef!
        </div>
        <div className="desc autoheight">
          I began my career as a recipe
          tester for cookbooks, and I did
          that work for two years. I loved
          cookbooks and loved browsing
          for them at...
        </div>
        <a className="btn-content" href="#">
          <span className="shine"></span>
          View More
        </a>
      </div>
    </div>

    <div className="col-md-4 mt-5">
      <div className="content-col">
        <div className="img">
  			<img src={require('./../images/blog2.jpg')} alt=""/>
          <div className="date">
            Feb 04, 2021
          </div>
        </div>
        <div className="heading">
          Great Taste for Breakfast!
        </div>
        <div className="desc autoheight">
         I began my career as a recipe
          tester for cookbooks, and I did
          that work for two years. I loved
          cookbooks and loved browsing
          for them at...
        </div>
        <a className="btn-content" href="#">
          <span className="shine"></span>
          View More
        </a>
      </div>
    </div>

    <div className="col-md-4 mt-5">
      <div className="content-col">
        <div className="img">
        <img src={require('./../images/blog4.jpg')} alt=""/>
          <div className="date">
            March 10, 2021
          </div>
        </div>
        <div className="heading">
          Delicious Fish with Black Sauce
        </div>
        <div className="desc autoheight">
         I began my career as a recipe
tester for cookbooks, and I did
that work for two years. I loved
cookbooks and loved browsing
for them at...
        </div>
        <a className="btn-content" href="#">
          <span className="shine"></span>
          View More
        </a>
      </div>
    </div>



    </div>
  </div>
    </div>
  </>
    )
}
export default Home;