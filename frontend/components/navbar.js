export default () => ({
  active: false,
  lang: 'en',

  init() {
    const params = new URLSearchParams(window.location.search);
    if (params.has('lang')) {
      const lang = params.get('lang');
      if (lang === 'en' || lang === 'es') {
        this.lang = lang;
      } else {
        this.lang = 'en';
      }
    } else {
      this.lang = 'en';
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
    window.addEventListener('load', () => {
      if (window.scrollY > 10) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
});
