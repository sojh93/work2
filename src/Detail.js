import React, {useState, useRef} from "react";
import styled from "styled-components";
import { Main } from "./Main";


function Detail() {
    
    const [form, setForm] = useState({
        word: '',
        desc:'',
        example:''
    })
    
    // const InsertWord = (props) => {
    //     const word_ref1 = React.useRef();
    //     const word_ref2 = React.useRef();
    //     const word_ref3 = React.useRef();
        
      
    //     const insert = () => {
    //       const word = word_ref1.current.value;
    //       const desc = word_ref2.current.value;
    //       const example = word_ref3.current.value;
    //     }
    
    // }
      
    const wordInput = useRef();
    const descInput = useRef();
    const exampleInput = useRef();

    const {word, desc, example} = form;
    const onChange = e => {
        const nextForm = {
        ...form, // 기존 값 복사
        [e.target.name]: e.target.value // 이 자리에 덮어 씌우기
    }
        setForm(nextForm);
    }


    const onClick = () => {
        
        setForm({
            word: '',
            desc: '',
            example: ''
        })
       
    }

   

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    }

   


    

    /**
     * 함수는 행동. action.
     * 변수는 상태 
     * 
     * input -> function -> output
     * 
     * function add(int firstValue, int secondValue, int thirdValue){
     *  //console.log('더하기')
     * 
     *  return firstValue + secondValue;
     * }
     * 
     * 
     */
    
    

    return (
        <div className="Detail">

            <Title>단어 추가하기</Title>
            <Line />
            <Box>
                <h2>단어</h2> 
                <input 
                       type="text" 
                       name='word' 
                       placeholder='단어' 
                       value={word} 
                       onChange={onChange}
                       ref={wordInput}
                       />
                <h2>설명(뜻)</h2>
                <input 
                       type="text" 
                       name='desc' 
                       placeholder='설명' 
                       value={desc} 
                       onChange={onChange}
                       ref={descInput}
                       />
                <h3>예시</h3>
                <input 
                       type="text" 
                       name='example' 
                       placeholder='예시' 
                       value={example}
                       onChange={onChange}
                       ref={exampleInput}
                       />

            </Box>
                <button onClick={onClick}>추가하기</button>
            
        </div>
    );
}



const Box = styled.div`
max-width: 350px;
min-height: 60vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h1`
color: slateblue;
text-align: center;
`;

const Line = styled.hr`
border: 1px dotted #ddd;
`;


export default Detail;