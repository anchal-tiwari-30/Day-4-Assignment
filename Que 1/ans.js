const l1 = 5;
const l2 = 6;
const l3 = 7;
const s = (l1 + l2 + l3) / 2;
const area = Math.sqrt(s * (s - l1) * (s - l2) * (s - l3));
console.log("Area of triangle is :", area.toFixed(2),"sq");