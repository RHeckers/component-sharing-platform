export interface User {
    username: string,
    favorites: Array<string>,
    email: string,
    password: string,
    _id?: string,
    profileImg?: string
}