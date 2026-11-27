import express from "express";
import sequelize from './config/db.js';
import users from './routes/UserRoutes.js';

const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
});

app.use("/api/users", users);

const PORT = process.env.PORT || 3000;

await sequelize.sync();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));