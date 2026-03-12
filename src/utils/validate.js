export const checkValidDataSignUp = (name, email, password) => {
    const isValidName = name && /^[a-zA-Z\u00C0-\u017F\u0400-\u04FF\u4E00-\u9FFF\s'-]{2,50}$/.test(name.trim());
    const isValidEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);

    if(!isValidName) return "Name is not valid"
    if(!isValidEmail) return "Email is not valid"
    if(!isValidPassword) return "Password must be at least 6 characters and contain uppercase, lowercase, and a number."

    return null;
}

export const checkValidDataSignIn = (email, password) => {
    const isValidEmail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
    const isValidPassword = password && password.length >= 6;

    if(!isValidEmail) return "Email is not valid"
    if(!isValidPassword) return "Password is not valid"

    return null;
}