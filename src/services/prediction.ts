// import { app } from '../libs/server';
import tf from '../libs/tfjs';
import { models } from '../models/Model';
import { PREDICTION_MODEL_URL } from '../utils/env';
import { initiateModel } from './model';

// let model: tf.LayersModel;
const modelUrl = PREDICTION_MODEL_URL;

export const loadModel = async () => {
  return initiateModel(modelUrl);
};

const standardScaler = (data: number[]) => {
  const tensorData = tf.tensor(data);
  const mean = tensorData.mean(0);
  const stdDev = tensorData.sub(mean).pow(2).mean(0).sqrt();

  const normalizedData = tensorData.sub(mean).div(stdDev);
  return normalizedData.arraySync();
};

export const makePrediction = async (userData: number[]) => {
  try {
    userData = standardScaler(userData) as number[];
    const inputTensor = tf.tensor2d(userData, [1, 14]);
    console.log('🚀 ~ makePrediction ~ model:', models[0]);
    const outputTensor = models[0].predict(inputTensor) as tf.Tensor;
    const result = await outputTensor.data();
    const data = result[0] as number;
    return Math.round(data * 100);
  } catch (error) {
    console.log('🚀 ~ makePrediction ~ error:', error);
    throw new Error('Prediction failed');
  }
};
