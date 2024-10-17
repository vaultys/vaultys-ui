import { NavBar } from ".";
import { NavButton } from "../NavButton";
const meta = {
    component: NavBar,
};
export default meta;
export const Primary = {
    args: {
        startContent: <span>SmartLink</span>,
        children: [<NavButton title="Home" current/>, <NavButton title="Profile" current={false}/>],
        endContent: <span>Logout</span>,
    },
};
