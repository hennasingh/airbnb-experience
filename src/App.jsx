import './App.css'
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';

function App() {

  const cardElements = data.map(item => {
    
    return (
      <Card 
          key= {item.id}
          item= {item}
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
