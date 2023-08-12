import React, { useState ,useEffect } from 'react'
import { Box, Button } from '@chakra-ui/react'
import Timer from "../components/timer"
import { useDispatch, useSelector } from 'react-redux';
import {getdata} from "../Redux/action"
import {GrPrevious} from "react-icons/gr"
import {GrNext} from "react-icons/gr"
import {BsGlobe} from "react-icons/bs"
import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineArrowRight} from "react-icons/ai"

let screen="";
let num=0;

const Playzone = () => {
    let details=JSON.parse(localStorage.getItem("details"));
    console.log(details);

    const [text,setText]=useState("");
    
    
    screen+=text;

    const random=useSelector((store)=>store.random);
    const dispatch=useDispatch();

    const timer=Timer(details.difficulty==="high" ? 10 :details.difficulty==="medium" ? 30 : 40)

    if(random.length===text.length){
        if(random===text){
            num+=random.length;
        }
    }

   


    useEffect(()=>{
dispatch(getdata());
    },[])
console.log(random);
  return (
    <Box>
      <Box display="flex" fontSize="25px" gap="120px" margin="30px 0 0 40px">
        <Box color="teal">Name: {details.name}</Box>
        <Box color="burlywood">Level: {details.difficulty}</Box>
        <Box color="green">Timer: {timer}</Box>
        <Box color="darkgreen">Random Word: {random}</Box>
        <Box color="tomato">Score :{timer===0 && num}</Box>
      </Box>
      <Box border="1px solid silver" height="100px" w="720px"  margin="80px 0 0 22%"  borderRadius="10px" backgroundColor="silver" color="red" fontSize="30px" >
        {screen}
      </Box>

      <Box display="flex" flexDirection="column" gap="10px" alignItems="center" margin="10px 0 0 22%" boxShadow= "rgba(0, 0, 0, 0.16) 0px 1px 4px" w="720px" padding="30px 0 30px 0" borderRadius="10px" backgroundColor="green.200" >
        <Box display="flex" gap="10px">
            <Button colorScheme="pink">~</Button>
            <Button colorScheme="pink">1</Button>
            <Button colorScheme="pink">2</Button>
            <Button colorScheme="pink">3</Button>
            <Button colorScheme="pink">4</Button>
            <Button colorScheme="pink">5</Button>
            <Button colorScheme="pink">6</Button>
            <Button colorScheme="pink">7</Button>
            <Button colorScheme="pink">8</Button>
            <Button colorScheme="pink">9</Button>
            <Button colorScheme="pink">P</Button>
            <Button colorScheme="pink">delete</Button>
        </Box>

        <Box display="flex" gap="10px">
            <Button colorScheme="pink">tab</Button>
            <Button colorScheme="pink" onClick={()=>setText("q")}>Q</Button>
            <Button colorScheme="pink" onClick={()=>setText("w")}>W</Button>
            <Button colorScheme="pink" onClick={()=>setText("e")}>E</Button>
            <Button colorScheme="pink" onClick={()=>setText("r")}>R</Button>
            <Button colorScheme="pink" onClick={()=>setText("t")}>T</Button>
            <Button colorScheme="pink" onClick={()=>setText("y")}>Y</Button>
            <Button colorScheme="pink" onClick={()=>setText("u")}>U</Button>
            <Button colorScheme="pink" onClick={()=>setText("i")}>I</Button>
            <Button colorScheme="pink" onClick={()=>setText("o")}>O</Button>
            <Button colorScheme="pink" onClick={()=>setText("p")}>P</Button>
            <Button colorScheme="pink" w="50px">\</Button>
        </Box>

        <Box display="flex" gap="10px">
            <Button colorScheme="pink">caps</Button>
            <Button colorScheme="pink" onClick={()=>setText("a")}>A</Button>
            <Button colorScheme="pink" onClick={()=>setText("s")}>S</Button>
            <Button colorScheme="pink" onClick={()=>setText("d")}>D</Button>
            <Button colorScheme="pink" onClick={()=>setText("f")}>F</Button>
            <Button colorScheme="pink" onClick={()=>setText("g")}>G</Button>
            <Button colorScheme="pink" onClick={()=>setText("h")}>H</Button>
            <Button colorScheme="pink" onClick={()=>setText("j")}>j</Button>
            <Button colorScheme="pink" onClick={()=>setText("k")}>K</Button>
            <Button colorScheme="pink" onClick={()=>setText("l")}>L</Button>
            <Button colorScheme="pink" w="100px">Enter</Button>
           
        </Box>

        <Box display="flex" gap="10px">
            <Button colorScheme="pink">Shift</Button>
            <Button colorScheme="pink" onClick={()=>setText("z")}>Z</Button>
            <Button colorScheme="pink" onClick={()=>setText("x")}>X</Button>
            <Button colorScheme="pink" onClick={()=>setText("c")}>C</Button>
            <Button colorScheme="pink" onClick={()=>setText("v")}>V</Button>
            <Button colorScheme="pink" onClick={()=>setText("b")}>B</Button>
            <Button colorScheme="pink" onClick={()=>setText("n")}>N</Button>
            <Button colorScheme="pink" onClick={()=>setText("m")}>M</Button>
            <Button colorScheme="pink" ><GrPrevious/></Button>
            <Button colorScheme="pink"><GrNext/></Button>
            <Button colorScheme="pink" w="80px">Shift</Button>
           
        </Box>

        <Box display="flex" gap="10px">
            <Button colorScheme="pink"><BsGlobe/></Button>
            <Button colorScheme="pink">control</Button>
            <Button colorScheme="pink">option</Button>
            <Button colorScheme="pink" w="130px">space</Button>
            <Button colorScheme="pink">alt</Button>
            <Button colorScheme="pink">option</Button>
            <Button colorScheme="pink"><AiOutlineArrowLeft/></Button>
            <Button colorScheme="pink"><AiOutlineArrowRight/></Button>
            
           
      </Box>
    </Box>
    </Box>
  )
}

export default Playzone