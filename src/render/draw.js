import { state, config } from "../state/state.js";

export function draw(ctx, canv) {
    const gs = config.gs;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "lime";
    for (let i = 0; i < state.trail.length; i++) {
        ctx.fillRect(state.trail[i].x * gs, state.trail[i].y * gs, gs - 2, gs - 2);
    }

    ctx.fillStyle = "red";
    ctx.fillRect(state.ax * gs, state.ay * gs, gs - 2, gs - 2);
}