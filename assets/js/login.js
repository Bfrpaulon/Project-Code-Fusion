// Inicializa o SDK do Facebook
window.fbAsyncInit = function () {
    FB.init({
        appId: '1460352514495897',
        cookie: true,
        xfbml: true,
        version: 'v13.0'
    });

    // Verifica se o usuário já está conectado e faz o login automaticamente
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });

    // Manipulador de eventos do botão de login com o Facebook
    document.getElementById('facebook-btn').addEventListener('click', function () {
        FB.login(function (response) {
            checkFacebookLoginStatus(response);
        }, { scope: 'public_profile,email' });
    });
};

// Carrega o SDK do Facebook de forma assíncrona
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Verifica o status de login do Facebook e faz o login no site
function checkFacebookLoginStatus(response) {
    if (response.status === 'connected') {
        // O usuário já está conectado com o Facebook
        loginWithFacebook(response.authResponse.accessToken);
    } else {
        // O usuário não está conectado com o Facebook
        console.log('Usuário não conectado com o Facebook.');
    }
}

// Faz o login no site com o token de acesso do Facebook
function loginWithFacebook(accessToken) {
    // Envia o token de acesso do Facebook para o seu servidor para autenticação
    // e redireciona para a página de perfil do usuário após o login
}

document.getElementById('facebook-btn').addEventListener('click', function() {
    FB.login(function(response) {
      checkFacebookLoginStatus(response);
    }, {scope: 'public_profile,email'});
  });
  
  function checkFacebookLoginStatus(response) {
    if (response.status === 'connected') {
      // O usuário já está conectado com o Facebook
      registerWithFacebook(response.authResponse.accessToken);
    } else {
      // O usuário não está conectado com o Facebook
      console.log('Usuário não conectado com o Facebook.');
    }
  }
  
  function registerWithFacebook(accessToken) {
    FB.api('/me?fields=id,name,email,picture', function(response) {
      var user = {
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        facebook_token: accessToken
      };
  
      // Envia os dados do usuário para o seu servidor para criar uma nova conta de usuário
    });
  }
  