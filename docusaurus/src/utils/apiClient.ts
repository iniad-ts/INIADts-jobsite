import aspida from '@aspida/axios';
import api from 'api/$api';
import axios from 'axios';
import apiS3 from '../api/$api';

export const apiClient = api(aspida(axios.create({ withCredentials: true })));

export const s3Client = apiS3(aspida(axios.create()));
