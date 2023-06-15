
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
import Comp from './component';
function App() {
  const [dataS,setDataS]=useState([]);
  const [totras,setRas]=useState("");
  const [render,setRender]=useState(true)
  const [ans,setAns]=useState('');
  const[myurl,seturl]=useState("https://api.funtranslations.com/translate/yoda.json?text=");
  const base="https://api.funtranslations.com/translate/yoda.json?text=";
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

  const goTo=()=>{
    setRender(!render);
  }
  const translate=(e)=>{
    
    e.preventDefault();
    let text= totras;
    console.log(text);
    let str="";

    str=base+text+'.';
    console.log(str);
    seturl(str);


  }

  useEffect(()=>{
    console.log(myurl);
    apiGet();
  },[myurl])
  

  return (
    <div className="App">
      <Container maxWidth="lg" >
        
        <Typography pt="5vh" variant="h3" gutterBottom color={'pink'}>
         Translate Anything to Yoda
      </Typography>

      <Box
      component="form"
      onSubmit={translate}
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50%' },
      }}
      noValidate
      autoComplete="off"
    >
  
 
    <TextField 
    sx= { { input: { color: 'white',width: "90%" } }} 
    placeholder='Input text to translate'
          style={{color: 'white'}}
          value={totras}
          onChange={(e)=>setRas(e.target.value)}
          id="filled-search"
           
          type="search"
          
        />
 
    <button type='submit' style={{border:'1 px', width:"10%",height:'50px',marginTop:'1%', background:'blue'} }>Translate</button>
 
        
        
        
      
      
    </Box>
    
      {render?<Box mt='5vh' sx={{ p:2,border:'1px dashed grey',height:'40vh', width:'70vw' ,ml:"10vw" }}>
      <Typography style={{color: 'white'}} variant='h4'>{ans}</Typography>
    </Box>:<Comp text={totras}/>}
    

    <Button mt='3vh' onClick={goTo}> {render?"translate to pirate":"go back"}</Button>
      </Container>
    
    </div>
  );
}

export default App;
