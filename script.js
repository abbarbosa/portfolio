function openArea(areaNumber) {
    // Oculta todas as áreas
    var areas = document.getElementsByClassName("area");
    for (var i = 0; i < areas.length; i++) {
      areas[i].style.display = "none";
    }
  
    // Exibe a área selecionada
    var selectedArea = document.getElementById("area" + areaNumber);
    selectedArea.style.display = "block";
  }
  
  function closeArea() {
    // Oculta todas as áreas
    var areas = document.getElementsByClassName("area");
    for (var i = 0; i < areas.length; i++) {
      areas[i].style.display = "none";
    }
  }

  function toggleArea(areaNumber) {
    var area = document.getElementById("area" + areaNumber);
    // Verifica se a área está visível
    if (area.style.display === "block") {
      // Se estiver visível, fecha
      area.style.display = "none";
    } else {
      // Se estiver oculta, abre
      area.style.display = "block";
    }
  }     

  function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  }
  function openNav() {
    document.getElementById("myNav").style.width = "100%"; // Defina a largura como 100% para ocupar toda a tela
    document.getElementById("myNav").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0";
  }