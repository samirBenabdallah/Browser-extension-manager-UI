import devlens from "./logo-devlens.svg";
import stylespy from "./logo-style-spy.svg";
import speedboost from "./logo-speed-boost.svg";
import jsonwizard from "./logo-json-wizard.svg";
import tabmasterpro from "./logo-tab-master-pro.svg";
import viewportbuddy from "./logo-viewport-buddy.svg";
import markupnotes from "./logo-markup-notes.svg";
import gridguides from "./logo-grid-guides.svg";
import palettepicker from "./logo-palette-picker.svg";
import linkchecker from "./logo-link-checker.svg";
import domsnapshot from "./logo-dom-snapshot.svg";
import consoleplus from "./logo-console-plus.svg";

const images = {
  "logo-devlens.svg": devlens,
  "logo-style-spy.svg": stylespy,
  "logo-speed-boost.svg": speedboost,
  "logo-json-wizard.svg": jsonwizard,
  "logo-tab-master-pro.svg": tabmasterpro,
  "logo-viewport-buddy.svg": viewportbuddy,
  "logo-markup-notes.svg": markupnotes,
  "logo-grid-guides.svg": gridguides,
  "logo-palette-picker.svg": palettepicker,
  "logo-link-checker.svg": linkchecker,
  "logo-dom-snapshot.svg": domsnapshot,
  "logo-console-plus.svg": consoleplus,
};
export default function getImage(name) {
  return images[name];
}
