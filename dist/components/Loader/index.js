"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
export const Loader = ({ message, img }) => {
    const [show, setShow] = useState(false);
    setTimeout(() => setShow(true), 200);
    if (show) {
        return (_jsx("div", { className: "p-5 flex flex-row items-center justify-center", children: _jsxs("div", { className: "flex flex-col items-center gap-5 animate-pulse", children: [_jsx("img", { className: "h-20", src: img }), message] }) }));
    }
    else
        return _jsx(_Fragment, {});
};
