const linkedin = document.getElementById("linkedin");
const git = document.getElementById("git");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const modal = document.querySelector(".modal_contato");
const close = document.querySelector(".close_modal");
const sobreModal = document.querySelector(".modal_sobre");
const projetos = document.querySelector(".container_projetos");


function abrirModal(){
    addEventListener("click", () => {
        modal.style.display = "flex";
    })
};

function fecharModal(){
    addEventListener("click", () => {
        modal.style.display = "none";
    })
};


function abrirModalSobre(){
    addEventListener("click", () => {
        sobreModal.style.display = "flex";
    })
};

function fecharModalSobre(){
    addEventListener("click", () => {
        sobreModal.style.display = "none";
    })
};


let visibilidade = true;



function abrirProjetos() {
    if(visibilidade){
    addEventListener("click", () => {
        projetos.style.display = "flex"
    })
    visibilidade = false
    } else{
        addEventListener("click", () => {
            projetos.style.display = "none"
        })
        visibilidade = true
    }
}


// window.addEventListener("click", () => {
//     if(event.target.classList.contains("#linkedin"))
//     console.log(event)
// })

// function alterarTextoLinkedin() {
//   addEventListener("click", () => {
//     linkedin.innerHTML +=
//       "<figcaption> <a href='https://www.linkedin.com/in/victor-silva-teixeira-b9a4391a3/'>Linkedin</a></figcaption>";
//   });
// }

// function alterarTextoGit() {
//   addEventListener("click", () => {
//     git.innerHTML +=
//     "<figcaption> <a href='https://www.linkedin.com/in/victor-silva-teixeira-b9a4391a3/'>Linkedin</a></figcaption>";
// });
// }

// function alterarTextoEmail() {
//   addEventListener("click", () => {
//     git.innerHTML += "<figcaption>victorio5054@gmail.com</figcaption>";
//   });
// }

// function alterarTextoPhone() {
//   addEventListener("click", () => {
//     git.innerHTML += "<figcaption>(77)98838-3289</figcaption>";
//   });
// } FALTA MAIS CONHECIMENTO
