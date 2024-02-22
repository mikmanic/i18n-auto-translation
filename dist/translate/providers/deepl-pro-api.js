"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeepLProAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const html_entities_1 = require("html-entities");
const cli_1 = require("../cli");
const translate_1 = require("../translate");
const util_1 = require("../util");
class DeepLProAPI extends translate_1.Translate {
    constructor() {
        super();
        this.callTranslateAPI = async (valuesForTranslation) => {
            const response = await axios_1.default.post(`https://${DeepLProAPI.endpoint}/v2/translate`, {
                text: [(0, html_entities_1.encode)(valuesForTranslation.join(translate_1.Translate.sentenceDelimiter))],
                target_lang: cli_1.argv.to,
                source_lang: cli_1.argv.from,
                preserve_formatting: true,
            }, DeepLProAPI.axiosConfig);
            return (0, html_entities_1.decode)(response.data.translations[0].text);
        };
        if (cli_1.argv.certificatePath)
            DeepLProAPI.axiosConfig.httpsAgent = (0, util_1.addCustomCert)(cli_1.argv.certificatePath);
    }
}
exports.DeepLProAPI = DeepLProAPI;
DeepLProAPI.endpoint = 'api.deepl.com';
DeepLProAPI.axiosConfig = {
    headers: {
        Authorization: `DeepL-Auth-Key ${cli_1.argv.key}`,
    },
    responseType: 'json',
};
//# sourceMappingURL=deepl-pro-api.js.map