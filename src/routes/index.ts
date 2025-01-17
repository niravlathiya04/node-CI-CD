import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to the TypeScript API! this is the first project so take it seriously' });
});

export default router;