import React from 'react';
const About = () =>{
    return(
    <>
    <div className="all-page-title page-breadcrumb">
		<div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
                <h3 className='top-text'>About</h3>
				</div>
			</div>
		</div>
	</div>
    <div className="about-section-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6">
					<img src={ require('./../images/about_bg.png')} alt="" className="img-fluid"/>
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
	<div className="section">
 <div className="container">
   <div className="row p-3-vh">

      <div className="col-12 text-center">
        <div className="main-content">
          <div className="heading">
            <div className="title l-1">
              Our Special Dishes
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
export default About;