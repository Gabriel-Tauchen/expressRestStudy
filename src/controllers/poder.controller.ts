import { Request, Response } from 'express';
import * as poderRepository from '../repositories/poder.repository';

export const getAllPoderesController = async (req: Request, res: Response) => {
  const poderes = await poderRepository.getAllPoderes();
  res.json(poderes);
};

export const getPoderByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const poder = await poderRepository.getPoderById(id);
  if (poder) {
    res.json(poder);
  } else {
    res.status(404).json({ message: 'Poder not found' });
  }
};

export const createPoderController = async (req: Request, res: Response) => {
  const { nome, descricao } = req.body;
  const newPoder = await poderRepository.createPoder({ nome, descricao });
  res.status(201).json(newPoder);
};

export const updatePoderController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nome, descricao } = req.body;
  try {
    const updatedPoder = await poderRepository.updatePoder(id, { nome, descricao });
    res.json(updatedPoder);
  } catch (error) {
    res.status(404).json({ message: 'Poder not found' });
  }
};

export const deletePoderController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const deletedPoder = await poderRepository.deletePoder(id);
    res.json({ message: 'Poder deleted', deletedPoder });
  } catch (error) {
    res.status(404).json({ message: 'Poder not found' });
  }
};
