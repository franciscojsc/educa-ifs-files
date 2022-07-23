function run(channel) {
  channel = typeof channel == 'string' ? JSON.parse(channel) : channel;
  const { tagCodeInline } = channel;
  return tagCodeInline;
}
