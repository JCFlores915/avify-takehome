import axios from "axios";
import { GenerationMixItem } from "../interfaces";
import { config } from "../config";

export const fetchGenerationMix = async (): Promise<GenerationMixItem[]> => {
  try {
    const response = await axios.get(config.API_URL);
    return response.data.data.generationmix;
  } catch (error) {
    throw error;
  }
};
