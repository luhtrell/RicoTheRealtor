function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "djtrellz2001@gmail.com",
        Password : "052959F3F040CA6E6DE7AD81B65C49EAB2C7",
        To : 'djtrellz2001@gmail.com',
        From : "Trell",
        Subject : "New Contact Inquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}