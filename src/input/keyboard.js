import { state } from "../state/state.js";

export function keyPush(evt) {
    switch (evt.keyCode) {
        case 37: state.xv = -1; state.yv = 0; break;
        case 38: state.xv = 0;  state.yv = -1; break;
        case 39: state.xv = 1;  state.yv = 0; break;
        case 40: state.xv = 0;  state.yv = 1; break;
    }
}