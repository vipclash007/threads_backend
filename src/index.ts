import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloGraphqlServer  from "./graphql/index";


async function init() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());


  app.get("/", (req, res) => {
    res.json({ message: "Server started" });
  });

  app.use("/graphql", expressMiddleware(await createApolloGraphqlServer()));

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

init();
