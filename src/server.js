import express from "express";

const PORT = 4000;

const app = express();

const methodLogger = (req, res, next) => {
    console.log("METHOD:", req.method);
    next();
}
const routerLogger = (req, res, next) => {
    console.log("PATH:", req.path);
    next();
}
const timeLogger = (req, res, next) => {
    const date = new Date();
    console.log("Time:", `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`);
    next();
}
const securityLogger = (req, res, next) => {
    if(req.protocol === 'https') {
        console.log("secure");
    } else {
        console.log("insecure");
    }
    next();
}
const protectorMiddleware = (req, res, next) => {
    if(req.path === '/protected') {
        return res.send("protected page");
    } 
    next();
}
const home = (req, res) => {
    console.log("I will respond.");
    return res.send("hello");
}
const login = (req, res) => {
    return res.send("login");
}
app.use(methodLogger, routerLogger, timeLogger, securityLogger, protectorMiddleware);
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);