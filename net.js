const {Input, Neuron}  = require('./neuron.js');

const input1 = new Input(1);
const input2 = new Input(1);
const input3 = new Input(2);
const input4 = new Input(2);

const neuron1 = new Neuron([input1, input2, input3, input4], [0.1, 0.4, 0.99, 0.2]);
const neuron2 = new Neuron([input1, input2, input3, input4], [0.3, 0.24, 0.18, 0.1]);
const neuron3 = new Neuron([input1, input2, input3, input4], [0.14, 0.18, 0.22, 0.33]);
const neuron4 = new Neuron([input1, input2, input3, input4], [0.8, 0.53, 0.42, 0.19]);

const outputNeuron = new Neuron([neuron1, neuron2, neuron3, neuron4], [0.2, 0.3, 0.1, 0.4]);

console.log(outputNeuron.getOutput());
