type Mods = Record<string, boolean | string>

export function classNames(cls:string, mods: Mods, additional:string[]):string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods).map(([key, value]) => {
            if (value === true) return key
        })
    ].join(' ')
}