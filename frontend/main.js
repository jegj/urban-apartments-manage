import Alpine from 'alpinejs';
import navbar from './components/navbar';
import guest from './components/guest.login';
import './main.css';

Alpine.data('navbar', navbar);
Alpine.data('guest_login', guest);

window.Alpine = Alpine;

Alpine.start();
