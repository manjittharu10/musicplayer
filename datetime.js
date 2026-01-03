const  updatedatetime = function (a, b, c) {
  const data = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const date = new Date();

  let Hours = date.getHours();
  let Minutes = date.getMinutes();
  let sec = date.getSeconds();

  const day = data[date.getDay()];

  let tarik = date.getDate();
  let mahina = date.getMonth() + 1; 
  let sale = date.getFullYear();

  
  tarik = tarik < 10 ? "0" + tarik : tarik;
  mahina = mahina < 10 ? "0" + mahina : mahina;
  Hours = Hours < 10 ? "0" + Hours : Hours;
  Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
  sec = sec < 10 ? "0" + sec : sec;

  a.textContent = `Time: ${Hours}:${Minutes}:${sec}`;
  b.textContent = `Date: Tarik:${tarik} Mahina:${mahina} Sale:${sale}`;
  c.textContent = `Day: ${day}`;
};


export { updatedatetime };







