function getPassword(){
    const chars =
    "0123456789abcdrtghijklmnopqrstuvwsyz@#%^*$()+<>:[]{}";
    let getPasswordLength = 8;
    let password = "";
    for (let i = 0; i < getPasswordLength; i++) {
        let randomNumber = Math.floor(Math.random()
        * chars.length);
        password += chars.substring(randomNumber,
            randomNumber +1);


    }
    document.getElementById('password').value =password;
}