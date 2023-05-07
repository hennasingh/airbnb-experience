import './App.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {

  const cardElements = data.map(item => {
    return (
      <Card 
        key={item.id}
        img={item.coverImg} 
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        country={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots} 
      />
    )
  })
  return (
    <div>
          <NavBar />
          <Hero />
          <section className="cards-list">
             {cardElements}
          </section>
    </div>
  
  )
}

export default App
