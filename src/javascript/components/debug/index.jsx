import React from 'react'

import TextItemPageView from './TextItemPageView.jsx'
import CalculateGlobalStats from '../../../../lib/models/transformations/text-item/CalculateGlobalStats.jsx'

import LineItemPageView from './LineItemPageView.jsx'
import CompactLines from '../../../../lib/models/transformations/line-item/CompactLines.jsx'
import RemoveRepetitiveElements from '../../../../lib/models/transformations/line-item/RemoveRepetitiveElements.jsx'
import VerticalToHorizontal from '../../../../lib/models/transformations/line-item/VerticalToHorizontal.jsx'
import DetectTOC from '../../../../lib/models/transformations/line-item/DetectTOC.jsx'
import DetectListItems from '../../../../lib/models/transformations/line-item/DetectListItems.jsx'
import DetectHeaders from '../../../../lib/models/transformations/line-item/DetectHeaders.jsx'

import LineItemBlockPageView from './LineItemBlockPageView.jsx'
import GatherBlocks from '../../../../lib/models/transformations/line-item-block/GatherBlocks.jsx'
import DetectCodeQuoteBlocks from '../../../../lib/models/transformations/line-item-block/DetectCodeQuoteBlocks.jsx'
import DetectListLevels from '../../../../lib/models/transformations/line-item-block/DetectListLevels.jsx'

import MarkdownPageView from './MarkdownPageView.jsx'
import ToMarkdown from '../../../../lib/models/transformations/ToMarkdown.jsx'

import TextPageView from './TextPageView.jsx'
import ToTextBlocks from '../../../../lib/models/transformations/ToTextBlocks.jsx'

export const showModificationCheckbox = name => name !== ToMarkdown.name && name !== ToTextBlocks.name
export const transformationToPageView = {}

function textItem (page, modificationsOnly) {
  return <TextItemPageView
    key={ page.index }
    page={ page }
    modificationsOnly={ modificationsOnly }
    showWhitespaces={ false } />
}

transformationToPageView[CalculateGlobalStats.name] = textItem

function lineItem (page, modificationsOnly) {
  return <LineItemPageView
    key={ page.index }
    page={ page }
    modificationsOnly={ modificationsOnly }
    showWhitespaces={ false } />
}

transformationToPageView[CompactLines.name] = lineItem
transformationToPageView[RemoveRepetitiveElements.name] = lineItem
transformationToPageView[VerticalToHorizontal.name] = lineItem
transformationToPageView[DetectTOC.name] = lineItem
transformationToPageView[DetectListItems.name] = lineItem
transformationToPageView[DetectHeaders.name] = lineItem


function lineItemBlock (page, modificationsOnly) {
  return <LineItemBlockPageView
    key={ page.index }
    page={ page }
    modificationsOnly={ modificationsOnly }
    showWhitespaces={ false } />
}

transformationToPageView[GatherBlocks.name] = lineItemBlock
transformationToPageView[DetectCodeQuoteBlocks.name] = lineItemBlock

transformationToPageView[DetectListLevels.name] = function lineItemBlockWithSpaces (page, modificationsOnly) {
  return <LineItemBlockPageView
    key={ page.index }
    page={ page }
    modificationsOnly={ modificationsOnly }
    showWhitespaces={ true } />
}

transformationToPageView[ToMarkdown.name] = function markdown (page) {
  return <MarkdownPageView key={ page.index } page={ page } />
}

transformationToPageView[ToTextBlocks.name] = function text (page) {
  return <TextPageView key={ page.index } page={ page } />
}

