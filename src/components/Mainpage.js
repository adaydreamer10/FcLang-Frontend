import React, { useState, useEffect } from "react";

const Mainpage = (props) => {
            const [data, setData] = useState();
            const [word, setWord] = useState();
            const [wordNumber, setWordNumber] = useState(1);
            const [clickNumber, setClickNumber] = useState(0);
            useEffect(() => {
               return getData();

            }, []);

            const getData = () =>{
                fetch(props.url + wordNumber)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    setData(result);
                    setWord(result.word);
                    console.log(result);
                });
            }

            const changeLang = () => {

                if(clickNumber === 0){
                    setWordNumber(wordNumber+1)
                    setWord(data.Spanish.word);
                    setClickNumber(clickNumber + 1)
                }

                else if(clickNumber === 1){
                    getData();
                    setClickNumber(0)
                }

            };

            return (
                <div onClick={changeLang}>
                <p>{word}</p>
                </div>
            );
    };
export default Mainpage;
