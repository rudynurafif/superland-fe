export interface UserResponseWrapper {
    message : string,
    data : UserResponse
}

interface UserResponse {
    email : string,
    roles : string[],
    token : string
}