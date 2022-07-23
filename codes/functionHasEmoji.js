// Source: https://www.regextester.com/106421

function run(input) {
  const regex = new RegExp(
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/,
    'gim'
  );
  return regex.test(input);
}
