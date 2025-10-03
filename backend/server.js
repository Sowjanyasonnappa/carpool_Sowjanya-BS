const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors({ 
  origin: "http://localhost:5173",  
  credentials: true               
}));

app.use(express.json());
app.post("/api/auth/login", (req, res) => {
  console.log(" Received body:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password required" });
  }
  if (email === "sowjanya08@gmail.com" && password === "1234") {
    return res.json({
      token: "dummy-jwt-token",   
      user: { email }         
    });
  } else {
    return res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log(" Server running on http://localhost:5000");
});
