exports.sendMessage = async function(message) {
  return this.request({
    method: 'post',
    url: 'message/send',
    data: message,
  });
};
