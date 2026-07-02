export type ReplacerType = {
    from: string;
    to: string;
    ignorePrefix?: string[];
    enabled?: boolean;
};

export const replacers = [
    {
        from: "PlayStation",
        to: "PayStation",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
    {
        from: "Play Has No Limits",
        to: "Pay Has No Limits",
        ignorePrefix: ["@", "#"],
        enabled: true,
    },
] satisfies ReplacerType[];
