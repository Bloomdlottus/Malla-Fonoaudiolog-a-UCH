body {
  font-family: Arial, sans-serif;
  text-align: center;
}

#canvas {
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
  position: relative;
  margin-top: 20px;
}

.curso {
  width: 180px;
  height: 60px;
  background-color: #e0e0e0;
  border: 2px solid #888;
  border-radius: 8px;
  line-height: 60px;
  text-align: center;
  position: absolute;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#curso1 {
  top: 50px;
  left: 100px;
}

#curso2 {
  top: 200px;
  left: 100px;
}

#curso3 {
  top: 350px;
  left: 300px;
}

.curso.aprobado {
  background-color: #4caf50;
  color: white;
}
