import { ColumnType, Table } from ".";
const meta = {
    component: Table,
};
export default meta;
export const Primary = {
    args: {
        cols: [
            {
                name: "Col 1",
                sort: false,
                type: ColumnType.BUTTON,
            },
            {
                name: "Col 2",
                sort: false,
                type: ColumnType.CHECKBOX,
            },
            {
                name: "Col 3",
                sort: false,
                type: ColumnType.DROPDOWN,
            },
            {
                name: "Col 4",
                sort: false,
                type: ColumnType.EDIT_TEXT,
            },
            {
                name: "Col 6",
                sort: false,
                type: ColumnType.SWITCH,
            },
            {
                name: "Col 7",
                sort: false,
                type: ColumnType.TEXT,
            },
        ],
        rows: [
            {
                id: "0",
                selectable: true,
                items: [
                    {
                        colIndex: 0,
                        title: "My button",
                    },
                    {
                        colIndex: 1,
                    },
                    {
                        colIndex: 2,
                        value: "Value 1",
                        items: ["Value 1", "Value 2", "Value 3"],
                    },
                    {
                        colIndex: 3,
                        value: "hello",
                    },
                    {
                        colIndex: 4,
                    },
                    {
                        colIndex: 5,
                        value: "hello",
                    },
                ],
            },
            {
                id: "1",
                selectable: true,
                items: [
                    {
                        colIndex: 0,
                        title: "My button",
                    },
                    {
                        colIndex: 1,
                    },
                    {
                        colIndex: 2,
                        value: "Value 1",
                        items: ["Value 1", "Value 2", "Value 3"],
                    },
                    {
                        colIndex: 3,
                        value: "hello",
                    },
                    {
                        colIndex: 4,
                    },
                    {
                        colIndex: 5,
                        value: "hello",
                    },
                ],
            },
            {
                id: "2",
                selectable: true,
                items: [
                    {
                        colIndex: 0,
                        title: "My button",
                    },
                    {
                        colIndex: 1,
                    },
                    {
                        colIndex: 2,
                        value: "Value 1",
                        items: ["Value 1", "Value 2", "Value 3"],
                    },
                    {
                        colIndex: 3,
                        value: "hello",
                    },
                    {
                        colIndex: 4,
                    },
                    {
                        colIndex: 5,
                        value: "hello",
                    },
                ],
            },
        ],
        configureButton: false,
        selectable: true,
        blur: false,
        showLines: false,
    },
};
