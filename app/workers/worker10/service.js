const { workerData, parentPort } = require('worker_threads')

let letter = 'd';

parentPort.postMessage(letter);