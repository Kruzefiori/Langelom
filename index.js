const lais = "Oi meu bein! \n Primeiramente sou péssimo com css queria colocar um efeitin legal mas estou traumatizado com css e não consigo \n Enfim, queria te desejar um maravilhoso aniversário e uma vida maravilhosa pq você é uma pessoa maravilhosa\n Eu gosto muito muito mesmo de você, sinto muito sua falta e de conversar com você pq a Laix é uma pessoa que torna tudo mais leve na vida das pessoas e todo mundo tem sorte de te ter perto\n \n Enfim, feliz aniversário, uma ótima vida e um ótimo tudo porque você merece tudo que quiser. conte comigo pra o que você precisar nessa vida e na próxima (na próxima da próxima a gente conversa ok). Amo você e tenho um carinho enorme demais por você <3 "


addEventListener("submit", (e) => {
    console.log("teste")
    e.preventDefault()

    console.log(e);

    const val = document.querySelector('input').value;
  console.log(val);

  if(val == 683317533){
        document.getElementById("buttonAppear").innerHTML = '<p>Senha Correta!</p>';
        var foto = document.getElementById("imagem")
        foto.src = "image/WhatsApp Image 2023-05-19 at 10.02.32 (2).jpeg"

    var resultado = document.querySelector(".resultado")
    resultado.innerHTML = lais;
  }
})