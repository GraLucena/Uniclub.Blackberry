function Controller() {
    function inicioSesion() {
        var w = Alloy.createController("inicioSesion").getView();
        $.container.add(w);
    }
    function registroUsuario() {
        alert("REGISTRATE");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.container = Ti.UI.createWindow({
        backgroundColor: "#9C213F",
        id: "container"
    });
    $.__views.container && $.addTopLevelView($.__views.container);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.container.add($.__views.__alloyId0);
    $.__views.unicasaLogo = Ti.UI.createImageView({
        top: "20%",
        width: "250",
        height: "300",
        image: "/unicasaaLogo.png",
        id: "unicasaLogo"
    });
    $.__views.__alloyId0.add($.__views.unicasaLogo);
    $.__views.invitadoBtn = Ti.UI.createImageView({
        top: "80%",
        left: "20%",
        width: "100",
        height: "30",
        image: "/invitadoBtn.png",
        id: "invitadoBtn"
    });
    $.__views.__alloyId0.add($.__views.invitadoBtn);
    registroUsuario ? $.__views.invitadoBtn.addEventListener("click", registroUsuario) : __defers["$.__views.invitadoBtn!click!registroUsuario"] = true;
    $.__views.uniclubBtn = Ti.UI.createImageView({
        top: "80%",
        right: "20%",
        width: "100",
        height: "30",
        image: "/uniclubBtn.png",
        id: "uniclubBtn"
    });
    $.__views.__alloyId0.add($.__views.uniclubBtn);
    inicioSesion ? $.__views.uniclubBtn.addEventListener("click", inicioSesion) : __defers["$.__views.uniclubBtn!click!inicioSesion"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.container.open();
    __defers["$.__views.invitadoBtn!click!registroUsuario"] && $.__views.invitadoBtn.addEventListener("click", registroUsuario);
    __defers["$.__views.uniclubBtn!click!inicioSesion"] && $.__views.uniclubBtn.addEventListener("click", inicioSesion);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;