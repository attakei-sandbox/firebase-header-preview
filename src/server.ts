/**
 * Endpoint of express server
 */
import { app } from './app';

const port = parseInt(process.env.PORT || '3000');

app.listen(port, '0.0.0.0', () => {
  console.log(`Listening on 0.0.0.0:${port}`)
});
