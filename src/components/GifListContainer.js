import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    fetchGIFs();
  }, []);

  function fetchGIFs(query = "dogs") {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=ddJc5YmyIUMlRZYGwQd7fnLSfN8dulpx&limit=3`
    )
      .then((r) => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }

  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs} />
      <GifSearch fetchGIFs={fetchGIFs} />
    </div>
  );
}

export default GifListContainer;