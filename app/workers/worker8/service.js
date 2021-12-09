const { workerData, parentPort } = require('worker_threads')

let letter = 'r';

parentPort.postMessage(letter);