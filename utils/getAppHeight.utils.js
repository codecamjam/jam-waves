const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};

export const getAppHeight = () => {
  window.addEventListener("resize", appHeight);
  appHeight();
};
