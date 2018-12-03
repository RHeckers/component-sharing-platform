export interface ComponentModel{
    title: string,
    description: string,
    names: Array<string>,
    code: Array<string>,
    id: string,
    creatorId: string,
    favorite?: Array<string>,
    gitRepo?: string
}