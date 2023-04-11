import React from 'react';
import { Tab,Tabs } from 'react-bootstrap';
const Menu = () =>{
    return(
		<>
		<div className="all-page-title page-breadcrumb">
		<div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
					<h3 className='top-text'>Menu</h3>
				</div>
			</div>
		</div>
	</div>
	<div className='menu-variety'>
		<div className='container'>
			<div className='tab-section'>
			<h3>Special Menu</h3>
			<p>choose your favourite dishes now.</p>
			</div>			
		<Tabs
			defaultActiveKey="all"
			id="justify-tab-example"
			className="mb-3"
			justify
			>
			<Tab eventKey="all" title="All">
			<div className="row">
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/img-01.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
					<div className="gallery-single fix">
			<img src={require('./../images/img-03.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
	 		</div>
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/img-04.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/img-05.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			</div>
       		 <div className="col-md-4 col-xs-12">
				<div className="gallery-single fix">
			<img src={require('./../images/img-07.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/img-08.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			 </div>
    		</div>
			</Tab>
			<Tab eventKey="profile" title="Drinks">
			<div className="row">
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/img-01.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
					<div className="gallery-single fix">
			<img src={require('./../images/drink1.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
	 		</div>
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/drink2.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/drink3.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			</div>
       		 <div className="col-md-4 col-xs-12">
				<div className="gallery-single fix">
			<img src={require('./../images/drink4.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/img-03.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			 </div>
    		</div>
			</Tab>
			<Tab eventKey="brkfast" title="Breakfast">
			<div className="row">
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/brkfast1.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
					<div className="gallery-single fix">
			<img src={require('./../images/brkfast2.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
	 		</div>
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/brkfast3.jpeg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/brkfast4.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			</div>
       		 <div className="col-md-4 col-xs-12">
				<div className="gallery-single fix">
			<img src={require('./../images/brkfast5.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/brkfast6.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			 </div>
    		</div>
			</Tab>
			<Tab eventKey="south" title="South Indian food">
			<div className="row">
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/south1.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
					<div className="gallery-single fix">
			<img src={require('./../images/south2.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
	 		</div>
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/south3.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/south4.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			</div>
       		 <div className="col-md-4 col-xs-12">
				<div className="gallery-single fix">
			<img src={require('./../images/south5.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/south6.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			 </div>
    		</div>
			</Tab>
			<Tab eventKey="longer-tab" title="Indian food">
			<div className="row">
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/img-01.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
					<div className="gallery-single fix">
			<img src={require('./../images/img-03.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
	 		</div>
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/img-04.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/img-05.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			</div>
       		 <div className="col-md-4 col-xs-12">
				<div className="gallery-single fix">
			<img src={require('./../images/img-07.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/img-08.jpg')} alt="1"/>
				<div className='why-text'>
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			 </div>
    		</div>
			</Tab>
			<Tab eventKey="contact" title="Continental food" >
			<div className="row">
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/img-09.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
					<div className="gallery-single fix">
			<img src={require('./../images/img-05.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
	 		</div>
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/img-04.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/img-09.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			</div>
       		 <div className="col-md-4 col-xs-12">
				<div className="gallery-single fix">
			<img src={require('./../images/img-07.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/img-08.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			 </div>
    		</div>
            </Tab>
			<Tab eventKey="desert" title="Dessert">
			<div className="row">
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/desert1.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
					<div className="gallery-single fix">
			<img src={require('./../images/desert2.jpg')} alt="1"/>
						<div className="why-text">
							<h4>Special Drinks 1</h4>
							<p>Sed id magna vitae eros sagittis euismod.</p>
							<h5> $7.79</h5>
						</div>
					</div>
	 		</div>
        	<div className="col-md-4 col-xs-12">
			<div className="gallery-single fix">
			<img src={require('./../images/desert3.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/desert4.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			</div>
       		 <div className="col-md-4 col-xs-12">
				<div className="gallery-single fix">
			<img src={require('./../images/desert5.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			<div className="gallery-single fix">
			<img src={require('./../images/desert6.jpg')} alt="1"/>
				<div className="why-text">
					<h4>Special Drinks 1</h4>
					<p>Sed id magna vitae eros sagittis euismod.</p>
					<h5> $7.79</h5>
				</div>
			</div>
			 </div>
    		</div>
			</Tab>
       </Tabs>
		</div>
	</div>
	<div className="qt-box qt-background">
		<div className="container">
			<div className="row">
				<div className="col-md-8 ml-auto mr-auto text-left">
					<p className="lead ">
						" If you're not the one cooking, stay out of the way and compliment the chef. "
					</p>
					<span className="lead">Michael Strahan</span>
				</div>
			</div>
		</div>
	</div>
	</>
    )
}
export default Menu;