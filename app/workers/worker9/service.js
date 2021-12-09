const { workerData, parentPort } = require('worker_threads')

let letter = 'l';

parentPort.postMessage(letter);