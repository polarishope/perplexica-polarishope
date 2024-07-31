import express from "express";
import {
  getAvailableChatModelProvidersFrontend,
  getAvailableEmbeddingModelProvidersFrontend,
} from "../lib/providersFrontend";
import {
  getGroqApiKey,
  getOllamaApiEndpoint,
  getOpenaiApiKey,
  updateConfig,
} from "../config";

const router = express.Router();

router.get("/", async (_, res) => {
  const config = {};

  const [chatModelProviders, embeddingModelProviders] = await Promise.all([
    getAvailableChatModelProvidersFrontend(),
    getAvailableEmbeddingModelProvidersFrontend(),
  ]);

  config["chatModelProviders"] = {};
  config["embeddingModelProviders"] = {};

  for (const provider in chatModelProviders) {
    config["chatModelProviders"][provider] = Object.keys(
      chatModelProviders[provider]
    );
  }

  for (const provider in embeddingModelProviders) {
    config["embeddingModelProviders"][provider] = Object.keys(
      embeddingModelProviders[provider]
    );
  }

  config["openaiApiKey"] = "fakekey";
  config["ollamaApiUrl"] = getOllamaApiEndpoint();
  config["groqApiKey"] = "fakekey";

  res.status(200).json(config);
});

router.post("/", async (req, res) => {
  /*
  const config = req.body;

  const updatedConfig = {
    API_KEYS: {
      OPENAI: config.openaiApiKey,
      GROQ: config.groqApiKey,
    },
    API_ENDPOINTS: {
      OLLAMA: config.ollamaApiUrl,
    },
  };

  updateConfig(updatedConfig);
  */

  res.status(200).json({ message: "Config updated" });
});

export default router;
