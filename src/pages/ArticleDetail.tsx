import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



const ArticleDetail = () => {
  const [articleDetail, setArticleDetail] = useState([])
  const { id } = useParams();
  console.log(id)
  useEffect(()=> {
    const getArticleDetail = async () => {
      try {
        const {data} = await axios.get(`https://fullstack.exercise.applifting.cz/articles/${id}`, {
          headers: {
            'X-API-KEY': '0578e5f7-d8df-4482-b910-29ebf8c47d37'
          }
        })
        setArticleDetail(data)
      } catch (error) {
        console.log(error)
      }
    }
    getArticleDetail()
  }, [])
  console.log(articleDetail)

  return (
    <div>article detail</div>
  )
}

export default ArticleDetail