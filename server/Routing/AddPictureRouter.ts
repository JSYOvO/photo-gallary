import { IRouter } from "./Router";
import { Picture } from "../Database";
import { Request, Response } from "express";

export class AddPictureRouter implements IRouter {
    public AddRoute(route: any): void {
        route.post(
            "/add/",
            (request: Request, response: Response) => {
                console.log("add");
                const picture = new Picture(request.body);
                picture.save((err: any, picture: any) => {
                    if (err) {
                        response.send(err);
                    }
                    response.json(picture);
                });
            }
        );
    }
}
