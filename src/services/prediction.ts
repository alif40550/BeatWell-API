import * as tf from '@tensorflow/tfjs';

const loadModel = async () => {
  const modelUrl = process.env.PREDICTION_MODEL_URL!;
  const model = await tf.loadLayersModel(modelUrl, { strict: false });
  return model;
};

const makePrediction = async (userData: number[]) => {
  const inputTensor = tf.tensor2d([userData], [1, 14]);
  const data = await loadModel().then(async (model) => {
    const outputTensor = model.predict(inputTensor) as tf.Tensor;
    const result = await outputTensor.data();
    return result[0] as number;
  });
  return data * 100;
};

export default makePrediction;
