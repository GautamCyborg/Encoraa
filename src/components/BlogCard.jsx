import React from 'react';

const BlogCard = ({ data }) => {
  return (
    <section className="blog-two pt-60 pb-60">
      <div className="container">
        <div className="row g-4">
          {data.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 wow fadeInDown" data-wow-duration="1.2s" data-wow-delay=".2s">
              <div className="donation__item blog-two__item bor">
                <div className="blog-two__image mb-85">
                  <div className="image">
                    <img src={item.image} alt={item.treeName} />
                    <div className="blog-two__info">
                      <h4>{item.treeName}</h4>
                    </div>
                  </div>
                </div>
                <h3><a href="">Planted by:{item.uploadedBy}</a></h3>
                <h2>
                <p>Uploaded On:  {new Date(item.uploadedOn).toDateString()}</p>
        
                </h2>
                <h2> <p>Planted On: {new Date(item.plantedOn).toDateString()}</p></h2>
                <h2><a href=''><p>Location: {item.location}</p></a></h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogCard;
