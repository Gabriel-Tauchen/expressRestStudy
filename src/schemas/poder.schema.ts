/**
 * @openapi
 * /poderes:
 *   get:
 *     tags: [Poderes]
 *     summary: Lista todos os poderes
 *     responses:
 *       200:
 *         description: Lista de poderes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Poder'
 *   post:
 *     tags: [Poderes]
 *     summary: Cria um novo poder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PoderInput'
 *     responses:
 *       201:
 *         description: Poder criado
 * /poderes/{id}:
 *   get:
 *     tags: [Poderes]
 *     summary: Busca um poder por ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Poder encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Poder'
 *       404:
 *         description: Poder não encontrado
 * components:
 *   schemas:
 *     Poder:
 *       type: object
 *       properties:
 *         idPoder:
 *           type: integer
 *         nome:
 *           type: string
 *         descricao:
 *           type: string
 *     PoderInput:
 *       type: object
 *       properties:
 *         nome:
 *           type: string
 *         descricao:
 *           type: string
 */
