import React, { useState , useEffect} from 'react';
import { FiHeart, FiMapPin, FiDollarSign, FiHome, FiCheckCircle } from 'react-icons/fi';
import './Tenantpage.css';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const TenantFinder = () => {
    const navigate = useNavigate()
  const [filters, setFilters] = useState({ maxPrice: 3000, location: '', propertyType: '', amenities: [] });

  const [favorites, setFavorites] = useState(new Set());
  const [listings , setList] = useState([])
  const [loading, setLoading] = useState(false)
 
   

  useEffect(() => {
    const handleFetch = async () => {
        setLoading(true)
      try {
        const res = await axios.get('https://eastrent-f7be6-default-rtdb.firebaseio.com/findroom.json');
        const data = res.data;
       
        const list = Object.entries(data).map(([id, elem]) => ({
          id,
          ...elem
        }));
        setList(list);
      } catch (error) {
        console.log('Error fetching data:', error);
      }finally{
        setLoading(false)
      }
    };

    handleFetch();
  }, []);



const HandleRequest = () =>{
    navigate('/tenant')
}



if(loading){
    return <div  style={{display:'flex' , justifyContent:'center' , alignItems:'center' , height:'100vh'}}>Loading...</div>
}






  const toggleFavorite = (listingId) => {
    const newFavorites = new Set(favorites);
    newFavorites.has(listingId) ? newFavorites.delete(listingId) : newFavorites.add(listingId);
    setFavorites(newFavorites);
  };




  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div id="tenantFinderApp" className="app-container">
      <header id="appHeader" className="app-header">
        <div className="header-content">
          <h1 className="app-title">Find Your Perfect Home</h1>
          <p className="app-subtitle">Discover premium rentals in your preferred area</p>
        </div>
        
        <div id="searchSection" className="search-filters">
          <div className="filter-group">
            <label htmlFor="locationInput" className="filter-label"> <FiMapPin className="filter-icon" /> Location </label>
            <select  id="locationInput" className="filter-input" value={filters.location}  onChange={(e) => handleFilterChange('location', e.target.value)} >
              <option value="">All Areas</option>
              <option>Downtown</option>
              <option>Midtown</option>
              <option>Suburbs</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="priceRange" className="filter-label">
            ₹ Max Price
            </label>
            <div className="price-range-container">
              <input type="range" id="priceRange" className="price-slider" min="1000"  max="5000" step="100" value={filters.maxPrice}  onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))} />
              <p className="price-value">₹{filters.maxPrice}</p>
            </div>
          </div>

          <div className="filter-group">
            <label htmlFor="propertyType" className="filter-label">
              <FiHome className="filter-icon" /> Type
            </label>
            <select
              id="propertyType"
              className="filter-input"
              value={filters.propertyType}
              onChange={(e) => handleFilterChange('propertyType', e.target.value)}
            >
              <option value="">All Types</option>
              <option>Studio</option>
              <option>Apartment</option>
              <option>Condominium</option>
            </select>
          </div>
        </div>
      </header>

      <main id="mainContent" className="main-content">
        <div className="listings-container">
          {listings.map(listing => (
            <article key={listing.id} className="listing-card">
              <div className="card-image-container">
                <img  src={listing.images[0]}  alt={listing.title}  className="listing-image" />
                <button  className={`favorite-button ${favorites.has(listing.id) ? 'favorited' : ''}`} onClick={() => toggleFavorite(listing.id)} >
                  <FiHeart className="heart-icon" />
                </button>
                <div className="price-tag"> ₹ {listing.price}/mo</div>
              </div>

              <div className="card-details">
                <h3 className="listing-title">{listing.title}</h3>
                <div className="location-info">
                  <FiMapPin className="location-icon" />
                  <span>{listing.location}</span>
                </div>

                <div className="amenities-grid">
                  {listing.amenities.map(amenity => (
                 <div key={amenity} className="amenity-item">
                      <FiCheckCircle className="amenity-icon" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
                <div className='sendrequest' >
                    <button className="send-request-button" onClick={HandleRequest}>Send Request</button>
                </div>
                <div className="meta-info">
                  <span className="square-feet">{listing.size} sqft</span>
                  <span className="availability">Available {listing.available}</span>
                </div>

              </div>
            </article>
          ))}
        </div>

       
      </main>
    </div>
  );
};

export default TenantFinder;