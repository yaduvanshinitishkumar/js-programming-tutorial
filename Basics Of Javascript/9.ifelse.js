// ======================= Object =========================

const x = 10;
const y = 20;
const z = 10;
const w = null;
const t = undefined;

if (x == y) {
    console.log('x == y');
} else {
    console.log('x != y'); //
}


if (x == y) {
    console.log('x == y');

} else if (x == z) {
    console.log('x == z'); //

} else {
    console.log('x != y and x != z');
}

if (w) {
    console.log('if w is not null');

} else {
    console.log('else w is null'); //
}

if (!w) {
    console.log('if w is null...'); //
} else {
    console.log('if w is not null...');
}


const xVar = 10;
const yVar = "10";
const zVar = 30;

if (xVar == yVar) {
    console.log("xVar == yVar")
} else {
    console.log("xVar != yVar") //
}

if (xVar === yVar) {
    console.log("xVar === yVar")
} else {
    console.log("xVar !== yVar") //
}
