function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão renderizados
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim()

    if (!campoPesquisa) {
        section.innerHTML = "<p>Você precisa digitar algo sobre a música.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // String que armazenará o HTML gerado para todos os resultados
    let resultado = "";
    let titulo = "";

    // Itera sobre cada objeto de música no array de dados
    for (let dado of dados) {
        // Todas as propriedades relevantes em uma única string concatenada
        const camposConcat = `${dado.nome} ${dado.especie} ${dado.raca} ${dado.sexo} ${dado.idade} ${dado.porte} ${dado.personalidade} ${dado.tags}`;
        // Expressão regular para realizar a pesquisa, ignorando case
        const regex = new RegExp(campoPesquisa, 'i');


        if (regex.test(camposConcat)) {
            // Cria um novo elemento div para cada resultado 
            resultado += `
            <div class="resultado">
                <div id="infmusic" class="flex-container">
                    <div class="imgmusic">
                        <img class="music" src="${dado.imagem}" alt=""> 
                    </div>
                    
                    <ul class="detmusic">
                        <li><strong>Nome:</strong> ${dado.nome}</li>
                        <li><strong>Espécie:</strong> ${dado.especie}</li>
                        <li><strong>Raça:</strong> ${dado.raca}</li>
                        <li><strong>Sexo:</strong> ${dado.sexo}</li>
                        <li><strong>Idade:</strong> ${dado.idade}</li>
                        <li><strong>Porte:</strong> ${dado.porte}</li>
                        <li>&nbsp;</li>
                        <li>${dado.personalidade}</li>
                    </ul>
                </div>

                <div class="letmusic">
                    <h2>
                        ${dado.nome}
                    </h2>
                    <p class="descricao-meta"> 
                        <p class="historia">
                            ${dado.historia}
                        </p>
                    </p>
                    <a href=${dado.link} target="_blank"> Quero adotar &rarr;</a>
                </div>
            </div>
        `;
        }              
    }

    if (!resultado) {
        resultado = "<p>Não foi encontrado nenhum resultado.</p>"
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultado
}

