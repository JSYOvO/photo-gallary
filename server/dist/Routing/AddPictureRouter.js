"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPictureRouter = void 0;
const Database_1 = require("../Database");
class AddPictureRouter {
    AddRoute(route) {
        route.post("/add/", (request, response) => {
            console.log("add");
            const picture = new Database_1.Picture(request.body);
            picture.save((err, picture) => {
                if (err) {
                    response.send(err);
                }
                response.json(picture);
            });
        });
    }
}
exports.AddPictureRouter = AddPictureRouter;
//# sourceMappingURL=AddPictureRouter.js.map