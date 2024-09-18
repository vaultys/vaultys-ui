import { jsx as _jsx } from "react/jsx-runtime";
import { NavBar } from ".";
import { NavButton } from "../NavButton";
const meta = {
    component: NavBar,
};
export default meta;
export const Primary = {
    args: {
        startContent: _jsx("span", { children: "SmartLink" }),
        children: [_jsx(NavButton, { title: "Home", current: true }), _jsx(NavButton, { title: "Profile", current: false })],
        endContent: _jsx("span", { children: "Logout" }),
    },
};
