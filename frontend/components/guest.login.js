export default () => ({
  errors: [],
  showPassword: false,
  pincode: '',

  init() {},

  validate() {
    this.errors = [];
    if (!this.pincode || this.pincode.trim() === '') {
      this.errors.push('Password is required.');
    }

    if (this.pincode.length < 6) {
      this.errors.push('Password must be at least 6 characters long.');
    }

    return this.errors.length === 0;
  },

  get isValid() {
    return this.errors.length === 0;
  },

  get error() {
    return this.errors.length > 0 ? this.errors[0] : '';
  },
});
