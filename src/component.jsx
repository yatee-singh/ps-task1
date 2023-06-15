
import { useEffect, useState,useRef } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import './App.css';
import Grid from '@mui/material/Grid';
import { spacing } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { background } from '@chakra-ui/react';

function Comp({text}) {
  const [dataS,setDataS]=useState([]);
  const [ans,setAns]=useState('');
  const[myurl,seturl]=useState("https://api.funtranslations.com/translate/pirate.json?text=");
  const base="https://api.funtranslations.com/translate/pirate.json?text=";
  const apiGet = () => {
    
    fetch(myurl)
      .then((response) => response.json())
      .then((json) => {
        
        setDataS(json);
        if(json.contents)
        {
          setAns(json.contents.translated)
        }
        else{
          setAns(json.error.message)
        }
        
      });console.log(dataS);
  };

  const translate=()=>{
    
   
    let t= text;
    console.log(text);
    let str="";

    str=base+t+'.';
    console.log(str);
    seturl(str);


  }

  useEffect(()=>{
    translate();
  },[])

  useEffect(()=>{
    console.log(myurl);
    apiGet();
  },[myurl])

  return (
    <div >
    <Box mt='5vh' sx={{ p:2,border:'1px dashed black',height:'40vh', width:'70vw' ,ml:"10vw",bgcolor:'white' }}>
      <Typography style={{color: '#B96764'}} variant='h4'>{ans}</Typography>
    </Box>
    </div>
  );
}

export default Comp;
