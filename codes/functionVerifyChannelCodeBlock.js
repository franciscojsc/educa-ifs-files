function run(channel) {
  channel = typeof channel == 'string' ? JSON.parse(channel) : channel;
  const { tagCodeBlock } = channel;
  return tagCodeBlock;
}
