import React, { useState, useEffect } from "react";

// hi all

const Mainpage = (props) => {
            const [data, setData] = useState();
            const [word, setWord] = useState();
            const [wordNumber, setWordNumber] = useState(1);
            const [clickNumber, setClickNumber] = useState(0);
            const [image, setImage] = useState();
            useEffect(() => {
                
               return getData();

            }, []);
            useEffect(() => {
               return getImage();
            }, [word]);

            // const unplashFetch = () => {
            //     useEffect(()=>{
            //         let url = fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}&per_page=1&client_id=e1lPg8hu5eMKx3CbfYx9vO8N6mZ7kgjzq9pnAU5YHZI`).then((res)=>{
            //             return res.json()
            //         }).then((res) => { setImage(res.results[0].urls.small)})
            //     }, [setWord])
            // }

            const getData = () =>{
                fetch(props.url + wordNumber)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    setData(result);
                    setWord(result.word);
                    getImage();
                    // let url = fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}&per_page=1&client_id=e1lPg8hu5eMKx3CbfYx9vO8N6mZ7kgjzq9pnAU5YHZI`).then((res)=>{
                    //     return res.json()
                    // }).then((res) => { setImage(res.results[0].urls.small)})
                    //https://api.unsplash.com/search/photos?page=1&query=office&per_page=1&client_id=e1lPg8hu5eMKx3CbfYx9vO8N6mZ7kgjzq9pnAU5YHZI
                    console.log(result);
                });
            }
            const getImage = async () => {
                let url = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${word}&per_page=1&client_id=e1lPg8hu5eMKx3CbfYx9vO8N6mZ7kgjzq9pnAU5YHZI`).then((res)=>{
                        return res.json()
                    }).then((res) => { 
                        setImage(res.results[0].urls.small)
                    })
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
                <img src={image} />
                </div>
            );
    };
export default Mainpage;
