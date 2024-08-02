import React, { useEffect, useState } from "react";
import "./projects.css";
import SlideShow from "./projects/slideShow";

function Projects() {
  useEffect(() => {
    function _class(name) {
      return document.getElementsByClassName(name);
    }
    let projectPanes = _class("projects-header")[0].getElementsByTagName("div");
    for (let i = 0; i < projectPanes.length; i++) {
      projectPanes[i].addEventListener("click", function () {
        _class("projects-header")[0]
          .getElementsByClassName("active")[0]
          .classList.remove("active");
        projectPanes[i].classList.add("active");
        _class("project-indicator")[0].style.top = `${80 + i * 50}px`;
        _class("projects-content")[0]
          .getElementsByClassName("active2")[0]
          .classList.remove("active2");
        _class("projects-content")[0]
          .getElementsByClassName("text-white")
          [i].classList.add("active2");
      });
    }
  });

  let handleProjectsDropdown=()=>{
    document.getElementById("projectDropdown").classList.toggle("showProjects");
  }

  const handleClickOutside=(event)=>{
    let dropdown=document.getElementById("projectDropdown");
    if (!event.target.classList.contains('projectsDropbtn') && dropdown.classList.contains('showProjects')) {
      dropdown.classList.remove('showProjects');
    }
  }

  window.addEventListener('click', handleClickOutside);


  let [projectType,setProjectType]=useState("DSA");
  let [project,setProject]=useState("Sorting Visualizer");
  let [slideIndex,setSlideIndex] = useState(1);


  let data={
    "DSA":{
      "Sorting Visualizer":{
        name:"Sorting Visualizer",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/Sorting_Visualizer",
        live:"https://ankit-kumar-8700.github.io/Sorting_Visualizer/",
        desc:"Watch in real-time as various sorting algorithms bring order to unordered list of numbers, offering an interactive and educational experience in the art of sorting. Multiple Sorting Algos are implemented."
      },
      "Cash-Flow Minimiser":{
        name:"Cash-Flow Minimiser",
        images:2,
        github:"https://github.com/Ankit-Kumar-8700/Cash-Flow_Minimiser",
        live:"https://ankit-kumar-8700.github.io/Cash-Flow_Minimiser/",
        desc:"An innovative financial tool that optimizes and streamlines cash flow management, helping businesses minimize financial strain and maximize operational efficiency. Unlock smarter financial decisions with real-time insights and strategic planning."
      },
      "Sudoku Solver":{
        name:"Sudoku Solver",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/Sudoku_Solver",
        live:"https://ankit-kumar-8700.github.io/Sudoku_Solver/",
        desc:"A great web-app that uses the power of Back-tracking Algorithm in order to solve any Sudoku (built with all the error handling so that illegal sudoku don't pose any issue). Also, multiple size sudoku are available (4x4 and 9x9)."
      },
      "Text-Modifier":{
        name:"Text-Modifier",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/Text_Modifier",
        live:"https://ankit-kumar-8700-text-modifier.netlify.app/",
        desc:"Play with the text as much as you want. Capitalize them, sort them, replace via another text and much more functionalities, all built at one single place in order to take care of all your text issues and built with a very simplified design."
      }
    },
    "Web-Dev":{
      "Sociopedia (MERN)":{
        name:"Sociopedia",
        images:8,
        github:"https://github.com/Ankit-Kumar-8700/Sociopedia",
        video:"https://drive.google.com/file/d/1wzSVxNu6IZBxjC7a4OfzbXsfXLr_5NAI/view?usp=drive_link",
        desc:"A social media platform which supports Authentication, Registration, Friends management (Request Send/Receive/Revoke/Accept/Deny), Profile viewing, Post viewing, Post creation with/without images, 1-1 Chat functionality and Dark/Light Mode."
      },
      "iNotes (MERN)":{
        name:"iNotes",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/iNotes",
        video:"https://drive.google.com/file/d/1_7aAFMD6fgoQFXpVFvZZc5vAcvf9KtGv/view?usp=drive_link",
        desc:"Developed a basic web-based CRUD application for storing personal notes with Simple and Interactive UI, Sidebar with filter for 5 Note categories, supporting via backend Features: Authentication, Registration, Logout option, Perform CRUD Application on notes with image and filtering."
      },
      "E-waste Manager (MERN)":{
        name:"E-Waste Management (SIH)",
        images:11,
        github:"https://github.com/Ankit-Kumar-8700/SIH-HackWizards-E-WasteRecycle",
        video:"https://drive.google.com/file/d/1j7OJz7XkYvl1NxhwBHsS1Eskt0dolMQn/view?usp=drive_link",
        desc:"Developed a web-based application aimed at facilitating government-led e-waste recycling by connecting local individuals with recycling centers, with user interfaces for Local people, E-Waste Collectors and E-Waste recycle Centre. DhaleBot- A helping chatbot is also implemented in the website."
      },
      "Z-Upload (MERN)":{
        name:"Z-Upload",
        images:11,
        github:"https://github.com/Ankit-Kumar-8700/Z-Upload",
        video:"https://drive.google.com/file/d/119GosKl7pxIooaVJ6mkl14hj95h53jyr/view?usp=drive_link",
        desc:"The system enables Login/Register, Ownership management, 3 privacy modes, and Editable/Non-Editable options. It supports Upload/Download of Images/PDFs and Text data management. Use cases span Private, Protected + Editable, Protected + Non-Editable, Public + Editable, and Public + Non-Editable scenarios."
      },
      "Pokemon (Frontend)":{
        name:"Pokemon Website",
        images:4,
        github:"https://github.com/Ankit-Kumar-8700/Pokemon",
        live:"https://ankit-kumar-8700.github.io/Pokemon/",
        desc:"Dive into the vibrant world of Pokémon with our interactive frontend website! Explore detailed profiles, discover captivating visuals, and embark on a nostalgic journey filled with your favorite Pokémon characters."
      },
      "Unit-Convertor (Frontend)":{
        name:"Unit-Convertor (using RapidAPI)",
        images:2,
        github:"https://github.com/Ankit-Kumar-8700/Unit_Converter",
        live:"https://ankit-kumar-8700-react-unit-convertor.netlify.app/",
        desc:"This Unit Converter web app is powered by a robust Unit Converter API! Seamlessly convert between diverse units with precision and ease, making complex conversions a breeze for users. "
      },
    },
    "Data Analysis":{
      "Hotel Bookings":{
        name:"Hotel Bookings Analysis",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/hotel-management",
        desc:"Developed a dashboard for analyzing hotel bookings from intermediary apps over a 3-month summer break for multiple hotels. Features filters for city, platform, hotel, room type, booking status, and time period, enhancing data analysis capabilities."
      },
      "Job-Salary":{
        name:"Job-Salaries Analysis",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/job-salary-analysis",
        live:"https://public.tableau.com/app/profile/ankit.kumar4862/viz/Ankit_Employee_Salaries_Analysis/Dashboard1?publish=yes",
        desc:"Developed an interactive dashboard for analyzing global job salary data based on Computer Science related jobs. Implemented 2 filters for job locations and titles, empowering users to conduct detailed analysis."
      },
      "Pokemon":{
        name:"Pokemon Analysis",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/pokemon-analysis",
        desc:"Developed a 2-page interactive dashboard for analyzing individual or multiple Pokemon characters. Features 6 filters for specific data viewing, including 18 types, 7 generations, and rarity criteria, facilitating comprehensive analysis based on various parameters."
      },
      "Whatsapp Chat":{
        name:"Whatsapp Chat Analyzer",
        images:7,
        github:"https://github.com/Ankit-Kumar-8700/whatsapp-chat-analyzer",
        video:"https://drive.google.com/file/d/1rVzzMbdqhIqWD_q5aW9XBdk3XRF5AB-j/view?usp=drive_link",
        desc:"Built a tool for analyzing WhatsApp group or individual 1-1 chat conversations. As for analysis part, conducted daily, weekly, and monthly analysis, performed emoji and word analysis, generated word clouds depicting frequently used words, and tracked users’ contributions in the chat for 1 or all members."
      }
    },
    "Flask-ML":{
      "Pic-Text":{
        name:"Pic-to-Text Extractor (Flask)",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/image-to-text",
        desc:"Now extracting text from any picture is extremely easy using this web app. This web app also offers conversion of the extracted text into various languages, whcih can be read in textual form or can also be downloaded in Audio format."
      },
      "Grammar Checker":{
        name:"Spell-Grammar checker (Flask)",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/sentence-analyzer",
        desc:"This tool takes 1 or more sentences as input, and returns Gramatically and correctly spelt sentence as output with the help of AI. Also, provides recommendations for corrections, performs Named Entity Recognition (NER), Part of Speech (POS) analysis, and token recognition."
      },
      "Subbu-NurseBot":{
        name:"Subbu - Nursebot (Flask - NLP)",
        images:1,
        github:"https://github.com/Ankit-Kumar-8700/Subbu-NurseBot",
        video:"https://drive.google.com/file/d/1W-4nKi-xdOK-CKLAS2JMU1EELj13pv0M/view?usp=drive_link",
        desc:"Subbu, an interactive chatbot, provides medical assistance with symptom-based disease prediction, medicine lookup, disease-specific home remedies, medical advice, recommended medicines, and symptom analysis. It's designed to offer tailored support for medical queries and concerns."
      },
      "Disease Prediction":{
        name:"Multiple Disease Prediction (Flask - ML)",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/disease-prediction-ML",
        desc:"A Machine Learning project employing Flask and Sci-kit Learn for multiple disease prediction. It accepts data for various fields related to different diseases and predicts the likelihood of having a specific disease with 90% accuracy. Supports prediction for six different diseases."
      }
    },
    "Deep Learning":{
      "BWpic-Colorizer":{
        name:"BW pic Colorizer (CNN)",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/BWpic-colorizer",
        desc:"Transform your black and white landscape images into vibrant, colored renditions, enhancing their visual appeal. Using advanced algorithms, it infuses life into grayscale scenery, creating captivating and realistic colorized outputs with remarkable precision and detail."
      },
      "Style Transfer":{
        name:"Pic Style Transfer (CNN)",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/style-transfer-cnn",
        desc:"Edit your images by transferring artistic styles onto photographs seamlessly. Using deep learning techniques, it imbues ordinary pictures with the aesthetic qualities of famous artworks or selected styles, producing stunning and personalized visual compositions with remarkable ease and accuracy."
      },
      "Age Gender Prediction":{
        name:"Age & Gender Prediction (CNN)",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/age-gender-cnn",
        desc:"Implemented 2 sequential models for Age and Gender separately that can predict efficiently by looking at the picture. And also implemented a Functional model for predicting both the parameters simultaneously."
      },
      "Air Board":{
        name:"Virtual Board (OpenCV)",
        images:3,
        github:"https://github.com/Ankit-Kumar-8700/virtual-board",
        video:"https://drive.google.com/file/d/1hM1WM5bK3Pb5NsoLIwwzv-8cN3p3EgMR/view?usp=drive_link",
        desc:"Created a hand gesture-based drawing board enabling users to draw in the air with fingertips, tracked on-screen. Features include Hand-tracking drawing with 5 colors, 4 weights, shapes, pencil, and eraser tools for intuitive and versatile creation."
      },
      "Auto QA-System":{
        name:"Auto QA-Generator (NLP)",
        images:5,
        github:"https://github.com/Ankit-Kumar-8700/AutoQA-generator",
        desc:"The system automates question generation using the help of NLTK. Input 2-5 paragraphs, which triggers keyword extraction. Outputs include a summary, at least 5 crucial keywords, and various question types such as Multiple Choice, Fill in the blanks, and True/False."
      },
      "Gesture Control":{
        name:"Gesture Controller AI (LSTM-OpenCV)",
        images:1,
        github:"https://github.com/Ankit-Kumar-8700/gesture-control",
        video:"https://drive.google.com/file/d/1jjqYJ40b_YEiKGOg6Qhfuym1Vbhua202/view?usp=drive_link",
        desc:"The Touchless Gesture Control System is an innovative solution designed to enable users to control devices without the need for physical touch. This system combines OpenCV and LSTM to interpret and respond to hand gestures in real-time. For now, I have trained it for just 5 actions, but it can be made very dynamic for a lot of actions which in turn control the device as trained."
      },
    }
  }

  return (
    <div className="projectsOuter">
      <div className="projects-tabs">
        <div className="projects-header">
          <div className="active" onClick={()=>{setProjectType("DSA"); setProject(Object.keys(data["DSA"])[0]); setSlideIndex(1);}}>
          <i class="fa-solid fa-table-cells"></i>
            DSA
          </div>
          <div onClick={()=>{setProjectType("Web-Dev"); setProject(Object.keys(data["Web-Dev"])[0]); setSlideIndex(1);}}>
          <i class="fa-solid fa-globe"></i>
            Web Dev
          </div>
          <div onClick={()=>{setProjectType("Data Analysis"); setProject(Object.keys(data["Data Analysis"])[0]); setSlideIndex(1);}}>
          <i class="fa-solid fa-chart-line"></i>
          Analysis
          </div>
          <div onClick={()=>{setProjectType("Flask-ML"); setProject(Object.keys(data["Flask-ML"])[0]); setSlideIndex(1);}}>
          <i class="fa-solid fa-robot"></i>
            Flask/ML
          </div>
          <div onClick={()=>{setProjectType("Deep Learning"); setProject(Object.keys(data["Deep Learning"])[0]); setSlideIndex(1);}}>
          <i class="fa-solid fa-code-branch"></i>
          DL
          </div>
        </div>
        <div className="project-indicator"></div>
        <div className="projects-content">
        <div className="projectsDropdown">
          <button onClick={handleProjectsDropdown} className="text-white projectsDropbtn">{project} <i className="fa-regular fa-square-caret-down" style={{fontSize:"inherit", color:"inherit", backgroundColor:"transparent"}}></i></button>
          <div id="projectDropdown" className="projectsDropdown-content">
            {Object.keys(data[projectType]).map((key)=>(
              <button className="dropopt" key={key} onClick={()=>{setSlideIndex(1); setProject(key);}}>{key}</button>
            ))}
          </div>
        </div>
        <h2>
              {data[projectType][project].name}
            </h2>
            <SlideShow project={project} projectType={projectType} data={data[projectType][project]} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
            <div className="textProjects">
              <p>
              {data[projectType][project].desc}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
