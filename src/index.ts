import { ApiServer } from "./server";
import { DatabaseProvider } from "./database";

DatabaseProvider.configure({
    type: "postgres",
    database: "test",
    username: 'user',
    password: "pass",
    host: "localhost",
    port: 3000
});

const server = new ApiServer();
server.start(8080);