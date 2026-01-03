import { updatedatetime } from "./datetime.js";

const rightdiv = document.getElementById("rightdiv");
rightdiv.className =
  "flex flex-wrap gap-10 p-4 bg-gray-700 h-148 overflow-x-auto";
  const t=document.getElementById("time");
  t.className='text-xl w-50 mt-2  text-white-900 text-center ml-10'
  const da=document.getElementById("date");
  da.className='text-md  mt-2 w-70 text-center text-blue-600 ml-8'
  const dy=document.getElementById("day");
dy.className='text-xl text-white-500 mt-3 w-40 text-center ml-22'

 setInterval(()=>{
  updatedatetime(t,da,dy
  )},1000)

let currentAudio = null; 
let currentButton = null; 


async function fetchTracks() {
  try {
    const response = await fetch(
      "https://corsproxy.io/?https://api.deezer.com/chart/0/tracks"
    );
    const data = await response.json();
    const tracks = data.data; 
    console.log(tracks);
    console.log(data);

    tracks.forEach(track => {
      const card = document.createElement("div");
      card.className = "bg-gray-900 text-white p-3 rounded-lg w-48";

      const img = document.createElement("img");
      img.src = track.album.cover_medium;
      img.className = "rounded-md w-full";

      const title = document.createElement("h4");
      title.textContent = track.title;
      title.className = "mt-2 font-semibold text-sm";

      const artist = document.createElement("p");
      artist.textContent = track.artist.name;
      artist.className = "text-xs text-gray-400";

      const button = document.createElement("button");
      button.textContent = "▶";
      button.className = "bg-green-500 px-2 py-1 rounded mt-2 hover:bg-green-600";

     button.addEventListener("click", async() => {


 

  if (currentAudio && currentButton === button) {
    currentAudio.pause();
    currentButton.textContent = "▶";
    currentAudio = null;
    currentButton = null;
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentButton.textContent = "▶";
  }


  currentAudio = new Audio(track.preview);
  currentAudio.play();
  currentButton = button;
  currentButton.textContent = "⏸";
  console.log(track.preview);

  currentAudio.addEventListener("ended", () => {
    currentButton.textContent = "▶";
    currentAudio = null;
    currentButton = null;
  });
});


      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(artist);
      card.appendChild(button);
      rightdiv.appendChild(card);
     
    });
  } catch (error) {
    console.error("Fetch failed:", error);
  }
}
fetchTracks();

