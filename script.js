/* styles.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
}

.trivia-container {
  overflow: hidden;
  width: 300px;
  height: 100px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
}

#trivia-list {
  list-style: none;
  padding: 0;
  margin: 0;
  animation: scroll 10s linear infinite;
}

#trivia-list li {
  padding: 10px;
  text-align: center;
}

@keyframes scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
}
