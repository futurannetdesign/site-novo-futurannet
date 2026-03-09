// Adicionar ao script.js
window.addEventListener("load", function () {
  // Verificar carregamento
  console.log("Tempo de carregamento: " + performance.now() + "ms");

  // Verificar recursos
  performance.getEntriesByType("resource").forEach((resource) => {
    if (resource.duration > 1000) {
      console.warn("Recurso lento:", resource.name);
    }
  });
});
