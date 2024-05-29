import express from 'express';

const router = express.Router();

router.get('/user', (req, res) => {
  console.log('router works');
});

export default router;