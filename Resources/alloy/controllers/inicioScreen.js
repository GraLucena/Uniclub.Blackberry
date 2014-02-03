function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inicioScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.inicioScreen = Ti.UI.createView({
        backgroundColor: "#9C213F",
        id: "inicioScreen"
    });
    $.__views.inicioScreen && $.addTopLevelView($.__views.inicioScreen);
    $.__views.menuBtn = Ti.UI.createImageView({
        left: "3%",
        top: "3%",
        image: "/menuIcon.png",
        id: "menuBtn"
    });
    $.__views.inicioScreen.add($.__views.menuBtn);
    $.__views.logoImg = Ti.UI.createImageView({
        top: "3%",
        right: "44%",
        image: "/unicasaIcon.png",
        id: "logoImg"
    });
    $.__views.inicioScreen.add($.__views.logoImg);
    $.__views.carritoBtn = Ti.UI.createImageView({
        top: "3%",
        right: "3%",
        image: "/carritoIcon.png",
        id: "carritoBtn"
    });
    $.__views.inicioScreen.add($.__views.carritoBtn);
    $.__views.list = Ti.UI.createTableViewRow({
        width: Ti.UI.FILL,
        id: "list"
    });
    var __alloyId1 = [];
    __alloyId1.push($.__views.list);
    $.__views.promociones2 = Ti.UI.createView({
        id: "promociones2"
    });
    $.__views.list.add($.__views.promociones2);
    $.__views.recetaImg = Ti.UI.createImageView({
        top: "13%",
        left: "2%",
        image: "/recetasImg.png",
        id: "recetaImg"
    });
    $.__views.promociones2.add($.__views.recetaImg);
    $.__views.carreraImg = Ti.UI.createImageView({
        top: "13%",
        right: "2%",
        image: "/carreraImg.png",
        id: "carreraImg"
    });
    $.__views.promociones2.add($.__views.carreraImg);
    $.__views.preciosUnicosList = Ti.UI.createTableView({
        data: __alloyId1,
        id: "preciosUnicosList"
    });
    $.__views.inicioScreen.add($.__views.preciosUnicosList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menuBtn.addEventListener("click", function() {});
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;