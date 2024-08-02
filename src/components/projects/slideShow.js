import React, { useEffect } from 'react';
import './slideShow.css';

function SlideShow({project, projectType, data, slideIndex, setSlideIndex}) {

    useEffect(()=>{
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    },[slideIndex, project, projectType])


function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    if (slideIndex + n > slides.length) {setSlideIndex(1)}    
    else if (slideIndex + n < 1) {setSlideIndex(slides.length)}
    else setSlideIndex(slideIndex + n);
}

function currentSlide(n) {
  setSlideIndex(slideIndex = n);
}

  return (
    <div className='slideShow'>
      <div className="slideshow-container">

      {Array(data.images).fill(1).map((_, i) =>
        <div className="mySlides fade">
        <div className="numbertext">{i+1} / {data.images}</div>
        <img alt='.temp' src={require(`../../images/projects/${projectType}/${project}/${i+1}.png`)} />
      </div>
      )}

<button className="prev" onClick={()=>plusSlides(-1)}>❮</button>
<button className="next" onClick={()=>plusSlides(1)}>❯</button>

</div>

<div >
{Array(data.images).fill(1).map((_, i) =>
        <span className="dot" onClick={()=>currentSlide(i+1)}></span>
      )}
</div>

<div className="projectLinks">
  <a href={data.github} target='_blank' rel="noreferrer">Github <i class="fa-brands fa-github"></i></a>
  {data.video && <a href={data.video} target='_blank' rel="noreferrer">Video <i class="fa-solid fa-video"></i></a>}
  {data.live && <a href={data.live} target='_blank' rel="noreferrer">Live Site <i class="fa-solid fa-globe"></i></a>}
</div>
    </div>
  )
}

export default SlideShow
