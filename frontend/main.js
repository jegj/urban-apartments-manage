import Alpine from 'alpinejs';
import createTranslator, { defaultTranslations } from './stores/translation';
import navbar from './components/navbar';

Alpine.data('translation', () => createTranslator(defaultTranslations));
Alpine.data('navbar', navbar);

window.Alpine = Alpine;

Alpine.start();
