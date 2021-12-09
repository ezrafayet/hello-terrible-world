const { workerData, parentPort } = require('worker_threads')

let letter = 'h';

parentPort.postMessage(letter);