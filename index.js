const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBAtteries = batteryBatches.reduce((acumulator,currrentBatch) =>{
    return acumulator + currrentBatch;
},0);

