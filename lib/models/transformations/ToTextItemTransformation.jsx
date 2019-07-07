import Transformation from './Transformation.jsx';
import ParseResult from '../ParseResult.jsx';
import TextItem from '../TextItem.jsx';
import { REMOVED_ANNOTATION } from '../Annotation.jsx';

// Abstract class for transformations producing TextItem(s) to be shown in the TextItemPageView
export default class ToTextItemTransformation extends Transformation {

    constructor(name) {
        super(name, TextItem.name);
        if (this.constructor === ToTextItemTransformation) {
            throw new TypeError("Can not construct abstract class.");
        }
    }

    completeTransform(parseResult /*: ParseResult */) {
        // The usual cleanup
        parseResult.messages = [];
        parseResult.pages.forEach(page => {
            page.items = page.items.filter(item => !item.annotation || item.annotation !== REMOVED_ANNOTATION);
            page.items.forEach(item => item.annotation = null);
        });
        return parseResult;
    }


}
