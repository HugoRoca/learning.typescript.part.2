import { Controller } from "./controller";
import { HttpServer } from "../server/httpServer";
import { Request, Response } from "restify";

export class CustomerController implements Controller {
    initialize(httpServer: HttpServer): void {
        httpServer.get('customer', this.list.bind(this));
        httpServer.get('customer/:id', this.getById.bind(this));
        httpServer.post('customer', this.create.bind(this));
        httpServer.put('customer/:id', this.update.bind(this));
        httpServer.del('customer/:id', this.remove.bind(this));
    }

    private async list(req: Request, res: Response): Promise<void> {

    }

    private async getById(req: Request, res: Response): Promise<void> {

    }

    private async create(req: Request, res: Response): Promise<void> {

    }

    private async update(req: Request, res: Response): Promise<void> {

    }

    private async remove(req: Request, res: Response): Promise<void> {

    }
}