const { workerData, parentPort } = require('worker_threads')

let letter = 'o';

parentPort.postMessage(letter);