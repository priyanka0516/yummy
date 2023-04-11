import React from 'react';
const Gallery = () =>{
    return(
        <>
    <div className="all-page-title page-breadcrumb">
		<div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
                <h3 className='top-text'>Gallery</h3>
				</div>
			</div>
		</div>
	</div>
    <div className="gallery-box">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="heading-title text-center">
                    <h2>Gallery</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
            </div>
        </div>
        <div className="tz-gallery">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-01.jpg">
                    <img src={require('./../images/gallery1.jpg')} alt="1"/>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-02.jpg">
                    <img src={require('./../images/gallery2.jpg')} alt="1"/>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-03.jpg">
                    <img src={require('./../images/gallery3.jpg')} alt="1"/>
                    </a>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-04.jpg">
                    <img src={require('./../images/gallery4.jpg')} alt="1"/>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-05.jpg">
                    <img src={require('./../images/gallery5.jpeg')} alt="1"/>
                    </a>
                </div> 
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-06.jpg">
                    <img src={require('./../images/gallery6.jpeg')} alt="1"/>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-06.jpg">
                    <img src={require('./../images/gallery10.jpeg')} alt="1"/>
                    </a>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-05.jpg">
                    <img src={require('./../images/gallery8.jpeg')} alt="1"/>
                    </a>
                </div> 
                <div className="col-sm-6 col-md-4 col-lg-4">
                    <a className="lightbox" href="images/gallery-img-06.jpg">
                    <img src={require('./../images/gallery9.jpeg')} alt="1"/>
                    </a>
                </div>
                
            </div>
        </div>
    </div>
</div>
</>
    )
}
export default Gallery;