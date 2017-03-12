function brainHover() {

  let skills = ["Bootstrap", "Photoshop", "Electron", "Html", "Css", "Javascript", "Jquery", "AngularJs", "Php", "MongoDb", "Mysql", "Symfony", "Laravel", "NodeJs", "ExpressJs", "Git"];

  function hovering(item) {

    document.getElementById(item).addEventListener("mouseover", function(event) {

      let parentDocument = window.parent.document;
      let skillsText = parentDocument.getElementById('boardSkills');
      skillsText.innerHTML = item;

    });
  }

  skills.forEach(hovering);
}
