const express = require("express");
const albumsData = require("./albums.json");
const app = express();
app.use(express.json());

app.get("/albums", (req, res) => {
  res.send(albumsData);
});

app.get("/albums/:albumId", (req, res) => {
  const albumId = req.params.albumId;
  const album = albumsData.find((album) => album.albumId === albumId);
  res.send(album);
});

app.post("/albums", (req, res) => {
  const newAlbum = req.body;
  albumsData.push(newAlbum);
  res.send("Album added successfully!");
});

app.delete("/albums/:albumID", (req, res) => {
  console.log("DELETE /albums route");
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
