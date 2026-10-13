import { update } from "./logic/update.js";
import { draw } from "./render/draw.js";
import { keyPush } from "./input/keyboard.js";

const canv = document.getElementById("gc");
const ctx = canv.getContext("2d");

document.addEventListener("keydown", keyPush);
setInterval(() => { update(); draw(ctx, canv); }, 1000 / 15);