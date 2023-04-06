function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function spin() {
  document.addEventListener('click', () => {
  // Play the sound
//   wheel.play();

  const box = document.getElementById("box");
  const arrow_div = document.getElementById("arrow_div");
  const element = document.getElementById("mainbox");
  let SelectedItem = "";
  let SelectedItemColor = "";

  let MagicRoaster = shuffle([1890, 2250, 2610]);
  let Sepeda = shuffle([1850, 2210, 2570]); //Kemungkinan : 100%
  let RiceCooker = shuffle([1810, 2170, 2530]);
  let LunchBox = shuffle([1770, 2130, 2490]);
  let Sanken = shuffle([1750, 2110, 2470]);
  let Electrolux = shuffle([1630, 1990, 2350]);
  let JblSpeaker = shuffle([1570, 1930, 2290]);

  let Hasil = shuffle([
    MagicRoaster[0],
    Sepeda[0],
    RiceCooker[0],
    LunchBox[0],
    Sanken[0],
    Electrolux[0],
    JblSpeaker[0],
  ]);
  console.log(Hasil[0]);

  // get the value of selected item
  if (MagicRoaster.includes(Hasil[0])) SelectedItem = "₹ 7", SelectedItemColor = "#f6290c";
  if (Sepeda.includes(Hasil[0])) SelectedItem = "₹ 9", SelectedItemColor = "#f5b122";
  if (RiceCooker.includes(Hasil[0])) SelectedItem = "₹ 8", SelectedItemColor = "#e86c57";
  if (LunchBox.includes(Hasil[0])) SelectedItem = "₹ 2", SelectedItemColor = "#ff7cd8";
  if (Sanken.includes(Hasil[0])) SelectedItem = "₹ 6", SelectedItemColor = "#0a77d5";
  if (Electrolux.includes(Hasil[0])) SelectedItem = "₹ 4", SelectedItemColor = "#e86c57";
  if (JblSpeaker.includes(Hasil[0])) SelectedItem = "₹ 10", SelectedItemColor = "#0a77d5";

  // spin
  box.style.setProperty("transition", "all ease 5s");
  box.style.transform = "rotate(" + Hasil[0] + "deg)";
  arrow_div.style.setProperty("transition", "all ease 5s");
  // arrow_div.style.transform = "rotate(" + Hasil[0] + "deg)";
  element.classList.remove("animate");
  setTimeout(function () {
    element.classList.add("animate");
  }, 5000);

  // alert
  setTimeout(function () {
    // applause.play();
    // alert("Congratulations, You Won " + SelectedItem + " Reward.");
    document.getElementById("card-text").innerHTML =
      "You have won a reward of " + SelectedItem;
      document.getElementById("reward_card").style.display = "flex";
      document.getElementById("reward_card").style.backgroundColor = SelectedItemColor;
}, 5500);
  
  if(spinned===true){
 mainbox.style.display = "none"; 
  }
  // delay
  //   setTimeout(function () {
      //     box.style.setProperty("transition", "initial");
      //     box.style.transform = "rotate(90deg)";
      //   }, 6000);
    },{once: true});}