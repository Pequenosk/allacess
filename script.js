// ---- Funções para conversão de nicks em imagens ---- //
function nickToImage(nick) {
  // Retorna uma string HTML com a imagem do Habbo
  return `<img src="https://www.habbonce.site/api/imagens?nick=${nick}&head_direction=3&direction=3&size=l&gesture=&headonly=true&action=std,crr=&img_format=PNG" alt="${nick}" data-title="${nick}">`;
}

function replaceNicksWithImages(containerSelector) {
  // Converte nicks em imagens dentro do container especificado
  $(containerSelector + " a").each(function() {
    var nick = $(this).text();
    $(this).replaceWith(nickToImage(nick));
  });
}



// ---- Função para tooltips de imagens ---- //
function showImageTooltip(image) {
  // Obtém o título da imagem
  var title = image.data("title");
  // Cria um span para o tooltip
  var titleSpan = $('<span class="image-title">' + title + '</span>');
  // Posiciona o tooltip sobre a imagem
  titleSpan.css({
    position: "absolute",
    top: image.offset().top + image.height() / 1 - titleSpan.height() / 2,
    left: image.offset().left + image.width() / 8 - titleSpan.width() / 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    fontFamily: "Poppins",
  });
  // Adiciona o tooltip ao body
  $("body").append(titleSpan);
}

function hideImageTooltip() {
  // Remove o tooltip
  $(".image-title").remove();
}


// ---- Ocultar estatísticas por padrão ---- //
$(document).ready(function() {
  // Esconde as estatísticas em todas as páginas, exceto na página inicial
  $(".statistics").hide();
  // Exibe as estatísticas na página inicial
  if (location.pathname === "/") {
    $(".statistics").show();
  }
});
// Tooltips para imagens
$(document).ready(function() {
  // Exibe o tooltip ao passar o mouse sobre a imagem
  $(".accordion-content img, .statistics-item img").hover(
    function() {
      showImageTooltip($(this));
    },
    // Remove o tooltip ao sair da imagem
    function() {
      hideImageTooltip();
    }
  );
});
// Conversão de nicks em imagens
$(document).ready(function() {
  // Converte nicks em imagens no accordion
  replaceNicksWithImages(".accordion-content.users");

  // Converte nicks em imagens nas estatísticas
  replaceNicksWithImages(".statistics-item");
});
