import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Cards = () => {
   const [card, setCard] = useState();
   useEffect(() => {
      const getData = async () => {
         const url =
            "https://newsapi.org/v2/everything?q=tech&apiKey=eb2e97fca1fe4014bd237478bec7bbad";
         const res = await axios.get(url);
         const data = res.data.articles;
         setCard(data.map((e, i) => <Card key={i} data={e} />));
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
