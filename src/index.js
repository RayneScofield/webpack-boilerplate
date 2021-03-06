import Tooltip from "./ninjia-ui/tooltip";
import Dropdown from "./ninjia-ui/dropdown";
import Tabs from "./ninjia-ui/tabs";
import Snackbar from "./ninjia-ui/snackbar";

// create a tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));

tooltip.init();

// create dropdown
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create Tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector("button");
button.addEventListener("click", () => {
  snackbar.show("you clicked me :)");
});
