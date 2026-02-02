import PostListDash from '../../componentes/PostListDash/PostListDash'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div id="dashboard-container">
        <div id="main-feed">
          <PostListDash/>
        </div>
    
        <div id="weekly-section">
          <div id="weekly-title">
            <img src=".././images/MostPopularPets.png" alt="Most Popular Pets" />
          </div>
          
          <div id="weekly-container">
            <div className="pet-item">
              <div id="weekly-pet-img1" className="pet-img"></div>
              <div className="pet-name">Coquette Deluxe</div>
            </div>
            
            <div className="pet-item">
              <div id="weekly-pet-img2" className="pet-img"></div>
              <div className="pet-name">Mister Michifus</div>
            </div>
            
            <div className="pet-item">
              <div id="weekly-pet-img3" className="pet-img"></div>
              <div className="pet-name">Abelardo Camarón</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
