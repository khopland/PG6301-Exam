const Messages = new Map();

function getMessages(id) {
  return Messages.get(id);
}

function createNewMessage(id, recipients) {
  if (!getMessages(id)) {
    Messages.set(id, { message: [], recipients });
    return true;
  }
  return false;
}

function addMessage(id, message) {
  const messages = getMessages(id);
  if (messages) {
    messages.message.push(message);
    Messages.set(id, messages);
    return true;
  }
  return false;
}

function getAllMessages(email) {
  const messages = [];
  Messages.forEach((v) => {
    if (v.recipients.includes(email)) messages.push(...v.message);
  });
  return messages;
}

function clearMessages() {
  Messages.clear();
}

module.exports = {
  getMessages,
  createNewMessage,
  addMessage,
  getAllMessages,
  clearMessages,
};
