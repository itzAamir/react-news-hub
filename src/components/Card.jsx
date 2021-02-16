import React from "react";

const Card = ({ data }) => {
   return (
      <div className="card">
         <div className="title-div">
            <a href={data.url} rel="noreferrer" target="_blank">
               <h3 className="title">{data.title}</h3>
            </a>
         </div>
         <div className="additional-info">
            <div className="img-div">
               <img src={data.urlToImage} alt="news" />
            </div>
            <div className="info">
               <h3 className="author">Author: {data.author}</h3>
               <h3 className="date-published">
                  Date Published: {data.publishedAt}
               </h3>
            </div>
            <div className="btn-div">
               <a href={data.url} rel="noreferrer" target="_blank">
                  <button className="btn">Read More</button>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Card;
