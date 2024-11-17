import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const port = process.env.PORT || process.argv[2] || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); 
app.use(express.json());

const videosFilePath = path.join(__dirname, "data", "videos.json");

const getVideos = () => {
    try {
      const data = fs.readFileSync(videosFilePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error reading videos.json:", error);
      return [];
    }
  };
const saveVideos = (videos) => fs.writeFileSync(videosFilePath, JSON.stringify(videos, null, 2));

app.get("/videos", (req, res) => {
    try {
        const videos = getVideos();
        const videoInfo = videos.map(({ id, title, channel, image }) => ({
            id, 
            title,
            channel,
            image,
        }));
        res.status(200).json(videoInfo);
    } catch (error) {
        console.error("Error fetching videos:", error);
        res.status(500).json({ message: "Error fetching videos"});
    }
});

app.get("/videos/:id", ( req, res ) => {
    try {
        const videos = getVideos();
        const video = videos.find((v) => v.id === req.params.id);
        if (!video) {
            return res.status(404).json({ message: "Video not found"});
        }
        res.status(200).json(video);
    } catch (error) {
        console.error("Error fetching video:", error)
        res.status(500).json({ message: "Error fetching video" });
    }
});

app.post("/videos", ( req, res ) => {
    try{
        const { title, description } = req.body;

        const newVideo = {
            id: uuidv4(),
            title,
            channel: "Channel Name",
            image: "http://localhost:8080/images/Upload-video-preview.jpg",
            description,
            views: "0",
            likes: "0",
            timeStamp: Date.now(),
            comments: [],
        };

        const videos = getVideos();
        videos.push(newVideo);
        saveVideos(videos);

        res.status(201).json(newVideo);
    } catch (error) {
        console.error("Error uploading video:", error);
        res.status(500).json({ message: "Error uploading video"});
    }
});

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.listen(port, () => console.log(`Listening on ${port}`));