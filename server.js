const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("IPTV API online 🚀");
});

app.get("/playlist.m3u", (req, res) => {
  res.setHeader("Content-Type", "audio/x-mpegurl");

  const playlist = `#EXTM3U

#EXTINF:-1, Meu Filme
https://drive.google.com/uc?export=download&id=1-5qezhQBIHxkjBBRB0wjDSF-ZOFuGTsZ

#EXTINF:-1, Legenda
https://drive.google.com/uc?export=download&id=1qUbG4CjRFdsW4xTnwSsmf6H0djndPhji
`;

  res.send(playlist);
});

app.listen(port, () => {
  console.log("IPTV rodando na porta " + port);
});
