import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Header = styled.header`
  color: red;
  font-size: 2rem;
`;

const Title = styled.header`
  color: blue;
  font-size: 1rem;
`;

const Nasa = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14`
      )
      .then(res => {
        console.log("res", res);
        setPhotos(res.data);
      })
      .catch(err => console.log("oh no!"));
  }, []);

  return (
    <div>
      <Header as="h1" className="red">
        NASA Photo of the Day
      </Header>
      {/* <h1>NASA Photo of the Day</h1> */}
      <Title>
        <h3>{photos.title}</h3>
      </Title>
      <img src={photos.url} alt="No good" />
    </div>
  );
};

export default Nasa;
