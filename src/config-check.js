import config from '../config.json';
import { ConfigSchema } from './config';

ConfigSchema.parse(config);
