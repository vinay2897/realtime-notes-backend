(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <input #message type=\"text\">\n<button (click)=\"send(message.value)\">Send</button>\n\n<button (click)=\"setCookie()\">set cookie</button>\n<button (click)=\"connect()\">connect</button>\n<button (click)=\"add()\">add</button>\n<p *ngFor=\"let i of messages\">{{i }}</p>\n<p *ngFor=\"let i of sent\">{{i}}</p> -->\n\n<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [formGroup]=\"loginForm\">\n    <div class=\"frame\">\n        <div class=\"title\">Login</div>\n        <div class=\"form-el\"> Email ID: <input class=\"inp\" type=\"email\" formControlName=\"email\"> </div>\n        <div class=\"form-el\"> Password: <input class=\"inp\" type=\"password\" formControlName=\"password\"> </div>\n        <div class=\"submit btn\" (click)=\"submit()\">Login</div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"frame\">\n    <div class=\"buttons\">\n            <div class=\"el\">\n                    <button class=\"btn\" (click)=\"createNote()\">Create Note</button>\n                </div>\n                <div class=\"el\">\n                    <button class=\"btn\" (click)=\"getAllNotes()\">Get all Notes</button>\n                </div>\n                <div class=\"el\">\n                    <div class=\"loading\" *ngIf=\"loading\">Loading...</div>\n                </div>\n    </div>\n\n</div>\n\n<!--  -->\n\n<div class=\"content\">\n    <div class=\"all-notes\" *ngIf=\"allNotes && allNotes.length > 0\">\n        <div class=\"resource\" *ngFor=\"let i of allNotes\">\n            <div  class=\"rid\">{{ i.rid }}</div><button class=\"btn\" (click)=\"accessNote(i.rid)\">Access</button>\n        </div>\n    </div>\n\n    <!--  -->\n    <div class=\"current-note\" *ngIf=\"currentNote\">\n        <div>\n            <textarea class=\"note\" #content [(ngModel)]=\"note\" (input)=\"test(content.value)\"></textarea>\n        </div>\n        <div [formGroup]=\"shareForm\">\n            <input formControlName=\"shareWith\" class=\"inp share-inp\" type=\"text\">\n            <button class=\"btn\" (click)=\"shareNote()\">share</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [formGroup]=\"signupForm\">\n    <div class=\"frame\">\n        <div class=\"title\">Signup</div>\n            <div class=\"form-el\"> Email ID: <input class=\"inp\" type=\"email\" formControlName=\"email\"> </div>\n            <div class=\"form-el\"> Password: <input class=\"inp\" type=\"password\" formControlName=\"password\"> </div>\n            <div class=\"submit btn\" (click)=\"submit()\">Signup</div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/test/test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <textarea id=\"note\">asd</textarea>\n</div>\n\n<!-- <div id=\"note\" [(ngModel)]=\"content\" contenteditable=\"true\">asd</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"logo\">Live-Notes</div>\n    <div *ngIf=\"authService.isLoggedIn\" class=\"logout\"><button class=\"btn\" (click)=\"logout()\">Log out</button></div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");






const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'signup' },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'my-app';
        this.messages = [];
        this.sent = [];
    }
    send(message) {
        this.sent.push(message);
        this.socket.send(message);
    }
    connect() {
        let url = "ws://192.168.31.160:3000/";
        this.socket = new WebSocket(url);
        this.socket.onerror = (error) => {
            console.log(error);
        };
        this.socket.onmessage = (event) => {
            this.messages.push(event.data);
        };
    }
    setCookie() {
        this.http.post("http://localhost:3001/set-cookie", {}, { withCredentials: true }).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_11__["ToolbarComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
            _test_test_component__WEBPACK_IMPORTED_MODULE_13__["TestComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.httpServerUrl = "/api";
    }
    signup(user) {
        return this.http.post(this.httpServerUrl + "/signup", user, { withCredentials: true });
    }
    login(user) {
        return this.http.post(this.httpServerUrl + "/login", user, { withCredentials: true });
    }
    logout() {
        return this.http.post(this.httpServerUrl + "/logout", {}, { withCredentials: true });
    }
    createNote() {
        return this.http.post(this.httpServerUrl + "/create-note", {}, { withCredentials: true });
    }
    setRid(content) {
        return this.http.post(this.httpServerUrl + "/test-redis", { content }, { withCredentials: true });
    }
    shareNote(shareWith) {
        return this.http.post(this.httpServerUrl + "/share-note", shareWith, { withCredentials: true });
    }
    getAllNotes() {
        return this.http.post(this.httpServerUrl + "/all-notes", {}, { withCredentials: true });
    }
    accessNote(rid) {
        return this.http.post(this.httpServerUrl + "/access-notes", { rid }, { withCredentials: true });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    display: grid;\n    justify-items: center;\n    margin: 30px 0px;\n}\n\n.frame{\n    display: grid;\n    border: 2px solid gray;\n    border-radius: 10px;\n    padding: 20px 10px;\n    text-align: center;\n    justify-items: center;\n}\n\n.title{\n    font-size: 2rem;\n}\n\n.form-el{\n    padding: 10px;\n    font-size: 1.5rem;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMzBweCAwcHg7XG59XG5cbi5mcmFtZXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuXG4uZm9ybS1lbHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    submit() {
        this.authService.login(this.loginForm.value).subscribe(res => {
            this.authService.isLoggedIn = true;
            this.router.navigate(["/profile"]);
        }, err => {
            console.log(err);
        });
    }
    ngOnInit() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".frame{\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n}\n\n.buttons{\n    margin: 30px 10px;\n    display: flex;\n    flex-direction: row;\n    justify-items: center;\n    align-items: center;\n}\n\n.el{\n    padding: 0px 5px;\n}\n\n.loading{\n    font-size: 1.5rem;\n}\n\n.content{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n\n.all-notes{\n    padding: 0px 10px;\n    font-size: 1.5rem;\n}\n\n.current-note{\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    padding: 0px 10px;\n    /* border: 1px solid gray; */\n    border-radius: 15px;\n}\n\n.resource{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    /* border: 1px solid gray; */\n    border-radius: 15px;\n    margin: 5px 0px;\n    padding: 15px 5px;\n    justify-items: center;\n}\n\n.rid{\n    margin: 0px 3px;\n}\n\n.note{\n    border: 2px solid gray;\n    width: 500px;\n    min-height: 200px;\n    padding: 10px;\n    font-size: 1rem;\n    border-radius: 10px;\n}\n\n.share-inp{\n    width: 120px;\n}\n\n@media(max-width:768px){\n    .content{\n        grid-template-columns: 1fr;\n    }\n\n}\n\n@media(max-width:550px){\n    .note{\n        width: 280px;\n    }\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7QUFFSjs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtJQUNoQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyYW1le1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uc3tcbiAgICBtYXJnaW46IDMwcHggMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbHtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xufVxuXG4ubG9hZGluZ3tcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG59XG5cbi5hbGwtbm90ZXN7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jdXJyZW50LW5vdGV7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBncmF5OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5yZXNvdXJjZXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7ICovXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgcGFkZGluZzogMTVweCA1cHg7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4ucmlke1xuICAgIG1hcmdpbjogMHB4IDNweDtcbn1cblxuLm5vdGV7XG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnNoYXJlLWlucHtcbiAgICB3aWR0aDogMTIwcHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY4cHgpe1xuICAgIC5jb250ZW50e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbn1cblxuQG1lZGlhKG1heC13aWR0aDo1NTBweCl7XG4gICAgLm5vdGV7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICB9XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ProfileComponent = class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
        this.create = false;
        this.loading = false;
        this.shareNoteInput = false;
        this.note = '';
        this.shareForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            shareWith: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    ngOnInit() {
    }
    createNote() {
        this.loading = true;
        this.authService.createNote().subscribe(res => {
            console.log(res);
            // if(res["rid"]){
            this.loading = false;
            //   this.create = true;
            //   let url = "ws://localhost:3000/";
            //   this.socket = new WebSocket(url);
            //   this.socket.onerror = (error) => {
            //     console.log(error);
            //   };
            //   this.socket.onmessage = (event)=>{
            //     console.log(event.data)
            //   };
            // }
        }, err => {
            console.log(err);
        });
    }
    shareNote() {
        this.authService.shareNote(this.shareForm.value).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    getAllNotes() {
        this.authService.getAllNotes().subscribe(res => {
            console.log(res);
            this.allNotes = res["my_notes"];
        }, err => {
            console.log(err);
        });
    }
    accessNote(rid) {
        this.authService.accessNote(rid).subscribe(res => {
            console.log(res);
            if (res["rid"]) {
                this.currentNote = res["rid"];
                this.connectWebsocket();
            }
        }, err => {
            console.log(err);
        });
    }
    connectWebsocket() {
        if (this.socket) {
            this.socket.close();
        }
        let url = "ws://192.168.31.160:3000/";
        this.socket = new WebSocket(url);
        this.socket.onerror = (error) => {
            console.log(error);
        };
        this.socket.onmessage = (event) => {
            // console.log(event.data)
            this.note = event.data;
        };
    }
    test(content) {
        this.socket.send(content);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    display: grid;\n    justify-items: center;\n    margin: 30px 0px;\n}\n\n.frame{\n    display: grid;\n    border: 2px solid gray;\n    border-radius: 10px;\n    padding: 20px 10px;\n    text-align: center;\n    justify-items: center;\n}\n\n.title{\n    font-size: 2rem;\n}\n\n.form-el{\n    padding: 10px;\n    font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDMwcHggMHB4O1xufVxuXG4uZnJhbWV7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cblxuLmZvcm0tZWx7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let SignupComponent = class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    submit() {
        this.authService.signup(this.signupForm.value).subscribe(res => {
            if (res['code'] === 200 || res['code'] === 0) {
                this.router.navigate(["/profile"]);
            }
        }, err => {
            if (err.error.code === 2) {
                this.router.navigate(["/login"]);
            }
            else {
                console.log(err);
            }
        });
    }
    ngOnInit() {
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#note{\n    border: 3px solid black;\n    width: 400px;\n    margin: 0 auto;\n    box-shadow: 2px 2px 20px black;\n    padding: 20px;\n    border-radius: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGV7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJveC1zaGFkb3c6IDJweCAycHggMjBweCBibGFjaztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() {
        this.content = "asd";
    }
    ngOnInit() {
    }
};
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/test/test.component.html"),
        styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TestComponent);



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    padding: 2px 10px;\n    box-shadow: 2px 2px 4px gray;\n}\n\n.logo{\n    font-size: 2rem;\n    font-weight: 400;\n}\n\n.logout{\n    align-self: center;\n    justify-self: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCBncmF5O1xufVxuXG4ubG9nb3tcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmxvZ291dHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



let ToolbarComponent = class ToolbarComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout().subscribe(res => {
            console.log(res);
            this.authService.isLoggedIn = true;
        }, err => {
            console.log(err);
        });
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html"),
        styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], ToolbarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vinay/projects/service-workers/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map