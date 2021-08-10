export const aboutMe = () => {
    const aboutMeSection = document.createElement('div');
    aboutMeSection.id = "about-me";

    const h2El = document.createElement('h2');
    h2El.innerHTML = "About me";
    aboutMeSection.appendChild(h2El);

    const imgEL = document.createElement("img");
    imgEL.src = "./client/public/images/photo-profil-def.png";
    imgEL.alt = "Rafael sitting at the table";
    aboutMeSection.appendChild(imgEL);

    const paragraphContainer = document.createElement('div');
    paragraphContainer.className = "paragraph";

    const p1El = document.createElement('p');
    p1El.innerHTML = 'Hi I\'m Rafael Garcia, Civil Engineer starting in tha amazing world of Web Development, actually I\'m studying with tha amazing team of hack your future Belgium, mastering HTML5, CSS3, JavaScript, , you can follow my work on GitHub.';
    paragraphContainer.appendChild(p1El);
    
    const p2El = document.createElement('p');
    p2El.innerHTML = ' I am very passionate and enthusiastic about creating constructive and efficient solutions. i love learn new things, I believe that having an open mind can help you remain creative and grasp ideas from any subject to implement it in your field!';
    paragraphContainer.appendChild(p2El);
    aboutMeSection.appendChild(paragraphContainer);

    return aboutMeSection;
}

