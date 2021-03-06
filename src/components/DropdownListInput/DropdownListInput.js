import React, { PropTypes } from 'react';
import Shared from '../../Shared';
import RWDropdownList from 'react-widgets/lib/DropdownList';
import defaultTheme from 'theme/components/DropdownListInput';
import cx from 'classnames/dedupe';
import mapProps from 'recompose/mapProps';
import { merge } from 'ramda';

const systemStyles = { };

const DropdownListInputContainer = mapProps(({ className, sheet, style, theme, ...rest }) => ({
  className: cx(sheet.classes.dropdownListInput, theme.classes.dropdownListInput, className),
  style: merge(theme.styles.dropdownListInput, style),
  ...rest,
}))(RWDropdownList);

const StyledDropdownListInput = Shared.useSheet(DropdownListInputContainer, systemStyles);

const DropdownListInput = (props) =>
  <StyledDropdownListInput {...props}>{props.children}</StyledDropdownListInput>;

const classes = defaultTheme.classes;
const options = defaultTheme.options;
const styles = defaultTheme.styles;

DropdownListInput.defaultProps = {
  busy: false,
  caseSensitive: false,
  filter: false,
  isRtl: false,
  messages: {
    emptyFilter: 'The filter returned no results',
    emptyList: 'There are no items in this list',
    open: 'Open Dropdown',
  },
  minLength: 1,
  theme: { classes, options, styles },
};

DropdownListInput.displayName = 'DropdownListInput';

DropdownListInput.propTypes = {
  /**
   * mark whether the widget is in a busy or loading state. If `true` the widget will display a spinner gif, useful when loading data via an ajax call.
   */
  busy: PropTypes.bool,
  /**
   * Use in conjunction with the filter prop. Filter the list without regard for case. This only applies to non function values for `filter`
   */
  caseSensitive: PropTypes.bool,
  children: PropTypes.node,
  /**
   * provide an array of possible values for the DropdownListInput. If an array of `objects` is provided you should use the `valueField` and `textField` props, to specify which object properties comprise the value field (such as an id) and the field used to label the item.
   */
  data: PropTypes.array,
  delay: PropTypes.number,
  /**
   * Disable the widget, if an `Array` of values is passed in only those values will be disabled.
   */
  disabled: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  dropUp: PropTypes.bool,
  /**
   * The speed, in milliseconds, of the dropdown animation.
   */
  duration: PropTypes.number,
  /**
   * Specify a filtering method used to reduce the items in the dropdown as you type. There are a few built-in filtering methods that can be specified by passing the `String` name.
   * To handle custom filtering techniques provide a `function` that returns `true` or `false` for each passed in item (analogous to the [array.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) builtin)
   * Acceptable values for filter are: `false` `"startsWith"` `"endsWith"` `"contains"` `function(String item)`
   */
  filter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.string]),
  /**
   * Determines how to group the {widgetName}. Providing a `string` will group the `data` array by that property. You can also provide a function which should return the group value.
   */
  groupBy: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /**
   * This component is used to render each option group, when `groupBy` is specified. By default the `groupBy` value will be used.
   */
  groupComponent: PropTypes.element,
  /**
   * mark whether the widget should render right-to-left. This property can also be implicitly passed to the widget through a `childContext` prop (`isRtl`) this allows higher level application components to specify the direction.
   */
  isRtl: PropTypes.bool,
  /**
   * This component is used to render each possible item in the DropdownListInput. The default component renders the text of the selected item (specified by `textfield`)
   */
  itemComponent: PropTypes.element,
  listComponent: PropTypes.element,
  /**
   * Object hash containing display text and/or text for screen readers. Use the `messages` object to localize widget text and increase accessibility.
   */
  messages: PropTypes.shape({
    /**
     * Text to display when the the current filter does not return any results.
     */
    emptyFilter: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    /**
     * Text to display when the `data` prop array is empty.
     */
    emptyList: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    /**
     * The placeholder text for the filter input.
     */
    filterPlaceholder: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    /**
     * Dropdown button text for screen readers.
     */
    open: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }),
  /**
   * Use in conjunction with the filter prop. Start filtering the list only after the value has reached a minimum length.
   */
  minLength: PropTypes.number,
  /**
   * Change event Handler that is called when the value is changed.
   */
  onChange: PropTypes.func,
  /**
   * Called when the value of the filter input changes either from typing or a pasted value. `onSearch` should be used when the `searchTerm` prop is set.
   */
  onSearch: PropTypes.func,
  /**
   * This handler fires when an item has been selected from the list. It fires before the `onChange` handler, and fires regardless of whether the value has actually changed.
   */
  onSelect: PropTypes.func,
  /**
   * Called when the {widgetName} is about to open or close. `onToggle` should be used when the `open` prop is set otherwise the widget open buttons won't work.
   */
  onToggle: PropTypes.func,
  /**
   * Whether or not the {widgetName} is open. When unset (`undefined`) the {widgetName} will handle the opening and closing internally. The `defaultOpen` prop can be used to set an initialization value for uncontrolled widgets.
   */
  open: PropTypes.bool,
  /**
   * Text to display when the value is empty.
   */
  placeholder: PropTypes.string,
  /**
   * Place the {widgetName} in a read-only mode, If an `Array` of values is passed in only those values will be read-only.
   */
  readOnly: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  /**
   * The string value of the current search being typed into the {widgetName}. When unset (`undefined`) the {widgetName} will handle the filtering internally. The `defaultSearchTerm` prop can be used to set an initialization value for uncontrolled widgets. `searchTerm` is only relevant when the `filter` prop is set.
   */
  searchTerm: PropTypes.string,
  /**
   * Specify which data item field to display in the DropdownListInput and selected item. The `textField` prop may also also used as to find an item in the list as you type. Providing an accessor function allows for computed text values
   */
  textField: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  theme: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /**
   * The current value of the {widgetName}. This can be an object (such as a member of the `data` array) or a primitive value, hinted to by the `valueField`. The widget value does not need to be in the `data` array; widgets can have values that are not in their list.
   */
  value: PropTypes.any,
  /**
   * This component is used to render the selected value of the DropdownListInput. The default component renders the text of the selected item (specified by `textfield`)
   */
  valueComponent: PropTypes.element,
  /**
   * A dataItem field name for uniquely identifying items in the `data` list. A `valueField` is required when the `value` prop is not itself a dataItem. A `valueField` is useful when specifying the selected item, by its `id` instead of using the model as the value.
   * When a `valueField` is not provided, the {widgetName} will use strict equality checks (`===`) to locate the `value` in the `data` list.
   */
  valueField: PropTypes.string,
};

Shared.registerComponent('DropdownListInput', DropdownListInput);

export default DropdownListInput;
