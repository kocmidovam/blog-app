import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ArticleList = () => {
  const [articles, setArticles] = useState([])
  useEffect(()=> {
    const getArticles = async () => {
      try {
        const {data} = await axios.get('https://fullstack.exercise.applifting.cz/articles', {
          headers: {
            'X-API-KEY': '0578e5f7-d8df-4482-b910-29ebf8c47d37'
          }
        })
        setArticles(data)
      } catch (error) {
        console.log(error)
      }
    }
    getArticles()
  }, [])
  console.log(articles)

  return (
    <div>articles</div>
  )
}

export default ArticleList