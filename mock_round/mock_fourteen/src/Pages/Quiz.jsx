import React ,{useState}from 'react'
import { Box,Button } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import "./Quiz.css"

const Quiz = () => {

    const data=useSelector((store)=>store.quiz);
    const [page,setPage]=useState(0);

    console.log(data);
    let quiz=data[page]
    console.log(quiz);
    const [correct,setCorrect]=useState();
    const [incorrect,setIncorrect]=useState();
    console.log(correct);
  return (
    <Box>

        <Box backgroundColor="violet" border="3px solid green" margin="50px 40px 0 40px" padding="50px 40px 40px 40px" borderRadius="10px">
            <Box display="flex" gap="15px" alignItems="center">
                <Box>{page+1}.</Box>
                <Box>{quiz.question}</Box>
            </Box>
            <Box display="flex" flexDirection="column">
                <Box  border="1px solid white" height="40px" fontSize="25px" margin="5px 20px 20px 20px" className={ correct===true && "green"}onClick={()=>setCorrect(true)}>{quiz.correct_answer}</Box>
                {
                    quiz.incorrect_answers.map((item)=>(
                        <Box  border="1px solid white" height="40px" fontSize="25px"  margin="5px 20px 20px 20px" className={incorrect===true && "red"} onClick={()=>setCorrect(true)}>{item}</Box>
                    ))
                }
               
               
            </Box>
        </Box>
    <Box display="flex"  gap="10px" justifyContent="center" margin="30px 0 40px 0">
   <Button colorScheme="teal" onClick={()=>{
    if(page>0){
        setPage(page-1)}
    }
   
   }>Prev</Button>
    <Button colorScheme="red" onClick={()=>{
        setPage(page+1)
        setCorrect();
       
    }
    }>{page===data.length-1 ? "Submit" :"Next"}</Button>
</Box>

    </Box>
  
  )
}

export default Quiz