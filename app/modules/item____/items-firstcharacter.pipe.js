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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMtZmlyc3RjaGFyYWN0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1zLWZpcnN0Y2hhcmFjdGVyLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCOztBQUV6QixzQ0FBb0Q7QUFHcEQsSUFBYSxrQkFBa0I7SUFBL0I7SUFLQSxDQUFDO0lBSkMsc0NBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxJQUFjO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6QixNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBQ0gseUJBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQUxZLGtCQUFrQjtJQUQ5QixXQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQztHQUNsQixrQkFBa0IsQ0FLOUI7QUFMWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaXJzdGNoYXJhY3Rlci5waXBlLnRzXG5cbmltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AUGlwZSh7bmFtZTogXCJmaXJzdGNoYXJhY3RlclwifSlcbmV4cG9ydCBjbGFzcyBGaXJzdGNoYXJhY3RlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIGFyZ3M6IHN0cmluZ1tdKTogYW55IHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm4gdmFsdWU7XG4gICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpO1xuICB9XG59Il19