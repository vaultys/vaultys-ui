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
var __pow = Math.pow;
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

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/lib/esm/iconsManifest.js
var IconsManifest;
var init_iconsManifest = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/lib/esm/iconsManifest.js"() {
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

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/lib/esm/iconContext.js
var import_react3, DefaultContext, IconContext;
var init_iconContext = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/lib/esm/iconContext.js"() {
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

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/lib/esm/iconBase.js
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
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/lib/esm/iconBase.js"() {
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

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/lib/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DefaultContext: () => DefaultContext,
  GenIcon: () => GenIcon,
  IconBase: () => IconBase,
  IconContext: () => IconContext,
  IconsManifest: () => IconsManifest
});
var init_esm = __esm({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/lib/esm/index.js"() {
    "use strict";
    init_iconsManifest();
    init_iconBase();
    init_iconContext();
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiCopy.js
var require_BiCopy = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiCopy.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiCopy = function BiCopy4(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiHide.js
var require_BiHide = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiHide.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiHide = function BiHide5(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5zM16.972 15.558l-2.28-2.28C14.882 12.888 15 12.459 15 12c0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501C9.796 7.193 10.814 7 12 7c5.351 0 7.424 3.846 7.926 5C19.624 12.692 18.76 14.342 16.972 15.558z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiShow.js
var require_BiShow = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiShow.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiShow = function BiShow5(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z" } }, { "tag": "path", "attr": { "d": "M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684 L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsGearFill.js
var require_BsGearFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsGearFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsGearFill = function BsGearFill2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 100-5.86 2.929 2.929 0 000 5.858z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/io/IoMdArrowDropdown.js
var require_IoMdArrowDropdown = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/io/IoMdArrowDropdown.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.IoMdArrowDropdown = function IoMdArrowDropdown2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M128 192l128 128 128-128z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaCaretDown.js
var require_FaCaretDown = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaCaretDown.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaCaretDown = function FaCaretDown2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsSearch.js
var require_BsSearch = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsSearch.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsSearch = function BsSearch2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z", "clipRule": "evenodd" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/io/IoMdClose.js
var require_IoMdClose = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/io/IoMdClose.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.IoMdClose = function IoMdClose2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiCheck.js
var require_BiCheck = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiCheck.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiCheck = function BiCheck3(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M10 15.586L6.707 12.293 5.293 13.707 10 18.414 19.707 8.707 18.293 7.293z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fi/FiRefreshCcw.js
var require_FiRefreshCcw = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fi/FiRefreshCcw.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FiRefreshCcw = function FiRefreshCcw4(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "polyline", "attr": { "points": "1 4 1 10 7 10" } }, { "tag": "polyline", "attr": { "points": "23 20 23 14 17 14" } }, { "tag": "path", "attr": { "d": "M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/ri/RiLockPasswordFill.js
var require_RiLockPasswordFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/ri/RiLockPasswordFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.RiLockPasswordFill = function RiLockPasswordFill2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "g", "attr": {}, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1zm-2 0V7a4 4 0 1 0-8 0v1h8zm-5 6v2h2v-2h-2zm-4 0v2h2v-2H7zm8 0v2h2v-2h-2z" } }] }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiKey.js
var require_BiKey = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiKey.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiKey = function BiKey3(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M7,17c2.414,0,4.435-1.721,4.898-4H14v2h2v-2h2v3h2v-3h1v-2h-9.102C11.435,8.721,9.414,7,7,7c-2.757,0-5,2.243-5,5 S4.243,17,7,17z M7,9c1.654,0,3,1.346,3,3s-1.346,3-3,3s-3-1.346-3-3S5.346,9,7,9z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsInfoCircleFill.js
var require_BsInfoCircleFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsInfoCircleFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsInfoCircleFill = function BsInfoCircleFill4(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M8 16A8 8 0 108 0a8 8 0 000 16zm.93-9.412l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 100-2 1 1 0 000 2z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaRegCopy.js
var require_FaRegCopy = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaRegCopy.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaRegCopy = function FaRegCopy3(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaExpand.js
var require_FaExpand = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaExpand.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaExpand = function FaExpand2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaRegEdit.js
var require_FaRegEdit = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaRegEdit.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaRegEdit = function FaRegEdit2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 576 512" }, "child": [{ "tag": "path", "attr": { "d": "M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaRegSave.js
var require_FaRegSave = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaRegSave.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaRegSave = function FaRegSave2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaTimes.js
var require_FaTimes = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaTimes.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaTimes = function FaTimes2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 352 512" }, "child": [{ "tag": "path", "attr": { "d": "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaInfoCircle.js
var require_FaInfoCircle = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaInfoCircle.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaInfoCircle = function FaInfoCircle2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaLock.js
var require_FaLock = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaLock.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaLock = function FaLock2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/md/MdFingerprint.js
var require_MdFingerprint = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/md/MdFingerprint.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.MdFingerprint = function MdFingerprint2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsTextLeft.js
var require_BsTextLeft = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsTextLeft.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsTextLeft = function BsTextLeft2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M2 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/ai/AiOutlineUser.js
var require_AiOutlineUser = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/ai/AiOutlineUser.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.AiOutlineUser = function AiOutlineUser2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaCog.js
var require_FaCog = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/fa/FaCog.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.FaCog = function FaCog2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsFolderFill.js
var require_BsFolderFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsFolderFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsFolderFill = function BsFolderFill2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M9.828 3h3.982a2 2 0 011.992 2.181l-.637 7A2 2 0 0113.174 14H2.826a2 2 0 01-1.991-1.819l-.637-7a1.99 1.99 0 01.342-1.31L.5 3a2 2 0 012-2h3.672a2 2 0 011.414.586l.828.828A2 2 0 009.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 006.172 2H2.5a1 1 0 00-1 .981l.006.139z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsPersonFill.js
var require_BsPersonFill = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bs/BsPersonFill.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BsPersonFill = function BsPersonFill2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 16 16", "fill": "currentColor" }, "child": [{ "tag": "path", "attr": { "fillRule": "evenodd", "d": "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z", "clipRule": "evenodd" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/ai/AiFillLock.js
var require_AiFillLock = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/ai/AiFillLock.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.AiFillLock = function AiFillLock2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z" } }] })(props);
    };
  }
});

// node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiChevronDown.js
var require_BiChevronDown = __commonJS({
  "node_modules/.pnpm/@react-icons+all-files@4.1.0_react@19.2.0/node_modules/@react-icons/all-files/bi/BiChevronDown.js"(exports2, module2) {
    "use strict";
    var GenIcon2 = (init_esm(), __toCommonJS(esm_exports)).GenIcon;
    module2.exports.BiChevronDown = function BiChevronDown2(props) {
      return GenIcon2({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z" } }] })(props);
    };
  }
});

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  AppPassword: () => AppPassword,
  ColumnType: () => ColumnType,
  ConfirmModalContextProvider: () => ConfirmModalContextProvider,
  InputModalContextProvider: () => InputModalContextProvider,
  InputPassword: () => InputPassword,
  Loader: () => Loader,
  ManagePasswords: () => ManagePasswords,
  PasswordGenerator: () => PasswordGenerator,
  PasswordType: () => PasswordType,
  QrCodeElement: () => QrCodeElement,
  SearchBar: () => SearchBar,
  SelectLanguage: () => SelectLanguage,
  SelectPassword: () => SelectPassword,
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
            className: "text-xl cursor-pointer",
            onClick: () => {
              if (value) {
                navigator.clipboard.writeText(value);
              }
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "focus:outline-none", type: "button", onClick: () => setShow(!show), children: show ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_BiShow.BiShow, { className: "text-xl cursor-pointer " }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_BiHide.BiHide, { className: "text-xl cursor-pointer " }) })
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
    content && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react8.Modal, { isOpen, onClose, backdrop: "blur", className: content.className, placement: "center", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react8.ModalContent, { children: [
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
            value: val
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react8.ModalFooter, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react8.Button, { color: "success", className: "text-white", onPress: () => handleOk(), "data-test": "confirm-dialog-accept", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-ellipsis truncate ...", children: content.acceptText }) }),
        content.type !== "info" && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react8.Button, { color: "danger", className: "text-white", onPress: () => handleCancel(), "data-test": "confirm-dialog-deny", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-ellipsis truncate ...", children: content.declineText }) })
      ] })
    ] }) })
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
      className: `bg-background first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] py-2 px-2 ${sortColumn && "cursor-pointer"} ${className}`,
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
var WindowScreen = ({ children, icon, title = "SmartLink", size = "lg" }) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex flex-col w-full p-2 h-screen justify-center items-center bg-white/50 backdrop-blur", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
  "div",
  {
    className: `max-h-full  shadow-lg w-full shadow-black/40 rounded-t-xl rounded-b overflow-clip ${size === "sm" && "max-w-xl"} ${size === "md" && "max-w-3xl"} ${size === "lg" && "max-w-5xl"} ${size === "xl" && "max-w-7xl"}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-row justify-between text-xl p-3 w-full bg-brand", children: [
        icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { className: "h-8 rounded", src: icon }),
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "w-full text-center", children: title }),
        icon && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("img", { className: "h-8 opacity-0", src: icon })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "overflow-auto max-h-full flex flex-col gap-5 justify-center items-center shadow-inner border-2 border-background w-full bg-background", children })
    ]
  }
) });

// src/components/SearchBar/index.tsx
var import_react18 = require("react");
var import_BsSearch = __toESM(require_BsSearch());
var import_IoMdClose = __toESM(require_IoMdClose());
var import_jsx_runtime17 = require("react/jsx-runtime");
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
    closeOnSelect = false,
    onFocusChanged,
    debounceTime,
    onSearch,
    onKeyDown,
    size = "md"
  } = _b, props = __objRest(_b, [
    "onKeyUp",
    "onClick",
    "className",
    "onChange",
    "value",
    "placeholder",
    "defaultHide",
    "children",
    "closeOnSelect",
    "onFocusChanged",
    "debounceTime",
    "onSearch",
    "onKeyDown",
    "size"
  ]);
  const [hide, setHide] = (0, import_react18.useState)(defaultHide);
  const [isFocused, setIsFocused] = (0, import_react18.useState)(false);
  const inputRef = (0, import_react18.useRef)(null);
  const childRef = (0, import_react18.useRef)(null);
  const [inputValue, setInputValue] = (0, import_react18.useState)(value);
  const debounceTimerRef = (0, import_react18.useRef)(null);
  const previousValueRef = (0, import_react18.useRef)(value);
  const sizeStyles = {
    xs: {
      input: "py-1 pl-8 pr-7 text-xs",
      searchIcon: "left-2 w-3 h-3",
      closeIcon: "w-3 h-3",
      closeButton: "right-2"
    },
    sm: {
      input: "py-2 pl-10 pr-8 text-sm",
      searchIcon: "left-2.5 w-4 h-4",
      closeIcon: "w-3.5 h-3.5",
      closeButton: "right-2.5"
    },
    md: {
      input: "py-3 pl-12 pr-10 text-sm md:text-base",
      searchIcon: "left-3 w-5 h-5 md:w-6 md:h-6",
      closeIcon: "w-4 h-4",
      closeButton: "right-3"
    },
    lg: {
      input: "py-3.5 pl-14 pr-12 text-base md:text-lg",
      searchIcon: "left-4 w-6 h-6 md:w-7 md:h-7",
      closeIcon: "w-5 h-5",
      closeButton: "right-4"
    },
    xl: {
      input: "py-4 pl-16 pr-14 text-lg md:text-xl",
      searchIcon: "left-5 w-7 h-7 md:w-8 md:h-8",
      closeIcon: "w-6 h-6",
      closeButton: "right-5"
    }
  };
  (0, import_react18.useEffect)(() => {
    if (debounceTime !== void 0 && onSearch === void 0) {
      console.warn("If debounceTime is provided, onSearch should also be provided");
    }
  }, [debounceTime, onSearch]);
  const handleSearchIconClick = () => {
    if (defaultHide) setHide(!hide);
    else if (inputRef.current) inputRef.current.focus();
  };
  const handleClearSearch = () => {
    setInputValue("");
    if (onChange) onChange("");
    if (onSearch) onSearch("");
    if (inputRef.current) inputRef.current.focus();
    previousValueRef.current = "";
  };
  (0, import_react18.useEffect)(() => {
    setInputValue(value);
  }, [value]);
  (0, import_react18.useEffect)(() => {
    if (debounceTime && onSearch && inputValue !== previousValueRef.current) {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      debounceTimerRef.current = setTimeout(() => {
        onSearch(inputValue);
        previousValueRef.current = inputValue;
        debounceTimerRef.current = null;
      }, debounceTime);
      return () => {
        if (debounceTimerRef.current) {
          clearTimeout(debounceTimerRef.current);
        }
      };
    }
  }, [inputValue, debounceTime, onSearch]);
  (0, import_react18.useEffect)(() => {
    setTimeout(() => {
      if (defaultHide && !hide && inputRef.current) {
        inputRef.current.focus();
      }
    }, 300);
  }, [hide, defaultHide]);
  (0, import_react18.useEffect)(() => {
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
  (0, import_react18.useEffect)(() => {
    if (onFocusChanged) {
      onFocusChanged(isFocused);
    }
  }, [isFocused, onFocusChanged]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    __spreadProps(__spreadValues({}, props), {
      className: `${className} group relative transition-all duration-300 ease-in-out rounded-xl
      ${!hide && children && isFocused ? "shadow-lg !rounded-b-none" : "shadow hover:shadow-md"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: `relative flex flex-row items-center ${hide ? "justify-end" : ""} overflow-hidden`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            import_BsSearch.BsSearch,
            {
              className: `absolute z-20 ${sizeStyles[size].searchIcon} cursor-pointer text-gray-400 hover:text-gray-700 transition-colors`,
              onClick: handleSearchIconClick,
              "aria-label": "Search"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "input",
            {
              ref: inputRef,
              placeholder,
              "data-test": "search",
              value: inputValue,
              autoComplete: "off",
              accessKey: "shift+e",
              className: `w-full rounded-xl ${sizeStyles[size].input} bg-transparent focus-visible:outline-none
          border border-transparent focus:border-gray-300 hover:border-gray-200
          transform transition-all duration-300
          ${hide ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"}`,
              onKeyUp,
              onKeyDown,
              onChange: (e) => {
                const newValue = e.target.value;
                setInputValue(newValue);
                if (onChange) onChange(newValue);
              },
              onClick,
              onFocus: () => setIsFocused(true)
            }
          ),
          inputValue && !hide && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
            "button",
            {
              type: "button",
              onClick: handleClearSearch,
              className: `absolute ${sizeStyles[size].closeButton} z-20 p-1 rounded-full hover:bg-gray-100 transition-colors`,
              "aria-label": "Clear search",
              children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_IoMdClose.IoMdClose, { className: `${sizeStyles[size].closeIcon} text-gray-500 hover:text-gray-700` })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_react19 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
var Loader = ({ message, img }) => {
  const [show, setShow] = (0, import_react19.useState)(false);
  setTimeout(() => setShow(true), 200);
  if (show) {
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "p-5 flex flex-row items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-col items-center gap-5 animate-pulse", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("img", { className: "h-20", src: img }),
      message
    ] }) });
  } else return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_jsx_runtime18.Fragment, {});
};

// src/components/SelectLanguage/index.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
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
  const Flag = ({ lc, emoji }) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "div",
    {
      className: `${size === "sm" && "text-sm"} ${size === "md" && "text-md"} ${size === "lg" && "text-lg"} ${size === "xl" && "text-xl"} ${size === "2xl" && "text-2xl"} ${size === "3xl" && "text-3xl"} ${size === "4xl" && "text-4xl"} ${size === "5xl" && "text-5xl"} cursor-pointer px-1 ${currentValue == lc ? "" : "opacity-20"}`,
      onClick: () => onLanguageClicked(lc),
      "data-test": lc,
      children: emoji
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "flex flex-row gap-1", children: languages.map((language) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Flag, { lc: language, emoji: emojis[language] })) });
};

// src/components/PasswordGenerator/index.tsx
var import_react20 = require("@heroui/react");
var import_bip39 = require("bip39");
var import_react21 = require("react");
var import_BiCopy2 = __toESM(require_BiCopy());
var import_BiCheck = __toESM(require_BiCheck());
var import_FiRefreshCcw = __toESM(require_FiRefreshCcw());
var import_RiLockPasswordFill = __toESM(require_RiLockPasswordFill());
var import_BiKey = __toESM(require_BiKey());
var import_BsInfoCircleFill = __toESM(require_BsInfoCircleFill());
var import_password_entropy = __toESM(require("@rabbit-company/password-entropy"));
var import_jsx_runtime20 = require("react/jsx-runtime");
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
  const [length, setLength] = (0, import_react21.useState)((_a = passwordConfig == null ? void 0 : passwordConfig.length) != null ? _a : 16);
  const [numbers, setNumbers] = (0, import_react21.useState)((_b = passwordConfig == null ? void 0 : passwordConfig.numbers) != null ? _b : true);
  const [capitalLetters, setCapitalLetters] = (0, import_react21.useState)((_c = passwordConfig == null ? void 0 : passwordConfig.capitalLetters) != null ? _c : true);
  const [lowercaseLetters, setLowercaseLetters] = (0, import_react21.useState)((_d = passwordConfig == null ? void 0 : passwordConfig.lowercaseLetters) != null ? _d : true);
  const [specialCharacters, setSpecialCharacters] = (0, import_react21.useState)((_e = passwordConfig == null ? void 0 : passwordConfig.specialCharacters) != null ? _e : true);
  const [type, setType] = (0, import_react21.useState)(passwordType != null ? passwordType : 0 /* PASSWORD */);
  const [robustness, setRobustness] = (0, import_react21.useState)(2 /* GOOD */);
  const [entropy, setEntropy] = (0, import_react21.useState)(75);
  const [copied, setCopied] = (0, import_react21.useState)(false);
  const [password, setPassword] = (0, import_react21.useState)("");
  const [wordsNumber, setWordsNumber] = (0, import_react21.useState)((_f = passphraseConfig == null ? void 0 : passphraseConfig.wordNumber) != null ? _f : 12);
  const [language, setLanguage] = (0, import_react21.useState)((_g = passphraseConfig == null ? void 0 : passphraseConfig.language) != null ? _g : "en");
  const [passphrase, setPassphrase] = (0, import_react21.useState)("");
  (0, import_react21.useEffect)(() => {
    if (!numbers && !capitalLetters && !lowercaseLetters && !specialCharacters) setLowercaseLetters(true);
    else {
      generatePassword();
    }
  }, [numbers, capitalLetters, lowercaseLetters, specialCharacters, length]);
  (0, import_react21.useEffect)(() => {
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
  (0, import_react21.useEffect)(() => {
    setCopied(false);
  }, [password, passphrase, type]);
  (0, import_react21.useEffect)(() => {
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
  (0, import_react21.useEffect)(() => {
    setEntropy(import_password_entropy.default.calculate(password));
  }, [password]);
  (0, import_react21.useEffect)(() => {
    if (entropy < 36) return setRobustness(0 /* BAD */);
    else if (entropy < 60) return setRobustness(1 /* MINIMAL */);
    else if (entropy < 120) return setRobustness(2 /* GOOD */);
    else return setRobustness(3 /* ROBUST */);
  }, [entropy]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col gap-4 w-full p-4 rounded-lg bg-background shadow-sm", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      import_react20.Switch,
      {
        isSelected: type === 0 /* PASSWORD */,
        onValueChange: () => setType(type === 0 /* PASSWORD */ ? 1 /* PASSPHRASE */ : 0 /* PASSWORD */),
        "data-test": "password-generator-select-type-switch",
        children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
          type === 0 /* PASSWORD */ ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_RiLockPasswordFill.RiLockPasswordFill, {}) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_BiKey.BiKey, {}),
          type === 0 /* PASSWORD */ ? TRAD.password[locale] : TRAD.passphrase[locale]
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react20.Tooltip, { content: TRAD.clickToCopy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
      "div",
      {
        className: `cursor-pointer flex flex-row justify-between items-center gap-4 p-4 border rounded-lg transition-colors ${copied ? "border-success bg-success bg-opacity-10" : "border-default-200 hover:bg-default-100"}`,
        "data-test": "password-generator-password-area",
        onClick: () => {
          navigator.clipboard.writeText(type === 0 /* PASSWORD */ ? password : passphrase);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "font-mono text-lg break-all", children: type === 0 /* PASSWORD */ ? password : passphrase }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex-shrink-0 flex items-center gap-1 text-sm", children: copied ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("span", { className: "flex items-center gap-1 text-success", children: [
            TRAD.copied[locale],
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_BiCheck.BiCheck, { size: 18 })
          ] }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_BiCopy2.BiCopy, { size: 18, className: "text-default-500" }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex justify-between items-center text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "font-medium", children: TRAD.passwordStrength[locale] }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react20.Tooltip, { content: TRAD.infoTooltip[locale], children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react20.Button, { isIconOnly: true, size: "sm", variant: "light", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_BsInfoCircleFill.BsInfoCircleFill, { className: "text-default-400" }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react20.Chip, { size: "sm", color: getStrengthInfo().color, variant: "flat", children: getStrengthInfo().label })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
        import_react20.Progress,
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
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "border border-default-200 rounded-lg p-4 bg-default-50", "data-test": "password-generator-password-options", children: [
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("h4", { className: "text-sm font-medium mb-3", children: TRAD.options[locale] }),
      type === 0 /* PASSWORD */ ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          import_react20.Slider,
          {
            "data-test": "password-generator-password-length",
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
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_react20.Checkbox,
            {
              color: "primary",
              isSelected: lowercaseLetters,
              onValueChange: (value) => setLowercaseLetters(value),
              "data-test": "password-generator-password-lowercase",
              children: "a-z"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_react20.Checkbox,
            {
              color: "primary",
              isSelected: capitalLetters,
              onValueChange: (value) => setCapitalLetters(value),
              "data-test": "password-generator-password-uppercase",
              children: "A-Z"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react20.Checkbox, { color: "primary", isSelected: numbers, onValueChange: (value) => setNumbers(value), "data-test": "password-generator-password-numbers", children: "0-9" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
            import_react20.Checkbox,
            {
              color: "primary",
              isSelected: specialCharacters,
              onValueChange: (value) => setSpecialCharacters(value),
              "data-test": "password-generator-password-symbols",
              children: SPECIAL_CHARS
            }
          )
        ] })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          import_react20.Slider,
          {
            "data-test": "password-generator-passphrase-length",
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
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_react20.Select, { label: TRAD.language[locale], selectedKeys: [language], size: "sm", className: "max-w-xs", "data-test": "password-generator-passphrase-language", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react20.SelectItem, { onPress: () => setLanguage("fr"), children: TRAD.french[locale] }, "fr"),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_react20.SelectItem, { onPress: () => setLanguage("en"), children: TRAD.english[locale] }, "en")
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("div", { className: "flex justify-end mt-2", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      import_react20.Button,
      {
        startContent: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_FiRefreshCcw.FiRefreshCcw, {}),
        onPress: () => type === 0 /* PASSWORD */ ? generatePassword() : generatePassphrase(),
        color: "primary",
        size: "sm",
        "data-test": "password-generator-regenerate-button",
        children: TRAD.regenerate[locale]
      }
    ) })
  ] });
};

// src/components/SelectPassword/index.tsx
var import_react22 = require("@heroui/react");
var import_react23 = require("react");
var import_BiCopy3 = __toESM(require_BiCopy());
var import_BiCheck2 = __toESM(require_BiCheck());
var import_BiHide2 = __toESM(require_BiHide());
var import_BiShow2 = __toESM(require_BiShow());
var import_FiRefreshCcw2 = __toESM(require_FiRefreshCcw());
var import_BsInfoCircleFill2 = __toESM(require_BsInfoCircleFill());
var import_password_entropy2 = __toESM(require("@rabbit-company/password-entropy"));
var import_jsx_runtime21 = require("react/jsx-runtime");
var CAPITAL_LETTERS2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LOWERCASE_LETTERS2 = "abcdefghijklmnopqrstuvwxyz";
var NUMBERS2 = "0123456789";
var SPECIAL_CHARS2 = `.,;:?!'"@#%&*+-_=()[]{}<>/\\|~^`;
var TRAD2 = {
  passwordStrength: {
    fr: "Force du mot de passe",
    en: "Password strength",
    es: "Fuerza de la contrase\xF1a",
    de: "Passwortst\xE4rke",
    zh: "\u5BC6\u7801\u5F3A\u5EA6"
  },
  veryWeak: {
    fr: "Tr\xE8s faible",
    en: "Very weak",
    es: "Muy d\xE9bil",
    de: "Sehr schwach",
    zh: "\u975E\u5E38\u5F31"
  },
  weak: {
    fr: "Faible",
    en: "Weak",
    es: "D\xE9bil",
    de: "Schwach",
    zh: "\u5F31"
  },
  strong: {
    fr: "Fort",
    en: "Strong",
    es: "Fuerte",
    de: "Stark",
    zh: "\u5F3A"
  },
  veryStrong: {
    fr: "Tr\xE8s fort",
    en: "Very strong",
    es: "Muy fuerte",
    de: "Sehr stark",
    zh: "\u975E\u5E38\u5F3A"
  },
  copy: {
    fr: "Copier",
    en: "Copy",
    es: "Copiar",
    de: "Kopieren",
    zh: "\u590D\u5236"
  },
  generate: {
    fr: "G\xE9n\xE9rer",
    en: "Generate",
    es: "Generar",
    de: "Generieren",
    zh: "\u751F\u6210"
  },
  overwrite: {
    fr: "Remplacer",
    en: "Overwrite",
    es: "Sobrescribir",
    de: "\xDCberschreiben",
    zh: "\u8986\u76D6"
  },
  infoTooltip: {
    fr: "Plus vous utilisez de types de caract\xE8res et plus votre mot de passe est long, plus il est s\xE9curis\xE9.",
    en: "The more character types you use and the longer your password is, the more secure it will be.",
    es: "Cuantos m\xE1s tipos de caracteres utilice y m\xE1s largo sea su contrase\xF1a, m\xE1s seguro ser\xE1.",
    de: "Je mehr Zeichentypen Sie verwenden und je l\xE4nger Ihr Passwort ist, desto sicherer ist es.",
    zh: "\u60A8\u4F7F\u7528\u7684\u5B57\u7B26\u7C7B\u578B\u8D8A\u591A\uFF0C\u5BC6\u7801\u8D8A\u957F\uFF0C\u5BC6\u7801\u5C31\u8D8A\u5B89\u5168\u3002"
  },
  generatedPassword: {
    fr: "Mot de passe g\xE9n\xE9r\xE9",
    en: "Generated password",
    es: "Contrase\xF1a generada",
    de: "Generiertes Passwort",
    zh: "\u751F\u6210\u7684\u5BC6\u7801"
  }
};
var SelectPassword = ({
  label = "Mot de passe",
  description,
  password = "",
  onChange,
  passwordConfig = {
    length: 16,
    numbers: true,
    capitalLetters: true,
    lowercaseLetters: true,
    specialCharacters: true
  },
  locale = "fr",
  testId,
  compact = false
}) => {
  const [value, setValue] = (0, import_react23.useState)(password);
  const [showPassword, setShowPassword] = (0, import_react23.useState)(false);
  const [copied, setCopied] = (0, import_react23.useState)(false);
  const [entropy, setEntropy] = (0, import_react23.useState)(0);
  const [robustness, setRobustness] = (0, import_react23.useState)(0 /* BAD */);
  (0, import_react23.useEffect)(() => {
    setValue(password);
  }, [password]);
  (0, import_react23.useEffect)(() => {
    if (value) {
      const calculatedEntropy = import_password_entropy2.default.calculate(value);
      setEntropy(calculatedEntropy);
      if (calculatedEntropy < 36) setRobustness(0 /* BAD */);
      else if (calculatedEntropy < 60) setRobustness(1 /* MINIMAL */);
      else if (calculatedEntropy < 120) setRobustness(2 /* GOOD */);
      else setRobustness(3 /* ROBUST */);
    } else {
      setEntropy(0);
      setRobustness(0 /* BAD */);
    }
  }, [value]);
  const generatePassword = () => {
    let passwordChars = "";
    let generatedPwd = [];
    const { length, lowercaseLetters, capitalLetters, numbers, specialCharacters } = passwordConfig;
    if (lowercaseLetters) {
      passwordChars += LOWERCASE_LETTERS2;
      let index = Math.floor(Math.random() * length);
      while (generatedPwd[index]) {
        index = Math.floor(Math.random() * length);
      }
      generatedPwd[index] = LOWERCASE_LETTERS2.charAt(Math.floor(Math.random() * LOWERCASE_LETTERS2.length));
    }
    if (capitalLetters) {
      passwordChars += CAPITAL_LETTERS2;
      let index = Math.floor(Math.random() * length);
      while (generatedPwd[index]) {
        index = Math.floor(Math.random() * length);
      }
      generatedPwd[index] = CAPITAL_LETTERS2.charAt(Math.floor(Math.random() * CAPITAL_LETTERS2.length));
    }
    if (numbers) {
      passwordChars += NUMBERS2;
      let index = Math.floor(Math.random() * length);
      while (generatedPwd[index]) {
        index = Math.floor(Math.random() * length);
      }
      generatedPwd[index] = NUMBERS2.charAt(Math.floor(Math.random() * NUMBERS2.length));
    }
    if (specialCharacters) {
      passwordChars += SPECIAL_CHARS2;
      let index = Math.floor(Math.random() * length);
      while (generatedPwd[index]) {
        index = Math.floor(Math.random() * length);
      }
      generatedPwd[index] = SPECIAL_CHARS2.charAt(Math.floor(Math.random() * SPECIAL_CHARS2.length));
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      if (!generatedPwd[i]) generatedPwd[i] = passwordChars.charAt(randomIndex);
    }
    const newPassword = generatedPwd.join("");
    setValue(newPassword);
    if (onChange) onChange(newPassword);
  };
  const copyPassword = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const getStrengthInfo = () => {
    switch (robustness) {
      case 0 /* BAD */:
        return {
          label: TRAD2.veryWeak[locale],
          color: "danger"
        };
      case 1 /* MINIMAL */:
        return {
          label: TRAD2.weak[locale],
          color: "warning"
        };
      case 2 /* GOOD */:
        return {
          label: TRAD2.strong[locale],
          color: "success"
        };
      case 3 /* ROBUST */:
        return {
          label: TRAD2.veryStrong[locale],
          color: "primary"
        };
      default:
        return {
          label: "",
          color: ""
        };
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: `flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      import_react22.Input,
      {
        "data-test": testId,
        label,
        value,
        type: showPassword ? "text" : "password",
        onValueChange: (val) => {
          setValue(val);
          if (onChange) onChange(val);
        },
        description,
        size: compact ? "sm" : "md",
        classNames: {
          input: "font-mono"
        },
        endContent: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: `flex flex-row items-center ${compact ? "gap-1" : "gap-2"}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react22.Tooltip, { content: TRAD2.copy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "focus:outline-none", type: "button", onClick: () => copyPassword(value), disabled: !value, children: copied ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_BiCheck2.BiCheck, { className: `text-success ${compact ? "text-base" : "text-xl"}` }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_BiCopy3.BiCopy, { className: `cursor-pointer ${compact ? "text-base" : "text-xl"}` }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "focus:outline-none", type: "button", onClick: () => setShowPassword(!showPassword), children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_BiShow2.BiShow, { className: `cursor-pointer ${compact ? "text-base" : "text-xl"}` }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_BiHide2.BiHide, { className: `cursor-pointer ${compact ? "text-base" : "text-xl"}` }) }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react22.Tooltip, { content: TRAD2.generate[locale], children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("button", { className: "focus:outline-none", type: "button", onClick: generatePassword, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_FiRefreshCcw2.FiRefreshCcw, { className: `cursor-pointer ${compact ? "text-base" : "text-xl"}` }) }) })
        ] })
      }
    ),
    value && /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: compact ? "space-y-1" : "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: `flex justify-between items-center ${compact ? "text-xs" : "text-sm"}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: `flex items-center ${compact ? "gap-1" : "gap-2"}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "font-medium", children: TRAD2.passwordStrength[locale] }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react22.Tooltip, { content: TRAD2.infoTooltip[locale], children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react22.Button, { isIconOnly: true, size: "sm", variant: "light", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_BsInfoCircleFill2.BsInfoCircleFill, { className: `text-default-400 ${compact ? "text-xs" : ""}` }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_react22.Chip, { size: "sm", color: getStrengthInfo().color, variant: "flat", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: compact ? "text-xs" : "", children: getStrengthInfo().label }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
        import_react22.Progress,
        {
          size: compact ? "sm" : "md",
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
    ] })
  ] });
};

// src/components/AppPassword/index.tsx
var import_react28 = require("react");

// src/components/AppPassword/AppPasswordRead.tsx
var import_react24 = require("@heroui/react");
var import_react25 = require("react");
var import_FaRegCopy = __toESM(require_FaRegCopy());
var import_BiShow3 = __toESM(require_BiShow());
var import_BiHide3 = __toESM(require_BiHide());
var import_FaExpand = __toESM(require_FaExpand());
var import_FaRegEdit = __toESM(require_FaRegEdit());

// src/lib/totp.js
var import_crypto = __toESM(require("crypto"));
var import_base32_decode = __toESM(require("base32-decode"));
function generateHOTP(secret, counter) {
  const decodedSecret = (0, import_base32_decode.default)(secret, "RFC4648");
  const buffer = Buffer.alloc(8);
  for (let i = 0; i < 8; i++) {
    buffer[7 - i] = counter & 255;
    counter = counter >> 8;
  }
  const hmac = import_crypto.default.createHmac("sha1", Buffer.from(decodedSecret));
  hmac.update(buffer);
  const hmacResult = hmac.digest();
  const offset = hmacResult[hmacResult.length - 1] & 15;
  const code = (hmacResult[offset] & 127) << 24 | (hmacResult[offset + 1] & 255) << 16 | (hmacResult[offset + 2] & 255) << 8 | hmacResult[offset + 3] & 255;
  return `${code % __pow(10, 6)}`.padStart(6, "0");
}
function generateTOTP(secret, window = 0) {
  const counter = Math.floor(Date.now() / 3e4);
  return generateHOTP(secret, counter + window);
}

// src/components/AppPassword/translations.ts
var TRAD3 = {
  credentials: {
    fr: "Identifiants",
    en: "Credentials",
    es: "Credenciales",
    de: "Anmeldeinformationen",
    zh: "\u51ED\u636E"
  },
  username: {
    fr: "Nom d'utilisateur",
    en: "Username",
    es: "Nombre de usuario",
    de: "Benutzername",
    zh: "\u7528\u6237\u540D"
  },
  password: {
    fr: "Mot de passe",
    en: "Password",
    es: "Contrase\xF1a",
    de: "Passwort",
    zh: "\u5BC6\u7801"
  },
  otp: {
    fr: "Code OTP",
    en: "OTP Code",
    es: "C\xF3digo OTP",
    de: "OTP-Code",
    zh: "\u4E00\u6B21\u6027\u5BC6\u7801"
  },
  copy: {
    fr: "Copier",
    en: "Copy",
    es: "Copiar",
    de: "Kopieren",
    zh: "\u590D\u5236"
  },
  copied: {
    fr: "Copi\xE9 !",
    en: "Copied!",
    es: "\xA1Copiado!",
    de: "Kopiert!",
    zh: "\u5DF2\u590D\u5236\uFF01"
  },
  secure_notes: {
    fr: "Notes s\xE9curis\xE9es",
    en: "Secure Notes",
    es: "Notas seguras",
    de: "Sichere Notizen",
    zh: "\u5B89\u5168\u7B14\u8BB0"
  },
  no_credentials: {
    fr: "Aucune donn\xE9e d'identification disponible",
    en: "No credential data available",
    es: "No hay datos de credenciales disponibles",
    de: "Keine Anmeldedaten verf\xFCgbar",
    zh: "\u6CA1\u6709\u53EF\u7528\u7684\u51ED\u636E\u6570\u636E"
  },
  invalid_totp_secret: {
    fr: "La cl\xE9 secr\xE8te TOTP est invalide.",
    en: "The TOTP secret key is invalid.",
    es: "La clave secreta TOTP no es v\xE1lida.",
    de: "Der TOTP-Geheimschl\xFCssel ist ung\xFCltig.",
    zh: "TOTP \u5BC6\u94A5\u65E0\u6548\u3002"
  },
  edit: {
    fr: "Modifier",
    en: "Edit",
    es: "Editar",
    de: "Bearbeiten",
    zh: "\u7F16\u8F91"
  },
  save: {
    fr: "Enregistrer",
    en: "Save",
    es: "Guardar",
    de: "Speichern",
    zh: "\u4FDD\u5B58"
  },
  cancel: {
    fr: "Annuler",
    en: "Cancel",
    es: "Cancelar",
    de: "Abbrechen",
    zh: "\u53D6\u6D88"
  },
  two_factor_auth: {
    fr: "Authentification \xE0 deux facteurs",
    en: "Two-Factor Authentication",
    es: "Autenticaci\xF3n de dos factores",
    de: "Zwei-Faktor-Authentifizierung",
    zh: "\u53CC\u56E0\u7D20\u8BA4\u8BC1"
  },
  show: {
    fr: "Afficher",
    en: "Show",
    es: "Mostrar",
    de: "Anzeigen",
    zh: "\u663E\u793A"
  },
  hide: {
    fr: "Masquer",
    en: "Hide",
    es: "Ocultar",
    de: "Ausblenden",
    zh: "\u9690\u85CF"
  },
  enter_username: {
    fr: "Entrez votre nom d'utilisateur ou adresse email",
    en: "Enter your username or email",
    es: "Ingrese su nombre de usuario o correo electr\xF3nico",
    de: "Geben Sie Ihren Benutzernamen oder Ihre E-Mail ein",
    zh: "\u8F93\u5165\u60A8\u7684\u7528\u6237\u540D\u6216\u7535\u5B50\u90AE\u7BB1"
  },
  enter_password: {
    fr: "Entrez votre mot de passe",
    en: "Enter your password",
    es: "Ingrese su contrase\xF1a",
    de: "Geben Sie Ihr Passwort ein",
    zh: "\u8F93\u5165\u60A8\u7684\u5BC6\u7801"
  },
  enter_totp_secret: {
    fr: "Entrez la cl\xE9 secr\xE8te TOTP",
    en: "Enter TOTP secret key",
    es: "Ingrese la clave secreta TOTP",
    de: "Geben Sie den TOTP-Geheimschl\xFCssel ein",
    zh: "\u8F93\u5165 TOTP \u5BC6\u94A5"
  },
  enter_secure_notes: {
    fr: "Entrez des informations sensibles (max 1000 caract\xE8res)",
    en: "Enter sensitive information (max 1000 characters)",
    es: "Ingrese informaci\xF3n sensible (m\xE1x. 1000 caracteres)",
    de: "Geben Sie sensible Informationen ein (max. 1000 Zeichen)",
    zh: "\u8F93\u5165\u654F\u611F\u4FE1\u606F\uFF08\u6700\u591A1000\u5B57\u7B26\uFF09"
  },
  totp_explanation: {
    fr: "L'authentification \xE0 deux facteurs (2FA) am\xE9liore la s\xE9curit\xE9 de votre compte en ajoutant une couche de protection suppl\xE9mentaire. Avec TOTP, vous pouvez remplacer Google Authenticator ou Microsoft Authenticator, et l'extension SmartLink peut automatiquement remplir les codes OTP dans les formulaires pour vous.",
    en: "Two-factor authentication (2FA) enhances your account security by adding an extra layer of protection. With TOTP, you can replace Google Authenticator or Microsoft Authenticator, and the SmartLink extension can automatically fill OTP codes in forms for you.",
    es: "La autenticaci\xF3n de dos factores (2FA) mejora la seguridad de su cuenta al agregar una capa adicional de protecci\xF3n. Con TOTP, puede reemplazar Google Authenticator o Microsoft Authenticator, y la extensi\xF3n SmartLink puede completar autom\xE1ticamente los c\xF3digos OTP en los formularios.",
    de: "Zwei-Faktor-Authentifizierung (2FA) verbessert die Sicherheit Ihres Kontos durch eine zus\xE4tzliche Schutzschicht. Mit TOTP k\xF6nnen Sie Google Authenticator oder Microsoft Authenticator ersetzen, und die SmartLink-Erweiterung kann automatisch OTP-Codes in Formularen f\xFCr Sie ausf\xFCllen.",
    zh: "\u53CC\u56E0\u7D20\u8BA4\u8BC1\uFF082FA\uFF09\u901A\u8FC7\u6DFB\u52A0\u989D\u5916\u7684\u4FDD\u62A4\u5C42\u6765\u589E\u5F3A\u60A8\u7684\u8D26\u6237\u5B89\u5168\u6027\u3002\u4F7F\u7528 TOTP\uFF0C\u60A8\u53EF\u4EE5\u66FF\u4EE3 Google Authenticator \u6216 Microsoft Authenticator\uFF0C\u800C SmartLink \u6269\u5C55\u53EF\u4EE5\u81EA\u52A8\u4E3A\u60A8\u5728\u8868\u5355\u4E2D\u586B\u5199 OTP \u4EE3\u7801\u3002"
  },
  secure_notes_explanation: {
    fr: "Les notes s\xE9curis\xE9es vous permettent de stocker en toute s\xE9curit\xE9 des informations sensibles comme des cl\xE9s API, des tokens de r\xE9cup\xE9ration, ou toute autre information confidentielle que vous souhaitez garder prot\xE9g\xE9e.",
    en: "Secure notes allow you to safely store sensitive information such as API keys, recovery tokens, or any other confidential information you want to keep protected.",
    es: "Las notas seguras le permiten almacenar de forma segura informaci\xF3n sensible como claves API, tokens de recuperaci\xF3n o cualquier otra informaci\xF3n confidencial que desee mantener protegida.",
    de: "Sichere Notizen erm\xF6glichen es Ihnen, sensible Informationen wie API-Schl\xFCssel, Wiederherstellungs-Tokens oder andere vertrauliche Informationen sicher zu speichern.",
    zh: "\u5B89\u5168\u7B14\u8BB0\u4F7F\u60A8\u80FD\u591F\u5B89\u5168\u5730\u5B58\u50A8\u654F\u611F\u4FE1\u606F\uFF0C\u5982 API \u5BC6\u94A5\u3001\u6062\u590D\u4EE4\u724C\u6216\u4EFB\u4F55\u5176\u4ED6\u60A8\u60F3\u8981\u4FDD\u62A4\u7684\u673A\u5BC6\u4FE1\u606F\u3002"
  },
  has_changes: {
    fr: "Vous avez des modifications non enregistr\xE9es",
    en: "You have unsaved changes",
    es: "Tiene cambios sin guardar",
    de: "Sie haben ungespeicherte \xC4nderungen",
    zh: "\u60A8\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539"
  },
  unsaved_changes_title: {
    fr: "Modifications non enregistr\xE9es",
    en: "Unsaved Changes",
    es: "Cambios sin guardar",
    de: "Nicht gespeicherte \xC4nderungen",
    zh: "\u672A\u4FDD\u5B58\u7684\u66F4\u6539"
  },
  unsaved_changes_message: {
    fr: "Vous avez des modifications non enregistr\xE9es",
    en: "You have unsaved changes",
    es: "Tiene cambios sin guardar",
    de: "Sie haben ungespeicherte \xC4nderungen",
    zh: "\u60A8\u6709\u672A\u4FDD\u5B58\u7684\u66F4\u6539"
  },
  unsaved_changes_description: {
    fr: "Si vous continuez, toutes vos modifications seront perdues. Voulez-vous vraiment quitter sans enregistrer ?",
    en: "If you continue, all your changes will be lost. Do you really want to leave without saving?",
    es: "Si contin\xFAa, se perder\xE1n todos sus cambios. \xBFRealmente desea salir sin guardar?",
    de: "Wenn Sie fortfahren, gehen alle Ihre \xC4nderungen verloren. M\xF6chten Sie wirklich ohne Speichern fortfahren?",
    zh: "\u5982\u679C\u60A8\u7EE7\u7EED\uFF0C\u6240\u6709\u66F4\u6539\u90FD\u5C06\u4E22\u5931\u3002\u60A8\u786E\u5B9A\u8981\u79BB\u5F00\u800C\u4E0D\u4FDD\u5B58\u5417\uFF1F"
  },
  discard: {
    fr: "Abandonner",
    en: "Discard",
    es: "Descartar",
    de: "Verwerfen",
    zh: "\u653E\u5F03"
  },
  configure_generator: {
    fr: "Configurer le g\xE9n\xE9rateur de mot de passe",
    en: "Configure password generator",
    es: "Configurar generador de contrase\xF1as",
    de: "Passwortgenerator konfigurieren",
    zh: "\u914D\u7F6E\u5BC6\u7801\u751F\u6210\u5668"
  },
  generate_password: {
    fr: "G\xE9n\xE9rer",
    en: "Generate",
    es: "Generar",
    de: "Generieren",
    zh: "\u751F\u6210"
  }
};

// src/components/AppPassword/AppPasswordRead.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_runtime22 = require("react/jsx-runtime");
var AppPasswordRead = ({ passwordData, locale, onEdit, readonly = false, compact = false }) => {
  var _a;
  const [usernameCopied, setUsernameCopied] = (0, import_react25.useState)(false);
  const [passwordCopied, setPasswordCopied] = (0, import_react25.useState)(false);
  const [otpCopied, setOtpCopied] = (0, import_react25.useState)(false);
  const [showPassword, setShowPassword] = (0, import_react25.useState)(false);
  const [otp, setOtp] = (0, import_react25.useState)();
  const [otpProgress, setOtpProgress] = (0, import_react25.useState)(0);
  const [showSecureNotes, setShowSecureNotes] = (0, import_react25.useState)(false);
  const { isOpen: secureNotesIsOpen, onOpen: secureNotesOnOpen, onClose: secureNotesOnClose } = (0, import_react24.useDisclosure)();
  const [isInvalidTotpSecret, setIsInvalidTotpSecret] = (0, import_react25.useState)(false);
  (0, import_react25.useEffect)(() => {
    if (!(passwordData == null ? void 0 : passwordData.totpSecret)) {
      setIsInvalidTotpSecret(false);
      return;
    }
    try {
      generateTOTP(passwordData.totpSecret);
      setIsInvalidTotpSecret(false);
    } catch (error) {
      setOtp(void 0);
      setIsInvalidTotpSecret(true);
      return;
    }
    const msToNextSecond = Math.ceil(Date.now() / 1e3) * 1e3 - Date.now();
    const startTimer = () => {
      try {
        const generatedOtp = generateTOTP(passwordData.totpSecret);
        setOtp(generatedOtp);
        setOtpProgress(Math.floor((Date.now() - Math.floor(Date.now() / 3e4) * 3e4) / 300));
      } catch (error) {
        setOtp(void 0);
        setIsInvalidTotpSecret(true);
      }
    };
    startTimer();
    const initialTimeout = setTimeout(() => {
      startTimer();
      const intervalId = setInterval(startTimer, 1e3);
      return () => clearInterval(intervalId);
    }, msToNextSecond);
    return () => clearTimeout(initialTimeout);
  }, [passwordData.totpSecret]);
  const handleCopyUsername = () => {
    if (passwordData.username) {
      navigator.clipboard.writeText(passwordData.username);
      setUsernameCopied(true);
      setTimeout(() => {
        setUsernameCopied(false);
      }, 3e3);
    }
  };
  const handleCopyPassword = () => {
    if (passwordData.password) {
      navigator.clipboard.writeText(passwordData.password);
      setPasswordCopied(true);
      setTimeout(() => {
        setPasswordCopied(false);
      }, 3e3);
    }
  };
  const handleCopyOtp = () => {
    if (otp) {
      navigator.clipboard.writeText(otp);
      setOtpCopied(true);
      setTimeout(() => {
        setOtpCopied(false);
      }, 3e3);
    }
  };
  const isEmptyPasswordData = !(passwordData == null ? void 0 : passwordData.username) && !(passwordData == null ? void 0 : passwordData.password) && !(passwordData == null ? void 0 : passwordData.totpSecret) && !(passwordData == null ? void 0 : passwordData.secureNotes);
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`, children: [
    isEmptyPasswordData && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Card, { className: `bg-default-50 border-none ${compact ? "p-3" : "p-6"}`, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `mb-2 ${compact ? "text-2xl" : "text-4xl mb-3"}`, children: "\u{1F512}" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: `text-default-600 ${compact ? "text-sm" : ""}`, children: TRAD3.no_credentials[locale] })
    ] }) }),
    isInvalidTotpSecret && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `bg-danger-100 text-danger rounded-lg border border-danger/20 shadow-sm ${compact ? "p-2 mb-1" : "p-4 mb-2"}`, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: compact ? "text-base" : "text-lg", children: "\u26A0\uFE0F" }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: compact ? "text-sm" : "", children: TRAD3.invalid_totp_secret[locale] })
    ] }) }),
    (passwordData == null ? void 0 : passwordData.username) && passwordData.username.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_react24.Input,
        {
          onClick: handleCopyUsername,
          readOnly: true,
          label: TRAD3.username[locale],
          value: passwordData.username,
          size: compact ? "sm" : "md",
          classNames: {
            input: "cursor-copy"
          },
          endContent: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "flex flex-row gap-2 items-center", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Tooltip, { content: TRAD3.copy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_FaRegCopy.FaRegCopy, { className: "cursor-pointer", onClick: handleCopyUsername }) }) }) })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_framer_motion.AnimatePresence, { children: usernameCopied && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_framer_motion.motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3 },
          className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg",
          children: TRAD3.copied[locale]
        }
      ) })
    ] }),
    passwordData.password && passwordData.password.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_react24.Input,
        {
          readOnly: true,
          onClick: handleCopyPassword,
          label: TRAD3.password[locale],
          type: showPassword ? "text" : "password",
          value: showPassword ? passwordData.password : "********",
          size: compact ? "sm" : "md",
          classNames: {
            input: "cursor-copy"
          },
          endContent: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Tooltip, { content: showPassword ? TRAD3.hide[locale] : TRAD3.show[locale], children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_BiHide3.BiHide, { className: "cursor-pointer", onClick: () => setShowPassword(false) }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_BiShow3.BiShow, { className: "cursor-pointer", onClick: () => setShowPassword(true) }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Tooltip, { content: TRAD3.copy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_FaRegCopy.FaRegCopy, { className: "cursor-pointer", onClick: handleCopyPassword }) }) })
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_framer_motion.AnimatePresence, { children: passwordCopied && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_framer_motion.motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3 },
          className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg",
          children: TRAD3.copied[locale]
        }
      ) })
    ] }),
    passwordData.totpSecret && !isInvalidTotpSecret && otp && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "relative", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        "div",
        {
          className: `${otpCopied ? "bg-success-50 text-success-600" : "bg-default-100"} rounded-large cursor-copy ${compact ? "p-2" : "p-4"}`,
          onClick: handleCopyOtp,
          children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `flex flex-col ${compact ? "gap-1" : "gap-2"}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: compact ? "text-sm" : "", children: TRAD3.otp[locale] }),
              passwordData.totpSecret && otpProgress !== null && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "text-xs text-default-500", children: [
                30 - Math.floor(otpProgress / 3.333),
                "s"
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex justify-center items-center", children: [
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("div", { className: `font-mono tracking-wider ${compact ? "text-lg px-2 py-1" : "text-2xl px-4 py-2"}`, children: otp ? ((_a = otp.match(/.{1,3}/g)) == null ? void 0 : _a.join(" ")) || otp : "" }),
              /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Tooltip, { content: TRAD3.copy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: `p-1 rounded-md hover:bg-default-200 transition-colors ${compact ? "ml-1" : "ml-2"}`, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_FaRegCopy.FaRegCopy, { className: `cursor-pointer ${compact ? "text-sm" : ""}`, onClick: handleCopyOtp }) }) })
            ] }) }),
            passwordData.totpSecret && otpProgress !== null && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              import_react24.Progress,
              {
                "aria-label": "OTP Timer",
                size: compact ? "sm" : "md",
                value: 100 - otpProgress,
                color: "secondary",
                className: compact ? "" : "mt-1",
                showValueLabel: false
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_framer_motion.AnimatePresence, { children: otpCopied && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_framer_motion.motion.div,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.3 },
          className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg",
          children: TRAD3.copied[locale]
        }
      ) })
    ] }),
    passwordData.secureNotes && passwordData.secureNotes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      import_react24.Textarea,
      {
        readOnly: true,
        maxRows: compact ? 2 : 3,
        minRows: compact ? 2 : 3,
        label: TRAD3.secure_notes[locale],
        value: showSecureNotes ? passwordData.secureNotes : "********",
        size: compact ? "sm" : "md",
        className: "hover:border-primary focus:border-primary transition-all",
        endContent: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Tooltip, { content: showSecureNotes ? TRAD3.hide[locale] : TRAD3.show[locale], children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: showSecureNotes ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_BiHide3.BiHide, { className: "cursor-pointer", onClick: () => setShowSecureNotes(false) }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_BiShow3.BiShow, { className: "cursor-pointer", onClick: () => setShowSecureNotes(true) }) }) }),
          passwordData.secureNotes.length > 100 && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Tooltip, { content: TRAD3.secure_notes[locale], children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_FaExpand.FaExpand, { className: "cursor-pointer", onClick: () => secureNotesOnOpen() }) }) })
        ] })
      }
    ),
    !readonly && /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Button, { color: "primary", variant: "flat", startContent: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_FaRegEdit.FaRegEdit, {}), onPress: onEdit, className: compact ? "mt-1" : "mt-2", size: compact ? "md" : "lg", fullWidth: true, children: TRAD3.edit[locale] }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
      import_react24.Modal,
      {
        backdrop: "blur",
        classNames: {
          base: "bg-background",
          header: "border-b border-divider",
          footer: "border-t border-divider",
          body: "py-6"
        },
        scrollBehavior: "inside",
        isOpen: secureNotesIsOpen,
        onClose: secureNotesOnClose,
        children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_react24.ModalContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.ModalHeader, { children: TRAD3.secure_notes[locale] }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.ModalBody, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react24.Textarea, { readOnly: true, label: TRAD3.secure_notes[locale], value: passwordData.secureNotes }) })
        ] })
      }
    )
  ] });
};
var AppPasswordRead_default = AppPasswordRead;

// src/components/AppPassword/AppPasswordEdit.tsx
var import_react26 = require("react");
var import_react27 = require("@heroui/react");
var import_FaRegSave = __toESM(require_FaRegSave());
var import_FaTimes = __toESM(require_FaTimes());
var import_BiShow4 = __toESM(require_BiShow());
var import_BiHide4 = __toESM(require_BiHide());
var import_FaInfoCircle = __toESM(require_FaInfoCircle());
var import_FaLock = __toESM(require_FaLock());
var import_MdFingerprint = __toESM(require_MdFingerprint());
var import_BsTextLeft = __toESM(require_BsTextLeft());
var import_AiOutlineUser = __toESM(require_AiOutlineUser());
var import_FaCog = __toESM(require_FaCog());
var import_FaRegCopy2 = __toESM(require_FaRegCopy());
var import_FiRefreshCcw3 = __toESM(require_FiRefreshCcw());
var import_BsInfoCircleFill3 = __toESM(require_BsInfoCircleFill());
var import_framer_motion2 = require("framer-motion");
var import_password_entropy3 = __toESM(require("@rabbit-company/password-entropy"));
var import_jsx_runtime23 = require("react/jsx-runtime");
var AppPasswordEdit = ({
  passwordData,
  locale,
  onSave,
  onCancel,
  onGeneratorConfig,
  passwordConfig = {
    capitalLetters: true,
    length: 16,
    lowercaseLetters: true,
    numbers: true,
    specialCharacters: true
  },
  compact = false
}) => {
  var _a, _b, _c;
  const confirmModal = useConfirmModal();
  const [activeTab, setActiveTab] = (0, import_react26.useState)("credentials");
  const [editedData, setEditedData] = (0, import_react26.useState)(__spreadValues({}, passwordData));
  const [showPassword, setShowPassword] = (0, import_react26.useState)(false);
  const [showSecureNotes, setShowSecureNotes] = (0, import_react26.useState)(false);
  const [totpEnabled, setTotpEnabled] = (0, import_react26.useState)(!!editedData.totpSecret);
  const [otp, setOtp] = (0, import_react26.useState)("");
  const [otpProgress, setOtpProgress] = (0, import_react26.useState)(0);
  const [isInvalidTotpSecret, setIsInvalidTotpSecret] = (0, import_react26.useState)(false);
  const [usernameCopied, setUsernameCopied] = (0, import_react26.useState)(false);
  const [passwordCopied, setPasswordCopied] = (0, import_react26.useState)(false);
  const [otpCopied, setOtpCopied] = (0, import_react26.useState)(false);
  const [entropy, setEntropy] = (0, import_react26.useState)(0);
  const [robustness, setRobustness] = (0, import_react26.useState)(0);
  (0, import_react26.useEffect)(() => {
    setEditedData(__spreadValues({}, passwordData));
    setTotpEnabled(!!passwordData.totpSecret);
  }, [passwordData]);
  const hasChanges = () => {
    return editedData.username !== passwordData.username || editedData.password !== passwordData.password || editedData.totpSecret !== passwordData.totpSecret || editedData.secureNotes !== passwordData.secureNotes;
  };
  const updateTotpSecret = (value) => {
    const formattedValue = value.replace(/\s/g, "").toUpperCase();
    setEditedData(__spreadProps(__spreadValues({}, editedData), { totpSecret: formattedValue }));
    if (formattedValue) {
      try {
        generateTOTP(formattedValue);
        setIsInvalidTotpSecret(false);
      } catch (error) {
        setIsInvalidTotpSecret(true);
      }
    } else {
      setIsInvalidTotpSecret(false);
    }
  };
  const generatePassword = () => {
    const CAPITAL_LETTERS3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LOWERCASE_LETTERS3 = "abcdefghijklmnopqrstuvwxyz";
    const NUMBERS3 = "0123456789";
    const SPECIAL_CHARS3 = `.,;:?!'"@#%&*+-_=()[]{}<>/\\|~^`;
    let passwordChars = "";
    let generatedPwd = [];
    const { length, lowercaseLetters, capitalLetters, numbers, specialCharacters } = passwordConfig;
    if (lowercaseLetters) {
      passwordChars += LOWERCASE_LETTERS3;
      let index = Math.floor(Math.random() * length);
      while (generatedPwd[index]) {
        index = Math.floor(Math.random() * length);
      }
      generatedPwd[index] = LOWERCASE_LETTERS3.charAt(Math.floor(Math.random() * LOWERCASE_LETTERS3.length));
    }
    if (capitalLetters) {
      passwordChars += CAPITAL_LETTERS3;
      let index = Math.floor(Math.random() * length);
      while (generatedPwd[index]) {
        index = Math.floor(Math.random() * length);
      }
      generatedPwd[index] = CAPITAL_LETTERS3.charAt(Math.floor(Math.random() * CAPITAL_LETTERS3.length));
    }
    if (numbers) {
      passwordChars += NUMBERS3;
      let index = Math.floor(Math.random() * length);
      while (generatedPwd[index]) {
        index = Math.floor(Math.random() * length);
      }
      generatedPwd[index] = NUMBERS3.charAt(Math.floor(Math.random() * NUMBERS3.length));
    }
    if (specialCharacters) {
      passwordChars += SPECIAL_CHARS3;
      let index = Math.floor(Math.random() * length);
      while (generatedPwd[index]) {
        index = Math.floor(Math.random() * length);
      }
      generatedPwd[index] = SPECIAL_CHARS3.charAt(Math.floor(Math.random() * SPECIAL_CHARS3.length));
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      if (!generatedPwd[i]) generatedPwd[i] = passwordChars.charAt(randomIndex);
    }
    const newPassword = generatedPwd.join("");
    setEditedData(__spreadProps(__spreadValues({}, editedData), { password: newPassword }));
    setShowPassword(true);
  };
  const handlePasswordChange = (value) => {
    setEditedData(__spreadProps(__spreadValues({}, editedData), { password: value }));
  };
  const handleCancel = () => __async(null, null, function* () {
    if (hasChanges()) {
      const confirmed = yield confirmModal.show({
        header: TRAD3.unsaved_changes_title[locale],
        alert: TRAD3.unsaved_changes_message[locale],
        alertDescription: TRAD3.unsaved_changes_description[locale],
        cancelText: TRAD3.cancel[locale],
        acceptText: TRAD3.discard[locale],
        color: "warning"
      });
      if (!confirmed) {
        return;
      }
    }
    setActiveTab("credentials");
    onCancel();
  });
  const handleSave = () => {
    setActiveTab("credentials");
    onSave(editedData);
  };
  (0, import_react26.useEffect)(() => {
    return () => {
    };
  }, []);
  (0, import_react26.useEffect)(() => {
    if (!editedData.totpSecret) {
      setOtp("");
      setIsInvalidTotpSecret(false);
      return;
    }
    try {
      generateTOTP(editedData.totpSecret);
      setIsInvalidTotpSecret(false);
    } catch (error) {
      setOtp("");
      setIsInvalidTotpSecret(true);
      return;
    }
    const msToNextSecond = Math.ceil(Date.now() / 1e3) * 1e3 - Date.now();
    const startTimer = () => {
      try {
        const generatedOtp = generateTOTP(editedData.totpSecret);
        setOtp(generatedOtp);
        setOtpProgress(Math.floor((Date.now() - Math.floor(Date.now() / 3e4) * 3e4) / 300));
      } catch (error) {
        setOtp("");
        setIsInvalidTotpSecret(true);
      }
    };
    startTimer();
    const initialTimeout = setTimeout(() => {
      startTimer();
      const intervalId = setInterval(startTimer, 1e3);
      return () => clearInterval(intervalId);
    }, msToNextSecond);
    return () => clearTimeout(initialTimeout);
  }, [editedData.totpSecret]);
  (0, import_react26.useEffect)(() => {
    if (!totpEnabled && editedData.totpSecret) {
      setEditedData(__spreadProps(__spreadValues({}, editedData), { totpSecret: "" }));
    }
  }, [totpEnabled]);
  (0, import_react26.useEffect)(() => {
    if (editedData.password) {
      const calculatedEntropy = import_password_entropy3.default.calculate(editedData.password);
      setEntropy(calculatedEntropy);
    } else {
      setEntropy(0);
    }
  }, [editedData.password]);
  (0, import_react26.useEffect)(() => {
    if (entropy < 36) setRobustness(0);
    else if (entropy < 60) setRobustness(1);
    else if (entropy < 120) setRobustness(2);
    else setRobustness(3);
  }, [entropy]);
  const getStrengthInfo = () => {
    var _a2;
    const strengthLabels = {
      fr: ["Tr\xE8s faible", "Faible", "Fort", "Tr\xE8s fort"],
      en: ["Very weak", "Weak", "Strong", "Very strong"],
      es: ["Muy d\xE9bil", "D\xE9bil", "Fuerte", "Muy fuerte"],
      de: ["Sehr schwach", "Schwach", "Stark", "Sehr stark"],
      zh: ["\u975E\u5E38\u5F31", "\u5F31", "\u5F3A", "\u975E\u5E38\u5F3A"]
    };
    const colors = ["danger", "warning", "success", "primary"];
    return {
      label: ((_a2 = strengthLabels[locale]) == null ? void 0 : _a2[robustness]) || strengthLabels.en[robustness],
      color: colors[robustness]
    };
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: `flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`, children: [
    hasChanges() && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "sticky top-0 z-10 bg-content1 -mx-1 px-1 pb-3 border-b-2 border-default-200", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: `bg-warning-50 border-l-4 border-warning rounded-r-lg flex items-start gap-2 ${compact ? "p-2 mb-2" : "p-4 mb-3 gap-3"}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaInfoCircle.FaInfoCircle, { className: `text-warning flex-shrink-0 mt-0.5 ${compact ? "text-base" : "text-xl"}` }),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: `font-semibold text-warning-700 ${compact ? "text-sm" : ""}`, children: TRAD3.unsaved_changes_title[locale] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { className: `text-warning-600 ${compact ? "text-xs mt-0.5" : "text-sm mt-1"}`, children: TRAD3.unsaved_changes_message[locale] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: `flex flex-row justify-end ${compact ? "gap-2" : "gap-3"}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          import_react27.Button,
          {
            color: "default",
            variant: "flat",
            startContent: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaTimes.FaTimes, {}),
            onPress: handleCancel,
            size: compact ? "md" : "lg",
            className: compact ? "min-w-[100px]" : "min-w-[120px]",
            children: TRAD3.cancel[locale]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
          import_react27.Button,
          {
            color: "primary",
            variant: "shadow",
            startContent: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaRegSave.FaRegSave, {}),
            onPress: handleSave,
            isDisabled: isInvalidTotpSecret && !!editedData.totpSecret || !hasChanges(),
            size: compact ? "md" : "lg",
            className: `${compact ? "min-w-[100px]" : "min-w-[120px]"} animate-in zoom-in-95`,
            children: TRAD3.save[locale]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      import_react27.Tabs,
      {
        variant: "underlined",
        size: "sm",
        "aria-label": "Options",
        color: "primary",
        selectedKey: activeTab,
        onSelectionChange: (key) => setActiveTab(key.toString()),
        classNames: {
          tabList: compact ? "gap-1" : "gap-4",
          tab: compact ? "px-1 h-8 data-[selected=true]:text-primary" : "px-1 h-10 data-[selected=true]:text-primary"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            import_react27.Tab,
            {
              title: compact ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.credentials[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaLock.FaLock, { className: "text-base" }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaLock.FaLock, { className: "text-lg" }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { children: TRAD3.credentials[locale] })
              ] }),
              children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: compact ? "py-2 space-y-3" : "py-4 space-y-5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "relative", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                    import_react27.Input,
                    {
                      label: TRAD3.username[locale],
                      placeholder: TRAD3.enter_username[locale],
                      value: editedData.username || "",
                      onValueChange: (value) => setEditedData(__spreadProps(__spreadValues({}, editedData), { username: value })),
                      size: compact ? "sm" : "md",
                      startContent: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_AiOutlineUser.AiOutlineUser, { className: "text-default-400" }),
                      endContent: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.copy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                        "button",
                        {
                          className: "p-1 rounded-md hover:bg-default-200 transition-colors",
                          onClick: () => {
                            if (editedData.username) {
                              navigator.clipboard.writeText(editedData.username);
                              setUsernameCopied(true);
                              setTimeout(() => setUsernameCopied(false), 3e3);
                            }
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaRegCopy2.FaRegCopy, { className: "cursor-pointer" })
                        }
                      ) })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_framer_motion2.AnimatePresence, { children: usernameCopied && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                    import_framer_motion2.motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -20 },
                      transition: { duration: 0.3 },
                      className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg",
                      children: TRAD3.copied[locale]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: compact ? "space-y-1" : "space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: compact ? "text-xs" : "text-sm", children: TRAD3.password[locale] }),
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Button, { size: "sm", color: "primary", onPress: generatePassword, startContent: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FiRefreshCcw3.FiRefreshCcw, {}), children: TRAD3.generate_password[locale] }),
                      onGeneratorConfig && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.configure_generator[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Button, { isIconOnly: true, size: "sm", variant: "light", onPress: onGeneratorConfig, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaCog.FaCog, { className: "text-default-400" }) }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "relative", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                      import_react27.Input,
                      {
                        value: editedData.password || "",
                        type: showPassword ? "text" : "password",
                        onValueChange: handlePasswordChange,
                        size: compact ? "sm" : "md",
                        classNames: {
                          input: "font-mono"
                        },
                        endContent: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex flex-row gap-2 items-center", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: showPassword ? TRAD3.hide[locale] : TRAD3.show[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("button", { className: "p-1 rounded-md hover:bg-default-200 transition-colors", onClick: () => setShowPassword(!showPassword), children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_BiHide4.BiHide, { className: "cursor-pointer" }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_BiShow4.BiShow, { className: "cursor-pointer" }) }) }),
                          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.copy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                            "button",
                            {
                              className: "p-1 rounded-md hover:bg-default-200 transition-colors",
                              onClick: () => {
                                if (editedData.password) {
                                  navigator.clipboard.writeText(editedData.password);
                                  setPasswordCopied(true);
                                  setTimeout(() => setPasswordCopied(false), 3e3);
                                }
                              },
                              children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaRegCopy2.FaRegCopy, { className: "cursor-pointer" })
                            }
                          ) })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_framer_motion2.AnimatePresence, { children: passwordCopied && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                      import_framer_motion2.motion.div,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -20 },
                        transition: { duration: 0.3 },
                        className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg",
                        children: TRAD3.copied[locale]
                      }
                    ) })
                  ] }),
                  editedData.password && editedData.password.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: compact ? "space-y-1 mt-2" : "space-y-2 mt-3", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: `font-medium text-default-600 ${compact ? "text-xs" : "text-sm"}`, children: locale === "fr" ? "Force du mot de passe" : locale === "es" ? "Fuerza de la contrase\xF1a" : locale === "de" ? "Passwortst\xE4rke" : locale === "zh" ? "\u5BC6\u7801\u5F3A\u5EA6" : "Password strength" }),
                        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                          import_react27.Tooltip,
                          {
                            content: locale === "fr" ? "Plus vous utilisez de types de caract\xE8res et plus votre mot de passe est long, plus il est s\xE9curis\xE9." : locale === "es" ? "Cuantos m\xE1s tipos de caracteres utilices y m\xE1s larga sea tu contrase\xF1a, m\xE1s segura ser\xE1." : locale === "de" ? "Je mehr Zeichentypen Sie verwenden und je l\xE4nger Ihr Passwort ist, desto sicherer ist es." : locale === "zh" ? "\u60A8\u4F7F\u7528\u7684\u5B57\u7B26\u7C7B\u578B\u8D8A\u591A\uFF0C\u5BC6\u7801\u8D8A\u957F\uFF0C\u5BC6\u7801\u5C31\u8D8A\u5B89\u5168\u3002" : "The more character types you use and the longer your password is, the more secure it will be.",
                            children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Button, { isIconOnly: true, size: "sm", variant: "light", className: compact ? "min-w-5 w-5 h-5" : "min-w-6 w-6 h-6", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_BsInfoCircleFill3.BsInfoCircleFill, { className: `text-default-400 ${compact ? "text-xs" : "text-sm"}` }) })
                          }
                        )
                      ] }),
                      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Chip, { size: "sm", color: getStrengthInfo().color, variant: "flat", className: compact ? "text-xs h-5" : "", children: getStrengthInfo().label })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                      import_react27.Progress,
                      {
                        size: compact ? "sm" : "md",
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
                  ] })
                ] })
              ] })
            },
            "credentials"
          ),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            import_react27.Tab,
            {
              title: compact ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.two_factor_auth[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_MdFingerprint.MdFingerprint, { className: "text-base" }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_MdFingerprint.MdFingerprint, { className: "text-lg" }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { children: TRAD3.two_factor_auth[locale] })
              ] }),
              children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: compact ? "py-2 space-y-3" : "py-4 space-y-5", children: [
                !compact && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: `flex items-start gap-2 text-default-600 ${compact ? "text-xs" : "text-sm"}`, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaInfoCircle.FaInfoCircle, { className: "mt-0.5 flex-shrink-0 text-default-400" }),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { children: TRAD3.totp_explanation[locale] })
                ] }),
                compact && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.totp_explanation[locale], className: "max-w-xs", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center gap-2 text-default-600 text-xs cursor-help", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaInfoCircle.FaInfoCircle, { className: "text-default-400" }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Switch, { isSelected: totpEnabled, onValueChange: setTotpEnabled, color: "primary", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "text-medium", children: TRAD3.two_factor_auth[locale] }) }) }),
                totpEnabled && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: compact ? "space-y-3" : "space-y-5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                    import_react27.Input,
                    {
                      label: TRAD3.otp[locale],
                      placeholder: TRAD3.enter_totp_secret[locale],
                      value: editedData.totpSecret || "",
                      onValueChange: updateTotpSecret,
                      color: isInvalidTotpSecret ? "danger" : "default",
                      variant: "flat",
                      size: compact ? "sm" : "md",
                      description: isInvalidTotpSecret ? TRAD3.invalid_totp_secret[locale] : ""
                    }
                  ),
                  editedData.totpSecret && !isInvalidTotpSecret && otp && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: compact ? "py-1" : "py-2", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: `flex flex-col ${compact ? "gap-1" : "gap-2"}`, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex justify-between items-center", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: `text-default-600 ${compact ? "text-xs" : "text-sm"}`, children: TRAD3.otp[locale] }),
                      otpProgress !== null && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "text-xs text-default-500", children: [
                        30 - Math.floor(otpProgress / 3.333),
                        "s"
                      ] })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex justify-center items-center relative", children: [
                      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: `font-mono tracking-wider ${compact ? "text-lg" : "text-2xl"}`, children: otp ? ((_a = otp.match(/.{1,3}/g)) == null ? void 0 : _a.join(" ")) || otp : "" }),
                      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.copy[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                        "button",
                        {
                          className: `p-1 rounded-md hover:bg-default-200 transition-colors ${compact ? "ml-1" : "ml-2"}`,
                          onClick: () => {
                            if (otp) {
                              navigator.clipboard.writeText(otp);
                              setOtpCopied(true);
                              setTimeout(() => setOtpCopied(false), 3e3);
                            }
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaRegCopy2.FaRegCopy, { className: `cursor-pointer ${compact ? "text-sm" : ""}` })
                        }
                      ) }),
                      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_framer_motion2.AnimatePresence, { children: otpCopied && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                        import_framer_motion2.motion.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          exit: { opacity: 0, y: -20 },
                          transition: { duration: 0.3 },
                          className: "absolute -top-8 right-0 bg-success text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg",
                          children: TRAD3.copied[locale]
                        }
                      ) })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Progress, { "aria-label": "OTP Timer", size: compact ? "sm" : "md", value: 100 - otpProgress, color: "secondary", showValueLabel: false })
                  ] }) })
                ] })
              ] })
            },
            "2fa"
          ),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
            import_react27.Tab,
            {
              title: compact ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.secure_notes[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_BsTextLeft.BsTextLeft, { className: "text-base" }) }) }) : /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_BsTextLeft.BsTextLeft, { className: "text-lg" }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { children: TRAD3.secure_notes[locale] })
              ] }),
              children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: compact ? "py-2 space-y-2" : "py-4 space-y-4", children: [
                !compact && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: `flex items-start gap-2 text-default-600 ${compact ? "text-xs" : "text-sm"}`, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaInfoCircle.FaInfoCircle, { className: "mt-0.5 flex-shrink-0 text-default-400" }),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("p", { children: TRAD3.secure_notes_explanation[locale] })
                ] }),
                compact && /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: TRAD3.secure_notes_explanation[locale], className: "max-w-xs", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: "flex items-center gap-2 text-default-600 text-xs cursor-help", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_FaInfoCircle.FaInfoCircle, { className: "text-default-400" }) }) }),
                /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: compact ? "space-y-1" : "space-y-2", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("label", { className: `block ${compact ? "text-sm" : "text-medium"}`, htmlFor: "secureNotes", children: TRAD3.secure_notes[locale] }),
                    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Tooltip, { content: showSecureNotes ? TRAD3.hide[locale] : TRAD3.show[locale], children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_react27.Button, { isIconOnly: true, size: "sm", variant: "light", onPress: () => setShowSecureNotes(!showSecureNotes), children: showSecureNotes ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_BiHide4.BiHide, {}) : /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_BiShow4.BiShow, {}) }) })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                    import_react27.Textarea,
                    {
                      id: "secureNotes",
                      placeholder: TRAD3.enter_secure_notes[locale],
                      value: editedData.secureNotes || "",
                      onValueChange: (value) => {
                        if (value.length <= 1e3) {
                          setEditedData(__spreadProps(__spreadValues({}, editedData), { secureNotes: value }));
                        }
                      },
                      minRows: compact ? 3 : 4,
                      variant: "flat",
                      size: compact ? "sm" : "md",
                      classNames: {
                        input: `${!showSecureNotes ? "blur-sm font-mono" : "font-mono"}`,
                        base: "w-full"
                      }
                    }
                  ),
                  (((_b = editedData.secureNotes) == null ? void 0 : _b.length) || 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "text-xs text-right text-default-500", children: [
                    (_c = editedData.secureNotes) == null ? void 0 : _c.length,
                    "/1000"
                  ] })
                ] })
              ] })
            },
            "notes"
          )
        ]
      }
    )
  ] });
};
var AppPasswordEdit_default = AppPasswordEdit;

// src/components/AppPassword/index.tsx
var import_framer_motion3 = require("framer-motion");
var import_jsx_runtime24 = require("react/jsx-runtime");
var AppPassword = ({ passwordData, locale, onUpdate, readonly = false, onGeneratorConfig, passwordConfig, compact = false }) => {
  const [editMode, setEditMode] = (0, import_react28.useState)(false);
  const [currentData, setCurrentData] = (0, import_react28.useState)(passwordData);
  const [isDataChanged, setIsDataChanged] = (0, import_react28.useState)(false);
  (0, import_react28.useEffect)(() => {
    setCurrentData(passwordData);
  }, [passwordData]);
  (0, import_react28.useEffect)(() => {
    const hasChanges = currentData.username !== passwordData.username || currentData.password !== passwordData.password || currentData.totpSecret !== passwordData.totpSecret || currentData.secureNotes !== passwordData.secureNotes;
    setIsDataChanged(hasChanges);
  }, [currentData, passwordData]);
  const handleEdit = () => {
    setEditMode(true);
  };
  const handleSave = (data) => {
    setCurrentData(data);
    setEditMode(false);
    if (onUpdate) {
      onUpdate(data);
    }
  };
  const handleCancel = () => {
    setCurrentData(__spreadValues({}, passwordData));
    setEditMode(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_framer_motion3.AnimatePresence, { mode: "wait", children: editMode ? /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_framer_motion3.motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.2 }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      AppPasswordEdit_default,
      {
        passwordData: currentData,
        locale,
        onSave: handleSave,
        onCancel: handleCancel,
        onGeneratorConfig,
        passwordConfig,
        compact
      }
    ) }, "edit") : /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_framer_motion3.motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, transition: { duration: 0.2 }, children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AppPasswordRead_default, { readonly, passwordData: currentData, locale, onEdit: handleEdit, compact }) }, "read") }),
    isDataChanged && !editMode && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "absolute top-2 right-2", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: "inline-block h-2 w-2 rounded-full bg-success animate-pulse" }) })
  ] });
};

// src/components/ManagePasswords/index.tsx
var import_react29 = require("react");
var import_react30 = require("@heroui/react");
var import_BsFolderFill = __toESM(require_BsFolderFill());
var import_BsPersonFill = __toESM(require_BsPersonFill());
var import_BiKey2 = __toESM(require_BiKey());
var import_AiFillLock = __toESM(require_AiFillLock());
var import_BiChevronDown = __toESM(require_BiChevronDown());

// src/components/ManagePasswords/translations.ts
var MANAGE_PASSWORDS_TRAD = {
  personal: {
    fr: "Personnel",
    en: "Personal",
    es: "Personal",
    de: "Pers\xF6nlich",
    zh: "\u4E2A\u4EBA"
  },
  select_folder: {
    fr: "S\xE9lectionnez un dossier",
    en: "Select a folder",
    es: "Seleccionar una carpeta",
    de: "Ordner ausw\xE4hlen",
    zh: "\u9009\u62E9\u6587\u4EF6\u5939"
  },
  no_password: {
    fr: "Aucun mot de passe configur\xE9",
    en: "No password configured",
    es: "Sin contrase\xF1a configurada",
    de: "Kein Passwort konfiguriert",
    zh: "\u672A\u914D\u7F6E\u5BC6\u7801"
  },
  folder_readonly_info: {
    fr: "Vous pouvez consulter ce mot de passe mais seuls les administrateurs peuvent le modifier.",
    en: "You can view this password but only administrators can edit it.",
    es: "Puede ver esta contrase\xF1a, pero solo los administradores pueden editarla.",
    de: "Sie k\xF6nnen dieses Passwort anzeigen, aber nur Administratoren k\xF6nnen es bearbeiten.",
    zh: "\u60A8\u53EF\u4EE5\u67E5\u770B\u6B64\u5BC6\u7801\uFF0C\u4F46\u53EA\u6709\u7BA1\u7406\u5458\u53EF\u4EE5\u7F16\u8F91\u5B83\u3002"
  }
};

// src/components/ManagePasswords/index.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var ManagePasswords = ({
  personalPassword,
  folderPasswords = [],
  locale = "en",
  onUpdate,
  onGeneratorConfig,
  readonly = false,
  admin = false,
  passwordConfig,
  compact = false
}) => {
  const [selectedKey, setSelectedKey] = (0, import_react29.useState)("");
  const [isOpen, setIsOpen] = (0, import_react29.useState)(false);
  (0, import_react29.useEffect)(() => {
    if (selectedKey) return;
    if (personalPassword && (personalPassword.username || personalPassword.password)) {
      setSelectedKey("personal");
      return;
    }
    const firstFolderWithPassword = folderPasswords.find((fp) => fp.password && (fp.password.username || fp.password.password));
    if (firstFolderWithPassword) {
      setSelectedKey(firstFolderWithPassword.folder);
      return;
    }
    if (folderPasswords.length > 0) {
      setSelectedKey(folderPasswords[0].folder);
    } else {
      setSelectedKey("personal");
    }
  }, [personalPassword, folderPasswords, selectedKey]);
  const isCurrentReadonly = readonly || !admin && selectedKey !== "personal";
  if (folderPasswords.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      AppPassword,
      {
        passwordConfig,
        passwordData: personalPassword || {},
        locale,
        onUpdate: (data) => onUpdate == null ? void 0 : onUpdate("personal", data),
        onGeneratorConfig,
        readonly,
        compact
      }
    );
  }
  const getCurrentPassword = () => {
    if (selectedKey === "personal") {
      return personalPassword || {};
    }
    const folder = folderPasswords.find((fp) => fp.folder === selectedKey);
    return (folder == null ? void 0 : folder.password) || {};
  };
  const options = [
    {
      key: "personal",
      label: MANAGE_PASSWORDS_TRAD.personal[locale],
      icon: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_BsPersonFill.BsPersonFill, { className: "text-primary" }),
      hasPassword: !!(personalPassword && (personalPassword.username || personalPassword.password))
    },
    ...folderPasswords.map((fp) => ({
      key: fp.folder,
      label: fp.folder,
      icon: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_BsFolderFill.BsFolderFill, { className: "text-yellow-500" }),
      hasPassword: !!(fp.password && (fp.password.username || fp.password.password))
    }))
  ];
  const handleUpdate = (data) => {
    onUpdate == null ? void 0 : onUpdate(selectedKey, data);
  };
  const getSelectedLabel = () => {
    const selected = options.find((opt) => opt.key === selectedKey);
    return (selected == null ? void 0 : selected.label) || MANAGE_PASSWORDS_TRAD.select_folder[locale];
  };
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: `flex flex-col w-full ${compact ? "gap-2" : "gap-4"}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(import_react30.Popover, { placement: "bottom-start", isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react30.PopoverTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        import_react30.Button,
        {
          variant: "flat",
          className: `justify-between ${compact ? "h-10" : "h-14"}`,
          size: compact ? "sm" : "md",
          endContent: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_BiChevronDown.BiChevronDown, { className: compact ? "w-3 h-3" : "w-4 h-4" }),
          children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: `flex items-center ${compact ? "gap-1" : "gap-2"}`, children: [
            selectedKey === "personal" ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_BsPersonFill.BsPersonFill, { className: `text-primary ${compact ? "w-4 h-4" : "w-5 h-5"}` }) : /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_BsFolderFill.BsFolderFill, { className: `text-yellow-500 ${compact ? "w-4 h-4" : "w-5 h-5"}` }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: compact ? "text-sm" : "", children: getSelectedLabel() })
          ] })
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react30.PopoverContent, { className: "p-1", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
        import_react30.Listbox,
        {
          "aria-label": MANAGE_PASSWORDS_TRAD.select_folder[locale],
          selectedKeys: selectedKey ? [selectedKey] : [],
          selectionMode: "single",
          onSelectionChange: (keys) => {
            const selected = Array.from(keys)[0];
            if (selected) {
              setSelectedKey(selected);
              setIsOpen(false);
            }
          },
          children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
            import_react30.ListboxItem,
            {
              startContent: option.icon,
              endContent: option.hasPassword ? /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_react30.Chip, { size: "sm", color: "success", variant: "flat", startContent: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_BiKey2.BiKey, { className: "w-3 h-3" }), children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "text-xs", children: "Password" }) }) : void 0,
              children: option.label
            },
            option.key
          ))
        }
      ) })
    ] }),
    !admin && selectedKey !== "personal" && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      import_react30.Chip,
      {
        color: "warning",
        variant: "flat",
        startContent: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_AiFillLock.AiFillLock, { className: compact ? "w-3 h-3" : "w-4 h-4" }),
        classNames: { base: compact ? "p-2 h-auto" : "p-3 h-auto" },
        children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: compact ? "text-xs text-wrap" : "text-sm text-wrap", children: MANAGE_PASSWORDS_TRAD.folder_readonly_info[locale] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
      AppPassword,
      {
        passwordData: getCurrentPassword(),
        locale,
        onUpdate: handleUpdate,
        onGeneratorConfig,
        passwordConfig,
        readonly: isCurrentReadonly,
        compact
      },
      selectedKey
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppPassword,
  ColumnType,
  ConfirmModalContextProvider,
  InputModalContextProvider,
  InputPassword,
  Loader,
  ManagePasswords,
  PasswordGenerator,
  PasswordType,
  QrCodeElement,
  SearchBar,
  SelectLanguage,
  SelectPassword,
  SortType,
  Table,
  TextIcon,
  WindowScreen,
  useConfirmModal,
  useInputModalContext
});
//# sourceMappingURL=index.js.map