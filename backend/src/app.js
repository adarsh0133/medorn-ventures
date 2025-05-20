const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 3000;
require("./models/db.js").connectDatabase();

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", require("./routes/userRoutes.js"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    user: {
      name: "Test User",
      email: "test@example.com",
    },
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
