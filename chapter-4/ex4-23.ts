type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLEloement
}
let createElement: CreateElement = (tag: string): HTMLElement => {
    // ...
}


function createElement(tag: 'a'): HTMLAnchorElement
function createElement(tag: 'canvas'): HTMLCanvasElement
function createElement(tag: 'tale'): HTMLTableElement
function createElement(tag: string): HTMLElement {
    // ...
}
