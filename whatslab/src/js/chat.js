const history = [];

function handleChat(name, message) {
  history.push({
    nick: name,
    text: message,
  });

  //    console.log(history)
}

export { handleChat, history };
