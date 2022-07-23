function run(timeActual) {
  const different = Math.abs(+new Date() - +timeActual);
  const day = different / (1000 * 3600 * 24);
  var diffDays = Math.ceil(day);
  return diffDays;
}
