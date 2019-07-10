import React from 'react'

import TextItemPageView from './TextItemPageView.jsx'
import CalculateGlobalStats from '@opendocsg/pdf2md/lib/models/transformations/text-item/CalculateGlobalStats'

import LineItemPageView from './LineItemPageView.jsx'
import * as CompactLines from '@opendocsg/pdf2md/lib/models/transformations/line-item/CompactLines'
import * as RemoveRepetitiveElements from '@opendocsg/pdf2md/lib/models/transformations/line-item/RemoveRepetitiveElements'
import * as VerticalToHorizontal from '@opendocsg/pdf2md/lib/models/transformations/line-item/VerticalToHorizontal'
import * as DetectTOC from '@opendocsg/pdf2md/lib/models/transformations/line-item/DetectTOC'
import * as DetectListItems from '@opendocsg/pdf2md/lib/models/transformations/line-item/DetectListItems'
import * as DetectHeaders from '@opendocsg/pdf2md/lib/models/transformations/line-item/DetectHeaders'

import LineItemBlockPageView from './LineItemBlockPageView.jsx'
import * as GatherBlocks from '@opendocsg/pdf2md/lib/models/transformations/line-item-block/GatherBlocks'
import * as DetectCodeQuoteBlocks from '@opendocsg/pdf2md/lib/models/transformations/line-item-block/DetectCodeQuoteBlocks'
import * as DetectListLevels from '@opendocsg/pdf2md/lib/models/transformations/line-item-block/DetectListLevels'

import MarkdownPageView from './MarkdownPageView.jsx'
import * as ToMarkdown from '@opendocsg/pdf2md/lib/models/transformations/ToMarkdown'

import TextPageView from './TextPageView.jsx'
import * as ToTextBlocks from '@opendocsg/pdf2md/lib/models/transformations/ToTextBlocks'

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

