const { Worker } = require('worker_threads')

const runService = ({workerNumber}) => new Promise((resolve, reject) => {

  const worker = new Worker(`./app/workers/worker${workerNumber}/service.js`, {});

  worker.on('message', resolve);
  
  worker.on('error', reject);
  
  worker.on('exit', (code) => {
    if (code !== 0)
      reject(new Error(`Worker stopped with exit code ${code}`));
  });
});

module.exports = runService;