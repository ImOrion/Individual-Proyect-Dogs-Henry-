export default function validate (input) {
    let error = ""

    if (input.length > 30) {
        error= "You can't write more than 30 characters"
    } else 
    if (!/^[a-zA-Z\s]*$/.test(input)){
        error= "You can only use letters"
    }else
    if (input.split('')[0] === ' '){
        error = "You can't use tabulation or space in your first box"
    }

    return error
}