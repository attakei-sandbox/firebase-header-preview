import * as functions from 'firebase-functions';
import { app } from './app';

export const fun = functions.https.onRequest(app);
