
import React, { useState } from "react";
import { Button, Card, CardBody, FormLabel, Grid, Input, Select, Heading, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import {  PostTask } from "../Redux/Action";

const AddTasks = () => {
  const [taskname, setTaskname] = useState("");
  const [start_date, setStart] = useState("");
  const [end_date, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  // Get today's date in the required format (YYYY-MM-DD)
  const todayDate = new Date().toISOString().split('T')[0];

  let dispatch = useDispatch();

  const PostData = (e) => {
    e.preventDefault();

    const val = { taskname, start_date, end_date, description };
    console.log("Sending data:", val);
    axios
      .post("https://taskbackend-1nvb.onrender.com/task/add", val)
      .then((res) => {
        dispatch(PostTask());
        alert("Your task has been saved");
      })
      .catch((err) => {
        console.log(err);
      });

    setTaskname("");
    setDescription("");
    setStart("");
    setEnd("");
  };

  // upload file function
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('https://taskbackend-1nvb.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <Heading as="h2" size="1xl">
        Add your tasks
      </Heading>
      <Card w="600px" mx="auto" mt="6">
        <CardBody>
          <form action="" onSubmit={PostData}>
            <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" gap={6}>
              <Input type="text" placeholder="task name" name="taskname" value={taskname} onChange={(e) => setTaskname(e.target.value)} isRequired />
              <Textarea type="text" placeholder="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} isRequired />
              <Input type="date" placeholder="start date" name="start_date" value={start_date} onChange={(e) => setStart(e.target.value)} min={todayDate} isRequired />
              <Input type="date" placeholder="end date" name="end_date" value={end_date} onChange={(e) => setEnd(e.target.value)} min={todayDate} isRequired />
            </Grid>
            <br />
            <br />
            <Button type="submit" colorScheme="green">
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>

      <br />
      <Heading as="h2" size="1xl" mt="10">
        Upload your files here
      </Heading>
      <Card>
        <CardBody>
          <Input type="file" onChange={handleFileChange} w="70" />
          <br />
          <Button onClick={handleUpload} colorScheme="green" mt="5">
            Upload
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default AddTasks;
