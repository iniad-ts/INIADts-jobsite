import aspida from '@aspida/axios';
import axios from 'axios';
import apiS3 from '../api/$api';

export const s3Client = apiS3(aspida(axios.create()));
