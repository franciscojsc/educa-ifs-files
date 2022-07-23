function run(identity) {
  try {
    const fqdn = identity.split('@')[1];
    const channel = channels[fqdn];
    if (!channel) {
      throw new Error(`Channel ${identity} not found`);
    }
    return channel;
  } catch (error) {
    return error.message;
  }
}

const channels = {
  '0mn.io': {
    tagBold: {
      open: '<b>',
      close: '</b>',
    },
    tagItalic: {
      open: '<i>',
      close: '</i>',
    },
    tagCodeInline: {
      open: '<code>',
      close: '</code>',
    },
    tagCodeBlock: {
      open: '<pre><code>',
      close: '</code></pre>',
    },
  },
  'messenger.gw.msging.net': {
    tagBold: {
      open: '*',
      close: '*',
    },
    tagItalic: {
      open: '_',
      close: '_',
    },
    tagCodeInline: {
      open: '`',
      close: '`',
    },
    tagCodeBlock: {
      open: '```',
      close: '```',
    },
  },
  'telegram.gw.msging.net': {
    tagBold: {
      open: '<b>',
      close: '</b>',
    },
    tagItalic: {
      open: '<i>',
      close: '</i>',
    },
    tagCodeInline: {
      open: '<code>',
      close: '</code>',
    },
    tagCodeBlock: {
      open: '<pre><code>',
      close: '</code></pre>',
    },
  },
};
