import express from 'express';
import {
  getBBCNews,
  getUSNews,
  getBusinessHeadlinesGermany,
  getHeadlinesTrump,
} from '../src/controllers/newsController';

const router = express.Router();

router.get('/bbc-news', getBBCNews);
router.get('/us-news', getUSNews);
router.get('/business-news', getBusinessHeadlinesGermany);
router.get('/trump-news', getHeadlinesTrump);

export default router;
