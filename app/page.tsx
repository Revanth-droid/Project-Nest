export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 40px',borderBottom:'1px solid #222'}}>
        <h1 style={{color:'#f97316',fontSize:'24px',fontWeight:'bold',margin:0}}>🪺 ProjectNest</h1>
        <p style={{color:'#888',margin:0}}>Discover Tirupati like a local</p>
      </nav>
      <section style={{textAlign:'center',padding:'80px 20px'}}>
        <h2 style={{fontSize:'48px',fontWeight:'bold',marginBottom:'16px'}}>Tirupati's Hidden Gems 🔥</h2>
        <p style={{color:'#888',fontSize:'20px',marginBottom:'40px'}}>Real spots. Verified by locals. Not your typical tourist guide.</p>
        <input placeholder="Search gems... (dhabas, cafes, temples)" style={{width:'100%',maxWidth:'500px',padding:'16px 24px',borderRadius:'50px',border:'1px solid #333',background:'#111',color:'white',fontSize:'16px'}}/>
      </section>
      <section style={{padding:'0 40px 60px'}}>
        <h3 style={{textAlign:'center',marginBottom:'30px',color:'#888'}}>Browse by Category</h3>
        <div style={{display:'flex',flexWrap:'wrap',gap:'12px',justifyContent:'center'}}>
          {['🍽️ Tiffin','🍛 Meals','🔥 Dhabas','🌮 Street Food','☕ Cafes','🏨 Homestays','🚗 Rentals','🛕 Tirumala','🏛️ Tirupati'].map(cat => (
            <button key={cat} style={{padding:'10px 20px',borderRadius:'50px',border:'1px solid #333',background:'#111',color:'white',cursor:'pointer',fontSize:'14px'}}>{cat}</button>
          ))}
        </div>
      </section>
      <section style={{padding:'0 40px 80px'}}>
        <h3 style={{marginBottom:'30px'}}>⭐ Top Gems Right Now</h3>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'20px'}}>
          {[
            {name:'Ranjith Dhaba',cat:'🔥 Dhaba',loc:'Tirupati',tag:'Best in City'},
            {name:'Kavyam Cafe',cat:'☕ Cafe',loc:'Tirupati',tag:'Aesthetic'},
            {name:'Kapila Theertham',cat:'🏛️ Temple',loc:'K.T. Road',tag:'Must Visit'},
            {name:'Nandakam',cat:'🍽️ Tiffin',loc:'100 Feet Road',tag:'Local Fav'},
            {name:'Hotel Annapurna',cat:'🍛 Meals',loc:'Tirupati',tag:'Best Meals'},
            {name:'Jungle Book',cat:'🌿 Place',loc:'Nandi Circle',tag:'Hidden Gem'},
          ].map(gem => (
            <div key={gem.name} style={{background:'#111',border:'1px solid #222',borderRadius:'16px',padding:'24px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>
                <span style={{fontSize:'12px',color:'#f97316'}}>{gem.cat}</span>
                <span style={{fontSize:'12px',background:'#1a1a1a',padding:'4px 10px',borderRadius:'20px',color:'#888'}}>{gem.tag}</span>
              </div>
              <h4 style={{margin:'0 0 8px',fontSize:'18px'}}>{gem.name}</h4>
              <p style={{margin:0,color:'#666',fontSize:'14px'}}>📍 {gem.loc}</p>
            </div>
          ))}
        </div>
      </section>
      <footer style={{textAlign:'center',padding:'30px',borderTop:'1px solid #222',color:'#444'}}>Built with ❤️ for Tirupati locals & travelers</footer>
    </main>
  );
}