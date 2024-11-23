// import * as tf from '@tensorflow/tfjs-node';
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
  // console.log('🚀 ~ loadModel ~ modelUrl:', modelUrl);
  return model;
};

const standardScaler = (data: number[]) => {
  const tensorData = tf.tensor(data);
  const mean = tensorData.mean(0);
  const stdDev = tensorData.sub(mean).pow(2).mean(0).sqrt();

  const normalizedData = tensorData.sub(mean).div(stdDev);
  return normalizedData.arraySync();
};

const makePrediction = async (userData: number[]) => {
  userData = standardScaler(userData) as number[];
  const inputTensor = tf.tensor2d(userData, [1, 14]);
  const data = await loadModel().then(async (model) => {
    // model.trainableWeights[0].print();
    const outputTensor = model.predict(inputTensor) as tf.Tensor;
    const result = await outputTensor.data();
    console.log('🚀 ~ data ~ result:', result);
    return result[0] as number;
  });
  return Math.round(data * 100);
};

export default makePrediction;
