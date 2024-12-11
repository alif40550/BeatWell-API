import express from 'express';
import parser from '../middlewares/parser';
import router from '../routes/unrestricted';
import { PORT, PREDICTION_MODEL_URL } from '../utils/env';
// import { loadModel as predictionModelInit } from '../services/prediction';
import { loadModel as chatbotModelInit } from '../services/chatbot';
import { models } from '../models/Model';
import { initiateModel } from '../services/model';

const app = express();
const port = PORT || 3000;
let isModelInit = false;
/**
 * Initialize all required models.
 */
async function initializeModels() {
  try {
    console.log('Initializing models...');
    const predictionModel = await initiateModel(PREDICTION_MODEL_URL);
    console.log('Prediction model initialized');
    models.push(predictionModel);

    const chatbotModel = await chatbotModelInit();
    console.log('Chatbot model initialized');
    models.push(chatbotModel);

    console.log('All models successfully initialized');
    isModelInit = true;
  } catch (error) {
    console.error('Error initializing models:', error);
    process.exit(1); // Exit process if models fail to load
  }
}

/**
 * Start the server after initializing models.
 */
app.use(async (req, res, next) => {
  if (!isModelInit) {
    await initializeModels(); // Inisialisasi model jika belum selesai
  }
  next();
});

app.use(parser);
app.use(router);


function startServer() {
  initializeModels();
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
  });
}

export { app, startServer };
