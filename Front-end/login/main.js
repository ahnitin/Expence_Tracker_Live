async function LoginUser(event)
{
    event.preventDefault();
    
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value;

    let obj={
        email,
        password,
    }

    try {
        let res = await axios.post("http://localhost:3002/login",obj)
        if(res.status === 201)
        {
            alert("User login sucessful");
            localStorage.setItem('token',res.data.token)
            window.location.href = "../Expense/index.html"
        }
        if(res.status === 401)
        {
            alert("Incorrect Password")
        }
        
    } catch (error) {
        console.log(error)
        document.body.innerHTML+= `<div style="color:red;"> ${error} </div>`;
    }
}