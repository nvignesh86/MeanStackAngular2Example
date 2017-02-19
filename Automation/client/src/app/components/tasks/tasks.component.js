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
var tasks_service_1 = require('./services/tasks.service');
var TasksComponent = (function () {
    function TasksComponent(taskService) {
        //this.name="saanvi";
        //this.age="1";
        var _this = this;
        this.taskService = taskService;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            //console.log(tasks);
            _this.tasks = tasks;
        });
        this.taskService.getDetails()
            .subscribe(function (tasks) {
            //console.log(tasks);
            _this.details = tasks;
        });
    }
    TasksComponent.prototype.addTasks = function (event) {
        var _this = this;
        event.preventDefault();
        var newContact = {
            name: this.name,
            age: this.age
        };
        console.log(this.name, this.age);
        this.taskService.addTask(newContact)
            .subscribe(function (tasks) {
            _this.tasks.push(tasks);
            _this.name = "";
            _this.age = "";
        });
    };
    TasksComponent.prototype.deleteTask = function (taskId) {
        var _this = this;
        console.log(taskId);
        this.taskService.deleteTask(taskId)
            .subscribe(function (tasks) {
            for (var i = 0; i < _this.tasks.length; i++) {
                if (_this.tasks[i]._id == taskId) {
                    _this.tasks.splice(i, 1);
                    break;
                }
            }
            console.log(tasks);
        });
    };
    TasksComponent.prototype.updateTask = function (taskId) {
        var _this = this;
        var newContact = {
            _id: taskId,
            name: this.name,
            age: this.age
        };
        this.taskService.updateTask(newContact)
            .subscribe(function (tasks) {
            for (var i = 0; i < _this.tasks.length; i++) {
                if (_this.tasks[i]._id == taskId) {
                    _this.tasks[i].name = _this.name;
                    _this.tasks[i].age = _this.age;
                    break;
                }
            }
            console.log(tasks);
        });
    };
    TasksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tasks',
            templateUrl: 'tasks.Component.html'
        }), 
        __metadata('design:paramtypes', [tasks_service_1.TaskService])
    ], TasksComponent);
    return TasksComponent;
}());
exports.TasksComponent = TasksComponent;
//# sourceMappingURL=tasks.component.js.map