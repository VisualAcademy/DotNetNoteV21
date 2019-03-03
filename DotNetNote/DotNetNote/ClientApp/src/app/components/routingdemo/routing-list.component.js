"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var RoutingList = (function () {
    function RoutingList() {
    }
    return RoutingList;
}());
RoutingList = __decorate([
    core_1.Component({
        selector: 'routing-list',
        template: "\n<h1>\uB9AC\uC2A4\uD2B8</h1>\n<ul>\n    <li><a href=\"/\">Home</a></li>\n    <li><a [routerLink]=\"['/home']\">Home</a></li>\n    <li><a [routerLink]=\"['/routingview', 1]\">\uC0C1\uC138\uBCF4\uAE30 1</a></li>\n    <li><a [routerLink]=\"['/routingview', 1234]\">\uC0C1\uC138\uBCF4\uAE30 1234</a></li>\n</ul>\n    "
    })
], RoutingList);
exports.RoutingList = RoutingList;
//# sourceMappingURL=routing-list.component.js.map