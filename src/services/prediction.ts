import * as tf from '@tensorflow/tfjs';
import { PREDICTION_MODEL_URL } from '../utils/env';

const loadModel = async () => {
  const modelUrl = PREDICTION_MODEL_URL;
  try {
    await tf.loadLayersModel(modelUrl);
  } catch (error) {
    console.log('🚀 ~ loadModel ~ error:', error);
  }
  const model = await tf.loadLayersModel(modelUrl, { strict: false });
  console.log('🚀 ~ loadModel ~ modelUrl:', modelUrl);
  return model;
};

const makePrediction = async (userData: number[]) => {
  const inputTensor = tf.tensor2d([userData], [1, 14]);
  const data = await loadModel().then(async (model) => {
    const outputTensor = model.predict(inputTensor) as tf.Tensor;
    const result = await outputTensor.data();
    return result[0] as number;
  });
  return Math.round(data * 100);
};

export default makePrediction;
