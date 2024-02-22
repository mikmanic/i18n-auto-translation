"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleOfficialAPI = void 0;
const v2_1 = require("@google-cloud/translate/build/src/v2");
const html_entities_1 = require("html-entities");
const cli_1 = require("../cli");
const translate_1 = require("../translate");
class GoogleOfficialAPI extends translate_1.Translate {
    constructor() {
        super(...arguments);
        this.callTranslateAPI = async (valuesForTranslation) => {
            const response = await new v2_1.Translate({ key: cli_1.argv.key }).translate((0, html_entities_1.encode)(valuesForTranslation.join(translate_1.Translate.sentenceDelimiter)), {
                from: cli_1.argv.from,
                to: cli_1.argv.to,
            });
            return (0, html_entities_1.decode)(response[0]);
        };
    }
}
exports.GoogleOfficialAPI = GoogleOfficialAPI;
//# sourceMappingURL=google-official-api.js.map