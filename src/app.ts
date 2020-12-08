import express from 'express';

export const app = express();

const router = express.Router();
app.use(router);

type Content = {
  path: string;
  headers: { [key: string]: string; };
}

router.get('*', (req, res) => {
  let content = {
    path: req.path,
    headers: req.headers,
  };
  res.send(JSON.stringify(content));
});

