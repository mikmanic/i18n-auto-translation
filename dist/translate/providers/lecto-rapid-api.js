"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LectoRapidAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const html_entities_1 = require("html-entities");
const cli_1 = require("../cli");
const translate_1 = require("../translate");
const util_1 = require("../util");
class LectoRapidAPI extends translate_1.Translate {
    constructor() {
        super();
        this.callTranslateAPI = async (valuesForTranslation) => {
            const response = await axios_1.default.post(`https://${LectoRapidAPI.endpoint}/v1/translate/text`, {
                texts: [(0, html_entities_1.encode)(valuesForTranslation.join(translate_1.Translate.sentenceDelimiter))],
                to: [cli_1.argv.to],
                from: cli_1.argv.from,
            }, LectoRapidAPI.axiosConfig);
            return (0, html_entities_1.decode)(response.data.translations[0].translated[0]);
        };
        if (cli_1.argv.certificatePath)
            LectoRapidAPI.axiosConfig.httpsAgent = (0, util_1.addCustomCert)(cli_1.argv.certificatePath);
    }
}
exports.LectoRapidAPI = LectoRapidAPI;
LectoRapidAPI.endpoint = 'lecto-translation.p.rapidapi.com';
LectoRapidAPI.axiosConfig = {
    headers: {
        'X-RapidAPI-Host': LectoRapidAPI.endpoint,
        'X-RapidAPI-Key': cli_1.argv.key,
        'Content-Type': 'application/json',
    },
    responseType: 'json',
};
//# sourceMappingURL=lecto-rapid-api.js.map