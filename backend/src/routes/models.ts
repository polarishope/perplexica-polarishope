import express from 'express';
import logger from '../utils/logger';
import {
  getAvailableChatModelProvidersFrontend,
  getAvailableEmbeddingModelProvidersFrontend,
} from '../lib/providersFrontend';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [chatModelProviders, embeddingModelProviders] = await Promise.all([
      getAvailableChatModelProvidersFrontend(),
      getAvailableEmbeddingModelProvidersFrontend(),
    ]);

    res.status(200).json({ chatModelProviders, embeddingModelProviders });
  } catch (err) {
    res.status(500).json({ message: 'An error has occurred.' });
    logger.error(err.message);
  }
});

export default router;
