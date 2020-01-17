import instance, { API_KEY } from '../utils/axiosConfig';

const getBBCNews = (req, res) => {
  const { page, pageSize } = req.query;

  instance.get('top-headlines/', {
    params: {
      page,
      pageSize,
      apiKey: API_KEY,
      sources: 'bbc-news',
    }
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.json(error);
  });
}

const getUSNews = (req, res) => {
  const { page, pageSize } = req.query;

  instance.get('top-headlines/', {
    params: {
      page,
      pageSize,
      apiKey: API_KEY,
      country: 'us',
    }
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.json(error);
  });
}

const getBusinessHeadlinesGermany = (req, res) => {
  const { page, pageSize } = req.query;

  instance.get('top-headlines/', {
    params: {
      page,
      pageSize,
      apiKey: API_KEY,
      country: 'de',
      category: 'business'
    }
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.json(error);
  });
}

const getHeadlinesTrump = (req, res) => {
  const { page, pageSize } = req.query;

  instance.get('top-headlines/', {
    params: {
      page,
      pageSize,
      apiKey: API_KEY,
      q: 'trump',
    }
  })
  .then(response => {
    res.json(response.data);
  })
  .catch(error => {
    res.json(error);
  });
}

export {
  getBBCNews,
  getUSNews,
  getBusinessHeadlinesGermany,
  getHeadlinesTrump,
};
