module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("_help | _play or _p", {
    type: "STREAMING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
