const runService = require('./runService.js');

(async () => {

  Promise.all([
    runService({workerNumber: 0}),
    runService({workerNumber: 1}),
    runService({workerNumber: 2}),
    runService({workerNumber: 3}),
    runService({workerNumber: 4}),
    runService({workerNumber: 5}),
    runService({workerNumber: 6}),
    runService({workerNumber: 7}),
    runService({workerNumber: 8}),
    runService({workerNumber: 9}),
    runService({workerNumber: 10}),
  ]).then((data)=>{
    console.log(data.join(''));
  }).catch((error) => {
    console.error(error);
  });
})();