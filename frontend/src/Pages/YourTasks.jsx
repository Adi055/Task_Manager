import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading, Button, Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,Img
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { EditTask, RemoveTask, TaskSuccess } from '../Redux/Action';
import React from 'react';

const YourTasks=()=>{


  const { isOpen, onOpen, onClose } = useDisclosure()
const cancelRef = React.useRef()


  let dispatch=useDispatch();
  const data =useSelector((ele)=>ele.TaskReducer.data);
  console.log("taskdata",data);
  let token=JSON.parse(localStorage.getItem("token"))
  const Fetchdata=()=>{
    axios.get("https://taskbackend-1nvb.onrender.com/task",{
      headers:{
        "Authorization":`Bearer ${token}`
      }
    } )
    .then((res) => {
      dispatch(TaskSuccess(res.data));
      console.log("data", res.data);
    })
    .catch((err) => {
      console.log(err);
    });

}


// const Edittask=(id)=>{

//   axios.patch(`https://taskbackend-1nvb.onrender.com/task/update/${id}`)
//   .then((res)=>{
//   console.log(res);
//   dispatch(EditTask(id))
//   })
//   .catch((err)=>{
//   console.log(err);
//   })
  
//   console.log("1");
  
//   }

const HandleDelete=(id)=>{
  axios.delete(`https://taskbackend-1nvb.onrender.com/task/delete/${id}`)
  .then((res)=>{
      console.log("res",res);
      Fetchdata()
      dispatch(RemoveTask(id))
  })
  .catch((err)=>{
          console.log(err);
  })

}

// const HandleDelete = (id) => {
//   // Open the delete confirmation dialog
//   onOpen();

 
//   const handleConfirmDelete = () => {
//     axios
//       .delete(`http://localhost:8080/task/delete/${id}`)
//       .then((res) => {
//         console.log("removing",res);
//         Fetchdata();
//         dispatch(RemoveTask(id));
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => {
        
//         onClose();
//       });
//   };

  
//   onClose.current = handleConfirmDelete();
// };



useEffect(()=>{
    Fetchdata()
},[])


  return (
    <div>

            <Heading as="h6" mb="5" >Your Tasks</Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>You can see all your task here</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>S No.</Th>
                            <Th>Task Name</Th>
                            <Th>Description</Th>
                            <Th>Start Date</Th>
                            <Th>End Date</Th>
                            <Th>Images</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data?.map((ele,index)=>(
                                <Tr key={ele._id}>
                                    <Td>{index+1}</Td>
                                    <Td>{ele.taskname}</Td>
                                    
                                    <Td>{ele.description}</Td>
                                    <Td>{ele.start_date}</Td>
                                    <Td>
                                        {ele.end_date}
                                    </Td>
                                    <Td>{<Img src={ele.path} w={120}/>}</Td>
                                    <Td>
                                      
                                      <Button colorScheme="green" onClick={()=>HandleDelete(ele._id)}>Delete</Button></Td>
                                     {/* <Td><Button colorScheme='green' onClick={()=>Edittask(ele._id)}>Edit Task</Button> </Td>  */}
                                    
                                </Tr>
                            ))
                        }
                    </Tbody>
                    
                </Table>
            </TableContainer>
            
        </div>
  )
}

export default YourTasks