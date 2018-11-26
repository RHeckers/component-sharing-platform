export interface ComponentModel{
    title: string,
    description: string,
    names: Array<string>,
    code: Array<string>,
    favorite?: Array<string>,
    gitRepo?: string, 
    id: string
}