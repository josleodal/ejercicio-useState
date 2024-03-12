import './App.css'

function App() {
 // Paso 2: Define dos variables de estado
 const [name, setName] = useState("Sofía");
 const [newName, setNewName] = useState('');

 // Paso 4: Lista de nombres de profesores
 const teacherNames = ["Data", "Reyes", "Yolanda"];

 // Función para manejar el cambio de nombre al hacer clic en el botón
 const handleNameChange = () => {
   if (newName.trim() !== '') {
     setName(newName);
     setNewName('');
   }
 };

 return (
   <div>
     {/* Paso 3: Renderiza el título con el nombre actual del profesor */}
     <h2>Teacher Name: {name}</h2>

     {/* Paso 4: Renderiza la lista de nombres de profesores */}
     <ul>
       {teacherNames.map((teacher, index) => (
         <li key={index} onClick={() => setNewName(teacher)}>
           {teacher}
         </li>
       ))}
     </ul>

     {/* Botón para aplicar el cambio de nombre */}
     <button onClick={handleNameChange}>Change Name</button>
   </div>
 );
}

export default App

import React, { useState } from 'react';

