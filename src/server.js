import express from 'express';
import cors from 'cors';
import router from '../routes/routes';

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

app.listen(port, () => console.log(`listening on port ${port}!`));

export default app;
