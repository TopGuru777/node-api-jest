import dotenv from 'dotenv';

dotenv.config();

interface Config {
  mongoUri: string;
  port: number;
}

const config: Config = {
  mongoUri: process.env.NODE_ENV === 'test' ? process.env.TEST_MONGO_URI || 'mongodb://localhost:27017/adacatest' : process.env.MONGO_URI || 'mongodb://localhost:27017/adaca',
  port: parseInt(process.env.PORT as string, 10) || 3000
};

export default config;