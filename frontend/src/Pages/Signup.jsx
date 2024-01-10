import {FormControl,Heading,Input,Button,FormHelperText, Card, CardBody} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup=()=>{
   const [firstname,setFirstname]=useState("")
   const [lastname,setLastname]=useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err,setErr]=useState(false)
    const [err1,setErr1]=useState(false)
    const navigate=useNavigate()


    const handleSignup = (e) => {
        e.preventDefault();
        const user = {  email, password,firstname, lastname};
        fetch("https://taskbackend-1nvb.onrender.com/users/register", {
          method: "POST" ,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((res)=>{
            if(res.error){
              console.log("hjy",res);
              if(user.password.length<=6 ){
                setErr(true)
            }
            else {
              const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
              if (!specialCharRegex.test(password)) {
                setErr1(true)
              }
            
            }
        
          }
          else{
            navigate("/login")
            alert("you are registered")
          }
            
          })
          .catch((err) => console.log(err));
          setFirstname("")
          setLastname("")
        setEmail("")
        setPassword("")
      };




    return (
        <div>
          
          
            <Card mx="auto" w="400px">
              <CardBody>
              <Heading as='h1' size='1xl' >
            Register Yourself
            </Heading>
            <div>
            <p style={{position:"relative",fontSize:"14px",color:"red"}}>{err && "Password should be above 6 characters"}</p>
           <p style={{position:"relative",fontSize:"14px",color:"red"}}>{err1 && "Password should contain at least one special character"}</p>
            </div>
            <br />
            <form onSubmit={handleSignup}>
            <FormControl>
            
            <br />
            <Input type='text'  w={300} placeholder='first name' mt={5}
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            isRequired
            />
            
            <br />
            <Input type='text'  w={300} placeholder='last name' mt={5}
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            isRequired
            />
            
                <br />
            <Input type='email'  w={300} placeholder='Email address' mt={5}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
            />
            <br />
            <Input type='password'  w={300} placeholder='Password' mt={5}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isRequired
            />
            <FormHelperText color='green'>use special symbol and upper case letter.</FormHelperText>
            <br />
            <Button type="submit" mt={2}
            colorScheme='teal'>Submit</Button>
            </FormControl>
            </form>
            </CardBody>
            </Card>
        </div>
    )
}

export default Signup