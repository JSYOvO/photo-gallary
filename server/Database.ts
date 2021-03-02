import mongoose, { Schema } from "mongoose";
import { DB_URL } from "./DatabaseConfig";

export const PictureSchema = new Schema({
    Image: String,
    Name: String,
    Description: String,
    Tags: String,
});

export class Mongo {
    constructor(private url: string = DB_URL) {}

    public Connect(): void {
        mongoose.connect(this.url, (e) => {
            if (e) {
                console.log(`Unable to connect` + e);
            } else {
                console.log(`Connect to the database`);
            }
        });
    }
}

export const Picture = mongoose.model("picture", PictureSchema);
