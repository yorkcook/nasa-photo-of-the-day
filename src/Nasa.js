import React, { useState, useEffect } from "react";
import axios from "axios";

const Nasa = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`
      )
      .then(res => setPhotos(res.data))
      .catch(err => console.log("oh no!"));
  }, []);

  return (
    <div>
      <h1>NASA Photo of the Day</h1>
      <h3>{photos.title}</h3>
      <img src={photos.url} />
    </div>
  );
};

export default Nasa;
