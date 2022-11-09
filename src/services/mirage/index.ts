import { Model, createServer, Factory } from "miragejs";
import faker from "faker";

type TypeUser = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<TypeUser>>({}),
    },
    factories: {
      user: Factory.extend({
        name(index: number) {
          return `User ${index + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(15);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 8);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;
      this.get("/users");
      this.post("/users");
      this.namespace = "";
      this.passthrough();
    },
  });
  return server;
}
