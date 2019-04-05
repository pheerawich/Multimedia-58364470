webpackJsonp([8],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CombasicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__freshy_freshy__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__junior_junior__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__senior_senior__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sophomore_sophomore__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CombasicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CombasicPage = /** @class */ (function () {
    function CombasicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CombasicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CombasicPage');
    };
    CombasicPage.prototype.navigateToFreshy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__freshy_freshy__["a" /* FreshyPage */]);
    };
    CombasicPage.prototype.navigateToJunior = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__junior_junior__["a" /* JuniorPage */]);
    };
    CombasicPage.prototype.navigateToSenior = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__senior_senior__["a" /* SeniorPage */]);
    };
    CombasicPage.prototype.navigateToSophomore = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__sophomore_sophomore__["a" /* SophomorePage */]);
    };
    CombasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-combasic',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\combasic\combasic.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Computer engineering basics.</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroud-combasic">\n  <div class="combasic-padding" (click)="navigateToFreshy()">\n    <div class="square">\n      <div class="view">\n        <img src="../../assets/imgs/people1.svg">\n      </div>\n    </div>\n  </div>\n  <span\n    style="font-size : 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    ปี 1 “Freshy”</span>\n  <br><br>\n  <div class="combasic-padding" (click)="navigateToSophomore()">\n    <div class="square">\n      <div class="view">\n        <img src="../../assets/imgs/people2.svg">\n      </div>\n    </div>\n  </div>\n  <span\n    style="font-size : 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    ปี 2 “Sophomore”</span>\n  <br><br>\n  <div class="combasic-padding" (click)="navigateToJunior()">\n    <div class="square">\n      <div class="view">\n        <img src="../../assets/imgs/people3.svg">\n      </div>\n    </div>\n  </div>\n  <span\n    style="font-size : 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    ปี 3 “Junior”</span>\n  <br><br>\n  <div class="combasic-padding" (click)="navigateToSenior()">\n    <div class="square">\n      <div class="view">\n        <img src="../../assets/imgs/people4.svg">\n      </div>\n    </div>\n  </div>\n  <span\n    style="font-size : 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    ปี 4 “Senior”</span>\n</ion-content>'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\combasic\combasic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CombasicPage);
    return CombasicPage;
}());

//# sourceMappingURL=combasic.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreshyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FreshyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FreshyPage = /** @class */ (function () {
    function FreshyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FreshyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FreshyPage');
    };
    FreshyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-freshy',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\freshy\freshy.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ปี 1 “Freshy”</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroud-freshy">\n  <br>\n  <div class="img">\n      <img src="../../assets/imgs/people1.svg" width="150" height="180">\n  </div>\n  <span\n    style="font-size : 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    ปี 1 “Freshy”</span><br>\n    <span style="font-size : 15px;">- ENG DRAWING </span><br>\n    <span style="font-size : 15px;">- CALCULUS I + II </span><br>\n    <span style="font-size : 15px;">- GEN CHEM </span><br>\n    <span style="font-size : 15px;">- GEN CHEM LAB </span><br>\n    <span style="font-size : 15px;">- GEN PHY I + II </span><br>\n    <span style="font-size : 15px;">- GEN PHY LAB I + II </span><br>\n    <span style="font-size : 15px;">- EXP ENG I + II </span><br>\n    <span style="font-size : 15px;">- EXPL ENG WORLD </span><br>\n    <span style="font-size : 15px;">- COMP PROG </span><br>\n  \n</ion-content>\n'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\freshy\freshy.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FreshyPage);
    return FreshyPage;
}());

//# sourceMappingURL=freshy.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JuniorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JuniorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JuniorPage = /** @class */ (function () {
    function JuniorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    JuniorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JuniorPage');
    };
    JuniorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-junior',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\junior\junior.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ปี 3 “Junior”</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroud-junior">\n    <br>\n    <div class="img">\n        <img src="../../assets/imgs/people3.svg" width="150" height="180">\n    </div>\n    <span\n    style="font-size : 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    ปี 3 “Junior”</span><br>\n      <span style="font-size : 15px;">- OS SYS PROG </span><br>\n      <span style="font-size : 15px;">- PROG LANG PRIN </span><br>\n      <span style="font-size : 15px;">- ALGORITHM DESIGN </span><br>\n      <span style="font-size : 15px;">- COMP SYS ARCH </span><br>\n      <span style="font-size : 15px;">- HW SYN LAB I </span><br>\n      <span style="font-size : 15px;">- DIS SYS ESSEN </span><br>\n      <span style="font-size : 15px;">- SYS ANALYSIS DSGN </span><br>\n      <span style="font-size : 15px;">- DB MGT SYS DESIGN </span><br>\n      <span style="font-size : 15px;">- COMP NETWORK I </span><br>\n      <span style="font-size : 15px;">- TECH WRIT ENG </span><br>\n\n</ion-content>\n'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\junior\junior.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], JuniorPage);
    return JuniorPage;
}());

//# sourceMappingURL=junior.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeniorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SeniorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeniorPage = /** @class */ (function () {
    function SeniorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SeniorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeniorPage');
    };
    SeniorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-senior',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\senior\senior.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ปี 4 “Senior”</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroud-senior">\n    <br>\n    <div class="img">\n        <img src="../../assets/imgs/people4.svg" width="150" height="180">\n    </div>\n    <span\n    style="font-size : 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    ปี 4 “Senior”</span><br>\n      <span style="font-size : 15px;">- SOFTWARE ENG </span><br>\n      <span style="font-size : 15px;">- FORM LANG/AUTO </span><br>\n      <span style="font-size : 15px;">- COMP ENG (PRE) PROJ </span><br>\n\n</ion-content>\n'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\senior\senior.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SeniorPage);
    return SeniorPage;
}());

//# sourceMappingURL=senior.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SophomorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SophomorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SophomorePage = /** @class */ (function () {
    function SophomorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SophomorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SophomorePage');
    };
    SophomorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sophomore',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\sophomore\sophomore.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>ปี 2 “Sophomore”</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroud-sophomore">\n    <br>\n    <div class="img">\n        <img src="../../assets/imgs/people2.svg" width="150" height="180">\n    </div>\n    <span\n    style="font-size : 20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    ปี 2 “Sophomore”</span><br>\n      <span style="font-size : 15px;">- DISCRETE STRUC </span><br>\n      <span style="font-size : 15px;">- PROG METH I </span><br>\n      <span style="font-size : 15px;">- COMP ENG ESS </span><br>\n      <span style="font-size : 15px;">- DIG COMP LOGIC </span><br>\n      <span style="font-size : 15px;">- DIG LOGIC LAB I </span><br>\n      <span style="font-size : 15px;">- COMP ELEC INTF </span><br>\n      <span style="font-size : 15px;">- COMP ENG MATH </span><br>\n      <span style="font-size : 15px;">- INTRO DATA STRUCT </span><br>\n      <span style="font-size : 15px;">- DIG DESIGN VER</span><br>\n      <span style="font-size : 15px;">- DIG DESIGN LAB I</span><br>\n      <span style="font-size : 15px;">- STAT PHYS SCIENCE</span><br>\n      <span style="font-size : 15px;">- COM PRES SKIL</span><br>\n\n</ion-content>\n'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\sophomore\sophomore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SophomorePage);
    return SophomorePage;
}());

//# sourceMappingURL=sophomore.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatcomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WhatcomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WhatcomPage = /** @class */ (function () {
    function WhatcomPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WhatcomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WhatcomPage');
    };
    WhatcomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-whatcom',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\whatcom\whatcom.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>What is computer engineering?</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroud-whatcom">\n  <br>\n  <iframe width="343" height="240" src="https://www.youtube.com/embed/PEpzr0fKyJs" frameborder="0"\n    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>\n  </iframe>\n  <br>\n  <span style="font-size : 10px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;วิศวกรรมคอมพิวเตอร์ (Computer\n    Engineering) คือศาสตร์ว่าด้วยการออกแบบ จัดสร้าง ลงมือปฏิบัติ และบำรุงรักษาซึ่งระบบคอมพิวเตอร์ หรือระบบใดๆที่\n    มีการควบคุมและประมวลผลผ่านคอมพิวเตอร์ โดยครอบคลุมทั้งส่วนที่เป็นฮาร์ดแวร์และซอฟต์แวร์ของระบบนั้น\n    และมุ่งศึกษาหลักการและทฤษฎีทางคณิตศาสตร์ วิทยาศาสตร์ วิทยาการคอมพิวเตอร์ และวิศวกรรม\n    ตลอดจนการนำหลักการดังกล่าวไปประยุกต์ใช้ เพื่อแก้ไขปัญหาทางเทคนิคเกี่ยวเนื่องกับการออกแบบฮาร์ดแวร์, ซอฟต์แวร์,\n    เครือข่าย และโพรเซส</span>\n  <br>\n  <span style="font-size : 8px;" class="text">นิยามโดย Association for Computing Machinery (ACM)</span><br>\n  <span style="font-size : 7px;" class="text">อ้างอิงจาก http://www.acm.org/education/education/curric_vols/CE-Final-Report.pdf หน้า 4</span>\n  <br><br>\n  <!-- <div>\n    <img src="../../assets/imgs/58364470_motion.svg" class="img">\n    <img src="../../assets/imgs/58364470_motion.svg" class="img1">\n  </div> -->\n\n</ion-content>'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\whatcom\whatcom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], WhatcomPage);
    return WhatcomPage;
}());

//# sourceMappingURL=whatcom.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.navigateToInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */]);
    };
    MenuPage.prototype.navigateToAbout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */]);
    };
    MenuPage.prototype.navigateToContact = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */]);
    };
    MenuPage.prototype.navigateToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\menu\menu.html"*/'<ion-content padding class="backgroud-manu">\n  <br><br>\n  <marquee direction="left" scrollamount="4">Welcome to the computer engineering education.</marquee>\n  <br><br>\n  <div class="wave"></div>\n  <div class="wave wave1"></div>\n  <div class="wave wave2"></div>\n\n  <ion-slides slidesPerView="2" spaceBetween="10px" style=" height : 30%">\n    <ion-slide>\n      <div class="menu-home-close" (click)="navigateToHome()">\n        <img src="../../assets/imgs/home.svg" class="menu-top">\n        <!-- <span>Education</span><br>\n        <span style="font-size : 28px;">Guidance</span> -->\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="menu-home-close" (click)="navigateToAbout()">\n        <img src="../../assets/imgs/about.svg" class="menu-top">\n        <!-- <span>Heat</span><br>\n        <span style="font-size : 30px;">10 ํ-19 ํ</span> -->\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <br><br><br><br>\n  <ion-slides slidesPerView="2" spaceBetween="10px" style=" height : 30%">\n    <ion-slide>\n      <div class="menu-home-close" (click)="navigateToContact()">\n        <img src="../../assets/imgs/camera.svg" class="menu-top">\n        <!-- <span>Education</span><br>\n          <span style="font-size : 28px;">Guidance</span> -->\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="menu-home-close" (click)="navigateToInfo()">\n        <img src="../../assets/imgs/book1.svg" class="menu-top">\n        <!-- <span>Heat</span><br>\n          <span style="font-size : 30px;">10 ํ-19 ํ</span> -->\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\menu\menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/combasic/combasic.module": [
		334,
		7
	],
	"../pages/freshy/freshy.module": [
		335,
		6
	],
	"../pages/info/info.module": [
		336,
		5
	],
	"../pages/junior/junior.module": [
		337,
		4
	],
	"../pages/menu/menu.module": [
		338,
		3
	],
	"../pages/senior/senior.module": [
		339,
		2
	],
	"../pages/sophomore/sophomore.module": [
		340,
		1
	],
	"../pages/whatcom/whatcom.module": [
		341,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 171;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleCloudVisionServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleCloudVisionServiceProvider = /** @class */ (function () {
    function GoogleCloudVisionServiceProvider(http) {
        this.http = http;
    }
    GoogleCloudVisionServiceProvider.prototype.getLabels = function (base64Image) {
        var body = {
            "requests": [
                {
                    "image": {
                        "content": base64Image
                    },
                    "features": [
                        {
                            "type": "TEXT_DETECTION"
                        }
                    ]
                }
            ]
        };
        return this.http.post('https://vision.googleapis.com/v1/images:annotate?key=' + __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* environment */].googleCloudVisionAPIKey, body);
    };
    GoogleCloudVisionServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], GoogleCloudVisionServiceProvider);
    return GoogleCloudVisionServiceProvider;
}());

//# sourceMappingURL=google-cloud-vision-service.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    firebaseConfig: {
        apiKey: "AIzaSyDZJkdnnZFE1GQ-T0QQ6gkVfq4FFVzZJY0",
        authDomain: "multimedia-58364470.firebaseapp.com",
        databaseURL: "https://multimedia-58364470.firebaseio.com",
        projectId: "multimedia-58364470",
        storageBucket: "multimedia-58364470.appspot.com",
        messagingSenderId: "1002347654656"
    },
    googleCloudVisionAPIKey: "AIzaSyAbXSFr6GjSm3pbbj0USKDkgt3f9hiYtdI"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\tabs\tabs.html"*/'<ion-tabs color=\'violet\'>\n\n  <ion-tab [root]="tab1Root" tabTitle="Menu" tabIcon="menu"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(252);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environment__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_google_cloud_vision_service_google_cloud_vision_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_info_info__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_menu_menu__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_combasic_combasic__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_whatcom_whatcom__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_freshy_freshy__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_junior_junior__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_senior_senior__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_sophomore_sophomore__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_combasic_combasic__["a" /* CombasicPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_whatcom_whatcom__["a" /* WhatcomPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_freshy_freshy__["a" /* FreshyPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_junior_junior__["a" /* JuniorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_senior_senior__["a" /* SeniorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sophomore_sophomore__["a" /* SophomorePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/combasic/combasic.module#CombasicPageModule', name: 'CombasicPage', segment: 'combasic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/freshy/freshy.module#FreshyPageModule', name: 'FreshyPage', segment: 'freshy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/junior/junior.module#JuniorPageModule', name: 'JuniorPage', segment: 'junior', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/senior/senior.module#SeniorPageModule', name: 'SeniorPage', segment: 'senior', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sophomore/sophomore.module#SophomorePageModule', name: 'SophomorePage', segment: 'sophomore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/whatcom/whatcom.module#WhatcomPageModule', name: 'WhatcomPage', segment: 'whatcom', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environment__["a" /* environment */].firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_combasic_combasic__["a" /* CombasicPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_whatcom_whatcom__["a" /* WhatcomPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_freshy_freshy__["a" /* FreshyPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_junior_junior__["a" /* JuniorPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_senior_senior__["a" /* SeniorPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_sophomore_sophomore__["a" /* SophomorePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_google_cloud_vision_service_google_cloud_vision_service__["a" /* GoogleCloudVisionServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__whatcom_whatcom__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__combasic_combasic__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.navigateToCombasic = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__combasic_combasic__["a" /* CombasicPage */]);
    };
    InfoPage.prototype.navigateToWhatcom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__whatcom_whatcom__["a" /* WhatcomPage */]);
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\info\info.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Computer Engineering</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding class="backgroud-info">\n<div class="info-padding" (click)="navigateToWhatcom()">\n  <div class="square">\n    <div class="paddingview">\n      <img src="../../assets/imgs/engineer.svg">\n    </div>\n  </div>\n</div><br>\n<span style="font-size : 20px;" class="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What is computer engineering?</span>\n<br><br>\n<div class="info-padding" (click)="navigateToCombasic()">\n  <div class="square">\n      <div class="paddingview">\n          <img src="../../assets/imgs/engineerbasic.svg">\n        </div>\n  </div>\n</div><br>\n<span style="font-size : 20px;" class="center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Computer engineering basics.</span>\n\n</ion-content>\n'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\about\about.html"*/'<ion-header >\n\n  <ion-navbar color = \'violet\'></ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="backgroud-about">\n\n  <!-- <div class="content-about"> -->\n\n  <h1>Mode Settings</h1><p></p>\n\n  <h5 style="color: #998ead">&nbsp;&nbsp;&nbsp;Modes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aromas</h5>\n\n  \n\n  <!-- Slides -->\n\n<ion-slides slidesPerView ="2" spaceBetween="10px" style =" height : 30%">\n\n    <ion-slide>\n\n      <div class="menu-about">\n\n        <table>\n\n          <tr>\n\n            <td>\n\n              <div class="menu-sun">\n\n              <div class="menu-miniview" >\n\n                <img src="../../assets/imgs/sun__3_.svg">\n\n              </div>\n\n            </div>\n\n              <span style="color: #ff3e62">Hert</span>\n\n            </td>\n\n            <td>\n\n              <div>\n\n                <img src="../../assets/imgs/snowflake.svg" class="menu-about-top"><br>\n\n                <span>Cool</span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              <div>\n\n                <img src="../../assets/imgs/wind.svg" class="menu-about-top1"><br>\n\n                <span>Wet</span>\n\n              </div>\n\n            </td>\n\n            <td>\n\n              <div>\n\n                <img src="../../assets/imgs/spiral.svg" class="menu-about-top"><br>\n\n                <span>Dry</span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n        </table>\n\n      </div>\n\n    </ion-slide>\n\n    <ion-slide>\n\n      <div class="menu-about">\n\n        <table>\n\n          <tr>\n\n            <td>\n\n              <div>\n\n                <img src="../../assets/imgs/water-r.svg" class="menu-about-top2"><br>\n\n                <span>Cherry</span>\n\n              </div>\n\n            </td>\n\n            <td>\n\n              <div>\n\n                <img src="../../assets/imgs/water-l.svg" class="menu-about-top2"><br>\n\n                <span style="color:#00ccff">Ice</span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td>\n\n              <div>\n\n                <img src="../../assets/imgs/water-p.svg" class="menu-about-top2"><br>\n\n                <span>Grepe</span>\n\n              </div>\n\n            </td>\n\n            <td>\n\n              <div>\n\n                <img src="../../assets/imgs/water-g.svg" class="menu-about-top2"><br>\n\n                <span>Lime</span>\n\n              </div>\n\n            </td>\n\n          </tr>\n\n        </table>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <br><br><br>\n\n  <h5 style="color: #998ead">Temperature</h5>\n\n  <br><br><br>\n\n  <div text-center>\n\n    <span style="font-size:80px">19</span>temp\n\n  </div>\n\n<!-- </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_google_cloud_vision_service_google_cloud_vision_service__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = /** @class */ (function () {
    function ContactPage(camera, vision, db, alert) {
        this.camera = camera;
        this.vision = vision;
        this.db = db;
        this.alert = alert;
        this.items = db.list('items');
    }
    ContactPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            targetHeight: 500,
            targetWidth: 500,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.PNG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.vision.getLabels(imageData)
                .subscribe(function (result) {
                _this.saveResults(imageData, result.json().responses);
            }, function (err) {
                _this.showAlert(err);
            });
        }, function (err) {
            _this.showAlert(err);
        });
    };
    ContactPage.prototype.saveResults = function (imageData, results) {
        var _this = this;
        this.items.push({ imageData: imageData, results: results })
            .then(function (_) { })
            .catch(function (err) { _this.showAlert(err); });
    };
    ContactPage.prototype.showAlert = function (message) {
        var alert = this.alert.create({
            title: 'Error',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\contact\contact.html"*/'<ion-header >\n\n  <ion-navbar></ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor="let item of items | async">\n\n    <img [src]="\'data:image/png;base64,\' + item.imageData" />\n\n    <ion-card-content>\n\n      <ion-list no-lines>\n\n        <ion-list-header>Labels</ion-list-header>\n\n        <ion-item *ngFor="let label of item.results[0].textAnnotations">{{label.description}}</ion-item>\n\n      </ion-list>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-fab bottom right>\n\n    <button ion-fab (click)="takePhoto()">\n\n      <ion-icon name="camera"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_google_cloud_vision_service_google_cloud_vision_service__["a" /* GoogleCloudVisionServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info_info__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.navigateToInfo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__info_info__["a" /* InfoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color=\'violet\'></ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="backgroud-home">\n\n  <div class="content-home">\n\n    <h1>Select Climate</h1>\n\n    <p></p>\n\n    <h1>Setting</h1><br>\n\n    <h5 style="color: #998ead">Favorite Presets</h5>\n\n    <div class="wave"></div>\n\n    <div class="wave wave1"></div>\n\n    <div class="wave wave2"></div>\n\n\n\n    <!-- Slides -->\n\n    <ion-slides slidesPerView="2.5" spaceBetween="10px" style=" height : 30%">\n\n      <ion-slide>\n\n        <div class="menu-home-active">\n\n          <img src="../../assets/imgs/sun__3_.svg" class="menu-top">\n\n          <span>Heat</span><br>\n\n          <span style="font-size : 30px;">10 ํ-19 ํ</span>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div class="menu-home-close">\n\n          <img src="../../assets/imgs/snowflake.svg" class="menu-top">\n\n          <span style="color: #00ccff">Cool</span><br>\n\n          <span style="font-size : 30px">3 ํ-7 ํ</span>\n\n        </div>\n\n      </ion-slide>\n\n      <ion-slide>\n\n        <div class="menu-home-close">\n\n          <img src="../../assets/imgs/wind.svg" class="menu-top">\n\n          <span style="color: #b381ff">Wet</span><br>\n\n          <span style="font-size:30px">7 ํ-10 ํ</span>\n\n        </div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <br><br>\n\n    <div text-center>\n\n      <span style="font-size:80px">19</span>temp\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Y2561-S2\Multimedia\project\Multimedia-58364470\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.js.map