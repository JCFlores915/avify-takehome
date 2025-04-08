import axios from "axios";
import { fetchGenerationMix } from "../services/energyService";
import { config } from "../config";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("fetchGenerationMix", () => {
  const mockData = [
    { fuel: "wind", perc: 40 },
    { fuel: "solar", perc: 25 },
  ];

  it("should fetch and return generation mix data", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        data: {
          generationmix: mockData,
        },
      },
    });

    const result = await fetchGenerationMix();

    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(mockedAxios.get).toHaveBeenCalledWith(config.API_URL);
    expect(result).toEqual(mockData);
  });

  it("should throw an error when axios request fails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("API error"));

    await expect(fetchGenerationMix()).rejects.toThrow("API error");
    expect(mockedAxios.get).toHaveBeenCalledWith(config.API_URL);
  });
});
