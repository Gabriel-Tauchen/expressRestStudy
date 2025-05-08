import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import poderRoutes from './routes/poder.route';
import helloRoutes from './routes/hello.route';
const app = express();
app.use(express.json());
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Divindades API',
      version: '1.0.0',
      description: 'API para gerenciar dados no cenário do Thor',},},
  apis: ['./src/schemas/*.ts'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', helloRoutes)
app.use('/poderes', poderRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);});
