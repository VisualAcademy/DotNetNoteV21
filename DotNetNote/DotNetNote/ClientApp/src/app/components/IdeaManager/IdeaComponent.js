"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var IdeaComponent = (function () {
    function IdeaComponent(http) {
        var _this = this;
        this.http = http;
        this.ideas = [];
        this.http.get("/api/IdeaService").subscribe(function (result) {
            _this.ideas = result.json();
        });
    }
    IdeaComponent.prototype.btnSave_Click = function (val) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post("/api/IdeaService", JSON.stringify(val), { headers: headers }).subscribe(function (result) {
            _this.ideas.push(result.json());
        });
    };
    return IdeaComponent;
}());
IdeaComponent = __decorate([
    core_1.Component({
        selector: "idea",
        template: require('./IdeaComponent.html')
    }),
    __metadata("design:paramtypes", [http_1.Http])
], IdeaComponent);
exports.IdeaComponent = IdeaComponent;
//# sourceMappingURL=IdeaComponent.js.map