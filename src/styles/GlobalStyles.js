import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --navy-blue: #0a192f;
    --deep-teal: #0b7070;
    --dark-purple: #0b0a2e;
    --electric-blue: #00E6FF;
    --bright-cyan: #00FFFF;
    --light-blue: #E0F7FA;
    --card-bg: rgba(224, 247, 250, 0.1);
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', 'Inter', sans-serif;
    background: linear-gradient(135deg, var(--navy-blue), var(--deep-teal), var(--dark-purple));
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    color: var(--light-blue);
    min-height: 100vh;
  }
  
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .glass-card {
    background: var(--card-bg);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(224, 247, 250, 0.18);
    padding: 30px;
    transition: transform 0.3s ease;
  }
  
  .glass-card:hover {
    transform: translateY(-5px);
  }

  .cta-button {
    background: linear-gradient(45deg, var(--electric-blue), var(--bright-cyan));
    border: none;
    border-radius: 50px;
    padding: 10px 25px;
    color: var(--navy-blue);
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .cta-button:hover {
    transform: translateY(-2px);
  }
`;

export default GlobalStyle;
