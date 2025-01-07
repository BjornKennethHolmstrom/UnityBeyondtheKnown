// src/lib/i18n/index.js
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

register('en', () => import('./locales/en.json'));
register('sv', () => import('./locales/sv.json'));
register('ru', () => import('./locales/ru.json'));
register('zh', () => import('./locales/zh.json'));

init({
  fallbackLocale: 'en',
  initialLocale: browser ? window.navigator.language : 'en',
});
