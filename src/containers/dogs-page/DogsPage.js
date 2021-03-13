import React, { useState, useEffect } from "react";
import './DogsPage.scss'

export function DogsPage() {
  const [urlDog, setUrlDog] = useState("");

  useEffect(() => {
    if (urlDog === "") {
      loadDog();
    }
  }, []);

  const loadDog = async () => {
    await fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((response) => response.json())
      .then((data) => {
        setUrlDog(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      {!!urlDog && (
        <div className="container-box">
          <img src={urlDog} alt="random dog picture" className="container-box-img"/>
        </div>
      )}
    </div>
  );
}
