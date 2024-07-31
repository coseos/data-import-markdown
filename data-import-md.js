/** https://github.com/coseos/data-import-markdown */
import {micromark} from './micromark.js';
const DATA_IMPORT_ATTRIBUTE='data-import-md';
document.querySelectorAll(`[${DATA_IMPORT_ATTRIBUTE}]`).forEach(
    element=>fetch(element.getAttribute(DATA_IMPORT_ATTRIBUTE))
    .then(r=>r.text())
    .then(t => element.innerHTML = micromark(t))
);
