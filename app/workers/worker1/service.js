const { workerData, parentPort } = require('worker_threads')

let letter = 'e';

parentPort.postMessage(letter);