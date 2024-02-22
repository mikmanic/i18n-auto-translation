"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepLFreeAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const html_entities_1 = require("html-entities");
const cli_1 = require("../cli");
const translate_1 = require("../translate");
const util_1 = require("../util");
class DeepLFreeAPI extends translate_1.Translate {
    constructor() {
        super();
        this.callTranslateAPI = async (valuesForTranslation) => {
            const response = await axios_1.default.post(`https://${DeepLFreeAPI.endpoint}/v2/translate`, {
                text: [(0, html_entities_1.encode)(valuesForTranslation.join(translate_1.Translate.sentenceDelimiter))],
                target_lang: this.getLocale(cli_1.argv.to),
                source_lang: this.getLocale(cli_1.argv.from),
                preserve_formatting: true,
            }, DeepLFreeAPI.axiosConfig);
            return (0, html_entities_1.decode)(response.data.translations[0].text);
        };
        if (cli_1.argv.certificatePath)
            DeepLFreeAPI.axiosConfig.httpsAgent = (0, util_1.addCustomCert)(cli_1.argv.certificatePath);
    }
}
exports.DeepLFreeAPI = DeepLFreeAPI;
DeepLFreeAPI.endpoint = 'api-free.deepl.com';
DeepLFreeAPI.axiosConfig = {
    headers: {
        Authorization: `DeepL-Auth-Key ${cli_1.argv.key}`,
    },
    responseType: 'json',
};
//# sourceMappingURL=deepl-free-api.js.map