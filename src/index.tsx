import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Aluguel",
          type: "withdraw",
          category: "Aluguel",
          amount: 1000,
          createdAt: new Date("2022-02-01 01:00:00"),
        },
        {
          id: 2,
          title: "Trabalho Avulso",
          type: "deposit",
          category: "Dev",
          amount: 3500,
          createdAt: new Date("2022-01-27 15:43:32"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
