import { state, config } from "../state/state.js";

export function update() {
    state.px += state.xv;
    state.py += state.yv;
    if (state.px < 0) state.px = config.tc - 1;
    if (state.px > config.tc - 1) state.px = 0;
    if (state.py < 0) state.py = config.tc - 1;
    if (state.py > config.tc - 1) state.py = 0;

    for (let i = 0; i < state.trail.length; i++) {
        if (state.trail[i].x == state.px && state.trail[i].y == state.py) {
            state.tail = 5;
        }
    }
    state.trail.push({ x: state.px, y: state.py });
    while (state.trail.length > state.tail) state.trail.shift();

    if (state.ax == state.px && state.ay == state.py) {
        state.tail++;
        state.ax = Math.floor(Math.random() * config.tc);
        state.ay = Math.floor(Math.random() * config.tc);
    }
}