import express from "express";

const PORT = 4000;

const app = express();

const hondleHome = (req, res) => {
    return res.sendfile(__dirname + "/home.html");
}
const handleLogin = (req, res) => {
    return res.send("Login here.");
}

app.get("/", hondleHome);
app.get("/login", handleLogin)

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);