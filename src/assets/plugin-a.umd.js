(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('plugin-manager'), require('@angular/core'), require('ng-zorro-antd')) :
    typeof define === 'function' && define.amd ? define('plugin-a', ['plugin-manager', '@angular/core', 'ng-zorro-antd'], factory) :
    (global = global || self, global['plugin-a'] = factory(global.pluginManager, global.ng.core, global.ngZorroAntd));
}(this, function (pluginManager, core, ngZorroAntd) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginAComponent = /** @class */ (function () {
        function PluginAComponent() {
        }
        /**
         * @return {?}
         */
        PluginAComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        PluginAComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-plugin-a',
                        template: "\n    <nz-card class=\"card\" nzTitle=\"Widget \uD83C\uDF89\">\n        Plugin Widget\n    </nz-card>\n  "
                    }] }
        ];
        /** @nocollapse */
        PluginAComponent.ctorParameters = function () { return []; };
        return PluginAComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginAModule = /** @class */ (function () {
        function PluginAModule() {
        }
        PluginAModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [ngZorroAntd.NgZorroAntdModule],
                        declarations: [PluginAComponent],
                        entryComponents: [PluginAComponent],
                        exports: [PluginAComponent]
                    },] }
        ];
        return PluginAModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var publicApi = pluginManager.createPlugin({
        name: 'plugin-a',
        module: PluginAModule,
        component: PluginAComponent
    });

    return publicApi;

}));
//# sourceMappingURL=plugin-a.umd.js.map
