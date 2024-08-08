"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/lib/esm/iconsManifest.js
var IconsManifest;
var init_iconsManifest = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/lib/esm/iconsManifest.js"() {
    "use strict";
    IconsManifest = [
      {
        "id": "fa",
        "name": "Font Awesome",
        "projectUrl": "https://fontawesome.com/",
        "license": "CC BY 4.0 License",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
      },
      {
        "id": "io",
        "name": "Ionicons 4",
        "projectUrl": "https://ionicons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
      },
      {
        "id": "io5",
        "name": "Ionicons 5",
        "projectUrl": "https://ionicons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
      },
      {
        "id": "md",
        "name": "Material Design icons",
        "projectUrl": "http://google.github.io/material-design-icons/",
        "license": "Apache License Version 2.0",
        "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
      },
      {
        "id": "ti",
        "name": "Typicons",
        "projectUrl": "http://s-ings.com/typicons/",
        "license": "CC BY-SA 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
      },
      {
        "id": "go",
        "name": "Github Octicons icons",
        "projectUrl": "https://octicons.github.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
      },
      {
        "id": "fi",
        "name": "Feather",
        "projectUrl": "https://feathericons.com/",
        "license": "MIT",
        "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
      },
      {
        "id": "gi",
        "name": "Game Icons",
        "projectUrl": "https://game-icons.net/",
        "license": "CC BY 3.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
      },
      {
        "id": "wi",
        "name": "Weather Icons",
        "projectUrl": "https://erikflowers.github.io/weather-icons/",
        "license": "SIL OFL 1.1",
        "licenseUrl": "http://scripts.sil.org/OFL"
      },
      {
        "id": "di",
        "name": "Devicons",
        "projectUrl": "https://vorillaz.github.io/devicons/",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
      },
      {
        "id": "ai",
        "name": "Ant Design Icons",
        "projectUrl": "https://github.com/ant-design/ant-design-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
      },
      {
        "id": "bs",
        "name": "Bootstrap Icons",
        "projectUrl": "https://github.com/twbs/icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
      },
      {
        "id": "ri",
        "name": "Remix Icon",
        "projectUrl": "https://github.com/Remix-Design/RemixIcon",
        "license": "Apache License Version 2.0",
        "licenseUrl": "http://www.apache.org/licenses/"
      },
      {
        "id": "fc",
        "name": "Flat Color Icons",
        "projectUrl": "https://github.com/icons8/flat-color-icons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
      },
      {
        "id": "gr",
        "name": "Grommet-Icons",
        "projectUrl": "https://github.com/grommet/grommet-icons",
        "license": "Apache License Version 2.0",
        "licenseUrl": "http://www.apache.org/licenses/"
      },
      {
        "id": "hi",
        "name": "Heroicons",
        "projectUrl": "https://github.com/refactoringui/heroicons",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
      },
      {
        "id": "si",
        "name": "Simple Icons",
        "projectUrl": "https://simpleicons.org/",
        "license": "CC0 1.0 Universal",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
      },
      {
        "id": "im",
        "name": "IcoMoon Free",
        "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
        "license": "CC BY 4.0 License"
      },
      {
        "id": "bi",
        "name": "BoxIcons",
        "projectUrl": "https://github.com/atisawd/boxicons",
        "license": "CC BY 4.0 License"
      },
      {
        "id": "cg",
        "name": "css.gg",
        "projectUrl": "https://github.com/astrit/css.gg",
        "license": "MIT",
        "licenseUrl": "https://opensource.org/licenses/MIT"
      },
      {
        "id": "vsc",
        "name": "VS Code Icons",
        "projectUrl": "https://github.com/microsoft/vscode-codicons",
        "license": "CC BY 4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
      }
    ];
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/lib/esm/iconContext.js
var import_react, DefaultContext, IconContext;
var init_iconContext = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/lib/esm/iconContext.js"() {
    "use strict";
    import_react = __toESM(require("react"));
    DefaultContext = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
    };
    IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/lib/esm/iconBase.js
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
var import_react2, __assign, __rest;
var init_iconBase = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/lib/esm/iconBase.js"() {
    "use strict";
    import_react2 = __toESM(require("react"));
    init_iconContext();
    __assign = function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DefaultContext: () => DefaultContext,
  GenIcon: () => GenIcon,
  IconBase: () => IconBase,
  IconContext: () => IconContext,
  IconsManifest: () => IconsManifest
});
var init_esm = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/lib/esm/index.js"() {
    "use strict";
    init_iconsManifest();
    init_iconBase();
    init_iconContext();
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bs/BsGearFill.js
var require_BsGearFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bs/BsGearFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsGearFill = function BsGearFill2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 100-5.86 2.929 2.929 0 000 5.858z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/io/IoMdArrowDropdown.js
var require_IoMdArrowDropdown = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/io/IoMdArrowDropdown.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.IoMdArrowDropdown = function IoMdArrowDropdown2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 192l128 128 128-128z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaCaretDown.js
var require_FaCaretDown = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaCaretDown.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaCaretDown = function FaCaretDown2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bs/BsSearch.js
var require_BsSearch = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bs/BsSearch.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsSearch = function BsSearch2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z", "clipRule": "evenodd" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bi/BiCopy.js
var require_BiCopy = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bi/BiCopy.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiCopy = function BiCopy2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bi/BiHide.js
var require_BiHide = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bi/BiHide.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiHide = function BiHide2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5zM16.972 15.558l-2.28-2.28C14.882 12.888 15 12.459 15 12c0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501C9.796 7.193 10.814 7 12 7c5.351 0 7.424 3.846 7.926 5C19.624 12.692 18.76 14.342 16.972 15.558z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bi/BiShow.js
var require_BiShow = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/bi/BiShow.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiShow = function BiShow2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z" } }, { "tag": "path", "attr": { "d": "M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaCopy.js
var require_FaCopy = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaCopy.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaCopy = function FaCopy2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaGrin.js
var require_FaGrin = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaGrin.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaGrin = function FaGrin2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 496 512" }, "child": [{ "tag": "path", "attr": { "d": "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm80 256c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.3-21.6 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.3-3.7 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaSmile.js
var require_FaSmile = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaSmile.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaSmile = function FaSmile2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 496 512" }, "child": [{ "tag": "path", "attr": { "d": "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaFrown.js
var require_FaFrown = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaFrown.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaFrown = function FaFrown2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 496 512" }, "child": [{ "tag": "path", "attr": { "d": "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm170.2 218.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320s86.3 19.6 114.7 53.8c13.6 16.2-11 36.7-24.5 20.4z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaMeh.js
var require_FaMeh = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fa/FaMeh.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaMeh = function FaMeh2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 496 512" }, "child": [{ "tag": "path", "attr": { "d": "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm176 192H152c-21.2 0-21.2-32 0-32h192c21.2 0 21.2 32 0 32zm-16-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fi/FiRefreshCcw.js
var require_FiRefreshCcw = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@18.3.1/node_modules/@react-icons/all-files/fi/FiRefreshCcw.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FiRefreshCcw = function FiRefreshCcw2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "1 4 1 10 7 10" } }, { "tag": "polyline", "attr": { "points": "23 20 23 14 17 14" } }, { "tag": "path", "attr": { "d": "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" } }] })(props);
    };
  }
});

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  ColumnType: () => ColumnType,
  InputModalContextProvider: () => InputModalContextProvider,
  InputPassword: () => InputPassword,
  Loader: () => Loader,
  NavBar: () => NavBar,
  NavButton: () => NavButton,
  PasswordGenerator: () => PasswordGenerator,
  PasswordType: () => PasswordType,
  QrCodeElement: () => QrCodeElement,
  SearchBar: () => SearchBar,
  SelectLanguage: () => SelectLanguage,
  SortType: () => SortType,
  Table: () => Table,
  TextIcon: () => TextIcon,
  WindowScreen: () => WindowScreen,
  useInputModalContext: () => useInputModalContext,
  useModalShow: () => useModalShow
});
module.exports = __toCommonJS(src_exports);

// src/components/Table/index.tsx
var import_react8 = require("react");

// src/components/Table/Header.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Header = ({ items }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { className: "[&>tr]:first:vui-rounded-large vui-sticky vui-top-5 z-20 [&>tr]:first:vui-shadow-small", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: items }) });
};

// src/components/Table/Row.tsx
var import_react7 = require("react");
var import_BsGearFill = __toESM(require_BsGearFill());

// src/components/Table/RowItemButton.tsx
var import_react3 = require("@nextui-org/react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var RowItemButton = ({ title, onClick, disabled = false }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react3.Button,
    {
      color: "primary",
      disabled,
      onClick: (e) => {
        e.stopPropagation();
        if (!disabled)
          onClick();
      },
      children: title
    }
  );
};

// src/components/Table/RowItemEditText.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var RowItemEditText = ({ editMode, value, onChange, onClick, maxLines = 1, inputType = "text" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: maxLines > 1 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "textarea",
    {
      rows: maxLines,
      className: `vui-w-full vui-bg-transparent vui-rounded-lg vui-p-1 vui-border vui-outline-none ${editMode ? "" : "vui-border-transparent"}`,
      value,
      onChange: (e) => onChange(e.target.value),
      onClick: () => onClick()
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "input",
    {
      type: inputType,
      className: `vui-w-full vui-bg-transparent vui-rounded-lg vui-p-1 vui-border vui-outline-none vui-text-ellipsis vui-truncate ... ${editMode ? "" : "vui-border-transparent"}`,
      value,
      onChange: (e) => onChange(e.target.value),
      onClick: () => onClick()
    }
  ) });
};

// src/components/Table/RowItemSpan.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var RowItemSpan = ({ value }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: value });
};

// src/components/Table/RowItemSwitch.tsx
var import_react4 = require("@nextui-org/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var RowItemSwitch = ({ check, name, onChange, disabled }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react4.Switch,
    {
      name,
      defaultSelected: check,
      onValueChange: (checked) => typeof onChange === "function" && onChange(checked),
      isDisabled: disabled,
      classNames: {
        wrapper: "group-data-[selected=true]:bg-modern-blue"
      }
    }
  );
};

// src/components/Table/RowItemDropdown.tsx
var import_react5 = require("@nextui-org/react");
var import_IoMdArrowDropdown = __toESM(require_IoMdArrowDropdown());
var import_jsx_runtime6 = require("react/jsx-runtime");
var RowItemDropdown = ({
  value,
  items,
  onChange
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react5.Dropdown, { className: "vui-bg-light dark:vui-bg-dark", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.DropdownTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.Button, { endContent: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_IoMdArrowDropdown.IoMdArrowDropdown, {}), variant: "bordered", children: value }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.DropdownMenu, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react5.DropdownItem, { onPress: () => onChange(item), children: item })) })
  ] });
};

// src/components/Table/RowItem.tsx
var import_react6 = require("@nextui-org/react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var RowItem = ({
  type,
  value,
  title,
  editMode,
  items,
  onChange,
  onClick,
  className,
  children,
  disabled = false,
  maxLines,
  inputType = "text",
  id,
  testId
}) => {
  const getChild = () => {
    switch (type) {
      case 2 /* BUTTON */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RowItemButton, { onClick: () => typeof onClick === "function" && onClick(), title: title != null ? title : "", disabled });
      case 4 /* CHECKBOX */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react6.Checkbox, { onValueChange: (value2) => typeof onChange === "function" && onChange(value2), isSelected: value, isDisabled: disabled });
      case 1 /* EDIT_TEXT */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          RowItemEditText,
          {
            inputType,
            maxLines,
            onClick: () => typeof onClick === "function" && onClick(),
            editMode: editMode != null ? editMode : false,
            onChange: (value2) => typeof onChange === "function" && onChange(value2),
            value
          }
        );
      case 3 /* CUSTOM */:
        return children;
      case 5 /* SWITCH */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RowItemSwitch, { check: value, disabled, onChange: (checked) => onChange && onChange(checked) });
      case 6 /* TEXT */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RowItemSpan, { value: value != null ? value : title });
      case 7 /* DROPDOWN */:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RowItemDropdown, { value, items: items != null ? items : [], onChange: (value2) => onChange && onChange(value2) });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, {});
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "td",
    {
      className: ` vui-px-2 first:vui-rounded-l-lg rtl:first:vui-rounded-r-lg rtl:first:vui-rounded-l-[unset] last:vui-rounded-r-lg rtl:last:vui-rounded-l-lg rtl:last:vui-rounded-r-[unset] ${className}`,
      id,
      "data-test": testId,
      children: getChild()
    }
  );
};

// src/components/Table/Row.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Row = ({
  children,
  rowItems,
  inactiveState = false,
  selectable = false,
  tableSelectable = false,
  selected = false,
  configurable = false,
  onConfigureClicked,
  onSelectedClicked,
  clickable,
  onRowClicked,
  id,
  warning = false,
  danger = false,
  blur = false,
  dataTest,
  rowIndex,
  showLines
}) => {
  const [isSelected, setIsSelected] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    setIsSelected(selected && selectable);
  }, [selected, selectable]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "tr",
    {
      "data-test": dataTest,
      id,
      className: `${rowIndex && rowIndex % 2 !== 0 && showLines && "vui-brightness-95 dark:vui-brightness-110"} ${isSelected ? "vui-bg-primary/20 vui-text-primary dark:vui-bg-secondary/20 dark:vui-text-secondary" : `${danger ? "vui-bg-danger" : warning ? "vui-bg-warning" : `vui-bg-light-secondary dark:vui-bg-dark-secondary`}`} ${inactiveState && "vui-text-gray-500"}
      ${blur && "vui-blur-sm"} hover:vui-blur-0
       hover:vui-brightness-75 dark:hover:vui-brightness-125 vui-h-12 ${clickable && "vui-cursor-pointer"}`,
      onClick: () => {
        typeof onRowClicked === "function" && onRowClicked();
      },
      children: [
        rowItems,
        children,
        tableSelectable && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          RowItem,
          {
            disabled: !selectable,
            testId: `${dataTest}-select`,
            type: 4 /* CHECKBOX */,
            onChange: (value) => {
              if (!selectable)
                return;
              typeof onSelectedClicked === "function" && onSelectedClicked(!isSelected);
              setIsSelected(!isSelected);
            },
            value: isSelected
          }
        ),
        configurable && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          RowItem,
          {
            type: 3 /* CUSTOM */,
            id: `${id}-config`,
            testId: `${dataTest}-configure`,
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              import_BsGearFill.BsGearFill,
              {
                className: "vui-w-6 vui-h-6 vui-cursor-pointer",
                onClick: (e) => {
                  e.stopPropagation();
                  typeof onConfigureClicked === "function" && onConfigureClicked();
                }
              }
            )
          }
        )
      ]
    }
  );
};

// src/components/Table/HeaderItem.tsx
var import_FaCaretDown = __toESM(require_FaCaretDown());
var import_jsx_runtime9 = require("react/jsx-runtime");
var HeaderItem = ({
  title,
  children,
  sortColumn = false,
  sortActive,
  sortType = 0 /* ASCENDING */,
  onClick,
  className,
  testId
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "th",
    {
      className: `vui-bg-light dark:vui-bg-dark first:vui-rounded-l-lg rtl:first:vui-rounded-r-lg rtl:first:vui-rounded-l-[unset] last:vui-rounded-r-lg rtl:last:vui-rounded-l-lg rtl:last:vui-rounded-r-[unset] vui-py-2 vui-px-2 ${sortColumn && "vui-cursor-pointer"} ${className}`,
      onClick: () => sortColumn && typeof onClick === "function" && onClick(),
      "data-test": testId,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "vui-flex vui-flex-row vui-gap-2", children: [
        title,
        children,
        sortColumn && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_FaCaretDown.FaCaretDown,
          {
            className: `vui-transition-all vui-transform ${sortActive ? "vui-visible" : "vui-invisible"} ${sortType === 0 /* ASCENDING */ && "vui-rotate-180"}`
          }
        )
      ] })
    }
  );
};

// src/components/Table/index.tsx
var import_react9 = require("@nextui-org/react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var SortType = /* @__PURE__ */ ((SortType2) => {
  SortType2[SortType2["ASCENDING"] = 0] = "ASCENDING";
  SortType2[SortType2["DESCENDING"] = 1] = "DESCENDING";
  return SortType2;
})(SortType || {});
var ColumnType = /* @__PURE__ */ ((ColumnType2) => {
  ColumnType2[ColumnType2["STRING"] = 0] = "STRING";
  ColumnType2[ColumnType2["EDIT_TEXT"] = 1] = "EDIT_TEXT";
  ColumnType2[ColumnType2["BUTTON"] = 2] = "BUTTON";
  ColumnType2[ColumnType2["CUSTOM"] = 3] = "CUSTOM";
  ColumnType2[ColumnType2["CHECKBOX"] = 4] = "CHECKBOX";
  ColumnType2[ColumnType2["SWITCH"] = 5] = "SWITCH";
  ColumnType2[ColumnType2["TEXT"] = 6] = "TEXT";
  ColumnType2[ColumnType2["DROPDOWN"] = 7] = "DROPDOWN";
  return ColumnType2;
})(ColumnType || {});
var Table = ({
  cols,
  rows,
  setSelectedRows,
  refresh,
  configureButton = false,
  selectable = true,
  dataTest,
  blur = false,
  unselectAll,
  emptyTableContent,
  showLines
}) => {
  var _a;
  const [selectedAll, setSelectedAll] = (0, import_react8.useState)(false);
  const [editMode, setEditMode] = (0, import_react8.useState)(false);
  const [rowInEditMode, setRowInEditMode] = (0, import_react8.useState)();
  const [currentSortIndex, setCurrentSortIndex] = (0, import_react8.useState)(cols.indexOf((_a = cols.find((col) => col.sort)) != null ? _a : cols[0]));
  const [currentSortType, setCurrentSortType] = (0, import_react8.useState)(0 /* ASCENDING */);
  const [selectedIds, setSelectedIds] = (0, import_react8.useState)([]);
  const [values, setValues] = (0, import_react8.useState)([]);
  const ref = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  (0, import_react8.useEffect)(() => {
    selectedAll ? setSelectedIds(rows.filter((row) => row.selectable).map((row) => row.id)) : setSelectedIds([]);
  }, [selectedAll]);
  (0, import_react8.useEffect)(() => {
    if (unselectAll) {
      setSelectedAll(false);
      setSelectedIds([]);
    }
  }, [unselectAll]);
  (0, import_react8.useEffect)(() => {
    if (rowInEditMode)
      setEditMode(true);
    updateValues();
  }, [rowInEditMode]);
  (0, import_react8.useEffect)(() => {
    typeof setSelectedRows === "function" && setSelectedRows(selectedIds);
  }, [selectedIds]);
  (0, import_react8.useEffect)(() => {
    if (!editMode) {
      changeRowInEditMode(null);
    }
  }, [editMode]);
  const updateValues = () => {
    var _a2;
    let values2 = [];
    (_a2 = rows.find((row) => row.id === rowInEditMode)) == null ? void 0 : _a2.items.forEach(
      (rowItem) => {
        var _a3;
        return cols[rowItem.colIndex].type === 1 /* EDIT_TEXT */ && values2.push({
          jsonFieldName: (_a3 = cols[rowItem.colIndex].jsonFieldName) != null ? _a3 : "",
          value: rowItem.value
        });
      }
    );
    setValues(values2);
  };
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setEditMode(false);
    }
  };
  const changeSort = (index) => {
    if (currentSortIndex === index)
      toggleSortType();
    else {
      setCurrentSortIndex(index);
      setCurrentSortType(0 /* ASCENDING */);
    }
  };
  const toggleSortType = () => {
    setCurrentSortType(currentSortType === 0 /* ASCENDING */ ? 1 /* DESCENDING */ : 0 /* ASCENDING */);
  };
  const changeRowInEditMode = (rowId) => __async(void 0, null, function* () {
    const currentRow = rows.find((row) => row.id === rowInEditMode);
    if ((currentRow == null ? void 0 : currentRow.id) === rowId)
      return;
    const update = values.reduce((res, element) => {
      const col = cols.find((col2) => col2.jsonFieldName === element.jsonFieldName);
      (col == null ? void 0 : col.inputType) === "date" && element.value ? res[element.jsonFieldName] = new Date(element.value).toISOString() : res[element.jsonFieldName] = element.value;
      return res;
    }, {});
    if (Object.keys(update).length !== 0 && typeof (currentRow == null ? void 0 : currentRow.onUpdate) === "function" && needUpdate()) {
      yield currentRow.onUpdate(update);
      typeof refresh === "function" && refresh();
    }
    setValues([]);
    setRowInEditMode(rowId);
  });
  const needUpdate = () => {
    const row = rows.find((row2) => row2.id === rowInEditMode);
    let res = false;
    row == null ? void 0 : row.items.forEach((rowItem) => {
      const newValue = values.find((value) => value.jsonFieldName === cols[rowItem.colIndex].jsonFieldName);
      if (newValue && rowItem.value !== newValue.value)
        res = true;
    });
    return res;
  };
  const getHeaderItems = () => {
    const headerItems = [];
    cols.forEach((col, i) => {
      headerItems.push(
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          HeaderItem,
          {
            title: col.name,
            onClick: () => changeSort(i),
            sortActive: currentSortIndex === i,
            sortColumn: col.sort,
            sortType: currentSortType,
            testId: `col-${i}`
          }
        )
      );
    });
    selectable && headerItems.push(
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(HeaderItem, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_react9.Checkbox,
        {
          "data-test": `${dataTest}-select-all`,
          onValueChange: (value) => {
            setSelectedAll(value);
          },
          isSelected: selectedAll
        }
      ) })
    );
    if (configureButton)
      headerItems.push(/* @__PURE__ */ (0, import_jsx_runtime10.jsx)(HeaderItem, {}));
    return headerItems;
  };
  const getRowItems = (row) => {
    const rowItems = [];
    row.items.forEach((rowItem) => {
      rowItems.push(getRowItem(row.id, rowItem));
    });
    return rowItems;
  };
  const getRowItem = (rowId, rowItem) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    switch (cols[rowItem.colIndex].type) {
      case 2 /* BUTTON */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          RowItem,
          {
            testId: `row-${rows.indexOf((_a2 = rows.find((row) => row.id === rowId)) != null ? _a2 : rows[0])}-item-${rowItem.colIndex}`,
            id: rowItem.id,
            disabled: rowItem.disabled,
            type: 2 /* BUTTON */,
            onClick: () => typeof rowItem.onClick === "function" && rowItem.onClick(),
            title: rowItem.title
          },
          `${rowId}-${rowItem.colIndex}`
        );
      case 3 /* CUSTOM */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          RowItem,
          {
            testId: `row-${rows.indexOf((_b = rows.find((row) => row.id === rowId)) != null ? _b : rows[0])}-item-${rowItem.colIndex}`,
            type: 3 /* CUSTOM */,
            id: rowItem.id,
            children: rowItem.children
          },
          `${rowId}-${rowItem.colIndex}`
        );
      case 1 /* EDIT_TEXT */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          RowItem,
          {
            testId: `row-${rows.indexOf((_c = rows.find((row) => row.id === rowId)) != null ? _c : rows[0])}-item-${rowItem.colIndex}`,
            id: rowItem.id,
            inputType: cols[rowItem.colIndex].inputType,
            maxLines: cols[rowItem.colIndex].maxLines,
            type: 1 /* EDIT_TEXT */,
            editMode: rowId === rowInEditMode,
            onClick: () => typeof rowItem.onClick === "function" && rowItem.onClick(),
            onChange: (newValue) => setValues(
              values.map(
                (value) => cols[rowItem.colIndex].jsonFieldName === value.jsonFieldName ? { jsonFieldName: value.jsonFieldName, value: newValue } : value
              )
            ),
            value: (_e = (_d = values == null ? void 0 : values.find((value) => value.jsonFieldName === cols[rowItem.colIndex].jsonFieldName && rowInEditMode === rowId)) == null ? void 0 : _d.value) != null ? _e : rowItem.value
          },
          `${rowId}-${rowItem.colIndex}`
        );
      case 4 /* CHECKBOX */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          RowItem,
          {
            testId: `row-${rows.indexOf((_f = rows.find((row) => row.id === rowId)) != null ? _f : rows[0])}-item-${rowItem.colIndex}`,
            id: rowItem.id,
            type: 4 /* CHECKBOX */,
            value: rowItem.value,
            onChange: (value) => typeof rowItem.onChange === "function" && rowItem.onChange(value)
          },
          `${rowId}-${rowItem.colIndex}`
        );
      case 5 /* SWITCH */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          RowItem,
          {
            testId: `row-${rows.indexOf((_g = rows.find((row) => row.id === rowId)) != null ? _g : rows[0])}-item-${rowItem.colIndex}`,
            id: rowItem.id,
            type: 5 /* SWITCH */,
            value: rowItem.value,
            onChange: (value) => typeof rowItem.onChange === "function" && rowItem.onChange(value),
            disabled: rowItem.disabled
          },
          `${rowId}-${rowItem.colIndex}`
        );
      case 7 /* DROPDOWN */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          RowItem,
          {
            testId: `row-${rows.indexOf((_h = rows.find((row) => row.id === rowId)) != null ? _h : rows[0])}-item-${rowItem.colIndex}`,
            id: rowItem.id,
            value: rowItem.value,
            type: 7 /* DROPDOWN */,
            items: rowItem.items,
            onChange: (value) => typeof rowItem.onChange === "function" && rowItem.onChange(value)
          },
          `${rowId}-${rowItem.colIndex}`
        );
      case 6 /* TEXT */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          RowItem,
          {
            testId: `row-${rows.indexOf((_i = rows.find((row) => row.id === rowId)) != null ? _i : rows[0])}-item-${rowItem.colIndex}`,
            type: 6 /* TEXT */,
            value: rowItem.value,
            id: rowItem.id
          },
          `${rowId}-${rowItem.colIndex}`
        );
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { "data-test": `row-${rows.indexOf((_j = rows.find((row) => row.id === rowId)) != null ? _j : rows[0])}-item-${rowItem.colIndex}` }, `${rowId}-${rowItem.colIndex}`);
    }
  };
  const applySort = (rowA, rowB) => {
    let valueA = rowA.items[currentSortIndex].value;
    let valueB = rowB.items[currentSortIndex].value;
    if (typeof valueA === "string" && typeof valueB === "string") {
      if (!valueA)
        valueA = "";
      if (!valueB)
        valueB = "";
      return stringSort(valueA, valueB);
    }
    if (typeof valueA === "boolean" && typeof valueB === "boolean") {
      return booleanSort(valueA, valueB);
    }
    if (typeof valueA === "number" && typeof valueB === "number") {
      return numberSort(valueA, valueB);
    }
    return 0;
  };
  const stringSort = (stringA, stringB) => {
    if (!stringA || stringA.trim() === "") {
      return currentSortType === 1 /* DESCENDING */ ? 1 : -1;
    }
    if (!stringB || stringB.trim() === "") {
      return currentSortType === 1 /* DESCENDING */ ? -1 : 1;
    }
    if (stringA === stringB)
      return 0;
    if (currentSortType === 1 /* DESCENDING */) {
      return stringB.toLowerCase() < stringA.toLowerCase() ? -1 : 1;
    } else {
      return stringB.toLowerCase() < stringA.toLowerCase() ? 1 : -1;
    }
  };
  const booleanSort = (booleanA, booleanB) => {
    if (currentSortType === 1 /* DESCENDING */)
      return Number(booleanA) - Number(booleanB);
    else
      return Number(booleanB) - Number(booleanA);
  };
  const numberSort = (numberA, numberB) => {
    if (currentSortType === 0 /* ASCENDING */)
      return numberA - numberB;
    else
      return numberB - numberA;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "w-max vui-min-w-full vui-flex vui-flex-col vui-relative vui-min-h-[400px] bg-red-400 vui-bg-light-secondary dark:vui-bg-dark-secondary vui-rounded-large vui-shadow-small", children: [
    rows.length === 0 && emptyTableContent && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "vui-absolute vui-top-0 vui-opacity-50 vui-bottom-0 vui-left-0 vui-right-0 vui-flex vui-items-center vui-justify-center vui-text-center", children: emptyTableContent }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "table",
      {
        className: "vui-table-auto vui-border-separate vui-border-spacing-y-1 vui-bg-light-secondary dark:vui-bg-dark-secondary  vui-p-4 vui-rounded-large ",
        ref,
        "data-test": dataTest,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Header, { items: getHeaderItems() }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("tbody", { "data-test": `${dataTest}-body`, children: rows.sort(applySort).map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Row,
            {
              rowIndex: index,
              showLines,
              blur,
              dataTest: `${dataTest}-row-${index}`,
              id: row.rowId,
              clickable: row.clickable && typeof row.onClick === "function",
              warning: row.warning,
              danger: row.danger,
              inactiveState: row.inactive,
              onSelectedClicked: (selected) => {
                if (selected) {
                  setSelectedIds([...selectedIds, row.id]);
                } else {
                  setSelectedIds(selectedIds.filter((selectedId) => selectedId !== row.id));
                }
              },
              onRowClicked: () => row.clickable && typeof row.onClick === "function" ? row.onClick() : changeRowInEditMode(row.id),
              selectable: row.selectable,
              tableSelectable: selectable,
              selected: selectedAll,
              rowItems: getRowItems(row),
              configurable: configureButton,
              onConfigureClicked: () => typeof row.onConfigureClicked === "function" && row.onConfigureClicked()
            },
            row.id
          )) })
        ]
      }
    )
  ] });
};

// src/components/TextIcon/index.tsx
var import_invert_color = __toESM(require("invert-color"));
var import_jsx_runtime11 = require("react/jsx-runtime");
var TextIcon = ({ text = "Te", backgroundColor = "#FFFFFF", className = "" }) => {
  if (!text) {
    text = "0x";
  }
  const fill = (0, import_invert_color.default)(backgroundColor, true);
  const padding = "0.3rem";
  const t = text.split(" ");
  let displayText = "";
  if (t.length > 1)
    displayText = t[0][0] + t[1][0];
  else
    displayText = text.slice(0, 2);
  const textSize = 80;
  const textWidth = displayText.length * textSize * 0.5;
  const textX = 64 - textWidth * 0.5;
  const textY = 90;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { style: { backgroundColor, fill, padding }, className, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("svg", { viewBox: "0 0 128 128", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("text", { fontSize: textSize, fontFamily: "monospace", x: textX, y: textY, children: displayText.slice(0, 2).toLocaleUpperCase() }) }) });
};

// src/components/QrCodeElement/index.tsx
var import_react10 = require("react");
var import_qrcode = __toESM(require("qrcode"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var QrCodeElement = ({ text, className }) => {
  const canvasRef = (0, import_react10.useRef)(null);
  (0, import_react10.useEffect)(() => {
    const canvas = canvasRef.current;
    import_qrcode.default.toCanvas(canvas, text);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("canvas", { ref: canvasRef, className: `vui-rounded-lg vui-shadow-lg ${className}` });
};

// src/components/WindowScreen/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var WindowScreen = ({ children, icon, title = "SmartLink", size = "lg" }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "vui-flex vui-flex-col vui-w-full vui-p-2 vui-h-screen vui-justify-center vui-items-center vui-bg-light vui-bg-opacity-50 vui-backdrop-blur", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
  "div",
  {
    className: `vui-max-h-full  vui-shadow-lg vui-w-full vui-shadow-black/40 vui-rounded-t-xl vui-rounded-b vui-overflow-clip ${size === "sm" && "vui-max-w-xl"} ${size === "md" && "vui-max-w-3xl"} ${size === "lg" && "vui-max-w-5xl"} ${size === "xl" && "vui-max-w-7xl"}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "vui-flex vui-flex-row vui-justify-between vui-text-xl vui-p-3 vui-w-full vui-bg-secondary dark:vui-bg-primary", children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { className: "vui-h-8 vui-rounded", src: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "vui-w-full vui-text-center", children: title }),
        icon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("img", { className: "vui-h-8 vui-opacity-0", src: icon })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "vui-overflow-auto vui-max-h-full vui-flex vui-flex-col vui-gap-5 vui-justify-center vui-items-center vui-shadow-inner vui-border-2 dark:vui-border-dark-secondary vui-w-full vui-bg-light dark:vui-bg-dark", children })
    ]
  }
) });

// src/components/NavButton/index.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var NavButton = ({ title, current, onClick }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    "div",
    {
      onClick: () => onClick && onClick(),
      className: `vui-flex vui-py-2 vui-pl-3 vui-pr-4 ${current ? "vui-text-primary dark:vui-text-secondary vui-font-bold" : "vui-text-black dark:vui-text-white"} vui-cursor-pointer hover:vui-text-primary hover:dark:vui-text-secondary`,
      children: title
    }
  );
};

// src/components/NavBarPC/index.tsx
var import_react11 = __toESM(require("react"));
var import_jsx_runtime15 = require("react/jsx-runtime");
var NavBar = ({ children, startContent, endContent }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("nav", { className: "vui-z-30 vui-shadow vui-bg-light-secondary dark:vui-bg-dark-secondary vui-w-full vui-flex vui-flex-row vui-gap-4 vui-items-center vui-px-4 vui-py-2", children: [
    startContent,
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "vui-flex vui-flex-row vui-items-center vui-grow", children: import_react11.default.Children.map(children, (child, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: child }, index);
    }) }),
    endContent
  ] });
};

// src/components/SearchBar/index.tsx
var import_BsSearch = __toESM(require_BsSearch());
var import_jsx_runtime16 = require("react/jsx-runtime");
var SearchBar = ({
  onKeyUp,
  onClick,
  className,
  onChange,
  value
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    "div",
    {
      className: `vui-relative vui-flex vui-flex-row vui-gap-2 vui-items-center vui-shadow-lg ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_BsSearch.BsSearch, { className: "vui-absolute vui-ml-5 vui-z-20 vui-w-6 vui-h-6" }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "input",
          {
            "data-test": "search",
            value,
            autoComplete: "off",
            accessKey: "shift+e",
            className: "vui-w-full vui-rounded-xl md:vui-min-w-min vui-m-0 vui-py-2 vui-pl-12 vui-bg-transparent focus-visible:vui-outline-none focus-visible:vui-opacity-100 vui-text-xl",
            onKeyUp,
            onChange: (e) => {
              if (typeof onChange === "function")
                onChange(e.target.value);
            },
            onClick
          }
        )
      ]
    }
  );
};

// src/components/InputPassword/index.tsx
var import_react12 = require("@nextui-org/react");
var import_react13 = require("react");
var import_BiCopy = __toESM(require_BiCopy());
var import_BiHide = __toESM(require_BiHide());
var import_BiShow = __toESM(require_BiShow());
var import_jsx_runtime17 = require("react/jsx-runtime");
var InputPassword = ({
  label,
  description,
  onChange,
  valid = true,
  placeholder,
  value,
  disabled,
  copyToClipboard = false,
  color,
  testId
}) => {
  const [show, setShow] = (0, import_react13.useState)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    import_react12.Input,
    {
      "data-test": testId,
      label,
      value,
      placeholder,
      onValueChange: (value2) => onChange && onChange(value2),
      classNames: {
        inputWrapper: color,
        label: "vui-text-lg vui-font-bold"
      },
      description,
      isInvalid: !valid,
      isDisabled: disabled,
      endContent: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "vui-flex vui-flex-row vui-gap-2 vui-items-center", children: [
        copyToClipboard && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_BiCopy.BiCopy,
          {
            className: "vui-text-xl vui-cursor-pointer",
            onClick: () => {
              if (value) {
                navigator.clipboard.writeText(value);
              }
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "button",
          {
            className: "focus:vui-outline-none",
            type: "button",
            onClick: () => setShow(!show),
            children: show ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_BiShow.BiShow, { className: "vui-text-xl vui-cursor-pointer" }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_BiHide.BiHide, { className: "vui-text-xl vui-cursor-pointer" })
          }
        )
      ] }),
      type: show ? "text" : "password"
    }
  );
};

// src/components/AsyncModal/index.tsx
var import_react14 = __toESM(require("react"));
var import_react15 = require("@nextui-org/react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var useModalShow = () => {
  const [show, setShow] = (0, import_react14.useState)(false);
  const handleOnHide = () => {
    setShow(false);
  };
  return {
    show,
    setShow,
    onHide: handleOnHide
  };
};
var InputModalContext = import_react14.default.createContext({});
var InputModalContextProvider = (props) => {
  const { onOpen, onClose, isOpen } = (0, import_react15.useDisclosure)();
  const [content, setContent] = (0, import_react14.useState)();
  const [val, setVal] = (0, import_react14.useState)("");
  const [confirmationMessageInvalid, setConfirmationMessageInvalid] = (0, import_react14.useState)(false);
  const resolver = (0, import_react14.useRef)();
  const handleShow = (props2) => {
    var _a, _b, _c, _d;
    setContent(__spreadProps(__spreadValues({}, props2), {
      className: (_a = props2.className) != null ? _a : "",
      acceptText: (_b = props2.acceptText) != null ? _b : "OK",
      declineText: (_c = props2.declineText) != null ? _c : "Cancel",
      type: (_d = props2.type) != null ? _d : "validate"
    }));
    onOpen();
    return new Promise(function(resolve) {
      resolver.current = resolve;
    });
  };
  const modalContext = {
    show: handleShow
  };
  const handleOk = () => {
    if ((content == null ? void 0 : content.type) === "confirm") {
      if (val !== content.validationMessage)
        return setConfirmationMessageInvalid(true);
      else {
        setVal("");
        resolver.current && resolver.current(true);
        return onClose();
      }
    }
    resolver.current && resolver.current((content == null ? void 0 : content.type) === "validate" ? true : val);
    setVal("");
    onClose();
  };
  const handleCancel = () => {
    resolver.current && resolver.current(false);
    setVal("");
    onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(InputModalContext.Provider, { value: modalContext, children: [
    props.children,
    content && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      import_react15.Modal,
      {
        isOpen,
        onClose,
        backdrop: "blur",
        className: content.className,
        classNames: {
          base: "vui-bg-light dark:vui-bg-dark vui-text-black dark:vui-text-white"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react15.ModalContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react15.ModalHeader, { className: "vui-flex vui-flex-col vui-items-center", children: content.title }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react15.ModalBody, { className: "vui-items-center vui-gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: content.message }),
            content.type === "password" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              InputPassword,
              {
                label: "",
                testId: "confirm-dialog-input",
                placeholder: content.placeholder,
                onChange: (value) => setVal(value),
                value: val,
                color: "vui-bg-light-secondary dark:vui-bg-dark-secondary"
              }
            ),
            content.type === "confirm" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              import_react15.Input,
              {
                isInvalid: confirmationMessageInvalid,
                "data-test": "confirm-dialog-input",
                placeholder: content.placeholder,
                onValueChange: (value) => setVal(value),
                value: val,
                classNames: {
                  inputWrapper: "vui-bg-light-secondary dark:vui-bg-dark-secondary"
                }
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_react15.ModalFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react15.Button, { color: "success", className: "vui-text-white", onPress: () => handleOk(), "data-test": "confirm-dialog-accept", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "vui-text-ellipsis vui-truncate ...", children: content.acceptText }) }),
            content.type !== "info" && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_react15.Button, { color: "danger", className: "vui-text-white", onPress: () => handleCancel(), "data-test": "confirm-dialog-deny", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "vui-text-ellipsis vui-truncate ...", children: content.declineText }) })
          ] })
        ] })
      }
    )
  ] });
};
var useInputModalContext = () => (0, import_react14.useContext)(InputModalContext);

// src/components/Loader/index.tsx
var import_react16 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
var Loader = ({ message, img }) => {
  const [show, setShow] = (0, import_react16.useState)(false);
  setTimeout(() => setShow(true), 200);
  if (show) {
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "vui-p-5 vui-flex vui-flex-row vui-items-center vui-justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "vui-flex vui-flex-col vui-items-center vui-gap-5 vui-animate-pulse", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("img", { className: "vui-h-20", src: img }),
      message
    ] }) });
  } else
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, {});
};

// src/components/SelectLanguage/index.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var emojis = {
  ps: "\u{1F1F5}\u{1F1F0}",
  uz: "\u{1F1FA}\u{1F1FF}",
  tk: "\u{1F1F9}\u{1F1F2}",
  sq: "\u{1F1E6}\u{1F1F1}",
  ar: "\u{1F1E6}\u{1F1EA}",
  en: "\u{1F1EC}\u{1F1E7}",
  sm: "\u{1F1FC}\u{1F1F8}",
  ca: "\u{1F3F4}\u{E0065}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
  pt: "\u{1F1F5}\u{1F1F9}",
  es: "\u{1F1EA}\u{1F1F8}",
  gn: "\u{1F1F5}\u{1F1FE}",
  hy: "\u{1F1E6}\u{1F1F2}",
  ru: "\u{1F1F7}\u{1F1FA}",
  nl: "\u{1F1F3}\u{1F1F1}",
  pa: "\u{1F1EE}\u{1F1F3}",
  de: "\u{1F1E9}\u{1F1EA}",
  az: "\u{1F1E6}\u{1F1FF}",
  bn: "\u{1F1E7}\u{1F1E9}",
  be: "\u{1F1E7}\u{1F1FE}",
  fr: "\u{1F1EB}\u{1F1F7}",
  dz: "\u{1F1E7}\u{1F1F9}",
  ay: "\u{1F1E7}\u{1F1F4}",
  qu: "\u{1F1E7}\u{1F1F4}",
  bs: "\u{1F1E7}\u{1F1E6}",
  hr: "\u{1F1ED}\u{1F1F7}",
  sr: "\u{1F1F7}\u{1F1F8}",
  tn: "\u{1F1F9}\u{1F1F3}",
  no: "\u{1F1E7}\u{1F1FB}",
  nb: "\u{1F1E7}\u{1F1FB}",
  nn: "\u{1F1E7}\u{1F1FB}",
  ms: "\u{1F1F2}\u{1F1FE}",
  bg: "\u{1F1E7}\u{1F1EC}",
  ff: "\u{1F1F8}\u{1F1F3}",
  rn: "\u{1F1E7}\u{1F1EE}",
  km: "\u{1F1F0}\u{1F1ED}",
  sg: "\u{1F1E8}\u{1F1EB}",
  zh: "\u{1F1E8}\u{1F1F3}",
  ln: "\u{1F1E8}\u{1F1E9}",
  kg: "\u{1F1E8}\u{1F1EC}",
  sw: "\u{1F1F9}\u{1F1FF}",
  lu: "\u{1F1E8}\u{1F1E9}",
  el: "\u{1F1EC}\u{1F1F7}",
  tr: "\u{1F1F9}\u{1F1F7}",
  cs: "\u{1F1E8}\u{1F1FF}",
  sk: "\u{1F1F8}\u{1F1F0}",
  da: "\u{1F1E9}\u{1F1F0}",
  ti: "\u{1F1EA}\u{1F1F7}",
  et: "\u{1F1EA}\u{1F1EA}",
  ss: "\u{1F1F8}\u{1F1FF}",
  am: "\u{1F1EA}\u{1F1F9}",
  fo: "\u{1F1EB}\u{1F1F4}",
  fj: "\u{1F1EB}\u{1F1EF}",
  hi: "\u{1F1EE}\u{1F1F3}",
  ur: "\u{1F1F5}\u{1F1F0}",
  fi: "\u{1F1EB}\u{1F1EE}",
  sv: "\u{1F1F8}\u{1F1EA}",
  ka: "\u{1F1EC}\u{1F1EA}",
  kl: "\u{1F1EC}\u{1F1F1}",
  ch: "\u{1F1EC}\u{1F1FA}",
  ht: "\u{1F1ED}\u{1F1F9}",
  it: "\u{1F1EE}\u{1F1F9}",
  la: "\u{1F1FB}\u{1F1E6}",
  hu: "\u{1F1ED}\u{1F1FA}",
  is: "\u{1F1EE}\u{1F1F8}",
  id: "\u{1F1EE}\u{1F1E9}",
  fa: "\u{1F1EE}\u{1F1F7}",
  ku: "\u{1F1EE}\u{1F1F6}",
  ga: "\u{1F1EE}\u{1F1EA}",
  gv: "\u{1F1EE}\u{1F1F2}",
  he: "\u{1F1EE}\u{1F1F1}",
  ja: "\u{1F1EF}\u{1F1F5}",
  kk: "\u{1F1F0}\u{1F1FF}",
  ko: "\u{1F1F0}\u{1F1F7}",
  ky: "\u{1F1F0}\u{1F1EC}",
  lo: "\u{1F1F1}\u{1F1E6}",
  lv: "\u{1F1F1}\u{1F1FB}",
  st: "\u{1F1F1}\u{1F1F8}",
  lt: "\u{1F1F1}\u{1F1F9}",
  lb: "\u{1F1F1}\u{1F1FA}",
  mg: "\u{1F1F2}\u{1F1EC}",
  ny: "\u{1F1F2}\u{1F1FC}",
  dv: "\u{1F1F2}\u{1F1FB}",
  mt: "\u{1F1F2}\u{1F1F9}",
  mh: "\u{1F1F2}\u{1F1ED}",
  ro: "\u{1F1F2}\u{1F1E9}",
  mn: "\u{1F1F2}\u{1F1F3}",
  my: "\u{1F1F2}\u{1F1F2}",
  af: "\u{1F1F3}\u{1F1E6}",
  na: "\u{1F1F3}\u{1F1F7}",
  ne: "\u{1F1F3}\u{1F1F5}",
  mi: "\u{1F1F3}\u{1F1FF}",
  mk: "\u{1F1F2}\u{1F1F0}",
  pl: "\u{1F1F5}\u{1F1F1}",
  rw: "\u{1F1F7}\u{1F1FC}",
  ta: "\u{1F1EE}\u{1F1F3}",
  sl: "\u{1F1F8}\u{1F1EE}",
  so: "\u{1F1F8}\u{1F1F4}",
  nr: "\u{1F1FF}\u{1F1E6}",
  ts: "\u{1F1FF}\u{1F1E6}",
  ve: "\u{1F1FF}\u{1F1E6}",
  xh: "\u{1F1FF}\u{1F1E6}",
  zu: "\u{1F1FF}\u{1F1E6}",
  eu: "\u{1F1EA}\u{1F1F8}",
  gl: "\u{1F1EA}\u{1F1F8}",
  oc: "\u{1F1EA}\u{1F1F8}",
  si: "\u{1F1F1}\u{1F1F0}",
  tg: "\u{1F1F9}\u{1F1EF}",
  th: "\u{1F1F9}\u{1F1ED}",
  to: "\u{1F1F9}\u{1F1F4}",
  uk: "\u{1F1FA}\u{1F1E6}",
  bi: "\u{1F1FB}\u{1F1FA}",
  vi: "\u{1F1FB}\u{1F1F3}",
  sn: "\u{1F1FF}\u{1F1FC}",
  nd: "\u{1F1FF}\u{1F1E6}"
};
var SelectLanguage = ({ languages, onLanguageClicked, currentValue, size = "3xl" }) => {
  const Flag = ({ lc, emoji }) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "div",
    {
      className: `${size === "sm" && "vui-text-sm"} ${size === "md" && "vui-text-md"} ${size === "lg" && "vui-text-lg"} ${size === "xl" && "vui-text-xl"} ${size === "2xl" && "vui-text-2xl"} ${size === "3xl" && "vui-text-3xl"} ${size === "4xl" && "vui-text-4xl"} ${size === "5xl" && "vui-text-5xl"} vui-cursor-pointer vui-px-1 ${currentValue == lc ? "" : "vui-opacity-20"}`,
      onClick: () => onLanguageClicked(lc),
      "data-test": lc,
      children: emoji
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "vui-flex vui-flex-row vui-gap-1", children: languages.map((language) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Flag, { lc: language, emoji: emojis[language] })) });
};

// src/components/PasswordGenerator/index.tsx
var import_react17 = require("@nextui-org/react");
var import_bip39 = require("bip39");
var import_react18 = require("react");
var import_FaCopy = __toESM(require_FaCopy());
var import_FaGrin = __toESM(require_FaGrin());
var import_FaSmile = __toESM(require_FaSmile());
var import_FaFrown = __toESM(require_FaFrown());
var import_FaMeh = __toESM(require_FaMeh());
var import_FiRefreshCcw = __toESM(require_FiRefreshCcw());
var import_jsx_runtime21 = require("react/jsx-runtime");
var PasswordType = /* @__PURE__ */ ((PasswordType2) => {
  PasswordType2[PasswordType2["PASSWORD"] = 0] = "PASSWORD";
  PasswordType2[PasswordType2["PASSPHRASE"] = 1] = "PASSPHRASE";
  return PasswordType2;
})(PasswordType || {});
var CAPITAL_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
var NUMBERS = "0123456789";
var SPECIAL_CHARS = `.,;:?!'"@#%&*+-_=()[]{}<>/\\|~^`;
var TRAD = {
  charNumber: {
    fr: "Nombre de charact\xE8res",
    en: "Character number"
  },
  wordNumber: {
    fr: "Nombre de mots",
    en: "Word number"
  },
  regenerate: {
    fr: "Reg\xE9n\xE9rer",
    en: "Regenerate"
  },
  passwordType: {
    fr: "Type de mot de passe",
    en: "Password type"
  },
  password: {
    fr: "Mot de passe",
    en: "Password"
  },
  passhprase: {
    fr: "Phrase de passe",
    en: "Passphrase"
  },
  language: {
    fr: "Langage",
    en: "Language"
  },
  french: {
    fr: "Fran\xE7ais",
    en: "French"
  },
  english: {
    fr: "Anglais",
    en: "English"
  }
};
var PasswordGenerator = ({
  passwordType,
  passwordConfig,
  passphraseConfig,
  locale = "fr",
  onConfigChanged
}) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const [length, setLength] = (0, import_react18.useState)((_a = passwordConfig == null ? void 0 : passwordConfig.length) != null ? _a : 16);
  const [numbers, setNumbers] = (0, import_react18.useState)(
    (_b = passwordConfig == null ? void 0 : passwordConfig.numbers) != null ? _b : true
  );
  const [capitalLetters, setCapitalLetters] = (0, import_react18.useState)(
    (_c = passwordConfig == null ? void 0 : passwordConfig.capitalLetters) != null ? _c : true
  );
  const [lowercaseLetters, setLowercaseLetters] = (0, import_react18.useState)(
    (_d = passwordConfig == null ? void 0 : passwordConfig.lowercaseLetters) != null ? _d : true
  );
  const [specialCharacters, setSpecialCharacters] = (0, import_react18.useState)(
    (_e = passwordConfig == null ? void 0 : passwordConfig.specialCharacters) != null ? _e : true
  );
  const [type, setType] = (0, import_react18.useState)(
    passwordType != null ? passwordType : 0 /* PASSWORD */
  );
  const [robustness, setRobustness] = (0, import_react18.useState)(2 /* GOOD */);
  const [copied, setCopied] = (0, import_react18.useState)(false);
  const [password, setPassword] = (0, import_react18.useState)("");
  const [wordsNumber, setWordsNumber] = (0, import_react18.useState)(
    (_f = passphraseConfig == null ? void 0 : passphraseConfig.wordNumber) != null ? _f : 12
  );
  const [language, setLanguage] = (0, import_react18.useState)(
    (_g = passphraseConfig == null ? void 0 : passphraseConfig.language) != null ? _g : "en"
  );
  const [passphrase, setPassphrase] = (0, import_react18.useState)("");
  (0, import_react18.useEffect)(() => {
    if (!numbers && !capitalLetters && !lowercaseLetters && !specialCharacters)
      setLowercaseLetters(true);
    else {
      generatePassword();
    }
  }, [numbers, capitalLetters, lowercaseLetters, specialCharacters]);
  (0, import_react18.useEffect)(() => {
    if (wordsNumber < 6)
      setRobustness(0 /* BAD */);
    else if (wordsNumber >= 6 && wordsNumber < 8)
      setRobustness(1 /* MINIMAL */);
    else if (wordsNumber >= 8 && wordsNumber < 10)
      setRobustness(2 /* GOOD */);
    else if (wordsNumber >= 10)
      setRobustness(3 /* ROBUST */);
    if (language === "fr")
      (0, import_bip39.setDefaultWordlist)("french");
    else
      (0, import_bip39.setDefaultWordlist)("english");
    generatePassphrase();
  }, [wordsNumber, language]);
  (0, import_react18.useEffect)(() => {
    let score = 0;
    score += length * 2;
    if (capitalLetters)
      score += 10;
    if (lowercaseLetters)
      score += 10;
    if (numbers)
      score += 10;
    if (specialCharacters)
      score += 10;
    if (capitalLetters && lowercaseLetters && numbers && specialCharacters)
      score += 10;
    if (score > 40 && score <= 50)
      setRobustness(1 /* MINIMAL */);
    else if (score > 50 && score <= 75)
      setRobustness(2 /* GOOD */);
    else if (score > 75)
      setRobustness(3 /* ROBUST */);
    else
      setRobustness(0 /* BAD */);
  }, [numbers, capitalLetters, lowercaseLetters, specialCharacters, length]);
  const generatePassword = () => {
    let passwordChars = "";
    let password2 = [];
    if (lowercaseLetters) {
      passwordChars += LOWERCASE_LETTERS;
      let index = Math.floor(Math.random() * length);
      while (password2[index]) {
        index = Math.floor(Math.random() * length);
      }
      password2[index] = LOWERCASE_LETTERS.charAt(
        Math.floor(Math.random() * LOWERCASE_LETTERS.length)
      );
    }
    if (capitalLetters) {
      passwordChars += CAPITAL_LETTERS;
      let index = Math.floor(Math.random() * length);
      while (password2[index]) {
        index = Math.floor(Math.random() * length);
      }
      password2[index] = CAPITAL_LETTERS.charAt(
        Math.floor(Math.random() * CAPITAL_LETTERS.length)
      );
    }
    if (numbers) {
      passwordChars += NUMBERS;
      let index = Math.floor(Math.random() * length);
      while (password2[index]) {
        index = Math.floor(Math.random() * length);
      }
      password2[index] = NUMBERS.charAt(
        Math.floor(Math.random() * NUMBERS.length)
      );
    }
    if (specialCharacters) {
      passwordChars += SPECIAL_CHARS;
      let index = Math.floor(Math.random() * length);
      while (password2[index]) {
        index = Math.floor(Math.random() * length);
      }
      password2[index] = SPECIAL_CHARS.charAt(
        Math.floor(Math.random() * SPECIAL_CHARS.length)
      );
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      if (!password2[i])
        password2[i] = passwordChars.charAt(randomIndex);
    }
    setPassword(password2.join(""));
  };
  const generatePassphrase = () => {
    const mnemonic = (0, import_bip39.generateMnemonic)(256);
    setPassphrase(mnemonic.split(" ").slice(0, wordsNumber).join(" "));
  };
  (0, import_react18.useEffect)(() => {
    setCopied(false);
  }, [password, passphrase, type]);
  (0, import_react18.useEffect)(() => {
    onConfigChanged({
      passwordType: type,
      passphraseConfig: {
        language,
        wordNumber: wordsNumber
      },
      passwordConfig: {
        capitalLetters,
        length,
        lowercaseLetters,
        numbers,
        specialCharacters
      }
    });
  }, [
    type,
    length,
    lowercaseLetters,
    capitalLetters,
    numbers,
    specialCharacters,
    wordsNumber,
    language
  ]);
  const passwordStrength = () => {
    switch (robustness) {
      case 0 /* BAD */:
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_FaFrown.FaFrown, { className: "vui-text-danger vui-w-16 vui-h-16 vui-mx-auto" });
      case 1 /* MINIMAL */:
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_FaMeh.FaMeh, { className: "vui-text-warning vui-w-16 vui-h-16 vui-mx-auto" });
      case 2 /* GOOD */:
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_FaSmile.FaSmile, { className: "vui-text-success vui-w-16 vui-h-16 vui-mx-auto" });
      case 3 /* ROBUST */:
        return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_FaGrin.FaGrin, { className: "vui-text-success vui-w-16 vui-h-16 vui-mx-auto" });
      default:
        break;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "vui-flex vui-flex-col vui-gap-2 vui-w-full vui-bg-light dark:vui-bg-dark vui-p-4 vui-text-black dark:vui-text-white vui-rounded-large", children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      "div",
      {
        className: `vui-cursor-copy vui-flex vui-flex-row vui-flex-shrink-0 vui-justify-between vui-gap-4 vui-border-2 vui-p-4 vui-rounded-large vui-transition-all vui-duration-1000  ${copied ? "vui-border-success vui-bg-success" : "vui-border-modern-blue"}`,
        onClick: () => {
          navigator.clipboard.writeText(
            type === 0 /* PASSWORD */ ? password : passphrase
          );
          setCopied(true);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: `vui-grow-0 vui-font-bold vui-break-all vui-w-11/12`, children: type === 0 /* PASSWORD */ ? password : passphrase }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_FaCopy.FaCopy, { className: "vui-w-6 vui-h-6" })
        ]
      }
    ),
    passwordStrength(),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
      import_react17.Select,
      {
        label: TRAD.passwordType[locale],
        selectedKeys: [type != null ? type : 0 /* PASSWORD */],
        classNames: {
          trigger: "vui-bg-light-secondary dark:vui-bg-dark-secondary",
          popoverContent: "vui-bg-light-secondary dark:vui-bg-dark-secondary"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            import_react17.SelectItem,
            {
              onPress: () => setType(0 /* PASSWORD */),
              children: TRAD.password[locale]
            },
            0 /* PASSWORD */
          ),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
            import_react17.SelectItem,
            {
              onPress: () => setType(1 /* PASSPHRASE */),
              children: TRAD.passhprase[locale]
            },
            1 /* PASSPHRASE */
          )
        ]
      }
    ),
    type === 0 /* PASSWORD */ ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "vui-bg-light-secondary dark:vui-bg-dark-secondary vui-flex vui-flex-col vui-gap-2 vui-rounded-large vui-p-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react17.Slider,
        {
          label: `${TRAD.charNumber[locale]}`,
          minValue: 8,
          maxValue: 128,
          value: length,
          onChange: (value) => setLength(value),
          onChangeEnd: generatePassword,
          size: "lg",
          classNames: {
            filler: "vui-bg-modern-blue",
            track: "vui-border-s-modern-blue vui-bg-light-secondary dark:vui-bg-dark-secondary",
            thumb: "vui-bg-black dark:vui-bg-white"
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react17.Checkbox,
        {
          color: "primary",
          isSelected: lowercaseLetters,
          onValueChange: (value) => setLowercaseLetters(value),
          children: "a-z"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react17.Checkbox,
        {
          color: "primary",
          isSelected: capitalLetters,
          onValueChange: (value) => setCapitalLetters(value),
          children: "A-Z"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react17.Checkbox,
        {
          color: "primary",
          isSelected: numbers,
          onValueChange: (value) => setNumbers(value),
          children: "0-9"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react17.Checkbox,
        {
          color: "primary",
          isSelected: specialCharacters,
          onValueChange: (value) => setSpecialCharacters(value),
          children: SPECIAL_CHARS
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "vui-bg-light-secondary dark:vui-bg-dark-secondary vui-flex vui-flex-col vui-gap-2 vui-rounded-large vui-p-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react17.Slider,
        {
          label: `${TRAD.wordNumber[locale]}`,
          minValue: 4,
          maxValue: 24,
          value: wordsNumber,
          onChange: (value) => setWordsNumber(value),
          onChangeEnd: generatePassword,
          size: "lg",
          classNames: {
            filler: "vui-bg-modern-blue",
            track: "vui-border-s-modern-blue vui-bg-light-secondary dark:vui-bg-dark-secondary",
            thumb: "vui-bg-black dark:vui-bg-white"
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
        import_react17.Select,
        {
          label: TRAD.language[locale],
          selectedKeys: [language],
          classNames: {
            trigger: "vui-bg-light dark:vui-bg-dark",
            popoverContent: "vui-bg-light dark:vui-bg-dark"
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react17.SelectItem, { onPress: () => setLanguage("fr"), children: TRAD.french[locale] }, "fr"),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react17.SelectItem, { onPress: () => setLanguage("en"), children: TRAD.english[locale] }, "en")
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      import_react17.Button,
      {
        startContent: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_FiRefreshCcw.FiRefreshCcw, {}),
        onPress: () => type === 0 /* PASSWORD */ ? generatePassword() : generatePassphrase(),
        color: "success",
        children: TRAD.regenerate[locale]
      }
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColumnType,
  InputModalContextProvider,
  InputPassword,
  Loader,
  NavBar,
  NavButton,
  PasswordGenerator,
  PasswordType,
  QrCodeElement,
  SearchBar,
  SelectLanguage,
  SortType,
  Table,
  TextIcon,
  WindowScreen,
  useInputModalContext,
  useModalShow
});
//# sourceMappingURL=index.js.map