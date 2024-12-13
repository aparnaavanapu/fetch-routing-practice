import UserInfo from '../UserInfo'
import './index.css'
import BlogList from '../BlogList'

const Home = () => {
  return(
    <div className="home-container">
     <UserInfo/>
     <BlogList/>
    </div>
  )
  
}
export default Home
