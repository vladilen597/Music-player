import signalFireSong from "../../resourses/DevilSoldHisSoul/SignalFire.mp3";
import signalFireThumbnail from "../../resourses/DevilSoldHisSoul/signalFireThumb.jpg";
import whatYouNeed from "../../resourses/HappyHour/WhatYouNeed.mp3";
import whatYouNeedThumbnail from "../../resourses/HappyHour/WhatYouNeedThumb.jpg";
import sleep from "../../resourses/RoyalBlood/sleep.mp3";
import sleepThumb from "../../resourses/RoyalBlood/sleepThumb.jpg";
import hereafter from "../../resourses/Architects/hereafter.mp3";
import hereafterThumb from "../../resourses/Architects/hereafterThumb.jpg";

const songs = [
  {
    id: 0,
    songName: "Signal Fire",
    songAuthor: "Devil Sold His Soul",
    songSrc: signalFireSong,
    albumCover: signalFireThumbnail,
  },
  {
    id: 1,
    songName: "What You Need",
    songAuthor: "Happy Hour",
    songSrc: whatYouNeed,
    albumCover: whatYouNeedThumbnail,
  },
  {
    id: 2,
    songName: "Sleep",
    songAuthor: "Royal Blood",
    songSrc: sleep,
    albumCover: sleepThumb,
  },
  {
    id: 3,
    songName: "Hereafter",
    songAuthor: "Architects",
    songSrc: hereafter,
    albumCover: hereafterThumb,
  },
];

export default songs;
