"use strict";
(() => {
var exports = {};
exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ generate)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: ./pages/api/generate.js

const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: "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"
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
const basePromptPrefix = `
This is an chat with Donald Trump, 45th President of United States.

Me:
`;
const generateAction = async (req, res)=>{
    // Run first prompt
    console.log(`API: ${basePromptPrefix}${req.body.userInput}`);
    const baseCompletion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${basePromptPrefix}${req.body.userInput}`,
        temperature: 0.7,
        max_tokens: 250
    });
    const basePromptOutput = baseCompletion.data.choices.pop();
    res.status(200).json({
        output: basePromptOutput
    });
};
/* harmony default export */ const generate = (generateAction);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(961));
module.exports = __webpack_exports__;

})();