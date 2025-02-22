"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NLPRapidAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const html_entities_1 = require("html-entities");
const cli_1 = require("../cli");
const translate_1 = require("../translate");
const util_1 = require("../util");
class NLPRapidAPI extends translate_1.Translate {
    constructor() {
        super();
        this.callTranslateAPI = async (valuesForTranslation) => {
            const response = await axios_1.default.post(`https://${NLPRapidAPI.endpoint}/v1/translate`, {
                text: (0, html_entities_1.encode)(valuesForTranslation.join(translate_1.Translate.sentenceDelimiter)),
                to: cli_1.argv.to,
                from: cli_1.argv.from,
            }, NLPRapidAPI.axiosConfig);
            return (0, html_entities_1.decode)(response.data.translated_text[cli_1.argv.to]);
        };
        if (cli_1.argv.certificatePath)
            NLPRapidAPI.axiosConfig.httpsAgent = (0, util_1.addCustomCert)(cli_1.argv.certificatePath);
    }
}
exports.NLPRapidAPI = NLPRapidAPI;
NLPRapidAPI.endpoint = 'nlp-translation.p.rapidapi.com';
NLPRapidAPI.axiosConfig = {
    headers: {
        'X-RapidAPI-Host': NLPRapidAPI.endpoint,
        'X-RapidAPI-Key': cli_1.argv.key,
        'Content-type': 'application/x-www-form-urlencoded',
    },
    responseType: 'json',
};
//# sourceMappingURL=nlp-rapid-api.js.map