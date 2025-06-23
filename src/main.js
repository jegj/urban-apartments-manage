import Alpine from "alpinejs";
import createTranslator, { defaultTranslations } from "./translation";

Alpine.data("translation", () => createTranslator(defaultTranslations));

window.Alpine = Alpine;

Alpine.start();
