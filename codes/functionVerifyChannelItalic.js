function run(channel) {
  channel = typeof channel == 'string' ? JSON.parse(channel) : channel;
  const { tagItalic } = channel;
  return tagItalic;
}
