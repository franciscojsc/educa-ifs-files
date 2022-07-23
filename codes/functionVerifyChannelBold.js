function run(channel) {
  channel = typeof channel == 'string' ? JSON.parse(channel) : channel;
  const { tagBold } = channel;
  return tagBold;
}
