((Utils) => {
    const i=0;
    const App = {
      htmlElements: {
        pokemonFinderForm: document.querySelector("#pokemon-finder-form"),
        pokemonFinderSearchType: document.querySelector("#pokemon-finder-search-type"),
        pokemonFinderInput: document.querySelector("#pokemon-finder-query"),
        pokemonFinderOutput: document.querySelector("#pokemon-finder-response"),
      },
      init: () => {
        App.htmlElements.pokemonFinderForm.addEventListener("submit",
          App.handlers.pokemonFinderFormOnSubmit
        );
        App.htmlElements.pokemonFinderForm.addEventListener("reset",
          App.handlers.pokemonFinderFormOnReset
        );
      },
      handlers: {
        pokemonFinderFormOnSubmit: async (e) => {
          e.preventDefault();

          document.getElementById("pokemon-finder-response").style.visibility = 'visible';
  
          const query = App.htmlElements.pokemonFinderInput.value;
          const searchType = App.htmlElements.pokemonFinderSearchType.value;
          
          try {
            const response = await Utils.getPokemon({
              query,
              searchType,
            });
            const renderedTemplate = App.templates.render({
              searchType,
              response,
            });
            App.htmlElements.pokemonFinderOutput.innerHTML = renderedTemplate;
          } catch (error) {
            App.htmlElements.pokemonFinderOutput.innerHTML = `<h1>${error}</h1>`;
          }
        },
        pokemonFinderFormOnReset: async (e) => {
          e.preventDefault();
          document.getElementById("pokemon-finder-response").style.visibility = 'hidden';

         
        },
      },
      templates: {
        render: ({ searchType, response }) => {
          const renderMap = {
            ability: App.templates.abilityCard,
            pokemon: App.templates.pokemonCard,
            
          };
          return renderMap[searchType]
            ? renderMap[searchType](response)
            : App.templates.errorCard();
        },
        errorCard: () => `<h1>There was an error</h1>`,
        pokemonCard: ({ id, name,sprites,height, weight, abilities, species }) => {


          const abilityList =  abilities.map(
            ({ ability})=>
            `<li><a target="_blank" >${ability.name}
            </a></li>`)
          
          const backSprite= sprites.back_default
          const frontSprite= sprites.front_default
          
          return `<h2 id=tittle2>${name} (${id})</h2>
          <br>


          <table id="responseTable">

                <tr >
                  <td align="left"><strong>Sprites</strong></td>
                  <td><strong>Weight / Height</strong></td>
                </tr>

                <tr >
                    <td align="left">
                    <img width="40" height="40" src="${frontSprite}"/>
                    <img width="40" height="40" src="${backSprite}"/>
                    </td>
                    <td class="text">
                    ${weight}/${height}
                        
                    </td>
                </tr>
                
                <tr>                 
                  <td><strong>Abilities</strong></td>
                </tr>
                <tr>
                  <td class="text"><ul>${abilityList.join("")}
                  </ul></td>
                  
                </tr>
            
            </table>`

        },
        abilityCard: ({ name, pokemon }) => {
          const pokemonList = pokemon.map(
            ({ pokemon, is_hidden }) =>
              `<li><a target="_blank">${pokemon.name}</a></li>`
          );
          return `<h1 id=tittle2>${name}</h1><br>
          <h4>Who can learn it?</h4>
          <ul>${pokemonList.join("")}</ul>`;
        },
      },
    };
    App.init();
  })(document.Utils);
  
  