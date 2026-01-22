const express = require("express");
const app = express();

app.get("/lista.m3u", (req, res) => {
  res.set("Content-Type", "application/vnd.apple.mpegurl");

  res.send(`#EXTM3U

#EXTINF:-1, Meu Filme
#EXTVLCOPT:sub-file=https://drive.google.com/uc?export=download&id=1qUbG4CjRFdsW4xTnwSsmf6H0djndPhji
https://drive.google.com/uc?export=download&id=1-5qezhQBIHxkjBBRB0wjDSF-ZOFuGTsZ
`);
});

app.listen(3000, () => {
  console.log("IPTV rodando");
});
