"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingTypes = exports.ComponentType = void 0;
var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["NavBarHorizontalComponent"] = 1] = "NavBarHorizontalComponent";
})(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
var SettingTypes = /** @class */ (function () {
    function SettingTypes(type) {
        switch (type) {
            case ComponentType.NavBarHorizontalComponent:
                this['title'] = { value: '' };
                this['titleLocation'] = { options: ['left', 'center'], value: 'left' };
                this['themeColor'] = { options: ['primary', 'accent', 'warn', undefined], value: '' };
            default:
                break;
        }
    }
    return SettingTypes;
}());
exports.SettingTypes = SettingTypes;
//# sourceMappingURL=page.js.map