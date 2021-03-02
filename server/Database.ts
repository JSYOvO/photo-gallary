import mongoose, { Schema } from "mongoose";

export const PictureSchema = new Schema({
    Image: String,
    Name: String,
    Description: String,
    Tags: String,
});

export class Mongo {
    constructor(
        private url: string = "mongodb+srv://jsyovo:jsyovo@cluster0.e4rch.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ) {}

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
