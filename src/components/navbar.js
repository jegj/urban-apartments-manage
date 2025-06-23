export default () => ({
  active: false,

  init() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
    window.addEventListener("load", () => {
      if (window.scrollY > 10) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
});
