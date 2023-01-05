import $ from "jquery";

const colors = [
  "#a862ea",
  "#6383ea",
  "#8fce00",
  "#f782c2",
  "#e69138",
  "#6aa84f",
  "#571368",
  "#16537e",
  "#990000",
  "#20124d",
  "#741b47",
  "#cc0000",
  "#c27ba0",
  "#4c1130",
  "#f44336"
];

export function changeColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
  $("body, #new-quote, #tweet-quote").each(function () {
    $(this).css({ "background-color": color, transition: "1s" });
  });
  $("#text, #author, .fa-solid").each(function () {
    $(this).css({ color: color, transition: "1s" });
  });
}
