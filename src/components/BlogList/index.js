import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'




class BlogList extends Component{
    state={isLoading:true,
        blogData:[]
    }
    componentDidMount(){
        this.getBlogsData()
    }
    getBlogsData= async ()=>{
        const response=await fetch("https://apis.ccbp.in/blogs")
        const statusCode=await response.statusCode
        console.log(statusCode)
        const data=await response.json()

        const updatedData=data.map(eachItem=>({
            id:eachItem.id,
            title:eachItem.title,
            imageUrl:eachItem.image_url,
            avatarUrl:eachItem.avatar_url,
            author:eachItem.author,
            topic:eachItem.topic

        }))
       
        
        this.setState({ isLoading: false, blogData: updatedData })
         
    }

    render(){
        const {isLoading,blogData}=this.state
        console.log('Is Loading:', isLoading)
        return(
            
            <div className="blogs-list-container">
                {isLoading?<div className="loader-container"><Loader type="TailSpin" color="#00BFFF" height={50} width={50}/></div>:blogData.map(eachItem=><BlogItem details={eachItem} key={eachItem.id} />)}
            </div>
        )
    }

}

export default BlogList