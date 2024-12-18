"use strict";

function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, r) {
    if (e) {
        if ("string" == typeof e) return _arrayLikeToArray(e, r);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(e, r) : void 0
    }
}

function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
}

function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e)
}

function _arrayLikeToArray(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
    return a
}

function _classCallCheck(e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, r) {
    for (var t = 0; t < r.length; t++) {
        var a = r[t];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
    }
}

function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), e
}

const config = {
    src: "https://cdn.smartcis.cn/npm/guli-heo/others/open-peeps-sheet.png",
    rows: 15,
    cols: 7,
    walkSpeed: {min: 0.5, max: 1.5},
    crowdSize: 'auto',
    bounceHeight: 10,
    walkDuration: 10
};

const utils = {
    randomRange: (min, max) => min + Math.random() * (max - min),
    randomFromArray: arr => arr[Math.floor(Math.random() * arr.length)],
    removeFromArray: (arr, item) => arr.splice(arr.indexOf(item), 1)[0]
};

class Peep {
    constructor({image, rect}) {
        _classCallCheck(this, Peep), this.image = image, this.setRect(rect), this.reset()
    }

    reset() {
        this.x = 0, this.y = 0, this.anchorY = 0, this.scaleX = 1, this.walk = null
    }

    setRect(e) {
        this.rect = e, this.width = e[2], this.height = e[3], this.drawArgs = [this.image].concat(_toConsumableArray(e), [0, 0, this.width, this.height])
    }

    render(e) {
        e.save(), e.translate(this.x, this.y), e.scale(this.scaleX, 1), e.drawImage.apply(e, _toConsumableArray(this.drawArgs)), e.restore()
    }
}

var img = document.createElement("img");
img.onload = init, img.src = config.src;
var canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext("2d"),
    stage = {
        width: 0,
        height: 0
    },
    allPeeps = [],
    availablePeeps = [],
    crowd = [];

function init() {
    createPeeps(), resize(), render(), initEvents()
}

function createPeeps() {
    for (var e = config.rows, r = config.cols, t = e * r, a = img.naturalWidth / e, n = img.naturalHeight / r, o = 0; o < t; o++) allPeeps.push(new Peep({
        image: img,
        rect: [o % e * a, (o / e | 0) * n, a, n]
    }))
}

function resize() {
    stage.width = canvas.clientWidth, stage.height = canvas.clientHeight, canvas.width = stage.width * devicePixelRatio, canvas.height = stage.height * devicePixelRatio, crowd.forEach(function (e) {
        e.walk.kill()
    }), crowd.length = 0, availablePeeps.length = 0, availablePeeps.push.apply(availablePeeps, allPeeps), initCrowd()
}

function initCrowd() {
    for (; availablePeeps.length;) addPeepToCrowd().walk.progress(Math.random())
}

function addPeepToCrowd() {
    var e = utils.removeFromArray(availablePeeps, utils.randomFromArray(availablePeeps)),
        r = getRandomFromArray(walks)({
            peep: e,
            props: resetPeep({
                peep: e,
                stage: stage
            })
        }).eventCallback("onComplete", function () {
            removePeepFromCrowd(e), addPeepToCrowd()
        });
    return e.walk = r, crowd.push(e), crowd.sort(function (e, r) {
        return e.anchorY - r.anchorY
    }), e
}

function removePeepFromCrowd(e) {
    utils.removeFromArray(crowd, e), availablePeeps.push(e)
}

function render() {
    requestAnimationFrame(render);
    if(crowd.length) {
        canvas.width = canvas.width;
        ctx.save();
        ctx.scale(devicePixelRatio, devicePixelRatio);
        if(crowd.needsSort) {
            crowd.sort((a, b) => a.anchorY - b.anchorY);
            crowd.needsSort = false;
        }
        crowd.forEach(peep => peep.render(ctx));
        ctx.restore();
    }
}

function initEvents() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resize, 150);
    });
}