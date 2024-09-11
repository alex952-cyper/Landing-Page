


    // OBJETIVO PRINCIPAL - quando clicar na seta para avançar temos que esconder todas as imagens e mostrar a próximo imagem 

    //     a imagem atual começa em 0 porque é a primeira imagem, assim que for clicando no avaçar eu preciso adicionar mais 1 ao contador de imagens pra poder saber que agora eu vou  mostrar a próxima imagem

    //     - esconder todas as imagens
    //         pegar todas as imagens usando o DOM e remover a classe mostrar

    //     -mostrar a próxima imagem 
    //         pegar toddas as imagens, descobrir qual é a próxima, e colocar a classe mostrar nela 

    const imagensPainel = document.querySelectorAll(".imagem-painel");
    const setaAvancar = document.getElementById("btn-avancar");
    const setaVoltar = document.getElementById("btn-voltar");
    let imagemAtual = 0;

    setaAvancar.addEventListener("click", function () {

        const totalDeImagens = imagensPainel.length - 1;

        // teste se o contador da imagemAtual e igual ao total de imagens
        
        if(imagemAtual === totalDeImagens){
            return;
        }

         imagemAtual++;

         Esconder();

    imagensPainel[imagemAtual].classList.add("mostrar");

    })
  
    setaVoltar.addEventListener("click", function () {

        if(imagemAtual === 0){
            return;
        }

         imagemAtual--;
    
           Esconder();
    
        imagensPainel[imagemAtual].classList.add("mostrar");
        
        });
        
        
    function Esconder(){
        imagensPainel.forEach(imagem => {
            imagem.classList.remove("mostrar");
           });

    }


      