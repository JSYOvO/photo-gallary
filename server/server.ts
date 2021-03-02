import bodyParser from "body-parser";
import express from "express";
import cors, { CorsRequest } from "cors";
import * as core from "express-serve-static-core";
import { Mongo } from "./Database";
import { RoutingEngine } from "./Routing/RoutingEngine";

export abstract class Server {
    private router!: core.Router;

    constructor(
        private port: number = 3000,
        private app: core.Express = express(),
        private mongo: Mongo = new Mongo(),
        private routingEngine: RoutingEngine = new RoutingEngine()
    ) {}

    protected abstract AddRouting(
        routingEngine: RoutingEngine,
        router: core.Router
    ): void;

    public Start(): void {
        this.app.use(bodyParser.json({ limit: `100mb` }));
        this.app.use(
            bodyParser.urlencoded({ limit: `100mb`, extended: true })
        );

        this.mongo.Connect();
        this.router = express.Router();
        this.AddRouting(this.routingEngine, this.router);
        this.app.use(this.router);

        this.OnStart();
        this.app.listen(this.port, () => {
            console.log(
                `Express server running on port ${this.port}`
            );
        });
    }

    protected OnStart(): void {
        this.app.get("/", (request: any, response: any) => {
            response.send(`Hello node/express server!!`);
        });
    }

    public WithCorsSupport(): Server {
        this.app.use(cors());
        return this;
    }
}
