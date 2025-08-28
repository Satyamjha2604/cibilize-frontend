import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark-black: #0A0A0A;
    --card-dark: rgba(30, 30, 30, 0.5);
    --light-gray: #EFEFEF;
    --accent-purple: #9D4EDD;
    --accent-pink: #C77DFF;
    --accent-blue: #90E0EF;
  }
  
  body {
    margin: 0;
    font-family: 'Poppins', 'Inter', sans-serif;
    background-color: var(--dark-black);
    color: var(--light-gray);
    min-height: 100vh;
    overflow-x: hidden; /* Prevents horizontal scroll from gradients */
  }

  /*
    Ultra-Premium Background Effect
    This creates a subtle, glowing, and moving background that feels dynamic and high-tech.
  */
  body::before {
    content: '';
    position: fixed;
    top: -50vh;
    left: -50vw;
    width: 200vw;
    height: 200vh;
    background: radial-gradient(circle at 75% 25%, rgba(157, 78, 221, 0.1), transparent 50%),
                radial-gradient(circle at 25% 75%, rgba(144, 224, 239, 0.1), transparent 50%);
    animation: backgroundShift 20s infinite alternate;
    z-index: -1;
  }

  @keyframes backgroundShift {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
  
  .glass-card {
    background: var(--card-dark);
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .glass-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5), 
                0 0 10px rgba(157, 78, 221, 0.5); /* Subtle hover glow */
  }

  .cta-button {
    background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
    border: none;
    border-radius: 50px;
    padding: 10px 25px;
    color: var(--dark-black);
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
