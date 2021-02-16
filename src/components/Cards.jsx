import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cards = () => {
   const [card, setCard] = useState();
   useEffect(() => {
      const getData = () => {
         const url = `http://newsapi.org/v2/everything?q=tech&from=2021-01-15&apiKey=${process.env.REACT_APP_API_KEY}`;
         axios
            .get(url)
            .then((res) => {
               const data = res.data.articles;
               setCard(data.map((e, i) => <Card key={i} data={e} />));
            })
            .catch((err) => console.log(err));
      };
      getData();
   }, []);

   return <div className="cards-container">{card}</div>;
};

// Title
// Img
// Author
// Date
// Link

export default Cards;
