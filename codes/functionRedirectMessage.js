/**
 * @param context.blockName
 * @param context.blockId
 * @param input.type
 * @param input.content
 * @param input.content@type
 * @param config.skillSource
 * @param skillDestination
 * @param extras
 *
 * @return [Object]
 */

function run(
  blockName = null,
  blockId = null,
  inputType = null,
  inputContent = null,
  inputContentType = null,
  skillSource = null,
  skillDestination = null,
  extras = null
) {
  return {
    blockName,
    blockId,
    inputType,
    inputContent,
    inputContentType,
    skillSource,
    skillDestination,
    extras,
  };
}
