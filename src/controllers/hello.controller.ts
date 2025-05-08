import { Request, Response } from 'express';

export const helloController=(req: Request, res: Response) => {
  res.json({ message: 'UNIFEI PBLC01 - API da Modelagem Thor' });
};
