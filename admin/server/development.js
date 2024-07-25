import 'dotenv/config';
import {Central} from '@lionrockjs/central';
import Server from './Server.mjs';

Central.ENV = Central.ENV_DEVE;

(async () => {
  const s = new Server(parseInt(process.env.PORT ?? '8000') + 9);
  await s.setup();
  await s.listen();
})();
