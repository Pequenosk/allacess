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
$(document).ready(function() {
  $('.accordion-content img').hover(function() {
    // Get the title of the image
    var title = $(this).data('title');

    // Create a new span element to display the title
    var titleSpan = $('<span class="image-title">' + title + '</span>');

    // Position the title span over the image
    titleSpan.css({
      position: 'absolute',
      top: $(this).offset().top + $(this).height() / 1 - titleSpan.height() / 2,
      left: $(this).offset().left + $(this).width() / 8 - titleSpan.width() / 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontFamily: 'Poppins'
    });

    // Append the title span to the body (or any suitable container)
    $('body').append(titleSpan);
  }, function() {
    // Remove the title span when the mouse leaves
    $('.image-title').remove();
  });
});


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
  $('.statistics-item img').hover(function() {
    // Get the title of the image
    var title = $(this).data('title');

    // Create a new span element to display the title
    var titleSpan = $('<span class="image-title">' + title + '</span>');

    // Position the title span over the image
    titleSpan.css({
      position: 'absolute',
      top: $(this).offset().top + $(this).height() / 1 - titleSpan.height() / 2,
      left: $(this).offset().left + $(this).width() / 8 - titleSpan.width() / 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontFamily: 'Poppins'
    });

    // Append the title span to the body (or any suitable container)
    $('body').append(titleSpan);
  }, function() {
    // Remove the title span when the mouse leaves
    $('.image-title').remove();
  });
});
