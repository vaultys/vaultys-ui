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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
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

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/lib/esm/iconsManifest.js
var IconsManifest;
var init_iconsManifest = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/lib/esm/iconsManifest.js"() {
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

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/lib/esm/iconContext.js
var import_react3, DefaultContext, IconContext;
var init_iconContext = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/lib/esm/iconContext.js"() {
    "use strict";
    import_react3 = __toESM(require("react"));
    DefaultContext = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0
    };
    IconContext = import_react3.default.createContext && import_react3.default.createContext(DefaultContext);
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/lib/esm/iconBase.js
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react4.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react4.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return import_react4.default.createElement("svg", __assign({
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
    }), title && import_react4.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react4.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
var import_react4, __assign, __rest;
var init_iconBase = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/lib/esm/iconBase.js"() {
    "use strict";
    import_react4 = __toESM(require("react"));
    init_iconContext();
    __assign = function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __rest = function(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DefaultContext: () => DefaultContext,
  GenIcon: () => GenIcon,
  IconBase: () => IconBase,
  IconContext: () => IconContext,
  IconsManifest: () => IconsManifest
});
var init_esm = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/lib/esm/index.js"() {
    "use strict";
    init_iconsManifest();
    init_iconBase();
    init_iconContext();
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiCopy.js
var require_BiCopy = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiCopy.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiCopy = function BiCopy3(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiHide.js
var require_BiHide = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiHide.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiHide = function BiHide2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5zM16.972 15.558l-2.28-2.28C14.882 12.888 15 12.459 15 12c0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501C9.796 7.193 10.814 7 12 7c5.351 0 7.424 3.846 7.926 5C19.624 12.692 18.76 14.342 16.972 15.558z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiShow.js
var require_BiShow = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiShow.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiShow = function BiShow2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z" } }, { "tag": "path", "attr": { "d": "M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bs/BsGearFill.js
var require_BsGearFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bs/BsGearFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsGearFill = function BsGearFill2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 100-5.86 2.929 2.929 0 000 5.858z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/io/IoMdArrowDropdown.js
var require_IoMdArrowDropdown = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/io/IoMdArrowDropdown.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.IoMdArrowDropdown = function IoMdArrowDropdown2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 192l128 128 128-128z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/fa/FaCaretDown.js
var require_FaCaretDown = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/fa/FaCaretDown.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaCaretDown = function FaCaretDown2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bs/BsSearch.js
var require_BsSearch = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bs/BsSearch.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsSearch = function BsSearch2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z", "clipRule": "evenodd" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/io/IoMdClose.js
var require_IoMdClose = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/io/IoMdClose.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.IoMdClose = function IoMdClose2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiCheck.js
var require_BiCheck = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiCheck.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiCheck = function BiCheck2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/fi/FiRefreshCcw.js
var require_FiRefreshCcw = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/fi/FiRefreshCcw.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FiRefreshCcw = function FiRefreshCcw2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "1 4 1 10 7 10" } }, { "tag": "polyline", "attr": { "points": "23 20 23 14 17 14" } }, { "tag": "path", "attr": { "d": "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/ri/RiLockPasswordFill.js
var require_RiLockPasswordFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/ri/RiLockPasswordFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.RiLockPasswordFill = function RiLockPasswordFill2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "g", "attr": {}, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z" } }] }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiKey.js
var require_BiKey = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bi/BiKey.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiKey = function BiKey2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M7,17c2.414,0,4.435-1.721,4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102C11.435,8.721,9.414,7,7,7c-2.757,0-5,2.243-5,5 S4.243,17,7,17z M7,9c1.654,0,3,1.346,3,3s-1.346,3-3,3s-3-1.346-3-3S5.346,9,7,9z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bs/BsInfoCircleFill.js
var require_BsInfoCircleFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.1.0/node_modules/@react-icons/all-files/bs/BsInfoCircleFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsInfoCircleFill = function BsInfoCircleFill2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  ColumnType: () => ColumnType,
  ConfirmModalContextProvider: () => ConfirmModalContextProvider,
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
  useConfirmModal: () => useConfirmModal,
  useInputModalContext: () => useInputModalContext
});
module.exports = __toCommonJS(index_exports);

// src/components/ConfirmModal/index.tsx
var import_react = __toESM(require("react"));
var import_react2 = require("@heroui/react");
var import_jsx_runtime = require("react/jsx-runtime");
var ConfirmModalContext = import_react.default.createContext({});
function ConfirmModalContextProvider({ children }) {
  var _a, _b, _c, _d;
  const [content, setContent] = (0, import_react.useState)(null);
  const resolver = (0, import_react.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  const handleShow = (props) => {
    var _a2, _b2, _c2;
    setContent(__spreadProps(__spreadValues({}, props), {
      cancelText: (_a2 = props.cancelText) != null ? _a2 : "Cancel",
      acceptText: (_b2 = props.acceptText) != null ? _b2 : "Confirm",
      color: (_c2 = props.color) != null ? _c2 : "default"
    }));
    onOpen();
    return new Promise(function(resolve) {
      resolver.current = resolve;
    });
  };
  const handleAccept = () => {
    resolver.current && resolver.current(true);
    onClose();
  };
  const handleCancel = () => {
    resolver.current && resolver.current(false);
    onClose();
  };
  const modalContext = (0, import_react.useMemo)(
    () => ({
      show: handleShow
    }),
    []
  );
  const getAlertStyles = (color) => {
    const styles = {
      default: {
        bg: "",
        text: "text-default-700",
        border: "!border-0"
      },
      success: {
        bg: "bg-success-50",
        text: "text-success-700",
        border: "border-success-200"
      },
      warning: {
        bg: "bg-warning-50",
        text: "text-warning-700",
        border: "border-warning-200"
      },
      danger: {
        bg: "bg-danger-50",
        text: "text-danger-700",
        border: "border-danger-200"
      },
      primary: {
        bg: "bg-primary-50",
        text: "text-primary-700",
        border: "border-primary-200"
      },
      secondary: {
        bg: "bg-secondary-50",
        text: "text-secondary-700",
        border: "border-secondary-200"
      },
      info: {
        bg: "bg-focus-50",
        text: "text-focus-700",
        border: "border-focus-200"
      }
    };
    return styles[color] || styles.default;
  };
  const getButtonColor = (color) => {
    return color === "info" ? "default" : color;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ConfirmModalContext.Provider, { value: modalContext, children: [
    children,
    content && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react2.Modal,
      {
        isOpen,
        onClose: handleCancel,
        backdrop: "blur",
        classNames: {
          base: "bg-background",
          header: "border-b border-divider",
          body: "py-6",
          footer: "border-t border-divider"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react2.ModalContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.ModalHeader, { className: "flex flex-col gap-1", children: typeof content.header === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "text-xl font-semibold", children: content.header }) : content.header }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react2.ModalBody, { children: [
            content.customContent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
              content.customContent,
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Divider, { className: "my-4" })
            ] }),
            content.alert && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "div",
              {
                className: `${getAlertStyles((_a = content.color) != null ? _a : "default").bg} ${getAlertStyles((_b = content.color) != null ? _b : "default").text} p-4 rounded-lg border ${getAlertStyles((_c = content.color) != null ? _c : "primary").border}`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-medium", children: content.alert }),
                  content.alertDescription && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-1 text-sm", children: content.alertDescription })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react2.ModalFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Button, { variant: "flat", color: "default", onPress: handleCancel, startContent: content.cancelIcon, "data-test": "confirm-dialog-deny", children: content.cancelText }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react2.Button,
              {
                color: getButtonColor((_d = content.color) != null ? _d : "primary"),
                onPress: handleAccept,
                startContent: content.acceptIcon,
                "data-test": "confirm-dialog-accept",
                className: `${content.color === "info" && "bg-modern-blue"}`,
                children: content.acceptText
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
var useConfirmModal = () => (0, import_react.useContext)(ConfirmModalContext);

// src/components/AsyncModal/index.tsx
var import_react7 = __toESM(require("react"));
var import_react8 = require("@heroui/react");

// src/components/InputPassword/index.tsx
var import_react5 = require("@heroui/react");
var import_react6 = require("react");
var import_BiCopy = __toESM(require_BiCopy());
var import_BiHide = __toESM(require_BiHide());
var import_BiShow = __toESM(require_BiShow());
var import_jsx_runtime2 = require("react/jsx-runtime");
var InputPassword = ({
  label,
  description,
  onChange,
  valid = true,
  color,
  placeholder,
  value,
  disabled,
  copyToClipboard = false,
  testId
}) => {
  const [show, setShow] = (0, import_react6.useState)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react5.Input,
    {
      autoComplete: "off",
      "data-test": testId,
      label,
      value,
      placeholder,
      onValueChange: (value2) => onChange && onChange(value2),
      classNames: {
        inputWrapper: color,
        label: `text-lg font-bold`,
        input: `font-mono`
      },
      description,
      isInvalid: !valid,
      isDisabled: disabled,
      endContent: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
        copyToClipboard && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_BiCopy.BiCopy,
          {
            className: "text-xl cursor-pointer dark:text-white",
            onClick: () => {
              if (value) {
                navigator.clipboard.writeText(value);
              }
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "focus:outline-none", type: "button", onClick: () => setShow(!show), children: show ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_BiShow.BiShow, { className: "text-xl cursor-pointer dark:text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_BiHide.BiHide, { className: "text-xl cursor-pointer dark:text-white" }) })
      ] }),
      type: show ? "text" : "password"
    }
  );
};

// src/components/AsyncModal/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var InputModalContext = import_react7.default.createContext({});
function InputModalContextProvider(props) {
  const [content, setContent] = (0, import_react7.useState)();
  const [val, setVal] = (0, import_react7.useState)("");
  const [confirmationMessageInvalid, setConfirmationMessageInvalid] = (0, import_react7.useState)(false);
  const resolver = (0, import_react7.useRef)(null);
  const [isOpen, setIsOpen] = (0, import_react7.useState)(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };
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
      if (val !== content.validationMessage) return setConfirmationMessageInvalid(true);
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(InputModalContext.Provider, { value: modalContext, children: [
    props.children,
    content && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react8.Modal,
      {
        isOpen,
        onClose,
        backdrop: "blur",
        className: content.className,
        classNames: {
          base: "bg-light dark:bg-dark text-black dark:text-white"
        },
        placement: "center",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react8.ModalContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react8.ModalHeader, { className: "flex flex-col items-center", children: content.title }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react8.ModalBody, { className: "items-center gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: content.message }),
            content.customContent && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: content.customContent }),
            content.type === "password" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InputPassword, { label: "", testId: "confirm-dialog-input", placeholder: content.placeholder, onChange: (value) => setVal(value), value: val }),
            content.type === "confirm" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              import_react8.Input,
              {
                isInvalid: confirmationMessageInvalid,
                "data-test": "confirm-dialog-input",
                placeholder: content.placeholder,
                onValueChange: (value) => setVal(value),
                value: val,
                classNames: {
                  inputWrapper: "bg-light-secondary dark:bg-dark-secondary"
                }
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react8.ModalFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react8.Button, { color: "success", className: "text-white", onPress: () => handleOk(), "data-test": "confirm-dialog-accept", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-ellipsis truncate ...", children: content.acceptText }) }),
            content.type !== "info" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react8.Button, { color: "danger", className: "text-white", onPress: () => handleCancel(), "data-test": "confirm-dialog-deny", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-ellipsis truncate ...", children: content.declineText }) })
          ] })
        ] })
      }
    )
  ] });
}
var useInputModalContext = () => (0, import_react7.useContext)(InputModalContext);

// src/components/Table/index.tsx
var import_react14 = require("react");

// src/components/Table/Header.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Header = ({ items }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("thead", { className: "[&>tr]:first:rounded-large sticky top-5 z-20 [&>tr]:first:shadow-small", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("tr", { children: items }) });
};

// src/components/Table/Row.tsx
var import_react13 = require("react");
var import_BsGearFill = __toESM(require_BsGearFill());

// src/components/Table/RowItemButton.tsx
var import_react9 = require("@heroui/react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var RowItemButton = ({ title, onClick, disabled = false }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_react9.Button,
    {
      color: "primary",
      disabled,
      onClick: (e) => {
        e.stopPropagation();
        if (!disabled) onClick();
      },
      children: title
    }
  );
};

// src/components/Table/RowItemEditText.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var RowItemEditText = ({ editMode, value, onChange, onClick, maxLines = 1, inputType = "text" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: maxLines > 1 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "textarea",
    {
      rows: maxLines,
      className: `w-full bg-transparent rounded-lg p-1 border outline-none ${editMode ? "" : "border-transparent"}`,
      value,
      onChange: (e) => onChange(e.target.value),
      onClick: () => onClick()
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "input",
    {
      type: inputType,
      className: `w-full bg-transparent rounded-lg p-1 border outline-none text-ellipsis truncate ... ${editMode ? "" : "border-transparent"}`,
      value,
      onChange: (e) => onChange(e.target.value),
      onClick: () => onClick()
    }
  ) });
};

// src/components/Table/RowItemSpan.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var RowItemSpan = ({ value }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: value });
};

// src/components/Table/RowItemSwitch.tsx
var import_react10 = require("@heroui/react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var RowItemSwitch = ({ check, name, onChange, disabled }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_react10.Switch,
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
var import_react11 = require("@heroui/react");
var import_IoMdArrowDropdown = __toESM(require_IoMdArrowDropdown());
var import_jsx_runtime9 = require("react/jsx-runtime");
var RowItemDropdown = ({ value, items, onChange }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_react11.Dropdown, { className: "bg-light dark:bg-dark", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react11.DropdownTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react11.Button, { endContent: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_IoMdArrowDropdown.IoMdArrowDropdown, {}), variant: "bordered", children: value }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react11.DropdownMenu, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react11.DropdownItem, { onPress: () => onChange(item), children: item }, item)) })
  ] });
};

// src/components/Table/RowItem.tsx
var import_react12 = require("@heroui/react");
var import_jsx_runtime10 = require("react/jsx-runtime");
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
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RowItemButton, { onClick: () => typeof onClick === "function" && onClick(), title: title != null ? title : "", disabled });
      case 4 /* CHECKBOX */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react12.Checkbox, { onValueChange: (value2) => typeof onChange === "function" && onChange(value2), isSelected: value, isDisabled: disabled });
      case 1 /* EDIT_TEXT */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RowItemSwitch, { check: value, disabled, onChange: (checked) => onChange && onChange(checked) });
      case 6 /* TEXT */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RowItemSpan, { value: value != null ? value : title });
      case 7 /* DROPDOWN */:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(RowItemDropdown, { value, items: items != null ? items : [], onChange: (value2) => onChange && onChange(value2) });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_jsx_runtime10.Fragment, {});
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "td",
    {
      className: ` px-2 first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] ${className}`,
      id,
      "data-test": testId,
      children: getChild()
    }
  );
};

// src/components/Table/Row.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  const [isSelected, setIsSelected] = (0, import_react13.useState)(false);
  (0, import_react13.useEffect)(() => {
    setIsSelected(selected && selectable);
  }, [selected, selectable]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "tr",
    {
      "data-test": dataTest,
      id,
      className: `${rowIndex && rowIndex % 2 !== 0 && showLines && "brightness-95 dark:brightness-110"} ${isSelected ? "bg-primary/20 text-primary dark:bg-secondary/20 dark:text-secondary" : `${danger ? "bg-danger" : warning ? "bg-warning" : `bg-light-secondary dark:bg-dark-secondary`}`} ${inactiveState && "text-gray-500"}
      ${blur && "blur-sm"} hover:blur-0
       hover:brightness-75 dark:hover:brightness-125 h-12 ${clickable && "cursor-pointer"}`,
      onClick: () => {
        typeof onRowClicked === "function" && onRowClicked();
      },
      children: [
        rowItems,
        children,
        tableSelectable && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          RowItem,
          {
            disabled: !selectable,
            testId: `${dataTest}-select`,
            type: 4 /* CHECKBOX */,
            onChange: (value) => {
              if (!selectable) return;
              typeof onSelectedClicked === "function" && onSelectedClicked(!isSelected);
              setIsSelected(!isSelected);
            },
            value: isSelected
          }
        ),
        configurable && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(RowItem, { type: 3 /* CUSTOM */, id: `${id}-config`, testId: `${dataTest}-configure`, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_BsGearFill.BsGearFill,
          {
            className: "w-6 h-6 cursor-pointer",
            onClick: (e) => {
              e.stopPropagation();
              typeof onConfigureClicked === "function" && onConfigureClicked();
            }
          }
        ) })
      ]
    }
  );
};

// src/components/Table/HeaderItem.tsx
var import_FaCaretDown = __toESM(require_FaCaretDown());
var import_jsx_runtime12 = require("react/jsx-runtime");
var HeaderItem = ({ title, children, sortColumn = false, sortActive, sortType = 0 /* ASCENDING */, onClick, className, testId }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "th",
    {
      className: `bg-light dark:bg-dark first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] py-2 px-2 ${sortColumn && "cursor-pointer"} ${className}`,
      onClick: () => sortColumn && typeof onClick === "function" && onClick(),
      "data-test": testId,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-row gap-2", children: [
        title,
        children,
        sortColumn && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_FaCaretDown.FaCaretDown, { className: `transition-all transform ${sortActive ? "visible" : "invisible"} ${sortType === 0 /* ASCENDING */ && "rotate-180"}` })
      ] })
    }
  );
};

// src/components/Table/index.tsx
var import_react15 = require("@heroui/react");
var import_jsx_runtime13 = require("react/jsx-runtime");
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
  const [selectedAll, setSelectedAll] = (0, import_react14.useState)(false);
  const [editMode, setEditMode] = (0, import_react14.useState)(false);
  const [rowInEditMode, setRowInEditMode] = (0, import_react14.useState)();
  const [currentSortIndex, setCurrentSortIndex] = (0, import_react14.useState)(cols.indexOf((_a = cols.find((col) => col.sort)) != null ? _a : cols[0]));
  const [currentSortType, setCurrentSortType] = (0, import_react14.useState)(0 /* ASCENDING */);
  const [selectedIds, setSelectedIds] = (0, import_react14.useState)([]);
  const [values, setValues] = (0, import_react14.useState)([]);
  const ref = (0, import_react14.useRef)(null);
  (0, import_react14.useEffect)(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  (0, import_react14.useEffect)(() => {
    selectedAll ? setSelectedIds(rows.filter((row) => row.selectable).map((row) => row.id)) : setSelectedIds([]);
  }, [selectedAll]);
  (0, import_react14.useEffect)(() => {
    if (unselectAll) {
      setSelectedAll(false);
      setSelectedIds([]);
    }
  }, [unselectAll]);
  (0, import_react14.useEffect)(() => {
    if (rowInEditMode) setEditMode(true);
    updateValues();
  }, [rowInEditMode]);
  (0, import_react14.useEffect)(() => {
    typeof setSelectedRows === "function" && setSelectedRows(selectedIds);
  }, [selectedIds]);
  (0, import_react14.useEffect)(() => {
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
    if (currentSortIndex === index) toggleSortType();
    else {
      setCurrentSortIndex(index);
      setCurrentSortType(0 /* ASCENDING */);
    }
  };
  const toggleSortType = () => {
    setCurrentSortType(currentSortType === 0 /* ASCENDING */ ? 1 /* DESCENDING */ : 0 /* ASCENDING */);
  };
  const changeRowInEditMode = (rowId) => __async(null, null, function* () {
    const currentRow = rows.find((row) => row.id === rowInEditMode);
    if ((currentRow == null ? void 0 : currentRow.id) === rowId) return;
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
      if (newValue && rowItem.value !== newValue.value) res = true;
    });
    return res;
  };
  const getHeaderItems = () => {
    const headerItems = [];
    cols.forEach((col, i) => {
      headerItems.push(
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(HeaderItem, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_react15.Checkbox,
        {
          "data-test": `${dataTest}-select-all`,
          onValueChange: (value) => {
            setSelectedAll(value);
          },
          isSelected: selectedAll
        }
      ) })
    );
    if (configureButton) headerItems.push(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(HeaderItem, {}));
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { "data-test": `row-${rows.indexOf((_j = rows.find((row) => row.id === rowId)) != null ? _j : rows[0])}-item-${rowItem.colIndex}` }, `${rowId}-${rowItem.colIndex}`);
    }
  };
  const applySort = (rowA, rowB) => {
    let valueA = rowA.items[currentSortIndex].value;
    let valueB = rowB.items[currentSortIndex].value;
    if (typeof valueA === "string" && typeof valueB === "string") {
      if (!valueA) valueA = "";
      if (!valueB) valueB = "";
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
    if (stringA === stringB) return 0;
    if (currentSortType === 1 /* DESCENDING */) {
      return stringB.toLowerCase() < stringA.toLowerCase() ? -1 : 1;
    } else {
      return stringB.toLowerCase() < stringA.toLowerCase() ? 1 : -1;
    }
  };
  const booleanSort = (booleanA, booleanB) => {
    if (currentSortType === 1 /* DESCENDING */) return Number(booleanA) - Number(booleanB);
    else return Number(booleanB) - Number(booleanA);
  };
  const numberSort = (numberA, numberB) => {
    if (currentSortType === 0 /* ASCENDING */) return numberA - numberB;
    else return numberB - numberA;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "w-max min-w-full flex flex-col relative min-h-[400px] bg-light-secondary dark:bg-dark-secondary rounded-large shadow-small", children: [
    rows.length === 0 && emptyTableContent && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "absolute top-0 opacity-50 bottom-0 left-0 right-0 flex items-center justify-center text-center", children: emptyTableContent }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("table", { className: "table-auto border-separate border-spacing-y-1 bg-light-secondary dark:bg-dark-secondary  p-4 rounded-large ", ref, "data-test": dataTest, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Header, { items: getHeaderItems() }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("tbody", { "data-test": `${dataTest}-body`, children: rows.sort(applySort).map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
    ] })
  ] });
};

// src/components/TextIcon/index.tsx
var import_react16 = require("@heroui/react");
var import_jsx_runtime14 = require("react/jsx-runtime");
var stringToColor = (text) => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash % 360);
  return `hsl(${h}, 70%, 60%)`;
};
var TextIcon = (_a) => {
  var _b = _a, { text = "Te", backgroundColor, className = "" } = _b, props = __objRest(_b, ["text", "backgroundColor", "className"]);
  const bgColor = backgroundColor || stringToColor(text);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_react16.Avatar,
    __spreadProps(__spreadValues({
      getInitials: (value) => {
        if (!value) return "";
        const nameParts = value.trim().split(/\s+/).filter(Boolean);
        if (nameParts.length > 1) {
          return nameParts.map((part) => part[0].toUpperCase()).join("").substring(0, 2);
        } else {
          return value.substring(0, 2).toUpperCase();
        }
      },
      name: text,
      style: { backgroundColor: bgColor },
      className
    }, props), {
      classNames: {
        name: "text-black font-bold"
      }
    })
  );
};

// src/components/QrCodeElement/index.tsx
var import_react17 = require("react");
var import_qrcode = __toESM(require("qrcode"));
var import_jsx_runtime15 = require("react/jsx-runtime");
var QrCodeElement = (_a) => {
  var _b = _a, { text, className } = _b, rest = __objRest(_b, ["text", "className"]);
  const canvasRef = (0, import_react17.useRef)(null);
  (0, import_react17.useEffect)(() => {
    const canvas = canvasRef.current;
    import_qrcode.default.toCanvas(canvas, text);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("canvas", __spreadValues({ ref: canvasRef, className: `rounded-lg shadow-lg ${className || ""}` }, rest));
};

// src/components/WindowScreen/index.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var WindowScreen = ({ children, icon, title = "SmartLink", size = "lg" }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex flex-col w-full p-2 h-screen justify-center items-center bg-light bg-opacity-50 backdrop-blur", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
  "div",
  {
    className: `max-h-full  shadow-lg w-full shadow-black/40 rounded-t-xl rounded-b overflow-clip ${size === "sm" && "max-w-xl"} ${size === "md" && "max-w-3xl"} ${size === "lg" && "max-w-5xl"} ${size === "xl" && "max-w-7xl"}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-row justify-between text-xl p-3 w-full bg-brand", children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { className: "h-8 rounded", src: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "w-full text-center", children: title }),
        icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { className: "h-8 opacity-0", src: icon })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "overflow-auto max-h-full flex flex-col gap-5 justify-center items-center shadow-inner border-2 dark:border-dark-secondary w-full bg-light dark:bg-dark", children })
    ]
  }
) });

// src/components/NavButton/index.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var NavButton = ({ title, current, onClick }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    "div",
    {
      onClick: () => onClick && onClick(),
      className: `flex py-2 pl-3 pr-4 ${current ? "text-primary dark:text-secondary font-bold" : "text-black dark:text-white"} cursor-pointer hover:text-primary hover:dark:text-secondary`,
      children: title
    }
  );
};

// src/components/NavBarPC/index.tsx
var import_react18 = __toESM(require("react"));
var import_jsx_runtime18 = require("react/jsx-runtime");
var NavBar = ({ children, startContent, endContent }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("nav", { className: "z-30 shadow bg-light-secondary dark:bg-dark-secondary w-full flex flex-row gap-4 items-center px-4 py-2", children: [
    startContent,
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "flex flex-row items-center grow", children: import_react18.default.Children.map(children, (child, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: child }, index);
    }) }),
    endContent
  ] });
};

// src/components/SearchBar/index.tsx
var import_react19 = require("react");
var import_BsSearch = __toESM(require_BsSearch());
var import_IoMdClose = __toESM(require_IoMdClose());
var import_jsx_runtime19 = require("react/jsx-runtime");
var SearchBar = (_a) => {
  var _b = _a, {
    onKeyUp,
    onClick,
    className,
    onChange,
    value = "",
    placeholder = "Search...",
    defaultHide = false,
    children,
    closeOnSelect = false
  } = _b, props = __objRest(_b, [
    "onKeyUp",
    "onClick",
    "className",
    "onChange",
    "value",
    "placeholder",
    "defaultHide",
    "children",
    "closeOnSelect"
  ]);
  const [hide, setHide] = (0, import_react19.useState)(defaultHide);
  const [isFocused, setIsFocused] = (0, import_react19.useState)(false);
  const inputRef = (0, import_react19.useRef)(null);
  const childRef = (0, import_react19.useRef)(null);
  const [inputValue, setInputValue] = (0, import_react19.useState)(value);
  const handleSearchIconClick = () => {
    if (defaultHide) setHide(!hide);
    else if (inputRef.current) inputRef.current.focus();
  };
  const handleClearSearch = () => {
    setInputValue("");
    if (onChange) onChange("");
    if (inputRef.current) inputRef.current.focus();
  };
  (0, import_react19.useEffect)(() => {
    setInputValue(value);
  }, [value]);
  (0, import_react19.useEffect)(() => {
    setTimeout(() => {
      if (defaultHide && !hide && inputRef.current) {
        inputRef.current.focus();
      }
    }, 300);
  }, [hide, defaultHide]);
  (0, import_react19.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target) && childRef.current && !childRef.current.contains(event.target)) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: `${className} group relative transition-all duration-300 ease-in-out rounded-xl
      ${!hide && children && isFocused ? "shadow-lg !rounded-b-none" : "shadow hover:shadow-md"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: `relative flex flex-row items-center ${hide ? "justify-end" : ""} overflow-hidden`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            import_BsSearch.BsSearch,
            {
              className: "absolute z-20 left-3 w-5 h-5 md:w-6 md:h-6 cursor-pointer text-gray-400 hover:text-gray-700 transition-colors",
              onClick: handleSearchIconClick,
              "aria-label": "Search"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "input",
            {
              ref: inputRef,
              placeholder,
              "data-test": "search",
              value: inputValue,
              autoComplete: "off",
              accessKey: "shift+e",
              className: `w-full rounded-xl py-3 pl-12 pr-10 bg-transparent focus-visible:outline-none
          border border-transparent focus:border-gray-300 hover:border-gray-200
          text-sm md:text-base transform transition-all duration-300
          ${hide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`,
              onKeyUp,
              onChange: (e) => {
                setInputValue(e.target.value);
                if (onChange) onChange(e.target.value);
              },
              onClick,
              onFocus: () => setIsFocused(true)
            }
          ),
          inputValue && !hide && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
            "button",
            {
              type: "button",
              onClick: handleClearSearch,
              className: "absolute right-3 z-20 p-1 rounded-full hover:bg-gray-100 transition-colors",
              "aria-label": "Clear search",
              children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_IoMdClose.IoMdClose, { className: "w-4 h-4 text-gray-500 hover:text-gray-700" })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "div",
          {
            ref: childRef,
            className: `w-full ${className} !rounded-t-none absolute z-40  overflow-y-auto 
        transition-all duration-300 ease-in-out 
        ${!hide && isFocused ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`,
            onClick: () => {
              if (closeOnSelect) setIsFocused(false);
            },
            children
          }
        )
      ]
    })
  );
};

// src/components/Loader/index.tsx
var import_react20 = require("react");
var import_jsx_runtime20 = require("react/jsx-runtime");
var Loader = ({ message, img }) => {
  const [show, setShow] = (0, import_react20.useState)(false);
  setTimeout(() => setShow(true), 200);
  if (show) {
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "p-5 flex flex-row items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col items-center gap-5 animate-pulse", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("img", { className: "h-20", src: img }),
      message
    ] }) });
  } else return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_jsx_runtime20.Fragment, {});
};

// src/components/SelectLanguage/index.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  const Flag = ({ lc, emoji }) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "div",
    {
      className: `${size === "sm" && "text-sm"} ${size === "md" && "text-md"} ${size === "lg" && "text-lg"} ${size === "xl" && "text-xl"} ${size === "2xl" && "text-2xl"} ${size === "3xl" && "text-3xl"} ${size === "4xl" && "text-4xl"} ${size === "5xl" && "text-5xl"} cursor-pointer px-1 ${currentValue == lc ? "" : "opacity-20"}`,
      onClick: () => onLanguageClicked(lc),
      "data-test": lc,
      children: emoji
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex flex-row gap-1", children: languages.map((language) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Flag, { lc: language, emoji: emojis[language] })) });
};

// src/components/PasswordGenerator/index.tsx
var import_react21 = require("@heroui/react");
var import_bip39 = require("bip39");
var import_react22 = require("react");
var import_BiCopy2 = __toESM(require_BiCopy());
var import_BiCheck = __toESM(require_BiCheck());
var import_FiRefreshCcw = __toESM(require_FiRefreshCcw());
var import_RiLockPasswordFill = __toESM(require_RiLockPasswordFill());
var import_BiKey = __toESM(require_BiKey());
var import_BsInfoCircleFill = __toESM(require_BsInfoCircleFill());
var import_password_entropy = __toESM(require("@rabbit-company/password-entropy"));
var import_jsx_runtime22 = require("react/jsx-runtime");
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
    fr: "Nombre de caract\xE8res",
    en: "Character number"
  },
  copied: {
    fr: "Copi\xE9",
    en: "Copied"
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
  passphrase: {
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
  },
  passwordStrength: {
    fr: "Force du mot de passe",
    en: "Password strength"
  },
  veryWeak: {
    fr: "Tr\xE8s faible",
    en: "Very weak"
  },
  weak: {
    fr: "Faible",
    en: "Weak"
  },
  strong: {
    fr: "Fort",
    en: "Strong"
  },
  veryStrong: {
    fr: "Tr\xE8s fort",
    en: "Very strong"
  },
  options: {
    fr: "Options",
    en: "Options"
  },
  clickToCopy: {
    fr: "Cliquer pour copier",
    en: "Click to copy"
  },
  infoTooltip: {
    fr: "Plus vous utilisez de types de caract\xE8res et plus votre mot de passe est long, plus il est s\xE9curis\xE9.",
    en: "The more character types you use and the longer your password is, the more secure it will be."
  }
};
var PasswordGenerator = ({ passwordType, passwordConfig, passphraseConfig, locale = "fr", onConfigChanged }) => {
  var _a, _b, _c, _d, _e, _f, _g;
  if (locale !== "fr" && locale !== "en") {
    locale = "en";
  }
  const [length, setLength] = (0, import_react22.useState)((_a = passwordConfig == null ? void 0 : passwordConfig.length) != null ? _a : 16);
  const [numbers, setNumbers] = (0, import_react22.useState)((_b = passwordConfig == null ? void 0 : passwordConfig.numbers) != null ? _b : true);
  const [capitalLetters, setCapitalLetters] = (0, import_react22.useState)((_c = passwordConfig == null ? void 0 : passwordConfig.capitalLetters) != null ? _c : true);
  const [lowercaseLetters, setLowercaseLetters] = (0, import_react22.useState)((_d = passwordConfig == null ? void 0 : passwordConfig.lowercaseLetters) != null ? _d : true);
  const [specialCharacters, setSpecialCharacters] = (0, import_react22.useState)((_e = passwordConfig == null ? void 0 : passwordConfig.specialCharacters) != null ? _e : true);
  const [type, setType] = (0, import_react22.useState)(passwordType != null ? passwordType : 0 /* PASSWORD */);
  const [robustness, setRobustness] = (0, import_react22.useState)(2 /* GOOD */);
  const [entropy, setEntropy] = (0, import_react22.useState)(75);
  const [copied, setCopied] = (0, import_react22.useState)(false);
  const [password, setPassword] = (0, import_react22.useState)("");
  const [wordsNumber, setWordsNumber] = (0, import_react22.useState)((_f = passphraseConfig == null ? void 0 : passphraseConfig.wordNumber) != null ? _f : 12);
  const [language, setLanguage] = (0, import_react22.useState)((_g = passphraseConfig == null ? void 0 : passphraseConfig.language) != null ? _g : "en");
  const [passphrase, setPassphrase] = (0, import_react22.useState)("");
  (0, import_react22.useEffect)(() => {
    if (!numbers && !capitalLetters && !lowercaseLetters && !specialCharacters) setLowercaseLetters(true);
    else {
      generatePassword();
    }
  }, [numbers, capitalLetters, lowercaseLetters, specialCharacters, length]);
  (0, import_react22.useEffect)(() => {
    if (language === "fr") (0, import_bip39.setDefaultWordlist)("french");
    else (0, import_bip39.setDefaultWordlist)("english");
    if (wordsNumber < 6) setRobustness(0 /* BAD */);
    else if (wordsNumber >= 6 && wordsNumber < 8) setRobustness(1 /* MINIMAL */);
    else if (wordsNumber >= 8 && wordsNumber < 10) setRobustness(2 /* GOOD */);
    else if (wordsNumber >= 10) setRobustness(3 /* ROBUST */);
    setEntropy(wordsNumber * 11);
    generatePassphrase();
  }, [wordsNumber, language]);
  const generatePassword = () => {
    let passwordChars = "";
    let password2 = [];
    if (lowercaseLetters) {
      passwordChars += LOWERCASE_LETTERS;
      let index = Math.floor(Math.random() * length);
      while (password2[index]) {
        index = Math.floor(Math.random() * length);
      }
      password2[index] = LOWERCASE_LETTERS.charAt(Math.floor(Math.random() * LOWERCASE_LETTERS.length));
    }
    if (capitalLetters) {
      passwordChars += CAPITAL_LETTERS;
      let index = Math.floor(Math.random() * length);
      while (password2[index]) {
        index = Math.floor(Math.random() * length);
      }
      password2[index] = CAPITAL_LETTERS.charAt(Math.floor(Math.random() * CAPITAL_LETTERS.length));
    }
    if (numbers) {
      passwordChars += NUMBERS;
      let index = Math.floor(Math.random() * length);
      while (password2[index]) {
        index = Math.floor(Math.random() * length);
      }
      password2[index] = NUMBERS.charAt(Math.floor(Math.random() * NUMBERS.length));
    }
    if (specialCharacters) {
      passwordChars += SPECIAL_CHARS;
      let index = Math.floor(Math.random() * length);
      while (password2[index]) {
        index = Math.floor(Math.random() * length);
      }
      password2[index] = SPECIAL_CHARS.charAt(Math.floor(Math.random() * SPECIAL_CHARS.length));
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      if (!password2[i]) password2[i] = passwordChars.charAt(randomIndex);
    }
    setPassword(password2.join(""));
  };
  const generatePassphrase = () => {
    const mnemonic = (0, import_bip39.generateMnemonic)(256);
    setPassphrase(mnemonic.split(" ").slice(0, wordsNumber).join(" "));
  };
  (0, import_react22.useEffect)(() => {
    setCopied(false);
  }, [password, passphrase, type]);
  (0, import_react22.useEffect)(() => {
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
  }, [type, length, lowercaseLetters, capitalLetters, numbers, specialCharacters, wordsNumber, language]);
  const getStrengthInfo = () => {
    switch (robustness) {
      case 0 /* BAD */:
        return {
          label: TRAD.veryWeak[locale],
          color: "danger"
        };
      case 1 /* MINIMAL */:
        return {
          label: TRAD.weak[locale],
          color: "warning"
        };
      case 2 /* GOOD */:
        return {
          label: TRAD.strong[locale],
          color: "success"
        };
      case 3 /* ROBUST */:
        return {
          label: TRAD.veryStrong[locale],
          color: "primary"
        };
      default:
        return {
          label: "",
          color: ""
        };
    }
  };
  (0, import_react22.useEffect)(() => {
    setEntropy(import_password_entropy.default.calculate(password));
  }, [password]);
  (0, import_react22.useEffect)(() => {
    if (entropy < 36) return setRobustness(0 /* BAD */);
    else if (entropy < 60) return setRobustness(1 /* MINIMAL */);
    else if (entropy < 120) return setRobustness(2 /* GOOD */);
    else return setRobustness(3 /* ROBUST */);
  }, [entropy]);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col gap-4 w-full p-4 rounded-lg bg-background shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Switch, { isSelected: type === 0 /* PASSWORD */, onValueChange: () => setType(type === 0 /* PASSWORD */ ? 1 /* PASSPHRASE */ : 0 /* PASSWORD */), children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
      type === 0 /* PASSWORD */ ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_RiLockPasswordFill.RiLockPasswordFill, {}) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_BiKey.BiKey, {}),
      type === 0 /* PASSWORD */ ? TRAD.password[locale] : TRAD.passphrase[locale]
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Tooltip, { content: TRAD.clickToCopy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "div",
      {
        className: `cursor-pointer flex flex-row justify-between items-center gap-4 p-4 border rounded-lg transition-colors ${copied ? "border-success bg-success bg-opacity-10" : "border-default-200 hover:bg-default-100"}`,
        onClick: () => {
          navigator.clipboard.writeText(type === 0 /* PASSWORD */ ? password : passphrase);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "font-mono text-lg break-all", children: type === 0 /* PASSWORD */ ? password : passphrase }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex-shrink-0 flex items-center gap-1 text-sm", children: copied ? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("span", { className: "flex items-center gap-1 text-success", children: [
            TRAD.copied[locale],
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_BiCheck.BiCheck, { size: 18 })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_BiCopy2.BiCopy, { size: 18, className: "text-default-500" }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex justify-between items-center text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "font-medium", children: TRAD.passwordStrength[locale] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Tooltip, { content: TRAD.infoTooltip[locale], children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Button, { isIconOnly: true, size: "sm", variant: "light", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_BsInfoCircleFill.BsInfoCircleFill, { className: "text-default-400" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Chip, { size: "sm", color: getStrengthInfo().color, variant: "flat", children: getStrengthInfo().label })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_react21.Progress,
        {
          size: "md",
          "aria-label": "Password strength",
          classNames: {
            indicator: `${entropy <= 35 ? "bg-danger" : ""} ${entropy > 35 && entropy <= 59 ? "bg-warning" : ""} ${entropy > 59 && entropy < 120 ? "bg-success" : ""} ${entropy >= 120 ? "bg-primary" : ""}`
          },
          value: entropy,
          maxValue: 120,
          minValue: 0,
          showValueLabel: false
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "border border-default-200 rounded-lg p-4 bg-default-50", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h4", { className: "text-sm font-medium mb-3", children: TRAD.options[locale] }),
      type === 0 /* PASSWORD */ ? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          import_react21.Slider,
          {
            label: `${TRAD.charNumber[locale]} (${length})`,
            minValue: 8,
            maxValue: 128,
            value: length,
            onChange: (value) => setLength(value),
            onChangeEnd: generatePassword,
            size: "sm",
            classNames: {
              filler: "bg-primary"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Checkbox, { color: "primary", isSelected: lowercaseLetters, onValueChange: (value) => setLowercaseLetters(value), children: "a-z" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Checkbox, { color: "primary", isSelected: capitalLetters, onValueChange: (value) => setCapitalLetters(value), children: "A-Z" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Checkbox, { color: "primary", isSelected: numbers, onValueChange: (value) => setNumbers(value), children: "0-9" }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Checkbox, { color: "primary", isSelected: specialCharacters, onValueChange: (value) => setSpecialCharacters(value), children: SPECIAL_CHARS })
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          import_react21.Slider,
          {
            label: `${TRAD.wordNumber[locale]} (${wordsNumber})`,
            minValue: 4,
            maxValue: 24,
            value: wordsNumber,
            onChange: (value) => setWordsNumber(value),
            onChangeEnd: generatePassphrase,
            size: "sm",
            classNames: {
              filler: "bg-primary"
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_react21.Select, { label: TRAD.language[locale], selectedKeys: [language], size: "sm", className: "max-w-xs", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.SelectItem, { onPress: () => setLanguage("fr"), children: TRAD.french[locale] }, "fr"),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.SelectItem, { onPress: () => setLanguage("en"), children: TRAD.english[locale] }, "en")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex justify-end mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react21.Button, { startContent: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_FiRefreshCcw.FiRefreshCcw, {}), onPress: () => type === 0 /* PASSWORD */ ? generatePassword() : generatePassphrase(), color: "primary", size: "sm", children: TRAD.regenerate[locale] }) })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ColumnType,
  ConfirmModalContextProvider,
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
  useConfirmModal,
  useInputModalContext
});
//# sourceMappingURL=index.js.map