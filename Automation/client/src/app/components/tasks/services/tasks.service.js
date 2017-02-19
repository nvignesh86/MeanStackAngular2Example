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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
        console.log("Service Initialized");
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get("/api/tasks")
            .map(function (res) { return res.json(); });
    };
    //Join two table
    TaskService.prototype.getDetails = function () {
        return this.http.get("/api/tasksjoin")
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.addTask = function (newContact) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post("http://localhost:3000/api/tasks", JSON.stringify(newContact), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.deleteTask = function (contactId) {
        return this.http.delete("http://localhost:3000/api/tasks/" + contactId)
            .map(function (res) { return res.json(); });
    };
    TaskService.prototype.updateTask = function (newContact) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.put("http://localhost:3000/api/tasks/" + newContact._id, JSON.stringify(newContact), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    TaskService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=tasks.service.js.map