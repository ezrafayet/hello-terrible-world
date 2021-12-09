const { workerData, parentPort } = require('worker_threads')

let letter = ' ';

parentPort.postMessage(letter);