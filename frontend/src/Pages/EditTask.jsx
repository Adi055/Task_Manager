
import React, { useState } from "react";
import { Button, Card, CardBody, FormLabel, Grid, Input, Select,Heading,Textarea  } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { EditTask, PostTask } from "../Redux/Action";

const Edit_Task=()=>{
  const [taskname,setTaskname]=useState("")
  const [start_date,setStart]=useState("");
  const [end_date,setEnd]=useState("");
const [description,setDescription]=useState("")
const [edit,setEdit]=useState(null)


let dispatch =useDispatch()

const PostData = (e) => {
  e.preventDefault();
  
  const val={taskname,start_date,end_date,description}
  console.log("Sending data:", val);
  axios
    .post("https://taskbackend-1nvb.onrender.com/task/add", val)
    .then((res) => {
      dispatch(PostTask());
      alert("your task has been saved")
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("1");
 setTaskname("")
 setDescription("")
 setStart("")
 setEnd("")
};


  return (
    <div>
      <Heading as='h2' size='1xl' >
           Add your tasks
            </Heading>
<Card w="600px" mx="auto" mt="6">
<CardBody>
  <form action="" onSubmit={PostData}>
<Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" gap={6}>
 <Input type="text" placeholder="task name" name="taskname" value={taskname} onChange={(e)=>setTaskname(e.target.value)} isRequired/>
 <Textarea  type="text" placeholder="description" name="description" value={description} onChange={(e)=>setDescription(e.target.value)} isRequired/>
 <Input type="date" placeholder="start date" name="start_date" value={start_date} onChange={(e)=>setStart(e.target.value)} isRequired/>
 <Input type="date" placeholder="end date" name="end_date" value={end_date} onChange={(e)=>setEnd(e.target.value)} isRequired/>
</Grid>
<br />
<br />

  <Button type="submit" colorScheme='green' >Submit</Button>
  

</form>
</CardBody>

</Card>


    </div>
  )
}

export default Edit_Task