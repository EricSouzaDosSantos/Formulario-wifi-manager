// Get the select element after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    var select = document.getElementById('select-database');
    let emailDatabase = document.getElementById('email-database')
    let passwordDatabase = document.getElementById('password-database')
    let keyDatabase = document.getElementById('key-database')
    let urlDatabase = document.getElementById('url-database')
    let labelsConfigurationForm = document.getElementById('labels-address')
    let formConfiguration = document.getElementById('configuration-form')
    let sectionForm = document.getElementById('section-form');
    const mediaQuery = window.matchMedia('(max-width: 1100px)');

  
    if (select) {
      var variavel = '';
      select.onchange = function() {
        variavel = this.value;
        console.log(variavel);
        if(variavel == 'false'){
            emailDatabase.style.display = "none";
            passwordDatabase.style.display = "none";
            keyDatabase.style.display = "none";
            urlDatabase.style.display = "none";
            labelsConfigurationForm.style.display = "none";
            formConfiguration.style.height = "10vh"
            formConfiguration.style.marginBottom = "20px"
            sectionForm.style.height = "130vh"
        }else{
            if (mediaQuery.matches) {
                console.log('O media type "screen" está ativo.');
                formConfiguration.style.height = "35vh"
                emailDatabase.style.display = "flex";
                passwordDatabase.style.display = "flex";
                keyDatabase.style.display = "flex";
                urlDatabase.style.display = "flex";
                sectionForm.style.height = "165vh"
                labelsConfigurationForm.style.display = "none";
            } else {
                console.log('O media type "screen" não está ativo.');
                emailDatabase.style.display = "flex";
                passwordDatabase.style.display = "flex";
                keyDatabase.style.display = "flex";
                urlDatabase.style.display = "flex";
                labelsConfigurationForm.style.display = "flex";
                formConfiguration.style.height = "35vh"
                sectionForm.style.height = "150vh"
            }
        }
      };
    } else {
      console.error('Element with ID "select-database" not found.');
    }
  });

  const mediaQueryScreen = window.matchMedia('screen');

  // Função para verificar se o media type 'screen' está ativo
  function checkMediaType() {
      if (mediaQueryScreen.matches) {
          console.log('O media type "screen" está ativo.');
      } else {
          console.log('O media type "screen" não está ativo.');
      }
  }
  
  // Chama a função ao carregar a página
  checkMediaType();
  
  // Adiciona um event listener para monitorar mudanças no media type
  mediaQueryScreen.addEventListener('change', checkMediaType);