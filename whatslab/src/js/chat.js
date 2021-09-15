var history = [];

function handleChat(name, message, key) {
  history.push({
    nick: name,
    text: message,
    listKey: Number(key),
  });
}

function deletMessage(clue) {
  let answ = window.confirm("Deseja apagar esta mensagem?");

  if (answ === true) {
    document.getElementById(history[clue].listKey).style.display = "none";
  }
}

export { handleChat, history, deletMessage };
