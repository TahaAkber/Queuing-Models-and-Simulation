// QUEUING MODEL
// G/G/1
function gg1() {
  const mean1 = document.getElementById("Mean1");
  const mean2 = document.getElementById("Mean2");
  const var1 = document.getElementById("var1");
  const var2 = document.getElementById("var2");

  let interarrival = document.getElementById("interarrival");
  let IA = 1 / mean1.value;
  interarrival.textContent = IA;

  let service = document.getElementById("service");
  let servicetime = 1 / mean2.value;
  service.innerText = servicetime;

  let rho = document.getElementById("rho");
  let P = IA / servicetime;
  rho.textContent = P;

  let Cs = var1.value / (1 / servicetime) ** 2;
  let Ca = var2.value / (1 / IA) ** 2;

  let lq = document.getElementById("lq");
  let Lq =
    (P ** 2 * (1 + Cs) * (Ca + P ** 2 * Cs)) /
    (2 * (1 - P) * (1 + P ** 2 * Cs));
  lq.textContent = Lq;

  let wq = document.getElementById("wq");
  let Wq = Lq / IA;
  wq.textContent = Wq;

  let w = document.getElementById("w");
  let ws = Wq + 1 / servicetime;
  w.textContent = ws;

  let l = document.getElementById("L");
  let L = IA * ws;
  l.textContent = L;

  mean1.value = "";
  mean2.value = "";
  var1.value = "";
  var2.value = "";
}

//M/G/1

function mg1() {
  const mean = document.getElementById("Mean");
  const maxvalue = document.getElementById("maxvalue").value;
  const minvalue = document.getElementById("minvalue").value;
  const container = document.getElementById("show");

  let interarrival = document.getElementById("interarrival");

  let IA = 1 / mean.value;
  interarrival.textContent = IA;

  let service = document.getElementById("service");
  let midpoint = (+maxvalue + +minvalue) / 2;
  let mew = 1 / midpoint;
  service.textContent = mew;

  let rho = document.getElementById("rho");
  let P = IA / mew;
  rho.textContent = P;

  let variance = document.getElementById("VARIANCE");
  let sigma = (+maxvalue - +minvalue) ** 2 / 12;
  variance.textContent = sigma;

  let lq = document.getElementById("lq");
  let Lq = IA ** 2 * sigma + P ** 2 / (2 * (1 - P));
  lq.textContent = Lq;

  let wq = document.getElementById("wq");
  let Wq = Lq / IA;
  wq.textContent = Wq;

  let w = document.getElementById("w");
  let ws = Wq + 1 / mew;
  w.textContent = ws;

  let l = document.getElementById("L");
  let L = IA * ws;
  l.textContent = L;

  mean.value = "";
  document.getElementById("maxvalue").value = "";
  document.getElementById("minvalue").value = "";
}
//M/M/1
function data() {
  const mean1 = document.getElementById("Mean1");
  const mean2 = document.getElementById("Mean2");
  let interarrival = document.getElementById("interarrival");

  let IA = 1 / mean1.value;
  interarrival.textContent = IA;

  let service = document.getElementById("service");
  let servicetime = 1 / mean2.value;
  service.innerText = servicetime;

  let rho = document.getElementById("rho");
  let P = IA / servicetime;
  rho.textContent = P;

  let lq = document.getElementById("lq");
  let Lq = Math.pow(P, 2) / (1 - P);
  lq.textContent = Lq;

  let wq = document.getElementById("wq");
  let Wq = Lq / IA;
  wq.textContent = Wq;

  let w = document.getElementById("w");
  let ws = Wq + 1 / servicetime;
  w.textContent = ws;

  let l = document.getElementById("L");
  let L = IA * ws;
  l.textContent = L;

  mean1.value = "";
  mean2.value = "";
}
//M/M/2
function mm2() {
  const mean1 = document.getElementById("Mean1");
  const mean2 = document.getElementById("Mean2");
  let interarrival = document.getElementById("interarrival");

  let IA = 1 / mean1.value;
  interarrival.textContent = IA;

  let service = document.getElementById("service");
  let servicetime = 1 / mean2.value;
  service.innerText = servicetime;

  let rho = document.getElementById("rho");
  let P = IA / (2 * servicetime);
  rho.textContent = P;

  let lq = document.getElementById("lq");
  let Lq = Math.pow(P, 2) / (1 - P);
  lq.textContent = Lq;

  let wq = document.getElementById("wq");
  let Wq = P / (2 * (servicetime - IA));
  wq.textContent = Wq;

  let w = document.getElementById("w");
  let ws = 1 / (2 * (servicetime - IA));
  w.textContent = ws;

  let l = document.getElementById("L");
  let L = P / (1 - P);
  l.textContent = L;

  mean1.value = "";
  mean2.value = "";
}
//M/G/2

function mg2() {
  const mean = document.getElementById("Mean");
  const maxvalue = document.getElementById("maxvalue").value;
  const minvalue = document.getElementById("minvalue").value;
  let c = document.getElementById("server").value;
  const container = document.getElementById("show");

  let interarrival = document.getElementById("interarrival");

  let IA = 1 / mean.value;
  interarrival.textContent = IA;

  let service = document.getElementById("service");
  let midpoint = (+maxvalue + +minvalue) / 2;
  let mew = 1 / midpoint;
  service.textContent = mew;

  let variance = document.getElementById("VARIANCE");
  let sigma = (+maxvalue - +minvalue) ** 2 / 12;
  variance.textContent = sigma;

  let rho = document.getElementById("rho");
  let P = IA / (c * mew);
  console.log(P);
  // C is the number of server
  rho.textContent = P;

  let lq = document.getElementById("lq");
  let Lq = (po(c, P) * (IA / mew) * P) / (factorialize(c) * (1 - P) ** 2);
  lq.textContent = Lq;

  let wq = document.getElementById("wq");
  let Wq = Lq / IA;
  wq.textContent = Wq;

  let w = document.getElementById("w");
  let ws = Wq + 1 / mew;
  w.textContent = ws;

  let l = document.getElementById("L");
  let L = IA * ws;
  l.textContent = L;

  mean.value = "";
  document.getElementById("maxvalue").value = "";
  document.getElementById("minvalue").value = "";
  document.getElementById("server").value = "";
}

function factorialize(num) {
  // If the number is less than 0, reject it.
  if (num < 0) return -1;
  // If the number is 0, its factorial is 1.
  else if (num == 0) return 1;
  // Otherwise, call the recursive procedure again
  else {
    return num * factorialize(num - 1);
  }
}
//G/G/2
function gg2() {
  const mean1 = document.getElementById("Mean1");
  const maxvalue = document.getElementById("maxvalue").value;
  const minvalue = document.getElementById("minvalue").value;
  const c = document.getElementById("serverno").value;

  let interarrival = document.getElementById("interarrival");
  let IA = 1 / minvalue;
  interarrival.textContent = IA;

  let service = document.getElementById("service");
  let midpoint = (+maxvalue + +minvalue) / 2;
  let mew = 1 / midpoint;
  service.textContent = mew;

  let rho = document.getElementById("rho");
  let P = IA / (c * mew);
  rho.textContent = P;

  let lq = document.getElementById("lq");
  let Lq =
    (po(c, P) * (IA / mew) ** c * P) / (factorialize(c) * Math.pow(1 - P, 2));
  lq.textContent = Lq;

  let variance = document.getElementById("VARIANCE");
  let sigma = (+maxvalue - +minvalue) ** 2 / 12;
  variance.textContent = sigma;

  let Cs = sigma / (1 / mew) ** 2;
  let Ca = 1;

  let wq = document.getElementById("wq");
  let new1 = Lq / IA;
  let wqs = (+Ca + +Cs) / 2;
  let res = new1 * wqs;

  wq.textContent = res;
  let res2 = res * IA;
  lq.textContent = res2;
  let w = document.getElementById("w");
  let ws = res + midpoint;
  w.textContent = ws;

  let l = document.getElementById("L");
  let L = IA * ws;
  l.textContent = L;
  mean1.value = "";
  document.getElementById("maxvalue").value = "";
  document.getElementById("minvalue").value = "";
  document.getElementById("serverno").value = "";
}

function po(c, P) {
  let denominator_sum = 0;
  for (let m = 0; m < c; m++) {
    denominator_sum += (c * P) ** m / factorialize(m);
  }
  denominator_sum += (c * P) ** c / (factorialize(c) * (1 - P));
  return (Po = 1 / denominator_sum);
}
