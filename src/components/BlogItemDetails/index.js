import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const BlogItemDetails = () => {
  const { id } = useParams()  // Get the id from the URL using the useParams hook
  const [isDetailsLoading, setIsDetailsLoading] = useState(true)
  const [blogItemData, setBlogItemData] = useState({})

  useEffect(() => {
    const getItemData = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()

      const updatedData = {
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        author: data.author,
        content: data.content,
        topic: data.topic,
      }

      setBlogItemData(updatedData)
      setIsDetailsLoading(false)
    }

    getItemData()
  }, [id])  // Run the effect when the id changes
  console.log('Is Loading:', isDetailsLoading)

  return (
    <div>
      {isDetailsLoading ? (
        <div className="loader-container">
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className="details-card-container">
          <p className="details-heading">{blogItemData.title}</p>
          <div className="details-avatar-container">
            <img src={blogItemData.avatarUrl} alt={`avatar${blogItemData.id}`} className="details-avatar" />
            <p className="details-avatar-name">{blogItemData.author}</p>
          </div>
          <img src={blogItemData.imageUrl} alt={`image${blogItemData.id}`} className="details-image" />
          <p className="details-content">{blogItemData.content}</p>
        </div>
      )}
    </div>
  )
}

export default BlogItemDetails
