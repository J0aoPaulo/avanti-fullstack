const evento = {
    nome: "Joao Paulo Almeida",
    evento: "Workshop de Java",
    data: "10 de dezembro de 2024",
    horario: "17h",
    local: "Auditório da Universidade Federal do Ceará",
    diasParaEvento: 6
  };
  
  function gerarMensagem(dados) {
    if (dados.diasParaEvento === 0) {
      return `🎉 O evento é hoje! Não perca! 🎉`;
    }
  
    return `
    Olá, ${dados.nome}! 👋
    Estamos felizes em confirmar sua participação no evento "${dados.evento}". 
    📅 Data: ${dados.data}
    ⏰ Horário: ${dados.horario}
    📍 Local: ${dados.local}
    🚀 Faltam apenas ${dados.diasParaEvento} dias! Nos vemos lá! 🚀
    `;
  }
  
  console.log(gerarMensagem(evento));
  
  const eventoHoje = { 
    ...evento, 
    diasParaEvento: 0 
  };
  
  console.log(gerarMensagem(eventoHoje));