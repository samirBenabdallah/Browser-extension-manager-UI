export function getTheme() {
  let theme = localStorage.theme;
  return theme;
}
function setThemeToLocalStorage(str) {
  localStorage.theme = str;
}
export default function setTheme(toggle = false) {
  let theme = getTheme();
  if (!theme) {
    setThemeToLocalStorage("light");
    theme = "light";
    document.body.classList.toggle(theme);
  } else if (toggle) {
    theme = theme === "dark" ? "light" : "dark";
    setThemeToLocalStorage(theme);
    document.body.classList.toggle("dark");
  } else if (theme === "dark") {
    document.body.classList.add("dark");
  }
}
export const lightBg =
  "bg-gradient-to-b from-[#ebf2fc] to-[#eef8f9] text-neutral-900";
export const darkBg =
  "dark:bg-gradient-to-b dark:from-[#040918] dark:to-[#091540] dark:text-neutral-0";
