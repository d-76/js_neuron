const ACT_FUNCTION = {
	BINARY_STEP: (x) => x < 0 ? 0 : 1,
	SIGMOID: (x) => 1 / (1  + Math.exp(-x)),
	RELU: (x) => x <= 0 ? 0 : x,
};

module.exports.Neuron = class Neuron {
	constructor(inputs, weights, bias = 1, activationFunc = ACT_FUNCTION.SIGMOID) {
		this._inputs = inputs;
		this._weights = weights;
		this._bias = bias;
		this._activationFunc = activationFunc;
	}

	getOutput() {
	  return this._activation(this._inputs.map((it) => it.getOutput())
			.reduce((acc, it, index) => {
				return acc + it * this._weights[index];
			}, 0) + this._bias);
	}

	_activation(value) {
		return this._activationFunc(value);
	}
}

module.exports.Input = class Input {
	constructor(value) {
		this._value = value;
	}

	getOutput() {
		return this._value;
	}
}

module.exports.Net = class Net {
	constructor(inputs,neurons,outputs) {
		this._inputs = inputs;
		this._layers = neurons;
		this._outputs = outputs;
	}
}

const net = new Net([new Input(0), new Input(0)], []);
