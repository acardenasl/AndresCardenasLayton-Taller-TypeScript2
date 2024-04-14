"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, website, imageUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.website = website;
        this.imageUrl = imageUrl;
    }
    return Serie;
}());
exports.Serie = Serie;
