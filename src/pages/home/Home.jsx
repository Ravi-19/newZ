import { useEffect, useRef, useState } from "react";
import SingleNews from "../../components/singleNews/SingleNews";
import './home.css'
import NavBar from "../../components/navBar/NavBar";
import LoadingBar from 'react-top-loading-bar'

function Home() {
    const apiKey  = import.meta.env.VITE_APP_API_KEY ; 
    const [query , setQuery] = useState('modi') ;
    const date = import.meta.env.VITE_APP_DATE ; 
    const newsUrl = `https://newsapi.org/v2/everything?q=${query}&from=${date}&sortBy=publishedAt&apiKey=${apiKey}` ; 
    let [newsArr ,setNewsArr] = useState([]) ; 
    const ref = useRef(null) ; 

    async function fetchData () {
        try{ 
            ref.current.continuousStart()
            const response = await fetch(newsUrl) ; 
    
            const jsonData = await response.json() ; 
            newsArr = jsonData.articles ; 
            setNewsArr(newsArr) ; 
        //  console.log(newsArr) ; 
         //console.log(newsUrl[0].url) ; 
        }
        catch(e) {
            alert("please input a valid data ") ; 
        }
        finally{
          ref.current.complete()  ;
        }
         
      }

    function updateQuery (newQuery) {
      setQuery(newQuery) ; 
   //  console.log("from: parent " , newQuery) ; 
   //  console.log("query " , query) ; 

    }
      useEffect(()=>{
        fetchData()  ; 
    } , [query]) ; 
  return (
    <div>
       <LoadingBar color='#f11946' ref={ref} />
        <nav>
            <NavBar updateQuery ={updateQuery}/>
        </nav>
        <div className="all-news container">
              {
                newsArr?.map((news , index) => {
                  return (
                    <div className="card" key ={index}> 
                      <SingleNews news={news}/>
                    </div>

                   )
                })
              }
        </div>
    </div>
  )
}

export default Home