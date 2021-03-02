import { IRouter } from "./Router";
import { Picture } from "../Database";
import { Request, Response } from "express";

export class DeletePictureRouter implements IRouter {
    public AddRoute(route: any): void {
        route.post(
            "/delete/",
            (request: Request, response: Response) => {
                console.log(request.body);
            }
        );
    }
}
