export default function Home() {
  return (
    <main style={{minHeight:'100vh',background:'#0a0a0a',color:'white',fontFamily:'sans-serif'}}>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 40px',borderBottom:'1px solid #222'}}>
        <h1 style={{color:'#f97316',fontSize:'24px',fontWeight:'bold',margin:0}}>🪺 ProjectNest</h1>
        <p style={{color:'#888',margin:0}}>Discover Tirupati like a local</p>
      </nav>
      <section style={{textAlign:'center',padding:'80px 20px'}}>
        <h2 style={{fontSize:'48px',fontWeight:'bold',marginBottom:'16px'}}>Tirupati Hidden Gems 🔥</h2>
        <p style={{color:'#888',fontSize:'20px'}}>Real spots. Verified by locals.</p>
      </section>
    </main>
  );
}