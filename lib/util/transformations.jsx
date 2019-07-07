import CalculateGlobalStats from '../models/transformations/text-item/CalculateGlobalStats.jsx'

import CompactLines from '../models/transformations/line-item/CompactLines.jsx'
import RemoveRepetitiveElements from '../models/transformations/line-item/RemoveRepetitiveElements.jsx'
import VerticalToHorizontal from '../models/transformations/line-item/VerticalToHorizontal.jsx'
import DetectTOC from '../models/transformations/line-item/DetectTOC.jsx'
import DetectListItems from '../models/transformations/line-item/DetectListItems.jsx'
import DetectHeaders from '../models/transformations/line-item/DetectHeaders.jsx'

import GatherBlocks from '../models/transformations/line-item-block/GatherBlocks.jsx'
import DetectCodeQuoteBlocks from '../models/transformations/line-item-block/DetectCodeQuoteBlocks.jsx'
import DetectListLevels from '../models/transformations/line-item-block/DetectListLevels.jsx'
import ToTextBlocks from '../models/transformations/ToTextBlocks.jsx'
import ToMarkdown from '../models/transformations/ToMarkdown.jsx'

import ParseResult from '../models/ParseResult.jsx'

export const makeTransformations = fontMap => [
  new CalculateGlobalStats(fontMap),
  new CompactLines(),
  new RemoveRepetitiveElements(),
  new VerticalToHorizontal(),
  new DetectTOC(),
  new DetectHeaders(),
  new DetectListItems(),

  new GatherBlocks(),
  new DetectCodeQuoteBlocks(),
  new DetectListLevels(),

  new ToTextBlocks(),
  new ToMarkdown(),
]

export const transform = (pages, transformations) => {
  var parseResult = new ParseResult({ pages })
  let lastTransformation
  transformations.forEach(transformation => {
      if (lastTransformation) {
          parseResult = lastTransformation.completeTransform(parseResult)
      }
      parseResult = transformation.transform(parseResult)
      lastTransformation = transformation
  })
  return parseResult
}