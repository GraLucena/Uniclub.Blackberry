function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "inicioScreen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.inicioScreen = Ti.UI.createView({
        backgroundColor: "blue",
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
    $.__views.promociones = Ti.UI.createView({
        id: "promociones"
    });
    $.__views.list.add($.__views.promociones);
    var __alloyId2 = [];
    $.__views.img1 = Ti.UI.createImageView({
        image: "/slideImg1.png",
        id: "img1"
    });
    __alloyId2.push($.__views.img1);
    $.__views.img2 = Ti.UI.createImageView({
        id: "img2",
        backgroundColor: "#246"
    });
    __alloyId2.push($.__views.img2);
    $.__views.img3 = Ti.UI.createImageView({
        id: "img3",
        backgroundColor: "#48b"
    });
    __alloyId2.push($.__views.img3);
    $.__views.scrollableView = Ti.UI.createScrollableView({
        views: __alloyId2,
        id: "scrollableView",
        pagingControlHeight: "10",
        pagingControlColor: "white",
        showPagingControl: "true"
    });
    $.__views.promociones.add($.__views.scrollableView);
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