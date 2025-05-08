import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
 res.json({ message: 'Hello World Express' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});