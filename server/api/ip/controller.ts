import ip from 'ip';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: ip.address() }),
}));
