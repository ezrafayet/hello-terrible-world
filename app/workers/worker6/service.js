const { workerData, parentPort } = require('worker_threads')

let letter = 'w';

parentPort.postMessage(letter);