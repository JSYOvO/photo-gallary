"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = exports.Mongo = exports.PictureSchema = void 0;
const mongoose_1 = __importStar(require("mongoose"));
exports.PictureSchema = new mongoose_1.Schema({
    Image: String,
    Name: String,
    Description: String,
    Tags: String,
});
class Mongo {
    constructor(url = "mongodb+srv://jsyovo:jsyovo@cluster0.e4rch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority") {
        this.url = url;
    }
    Connect() {
        mongoose_1.default.connect(this.url, (e) => {
            if (e) {
                console.log(`Unable to connect` + e);
            }
            else {
                console.log(`Connect to the database`);
            }
        });
    }
}
exports.Mongo = Mongo;
exports.Picture = mongoose_1.default.model("picture", exports.PictureSchema);
//# sourceMappingURL=Database.js.map