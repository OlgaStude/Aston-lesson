export type userType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: unknown,
    phone: string,
    website: string,
    company: unknown,
}

export type userInitialState = {
    users: userType[],
    status: 'loading' | ''
}
