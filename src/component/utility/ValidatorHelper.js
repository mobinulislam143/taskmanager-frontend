class ValidatorHelper {
    static IsEmail(value){
        let EmailRegEx = /\S+@\S+\.\S+/;
        return EmailRegEx.test(value)
    }
    static IsEmpty(value) {
        return value.length === 0
    }
}
export default ValidatorHelper
