import React, { PropTypes } from 'react';
import Shared from '../../Shared';
import RWSelectList from 'react-widgets/lib/SelectList';
import defaultTheme from 'theme/components/SelectListInput';
import cx from 'classnames/dedupe';
import mapProps from 'recompose/mapProps';
import { merge } from 'ramda';

const systemStyles = { };

const SelectListInputContainer = mapProps(({ className, sheet, style, theme, ...rest }) => ({
  className: cx(sheet.classes.multiselectInput, theme.classes.multiselectInput, className),
  style: merge(theme.styles.multiselectInput, style),
  ...rest,
}))(RWSelectList);

const StyledSelectListInput = Shared.useSheet(SelectListInputContainer, systemStyles);

/**
 * Creates a list of radio buttons or checkboxes bound to a data set.
 */
const SelectListInput = (props) =>
  <StyledSelectListInput {...props}>{props.children}</StyledSelectListInput>;

const classes = defaultTheme.classes;
const options = defaultTheme.options;
const styles = defaultTheme.styles;

SelectListInput.defaultProps = {
  busy: false,
  isRtl: false,
  messages: {
    emptyList: 'There are no items in this list',
  },
  theme: { classes, options, styles },
};

SelectListInput.displayName = 'SelectListInput';

SelectListInput.propTypes = {
  /**
   * mark whether the widget is in a busy or loading state. If `true` the widget will display a spinner gif, useful when loading data via an ajax call.
   */
  busy: PropTypes.bool,

  children: PropTypes.node,
  /**
   * provide an array of possible values for the SelectListInput. If an array of `objects` is provided you should use the `valueField` and `textField` props, to specify which object properties comprise the value field (such as an id) and the field used to label the item.
   */
  data: PropTypes.array,

  delay: PropTypes.number,
  /**
   * Disable the widget, if an `Array` of values is passed in only those values will be disabled.
   */
  disabled: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  /**
   * Determines how to group the SelectListInput dropdown list. Providing a `string` will group the `data` array by that property. You can also provide a 'function' which should return the group value.
   */
  groupBy: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * This component is used to render each option group, when `groupBy` is specified. By default the `groupBy` value will be used.
   */
  groupComponent: PropTypes.element,
  /**
   * mark whether the SelectListInput should render right-to-left. This property can also be implicitly passed to the widget through a `childContext` prop (`isRtl`) this allows higher level application components to specify the direction.
   */
  isRtl: PropTypes.bool,
  /**
   * This component is used to render each item in the SelectListInput. The default component renders the text of the selected item (specified by `textfield`)
   */
  itemComponent: PropTypes.element,

  listComponent: PropTypes.element,
  /**
   * Object hash containing display text and/or text for screen readers. Use the `messages` object to localize widget text and increase accessibility.
   */
  messages: PropTypes.shape({
    /**
     * Text to display when the `data` prop array is empty
     */
    emptyList: PropTypes.string,
  }),
  /**
   * Whether or not the SelectListInput allows multiple selection or not. when `false` the SelectListInput will render as a list of radio buttons, and checkboxes when `true`.
   */
  multiple: PropTypes.bool,
  /**
   * Change event handler that is called when the value is changed. `values` will be an array when `multiple` prop is set.
   */
  onChange: PropTypes.func,
  /**
   * A handler called when focus shifts on the SelectListInput. Internally this is used to ensure the focused item is in view. If you want to define your own "scrollTo" behavior or just disable the default one specify an `onMove` handler. The handler is called with the relevant DOM nodes needed to implement scroll behavior: the list element, the element that is currently focused, and a focused value.
   */
  onMove: PropTypes.func,
  /**
   * Place the SelectListInput in a read-only mode, If an `Array` of values is passed in only those values will be read-only.
   */
  readOnly: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  /**
   * Specify which data item field to display in the $SelectListInput and selected item. The `textField` prop may also also used as to find an item in the list as you type. Providing an accessor function allows for computed text values
   */
  textField: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  theme: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /**
   * The current value or values of the SelectListInput. This can be an object (such as a member of the `data` array) or a primitive value, hinted to by the `valueField`. The widget value does not need to be in the `data` array; widgets can have values that are not in their list.
   */
  value: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.array,
  ]),
  /**
   * A dataItem field name for uniquely identifying items in the `data` list. A `valueField` is required when the `value` prop is not itself a dataItem. A `valueField` is useful when specifying the selected item, by its `id` instead of using the model as the value.
   * When a `valueField` is not provided, the SelectListInput will use strict equality checks (`===`) to locate the `value` in the `data` list.
   */
  valueField: PropTypes.string,
};

Shared.registerComponent('SelectListInput', SelectListInput);

export default SelectListInput;
