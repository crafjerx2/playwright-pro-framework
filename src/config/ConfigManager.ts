import { config } from "dotenv";

export class ConfigManager {
  private static instance: ConfigManager;
  public readonly environment: string;
  public readonly baseUrl: string;

  private constructor() {
    this.environment = process.env.NODE_ENV || "QA";
    this.baseUrl = process.env.BASE_URL || "https://www.saucedemo.com";
  }

  public static getInstance(): ConfigManager {
    if (!ConfigManager.instance) ConfigManager.instance = new ConfigManager();

    return this.instance;
  }
}
