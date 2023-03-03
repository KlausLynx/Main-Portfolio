const year = document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");