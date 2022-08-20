const Register = document.getElementById('Register');
const Login = document.getElementById('logIn');
const container = document.getElementById('container');

Register.addEventListener
('click', () => 
{
	container.classList.add("right-panel-active");
}
);

Login.addEventListener
('click', () => 
{
	container.classList.remove("right-panel-active");
}
);


function RegJS()
{
        var username=document.getElementById("username").value;
        document.write('<html><body><h1><center>')
        document.body.style.backgroundColor="yellow";
        document.write('Welcome'+' ')
        document.write(username)
        document.write('<br>')
        document.writeln('You have successfully registered')
        document.write('</html></body></h1></center>')
    
}

function logJS()
{
        var username2=document.getElementById("username2").value;
        document.write('<html><body><h1><center>')
        document.body.style.backgroundColor="lightgreen";
        document.write('Welcome Back'+' ')
        document.write(username2)
        document.write('<br>')
        document.writeln('You have successfully logged in')
        document.write('</html></body></h1></center>')
    
}





