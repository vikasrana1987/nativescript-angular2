// firstcharacter.pipe.ts
"use strict";
var core_1 = require("@angular/core");
var FirstcharacterPipe = (function () {
    function FirstcharacterPipe() {
    }
    FirstcharacterPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        return value.charAt(0).toUpperCase();
    };
    return FirstcharacterPipe;
}());
FirstcharacterPipe = __decorate([
    core_1.Pipe({ name: "firstcharacter" })
], FirstcharacterPipe);
exports.FirstcharacterPipe = FirstcharacterPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3RjaGFyYWN0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcnN0Y2hhcmFjdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCOztBQUV6QixzQ0FBb0Q7QUFHcEQsSUFBYSxrQkFBa0I7SUFBL0I7SUFLQSxDQUFDO0lBSkMsc0NBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxJQUFjO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLGtCQUFrQjtJQUQ5QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztHQUNsQixrQkFBa0IsQ0FLOUI7QUFMWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaXJzdGNoYXJhY3Rlci5waXBlLnRzXHJcblxyXG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBQaXBlKHtuYW1lOiBcImZpcnN0Y2hhcmFjdGVyXCJ9KVxyXG5leHBvcnQgY2xhc3MgRmlyc3RjaGFyYWN0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdKTogYW55IHtcclxuICAgIGlmICghdmFsdWUpIHJldHVybiB2YWx1ZTtcclxuICAgIHJldHVybiB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKTtcclxuICB9XHJcbn0iXX0=