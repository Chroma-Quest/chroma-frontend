import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Import CSS file for custom styles

function Home() {
  return (
    <div className="home-container">
    <main>
      <h1>SENSATION SING IN COLORS</h1> 
      <div className="box" data-aos="fade-up" data-aos-delay="400">        
      <h2 style={{ fontSize: '34px', textAlign: 'center' }}>OUR VISION</h2>
        <p>At the forefront of innovation, our vision is to pioneer the advancement of testing methodologies for synesthesia, unlocking new dimensions of understanding in human perception. Through cutting-edge research and interdisciplinary collaboration, we aspire to develop comprehensive and standardized approaches that accurately capture and analyze synesthetic experiences.</p>
      </div>
      <div className="box" data-aos="fade-up" data-aos-delay="400">
        <h2 style={{ fontSize: '34px', textAlign: 'center' }}>WHAT WE DO</h2>
        <p>`</p>
        <p>We specialize in the exploration, analysis, and understanding of synesthesia, a fascinating phenomenon where sensory experiences blend and intertwine in unique and unexpected ways.</p>
        <p>`</p>
        <p>`</p>

      </div>
      <div className="box" data-aos="fade-up" data-aos-delay="400">
        <h2 style={{ fontSize: '34px', textAlign: 'center' }}>WHY IT MATTERS</h2>
        <p>`</p>
        <p>Overall, synesthesia is important because it offers a window into the complexities of human perception, contributes to scientific knowledge, fosters creativity and diversity, and holds potential implications for various fields, including neuroscience, psychology, art, and therapy.</p>
        <p>`</p>


      </div>
    </main>
  </div>
  );
}

export default Home;

