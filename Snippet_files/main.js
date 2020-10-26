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

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

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
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-post/single-post.component */ "./src/app/single-post/single-post.component.ts");
/* harmony import */ var _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile-edit/profile-edit.component */ "./src/app/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./collection/collection.component */ "./src/app/collection/collection.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _static_pages_tutorial_page_tutorial_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./static pages/tutorial-page/tutorial-page.component */ "./src/app/static pages/tutorial-page/tutorial-page.component.ts");














const appRoutes = [
    { path: '', redirectTo: '/explore', pathMatch: 'full' },
    { path: 'explore', component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_7__["ExploreComponent"] },
    { path: 'collection/:id', component: _collection_collection_component__WEBPACK_IMPORTED_MODULE_6__["CollectionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'profile/:id', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'profile/:id/edit', component: _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_3__["ProfileEditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"] },
    { path: 'post/:pid', component: _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_2__["SinglePostComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"] },
    { path: 'tutorial', component: _static_pages_tutorial_page_tutorial_page_component__WEBPACK_IMPORTED_MODULE_11__["TutorialPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(appRoutes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/window.service */ "./src/app/shared/window.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_infinite_scroll_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/infinite-scroll.service */ "./src/app/shared/infinite-scroll.service.ts");
/* harmony import */ var _shared_directives_scrollable_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/directives/scrollable.directive */ "./src/app/shared/directives/scrollable.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");













function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(windowService, authService, titleService, router, infiniteScrollService) {
        this.windowService = windowService;
        this.authService = authService;
        this.titleService = titleService;
        this.router = router;
        this.infiniteScrollService = infiniteScrollService;
        this.title = 'snippet';
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.authService.autoLogin();
        this.titleService.setTitle("Snippet");
        this.windowService.checkWidth();
        this.windowService.screenWidthValue.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.notifier$))
            .subscribe(val => {
            if (val) {
                this.windowSize = val;
                if (val < 850) {
                    this.mobileCheck = true;
                }
                else {
                    this.mobileCheck = false;
                }
            }
        });
        this.onResize();
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.notifier$)).subscribe(val => {
            this.currentRoute = this.router.url;
        });
    }
    onResize() {
        this.windowService.checkWidth();
    }
    scrollHandler(event) {
        this.infiniteScrollService.getScroll$.next(event); //log
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
        this.infiniteScrollService.getScroll$.complete();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_infinite_scroll_service__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 4, consts: [["scrollable", "", 1, "scroll", 3, "resize", "scrollPosition"], [4, "ngIf"], ["class", "container outlet-margin", 4, "ngIf", "ngIfElse"], ["tutorial", ""], ["style", "margin-top: 0px;", 4, "ngIf"], [1, "container", "outlet-margin"], [1, "row"], [1, "col-md-12"], [2, "margin-top", "0px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("scrollPosition", function AppComponent_Template_div_scrollPosition_0_listener($event) { return ctx.scrollHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.mobileCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRoute != "/tutorial")("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mobileCheck);
    } }, directives: [_shared_directives_scrollable_directive__WEBPACK_IMPORTED_MODULE_8__["ScrollableDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"]], styles: [".scroll[_ngcontent-%COMP%] {\n    overflow-y: scroll;\n    height: 100vh;\n    width: 100vw;\n  }\n\n  .outlet-margin[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG4gIC5vdXRsZXQtbWFyZ2luIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _shared_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowStateService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _shared_infinite_scroll_service__WEBPACK_IMPORTED_MODULE_7__["InfiniteScrollService"] }]; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _collection_collection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./collection/collection.component */ "./src/app/collection/collection.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _feed_post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./feed/post/post.component */ "./src/app/feed/post/post.component.ts");
/* harmony import */ var _feed_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./feed/post/post-edit/post-edit.component */ "./src/app/feed/post/post-edit/post-edit.component.ts");
/* harmony import */ var _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./profile/profile-edit/profile-edit.component */ "./src/app/profile/profile-edit/profile-edit.component.ts");
/* harmony import */ var _feed_post_comments_comments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./feed/post/comments/comments.component */ "./src/app/feed/post/comments/comments.component.ts");
/* harmony import */ var _feed_post_comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./feed/post/comments/comment/comment.component */ "./src/app/feed/post/comments/comment/comment.component.ts");
/* harmony import */ var _feed_post_comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./feed/post/comments/comment-list/comment-list.component */ "./src/app/feed/post/comments/comment-list/comment-list.component.ts");
/* harmony import */ var _feed_post_holder_holder_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./feed/post/holder/holder.component */ "./src/app/feed/post/holder/holder.component.ts");
/* harmony import */ var _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sticker/sticker.component */ "./src/app/sticker/sticker.component.ts");
/* harmony import */ var _profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile-display/profile-display.component */ "./src/app/profile-display/profile-display.component.ts");
/* harmony import */ var _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./single-post/single-post.component */ "./src/app/single-post/single-post.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "./src/app/auth/auth-interceptor.service.ts");
/* harmony import */ var _shared_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/directives/title-case.directive */ "./src/app/shared/directives/title-case.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_with_loading_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/with-loading.pipe */ "./src/app/shared/with-loading.pipe.ts");
/* harmony import */ var _shared_date_sort_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/date-sort.pipe */ "./src/app/shared/date-sort.pipe.ts");
/* harmony import */ var _static_pages_tutorial_page_tutorial_page_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./static pages/tutorial-page/tutorial-page.component */ "./src/app/static pages/tutorial-page/tutorial-page.component.ts");
/* harmony import */ var _shared_directives_scrollable_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/directives/scrollable.directive */ "./src/app/shared/directives/scrollable.directive.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");








































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_29__["AuthInterceptorService"], multi: true },
        _angular_common__WEBPACK_IMPORTED_MODULE_31__["TitleCasePipe"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].firebaseConfig),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
        _explore_explore_component__WEBPACK_IMPORTED_MODULE_11__["ExploreComponent"],
        _collection_collection_component__WEBPACK_IMPORTED_MODULE_12__["CollectionComponent"],
        _create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__["FeedbackComponent"],
        _feed_feed_component__WEBPACK_IMPORTED_MODULE_16__["FeedComponent"],
        _feed_post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
        _feed_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_18__["PostEditComponent"],
        _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_19__["ProfileEditComponent"],
        _feed_post_comments_comments_component__WEBPACK_IMPORTED_MODULE_20__["CommentsComponent"],
        _feed_post_comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_21__["CommentComponent"],
        _feed_post_comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_22__["CommentListComponent"],
        _feed_post_holder_holder_component__WEBPACK_IMPORTED_MODULE_23__["HolderComponent"],
        _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_24__["StickerComponent"],
        _profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_25__["ProfileDisplayComponent"],
        _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_26__["SinglePostComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_27__["AuthComponent"],
        _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_28__["LoadingSpinnerComponent"],
        _shared_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_30__["TitleCaseDirective"],
        _shared_with_loading_pipe__WEBPACK_IMPORTED_MODULE_33__["WithLoadingPipe"],
        _shared_date_sort_pipe__WEBPACK_IMPORTED_MODULE_34__["DateSortPipe"],
        _static_pages_tutorial_page_tutorial_page_component__WEBPACK_IMPORTED_MODULE_35__["TutorialPageComponent"],
        _shared_directives_scrollable_directive__WEBPACK_IMPORTED_MODULE_36__["ScrollableDirective"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_37__["NavbarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                    _explore_explore_component__WEBPACK_IMPORTED_MODULE_11__["ExploreComponent"],
                    _collection_collection_component__WEBPACK_IMPORTED_MODULE_12__["CollectionComponent"],
                    _create_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                    _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_15__["FeedbackComponent"],
                    _feed_feed_component__WEBPACK_IMPORTED_MODULE_16__["FeedComponent"],
                    _feed_post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"],
                    _feed_post_post_edit_post_edit_component__WEBPACK_IMPORTED_MODULE_18__["PostEditComponent"],
                    _profile_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_19__["ProfileEditComponent"],
                    _feed_post_comments_comments_component__WEBPACK_IMPORTED_MODULE_20__["CommentsComponent"],
                    _feed_post_comments_comment_comment_component__WEBPACK_IMPORTED_MODULE_21__["CommentComponent"],
                    _feed_post_comments_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_22__["CommentListComponent"],
                    _feed_post_holder_holder_component__WEBPACK_IMPORTED_MODULE_23__["HolderComponent"],
                    _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_24__["StickerComponent"],
                    _profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_25__["ProfileDisplayComponent"],
                    _single_post_single_post_component__WEBPACK_IMPORTED_MODULE_26__["SinglePostComponent"],
                    _auth_auth_component__WEBPACK_IMPORTED_MODULE_27__["AuthComponent"],
                    _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_28__["LoadingSpinnerComponent"],
                    _shared_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_30__["TitleCaseDirective"],
                    _shared_with_loading_pipe__WEBPACK_IMPORTED_MODULE_33__["WithLoadingPipe"],
                    _shared_date_sort_pipe__WEBPACK_IMPORTED_MODULE_34__["DateSortPipe"],
                    _static_pages_tutorial_page_tutorial_page_component__WEBPACK_IMPORTED_MODULE_35__["TutorialPageComponent"],
                    _shared_directives_scrollable_directive__WEBPACK_IMPORTED_MODULE_36__["ScrollableDirective"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_37__["NavbarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_32__["environment"].firebaseConfig),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                ],
                providers: [
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_29__["AuthInterceptorService"], multi: true },
                    _angular_common__WEBPACK_IMPORTED_MODULE_31__["TitleCasePipe"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/auth-interceptor.service.ts":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");





class AuthInterceptorService {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])(user => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('auth', user.token)
            });
            return next.handle(modifiedReq);
        }));
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _shared_profile_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/profile.model */ "./src/app/shared/profile.model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _shared_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/activity.service */ "./src/app/shared/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/directives/title-case.directive */ "./src/app/shared/directives/title-case.directive.ts");












function AuthComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AuthComponent_form_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthComponent_form_4_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.name = $event; })("keydown", function AuthComponent_form_4_div_2_Template_input_keydown_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.alphaOnly($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r3.name);
} }
function AuthComponent_form_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthComponent_form_4_div_3_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.username = $event; })("keydown", function AuthComponent_form_4_div_3_Template_input_keydown_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.avoidSpace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.username);
} }
function AuthComponent_form_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Date of birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthComponent_form_4_div_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.dob = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](4, 2, ctx_r5.allowedDate, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.dob);
} }
function AuthComponent_form_4_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthComponent_form_4_div_9_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r17.password = $event; })("keypress", function AuthComponent_form_4_div_9_Template_input_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.avoidSpace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r6.password);
} }
function AuthComponent_form_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r7.error, " ");
} }
function AuthComponent_form_4_label_16_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_form_4_label_16_Template_label_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.onSwitchMode("forget"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Forgot password? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "margin-bottom": a0 }; };
function AuthComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function AuthComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthComponent_form_4_div_2_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AuthComponent_form_4_div_3_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AuthComponent_form_4_div_4_Template, 5, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AuthComponent_form_4_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, AuthComponent_form_4_div_9_Template, 4, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AuthComponent_form_4_div_10_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AuthComponent_form_4_Template_label_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.onSwitchMode("login"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AuthComponent_form_4_label_16_Template, 2, 0, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isLoginMode && !ctx_r1.isForgetMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isLoginMode && !ctx_r1.isForgetMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isLoginMode && !ctx_r1.isForgetMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.isForgetMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.isForgetMode ? "Submit" : ctx_r1.isLoginMode ? "Login" : "Sign Up", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, !ctx_r1.isLoginMode ? "100px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0 | \u00A0", ctx_r1.isLoginMode ? "Don't have an account?" : "Already have an account?", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.isLoginMode);
} }
class AuthComponent {
    constructor(authService, userService, activityService, router) {
        this.authService = authService;
        this.userService = userService;
        this.activityService = activityService;
        this.router = router;
        this.isLoginMode = true;
        this.isForgetMode = false;
        this.isLoading = false;
        this.error = null;
        this.passwordError = null;
        this.minAge = 13;
        this.passwordValidator = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
        this.isAuthenticated = false;
    }
    ngOnInit() {
        let todayDate = new Date();
        this.allowedDate = new Date(todayDate.getFullYear() - this.minAge, todayDate.getMonth(), todayDate.getDate());
    }
    onSwitchMode(event) {
        if (event === 'login') {
            this.isLoginMode = !this.isLoginMode;
            this.isForgetMode = false;
            this.error = null;
        }
        else if (event === 'forget') {
            this.isForgetMode = true;
            this.isLoginMode = false;
            this.error = null;
        }
    }
    onSubmit(form) {
        if (!this.email || this.email.length === 0) {
            this.error = "Email is required";
            return;
        }
        if (!this.isForgetMode) {
            if (!this.isLoginMode) {
                if (!this.name || this.name.length === 0) {
                    this.error = "Full name is required";
                    return;
                }
                if (!this.username || this.username.length === 0) {
                    this.error = "Username is required";
                    return;
                }
                if (this.username && this.username.indexOf(' ') != -1) {
                    this.error = "Username can't have spaces";
                    return;
                }
                if (!this.dob || this.dob <= this.allowedDate) {
                    this.error = "Must be at least 13 years old";
                    return;
                }
            }
            if (!this.password || this.password.length === 0) {
                this.error = "Password is required";
                return;
            }
            if (!this.password || this.password.length < 6) {
                this.error = "Password must be at least 6 characters";
                return;
            }
        }
        const email = form.value.email;
        const password = form.value.password;
        let authObs;
        this.isLoading = true;
        if (this.isLoginMode && !this.isForgetMode) {
            authObs = this.authService.logIn(email, password);
        }
        else if (!this.isLoginMode && !this.isForgetMode) {
            authObs = this.authService.signUp(email, password);
        }
        else if (this.isForgetMode) {
            authObs = this.authService.forgotPassword(email);
        }
        authObs.subscribe(resData => {
            if (this.isLoginMode && !this.isForgetMode) {
                form.reset();
                this.router.navigate(['/explore']);
            }
            else if (!this.isLoginMode && !this.isForgetMode) {
                let profileDetails = new _shared_profile_model__WEBPACK_IMPORTED_MODULE_0__["ProfileDetails"](this.username, new _shared_profile_model__WEBPACK_IMPORTED_MODULE_0__["Biography"]("", "", ""));
                let personalDetails = new _shared_profile_model__WEBPACK_IMPORTED_MODULE_0__["PersonalDetails"](this.name, this.email, this.dob, new Date());
                this.userService.getProfileDetailsByKey('username', profileDetails.username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe((response) => {
                    if (Object.keys(response).length === 0) {
                        this.userService.addProfileDetails(resData.localId, profileDetails);
                        this.userService.addPersonalDetails(resData.localId, personalDetails);
                        this.userService.addProfileStickers(resData.localId, []);
                        this.userService.addDisplayPicture(resData.localId, new _shared_profile_model__WEBPACK_IMPORTED_MODULE_0__["DisplayPicture"](resData.localId, new Date(), 'image'), null);
                        this.activityService.addActivity(resData.localId, 'user');
                        form.reset();
                        this.router.navigate(['/profile/' + resData.localId + '/edit']);
                    }
                    else {
                        this.error = "Username taken";
                        this.authService.deleteUser(resData.idToken).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(response => {
                            this.authService.logout();
                        }, errorMessage => {
                            console.log(errorMessage);
                        });
                    }
                });
            }
            else if (this.isForgetMode) {
                alert("An email has been sent to your account");
            }
            this.isLoading = false;
        }, errorMessage => {
            this.error = errorMessage;
            this.isLoading = false;
        });
    }
    avoidSpace(event) {
        let k = event.keyCode;
        if (k == 32)
            return false;
    }
    alphaOnly(event) {
        let key = event.keyCode;
        return ((key >= 65 && key <= 90) || key == 8 || key == 32);
    }
    ngOnDestroy() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 5, vars: 2, consts: [[1, "container"], [1, "row"], ["style", "text-align: center;", "class", "horizontal-center", 4, "ngIf"], [1, "col-xs-12", "col-md-6", "horizontal-center"], [3, "ngSubmit", 4, "ngIf"], [1, "horizontal-center", 2, "text-align", "center"], [3, "ngSubmit"], ["authForm", "ngForm"], ["class", "form-group", 4, "ngIf"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "danger-alert", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", "for", "switch", 2, "margin", "0", "top", "50%", "transform", "translate(0,4px)", 3, "ngStyle", "click"], ["type", "button", "style", "margin-bottom: 0; top: 50%; transform: translate(0,4px); font-size: 20px;", 3, "click", 4, "ngIf"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "maxlength", "200", "appTitleCase", "", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown"], ["type", "text", "id", "username", "name", "username", "required", "", "maxlength", "15", 1, "form-control", 3, "ngModel", "ngModelChange", "keydown"], ["for", "dob"], ["type", "date", "id", "date", "name", "date", "required", "", 1, "form-control", 3, "ngModel", "max", "ngModelChange"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange", "keypress"], [1, "danger-alert"], ["type", "button", 2, "margin-bottom", "0", "top", "50%", "transform", "translate(0,4px)", "font-size", "20px", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AuthComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AuthComponent_form_4_Template, 17, 12, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_8__["LoadingSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MaxLengthValidator"], _shared_directives_title_case_directive__WEBPACK_IMPORTED_MODULE_10__["TitleCaseDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["MinLengthValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["label[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 24px;\n  color: #D8B869;\n}\n\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 18px;\n  color: #F7F7F7;\n  border: 2px solid #D8B869;\n  background: #131114;\n  margin-bottom: 35px;\n  border-radius: 10px;\n  width: 100%;\n}\n\n[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  filter: invert(0.5);\n  \n}\n\n.btn[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 24px;\n  color: #D8B869;\n  border: 2px solid #D8B869;\n  background: #131114;\n  border-radius: 20px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.btn[_ngcontent-%COMP%]:enabled:hover{\n  background: #D8B869;\n  color: #080708;\n}\n\ninput.form-control.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n}\n\ninput.invalidAmount[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n}\n\n.horizontal-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%,0);\n}\n\n.danger-alert[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n  background: #131114;\n  margin-bottom: 35px;\n  border-radius: 10px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 18px;\n  color:#891E13;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NBS0M7O0FBRUQ7O0VBRUUscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7OztFQUlFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBRVUsbUJBQW1CO0VBQzNCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUdELDRCQUE0QjtBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiBQcmVmaXhlZCBieSBodHRwczovL2F1dG9wcmVmaXhlci5naXRodWIuaW9cbiogUG9zdENTUzogdjcuMC4yOSxcbiogQXV0b3ByZWZpeGVyOiB2OS43LjZcbiogQnJvd3NlcnM6IGxhc3QgNCB2ZXJzaW9uXG4qL1xuXG5sYWJlbCxcbnNwYW57XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRDhCODY5O1xufVxuXG5pbnB1dCxcbmlucHV0OmZvY3VzLFxudGV4dGFyZWEsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjRjdGN0Y3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRDhCODY5O1xuICBiYWNrZ3JvdW5kOiAjMTMxMTE0O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDAuNSk7XG4gICAgICAgICAgZmlsdGVyOiBpbnZlcnQoMC41KTtcbiAgLyogY29sb3I6IHJnYmEoMjE2LDE4NCwxMDUsMSk7ICovXG59XG5cbi5idG4ge1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI0Q4Qjg2OTtcbiAgYm9yZGVyOiAycHggc29saWQgI0Q4Qjg2OTtcbiAgYmFja2dyb3VuZDogIzEzMTExNDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmJ0bjplbmFibGVkOmhvdmVye1xuICBiYWNrZ3JvdW5kOiAjRDhCODY5O1xuICBjb2xvcjogIzA4MDcwODtcbn1cblxuaW5wdXQuZm9ybS1jb250cm9sLm5nLWludmFsaWQubmctdG91Y2hlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4OTFFMTM7XG59XG5cbmlucHV0LmludmFsaWRBbW91bnQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjODkxRTEzO1xufVxuXG4uaG9yaXpvbnRhbC1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwwKTtcbn1cblxuLmRhbmdlci1hbGVydCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4OTFFMTM7XG4gIGJhY2tncm91bmQ6ICMxMzExMTQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6Izg5MUUxMztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css']
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _shared_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }, { type: _shared_activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/explore']);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/auth/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.APIKey = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebaseConfig.apiKey;
        this.onBoarding = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null); //Check if user signed up or logged in
    }
    signUp(email, password) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + this.APIKey, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(resData => {
            this.onBoarding.next('Signup');
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    forgotPassword(email) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + this.APIKey, {
            requestType: 'PASSWORD_RESET',
            email: email,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    logIn(email, password) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + this.APIKey, {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(resData => {
            this.onBoarding.next('Login');
            this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/auth']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](userData.email, userData.id, userData._token, new Date(userData._tokenExpirationDate));
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDuration = new Date(userData._tokenExpirationDate).getTime() -
                new Date().getTime();
            this.autoLogout(expirationDuration);
        }
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }
    deleteUser(token) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:delete?key=' + this.APIKey, {
            idToken: token
        });
    }
    handleAuthentication(email, userId, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _user_model__WEBPACK_IMPORTED_MODULE_0__["User"](email, userId, token, expirationDate);
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
    handleError(errorRes) {
        console.log(errorRes.error.error.message);
        let errorMessage = 'we have no idea what happened...No cap';
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                errorMessage = 'Too many attempts try again later';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'Email does not exist';
                break;
            case 'INVALID_EMAIL':
                errorMessage = 'Email is invalid';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Email and password do not match';
                break;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/user.model.ts":
/*!************************************!*\
  !*** ./src/app/auth/user.model.ts ***!
  \************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationDate = _tokenExpirationDate;
    }
    get token() {
        if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "./src/app/collection/collection.component.ts":
/*!****************************************************!*\
  !*** ./src/app/collection/collection.component.ts ***!
  \****************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _feed_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feed/feed.service */ "./src/app/feed/feed.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../profile-display/profile-display.component */ "./src/app/profile-display/profile-display.component.ts");










function CollectionComponent_app_profile_display_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-profile-display", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("getUid", ctx_r0.uid$);
} }
class CollectionComponent {
    constructor(route, router, authService, feedService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.feedService = feedService;
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.uid$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.userSubs = this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.notifier$)).subscribe(response => {
            this.isAuthenticated = !!response;
            if (this.isAuthenticated) {
                this.myUid = response.id;
            }
        });
        this.uid = this.route.snapshot.params['uid'];
        this.uid$.next(this.uid);
        this.route.params
            .subscribe((params) => {
            this.uid = params['id'];
            if (this.uid === this.myUid) {
                this.uid$.next(this.uid);
                this.setUp();
            }
            else {
                this.router.navigate(['/explore']);
            }
        });
    }
    setUp() {
        this.postsList = this.feedService.getCollectionPage(this.uid, this.notifier$);
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
        this.uid$.complete();
    }
}
CollectionComponent.ɵfac = function CollectionComponent_Factory(t) { return new (t || CollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"])); };
CollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CollectionComponent, selectors: [["app-collection"]], decls: 3, vars: 3, consts: [[3, "getUid", 4, "ngIf"], [2, "margin-top", "40px"], [3, "postsList$", "feedType"], [3, "getUid"]], template: function CollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CollectionComponent_app_profile_display_0_Template, 1, 1, "app-profile-display", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feed", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.uid$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("postsList$", ctx.postsList)("feedType", "db");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_7__["FeedComponent"], _profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_8__["ProfileDisplayComponent"]], styles: [".horizontal-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%,0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29sbGVjdGlvbi9jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbGxlY3Rpb24vY29sbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwtY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMCk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-collection',
                templateUrl: './collection.component.html',
                styleUrls: ['./collection.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_post_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/post.model */ "./src/app/shared/post.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _shared_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/activity.service */ "./src/app/shared/activity.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _feed_post_post_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../feed/post/post.component */ "./src/app/feed/post/post.component.ts");













const _c0 = ["f"];
const _c1 = ["contentInput"];
const _c2 = ["stickerInput"];
function CreateComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CreateComponent_form_3_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.error, " ");
} }
const _c3 = function (a0) { return { "invalidAmount": a0 }; };
function CreateComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreateComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateComponent_form_3_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.onContentChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CreateComponent_form_3_Template_input_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r9.onStickerChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "app-post", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("addClick", function CreateComponent_form_3_Template_app_post_addClick_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.onAddClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CreateComponent_form_3_div_16_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.title = $event; })("input", function CreateComponent_form_3_Template_input_input_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.onTitleChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.desc = $event; })("input", function CreateComponent_form_3_Template_input_input_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.onDescriptionChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CreateComponent_form_3_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.amount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Create");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("postDetails", ctx_r1.postDetails)("postContent$", ctx_r1.postContent$)("stickerContent$", ctx_r1.stickerContent$)("createPost", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("min", ctx_r1.minSticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("max", ctx_r1.maxSticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.amount)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c3, !ctx_r1.amountValidation(ctx_r1.amount)));
} }
class CreateComponent {
    constructor(router, authService, postService, activityService, afs) {
        this.router = router;
        this.authService = authService;
        this.postService = postService;
        this.activityService = activityService;
        this.afs = afs;
        this.postContent$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.stickerContent$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.maxSticker = 30;
        this.minSticker = 1;
        this.amountValid = false;
        this.amount = 1;
        this.title = "";
        this.desc = "";
        this.isCreating = false;
        this.error = null;
        this.postSrc = "assets/default image/blank_image@2x.png";
        this.stickerSrc = "assets/default image/blank_image@2x.png";
        this.addIcon = "assets/icons/add_icon@2x.png";
        this.postSize = { 'height': '116px', 'width': '116px' };
        this.stickerSize = { 'height': '57px', 'width': '57px' };
    }
    ngOnInit() {
        this.userSub = this.authService.user.subscribe(authRes => {
            this.uid = authRes.id;
        }, errorMessage => {
            this.handleError(errorMessage);
        });
        this.resetPost();
    }
    resetPost() {
        this.postDetails = new _shared_post_model__WEBPACK_IMPORTED_MODULE_1__["PostDetails"](this.uid, "", "", new Date);
        this.postContent$.next(this.postSrc);
        this.stickerContent$.next(this.stickerSrc);
        this.stickerDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](observer => {
            observer.next(new _shared_post_model__WEBPACK_IMPORTED_MODULE_1__["StickerDetails"](0, 0));
            return { unsubscribe() { } };
        });
    }
    amountValidation(amount) {
        this.amountValid = amount < this.minSticker || amount > this.maxSticker ? false : true;
        return this.amountValid;
    }
    onSubmit() {
        if (!this.isCreating) {
            this.postDetails.title.trim();
            this.postDetails.description.trim();
            if (!this.postContent || !this.postContent || this.postContent === this.postSrc) {
                this.error = "Trust me, click the BIG plus button";
                return;
            }
            if (!this.stickerContent || !this.stickerContent || this.stickerContent === this.stickerSrc) {
                this.error = "A sticker is required! Click the plus sign on the bottom right of the post";
                return;
            }
            if (!this.postDetails.title || this.postDetails.title === "") {
                this.error = "A title is required!";
                return;
            }
            if (this.postDetails.title && this.postDetails.title.length > 19) {
                this.error = "The title is too long!";
                return;
            }
            if (this.postDetails.description && this.postDetails.description.length > 240) {
                this.error = "The description is too long!";
                return;
            }
            if (!this.postDetails.description || this.postDetails.description === "") {
                let valid = confirm("You didn't add a description! Are you sure you want to post?");
                if (!valid) {
                    return;
                }
            }
            if (!Number.isInteger(this.amount)) {
                this.error = "Number of stickers must be whole numbers!";
                return;
            }
            if ((!this.amount || this.amount === null) && this.amount != 0) {
                this.error = "Choose the number of stickers you want to release!";
                return;
            }
            if (this.amount < this.minSticker) {
                this.error = "Must release at least " + this.minSticker + " stickers!";
                return;
            }
            if (this.amount > this.maxSticker) {
                this.error = "Can only release " + this.maxSticker + " stickers! For now...";
                return;
            }
            if (this.amount === 1) {
                let valid = confirm("Are you sure you want to release only 1 sticker? You will receive this sticker, so no collection will be possible!");
                if (!valid) {
                    return;
                }
            }
            this.isCreating = true;
            this.stickerDetails = new _shared_post_model__WEBPACK_IMPORTED_MODULE_1__["StickerDetails"](this.amount, 0);
            this.createPost();
        }
    }
    createPost() {
        let pid = this.afs.createId();
        let pcid = this.afs.createId();
        let scid = this.afs.createId();
        let postSubs = this.postService.addContent(pcid, this.postContent);
        let stickerSubs = this.postService.addContent(scid, this.stickerContent);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])([postSubs, stickerSubs]).subscribe(results => {
            console.log(results[0], results[1]); //log
            if (results[0] === 100 && results[1] === 100) {
                this.postService.addPostDetails(pid, this.postDetails);
                this.postService.addPostContentRef(pid, new _shared_post_model__WEBPACK_IMPORTED_MODULE_1__["PostContent"](pcid, this.postContent.type));
                this.postService.addStickerContentRef(pid, new _shared_post_model__WEBPACK_IMPORTED_MODULE_1__["StickerContent"](scid, this.stickerContent.type));
                this.postService.addStickerDetails(pid, this.stickerDetails);
                this.activityService.addActivity(pid, 'post');
                this.activityService.addCollection(pid, this.uid, this.uid);
            }
        });
        this.router.navigate(['/explore']);
        this.isCreating = false;
    }
    onAddClick(event) {
        event === 'content' ? this.contentInput.nativeElement.click() : this.stickerInput.nativeElement.click();
    }
    onContentChange(event) {
        if (event.target.files) {
            var reader = new FileReader();
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                if (file.size < 4 * 1024 * 1024) { //Firebase upload max size 10 MB
                    this.error = undefined;
                    this.postContent = file;
                    this.postContent$.next(event.target.result);
                }
                else {
                    this.error = 'Post file size too big! There is a 4 MB limit';
                }
            };
        }
    }
    onStickerChange(event) {
        if (event.target.files) {
            var reader = new FileReader();
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                if (file.size < 4 * 1024 * 1024) { //Firebase upload max size 10 MB
                    this.error = undefined;
                    this.stickerContent = file;
                    this.stickerContent$.next(event.target.result);
                }
                else {
                    this.error = 'Sticker file size too big! There is a 4 MB limit';
                }
            };
        }
    }
    onTitleChange() {
        this.title.trim();
        this.postDetails.title = this.title;
    }
    onDescriptionChange() {
        this.desc.trim();
        this.postDetails.description = this.desc;
    }
    handleError(error) {
        console.log(error);
        alert("Damn! An error occurred!");
        this.isCreating = false;
    }
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], viewQuery: function CreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.createForm = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.contentInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.stickerInput = _t.first);
    } }, decls: 4, vars: 2, consts: [[1, "container"], [1, "row"], ["style", "text-align: center;", "class", "horizontal-center", 4, "ngIf"], ["class", "horizontal-center", 3, "ngSubmit", 4, "ngIf"], [1, "horizontal-center", 2, "text-align", "center"], [1, "horizontal-center", 3, "ngSubmit"], ["f", "ngForm"], [1, "container", 2, "margin-bottom", "40px"], [1, "col-md"], [1, "col-md", 2, "position", "relative"], [1, "file-input-container"], ["type", "file", "id", "contentFile", "accept", "image/x-png,image/gif,image/jpeg,image/tiff", "ngModel", "", "name", "content", "required", "", 1, "form-control-file", 3, "change"], ["contentInput", ""], ["type", "file", "id", "stickerFile", "accept", "image/x-png,image/gif,image/jpeg,image/tiff", "ngModel", "", "name", "sticker", "required", "", 1, "form-control-file", 3, "change"], ["stickerInput", ""], [3, "postDetails", "postContent$", "stickerContent$", "createPost", "addClick"], ["class", "danger-alert", 4, "ngIf"], [1, "inputFields"], ["for", "postTitle", 1, "text-left"], ["type", "text", "id", "title", "name", "title", "required", "", "maxlength", "19", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["for", "postDesc", 1, "text-left"], ["type", "text", "id", "description", "name", "description", "maxlength", "240", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "col-6"], [1, "inputAmount"], ["for", "stickerAmount", 1, "text-left"], ["type", "number", "id", "amount", "ngModel", "", "name", "amount", "required", "", 1, "form-control", "amountField", 2, "margin-bottom", "0", 3, "min", "max", "ngModel", "ngClass", "ngModelChange"], ["align", "right", 1, "col-6"], ["for", "empty"], [1, "btn", "btn-default"], [1, "col-md", 2, "margin-bottom", "50px"], [1, "danger-alert"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CreateComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, CreateComponent_form_3_Template, 40, 13, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isCreating);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCreating);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_9__["LoadingSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["RequiredValidator"], _feed_post_post_component__WEBPACK_IMPORTED_MODULE_11__["PostComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["label[_ngcontent-%COMP%]{\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 24px;\n  color: #D8B869;\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus {\n  font-family: 'ChampagneAndLimousines';\n  font-size: 18px;\n  color: #F7F7F7;\n  border: 2px solid #D8B869;\n  background: #131114;\n  margin-bottom: 35px;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 24px;\n  color: #D8B869;\n  border: 2px solid #D8B869;\n  background: #131114;\n  border-radius: 20px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-top:12px\n}\n\n.btn[_ngcontent-%COMP%]:enabled:hover{\n  background: #D8B869;\n  color: #080708;\n}\n\ninput.form-control.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n}\n\ninput.invalidAmount[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n}\n\n.form-control-file[_ngcontent-%COMP%]{\n  border: 0px;\n  background: #080708;\n}\n\n.form-control-file[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 2px solid #D8B869;\n  background: #131114;\n}\n\n.file-input-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top:50%;\n  left: 50%;\n  transform: translate(-50%,-75px);\n  width: 0px;\n  height: 0px;\n  opacity: 0;\n}\n\n.inputFields[_ngcontent-%COMP%] {\n  width: 475px;\n}\n\n.horizontal-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%,0);\n}\n\n.danger-alert[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n  background: #131114;\n  margin-bottom: 35px;\n  border-radius: 10px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 18px;\n  color:#891E13;\n  width: 100%;\n}\n\n.inputAmount[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.amountField[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n@media screen and (max-width: 560px) {\n  .inputFields[_ngcontent-%COMP%] {\n    width: 84.82vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTs7OztFQUlFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNEOEI4Njk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCxcbmlucHV0OmZvY3VzLFxudGV4dGFyZWEsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNGN0Y3Rjc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEOEI4Njk7XG4gIGJhY2tncm91bmQ6ICMxMzExMTQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuIHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNEOEI4Njk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEOEI4Njk7XG4gIGJhY2tncm91bmQ6ICMxMzExMTQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIG1hcmdpbi10b3A6MTJweFxufVxuXG4uYnRuOmVuYWJsZWQ6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICNEOEI4Njk7XG4gIGNvbG9yOiAjMDgwNzA4O1xufVxuXG5pbnB1dC5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzg5MUUxMztcbn1cblxuaW5wdXQuaW52YWxpZEFtb3VudCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4OTFFMTM7XG59XG5cblxuLmZvcm0tY29udHJvbC1maWxle1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogIzA4MDcwODtcbn1cblxuLmZvcm0tY29udHJvbC1maWxlIC5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRDhCODY5O1xuICBiYWNrZ3JvdW5kOiAjMTMxMTE0O1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDo1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNzVweCk7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRGaWVsZHMge1xuICB3aWR0aDogNDc1cHg7XG59XG5cbi5ob3Jpem9udGFsLWNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xufVxuXG4uZGFuZ2VyLWFsZXJ0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzg5MUUxMztcbiAgYmFja2dyb3VuZDogIzEzMTExNDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjojODkxRTEzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmlucHV0QW1vdW50IHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uYW1vdW50RmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5pbnB1dEZpZWxkcyB7XG4gICAgd2lkdGg6IDg0Ljgydnc7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _shared_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] }, { type: _shared_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }]; }, { createForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['f']
        }], contentInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['contentInput']
        }], stickerInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['stickerInput']
        }] }); })();


/***/ }),

/***/ "./src/app/explore/explore.component.ts":
/*!**********************************************!*\
  !*** ./src/app/explore/explore.component.ts ***!
  \**********************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _feed_feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feed/feed.service */ "./src/app/feed/feed.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feed/feed.component */ "./src/app/feed/feed.component.ts");





function ExploreComponent_app_feed_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feed", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postsList$", ctx_r0.postsList)("feedType", "afs");
} }
class ExploreComponent {
    constructor(feedService) {
        this.feedService = feedService;
    }
    ngOnInit() {
        this.postsList = this.feedService.getExplorePage();
    }
    ngOnDestroy() {
    }
}
ExploreComponent.ɵfac = function ExploreComponent_Factory(t) { return new (t || ExploreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feed_feed_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"])); };
ExploreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreComponent, selectors: [["app-explore"]], decls: 1, vars: 1, consts: [[3, "postsList$", "feedType", 4, "ngIf"], [3, "postsList$", "feedType"]], template: function ExploreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreComponent_app_feed_0_Template, 1, 2, "app-feed", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.postsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_3__["FeedComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-explore',
                templateUrl: './explore.component.html',
                styleUrls: ['./explore.component.css']
            }]
    }], function () { return [{ type: _feed_feed_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_infinite_scroll_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/infinite-scroll.service */ "./src/app/shared/infinite-scroll.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post/post.component */ "./src/app/feed/post/post.component.ts");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");








function FeedComponent_div_3_app_post_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-post", 6);
} if (rf & 2) {
    const postDetails_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("postDetails", postDetails_r5);
} }
function FeedComponent_div_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Thats all folks!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FeedComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FeedComponent_div_3_app_post_1_Template, 1, 1, "app-post", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FeedComponent_div_3_p_2_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const posts_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", posts_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", posts_r2.length === 0);
} }
function FeedComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class FeedComponent {
    constructor(infiniteScrollService) {
        this.infiniteScrollService = infiniteScrollService;
        this.feedType = 'afs';
        this.feedList$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.batch = 0;
        this.maxBatch = 0;
        this.batchSize = 4; //number of posts to load - min batch size is 2
        this.batchNumber = 0;
        this.addIcon = "assets/icons/add_icon@2x.png";
    }
    ngOnInit() {
        this.done = false;
        this.failSafe = true;
        this.loading = true;
        this.postsList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)).subscribe(response => {
            this.postsList = response;
            this.dateSort();
            this.initBatch();
            this.infiniteScrollService.getScroll$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$))
                .subscribe((event) => {
                event === 'error' ? this.failSafe = true : this.failSafe = false;
                if (!this.done && !this.failSafe) {
                    if (event === 'bottom') {
                        this.loading = true;
                        this.moreBatch();
                    }
                }
            });
        });
    }
    dateSort() {
        if (this.feedType === 'afs') {
            this.postsList.sort((a, b) => b.dateCreated.toMillis() - a.dateCreated.toMillis());
        }
        else if (this.feedType === 'db') {
            this.postsList.sort((a, b) => b.dateCreated - a.dateCreated);
        }
    }
    initBatch() {
        if (this.postsList.length <= this.batchSize) {
            this.feedList$.next(this.postsList);
            this.done = true;
        }
        else {
            this.feedList$.next(this.postsList.slice(0, this.batchSize));
        }
        this.batchNumber++;
        this.loading = false;
    }
    // more() { // get the next post - used in scroll to maintain a steady flow of posts
    //   if ((this.postsList.length - this.batchSize+this.batchNumber) <= 0) {
    //     this.feedList$.next(this.postsList);
    //     this.done = true;
    //   } else {
    //     this.feedList$.next(this.postsList.slice(0,this.batchSize+this.batchNumber));
    //   }
    //   this.batchNumber++;
    // }
    moreBatch() {
        if ((this.postsList.length - this.batchSize * this.batchNumber) <= 0) {
            this.feedList$.next(this.postsList);
            this.done = true;
        }
        else {
            this.feedList$.next(this.postsList.slice(0, this.batchSize * this.batchNumber));
        }
        this.batchNumber++;
        this.loading = false;
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
        this.feedList$.complete();
    }
}
FeedComponent.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_infinite_scroll_service__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollService"])); };
FeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeedComponent, selectors: [["app-feed"]], inputs: { postsList$: "postsList$", feedType: "feedType" }, decls: 6, vars: 4, consts: [[1, "container"], ["align", "center", 1, "row"], [1, "col-md-12"], [4, "ngIf"], ["style", "text-align: center;", "class", "horizontal-center", 4, "ngIf"], ["class", "post", 3, "postDetails", 4, "ngFor", "ngForOf"], [1, "post", 3, "postDetails"], [1, "horizontal-center", 2, "text-align", "center"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FeedComponent_div_3_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, FeedComponent_div_5_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.feedList$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading || !ctx.feedList$);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _post_post_component__WEBPACK_IMPORTED_MODULE_5__["PostComponent"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_6__["LoadingSpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".horizontal-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%,0);\n}\n\n.more-post[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.fail-safe[_ngcontent-%COMP%]{\n  margin-bottom: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvZmVlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvcml6b250YWwtY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMCk7XG59XG5cbi5tb3JlLXBvc3Qge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYWlsLXNhZmV7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                // changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'app-feed',
                templateUrl: './feed.component.html',
                styleUrls: ['./feed.component.css']
            }]
    }], function () { return [{ type: _shared_infinite_scroll_service__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollService"] }]; }, { postsList$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], feedType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/feed/feed.service.ts":
/*!**************************************!*\
  !*** ./src/app/feed/feed.service.ts ***!
  \**************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_activity_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/activity.service */ "./src/app/shared/activity.service.ts");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");







class FeedService {
    constructor(activityService, postService, afs) {
        this.activityService = activityService;
        this.postService = postService;
        this.afs = afs;
    }
    // get explore page
    getExplorePage() {
        return this.afs.collection('post details').valueChanges({ idField: 'pid' });
    }
    // get profile page
    getProfilePage(uid) {
        return this.afs.collection('post details', ref => ref.where('uid', '==', uid)).valueChanges({ idField: 'pid' });
    }
    // generate collection page by uid
    getCollectionPage(uid, notifier$) {
        let collectionList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        let collectionDetails = [];
        this.activityService.getUserCollection(uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(notifier$)) //get details of user collection
            .subscribe((response) => {
            let postDetailsLists = [];
            collectionDetails = response;
            if (response.length === 0) {
                collectionList.next(postDetailsLists);
            }
            response.forEach(collection => {
                this.postService.getPostDetails(collection.pid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => {
                    return Object.assign({ pid: collection.pid }, changes);
                })).subscribe(res => {
                    postDetailsLists.push(res);
                    collectionList.next(postDetailsLists);
                });
            });
        });
        return collectionList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(postsList => {
            console.log(postsList); //log
            if (postsList.length === 0) {
                return undefined;
            }
            postsList = postsList.filter(post => {
                return uid != post.uid;
            });
            postsList.forEach(post => {
                const index = collectionDetails.findIndex(collection => {
                    return collection.pid === post.pid;
                });
                post.dateCreated = collectionDetails[index].timeStamp;
            });
            return postsList;
        }));
    }
}
FeedService.ɵfac = function FeedService_Factory(t) { return new (t || FeedService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"])); };
FeedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FeedService, factory: FeedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_activity_service__WEBPACK_IMPORTED_MODULE_3__["ActivityService"] }, { type: _shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feed/post/comments/comment-list/comment-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/feed/post/comments/comment-list/comment-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: CommentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentListComponent", function() { return CommentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment/comment.component */ "./src/app/feed/post/comments/comment/comment.component.ts");




function CommentListComponent_app_comment_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-comment", 2);
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("commentDetails", comment_r1);
} }
class CommentListComponent {
    constructor() {
        this.commentList = [];
    }
    ngOnInit() { }
}
CommentListComponent.ɵfac = function CommentListComponent_Factory(t) { return new (t || CommentListComponent)(); };
CommentListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentListComponent, selectors: [["app-comment-list"]], inputs: { commentList: "commentList", postId: "postId" }, decls: 2, vars: 1, consts: [[1, "comments"], [3, "commentDetails", 4, "ngFor", "ngForOf"], [3, "commentDetails"]], template: function CommentListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CommentListComponent_app_comment_1_Template, 1, 1, "app-comment", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.commentList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _comment_comment_component__WEBPACK_IMPORTED_MODULE_2__["CommentComponent"]], styles: [".comments[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 230px;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9wb3N0L2NvbW1lbnRzL2NvbW1lbnQtbGlzdC9jb21tZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9wb3N0L2NvbW1lbnRzL2NvbW1lbnQtbGlzdC9jb21tZW50LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21tZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIzMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment-list',
                templateUrl: './comment-list.component.html',
                styleUrls: ['./comment-list.component.css']
            }]
    }], function () { return []; }, { commentList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], postId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/feed/post/comments/comment/comment.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feed/post/comments/comment/comment.component.ts ***!
  \*****************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/post.service */ "./src/app/shared/post.service.ts");



class CommentComponent {
    constructor(postService) {
        this.postService = postService;
        this.spacingSticker = "3px";
    }
    ngOnInit() {
        // let userId = this.commentDetails.userId;
        // this.profileDetails = this.profileService.getProfile(userId);
    }
    getProfileSticker(postId) {
        //this.postDetails = this.postService.getPost(postId);
        // return this.postDetails.sticker;
    }
}
CommentComponent.ɵfac = function CommentComponent_Factory(t) { return new (t || CommentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
CommentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentComponent, selectors: [["app-comment"]], inputs: { commentDetails: "commentDetails" }, decls: 6, vars: 0, consts: [[1, "row", "row-no-gutters", 2, "margin", "0", "padding", "0", "margin-bottom", "10px", "width", "100%"], [1, "col-md-2", 2, "padding-left", "0", "padding-bottom", "4px", "height", "24px"], [1, "float-left", "Name"], [1, "col-md-7", "comment", "float-left", "text-left", 2, "padding", "0", "padding-left", "4px", "padding-bottom", "4px", "height", "24px"], [1, "col-md-3", 2, "padding", "0", "padding-right", "0px", "height", "24px"], [1, "row", 2, "width", "100%"]], template: function CommentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".comment[_ngcontent-%COMP%]{\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 12px;\n  color: #F7F7F7;\n}\n\n.Name[_ngcontent-%COMP%] {\n  font-family: 'Comfortaa';\n  font-weight: bold;\n  font-size: 14px;\n  color: #F7F7F7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9wb3N0L2NvbW1lbnRzL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mZWVkL3Bvc3QvY29tbWVudHMvY29tbWVudC9jb21tZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tbWVudHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5OYW1lIHtcbiAgZm9udC1mYW1pbHk6ICdDb21mb3J0YWEnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI0Y3RjdGNztcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comment',
                templateUrl: './comment.component.html',
                styleUrls: ['./comment.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }]; }, { commentDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/feed/post/comments/comments.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/feed/post/comments/comments.component.ts ***!
  \**********************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment-list/comment-list.component */ "./src/app/feed/post/comments/comment-list/comment-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class CommentsComponent {
    constructor() {
        this.userComment = "";
        this.commentList = [];
    }
    ngOnInit() {
        // this.dataService.queryData('comment', "postId", this.postId)
        // .subscribe(comments => {
        //   console.log(comments);
        //   this.commentList = comments;
        // });
    }
    postComment() {
        //   if (this.userComment.trim() != "" ) {
        //     this.commentDetails = new Comment(0,0,0,this.userComment,[],new Date)
        //     this.dataService.addData('comment', this.commentDetails)
        //     .subscribe(responseData => {
        //       console.log(this.commentDetails, responseData)
        //       this.commentList.push(this.commentDetails);
        //     });
        //     this.userComment = "";
        //   }
    }
}
CommentsComponent.ɵfac = function CommentsComponent_Factory(t) { return new (t || CommentsComponent)(); };
CommentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentsComponent, selectors: [["app-comments"]], inputs: { postId: "postId" }, decls: 16, vars: 4, consts: [[1, "row", 2, "width", "100%", "padding-left", "0px"], [1, "row"], [1, "heading", "float-left"], [1, "row", 2, "margin-top", "0"], [1, "commentList"], [3, "postId", "commentList"], [1, "row", 2, "padding-left", "25px", "padding-top", "15px"], [2, "width", "334px"], [1, "row", 2, "width", "100%"], [1, "col-10", 2, "padding", "0px", "padding-right", "10px"], ["type", "text", "id", "comment", "name", "comment", "placeholder", "Please enter comment", 1, "form-control", 2, "width", "100%", 3, "ngModel", "ngModelChange", "keydown"], [1, "col-2", 2, "padding", "0px"], [1, "btn", 2, "width", "50px", 3, "disabled", "click"], [1, "centerStuff"]], template: function CommentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-comment-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CommentsComponent_Template_input_ngModelChange_11_listener($event) { return ctx.userComment = $event; })("keydown", function CommentsComponent_Template_input_keydown_11_listener($event) { return $event.keyCode === 13 ? ctx.postComment() : 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CommentsComponent_Template_button_click_13_listener() { return ctx.postComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postId", 1)("commentList", ctx.commentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.userComment.trim() === "");
    } }, directives: [_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_1__["CommentListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".heading[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 22px;\n  color: #F7F7F7;\n}\n\n.commentList[_ngcontent-%COMP%]{\n  width: 454px;\n}\n\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, .btn[_ngcontent-%COMP%]  {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 15px;\n  color: #F7F7F7;\n  border: 2px solid #D8B869;\n  background:rgba(19, 17, 20, 0.6);\n  height: 30px;\n}\n\n.centerStuff[_ngcontent-%COMP%]{\n  position: absolute;\n  top:50%;\n  left:50%;\n  transform: translate(-50%,-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9wb3N0L2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUiwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9mZWVkL3Bvc3QvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5jb21tZW50TGlzdHtcbiAgd2lkdGg6IDQ1NHB4O1xufVxuXG5pbnB1dCxcbmlucHV0OmZvY3VzLFxuLmJ0biAge1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI0Y3RjdGNztcbiAgYm9yZGVyOiAycHggc29saWQgI0Q4Qjg2OTtcbiAgYmFja2dyb3VuZDpyZ2JhKDE5LCAxNywgMjAsIDAuNik7XG4gIGhlaWdodDogMzBweDtcbn1cblxuXG4uY2VudGVyU3R1ZmZ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjUwJTtcbiAgbGVmdDo1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comments',
                templateUrl: './comments.component.html',
                styleUrls: ['./comments.component.css']
            }]
    }], function () { return []; }, { postId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/feed/post/holder/holder.component.ts":
/*!******************************************************!*\
  !*** ./src/app/feed/post/holder/holder.component.ts ***!
  \******************************************************/
/*! exports provided: HolderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolderComponent", function() { return HolderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function () { return { "padding-left": "0" }; };
class HolderComponent {
    constructor(postService) {
        this.postService = postService;
        this.spacingSticker = "0px";
    }
    ngOnInit() {
        // this.profileDetails = this.profileService.getProfile(this.userId);
    }
    getProfileSticker(postId) {
        // return this.postService.getPost(postId).sticker;
    }
}
HolderComponent.ɵfac = function HolderComponent_Factory(t) { return new (t || HolderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"])); };
HolderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HolderComponent, selectors: [["app-holder"]], inputs: { userId: "userId" }, decls: 5, vars: 2, consts: [["Style", "padding:0; width: 100%; margin-top: 4px;", 1, "row"], [1, "col-md-7", 3, "ngStyle"], [1, "float-left", "Name"], [1, "col-md-5", 2, "padding", "0px"], [1, "row", 2, "width", "100%"]], template: function HolderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".Name[_ngcontent-%COMP%] {\n  font-family: 'Comfortaa';\n  font-weight: bold;\n  font-size: 18px;\n  color: #F7F7F7;\n  letter-spacing: 0.16em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9wb3N0L2hvbGRlci9ob2xkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mZWVkL3Bvc3QvaG9sZGVyL2hvbGRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk5hbWUge1xuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjRjdGN0Y3O1xuICBsZXR0ZXItc3BhY2luZzogMC4xNmVtO1xufVxuXG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HolderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-holder',
                templateUrl: './holder.component.html',
                styleUrls: ['./holder.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }]; }, { userId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/feed/post/post-edit/post-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/feed/post/post-edit/post-edit.component.ts ***!
  \************************************************************/
/*! exports provided: PostEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEditComponent", function() { return PostEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PostEditComponent {
    constructor() { }
    ngOnInit() {
    }
}
PostEditComponent.ɵfac = function PostEditComponent_Factory(t) { return new (t || PostEditComponent)(); };
PostEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostEditComponent, selectors: [["app-post-edit"]], decls: 2, vars: 0, template: function PostEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "post-edit works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlZWQvcG9zdC9wb3N0LWVkaXQvcG9zdC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-edit',
                templateUrl: './post-edit.component.html',
                styleUrls: ['./post-edit.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/feed/post/post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/feed/post/post.component.ts ***!
  \*********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_shared_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var src_app_shared_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/activity.service */ "./src/app/shared/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_window_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/window.service */ "./src/app/shared/window.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../sticker/sticker.component */ "./src/app/sticker/sticker.component.ts");













function PostComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_div_1_div_2_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.onAddClick("content"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.addIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1, a2) { return { "opacity": a0, "height": a1, "width": a2 }; };
function PostComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_div_1_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r9.showComments ? ctx_r9.showDetails = false : ctx_r9.showDetails = !ctx_r9.showDetails; ctx_r9.showComments = false; return ctx_r9.holderToggle = false; })("load", function PostComponent_div_1_Template_img_load_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PostComponent_div_1_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r5 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", content_r5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c0, ctx_r0.showDetails === true ? "50%" : "100%", ctx_r0.imageProp.height, ctx_r0.imageProp.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.createPost);
} }
function PostComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loading-spinner", 11);
} }
function PostComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r16 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", details_r16.username, " ");
} }
function PostComponent_div_5_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 26);
} }
function PostComponent_div_5_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sticker", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sticker_r21 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pid", sticker_r21.pid)("size", ctx_r19.stickerSize);
} }
function PostComponent_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostComponent_div_5_div_6_div_1_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PostComponent_div_5_div_6_div_2_Template, 2, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stickers_r17 = ctx.ngIf;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r13.getEmptySlots(stickers_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", stickers_r17);
} }
function PostComponent_div_5_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_div_5_div_9_div_2_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r24.onAddClick("sticker"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r23.addIcon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0, a1) { return { "height": a0, "width": a1 }; };
function PostComponent_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("load", function PostComponent_div_5_div_9_Template_img_load_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.onStickerLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PostComponent_div_5_div_9_div_2_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stickerContent_r22 = ctx.ngIf;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", stickerContent_r22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](3, _c1, ctx_r14.stickerProp.height, ctx_r14.stickerProp.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.createPost);
} }
function PostComponent_div_5_div_14_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Coming soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostComponent_div_5_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_div_5_div_14_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); ctx_r29.showComments = !ctx_r29.showComments; return ctx_r29.holderToggle = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PostComponent_div_5_div_14_div_5_Template, 5, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r15.showComments === true);
} }
const _c2 = function (a0) { return { "height": a0 }; };
function PostComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PostComponent_div_5_div_3_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PostComponent_div_5_div_6_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_div_5_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.collectSticker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PostComponent_div_5_div_9_Template, 3, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PostComponent_div_5_div_14_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, ctx_r3.showComments === false ? ctx_r3.tabClose : ctx_r3.tabOpen));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r3.profileRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, ctx_r3.profileDetails$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 9, !ctx_r3.fetchingWindow && ctx_r3.profileStickers$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 11, ctx_r3.stickerContent$));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r3.engagementProp);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.createPost);
} }
function PostComponent_div_11_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r33.views);
} }
function PostComponent_div_11_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.collected);
} }
function PostComponent_div_11_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r35.postDetails.description);
} }
function PostComponent_div_11_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Coming soon!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_div_11_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r37.holderToggle = !ctx_r37.holderToggle; return ctx_r37.showComments = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Holder List");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PostComponent_div_11_div_11_Template, 8, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PostComponent_div_11_div_15_Template, 8, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PostComponent_div_11_div_16_Template, 4, 1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, PostComponent_div_11_div_17_Template, 5, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.engagementRatio === 1 && !ctx_r4.createPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.engagementRatio === 1 && !ctx_r4.createPost);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.holderToggle === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.holderToggle === true);
} }
class PostComponent {
    constructor(postService, authService, usersService, activityService, router, windowService) {
        this.postService = postService;
        this.authService = authService;
        this.usersService = usersService;
        this.activityService = activityService;
        this.router = router;
        this.windowService = windowService;
        this.createPost = false;
        this.addClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.addIcon = "assets/icons/add_icon@2x.png";
        this.imageProp = { 'height': 'auto', 'width': 'auto' };
        this.stickerProp = { 'height': 'auto', 'width': 'auto' };
        this.engagementProp = { 'width': '0', 'background': '#D8B869' };
        this.viewed = false;
        this.collectingSticker = false;
        this.showDetails = false;
        this.showComments = false;
        this.holderToggle = false;
        this.collected = '0';
        this.views = '0';
        this.engagementRatio = 0;
    }
    ngOnInit() {
        this.fetchingWindow = true;
        this.windowService.checkWidth();
        this.windowService.screenWidthValue.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$))
            .subscribe(val => {
            if (val) {
                this.windowSize = val;
                this.fetchingWindow = false;
                if (val < 560) {
                    this.tabClose = (71 * val / 560).toString() + 'px';
                    this.tabOpen = (400 * val / 560).toString() + 'px';
                    this.stickerSize = (24 * val / 560).toString() + 'px';
                }
                else {
                    this.tabClose = '71px';
                    this.tabOpen = '400px';
                    this.stickerSize = '24px';
                }
            }
        });
        this.restartPost();
    }
    restartPost() {
        this.userSubs = this.authService.user.subscribe(response => {
            this.isAuthenticated = !!response;
            if (this.isAuthenticated) {
                this.myUid = response.id;
            }
        }, errorMessage => {
            console.log(errorMessage);
        });
        this.uid = this.postDetails.uid;
        this.profileRoute = "/profile/" + this.uid;
        this.setUpProfile();
        if (!this.createPost) {
            this.pid = this.postDetails.pid; //exists because of idfield
            this.setUpPost();
            this.setUpActivity();
            this.setUpEngagement();
        }
    }
    setUpPost() {
        this.postContent$ = this.postService.getPostContent(this.pid);
        this.stickerContent$ = this.postService.getStickerContent(this.pid);
        this.postService.getStickerDetails(this.pid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)).subscribe(response => {
            this.stickerDetails = response;
            this.setUpEngagement();
        });
    }
    setUpProfile() {
        this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
        this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
    }
    setUpActivity() {
        this.activityService.getActivity(this.pid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)).subscribe(response => {
            this.activity = response[0];
            this.setUpEngagement();
        });
        ;
    }
    getEmptySlots(stickers) {
        return [...Array(5 - stickers.length).keys()];
    }
    setUpEngagement() {
        if (this.stickerDetails && this.activity) {
            let colour;
            this.engagementRatio = this.activity.collected / this.stickerDetails.amountReleased;
            this.engagementRatio === 1 ? colour = '#53BD9C' : colour = '#D8B869';
            let percentage = (this.engagementRatio * 100).toString() + '%';
            this.engagementProp.width = percentage;
            this.engagementProp.background = colour;
            if (this.engagementRatio === 1) {
                this.views = this.convertToShort(this.activity.views);
                this.collected = this.convertToShort(this.activity.collected);
            }
        }
    }
    getDetailsButton() {
        let close = "https://i.ibb.co/ZmbVSG4/Post-Detail-Button-3x.png";
        let open = "https://i.ibb.co/p1fcnfh/Post-Detail-Button-open-3x.png";
        return this.showDetails === false ? close : open;
    }
    onLoad(event) {
        let width = event.target.width;
        let height = event.target.height;
        if (width / height > 1) {
            this.imageProp.width = 'auto';
            this.imageProp.height = '100%';
        }
        else if (width / height <= 1 && width / height < 475 / 580) {
            this.imageProp.width = '100%';
            this.imageProp.height = 'auto';
        }
        else {
            this.imageProp.width = 'auto';
            this.imageProp.height = '580px';
        }
    }
    onStickerLoad(event) {
        let width = event.target.width;
        let height = event.target.height;
        if (width / height < 1) {
            this.stickerProp.width = '100%';
            this.stickerProp.height = 'auto';
        }
        else {
            this.stickerProp.width = 'auto';
            this.stickerProp.height = '100%';
        }
    }
    convertToShort(num) {
        let short = 0;
        if (num / 1000000 <= 1) {
            if (num / 1000 <= 1) {
                return num.toString();
            }
            else {
                short = Math.round((num / 1000) * 10) / 10;
                return short.toString() + 'K';
            }
        }
        else {
            short = Math.round((num / 1000000) * 100) / 100;
            return short.toString() + 'M';
        }
    }
    onAddClick(field) {
        this.addClick.emit(field);
    }
    postView() {
        if (!this.viewed && !this.createPost && this.isAuthenticated) {
            this.viewed = true;
            this.activityService.addViews(this.pid, this.myUid, this.uid);
        }
    }
    collectSticker() {
        if (this.isAuthenticated) {
            if (!this.collectingSticker && !this.createPost) {
                this.collectingSticker = true;
                this.activityService.getPostCollection(this.pid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(response => {
                    let valid = false;
                    for (let key in response) {
                        if (response[key].collectorID === this.myUid) {
                            valid = false;
                            alert("You already collected this sticker!");
                            break;
                        }
                        else {
                            valid = true;
                        }
                    }
                    if (valid) {
                        if (this.engagementRatio < 1) {
                            this.activityService.addCollection(this.pid, this.myUid, this.uid);
                            alert("Sticker collected! Go to My Collection and select Edit to use your new Sticker");
                        }
                        else {
                            alert("No more Stickers left!");
                        }
                    }
                    this.collectingSticker = false;
                });
            }
        }
        else {
            this.router.navigate(['/auth']);
        }
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_window_service__WEBPACK_IMPORTED_MODULE_8__["WindowStateService"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { postDetails: "postDetails", createPost: "createPost", postContent$: "postContent$", stickerContent$: "stickerContent$" }, outputs: { addClick: "addClick" }, decls: 12, vars: 8, consts: [[1, "postContainer", 3, "click"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["class", "profileTab", 3, "ngStyle", 4, "ngIf"], [1, "postDetails"], [1, "postTitle", 2, "cursor", "pointer", 3, "click"], [1, "showDetails", 3, "click"], ["alt", "Post-Detail-Button", 3, "src"], [4, "ngIf"], ["alt", "post content", 1, "backgroundImg", 3, "src", "ngStyle", "click", "load"], ["alt", "add", 1, "add-icon", 2, "width", "116px", "height", "116px", 3, "src", "click"], [1, "add-icon"], [1, "profileTab", 3, "ngStyle"], [1, "profileDetails"], [2, "cursor", "pointer", 3, "routerLink"], ["class", "name", "style", "width: 180px; overflow-X: scroll; overflow-y: hidden; text-align: left;", 4, "ngIf"], [1, "profileStickers"], ["class", "row", "style", "width: 100%;", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["class", "postSticker", 4, "ngIf"], [1, "engagementBar"], [1, "bar"], [1, "engagement", 3, "ngStyle"], [1, "name", 2, "width", "180px", "overflow-x", "scroll", "overflow-y", "hidden", "text-align", "left"], [1, "row", 2, "width", "100%"], ["class", "col", "style", "padding: 0px; height: 24px", 4, "ngFor", "ngForOf"], [1, "col", 2, "padding", "0px", "height", "24px"], [3, "pid", "size"], [1, "postSticker"], ["width", "100%", "alt", "post content", 1, "sticker-img", 3, "src", "ngStyle", "load"], ["alt", "add", 1, "add-icon", "sticker-add", 3, "src", "click"], [1, "commentButton", 2, "cursor", "pointer", 3, "click"], [1, "hideExtra"], [1, "buttonBackground"], ["src", "https://i.ibb.co/twfK1TW/icons-3x.png", "alt", "comment button"], ["class", "commentsSection", 4, "ngIf"], [1, "commentsSection"], [1, "row", 2, "height", "100%", "position", "relative"], [1, "col", 2, "position", "absolute", "left", "50%", "top", "50%", "transform", "translate(-50%,50%)"], [1, "temp"], [1, "row", 2, "margin", "0", "margin-top", "72px", "width", "100%"], [1, "col-6", 2, "padding-left", "15px"], [1, "holderList", 3, "click"], [1, "row"], [1, "col-2", 2, "padding-right", "0px"], ["src", "/assets/icons/sticker-icon.png", "alt", "sticker icon"], [1, "col-8", 2, "padding-left", "1px"], [1, "float-left"], [1, "col-2"], ["class", "col-4", 4, "ngIf"], [1, "row", 2, "width", "100%", "margin-top", "5px"], [1, "col-6", 2, "padding-left", "15px", "height", "24px"], ["class", "row", "style", "width: 100%; margin:0;", 4, "ngIf"], ["class", "holderContainer", 4, "ngIf"], [1, "col-4"], [1, "col-3", 2, "padding-right", "11px", "padding-left", "0px", "padding-top", "4px"], ["src", "https://i.ibb.co/pWGZ1k4/views-3x.png", "alt", "views", 1, "float-right"], [1, "col-5", 2, "padding-right", "19px", "padding-left", "0px"], [1, "metrics", "float-left"], ["src", "/assets/icons/sticker-icon.png", "alt", "sticker icon", 1, "float-right"], [1, "row", 2, "width", "100%", "margin", "0"], [1, "col-12", 2, "padding-left", "19px", "word-wrap", "break-word"], [1, "description", "float-left", "text-left", 2, "width", "100%"], [1, "holderContainer"], [1, "col", 2, "position", "absolute", "left", "50%", "top", "50%", "transform", "translate(-50%,-50%)"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_Template_div_click_0_listener() { return ctx.postView(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostComponent_div_1_Template, 3, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PostComponent_ng_template_3_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PostComponent_div_5_Template, 15, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_Template_div_click_7_listener() { return ctx.showDetails = !ctx.showDetails; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostComponent_Template_div_click_9_listener() { return ctx.showDetails = !ctx.showDetails; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PostComponent_div_11_Template, 18, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 6, ctx.postContent$))("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.fetchingWindow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.postDetails.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.getDetailsButton(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDetails === true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_11__["StickerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  --stickerSpace: 35px;\n}\n\n.postContainer[_ngcontent-%COMP%] {\n  width: 475px;\n  height: 580px;\n  border: 4px solid #D8B869;\n  border-radius: 33px;\n  padding: 0;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 35px;\n}\n\n.backgroundImg[_ngcontent-%COMP%] {\n margin: 0 0;\n position: absolute;\n top: 50%;\n left: 50%;\n transform: translate(-50%,-50%);\n}\n\n.profileTab[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 71px;\n\n  padding: 0;\n\n  \n  background: rgba(8,7,8,0.6);\n\n  border-bottom-left-radius: 26px;\n  border-bottom-right-radius: 26px;\n}\n\n.profileTab[_ngcontent-%COMP%]   .profileDetails[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 12px;\n  left: 29.5px;\n  width: 334px;\n  height: 25px;\n}\n\n.profileTab[_ngcontent-%COMP%]   .profileDetails[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 4px;\n  left: 0px;\n  font-size: 22px;\n  height: 100%;\n  color: #F7F7F7;\n  letter-spacing: 0.160em;\n}\n\n.profileDetails[_ngcontent-%COMP%]   .profileStickers[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  height: 24px;\n  width: 144px;\n  padding: 0;\n}\n\n.profileTab[_ngcontent-%COMP%]   .postSticker[_ngcontent-%COMP%] {\n  height: 82px;\n  width: 82px;\n  background-color: #070707;\n  border: 2px solid #707070;\n  border-radius: 50%;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n  bottom: 24px;\n  right: 8px;\n}\n\n.postSticker[_ngcontent-%COMP%]   .sticker-img[_ngcontent-%COMP%]{\n  padding: 0;\n  margin: 0 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n\n.profileTab[_ngcontent-%COMP%]   .engagementBar[_ngcontent-%COMP%]{\n  position: absolute;\n  bottom: 48px;\n  left: 29.5px;\n  width: 334px;\n  height: 11px;\n  overflow: hidden;\n}\n\n.profileTab[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{\n  position: absolute;\n  width: 100%;\n  height: 8px;\n  border-radius: 8px;\n  border: 1px solid #D8B869;\n  overflow: hidden;\n  padding: 0px;\n}\n\n.profileTab[_ngcontent-%COMP%]   .engagement[_ngcontent-%COMP%]{\n  position: absolute;\n  height: 8px;\n  border-radius: 8px;\n  padding: 0px;\n  width: 50%;\n}\n\n.profileTab[_ngcontent-%COMP%]   .commentButton[_ngcontent-%COMP%]{\n  padding: 0;\n  position: absolute;\n  top: -15px;\n  left: 0px;\n  width: 30px;\n  height: 30px;\n}\n\n.commentButton[_ngcontent-%COMP%]   .buttonBackground[_ngcontent-%COMP%]{\n  padding: 0;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n\n  width: 30px;\n  height: 30px;\n  border-radius: 15px 15px 0 0;\n\n  background: rgba(8,7,8,0.6);\n}\n\n.commentButton[_ngcontent-%COMP%]   .hideExtra[_ngcontent-%COMP%]{\n  padding: 0;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 30px;\n  height: 15px;\n  overflow: hidden;\n}\n\n.commentButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  padding: 0;\n\n  width: 14px;\n  height: auto;\n\n  margin: 0 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n\n.postDetails[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  pointer-events:none;\n}\n\n.postDetails[_ngcontent-%COMP%]   .postTitle[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 8px;\n  left: 19px;\n  font-family: 'ChampagneAndLimousines';\n  font-size: 24px;\n  color: #F7F7F7;\n  pointer-events:auto;\n  letter-spacing: 0.05em;\n\n}\n\n.postDetails[_ngcontent-%COMP%]   .showDetails[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 15px;\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  pointer-events:auto;\n}\n\n.showDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  width: 20px;\n  height: auto;\n}\n\n.postDetails[_ngcontent-%COMP%]   .holderList[_ngcontent-%COMP%]{\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 18px;\n  letter-spacing: 0.05em;\n  cursor: pointer;\n  pointer-events:auto;\n}\n\n.holderList[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n position: absolute;\n top:50%;\n left: 50%;\n transform: translate(-20%,-50%);\n height: 18px;\n width: auto;\n}\n\n.holderList[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #F7F7F7;\n}\n\n.postDetails[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{\n  width: auto;\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 16px;\n  color: #F7F7F7;\n  margin-bottom: 0;\n}\n\n.postDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 16px;\n  width: auto;\n}\n\n.description[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-size: 18px;\n  color: #F7F7F7;\n  letter-spacing: 0.05em;\n}\n\n.commentsSection[_ngcontent-%COMP%]{\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  top: 10px;\n  height: 225px;\n  width: auto;\n}\n\n.commentsSection[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]{\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n.holderContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 45px;\n  right:45px;\n  top: 150px;\n  height: 255px;\n  border: 2px solid #D8B869;\n  border-radius: 15px;\n  background: rgba(8,7,8,0.6);\n  pointer-events: auto;\n}\n\n.holderListContainer[_ngcontent-%COMP%] {\n  height: 245px;\n  padding-left: 10px;\n  padding-right: 5px;\n  padding-top: 3px;\n  overflow-y: auto;\n}\n\n.add-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  cursor: pointer;\n}\n\n.temp[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  height: 100%;\n  color: #D8B869;\n}\n\n.sticker-add[_ngcontent-%COMP%] {\n  width: 57px; \n  height: 57px;\n}\n\n@media screen and (max-width: 560px) {\n  .postContainer[_ngcontent-%COMP%] {\n    width: 85vw;\n    height: 103.5vw;\n    border-radius: 5.89vw;\n  }\n\n  .profileTab[_ngcontent-%COMP%] {\n    height: 12.68vw;\n    border-bottom-left-radius: 4.64vw;\n    border-bottom-right-radius: 4.64vw;\n  }\n\n  .profileTab[_ngcontent-%COMP%]   .profileDetails[_ngcontent-%COMP%]{\n    bottom: 2.14vw;\n    left: 5.26vw;\n    width: 59.64vw;\n    height: 4.46vw;\n  }\n\n  .profileTab[_ngcontent-%COMP%]   .profileDetails[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{\n    bottom: 0.714vw;\n    font-size: 3.93vw;\n  }\n\n  .profileDetails[_ngcontent-%COMP%]   .profileStickers[_ngcontent-%COMP%]{\n    height: 4.29vw;\n    width: 25.71vw;\n  }\n\n  .profileTab[_ngcontent-%COMP%]   .postSticker[_ngcontent-%COMP%] {\n    height: 14.64vw;\n    width: 14.64vw;\n    bottom: 4.29vw;\n    right: 1.42vw;\n  }\n\n  .profileTab[_ngcontent-%COMP%]   .engagementBar[_ngcontent-%COMP%]{\n    bottom: 8.57vw;\n    left: 5.267vw;\n    width: 59.64vw;\n    height: 1.96vw;\n  }\n\n  .profileTab[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{\n    height: 1.42vw;\n    border-radius: 1.42vw;\n  }\n\n  .profileTab[_ngcontent-%COMP%]   .engagement[_ngcontent-%COMP%]{\n    height: 1.42vw;\n    border-radius: 1.42vw;\n  }\n\n  .profileTab[_ngcontent-%COMP%]   .commentButton[_ngcontent-%COMP%]{\n    padding: 0;\n    top: -2.68vw;\n    width: 5.36vw;\n    height: 5.36vw;\n  }\n\n  .commentButton[_ngcontent-%COMP%]   .buttonBackground[_ngcontent-%COMP%]{\n    width: 5.36vw;\n    height: 5.36vw;\n    border-radius: 2.68vw 2.68vw 0 0;\n  }\n\n  .commentButton[_ngcontent-%COMP%]   .hideExtra[_ngcontent-%COMP%]{\n    width: 5.36vw;\n    height: 2.68vw;\n  }\n\n  .commentButton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 2.5vw;\n  }\n\n  .postDetails[_ngcontent-%COMP%]   .postTitle[_ngcontent-%COMP%]{\n    top: 1.43vw;\n    left: 3.39vw;\n    font-size: 4.29vw;\n  }\n\n  .postDetails[_ngcontent-%COMP%]   .showDetails[_ngcontent-%COMP%] {\n    top: 1.79vw;\n    right:  2.68vw;\n    height: 5.36vw;\n    width: 5.36vw;\n  }\n\n  .showDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 3.6vw;\n  }\n\n  .postDetails[_ngcontent-%COMP%]   .holderList[_ngcontent-%COMP%]{\n    font-size: 3.214vw;\n  }\n\n  .holderList[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    height: 3.21vw;\n   }\n\n  .postDetails[_ngcontent-%COMP%]   .metrics[_ngcontent-%COMP%]{\n    font-size: 2.86vw;\n  }\n\n  .postDetails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 2.86vw;\n  }\n\n  .description[_ngcontent-%COMP%] {\n    font-size: 3.21vw;\n  }\n\n  .commentsSection[_ngcontent-%COMP%]{\n    left: 3.57vw;\n    right: 3.57vw;\n    top: 1.79vw;\n    height: 40.18vw;\n  }\n\n  .holderContainer[_ngcontent-%COMP%] {\n    left: 8.04vw;\n    right: 8.04vw;\n    top: 26.79vw;\n    height: 45.54vw;\n  }\n\n  .holderListContainer[_ngcontent-%COMP%] {\n    height: 43.75vw;\n    padding-left: 1.79vw;\n    padding-right: 0.89vw;\n    padding-top: 0.54vw;\n  }\n\n  .temp[_ngcontent-%COMP%] {\n    font-size: 4.3vw;\n  }\n\n  .sticker-add[_ngcontent-%COMP%] {\n    width: 10.18vw; \n    height: 10.18vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsK0JBQStCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7O0VBRVQsV0FBVztFQUNYLFlBQVk7O0VBRVosVUFBVTs7RUFFViw4REFBOEQ7RUFDOUQsMkJBQTJCOztFQUUzQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7O0VBRVQsV0FBVztFQUNYLFlBQVk7RUFDWiw0QkFBNEI7O0VBRTVCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7O0VBRVYsV0FBVztFQUNYLFlBQVk7O0VBRVosV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHNCQUFzQjs7QUFFeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxTQUFTO0NBQ1QsK0JBQStCO0NBQy9CLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixVQUFVO0VBQ1YsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztJQUNkLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0dBQ2Y7O0VBRUQ7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVlZC9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS1zdGlja2VyU3BhY2U6IDM1cHg7XG59XG5cbi5wb3N0Q29udGFpbmVyIHtcbiAgd2lkdGg6IDQ3NXB4O1xuICBoZWlnaHQ6IDU4MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCAjRDhCODY5O1xuICBib3JkZXItcmFkaXVzOiAzM3B4O1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG59XG5cbi5iYWNrZ3JvdW5kSW1nIHtcbiBtYXJnaW46IDAgMDtcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gdG9wOiA1MCU7XG4gbGVmdDogNTAlO1xuIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG5cbi5wcm9maWxlVGFiIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzFweDtcblxuICBwYWRkaW5nOiAwO1xuXG4gIC8qIHJnYmEgdXNlZCBzbyB0aGF0IG9wYWNpdHkgZG9lc24ndCBlZmZlY3QgY2hpbGQgY29tcG9uZW50cyAqL1xuICBiYWNrZ3JvdW5kOiByZ2JhKDgsNyw4LDAuNik7XG5cbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjZweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDI2cHg7XG59XG5cbi5wcm9maWxlVGFiIC5wcm9maWxlRGV0YWlsc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEycHg7XG4gIGxlZnQ6IDI5LjVweDtcbiAgd2lkdGg6IDMzNHB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5wcm9maWxlVGFiIC5wcm9maWxlRGV0YWlscyAubmFtZXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNGN0Y3Rjc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE2MGVtO1xufVxuXG4ucHJvZmlsZURldGFpbHMgLnByb2ZpbGVTdGlja2Vyc3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMTQ0cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9maWxlVGFiIC5wb3N0U3RpY2tlciB7XG4gIGhlaWdodDogODJweDtcbiAgd2lkdGg6IDgycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNzA3MDc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3R0b206IDI0cHg7XG4gIHJpZ2h0OiA4cHg7XG59XG5cbi5wb3N0U3RpY2tlciAuc3RpY2tlci1pbWd7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG5cbi5wcm9maWxlVGFiIC5lbmdhZ2VtZW50QmFye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNDhweDtcbiAgbGVmdDogMjkuNXB4O1xuICB3aWR0aDogMzM0cHg7XG4gIGhlaWdodDogMTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2ZpbGVUYWIgLmJhcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q4Qjg2OTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucHJvZmlsZVRhYiAuZW5nYWdlbWVudHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5wcm9maWxlVGFiIC5jb21tZW50QnV0dG9ue1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTE1cHg7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmNvbW1lbnRCdXR0b24gLmJ1dHRvbkJhY2tncm91bmR7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcblxuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xuXG4gIGJhY2tncm91bmQ6IHJnYmEoOCw3LDgsMC42KTtcbn1cblxuLmNvbW1lbnRCdXR0b24gLmhpZGVFeHRyYXtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29tbWVudEJ1dHRvbiBpbWd7XG4gIHBhZGRpbmc6IDA7XG5cbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogYXV0bztcblxuICBtYXJnaW46IDAgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuXG4ucG9zdERldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBvaW50ZXItZXZlbnRzOm5vbmU7XG59XG5cbi5wb3N0RGV0YWlscyAucG9zdFRpdGxle1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAxOXB4O1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRjdGN0Y3O1xuICBwb2ludGVyLWV2ZW50czphdXRvO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuXG59XG5cbi5wb3N0RGV0YWlscyAuc2hvd0RldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6YXV0bztcbn1cblxuLnNob3dEZXRhaWxzIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnBvc3REZXRhaWxzIC5ob2xkZXJMaXN0e1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOmF1dG87XG59XG5cbi5ob2xkZXJMaXN0IGltZ3tcbiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gdG9wOjUwJTtcbiBsZWZ0OiA1MCU7XG4gdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwJSwtNTAlKTtcbiBoZWlnaHQ6IDE4cHg7XG4gd2lkdGg6IGF1dG87XG59XG5cbi5ob2xkZXJMaXN0IHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4ucG9zdERldGFpbHMgLm1ldHJpY3N7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI0Y3RjdGNztcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnBvc3REZXRhaWxzIGltZyB7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNGN0Y3Rjc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbi5jb21tZW50c1NlY3Rpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIHRvcDogMTBweDtcbiAgaGVpZ2h0OiAyMjVweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi5jb21tZW50c1NlY3Rpb24gLnNlY3Rpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbn1cblxuLmhvbGRlckNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDVweDtcbiAgcmlnaHQ6NDVweDtcbiAgdG9wOiAxNTBweDtcbiAgaGVpZ2h0OiAyNTVweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0Q4Qjg2OTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogcmdiYSg4LDcsOCwwLjYpO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cblxuLmhvbGRlckxpc3RDb250YWluZXIge1xuICBoZWlnaHQ6IDI0NXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmFkZC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZW1wIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI0Q4Qjg2OTtcbn1cblxuLnN0aWNrZXItYWRkIHtcbiAgd2lkdGg6IDU3cHg7IFxuICBoZWlnaHQ6IDU3cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gIC5wb3N0Q29udGFpbmVyIHtcbiAgICB3aWR0aDogODV2dztcbiAgICBoZWlnaHQ6IDEwMy41dnc7XG4gICAgYm9yZGVyLXJhZGl1czogNS44OXZ3O1xuICB9XG5cbiAgLnByb2ZpbGVUYWIge1xuICAgIGhlaWdodDogMTIuNjh2dztcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0LjY0dnc7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQuNjR2dztcbiAgfVxuXG4gIC5wcm9maWxlVGFiIC5wcm9maWxlRGV0YWlsc3tcbiAgICBib3R0b206IDIuMTR2dztcbiAgICBsZWZ0OiA1LjI2dnc7XG4gICAgd2lkdGg6IDU5LjY0dnc7XG4gICAgaGVpZ2h0OiA0LjQ2dnc7XG4gIH1cblxuICAucHJvZmlsZVRhYiAucHJvZmlsZURldGFpbHMgLm5hbWV7XG4gICAgYm90dG9tOiAwLjcxNHZ3O1xuICAgIGZvbnQtc2l6ZTogMy45M3Z3O1xuICB9XG5cbiAgLnByb2ZpbGVEZXRhaWxzIC5wcm9maWxlU3RpY2tlcnN7XG4gICAgaGVpZ2h0OiA0LjI5dnc7XG4gICAgd2lkdGg6IDI1Ljcxdnc7XG4gIH1cblxuICAucHJvZmlsZVRhYiAucG9zdFN0aWNrZXIge1xuICAgIGhlaWdodDogMTQuNjR2dztcbiAgICB3aWR0aDogMTQuNjR2dztcbiAgICBib3R0b206IDQuMjl2dztcbiAgICByaWdodDogMS40MnZ3O1xuICB9XG5cbiAgLnByb2ZpbGVUYWIgLmVuZ2FnZW1lbnRCYXJ7XG4gICAgYm90dG9tOiA4LjU3dnc7XG4gICAgbGVmdDogNS4yNjd2dztcbiAgICB3aWR0aDogNTkuNjR2dztcbiAgICBoZWlnaHQ6IDEuOTZ2dztcbiAgfVxuXG4gIC5wcm9maWxlVGFiIC5iYXJ7XG4gICAgaGVpZ2h0OiAxLjQydnc7XG4gICAgYm9yZGVyLXJhZGl1czogMS40MnZ3O1xuICB9XG5cbiAgLnByb2ZpbGVUYWIgLmVuZ2FnZW1lbnR7XG4gICAgaGVpZ2h0OiAxLjQydnc7XG4gICAgYm9yZGVyLXJhZGl1czogMS40MnZ3O1xuICB9XG5cbiAgLnByb2ZpbGVUYWIgLmNvbW1lbnRCdXR0b257XG4gICAgcGFkZGluZzogMDtcbiAgICB0b3A6IC0yLjY4dnc7XG4gICAgd2lkdGg6IDUuMzZ2dztcbiAgICBoZWlnaHQ6IDUuMzZ2dztcbiAgfVxuXG4gIC5jb21tZW50QnV0dG9uIC5idXR0b25CYWNrZ3JvdW5ke1xuICAgIHdpZHRoOiA1LjM2dnc7XG4gICAgaGVpZ2h0OiA1LjM2dnc7XG4gICAgYm9yZGVyLXJhZGl1czogMi42OHZ3IDIuNjh2dyAwIDA7XG4gIH1cblxuICAuY29tbWVudEJ1dHRvbiAuaGlkZUV4dHJhe1xuICAgIHdpZHRoOiA1LjM2dnc7XG4gICAgaGVpZ2h0OiAyLjY4dnc7XG4gIH1cblxuICAuY29tbWVudEJ1dHRvbiBpbWd7XG4gICAgd2lkdGg6IDIuNXZ3O1xuICB9XG5cbiAgLnBvc3REZXRhaWxzIC5wb3N0VGl0bGV7XG4gICAgdG9wOiAxLjQzdnc7XG4gICAgbGVmdDogMy4zOXZ3O1xuICAgIGZvbnQtc2l6ZTogNC4yOXZ3O1xuICB9XG5cbiAgLnBvc3REZXRhaWxzIC5zaG93RGV0YWlscyB7XG4gICAgdG9wOiAxLjc5dnc7XG4gICAgcmlnaHQ6ICAyLjY4dnc7XG4gICAgaGVpZ2h0OiA1LjM2dnc7XG4gICAgd2lkdGg6IDUuMzZ2dztcbiAgfVxuXG4gIC5zaG93RGV0YWlscyBpbWcge1xuICAgIHdpZHRoOiAzLjZ2dztcbiAgfVxuXG4gIC5wb3N0RGV0YWlscyAuaG9sZGVyTGlzdHtcbiAgICBmb250LXNpemU6IDMuMjE0dnc7XG4gIH1cblxuICAuaG9sZGVyTGlzdCBpbWd7XG4gICAgaGVpZ2h0OiAzLjIxdnc7XG4gICB9XG5cbiAgLnBvc3REZXRhaWxzIC5tZXRyaWNze1xuICAgIGZvbnQtc2l6ZTogMi44NnZ3O1xuICB9XG5cbiAgLnBvc3REZXRhaWxzIGltZyB7XG4gICAgaGVpZ2h0OiAyLjg2dnc7XG4gIH1cblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMy4yMXZ3O1xuICB9XG5cbiAgLmNvbW1lbnRzU2VjdGlvbntcbiAgICBsZWZ0OiAzLjU3dnc7XG4gICAgcmlnaHQ6IDMuNTd2dztcbiAgICB0b3A6IDEuNzl2dztcbiAgICBoZWlnaHQ6IDQwLjE4dnc7XG4gIH1cblxuICAuaG9sZGVyQ29udGFpbmVyIHtcbiAgICBsZWZ0OiA4LjA0dnc7XG4gICAgcmlnaHQ6IDguMDR2dztcbiAgICB0b3A6IDI2Ljc5dnc7XG4gICAgaGVpZ2h0OiA0NS41NHZ3O1xuICB9XG5cbiAgLmhvbGRlckxpc3RDb250YWluZXIge1xuICAgIGhlaWdodDogNDMuNzV2dztcbiAgICBwYWRkaW5nLWxlZnQ6IDEuNzl2dztcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjg5dnc7XG4gICAgcGFkZGluZy10b3A6IDAuNTR2dztcbiAgfVxuXG4gIC50ZW1wIHtcbiAgICBmb250LXNpemU6IDQuM3Z3O1xuICB9XG5cbiAgLnN0aWNrZXItYWRkIHtcbiAgICB3aWR0aDogMTAuMTh2dzsgXG4gICAgaGVpZ2h0OiAxMC4xOHZ3O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: src_app_shared_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }, { type: src_app_shared_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_shared_window_service__WEBPACK_IMPORTED_MODULE_8__["WindowStateService"] }]; }, { postDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], createPost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], postContent$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], stickerContent$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], addClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.service */ "./src/app/feedback/feedback.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function FeedbackComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FeedbackComponent_div_1_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSubmit(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function FeedbackComponent_div_1_Template_textarea_keydown_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.autoGrowTextZone($event); })("ngModelChange", function FeedbackComponent_div_1_Template_textarea_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.feedback = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.feedback);
} }
function FeedbackComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Thank you for your feedback!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FeedbackComponent {
    constructor(feedbackService, authService, userService) {
        this.feedbackService = feedbackService;
        this.authService = authService;
        this.userService = userService;
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.submitted = false;
        this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)) //check if authenticated
            .subscribe(response => {
            this.isAuthenticated = !!response;
            if (this.isAuthenticated) {
                this.uid = response.id; //get uid
                this.userService.getProfileDetails(response.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)) //get username
                    .subscribe(res => {
                    if (res) {
                        this.username = res.username;
                    }
                });
                this.userService.getPersonalDetails(response.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)) //get email and full name
                    .subscribe(res => {
                    if (res) {
                        this.fullname = res.name;
                        this.email = res.email;
                    }
                });
            }
        });
    }
    onSubmit(form) {
        this.feedback.trim();
        if (!this.submitted && this.feedback && this.feedback.length != 0) {
            if (this.isAuthenticated) {
                if (this.username && this.fullname && this.email && this.uid) {
                    return;
                }
                this.data = { uid: this.uid, username: this.username, fullname: this.fullname, email: this.email, dateCreated: new Date(), feedback: this.feedback };
            }
            else {
                this.data = { dateCreated: new Date(), feedback: this.feedback };
            }
            this.feedbackService.addFeedback(this.data);
            this.submitted = true;
            form.reset();
        }
    }
    autoGrowTextZone(e) {
        e.target.style.height = "0px";
        e.target.style.height = (e.target.scrollHeight + 25) + "px";
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"])); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 4, vars: 2, consts: [[1, "container"], ["class", "row", 4, "ngIf", "ngIfElse"], ["thankyou", ""], [1, "row"], [1, "horizontal-center", 3, "ngSubmit"], ["f", "ngForm"], [1, "col-12"], ["for", "feedback", 1, "text-left"], ["name", "feedback", "placeholder", "Put placeholder text", "maxlength", "500", 2, "margin-bottom", "8px", 3, "ngModel", "keydown", "ngModelChange"], ["align", "right", 1, "col-12", 2, "margin-bottom", "0px"], [1, "btn", "btn-default", 2, "margin-top", "0px"], [1, "row", 2, "height", "100%", "position", "relative"], [1, "col", 2, "position", "absolute", "left", "50%", "top", "50%", "transform", "translate(-50%,40px)"], [1, "thank", 2, "text-align", "center"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeedbackComponent_div_1_Template, 10, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedbackComponent_ng_template_2_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submitted)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["label[_ngcontent-%COMP%]{\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 24px;\n  color: #D8B869;\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus {\n  font-family: 'ChampagneAndLimousines';\n  font-size: 18px;\n  color: #F7F7F7;\n  border: 2px solid #D8B869;\n  background: #131114;\n  margin-bottom: 35px;\n  border-radius: 10px;\n  width: 50vw;\n  outline-width: 0;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\n\n.horizontal-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%,0);\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 24px;\n  color: #D8B869;\n  border: 2px solid #D8B869;\n  background: #131114;\n  border-radius: 20px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.btn[_ngcontent-%COMP%]:enabled:hover{\n  background: #D8B869;\n  color: #080708;\n}\n\n.thank[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 32px;\n  height: 100%;\n  color: #D8B869;\n}\n\n@media screen and (max-width: 1000px) {\n  input[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus {\n    width: 80vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7Ozs7RUFJRSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUdBO0VBQ0U7Ozs7SUFJRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNEOEI4Njk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCxcbmlucHV0OmZvY3VzLFxudGV4dGFyZWEsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNGN0Y3Rjc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEOEI4Njk7XG4gIGJhY2tncm91bmQ6ICMxMzExMTQ7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA1MHZ3O1xuICBvdXRsaW5lLXdpZHRoOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi5ob3Jpem9udGFsLWNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xufVxuXG4uYnRuIHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNEOEI4Njk7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEOEI4Njk7XG4gIGJhY2tncm91bmQ6ICMxMzExMTQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5idG46ZW5hYmxlZDpob3ZlcntcbiAgYmFja2dyb3VuZDogI0Q4Qjg2OTtcbiAgY29sb3I6ICMwODA3MDg7XG59XG5cbi50aGFuayB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgY29sb3I6ICNEOEI4Njk7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIGlucHV0LFxuICBpbnB1dDpmb2N1cyxcbiAgdGV4dGFyZWEsXG4gIHRleHRhcmVhOmZvY3VzIHtcbiAgICB3aWR0aDogODB2dztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.css']
            }]
    }], function () { return [{ type: _feedback_service__WEBPACK_IMPORTED_MODULE_3__["FeedbackService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _shared_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feedback/feedback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/feedback/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class FeedbackService {
    constructor(afs) {
        this.afs = afs;
        this.feedbackCollection = afs.collection('feedback');
    }
    addFeedback(feedback) {
        console.log(feedback);
        const id = this.afs.createId();
        const obj = Object.assign({}, feedback);
        this.feedbackCollection.doc(id).set(obj);
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_window_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/window.service */ "./src/app/shared/window.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = ["dropdown"];
function HeaderComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login/Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_25_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
;
class HeaderComponent {
    constructor(windowStateService, authService, router) {
        this.windowStateService = windowStateService;
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
        this.widthAuth = '313.781px';
        this.collapsed = true;
        this.size = 35;
        this.mobile = false;
        this.marginBottom = '35px';
        this.collectionRoute = '/auth';
        this.profileRoute = '/auth';
        this.createRoute = '/auth';
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)).subscribe(user => {
            this.isAuthenticated = !!user;
            if (this.isAuthenticated) {
                this.uid = user.id;
                this.collectionRoute = "collection/" + this.uid;
                this.profileRoute = "profile/" + this.uid;
                this.createRoute = "/create";
            }
            else {
                this.collectionRoute = '/auth';
                this.profileRoute = '/auth';
                this.createRoute = '/auth';
            }
        });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)).subscribe(val => {
            this.currentRoute = this.router.url;
            if (this.currentRoute === '/tutorial') {
                this.marginBottom = '0px';
            }
            else {
                this.marginBottom = '35px';
            }
        });
    }
    onClick() {
        this.collapsed = !this.collapsed;
        if (this.collapsed) {
            setTimeout(value => {
                this.currentRoute === '/tutorial' ? this.marginBottom = '0px' : this.marginBottom = '35px';
                this.marginLeft = 'calc(50vw - 309.94px -' + this.widthAuth + ')';
            }, 0.5 * 1000);
        }
        else {
            this.marginBottom = '206px';
            this.marginLeft = '0';
        }
    }
    onLogout() {
        this.authService.logout();
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdown = _t.first);
    } }, decls: 26, vars: 5, consts: [[1, "row", "contain"], [1, "col-2"], ["routerLink", "/tutorial"], [1, "logoMain"], [1, "col-8"], [1, "row"], [1, "col"], [1, "col", "fontHeader"], ["routerLink", "/explore"], [3, "routerLink"], ["routerLink", "/feedback"], ["class", "col-2 fontHeader login", 4, "ngIf"], [1, "col-2", "fontHeader", "login"], ["routerLink", "/auth"], [3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Snippet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HeaderComponent_div_24_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_div_25_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.collectionRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.createRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.profileRoute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["body[_ngcontent-%COMP%]{\n  letter-spacing: 0.05em;\n}\n\n.contain[_ngcontent-%COMP%] {\n  border: 0;\n  height: auto;\n  background-color: #131114;\n}\n\n.active-link[_ngcontent-%COMP%], .contain[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #D8B869;\n}\n\n.contain[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #707070;\n}\n\n.fontHeader[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-size: 20px;\n  font-weight: bold;\n  padding-top: 5px;\n}\n\n.logoMain[_ngcontent-%COMP%] {\n  padding-left: 15px;\n  font-size: 28px;\n  color: #D8B869;\n  letter-spacing: 0.160em;\n}\n\n.logoSub[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-size: 16px;\n  padding-left: 7px;\n  color: #707070;\n}\n\n.activeRoute[_ngcontent-%COMP%] {\n  color: #D8B869;\n}\n\n.login[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\na[_ngcontent-%COMP%] {text-decoration: none !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLEdBQUcsZ0NBQWdDLENBQUMiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG4uY29udGFpbiB7XG4gIGJvcmRlcjogMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMTE0O1xufVxuXG4uYWN0aXZlLWxpbmssIC5jb250YWluIGE6aG92ZXIge1xuICBjb2xvcjogI0Q4Qjg2OTtcbn1cblxuLmNvbnRhaW4gYSB7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4uZm9udEhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5sb2dvTWFpbiB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogI0Q4Qjg2OTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTYwZW07XG59XG5cbi5sb2dvU3ViIHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5hY3RpdmVSb3V0ZSB7XG4gIGNvbG9yOiAjRDhCODY5O1xufVxuXG4ubG9naW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG5hIHt0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDt9XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: _shared_window_service__WEBPACK_IMPORTED_MODULE_3__["WindowStateService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { dropdown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['dropdown']
        }] }); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a0, a1) { return { "height": a0, "width": a1 }; };
class NavbarComponent {
    constructor(usersService, authService, router) {
        this.usersService = usersService;
        this.authService = authService;
        this.router = router;
        this.exploreSymbol = "assets/icons/exploreSymbol@2x.png";
        this.collectionSymbol = "assets/icons/sticker-icon.png";
        this.createSymbol = "assets/icons/createSymbol@2x.png";
        this.logoutSymbol = "assets/icons/Login_LogOut@2x.png";
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.imageProp = { 'height': '100%', 'width': 'auto' };
        this.placeholderImg = 'assets/default image/blank_image@2x.png';
    }
    ngOnInit() {
        this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.notifier$)).subscribe(response => {
            this.isAuthenticated = !!response;
            if (this.isAuthenticated) {
                this.uid = response.id;
                this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
            }
        }, errorMessage => {
            console.log(errorMessage);
        });
    }
    onLoad(event) {
        let width = event.target.width;
        let height = event.target.height;
        if (width / height < 1) {
            this.imageProp.width = '100%';
            this.imageProp.height = 'auto';
        }
        else {
            this.imageProp.width = 'auto';
            this.imageProp.height = '100%';
        }
    }
    navigate(event) {
        if (event === 'explore') {
            this.router.navigate(['/explore']);
        }
        else {
            if (this.isAuthenticated) {
                if (event === 'profile') {
                    this.router.navigate(['/profile/' + this.uid]);
                }
                if (event === 'collection') {
                    this.router.navigate(['/collection/' + this.uid]);
                }
                if (event === 'create') {
                    this.router.navigate(['/create']);
                }
                if (event === 'log') {
                    this.authService.logout();
                }
            }
            else {
                this.router.navigate(['/auth']);
            }
        }
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 18, vars: 11, consts: [[1, "row", "no-gutters", "text-center", "divider"], [1, "col", "text-center", "exploreSymbol"], [3, "click"], [3, "src"], [1, "col", "text-center", "Symbol"], [1, "col", "text-center"], [1, "dpBorder"], ["alt", "display picture", 3, "src", "ngStyle", "load"], [1, "col", "text-center", "dropdownSymbol"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_2_listener() { return ctx.navigate("explore"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() { return ctx.navigate("collection"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() { return ctx.navigate("create"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.navigate("profile"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function NavbarComponent_Template_img_load_13_listener($event) { return ctx.onLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_16_listener() { return ctx.navigate("log"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.exploreSymbol, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.collectionSymbol, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.createSymbol, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.isAuthenticated ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, ctx.displayPicture$) : ctx.placeholderImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c0, ctx.imageProp.height, ctx.imageProp.width));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoutSymbol, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".row[_ngcontent-%COMP%] {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    background-color: rgb(19, 17, 20);\n    position: fixed;\n    bottom:0;\n    width: 100%;\n  }\n\n  .divider[_ngcontent-%COMP%] {\n    border-top: solid 2px #D8B869;\n  }\n\n  .Symbol[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 30px;\n    width: auto;\n  }\n\n  .exploreSymbol[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 33px;\n    width: auto;\n  }\n\n  .dropdownSymbol[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    height: 27px;\n    width: auto;\n  }\n\n  .dpBorder[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-55%);\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    border: 1px solid #D8B869;\n    background:#080708;\n    overflow: hidden;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0IsV0FBVztJQUNYLFlBQVk7SUFHWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5LCAxNywgMjApO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206MDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAycHggI0Q4Qjg2OTtcbiAgfVxuICBcbiAgLlN5bWJvbCA+IGEgPiBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICBcbiAgLmV4cGxvcmVTeW1ib2wgPiBhID4gaW1nIHtcbiAgICBoZWlnaHQ6IDMzcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbiAgXG4gIC5kcm9wZG93blN5bWJvbCA+IGEgPiBpbWcge1xuICAgIGhlaWdodDogMjdweDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuICBcbiAgLmRwQm9yZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTU1JSk7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDhCODY5O1xuICAgIGJhY2tncm91bmQ6IzA4MDcwODtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICBcbiAgXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _shared_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile-display/profile-display.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profile-display/profile-display.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDisplayComponent", function() { return ProfileDisplayComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var _shared_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/activity.service */ "./src/app/shared/activity.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_window_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/window.service */ "./src/app/shared/window.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sticker/sticker.component */ "./src/app/sticker/sticker.component.ts");











function ProfileDisplayComponent_div_2_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 18);
} }
function ProfileDisplayComponent_div_2_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sticker", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sticker_r11 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pid", sticker_r11.pid)("size", ctx_r9.stickerSize);
} }
function ProfileDisplayComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileDisplayComponent_div_2_div_2_div_2_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProfileDisplayComponent_div_2_div_2_div_3_Template, 2, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stickers_r7 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.getEmptySlots(stickers_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", stickers_r7);
} }
function ProfileDisplayComponent_div_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 21);
} }
const _c0 = function (a0, a1) { return { "height": a0, "width": a1 }; };
function ProfileDisplayComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function ProfileDisplayComponent_div_2_div_6_Template_img_load_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.onLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r12 = ctx.ngIf;
    const details_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", content_r12, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](7, _c0, ctx_r5.imageProp.height, ctx_r5.imageProp.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r1.bio.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r1.bio.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", details_r1.bio.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.collected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.views);
} }
function ProfileDisplayComponent_div_2_a_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileDisplayComponent_div_2_a_10_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.editProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProfileDisplayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileDisplayComponent_div_2_div_2_Template, 4, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProfileDisplayComponent_div_2_ng_template_4_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProfileDisplayComponent_div_2_div_6_Template, 29, 10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProfileDisplayComponent_div_2_a_10_Template, 4, 0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileDisplayComponent_div_2_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r18.navigateRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r1 = ctx.$implicit;
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 5, ctx_r0.profileStickers$))("ngIfElse", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, ctx_r0.displayPicture$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.uid === ctx_r0.myUid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](details_r1.username);
} }
class ProfileDisplayComponent {
    constructor(authService, usersService, activityService, router, windowService) {
        this.authService = authService;
        this.usersService = usersService;
        this.activityService = activityService;
        this.router = router;
        this.windowService = windowService;
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.collected = '0';
        this.views = '0';
        this.imageProp = { 'height': '100%', 'width': 'auto' };
    }
    ngOnInit() {
        this.fetchingWindow = true;
        this.windowService.checkWidth();
        this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.notifier$)).subscribe(response => {
            this.isAuthenticated = !!response;
            if (this.isAuthenticated) {
                this.myUid = response.id;
            }
        }, errorMessage => {
            console.log(errorMessage);
        });
        this.getUid.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.notifier$)).subscribe(response => {
            if (response) {
                this.uid = response;
                this.profileRoute = "/profile/" + this.uid;
                this.setUpProfile();
                this.setUpActivity();
            }
        });
        this.windowService.screenWidthValue.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.notifier$))
            .subscribe(val => {
            if (val < 560) {
                // this.tabClose = (71*val/560).toString() + 'px';
                // this.tabOpen = (400*val/560).toString() + 'px';
                this.stickerSize = (60 * val / 560).toString() + 'px';
            }
            else {
                this.stickerSize = '60px';
            }
        });
    }
    setUpProfile() {
        this.profileDetails$ = this.usersService.getProfileDetails(this.uid);
        this.profileStickers$ = this.usersService.getProfileStickers(this.uid);
        this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
    }
    setUpActivity() {
        this.activityService.getActivity(this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.notifier$)).subscribe(response => {
            this.activity = response[0];
            this.views = this.convertToShort(this.activity.views);
            this.collected = this.convertToShort(this.activity.collected);
        });
        ;
    }
    convertToShort(num) {
        let short = 0;
        if (num / 1000000 <= 1) {
            if (num / 1000 <= 1) {
                return num.toString();
            }
            else {
                short = Math.round((num / 1000) * 10) / 10;
                return short.toString() + 'K';
            }
        }
        else {
            short = Math.round((num / 1000000) * 100) / 100;
            return short.toString() + 'M';
        }
    }
    editProfile() {
        if (this.uid === this.myUid) {
            this.router.navigate(['profile/' + this.myUid + '/edit']);
        }
    }
    onLoad(event) {
        let width = event.target.width;
        let height = event.target.height;
        if (width / height < 1) {
            this.imageProp.width = '100%';
            this.imageProp.height = 'auto';
        }
        else {
            this.imageProp.width = 'auto';
            this.imageProp.height = '100%';
        }
    }
    getEmptySlots(stickers) {
        return [...Array(5 - stickers.length).keys()];
    }
    navigateRoute() {
        this.router.navigate([this.profileRoute]);
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
    }
}
ProfileDisplayComponent.ɵfac = function ProfileDisplayComponent_Factory(t) { return new (t || ProfileDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_window_service__WEBPACK_IMPORTED_MODULE_7__["WindowStateService"])); };
ProfileDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileDisplayComponent, selectors: [["app-profile-display"]], inputs: { getUid: "getUid" }, decls: 4, vars: 3, consts: [[1, "container", "no-padding"], [1, "row", "no-padding"], ["class", "col-md-12 no-padding", "align", "center", 4, "ngIf"], ["align", "center", 1, "col-md-12", "no-padding"], [1, "outerContainer"], ["class", "row profile-sticker-row", 4, "ngIf", "ngIfElse"], ["noStickers", ""], ["class", "row display-picture", 4, "ngIf"], [1, "row", "bottom-row"], [1, "col-2"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], [1, "col", "username"], [1, "float-right"], [2, "cursor", "pointer", 3, "click"], [1, "row", "profile-sticker-row"], [1, "col-2", "no-margin-no-padding"], ["class", "col profile-sticker-col", 4, "ngFor", "ngForOf"], ["class", "col-2 profile-sticker-right-col", 4, "ngFor", "ngForOf"], [1, "col", "profile-sticker-col"], [1, "col-2", "profile-sticker-right-col"], [3, "pid", "size"], [1, "row", "no-stickers"], [1, "row", "display-picture"], [1, "col-3", "display-picture-col"], [1, "storySignifier"], [1, "dpBackground"], [1, "dpBorder"], ["alt", "display picture", 3, "src", "ngStyle", "load"], ["align", "left", 1, "col", "bio"], [1, "row"], [1, "col-12", "title"], [1, "col-12", "location"], [1, "col-8", "description"], [1, "col-4", "metrics-align"], [1, "row", "metrics"], [1, "col-6", "metric-height"], [1, "alignMetric"], [1, "alignMetric-views"], [1, "col-6", "collect"], ["src", "https://i.ibb.co/jJVZQ4S/Group-141.png", "alt", "Stickers collected"], [1, "col-6", "views"], ["src", "https://i.ibb.co/hfx6Q6v/Views-Icon.png", "alt", "Views-Icon"], ["src", "https://i.ibb.co/fQ2KFj8/icons8-edit.png", "alt", "icons-edit", 1, "edit"], [1, "edit-text"]], template: function ProfileDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileDisplayComponent_div_2_Template, 15, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, ctx.profileDetails$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _sticker_sticker_component__WEBPACK_IMPORTED_MODULE_9__["StickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".outerContainer[_ngcontent-%COMP%] {\n  width: 493px;\n  height: 281px;\n  border: 2px solid #D8B869;\n  border-radius: 31px;\n}\n\n.storySignifier[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  background-image: linear-gradient(135deg,#DCB65A ,#131114 70%, transparent 90%);\n}\n\n.no-padding[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.dpBackground[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: #080708;\n  top: 50%;\n  left: 50%;\n  transform: translate(0%,4.2%);\n}\n\n.dpBorder[_ngcontent-%COMP%] {\n  width: 106px;\n  height: 106px;\n  border-radius: 50%;\n  border: 1px solid #707070;\n  background:#080708;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  transform: translate(0%,6.6%);\n}\n\n.dpBorder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  width: 100%;\n}\n\n.bio[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 22px;\n  letter-spacing: -0.0003em;\n  padding-left: 25px; \n  padding-right: 0px;\n\n}\n\n.title[_ngcontent-%COMP%] {\n  color:#D8B869; \n  font-size: 14px; \n  word-wrap: break-word;\n}\n\n.location[_ngcontent-%COMP%] {\n  color:#FFFFFF; \n  font-size: 14px; \n  word-wrap: break-word;\n}\n\n.description[_ngcontent-%COMP%] {\n  color:#FFFFFF; \n  line-height: 150%; \n  word-wrap: break-word;\n}\n\n.metrics[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 16px;\n  color: #F7F7F7;\n  height: 16px;\n}\n\n.alignMetric[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-70%);\n}\n\n.alignMetric-views[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-60%,-70%);\n}\n\n.metrics-align[_ngcontent-%COMP%] {\n  padding: 0px;\n  padding-top: 35px;\n  padding-right: 25px; \n  margin: 0px;\n}\n\n.collect[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  height: 35px;\n}\n\n.views[_ngcontent-%COMP%] {\n  margin-top: 0px; \n  margin-right: 0px;\n  height: 35px;\n}\n\n.collect[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%); \n  height: 100%;\n  width: auto;\n}\n\n.views[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n  height: 100%;\n  width: 30px;\n}\n\n.edit[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-35%);\n  width: 18px; \n  margin-top: 9px;\n  height: auto;\n}\n\n.edit-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(0, 7%);\n  color: #D8B869;\n  font-size: 18.5px;\n  margin: 0px;\n  justify-content: center;\n  padding-left: 18px;\n}\n\n.bottom-row[_ngcontent-%COMP%]    > .col-1[_ngcontent-%COMP%] {\n  margin-left: 10px; \n  padding-left: 0px; \n  height: 30px;\n}\n\n.username[_ngcontent-%COMP%] {\n  font-family: 'Comfortaa';\n  font-weight: bold;\n  font-size: 30px;\n  color: #F7F7F7;\n  height: 30px;\n  letter-spacing: 0.16em;\n  padding-right: 25px;\n}\n\n.username[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  height: 30px;\n  padding-top: 9px;\n}\n\n.alignName[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n\n.profile-sticker-row[_ngcontent-%COMP%] {\n  padding-right: 3px;\n  margin-top: 8px;\n  height: 60px; \n  width: 100%;\n}\n\n.no-margin-right-no-padding[_ngcontent-%COMP%] {\n  padding: 0px; \n  margin-right: 0px;\n}\n\n.profile-sticker-right-col[_ngcontent-%COMP%] {\n  padding: 0px; \n  margin-left: -8px; \n  margin-right: 8px;\n}\n\n.profile-sticker-col[_ngcontent-%COMP%] {\n  padding: 0px; \n  margin-left: -8px; \n  margin-right: 8px;\n}\n\n.no-stickers[_ngcontent-%COMP%] {\n  margin-top: 8px; \n  height: 60px; \n  width: 100%\n}\n\n.display-picture[_ngcontent-%COMP%] {\n  width: 100%; \n  margin-top: 16px;\n}\n\n.display-picture-col[_ngcontent-%COMP%] {\n  padding-left: 9px;\n}\n\n.metric-height[_ngcontent-%COMP%] {\n  height: 16px;\n}\n\n.views-container[_ngcontent-%COMP%] {\n  padding-left: 25px;\n  padding-right: 0px;\n}\n\n@media screen and (max-width: 560px) {\n\n  .outerContainer[_ngcontent-%COMP%] {\n    width: 88.04vw;\n    height: 50.17vw;\n    border-radius: 5.4vw;\n  }\n\n  .storySignifier[_ngcontent-%COMP%] {\n    width: 23.21vw;\n    height: 23.21vw;\n  }\n\n  .dpBackground[_ngcontent-%COMP%] {\n    width: 21.43vw;\n    height: 21.43vw;\n  }\n\n  .dpBorder[_ngcontent-%COMP%] {\n    width: 18.93vw;\n    height: 18.93vw;\n  }\n\n  .bio[_ngcontent-%COMP%] {\n    font-size: 2.14vw;\n    line-height: 3.93vw;\n  }\n\n  .title[_ngcontent-%COMP%], .location[_ngcontent-%COMP%] {\n    font-size: 2.5vw; \n  }\n\n  .metrics[_ngcontent-%COMP%] {\n    font-size: 2.86vw;\n    height: 2.86vw;\n  }\n\n  .metrics-align[_ngcontent-%COMP%] {\n    padding-top: 6.5vw;\n  }\n\n  .collect[_ngcontent-%COMP%], .views[_ngcontent-%COMP%] {\n    height: 6.25vw;\n  }\n\n  .views[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 5.36vw;\n  }\n\n\n  .edit[_ngcontent-%COMP%] {\n    width: 3.2vw; \n    margin-top: 1.61vw;\n  }\n\n  .edit-text[_ngcontent-%COMP%] {\n    font-size: 3.3vw;\n    padding-left: 3.2vw;\n  }\n\n  .bottom-row[_ngcontent-%COMP%]    > .col-1[_ngcontent-%COMP%] {\n    margin-left: 1.79vw; \n    height: 5.56vw;\n  }\n\n  .username[_ngcontent-%COMP%] {\n    font-size: 5.36vw;\n    height: 5.36vw;\n  }\n\n  .username[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    height: 5.36vw;\n    padding-top: 1.61vw;\n  }\n  \n  .profile-sticker-row[_ngcontent-%COMP%] {\n    padding-right: 0.54vw;\n    margin-top: 1.43vw;\n    height: 10.71vw; \n  }\n  \n  .profile-sticker-right-col[_ngcontent-%COMP%], .profile-sticker-col[_ngcontent-%COMP%] {\n    margin-left: -1.43vw; \n    margin-right: 1.43vw;\n  }\n\n  .no-stickers[_ngcontent-%COMP%] {\n    margin-top: 1.43vw; \n    height: 10.7vw; \n  }\n  \n  .display-picture[_ngcontent-%COMP%] {\n    margin-top: 2.86vw;\n  }\n  \n  .display-picture-col[_ngcontent-%COMP%] {\n    padding-left: 1.61vw;\n  }\n  \n  .metric-height[_ngcontent-%COMP%] {\n    height: 2.86vw;\n  }\n  \n  .views-container[_ngcontent-%COMP%] {\n    padding-left: 4.46vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1kaXNwbGF5L3Byb2ZpbGUtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0VBQStFO0FBQ2pGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULCtCQUErQjtFQUMvQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOzs7RUFHQTtJQUNFLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlLWRpc3BsYXkvcHJvZmlsZS1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXJDb250YWluZXIge1xuICB3aWR0aDogNDkzcHg7XG4gIGhlaWdodDogMjgxcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEOEI4Njk7XG4gIGJvcmRlci1yYWRpdXM6IDMxcHg7XG59XG5cbi5zdG9yeVNpZ25pZmllciB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCNEQ0I2NUEgLCMxMzExMTQgNzAlLCB0cmFuc3BhcmVudCA5MCUpO1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kcEJhY2tncm91bmQge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzA4MDcwODtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsNC4yJSk7XG59XG5cbi5kcEJvcmRlciB7XG4gIHdpZHRoOiAxMDZweDtcbiAgaGVpZ2h0OiAxMDZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBiYWNrZ3JvdW5kOiMwODA3MDg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLDYuNiUpO1xufVxuXG4uZHBCb3JkZXIgaW1ne1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJpbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMDAzZW07XG4gIHBhZGRpbmctbGVmdDogMjVweDsgXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcblxufVxuXG4udGl0bGUge1xuICBjb2xvcjojRDhCODY5OyBcbiAgZm9udC1zaXplOiAxNHB4OyBcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4ubG9jYXRpb24ge1xuICBjb2xvcjojRkZGRkZGOyBcbiAgZm9udC1zaXplOiAxNHB4OyBcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBjb2xvcjojRkZGRkZGOyBcbiAgbGluZS1oZWlnaHQ6IDE1MCU7IFxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi5tZXRyaWNzIHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGN0Y3Rjc7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmFsaWduTWV0cmljIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC03MCUpO1xufVxuXG4uYWxpZ25NZXRyaWMtdmlld3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02MCUsLTcwJSk7XG59XG5cbi5tZXRyaWNzLWFsaWduIHtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDsgXG4gIG1hcmdpbjogMHB4O1xufVxuXG4uY29sbGVjdCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4udmlld3Mge1xuICBtYXJnaW4tdG9wOiAwcHg7IFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uY29sbGVjdCA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTsgXG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG59XG5cbi52aWV3cyA+IGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzBweDtcbn1cblxuLmVkaXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTM1JSk7XG4gIHdpZHRoOiAxOHB4OyBcbiAgbWFyZ2luLXRvcDogOXB4O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5lZGl0LXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDclKTtcbiAgY29sb3I6ICNEOEI4Njk7XG4gIGZvbnQtc2l6ZTogMTguNXB4O1xuICBtYXJnaW46IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbn1cblxuLmJvdHRvbS1yb3cgPiAuY29sLTEge1xuICBtYXJnaW4tbGVmdDogMTBweDsgXG4gIHBhZGRpbmctbGVmdDogMHB4OyBcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udXNlcm5hbWUge1xuICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjRjdGN0Y3O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE2ZW07XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi51c2VybmFtZSA+IHNwYW4ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiA5cHg7XG59XG5cbi5hbGlnbk5hbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG5cbi5wcm9maWxlLXN0aWNrZXItcm93IHtcbiAgcGFkZGluZy1yaWdodDogM3B4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGhlaWdodDogNjBweDsgXG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubm8tbWFyZ2luLXJpZ2h0LW5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHg7IFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnByb2ZpbGUtc3RpY2tlci1yaWdodC1jb2wge1xuICBwYWRkaW5nOiAwcHg7IFxuICBtYXJnaW4tbGVmdDogLThweDsgXG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ucHJvZmlsZS1zdGlja2VyLWNvbCB7XG4gIHBhZGRpbmc6IDBweDsgXG4gIG1hcmdpbi1sZWZ0OiAtOHB4OyBcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5uby1zdGlja2VycyB7XG4gIG1hcmdpbi10b3A6IDhweDsgXG4gIGhlaWdodDogNjBweDsgXG4gIHdpZHRoOiAxMDAlXG59XG5cbi5kaXNwbGF5LXBpY3R1cmUge1xuICB3aWR0aDogMTAwJTsgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5kaXNwbGF5LXBpY3R1cmUtY29sIHtcbiAgcGFkZGluZy1sZWZ0OiA5cHg7XG59XG5cbi5tZXRyaWMtaGVpZ2h0IHtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4udmlld3MtY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG5cbiAgLm91dGVyQ29udGFpbmVyIHtcbiAgICB3aWR0aDogODguMDR2dztcbiAgICBoZWlnaHQ6IDUwLjE3dnc7XG4gICAgYm9yZGVyLXJhZGl1czogNS40dnc7XG4gIH1cblxuICAuc3RvcnlTaWduaWZpZXIge1xuICAgIHdpZHRoOiAyMy4yMXZ3O1xuICAgIGhlaWdodDogMjMuMjF2dztcbiAgfVxuXG4gIC5kcEJhY2tncm91bmQge1xuICAgIHdpZHRoOiAyMS40M3Z3O1xuICAgIGhlaWdodDogMjEuNDN2dztcbiAgfVxuXG4gIC5kcEJvcmRlciB7XG4gICAgd2lkdGg6IDE4Ljkzdnc7XG4gICAgaGVpZ2h0OiAxOC45M3Z3O1xuICB9XG5cbiAgLmJpbyB7XG4gICAgZm9udC1zaXplOiAyLjE0dnc7XG4gICAgbGluZS1oZWlnaHQ6IDMuOTN2dztcbiAgfVxuXG4gIC50aXRsZSwgLmxvY2F0aW9uIHtcbiAgICBmb250LXNpemU6IDIuNXZ3OyBcbiAgfVxuXG4gIC5tZXRyaWNzIHtcbiAgICBmb250LXNpemU6IDIuODZ2dztcbiAgICBoZWlnaHQ6IDIuODZ2dztcbiAgfVxuXG4gIC5tZXRyaWNzLWFsaWduIHtcbiAgICBwYWRkaW5nLXRvcDogNi41dnc7XG4gIH1cblxuICAuY29sbGVjdCwgLnZpZXdzIHtcbiAgICBoZWlnaHQ6IDYuMjV2dztcbiAgfVxuXG4gIC52aWV3cyA+IGltZyB7XG4gICAgd2lkdGg6IDUuMzZ2dztcbiAgfVxuXG5cbiAgLmVkaXQge1xuICAgIHdpZHRoOiAzLjJ2dzsgXG4gICAgbWFyZ2luLXRvcDogMS42MXZ3O1xuICB9XG5cbiAgLmVkaXQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAzLjN2dztcbiAgICBwYWRkaW5nLWxlZnQ6IDMuMnZ3O1xuICB9XG5cbiAgLmJvdHRvbS1yb3cgPiAuY29sLTEge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjc5dnc7IFxuICAgIGhlaWdodDogNS41NnZ3O1xuICB9XG5cbiAgLnVzZXJuYW1lIHtcbiAgICBmb250LXNpemU6IDUuMzZ2dztcbiAgICBoZWlnaHQ6IDUuMzZ2dztcbiAgfVxuXG4gIC51c2VybmFtZSA+IHNwYW4ge1xuICAgIGhlaWdodDogNS4zNnZ3O1xuICAgIHBhZGRpbmctdG9wOiAxLjYxdnc7XG4gIH1cbiAgXG4gIC5wcm9maWxlLXN0aWNrZXItcm93IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjU0dnc7XG4gICAgbWFyZ2luLXRvcDogMS40M3Z3O1xuICAgIGhlaWdodDogMTAuNzF2dzsgXG4gIH1cbiAgXG4gIC5wcm9maWxlLXN0aWNrZXItcmlnaHQtY29sLCAucHJvZmlsZS1zdGlja2VyLWNvbCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xLjQzdnc7IFxuICAgIG1hcmdpbi1yaWdodDogMS40M3Z3O1xuICB9XG5cbiAgLm5vLXN0aWNrZXJzIHtcbiAgICBtYXJnaW4tdG9wOiAxLjQzdnc7IFxuICAgIGhlaWdodDogMTAuN3Z3OyBcbiAgfVxuICBcbiAgLmRpc3BsYXktcGljdHVyZSB7XG4gICAgbWFyZ2luLXRvcDogMi44NnZ3O1xuICB9XG4gIFxuICAuZGlzcGxheS1waWN0dXJlLWNvbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjYxdnc7XG4gIH1cbiAgXG4gIC5tZXRyaWMtaGVpZ2h0IHtcbiAgICBoZWlnaHQ6IDIuODZ2dztcbiAgfVxuICBcbiAgLnZpZXdzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiA0LjQ2dnc7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProfileDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-profile-display',
                templateUrl: './profile-display.component.html',
                styleUrls: ['./profile-display.component.css']
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _shared_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }, { type: _shared_activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _shared_window_service__WEBPACK_IMPORTED_MODULE_7__["WindowStateService"] }]; }, { getUid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/profile/profile-edit/profile-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/profile-edit/profile-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/profile.model */ "./src/app/shared/profile.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var src_app_shared_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/users.service */ "./src/app/shared/users.service.ts");
/* harmony import */ var src_app_shared_activity_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/activity.service */ "./src/app/shared/activity.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_date_sort_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/date-sort.pipe */ "./src/app/shared/date-sort.pipe.ts");














const _c0 = ["dpInput"];
function ProfileEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "height": a0, "width": a1 }; };
function ProfileEditComponent_form_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function ProfileEditComponent_form_1_div_18_Template_img_load_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r8.onLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Add icon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileEditComponent_form_1_div_18_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r10.onAddClick("content"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r7 = ctx.ngIf;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", content_r7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](3, _c1, ctx_r4.imageProp.height, ctx_r4.imageProp.width));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r4.addIcon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProfileEditComponent_form_1_ul_49_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", collection_r11.postDetails.title, " ");
} }
const _c2 = function (a0) { return { "background": a0 }; };
function ProfileEditComponent_form_1_ul_49_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileEditComponent_form_1_ul_49_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const collection_r11 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r15.onStickerClick(collection_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProfileEditComponent_form_1_ul_49_div_8_Template, 2, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const collection_r11 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](6, _c2, collection_r11.colour));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 4, collection_r11.sticker), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("ngStyle", ctx_r5.setUpStickerSize(_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", collection_r11.postDetails);
} }
function ProfileEditComponent_form_1_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r6.error, " ");
} }
function ProfileEditComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfileEditComponent_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.onSubmit(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Profile picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProfileEditComponent_form_1_Template_input_change_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.fileUpload($event); })("click", function ProfileEditComponent_form_1_Template_input_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r20.touched = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProfileEditComponent_form_1_div_18_Template, 4, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileEditComponent_form_1_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r21.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileEditComponent_form_1_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.location = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProfileEditComponent_form_1_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r23.content = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Collection");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, ProfileEditComponent_form_1_ul_49_Template, 9, 8, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "dateSort");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ProfileEditComponent_form_1_div_53_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 6, ctx_r1.displayPicture$));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.location);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](50, 8, ctx_r1.collectionList, "collectionDisplay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.error);
} }
class CollectionDisplay {
    constructor(pid, postDetails, sticker, colour, sortTime //milliseconds to compare firestore time and Date() 
    ) {
        this.pid = pid;
        this.postDetails = postDetails;
        this.sticker = sticker;
        this.colour = colour;
        this.sortTime = sortTime;
    }
}
class ProfileEditComponent {
    constructor(postService, usersService, activityService, authService, route, router) {
        this.postService = postService;
        this.usersService = usersService;
        this.activityService = activityService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.profileStickerLoad$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.collectionList = [];
        this.profileDetails = new _shared_profile_model__WEBPACK_IMPORTED_MODULE_1__["ProfileDetails"]('proxy', new _shared_profile_model__WEBPACK_IMPORTED_MODULE_1__["Biography"]('', '', ''));
        this.touched = false;
        this.dpSrc = "/assets/default image/080708 background.png";
        this.addIcon = "assets/icons/add_icon@2x.png";
        this.imageProp = { 'height': '100%', 'width': 'auto' };
        this.oldPsid = [];
        this.isSaving = false;
        this.error = null;
        this.stickerClickTimer = true;
        this.changedDP = false;
        this.changedProfileStickers = false;
        this.changedProfileDetails = false;
        this.stickerDelete = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.uid = params['id'];
            this.setUp();
        }, errorMessage => {
            console.log(errorMessage);
            this.handleError();
        });
    }
    setUp() {
        // Set up profile 
        this.usersService.getProfileDetails(this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.notifier$))
            .subscribe((response) => {
            console.log(response); //log
            if (response) {
                this.title = response.bio.title;
                this.oldTitle = response.bio.title;
                this.location = response.bio.location;
                this.oldLocation = response.bio.location;
                this.content = response.bio.content;
                this.oldContent = response.bio.content;
                this.username = response.username;
            }
        });
        this.usersService.getProfileStickers(this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.notifier$))
            .subscribe((response) => {
            if (response) {
                this.counter = 0;
                this.profileStickers = response;
                this.getCollectionList();
            }
        });
        this.profileStickerLoad$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.notifier$)) // Reorder selected stickers from collection by last order
            .subscribe(response => {
            this.counter++;
            if (this.counter === this.profileStickers.length) {
                this.profileStickers.slice().reverse().forEach(sticker => {
                    const index = this.collectionList.findIndex(collection => {
                        return collection.pid === sticker.pid;
                    });
                    const tempDate = new Date();
                    this.collectionList[index].sortTime = tempDate.getTime();
                });
            }
        });
        this.displayPicture$ = this.usersService.getDisplayPicture(this.uid);
    }
    getCollectionList() {
        // Set up collection
        this.activityService.getUserCollection(this.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.notifier$)) //get details of user collection
            .subscribe((response) => {
            console.log(response); //log
            if (response) {
                this.collectionList = []; //reset collection list
                response.forEach(collection => {
                    let tempPostDetails;
                    let tempStickerContent;
                    let tempColour;
                    let tempMilli;
                    this.postService.getPostDetails(collection.pid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.notifier$))
                        .subscribe(data => {
                        tempPostDetails = data;
                        tempStickerContent = this.postService.getStickerContent(collection.pid);
                        const index = this.profileStickers.findIndex(sticker => {
                            return sticker.pid === collection.pid;
                        });
                        if (index === -1) {
                            tempMilli = tempPostDetails.dateCreated.toMillis();
                            tempColour = 'transparent';
                        }
                        else {
                            const tempDate = new Date();
                            tempMilli = tempDate.getTime(); //sort selected stickers to the top  
                            tempColour = '#53BD9C';
                        }
                        this.collectionList.push(new CollectionDisplay(collection.pid, tempPostDetails, tempStickerContent, tempColour, tempMilli));
                    });
                });
            }
        });
    }
    onStickerClick(collection) {
        this.changedProfileStickers = true;
        let pid = collection.pid;
        let index = this.profileStickers.findIndex(sticker => {
            return sticker.pid === pid;
        });
        if (index != -1) {
            this.profileStickers.splice(index, 1);
            collection.colour = 'transparent';
        }
        else if (index === -1 && this.profileStickers.length < 5) {
            const selectDate = new Date();
            this.profileStickers.push(new _shared_profile_model__WEBPACK_IMPORTED_MODULE_1__["ProfileSticker"](pid, selectDate));
            collection.colour = '#53BD9C';
        }
        ;
    }
    fileUpload(event) {
        if (event.target.files) {
            var reader = new FileReader();
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                if (file.size < 4 * 1024 * 1024) { //Firebase upload max size 10 MB
                    this.error = null;
                    this.displayPicture = file;
                    this.displayPicture$.next(event.target.result);
                }
                else {
                    this.error = 'Post file size too big! There is a 4 MB limit';
                }
            };
        }
    }
    onLoad(event) {
        let width = event.target.width;
        let height = event.target.height;
        if (width / height < 1) {
            this.imageProp.width = '100%';
            this.imageProp.height = 'auto';
        }
        else {
            this.imageProp.width = 'auto';
            this.imageProp.height = '100%';
        }
    }
    setUpStickerSize(sticker) {
        let stickerProp = { 'height': '100%', 'width': 'auto' };
        let width = sticker.width;
        let height = sticker.height;
        if (width / height < 1) {
            stickerProp.width = '100%';
            stickerProp.height = 'auto';
        }
        else {
            stickerProp.width = 'auto';
            stickerProp.height = '100%';
        }
        return stickerProp;
    }
    checkUpload() {
        if (this.dpUpload) {
            return true;
        }
        else {
            return false;
        }
    }
    onAddClick(event) {
        this.changedDP = true;
        this.dpInput.nativeElement.click();
    }
    onSubmit(f) {
        if (!this.isSaving) {
            if (this.title && this.title.length > 15) {
                return;
            }
            if (this.location && this.location.length > 15) {
                return;
            }
            if (this.content && this.content.length > 90) {
                return;
            }
            if (this.profileStickers.length > 5) { //in case of an error
                for (let i = 0; i <= this.profileStickers.length; i++) {
                    this.profileStickers.pop();
                }
            }
            this.isSaving = true;
            this.profileDetails.bio.title = this.title;
            this.profileDetails.bio.content = this.content;
            this.profileDetails.bio.location = this.location;
            this.profileDetails.username = this.username;
            if (this.oldTitle != this.title || this.oldLocation != this.location || this.oldContent != this.content) {
                this.changedProfileDetails = true;
            }
            //Update required field
            if (this.changedProfileStickers) {
                this.usersService.updateProfileSticker(this.uid, this.profileStickers);
            }
            if (this.changedProfileDetails) {
                this.usersService.updateProfileDetails(this.uid, this.profileDetails);
            }
            if (this.changedDP) {
                this.usersService.updateDisplayPicture(this.uid, this.displayPicture).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.notifier$))
                    .subscribe(response => {
                    if (response === 100 && this.isSaving) {
                        this.usersService.updateDisplayPictureRef(this.uid, new _shared_profile_model__WEBPACK_IMPORTED_MODULE_1__["DisplayPicture"](this.uid, new Date(), this.displayPicture.type));
                        this.finishUp();
                    }
                });
            }
            else {
                this.finishUp();
            }
        }
    }
    finishUp() {
        this.isSaving = false;
        alert('Profile updated!');
        this.authService.onBoarding.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.notifier$)).subscribe(res => {
            if (res === "Signup") {
                this.router.navigate(['/tutorial']);
                this.authService.onBoarding.next('Login');
            }
            else {
                this.router.navigate(['/profile/' + this.uid]);
            }
        });
    }
    handleError() {
        alert("An error occurred! It is what it is...");
        this.isSaving = false;
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
    }
}
ProfileEditComponent.ɵfac = function ProfileEditComponent_Factory(t) { return new (t || ProfileEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
ProfileEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProfileEditComponent, selectors: [["app-profile-edit"]], viewQuery: function ProfileEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dpInput = _t.first);
    } }, decls: 2, vars: 2, consts: [["style", "text-align: center;", "class", "horizontal-center", 4, "ngIf"], ["class", "horizontal-center", 3, "ngSubmit", 4, "ngIf"], [1, "horizontal-center", 2, "text-align", "center"], [1, "horizontal-center", 3, "ngSubmit"], ["f", "ngForm"], [1, "row"], [1, "col-md"], [1, "col-md-6"], [1, "inputFields"], ["for", "dp", 1, "field"], [1, "col-md", 2, "position", "relative"], [1, "file-input-container"], ["type", "file", "id", "postFile", "accept", "image/x-png,image/gif,image/jpeg", "name", "content", 1, "form-control-file", "float-center", 3, "change", "click"], ["dpInput", ""], [1, "storySignifier", 2, "margin-top", "10.8px"], [1, "dpBackground"], ["class", "dpBorder", 4, "ngIf"], [1, "row", 2, "margin-top", "30px"], [1, "col-12"], [1, "form-group"], [1, "col"], ["for", "accountDetails", 1, "heading"], [1, "row", 2, "margin-top", "10.8px"], ["type", "text", "id", "Title", "name", "occupation", "placeholder", "Title/Description", "maxlength", "15", 1, "form-control", 2, "margin-top", "0px", "margin-bottom", "20px", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "Location", "name", "location", "placeholder", "Location", "maxlength", "15", 1, "form-control", 2, "margin-top", "0px", "margin-bottom", "20px", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "content", "name", "content", "placeholder", "About you", "maxlength", "90", 1, "form-control", 2, "margin-top", "0px", "margin-bottom", "20px", 3, "ngModel", "ngModelChange"], [1, "stickerSelect"], ["class", "list-group", 4, "ngFor", "ngForOf"], ["class", "danger-alert", 4, "ngIf"], [1, "col-6", "offset-6"], [1, "btn", "float-right"], [1, "col-md", 2, "margin-bottom", "100px"], [1, "dpBorder"], ["alt", "profile picture", "height", "100%", 3, "src", "ngStyle", "load"], ["alt", "add", 1, "add-icon", 2, "width", "50px", "height", "50px", "cursor", "pointer", 3, "src", "click"], [1, "list-group"], [1, "list-group-item", 2, "cursor", "pointer", "display", "inline", 3, "ngStyle", "click"], [1, "col-1"], [1, "sticker", 2, "width", "30px", "height", "30px"], ["alt", "sticker", 3, "src", "ngStyle"], ["sticker", ""], ["class", "col-10 stickerTitle", "style", "padding-left: 30px; word-wrap: break-word", 4, "ngIf"], [1, "col-10", "stickerTitle", 2, "padding-left", "30px", "word-wrap", "break-word"], [1, "danger-alert"]], template: function ProfileEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProfileEditComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProfileEditComponent_form_1_Template, 59, 11, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSaving);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSaving);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_10__["LoadingSpinnerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _shared_date_sort_pipe__WEBPACK_IMPORTED_MODULE_12__["DateSortPipe"]], styles: ["label[_ngcontent-%COMP%]{\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 24px;\n  color: #D8B869;\n  width: 100%;\n}\n\ninput[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]:focus {\n  font-family: 'ChampagneAndLimousines';\n  font-size: 18px;\n  color: #F7F7F7;\n  border: 2px solid #D8B869;\n  background: #131114;\n  margin-bottom: 35px;\n  border-radius: 10px;\n  width: 100%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 24px;\n  color: #D8B869;\n  border: 2px solid #D8B869;\n  background: #131114;\n  border-radius: 20px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.btn[_ngcontent-%COMP%]:enabled:hover{\n  background: #D8B869;\n  color: #080708;\n}\n\ninput.form-control.ng-invalid.ng-touched[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n}\n\ninput.invalidAmount[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n}\n\n.form-control-file[_ngcontent-%COMP%]{\n  border: 0px;\n  background: #080708;\n}\n\n.form-control-file[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 2px solid #D8B869;\n  background: #131114;\n}\n\n.file-input-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top:50%;\n  left: 50%;\n  transform: translate(-50%,-75px);\n  width: 0px;\n  height: 0px;\n  opacity: 0;\n}\n\n.inputFields[_ngcontent-%COMP%] {\n  width: 475px;\n}\n\n.horizontal-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%,0);\n}\n\n.danger-alert[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n  background: #131114;\n  margin-bottom: 35px;\n  border-radius: 10px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 18px;\n  color:#891E13;\n  width: 100%;\n}\n\n.uploadSuccess[_ngcontent-%COMP%] {\n  color: #53BD9C;\n  border: 2px solid #53BD9C;\n}\n\n.uploadFail[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n}\n\n.btn[_ngcontent-%COMP%]:enabled:hover{\n  background: #D8B869;\n  color: #080708;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 18px;\n  color: #F7F7F7;\n}\n\n.stickerSelect[_ngcontent-%COMP%] {\n  border: 2px solid #D8B869;\n  border-radius: 20px;\n  width: 100%;\n  height: 377px;\n  overflow-y: scroll;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.sticker[_ngcontent-%COMP%]{\n  border: 1px solid #707070;\n  border-radius: 50%;\n  padding: 0;\n  overflow: hidden;\n  position: relative;\n}\n\n.sticker[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n\nli[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  margin-bottom: 5px;\n}\n\nli[_ngcontent-%COMP%]:hover {\n  background: #D8B869 !important;\n}\n\n.stickerTitle[_ngcontent-%COMP%] {\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 18px;\n  color: #F7F7F7;\n}\n\n.storySignifier[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 130px;\n  border-radius: 50%;\n  background-image: linear-gradient(135deg,#DCB65A ,#131114 70%, transparent 90%);\n}\n\n.dpBackground[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: #080708;\n  top: 50%;\n  left: 50%;\n  transform: translate(5px,5px);\n}\n\n.dpBorder[_ngcontent-%COMP%] {\n  width: 106px;\n  height: 106px;\n  border-radius: 50%;\n  border: 1px solid #707070;\n  background:#080708;\n  overflow: hidden;\n  top: 50%;\n  left: 50%;\n  transform: translate(7px,7px);\n}\n\n.dpBorder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n\n.danger-alert[_ngcontent-%COMP%] {\n  border: 2px solid #891E13;\n  background: #131114;\n  margin-bottom: 35px;\n  border-radius: 10px;\n  padding-left: 12px;\n  padding-right: 12px;\n  padding-top: 6px;\n  padding-bottom: 6px;\n  font-family: 'ChampagneAndLimousines';\n  font-weight: bold;\n  font-size: 18px;\n  color:#891E13;\n  width: 100%;\n}\n\n@media screen and (max-width: 560px) {\n  .inputFields[_ngcontent-%COMP%] {\n    width: 84.82vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBOzs7O0VBSUUscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0VBQStFO0FBQ2pGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixTQUFTO0VBQ1QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRDhCODY5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXQsXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhLFxudGV4dGFyZWE6Zm9jdXMge1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjRjdGN0Y3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRDhCODY5O1xuICBiYWNrZ3JvdW5kOiAjMTMxMTE0O1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0biB7XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjRDhCODY5O1xuICBib3JkZXI6IDJweCBzb2xpZCAjRDhCODY5O1xuICBiYWNrZ3JvdW5kOiAjMTMxMTE0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuOmVuYWJsZWQ6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICNEOEI4Njk7XG4gIGNvbG9yOiAjMDgwNzA4O1xufVxuXG5pbnB1dC5mb3JtLWNvbnRyb2wubmctaW52YWxpZC5uZy10b3VjaGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzg5MUUxMztcbn1cblxuaW5wdXQuaW52YWxpZEFtb3VudCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4OTFFMTM7XG59XG5cblxuLmZvcm0tY29udHJvbC1maWxle1xuICBib3JkZXI6IDBweDtcbiAgYmFja2dyb3VuZDogIzA4MDcwODtcbn1cblxuLmZvcm0tY29udHJvbC1maWxlIC5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRDhCODY5O1xuICBiYWNrZ3JvdW5kOiAjMTMxMTE0O1xufVxuXG4uZmlsZS1pbnB1dC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDo1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNzVweCk7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMHB4O1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaW5wdXRGaWVsZHMge1xuICB3aWR0aDogNDc1cHg7XG59XG5cbi5ob3Jpem9udGFsLWNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xufVxuXG4uZGFuZ2VyLWFsZXJ0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzg5MUUxMztcbiAgYmFja2dyb3VuZDogIzEzMTExNDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjojODkxRTEzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVwbG9hZFN1Y2Nlc3Mge1xuICBjb2xvcjogIzUzQkQ5QztcbiAgYm9yZGVyOiAycHggc29saWQgIzUzQkQ5Qztcbn1cblxuLnVwbG9hZEZhaWwge1xuICBib3JkZXI6IDJweCBzb2xpZCAjODkxRTEzO1xufVxuXG4uYnRuOmVuYWJsZWQ6aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICNEOEI4Njk7XG4gIGNvbG9yOiAjMDgwNzA4O1xufVxuXG4uaGVscC1ibG9jayB7XG4gIGZvbnQtZmFtaWx5OiAnQ2hhbXBhZ25lQW5kTGltb3VzaW5lcyc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjRjdGN0Y3O1xufVxuXG4uc3RpY2tlclNlbGVjdCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNEOEI4Njk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDM3N3B4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnN0aWNrZXJ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3RpY2tlciBpbWcge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuXG5saSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbmxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI0Q4Qjg2OSAhaW1wb3J0YW50O1xufVxuXG4uc3RpY2tlclRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdDaGFtcGFnbmVBbmRMaW1vdXNpbmVzJztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNGN0Y3Rjc7XG59XG5cbi5zdG9yeVNpZ25pZmllciB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCNEQ0I2NUEgLCMxMzExMTQgNzAlLCB0cmFuc3BhcmVudCA5MCUpO1xufVxuXG4uZHBCYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwODA3MDg7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDVweCw1cHgpO1xufVxuXG4uZHBCb3JkZXIge1xuICB3aWR0aDogMTA2cHg7XG4gIGhlaWdodDogMTA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgYmFja2dyb3VuZDojMDgwNzA4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsN3B4KTtcbn1cblxuLmRwQm9yZGVyIGltZ3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuXG4uZGFuZ2VyLWFsZXJ0IHtcbiAgYm9yZGVyOiAycHggc29saWQgIzg5MUUxMztcbiAgYmFja2dyb3VuZDogIzEzMTExNDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBmb250LWZhbWlseTogJ0NoYW1wYWduZUFuZExpbW91c2luZXMnO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjojODkxRTEzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgLmlucHV0RmllbGRzIHtcbiAgICB3aWR0aDogODQuODJ2dztcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProfileEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-profile-edit',
                templateUrl: './profile-edit.component.html',
                styleUrls: ['./profile-edit.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] }, { type: src_app_shared_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }, { type: src_app_shared_activity_service__WEBPACK_IMPORTED_MODULE_6__["ActivityService"] }, { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { dpInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['dpInput']
        }] }); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _feed_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feed/feed.service */ "./src/app/feed/feed.service.ts");
/* harmony import */ var _profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile-display/profile-display.component */ "./src/app/profile-display/profile-display.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../feed/feed.component */ "./src/app/feed/feed.component.ts");







class ProfileComponent {
    constructor(route, feedService) {
        this.route = route;
        this.feedService = feedService;
        this.uid$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.uid = params['id'];
            this.uid$.next(this.uid);
            this.postsList = this.feedService.getProfilePage(this.uid);
        });
    }
    ngOnDestroy() {
        this.uid$.complete();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 3, consts: [[3, "getUid"], [2, "margin-top", "40px"], [3, "postsList$", "feedType"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-profile-display", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-feed", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("getUid", ctx.uid$);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("postsList$", ctx.postsList)("feedType", "afs");
    } }, directives: [_profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_4__["ProfileDisplayComponent"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_5__["FeedComponent"]], styles: [".horizontal-center[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%,0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhvcml6b250YWwtY2VudGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMCk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/activity.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/activity.service.ts ***!
  \********************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");




class ActivityService {
    constructor(db) {
        this.db = db;
        this.viewsRef = db.list('views');
        this.collectionRef = db.list('collection');
        this.activityRef = db.list('activity');
    }
    // --------------------------------------- Activity ---------------------------------------
    // gets activity for user or post
    getActivity(id) {
        return this.db.list('activity', ref => ref.orderByChild('id').equalTo(id)).valueChanges();
    }
    //create new activity entry for user or post
    addActivity(id, type) {
        this.activityRef.push({ id: id, type: type, views: 0, collected: 0 });
    }
    //update activity for view or collection
    updateActivity(type, uid, pid) {
        const queryUser = this.db.list('activity', ref => ref.orderByChild('id').equalTo(uid));
        const queryPost = this.db.list('activity', ref => ref.orderByChild('id').equalTo(pid));
        queryUser.snapshotChanges().pipe(//update old activity for user
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((response) => {
            if (type === 'view') {
                this.activityRef.update(response[0].key, { views: response[0].views + 1 });
            }
            else if (type === 'collection') {
                this.activityRef.update(response[0].key, { collected: response[0].collected + 1 });
            }
        });
        queryPost.snapshotChanges().pipe(//update old activity for post
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(changes => changes.map(c => (Object.assign({ key: c.payload.key }, c.payload.val())))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((response) => {
            if (type === 'view') {
                this.activityRef.update(response[0].key, { views: response[0].views + 1 });
            }
            else if (type === 'collection') {
                this.activityRef.update(response[0].key, { collected: response[0].collected + 1 });
            }
        });
    }
    // --------------------------------------- Views ---------------------------------------
    // add view to cloud firestore
    // viewerID: UID of the person who viewed the post
    // vieweeID: UID of the person whose post was viewed
    addViews(pid, viewerID, vieweeID) {
        const obj = { viewerID: viewerID, vieweeID: vieweeID, pid: pid, timeStamp: new Date().getTime() };
        this.viewsRef.push(obj);
        this.updateActivity('view', vieweeID, pid);
    }
    // --------------------------------------- Collection ---------------------------------------
    // add collector to cloud firestore
    // collectorID: UID of the person who collected the sticker
    // collecteeID: UID of the person whose sticker was collected
    addCollection(pid, collectorID, collecteeID) {
        const obj = { collectorID: collectorID, collecteeID: collecteeID, pid: pid, timeStamp: new Date().getTime() };
        this.collectionRef.push(obj);
        this.updateActivity('collection', collecteeID, pid);
    }
    // get collection by uid
    getUserCollection(uid) {
        return this.db.list('collection', ref => ref.orderByChild('collectorID').equalTo(uid)).valueChanges();
    }
    // get collection by pid
    getPostCollection(pid) {
        return this.db.list('collection', ref => ref.orderByChild('pid').equalTo(pid)).valueChanges();
    }
}
ActivityService.ɵfac = function ActivityService_Factory(t) { return new (t || ActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"])); };
ActivityService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActivityService, factory: ActivityService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/date-sort.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/date-sort.pipe.ts ***!
  \******************************************/
/*! exports provided: DateSortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateSortPipe", function() { return DateSortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DateSortPipe {
    transform(value, type) {
        if (type === 'afs') { //Cloud firestore
            return value.sort((a, b) => b.dateCreated.toMillis() - a.dateCreated.toMillis());
        }
        else if (type === 'db') { //Realtime database
            return value.sort((a, b) => b.dateCreated - a.dateCreated);
        }
        else if (type === 'collectionDisplay') { //Profile edit component collection display
            console.log('working?'); //log
            return value.sort((a, b) => b.sortTime - a.sortTime);
        }
    }
}
DateSortPipe.ɵfac = function DateSortPipe_Factory(t) { return new (t || DateSortPipe)(); };
DateSortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateSort", type: DateSortPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateSortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateSort'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/directives/scrollable.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/scrollable.directive.ts ***!
  \***********************************************************/
/*! exports provided: ScrollableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollableDirective", function() { return ScrollableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ScrollableDirective {
    constructor(el) {
        this.el = el;
        this.scrollPosition = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onScroll(event) {
        try {
            const top = event.target.scrollTop;
            const height = this.el.nativeElement.scrollHeight;
            const offset = this.el.nativeElement.offsetHeight;
            // emit bottom event
            if (top > height - offset - 20) {
                this.scrollPosition.emit('bottom');
            }
            // emit top event
            if (top === 0) {
                this.scrollPosition.emit('top');
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}
ScrollableDirective.ɵfac = function ScrollableDirective_Factory(t) { return new (t || ScrollableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollableDirective, selectors: [["", "scrollable", ""]], hostBindings: function ScrollableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollableDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, outputs: { scrollPosition: "scrollPosition" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[scrollable]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { scrollPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/title-case.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/title-case.directive.ts ***!
  \***********************************************************/
/*! exports provided: TitleCaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleCaseDirective", function() { return TitleCaseDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




class TitleCaseDirective {
    constructor(ngControl, titleCase) {
        this.ngControl = ngControl;
        this.titleCase = titleCase;
    }
    onInputChange(value) {
        if (value && value !== '' && value.length > 0) {
            const arrStr = value.toLowerCase().split(' ');
            const titleCaseStr = this.titleCase.transform(value);
            this.ngControl.valueAccessor.writeValue(titleCaseStr);
        }
    }
}
TitleCaseDirective.ɵfac = function TitleCaseDirective_Factory(t) { return new (t || TitleCaseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"])); };
TitleCaseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TitleCaseDirective, selectors: [["", "appTitleCase", ""]], hostBindings: function TitleCaseDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TitleCaseDirective_ngModelChange_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleCaseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTitleCase]'
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControl"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"] }]; }, { onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['ngModelChange', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/infinite-scroll.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/infinite-scroll.service.ts ***!
  \***************************************************/
/*! exports provided: InfiniteScrollService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollService", function() { return InfiniteScrollService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class InfiniteScrollService {
    constructor() {
        this.getScroll$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
InfiniteScrollService.ɵfac = function InfiniteScrollService_Factory(t) { return new (t || InfiniteScrollService)(); };
InfiniteScrollService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InfiniteScrollService, factory: InfiniteScrollService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 5, vars: 0, consts: [[1, "loadingio-spinner-dual-ball-qgi44nxh3ao"], [1, "ldio-438olev6hsc"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@-webkit-keyframes ldio-438olev6hsc-o {\n    0%    { opacity: 1; transform: translate(0 0) }\n   49.99% { opacity: 1; transform: translate(98.56px,0) }\n   50%    { opacity: 0; transform: translate(98.56px,0) }\n  100%    { opacity: 0; transform: translate(0,0) }\n}\n@keyframes ldio-438olev6hsc-o {\n    0%    { opacity: 1; transform: translate(0 0) }\n   49.99% { opacity: 1; transform: translate(98.56px,0) }\n   50%    { opacity: 0; transform: translate(98.56px,0) }\n  100%    { opacity: 0; transform: translate(0,0) }\n}\n@-webkit-keyframes ldio-438olev6hsc {\n    0% { transform: translate(0,0) }\n   50% { transform: translate(98.56px,0) }\n  100% { transform: translate(0,0) }\n}\n@keyframes ldio-438olev6hsc {\n    0% { transform: translate(0,0) }\n   50% { transform: translate(98.56px,0) }\n  100% { transform: translate(0,0) }\n}\n.ldio-438olev6hsc[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 98.56px;\n  height: 98.56px;\n  border-radius: 50%;\n  top: 62.720000000000006px;\n  left: 13.440000000000001px;\n}\n.ldio-438olev6hsc[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  background: #d8b869;\n  -webkit-animation: ldio-438olev6hsc 1.1627906976744184s linear infinite;\n          animation: ldio-438olev6hsc 1.1627906976744184s linear infinite;\n  -webkit-animation-delay: -0.5813953488372092s;\n          animation-delay: -0.5813953488372092s;\n}\n.ldio-438olev6hsc[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  background: #707070;\n  -webkit-animation: ldio-438olev6hsc 1.1627906976744184s linear infinite;\n          animation: ldio-438olev6hsc 1.1627906976744184s linear infinite;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n.ldio-438olev6hsc[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  background: #d8b869;\n  -webkit-animation: ldio-438olev6hsc-o 1.1627906976744184s linear infinite;\n          animation: ldio-438olev6hsc-o 1.1627906976744184s linear infinite;\n  -webkit-animation-delay: -0.5813953488372092s;\n          animation-delay: -0.5813953488372092s;\n}\n.loadingio-spinner-dual-ball-qgi44nxh3ao[_ngcontent-%COMP%] {\n  width: 224px;\n  height: 224px;\n  display: inline-block;\n  overflow: hidden;\n  background: transparent;\n}\n.ldio-438olev6hsc[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transform: translateZ(0) scale(1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-origin: 0 0; \n}\n.ldio-438olev6hsc[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { box-sizing: content-box; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVEsVUFBVSxFQUFFLDBCQUEwQjtHQUMvQyxTQUFTLFVBQVUsRUFBRSxnQ0FBZ0M7R0FDckQsU0FBUyxVQUFVLEVBQUUsZ0NBQWdDO0VBQ3RELFVBQVUsVUFBVSxFQUFFLDBCQUEwQjtBQUNsRDtBQUxBO0lBQ0ksUUFBUSxVQUFVLEVBQUUsMEJBQTBCO0dBQy9DLFNBQVMsVUFBVSxFQUFFLGdDQUFnQztHQUNyRCxTQUFTLFVBQVUsRUFBRSxnQ0FBZ0M7RUFDdEQsVUFBVSxVQUFVLEVBQUUsMEJBQTBCO0FBQ2xEO0FBQ0E7SUFDSSxLQUFLLDBCQUEwQjtHQUNoQyxNQUFNLGdDQUFnQztFQUN2QyxPQUFPLDBCQUEwQjtBQUNuQztBQUpBO0lBQ0ksS0FBSywwQkFBMEI7R0FDaEMsTUFBTSxnQ0FBZ0M7RUFDdkMsT0FBTywwQkFBMEI7QUFDbkM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsdUVBQStEO1VBQS9ELCtEQUErRDtFQUMvRCw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsdUVBQStEO1VBQS9ELCtEQUErRDtFQUMvRCwyQkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUVBQWlFO1VBQWpFLGlFQUFpRTtFQUNqRSw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUNBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixxQkFBcUIsRUFBRSxtQkFBbUI7QUFDNUM7QUFDQSx3QkFBd0IsdUJBQXVCLEVBQUU7QUFDakQscUNBQXFDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgbGRpby00MzhvbGV2NmhzYy1vIHtcbiAgICAwJSAgICB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAgMCkgfVxuICAgNDkuOTklIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTguNTZweCwwKSB9XG4gICA1MCUgICAgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg5OC41NnB4LDApIH1cbiAgMTAwJSAgICB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgfVxufVxuQGtleWZyYW1lcyBsZGlvLTQzOG9sZXY2aHNjIHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCkgfVxuICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOTguNTZweCwwKSB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApIH1cbn1cbi5sZGlvLTQzOG9sZXY2aHNjIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk4LjU2cHg7XG4gIGhlaWdodDogOTguNTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0b3A6IDYyLjcyMDAwMDAwMDAwMDAwNnB4O1xuICBsZWZ0OiAxMy40NDAwMDAwMDAwMDAwMDFweDtcbn1cbi5sZGlvLTQzOG9sZXY2aHNjIGRpdjpudGgtY2hpbGQoMSkge1xuICBiYWNrZ3JvdW5kOiAjZDhiODY5O1xuICBhbmltYXRpb246IGxkaW8tNDM4b2xldjZoc2MgMS4xNjI3OTA2OTc2NzQ0MTg0cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNTgxMzk1MzQ4ODM3MjA5MnM7XG59XG4ubGRpby00MzhvbGV2NmhzYyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgYmFja2dyb3VuZDogIzcwNzA3MDtcbiAgYW5pbWF0aW9uOiBsZGlvLTQzOG9sZXY2aHNjIDEuMTYyNzkwNjk3Njc0NDE4NHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuLmxkaW8tNDM4b2xldjZoc2MgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGJhY2tncm91bmQ6ICNkOGI4Njk7XG4gIGFuaW1hdGlvbjogbGRpby00MzhvbGV2NmhzYy1vIDEuMTYyNzkwNjk3Njc0NDE4NHMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjU4MTM5NTM0ODgzNzIwOTJzO1xufVxuLmxvYWRpbmdpby1zcGlubmVyLWR1YWwtYmFsbC1xZ2k0NG54aDNhbyB7XG4gIHdpZHRoOiAyMjRweDtcbiAgaGVpZ2h0OiAyMjRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5sZGlvLTQzOG9sZXY2aHNjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyAvKiBzZWUgbm90ZSBhYm92ZSAqL1xufVxuLmxkaW8tNDM4b2xldjZoc2MgZGl2IHsgYm94LXNpemluZzogY29udGVudC1ib3g7IH1cbi8qIGdlbmVyYXRlZCBieSBodHRwczovL2xvYWRpbmcuaW8vICovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                templateUrl: './loading-spinner.component.html',
                styleUrls: ['./loading-spinner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/post.model.ts":
/*!**************************************!*\
  !*** ./src/app/shared/post.model.ts ***!
  \**************************************/
/*! exports provided: PostDetails, PostContent, StickerDetails, StickerContent, Comment, Holder, Post, Posts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetails", function() { return PostDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContent", function() { return PostContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerDetails", function() { return StickerDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerContent", function() { return StickerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Holder", function() { return Holder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Posts", function() { return Posts; });
class PostDetails {
    constructor(uid, title, description, dateCreated, pid) {
        this.uid = uid;
        this.title = title;
        this.description = description;
        this.dateCreated = dateCreated;
        this.pid = pid;
    }
}
class PostContent {
    constructor(name, fileFormat = 'image') {
        this.name = name;
        this.fileFormat = fileFormat;
    }
}
class StickerDetails {
    constructor(amountReleased, price = 0) {
        this.amountReleased = amountReleased;
        this.price = price;
    }
}
class StickerContent {
    constructor(name, fileFormat = 'image') {
        this.name = name;
        this.fileFormat = fileFormat;
    }
}
class Comment {
    constructor(uid, commentDetails, dateCreated) {
        this.uid = uid;
        this.commentDetails = commentDetails;
        this.dateCreated = dateCreated;
    }
}
class Holder {
    constructor(uid, dateCollected) {
        this.uid = uid;
        this.dateCollected = dateCollected;
    }
}
class Post {
    constructor(postDetails, postContent, stickerContent, stickerDetails, holderList, commentList) {
        this.postDetails = postDetails;
        this.postContent = postContent;
        this.stickerContent = stickerContent;
        this.stickerDetails = stickerDetails;
        this.holderList = holderList;
        this.commentList = commentList;
    }
}
class Posts {
    constructor(pid, post) {
        this.pid = pid;
        this.post = post;
    }
}


/***/ }),

/***/ "./src/app/shared/post.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");





class PostService {
    constructor(afs, storage) {
        this.afs = afs;
        this.storage = storage;
        this.placeholderImg = 'assets/default image/blank_image@2x.png';
        this.stickerContentList = [];
        this.postContentList = [];
        this.postDetailsCollection = afs.collection('post details');
        this.postContentCollection = afs.collection('post content');
        this.stickerDetailsCollection = afs.collection('sticker details');
        this.stickerContentCollection = afs.collection('sticker content');
    }
    //--------------------------------------- Post details ---------------------------------------
    // Get post details from cloud firestore by PID
    getPostDetails(pid) {
        return this.afs.doc('post details/' + pid).valueChanges();
    }
    // Add post details from cloud firestore
    addPostDetails(pid, details) {
        const obj = { uid: details.uid, title: details.title, description: details.description, dateCreated: details.dateCreated };
        this.postDetailsCollection.doc(pid).set(obj);
    }
    //--------------------------------------- Stickers details ---------------------------------------
    // Get sticker details from cloud firestore by PID
    getStickerDetails(pid) {
        return this.afs.doc('sticker details/' + pid).valueChanges();
    }
    // Add sticker details from cloud firestore
    addStickerDetails(pid, details) {
        const obj = { amountReleased: details.amountReleased, price: details.price };
        this.stickerDetailsCollection.doc(pid).set(obj);
    }
    // --------------------------------------- Post content ---------------------------------------
    // Get post content from cloud firestore by UID
    getPostContentRef(pid) {
        return this.afs.doc('post content/' + pid).valueChanges();
    }
    // Add post content from cloud firestore
    addPostContentRef(pid, content) {
        const obj = { name: content.name, fileFormat: content.fileFormat };
        this.postContentCollection.doc(pid).set(obj);
    }
    // Get post content from firebase storage by UID
    getPostContent(pid) {
        let index = this.postContentList.findIndex(details => {
            return details.pid === pid;
        });
        if (index === -1) {
            this.postContentList.push({ pid: pid, obs: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null) });
            let secIndex = this.postContentList.length - 1;
            this.getPostContentRef(pid).subscribe((response) => {
                const ref = this.storage.ref('Post/' + response.name);
                ref.getDownloadURL().subscribe(response => {
                    this.postContentList[secIndex].obs.next(response);
                });
            });
            return this.postContentList[secIndex].obs;
        }
        else {
            return this.postContentList[index].obs;
        }
    }
    // --------------------------------------- Sticker content ---------------------------------------
    // Get sticker content from cloud firestore by UID
    getStickerContentRef(pid) {
        return this.afs.doc('sticker content/' + pid).valueChanges();
    }
    // Add sticker content from cloud firestore
    addStickerContentRef(pid, content) {
        const obj = { name: content.name, fileFormat: content.fileFormat };
        this.stickerContentCollection.doc(pid).set(obj);
    }
    // Get sticker content from firebase storage by UID
    getStickerContent(pid) {
        let index = this.stickerContentList.findIndex(details => {
            return details.pid === pid;
        });
        if (index === -1) {
            this.stickerContentList.push({ pid: pid, obs: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.placeholderImg) });
            let secIndex = this.stickerContentList.length - 1;
            this.getStickerContentRef(pid).subscribe((response) => {
                const ref = this.storage.ref('Post/' + response.name);
                ref.getDownloadURL().subscribe(response => {
                    if (response) {
                        this.stickerContentList[secIndex].obs.next(response);
                    }
                });
            });
            return this.stickerContentList[secIndex].obs;
        }
        else {
            return this.stickerContentList[index].obs;
        }
    }
    // --------------------------------------- Content storage ---------------------------------------
    // Add content for post from firebase storage
    addContent(name, content) {
        // Upload to storage
        const file = content;
        const filePath = 'Post/' + name;
        const ref = this.storage.ref(filePath);
        const task = ref.put(file);
        return task.percentageChanges();
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/profile.model.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/profile.model.ts ***!
  \*****************************************/
/*! exports provided: Biography, ProfileDetails, ProfileSticker, DisplayPicture, PersonalDetails, Profile, Profiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Biography", function() { return Biography; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileDetails", function() { return ProfileDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSticker", function() { return ProfileSticker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPicture", function() { return DisplayPicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetails", function() { return PersonalDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiles", function() { return Profiles; });
class Biography {
    constructor(title, location, content) {
        this.title = title;
        this.location = location;
        this.content = content;
    }
}
class ProfileDetails {
    constructor(username, bio) {
        this.username = username;
        this.bio = bio;
    }
}
class ProfileSticker {
    constructor(pid, dateCreated) {
        this.pid = pid;
        this.dateCreated = dateCreated;
    }
}
class DisplayPicture {
    constructor(name, dateCreated, fileFormat) {
        this.name = name;
        this.dateCreated = dateCreated;
        this.fileFormat = fileFormat;
    }
}
class PersonalDetails {
    constructor(name, email, dateOfBirth, dateCreated) {
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.dateCreated = dateCreated;
    }
}
class Profile {
    constructor(profileDetails, profileStickers, personalDetails, displayPicture) {
        this.profileDetails = profileDetails;
        this.profileStickers = profileStickers;
        this.personalDetails = personalDetails;
        this.displayPicture = displayPicture;
    }
}
class Profiles {
    constructor(uid, profile) {
        this.uid = uid;
        this.profile = profile;
    }
}


/***/ }),

/***/ "./src/app/shared/users.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/users.service.ts ***!
  \*****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");






class UsersService {
    constructor(afs, storage) {
        this.afs = afs;
        this.storage = storage;
        this.maxConnect = 100; //Maximum number of allowed connection
        this.connectCount = 0; //Total number of connection
        this.placeholderImg = 'assets/default image/blank_image@2x.png';
        // Downloaded data storage
        this.profileDetailsList = [];
        this.personalDetailsList = [];
        this.profileStickersList = [];
        this.displayPictureList = [];
        this.profileDetailsCollection = afs.collection('profile details');
        this.personalDetailsCollection = afs.collection('personal details');
        this.profileStickersCollection = afs.collection('profile stickers');
        this.displayPictureCollection = afs.collection('display picture');
    }
    // Stops more than max connection from occurring
    // NOT WORKING RN -> maybe a subscription array??
    cleanUp(uid, folder, connectNumber) {
        return this.connectCount === connectNumber + this.maxConnect;
    }
    //--------------------------------------- Profile details ---------------------------------------
    // Get profile details from cloud firestore by UID
    getProfileDetails(uid) {
        let index = this.profileDetailsList.findIndex(details => {
            return details.uid === uid;
        });
        if (index === -1) {
            this.profileDetailsList.push({ uid: uid, obs: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined) });
            let secIndex = this.profileDetailsList.length - 1;
            this.afs.doc('profile details/' + uid).valueChanges().subscribe(response => {
                this.profileDetailsList[secIndex].obs.next(response);
            });
            return this.profileDetailsList[secIndex].obs;
        }
        else {
            return this.profileDetailsList[index].obs;
        }
    }
    // Get profile details from cloud firestore by key
    // Used by auth service for username verification
    getProfileDetailsByKey(key, value) {
        return this.afs.collection('profile details', ref => ref.where(key, '==', value)).valueChanges();
    }
    // Add profile details from cloud firestore
    addProfileDetails(uid, details) {
        const bio = { title: details.bio.title, location: details.bio.location, content: details.bio.content };
        const obj = { username: details.username, bio: bio };
        this.profileDetailsCollection.doc(uid).set(obj);
    }
    // Update profile details from cloud firestore
    updateProfileDetails(uid, details) {
        const bio = { title: details.bio.title, location: details.bio.location, content: details.bio.content };
        const obj = { username: details.username, bio: bio };
        this.profileDetailsCollection.doc(uid).update(obj);
    }
    //--------------------------------------- Personal Details ---------------------------------------
    // Get personal details from cloud firestore by UID
    getPersonalDetails(uid) {
        let index = this.personalDetailsList.findIndex(details => {
            return details.uid === uid;
        });
        if (index === -1) {
            this.personalDetailsList.push({ uid: uid, obs: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined) });
            let secIndex = this.personalDetailsList.length - 1;
            this.afs.doc('personal details/' + uid).valueChanges().subscribe(response => {
                this.personalDetailsList[secIndex].obs.next(response);
            });
            ;
            return this.personalDetailsList[secIndex].obs;
        }
        else {
            return this.personalDetailsList[index].obs;
        }
    }
    // Add personal details from cloud firestore
    addPersonalDetails(uid, details) {
        const obj = { dateCreated: details.dateCreated, dateOfBirth: details.dateOfBirth, email: details.email, name: details.name };
        this.personalDetailsCollection.doc(uid).set(obj);
    }
    //--------------------------------------- Profile Stickers ---------------------------------------
    // Get profile stickers from cloud firestore by UID
    getProfileStickers(uid) {
        let index = this.profileStickersList.findIndex(details => {
            return details.uid === uid;
        });
        if (index === -1) {
            this.profileStickersList.push({ uid: uid, obs: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](undefined) });
            let secIndex = this.profileStickersList.length - 1;
            this.afs.doc('profile stickers/' + uid).valueChanges().subscribe(response => {
                this.profileStickersList[secIndex].obs.next(response.stickers);
            });
            ;
            return this.profileStickersList[secIndex].obs;
        }
        else {
            return this.profileStickersList[index].obs;
        }
    }
    // Add profile stickers from cloud firestore
    addProfileStickers(uid, profileSticker) {
        const stickerArray = [];
        profileSticker.forEach(sticker => {
            stickerArray.push({ pid: sticker.pid, dateCreated: sticker.dateCreated });
        });
        this.profileStickersCollection.doc(uid).set({ stickers: stickerArray });
    }
    // Update profile stickers from 
    updateProfileSticker(uid, profileSticker) {
        const stickerArray = [];
        profileSticker.forEach(sticker => {
            stickerArray.push({ pid: sticker.pid, dateCreated: sticker.dateCreated });
        });
        this.profileStickersCollection.doc(uid).update({ stickers: stickerArray });
    }
    // --------------------------------------- Display Picture ---------------------------------------
    // Get display picture from cloud firestore by UID
    getDisplayPictureRef(uid) {
        return this.afs.doc('display picture/' + uid).valueChanges();
    }
    // Add display picture from cloud firestore
    addDisplayPictureRef(uid, displayPicture) {
        const dp = { name: uid, dateCreated: displayPicture.dateCreated };
        this.displayPictureCollection.doc(uid).set(dp);
    }
    // Update display picture from cloud firestore
    updateDisplayPictureRef(uid, displayPicture) {
        const dp = { name: uid, dateCreated: displayPicture.dateCreated };
        this.displayPictureCollection.doc(uid).update(dp);
    }
    // Get display picture from firebase storage by UID
    getDisplayPicture(uid) {
        let index = this.displayPictureList.findIndex(details => {
            return details.uid === uid;
        });
        if (index === -1) {
            this.displayPictureList.push({ uid: uid, obs: new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.placeholderImg) });
            let secIndex = this.displayPictureList.length - 1;
            this.getDisplayPictureRef(uid).subscribe((response) => {
                const ref = this.storage.ref('Display picture/' + uid);
                ref.getDownloadURL().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(response => {
                    this.displayPictureList[secIndex].obs.next(response);
                });
            });
            return this.displayPictureList[secIndex].obs;
        }
        else {
            return this.displayPictureList[index].obs;
        }
    }
    // Add display picture from firebase storage
    addDisplayPicture(uid, displayPicture, content) {
        // Upload to cloud firestore
        this.addDisplayPictureRef(uid, displayPicture);
        // Upload to storage
        if (content) {
            const file = content;
            const filePath = 'Display picture/' + uid;
            const ref = this.storage.ref(filePath);
            const task = ref.put(file);
            return task.percentageChanges();
        }
    }
    // Update display picture from firebase storage
    updateDisplayPicture(uid, content) {
        const file = content;
        const filePath = 'Display picture/' + uid;
        const task = this.storage.upload(filePath, file);
        return task.percentageChanges();
    }
    // --------------------------------------- Error handling ---------------------------------------
    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/window.service.ts":
/*!******************************************!*\
  !*** ./src/app/shared/window.service.ts ***!
  \******************************************/
/*! exports provided: WindowStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowStateService", function() { return WindowStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class WindowStateService {
    constructor() {
        this.screenWidthValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.checkWidth();
    }
    checkWidth() {
        var width = window.innerWidth;
        this.screenWidthValue.next(width);
    }
}
WindowStateService.ɵfac = function WindowStateService_Factory(t) { return new (t || WindowStateService)(); };
WindowStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowStateService, factory: WindowStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/with-loading.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/with-loading.pipe.ts ***!
  \*********************************************/
/*! exports provided: WithLoadingPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithLoadingPipe", function() { return WithLoadingPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class WithLoadingPipe {
    transform(val) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(val)
            ? val.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((value) => ({ loading: false, value })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])({ loading: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ loading: false, error })))
            : val;
    }
}
WithLoadingPipe.ɵfac = function WithLoadingPipe_Factory(t) { return new (t || WithLoadingPipe)(); };
WithLoadingPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "withLoading", type: WithLoadingPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WithLoadingPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'withLoading',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/single-post/single-post.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-post/single-post.component.ts ***!
  \******************************************************/
/*! exports provided: SinglePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePostComponent", function() { return SinglePostComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile-display/profile-display.component */ "./src/app/profile-display/profile-display.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feed/feed.component */ "./src/app/feed/feed.component.ts");








class SinglePostComponent {
    constructor(postService, route) {
        this.postService = postService;
        this.route = route;
        this.uid$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.postsList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); //must include pid
        this.notifier$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.pid = this.route.snapshot.params['pid'];
        this.setUp();
        this.route.params.subscribe((params) => {
            this.pid = params['pid'];
            this.setUp();
        }, errorMessage => {
            console.log(errorMessage);
        });
    }
    setUp() {
        this.postService.getPostDetails(this.pid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["takeUntil"])(this.notifier$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(changes => {
            return Object.assign({ pid: this.pid }, changes);
        })).subscribe(res => {
            this.uid$.next(res.uid);
            let postDetailsList = [];
            postDetailsList.push(res);
            this.postsList.next(postDetailsList);
        });
    }
    ngOnDestroy() {
        this.notifier$.next();
        this.notifier$.complete();
        this.uid$.complete();
    }
}
SinglePostComponent.ɵfac = function SinglePostComponent_Factory(t) { return new (t || SinglePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
SinglePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SinglePostComponent, selectors: [["app-single-post"]], decls: 3, vars: 3, consts: [[3, "getUid"], [2, "margin-top", "40px"], [3, "postsList$", "feedType"]], template: function SinglePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-profile-display", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feed", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("getUid", ctx.uid$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("postsList$", ctx.postsList)("feedType", "afs");
    } }, directives: [_profile_display_profile_display_component__WEBPACK_IMPORTED_MODULE_5__["ProfileDisplayComponent"], _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZS1wb3N0L3NpbmdsZS1wb3N0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SinglePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-single-post',
                templateUrl: './single-post.component.html',
                styleUrls: ['./single-post.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/static pages/tutorial-page/tutorial-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/static pages/tutorial-page/tutorial-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: TutorialPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageComponent", function() { return TutorialPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TutorialPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TutorialPageComponent.ɵfac = function TutorialPageComponent_Factory(t) { return new (t || TutorialPageComponent)(); };
TutorialPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TutorialPageComponent, selectors: [["app-tutorial-page"]], decls: 36, vars: 0, consts: [[1, "bg"], [1, "flex-container"], [1, "Collect"], ["src", "assets/images/Collect@3x.png", 1, "pic-Collect"], [2, "font-size", "22px"], [2, "font-family", "ChampagneAndLimousines"], [1, "Create"], ["src", "assets/images/Create@3x.png", 1, "pic-Create"], [1, "Community"], ["src", "assets/images/Community@3x.png", 1, "pic-Community"]], template: function TutorialPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "COLLECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "That big round thing on the");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " bottom right is the posts sticker.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "The bar shows how many stickers are left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "CREATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Choose how many stickers you want to release");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Express your creativity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "COMMUNITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "See people use your work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " to express themselves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Exclusively use content through stickers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Snippet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " For Creators ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n    }\n\n\n\n\n\n@-webkit-keyframes fadein {\n        from { opacity: 0; }\n        to   { opacity: 1; }\n    }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.flex-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        height: calc(100vh - 46px);\n        justify-content: center;\n        align-items: flex-end;\n        \n        \n      }\n\n.flex-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n        width: 350px;\n        margin-left: 50px;\n        margin-right: 50px;\n        margin-top: 50px;\n        margin-bottom: 50px;\n        text-align: center;\n        line-height: 28px;\n        font-size: 18px;\n        -webkit-animation: fadein 3s; \n         animation: fadein 3s;\n         color: rgb(216, 184, 105);\n         \n      }\n\n.pic-Collect[_ngcontent-%COMP%] {\n        position: relative;\n        left: -14px;\n        top: -25px;\n        width: 350px;\n        height: auto;\n        \n    }\n\n.pic-Create[_ngcontent-%COMP%] {\n        position:relative;\n        width: 320px;\n        height: auto;\n        top: -25px;\n    }\n\n.pic-Community[_ngcontent-%COMP%] {\n        position: relative;\n        top: -25px;\n        width: 315px;\n        height: auto;\n        \n    }\n\nfooter[_ngcontent-%COMP%] {\n        font-size: 28px;\n        text-align: center;\n        color: rgb(220, 182, 90);\n        margin-bottom: 50px;\n    }\n\n.Create[_ngcontent-%COMP%] {\n        transform: translateY(5px);\n    }\n\n.bg[_ngcontent-%COMP%] {\n\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGljIHBhZ2VzL3R1dG9yaWFsLXBhZ2UvdHV0b3JpYWwtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWU7O0FBRWY7SUFDSSxPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFVBQVUsRUFBRTtJQUNuQjs7QUFFQSxpQkFBaUI7O0FBTWpCLG9DQUFvQzs7QUFDcEM7UUFDSSxPQUFPLFVBQVUsRUFBRTtRQUNuQixPQUFPLFVBQVUsRUFBRTtJQUN2Qjs7QUFFQSxzQkFBc0I7O0FBTXRCLGlCQUFpQjs7QUFRckIsWUFBWTs7QUFFUDs7O01BR0M7O0FBQ0Y7Ozs7Ozs7Ozs7b0NBVWdDOztBQUVoQyxNQUFNOztBQUVOOzs7Ozs7Ozs7OztPQVdHOztBQUtIO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsMEJBQTBCO1FBQzFCLHVCQUF1QjtRQUN2QixxQkFBcUI7OztNQUd2Qjs7QUFFQTtRQUNFLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsNEJBQTRCO1NBSTNCLG9CQUFvQjtTQUNwQix5QkFBeUI7U0FDekI7Ozs7O2lDQUt3QjtNQUMzQjs7QUFFRjtRQUNJLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsVUFBVTtRQUNWLFlBQVk7UUFDWixZQUFZOztJQUVoQjs7QUFFQTtRQUNJLGlCQUFpQjtRQUNqQixZQUFZO1FBQ1osWUFBWTtRQUNaLFVBQVU7SUFDZDs7QUFFQTtRQUNJLGtCQUFrQjtRQUNsQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFlBQVk7O0lBRWhCOztBQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsbUJBQW1CO0lBQ3ZCOztBQUdBO1FBQ0ksMEJBQTBCO0lBQzlCOztBQUVBOztJQUVBIiwiZmlsZSI6InNyYy9hcHAvc3RhdGljIHBhZ2VzL3R1dG9yaWFsLXBhZ2UvdHV0b3JpYWwtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQW5pbWF0aW9ucyAqL1xuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBcbiAgICAvKiBGaXJlZm94IDwgMTYgKi9cbiAgICBALW1vei1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIFxuICAgIC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8gICB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG4gICAgXG4gICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICBALW1zLWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxuICAgIH1cbiAgICBcbiAgICAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICBALW8ta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuLyogU3R5bGluZyAqL1xuICAgIFxuICAgICAvKiBodG1sICoge1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbWZvcnRhYSc7XG4gICAgfVxuICAgICAqL1xuICAgIC8qIG1haW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgNywgOCk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICByZ2JhKDIxNSwgMTgzLCAxMDQsIDAuNykgMC4wOCUsIHJnYig4LCA3LCA4KSk7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gICAgXG4gICAgYm9keSB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjE2LCAxODQsIDEwNSk7ICovXG4gICAgICAgIFxuICAgIC8qIH0gKi9cbiAgICBcbiAgICAvKiAuYmFjay1ncm91bmQge1xuICAgICAgICBcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgd2lkdGg6IDEwMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgNywgOCk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICByZ2JhKDIxNSwgMTgzLCAxMDQsIDAuNykgMC4wOCUsIHJnYig4LCA3LCA4KSk7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXG5cbiAgICB9ICovXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICAgLmZsZXgtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0NnB4KTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgICAuZmxleC1jb250YWluZXIgPiBkaXYge1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVpbiAzczsgXG4gICAgLW1vei1hbmltYXRpb246IGZhZGVpbiAzczsgXG4gICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAzczsgXG4gICAgICAtby1hbmltYXRpb246IGZhZGVpbiAzczsgXG4gICAgICAgICBhbmltYXRpb246IGZhZGVpbiAzcztcbiAgICAgICAgIGNvbG9yOiByZ2IoMjE2LCAxODQsIDEwNSk7XG4gICAgICAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgNywgOCk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICByZ2JhKDIxNSwgMTgzLCAxMDQsIDAuNykgMC4wOCUsIHJnYig4LCA3LCA4KSk7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgKi9cbiAgICAgIH1cbiAgICBcbiAgICAucGljLUNvbGxlY3Qge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IC0xNHB4O1xuICAgICAgICB0b3A6IC0yNXB4O1xuICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLnBpYy1DcmVhdGUge1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHRvcDogLTI1cHg7XG4gICAgfVxuXG4gICAgLnBpYy1Db21tdW5pdHkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTI1cHg7XG4gICAgICAgIHdpZHRoOiAzMTVweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBmb290ZXIge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHJnYigyMjAsIDE4MiwgOTApO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuQ3JlYXRlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgfVxuICAgIFxuICAgIC5iZyB7XG5cbiAgICB9XG5cblxuICAgIFxuICAgICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TutorialPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tutorial-page',
                templateUrl: './tutorial-page.component.html',
                styleUrls: ['./tutorial-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sticker/sticker.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sticker/sticker.component.ts ***!
  \**********************************************/
/*! exports provided: StickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerComponent", function() { return StickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function (a0, a1) { return { "width": a0, "height": a1 }; };
const _c1 = function (a0, a1) { return { "height": a0, "width": a1 }; };
function StickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StickerComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function StickerComponent_div_0_Template_img_load_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onLoad($event); })("click", function StickerComponent_div_0_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r0.size, ctx_r0.size));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", content_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx_r0.imageProp.height, ctx_r0.imageProp.width));
} }
class StickerComponent {
    constructor(postService, router) {
        this.postService = postService;
        this.router = router;
        this.size = "24px";
        this.stickerSize = {};
        this.imageProp = { 'height': 'auto', 'width': 'auto' };
    }
    ngOnInit() {
        this.stickerContent = this.postService.getStickerContent(this.pid);
    }
    onLoad(event) {
        let width = event.target.width;
        let height = event.target.height;
        if (width / height < 1) {
            this.imageProp.width = '100%';
            this.imageProp.height = 'auto';
        }
        else {
            this.imageProp.width = 'auto';
            this.imageProp.height = '100%';
        }
    }
    onClick() {
        this.router.navigate(['/post/', this.pid]);
    }
}
StickerComponent.ɵfac = function StickerComponent_Factory(t) { return new (t || StickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
StickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StickerComponent, selectors: [["app-sticker"]], inputs: { pid: "pid", size: "size" }, decls: 2, vars: 3, consts: [["class", "sticker", "style", "cursor: pointer;", 3, "ngStyle", "click", 4, "ngIf"], [1, "sticker", 2, "cursor", "pointer", 3, "ngStyle", "click"], ["alt", "sticker", 3, "src", "ngStyle", "load", "click"]], template: function StickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StickerComponent_div_0_Template, 2, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.stickerContent));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".sticker[_ngcontent-%COMP%]{\n  border: 1px solid #707070;\n  border-radius: 50%;\n  padding: 0;\n  position: absolute;\n  overflow: hidden;\n  right:0;\n}\n\nimg[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  margin: 0 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%,-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RpY2tlci9zdGlja2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLE9BQU87QUFDVDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL3N0aWNrZXIvc3RpY2tlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0aWNrZXJ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICByaWdodDowO1xufVxuXG5pbWcge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sticker',
                templateUrl: './sticker.component.html',
                styleUrls: ['./sticker.component.css']
            }]
    }], function () { return [{ type: _shared_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { pid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCQvOMfmPku4OljNXBiDdHK23jLGRj5FhE",
        authDomain: "snippet-test-716cd.firebaseapp.com",
        databaseURL: "https://snippet-test-716cd.firebaseio.com",
        projectId: "snippet-test-716cd",
        storageBucket: "snippet-test-716cd.appspot.com",
        messagingSenderId: "553339153200",
        appId: "1:553339153200:web:075605584446c6bc11f6f5",
        measurementId: "G-758SLHKGPR"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!**********************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node ./src/main.ts ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mehulchadda/Desktop/Snippet CodeBase/snippet2/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node&sockPath=/sockjs-node");
module.exports = __webpack_require__(/*! /Users/mehulchadda/Desktop/Snippet CodeBase/snippet2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map