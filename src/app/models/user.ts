export interface User {
    username: string,
    profileImg?: string,
    favorites: Array<string>,
    email: string;
    password: string;
}