import React from "react";
import '../styles/App.css';

const App = () => {

  const projects = [
    {
      id: 1,
      name: "AI Resume Builder",
      description: "A web app that creates professional resumes using AI."
    },

    {
      id: 2,
      name: "Food Delivery App",
      description: "An application to order food online with live tracking."
    },

    {
      id: 3,
      name: "Portfolio Website",
      description: "A personal portfolio website showcasing skills and projects."
    },

    {
      id: 4,
      name: "Chat Application",
      description: "A real-time chat application using React and Socket.io."
    }
  ];

  return (

    <div id="main">

      {projects.map((item) => {

        return (

          <div key={item.id}>

            <h1 data-ns-test="project-name">
              {item.name}
            </h1>

            <p data-ns-test="project-description">
              {item.description}
            </p>

          </div>
        )
      })}

    </div>
  )
}

export default App;