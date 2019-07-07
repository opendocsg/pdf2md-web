// @flow

import Transformation from './Transformation.jsx';
import LineItemBlock from '../LineItemBlock.jsx';
import { REMOVED_ANNOTATION } from '../Annotation.jsx';

/*::
import ParseResult from '../../ParseResult.jsx'
*/

// Abstract class for transformations producing LineItemBlock(s) to be shown in the LineItemBlockPageView
export default class ToLineItemBlockTransformation extends Transformation {

    constructor(name) {
        super(name, LineItemBlock.name);
        if (this.constructor === ToLineItemBlockTransformation) {
            throw new TypeError("Can not construct abstract class.");
        }
    }

    completeTransform(parseResult /*: ParseResult */) /*: ParseResult */{
        // The usual cleanup
        parseResult.messages = [];
        parseResult.pages.forEach(page => {
            page.items = page.items.filter(item => !item.annotation || item.annotation !== REMOVED_ANNOTATION);
            page.items.forEach(item => item.annotation = null);
        });
        return parseResult;
    }

}