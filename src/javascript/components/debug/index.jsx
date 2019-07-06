import React from 'react'

import TextItemPageView from './TextItemPageView.jsx'
import CalculateGlobalStats from '../../models/transformations/textitem/CalculateGlobalStats.jsx'

import LineItemPageView from './LineItemPageView.jsx'
import CompactLines from '../../models/transformations/lineitem/CompactLines.jsx'
import RemoveRepetitiveElements from '../../models/transformations/lineitem/RemoveRepetitiveElements.jsx'
import VerticalToHorizontal from '../../models/transformations/lineitem/VerticalToHorizontal.jsx'
import DetectTOC from '../../models/transformations/lineitem/DetectTOC.jsx'
import DetectListItems from '../../models/transformations/lineitem/DetectListItems.jsx'
import DetectHeaders from '../../models/transformations/lineitem/DetectHeaders.jsx'

import LineItemBlockPageView from './LineItemBlockPageView.jsx'
import GatherBlocks from '../../models/transformations/textitemblock/GatherBlocks.jsx'
import DetectCodeQuoteBlocks from '../../models/transformations/textitemblock/DetectCodeQuoteBlocks.jsx'
import DetectListLevels from '../../models/transformations/textitemblock/DetectListLevels.jsx'

import MarkdownPageView from './MarkdownPageView.jsx'
import ToMarkdown from '../../models/transformations/ToMarkdown.jsx'

import TextPageView from './TextPageView.jsx'
import ToTextBlocks from '../../models/transformations/ToTextBlocks.jsx'

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

