"use client";
import { Switch } from "@nextui-org/react";
export const RowItemSwitch = ({ check, name, onChange, disabled }) => {
    return (<Switch name={name} defaultSelected={check} onValueChange={(checked) => typeof onChange === "function" && onChange(checked)} isDisabled={disabled} classNames={{
            wrapper: "group-data-[selected=true]:bg-modern-blue",
        }}/>);
};
