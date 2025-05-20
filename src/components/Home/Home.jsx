import Alexendra from '../nav/alexendra/Alexendra'
import Djclubs from '../nav/Djclub/Djclubs'
import Festival from '../nav/Festival/Festival'
import Footer from '../nav/footer/Footer'
import Latest from '../nav/latest/Latest'
import Youtube from '../nav/youtube/Youtube'
import Card from '../youtubemusic/Youtube'
import './home.css'
const Home=()=>{
    return(<>
    
    <div className="container-fluid  background" >
        <div className="col-lg-10 bgchild">
            <span>New single</span>
            <h1>Feel the heart beats</h1>
        
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
           <p> tempor incididunt ut labore et dolore magna aliqua.</p>
           
        </div>
        </div>
       <div className="container mt-5">
          <Card></Card>
        <Alexendra></Alexendra>
        <Djclubs/>
        <Latest></Latest>
        <Youtube></Youtube>
        </div>
        <div className="container-fluid mt-5 footerparent">
            <Festival></Festival>
            <div className="row">
            <div className="col-xl-12 footerstyle">
             <Footer></Footer>
            </div>
           </div>
        </div>

        
      
        
    </>)
}
export default Home