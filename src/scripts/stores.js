import { writable } from 'svelte/store';
import { readable } from 'svelte/store';
import {windowWidth, windowHeight } from '../scripts/windowSize';

//exports

//export const themes = readable([]);
export const themes = readable([{name: 'themeA'}, {name: 'themeB'}, {name: 'themeC'}, {name: 'themeD'}, {name: 'themeE'}, {name: 'themeF'}, {name: 'themeG'}, {name: 'themeH'}, {name: 'themeI'}, {name: 'themeJ'}, {name: 'themeK'}, {name: 'themeJ'}, {name: 'themeL'}]);
export const mainSection = writable('themes');
export const flow = writable('themeList'); //themelist, createTheme, onboarding, deleteTheme, loading
export const apiKey = writable('');
export const binURL = writable('');
export const loading = writable(false);

//CREATE THEME VARS

//ui vars
export const createThemeUI = writable(false);
export const step = writable(1);
export const winWidth = writable(windowWidth());
export const winHeight = writable(windowHeight());

//capture where to pull styles from
export const styleSource = writable('local');

//capture which type of styles to include
export const styleTypeColor = writable(true); 
export const styleTypeText = writable(false);
export const styleTypeEffect = writable(false);