
const form = document.querySelector('.form');
form.addEventListener('submit', sendEmail);


function sendEmail(event) {
    event.preventDefault();
    // let data = new FormData(form);
    
    // console.log(data);

    // postData('send.php', data).then((data) => {
    //     // обработка ответа от сервера
    //     console.log(data);
    //     if (data.error == '') {
    //         alert(data.success);
    //         cleanForm();
    //     } else if (data.email !== '') {
    //         alert(data.email);
    //     } else {
    //         alert(data.error);
    //     }})()

        


    const name = document.getElementsByName("name")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const message = document.getElementsByName("message")[0].value;
    

const subject = "New message from " + name;


let body = "Name: " + name + "";

body += "Email: " + email + "";
body += "Message:" + message;


// window.open("mailto:elena.bagriy1989@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body));


}
