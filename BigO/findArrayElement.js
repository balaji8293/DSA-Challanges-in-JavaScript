const everyone = ["dory", "bruce", "marlin", "nemo", "gill", "bloat"];
// const large = new Array(100).fill("nemo");
const fountNemo = (arr) => {
  // let t0 = performance.now();
  for (let i = 0; i <= arr.length; i++) {
    console.log("logged");
    if (arr[i] == "nemo") {
      console.log("Found Nemo !");
      break;
    }
  }
  // let t1 = performance.now();
  // console.log("Call to find Nemo took ", t1 - t0, " miliseconds.");
};
fountNemo(everyone);
// O(n);