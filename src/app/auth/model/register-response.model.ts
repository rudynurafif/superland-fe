export interface RegisterResponse {
    userId : string,
    username : string,
    password : string,
    tokenVerification : string,
    authorities : [
        roleId : string,
        authority : string
    ],
    aboolean : boolean,
    accountNonExpired : boolean,
    accountNonLocked : boolean,
    credentialsNonExpired : boolean,
    enabled : boolean
}