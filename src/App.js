import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import logo from "./images/logo.png";
const App = () => {
  const [tracks, setTracks] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getTracks = async () => {
    setIsLoading(true);
    console.log("keyword: " + keyword);
    let data = await fetch(
      `https://v1.nocodeapi.com/arifsiddiqui/spotify/ncSrOEnUcDcXfFrV/search?q=${keyword === "" ? "bollywood" : keyword}&type=track`
    );
    let convertedData = await data.json();
    setIsLoading(false);
    console.log(convertedData.tracks.items);
    let info= await fetch('https://v1.nocodeapi.com/arifsiddiqui/spotify/ncSrOEnUcDcXfFrV/browse/new');
    let convertedInfo = await info.json();
    console.log(convertedInfo.albums.items);
    setTracks(convertedData.tracks.items);
  };
  useEffect(() => {
    getTracks();
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex justify-content-between w-100">
          <div className="d-flex gap-2 align-items-center justify-content-center" >
            <img
              src={logo}
              alt=""
              style={{
                height: "3rem",
              }}
            />
            <a className="navbar-brand text-light" href="#">
            Music Mate
            </a>
          </div>
          <div
          className="d-flex "
            style={{
              width:'50%',
            }}
          >
            <input
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              className="form-control w-75 me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              onClick={getTracks}
              className="btn btn-outline-warning"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </nav>
      
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className={`row ${isLoading ? "" : "d-none"}`}>
          <div className="col-12 py-5 d-flex justify-content-center align-items-center">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>

        <div className="row">
          {tracks.map((element) => (
            <Card
              id={element.id}
              src={element.album.images[0].url}
              name={element.name}
              artist={element.album.artists[0].name}
              date={element.album.release_date}
              audiosrc={element.preview_url}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
