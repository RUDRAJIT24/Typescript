//unknown
let userInput: unknown;
let userName: string;

userInput = 10
userName = "Rudra"


//never return type
function generateError(message: string, code: number): never {
    throw {message: message, statusCode: code}
}
generateError("Internal server error", 500)