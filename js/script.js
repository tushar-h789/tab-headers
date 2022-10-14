tabcontent = document.querySelectorAll(".tabcontent");
tablinks = document.querySelectorAll(".tablink");

function openCity(cityName, elmnt, color) {
  tabcontent, tablinks;

  let arr = Array.from(tabcontent);

  arr.map((item) => {
    item.style.display = "none";
  });

  let arr2 = Array.from(tablinks);

  arr2.map((item) => {
    item.style.backgroundColor = "";
  });

  document.getElementById(cityName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
