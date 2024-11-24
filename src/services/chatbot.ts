// import * as tf from '@tensorflow/tfjs-node';
import * as tf from '@tensorflow/tfjs';
import { CHATBOT_CLASSES_URL, CHATBOT_INTENTS_URL, CHATBOT_MODEL_URL, CHATBOT_WORDS_URL } from '../utils/env';
import fs from 'fs';
import natural from 'natural';

let model: tf.LayersModel;

const lemmatizer = (text: string) => natural.StemmerId.stem(text);

const intents = JSON.parse(fs.readFileSync(CHATBOT_INTENTS_URL, 'utf-8'));
const words = JSON.parse(fs.readFileSync(CHATBOT_WORDS_URL, 'utf-8')) as string[];
const classes = JSON.parse(fs.readFileSync(CHATBOT_CLASSES_URL, 'utf-8')) as string[];

type TIntent = {
  tag: string;
}

export const loadModel = async () => {
  const modelUrl = CHATBOT_MODEL_URL;
  try {
    model = await tf.loadLayersModel(modelUrl);
  } catch (error) {
    console.log('🚀 ~ loadModel ~ error:', error);
  }
};

const cleanUpSentence = (sentence: string) => {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(sentence.toLowerCase());
  return tokens.map((token) => lemmatizer(token));
};

const bow = (sentence: string, words: string[]) => {
  const sentenceWords = cleanUpSentence(sentence);
  const bag = Array(words.length).fill(0);

  sentenceWords.forEach((word) => {
    const index = words.indexOf(word);
    if (index > -1) {
      bag[index] = 1;
    }
  });

  return tf.tensor2d([bag]);
};

export const predictClass = async (sentence: string) => {
  const inputTensor = bow(sentence, words);
  const predictions = model.predict(inputTensor) as tf.Tensor;
  const predictionArray = predictions.arraySync() as number[][];
  const maxIndex = predictionArray[0].indexOf(Math.max(...predictionArray[0]));
  return classes[maxIndex];
};

export const getResponse = (tag: string) => {
  const intent = intents.intents.find((intent: TIntent) => intent.tag === tag);
  if (intent) {
    return intent.responses[
      Math.floor(Math.random() * intent.responses.length)
    ];
  }
  return 'Maaf, saya tidak mengerti.';
};
