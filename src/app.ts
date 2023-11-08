import express, { Request, Response, NextFunction, Express } from "express";
import cors from "cors";

const app: Express = express();
const PORT = 4020;

app.use(cors({
    // This will respond with the requesting origin's domain
    origin: true,
    // we could allow clients to use more custom headers here
}));

app.get("/hello", (req: Request, res: Response) => {
    res.send("Hello Nothing!");
});



app.listen(PORT, () =>
    console.log(`Server is listening on port ${PORT}...`)
);
