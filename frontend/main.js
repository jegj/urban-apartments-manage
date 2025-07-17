import Alpine from 'alpinejs';
import navbar from './components/navbar';
import './main.css';

Alpine.data('navbar', navbar);

window.Alpine = Alpine;

Alpine.start();
