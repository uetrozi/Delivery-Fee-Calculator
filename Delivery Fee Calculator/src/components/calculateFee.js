
const cV = 20
const dD = 2235
const nI = 4

function CalculateFee(cV, dD, nI){
  let fee = 0;

  if (dD >= 0 && dD <= 1000) {
    fee += 2;
  } else if (dD > 1000) {
    const additionalFee = Math.floor((dD - 1000) / 500);
    console.log(additionalFee);
    fee += 2 + additionalFee;
  }
  console.log(fee);

  if (cV >= 200) {
    fee = 0;
  }

  console.log(fee);

  if (fee > 15) {
    fee = 15;
  }

  return fee;
}

const result = CalculateFee(dD, cV, nI);

console.log(result);


export default CalculateFee;

