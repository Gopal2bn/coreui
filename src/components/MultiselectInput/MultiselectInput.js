import React, { PropTypes } from 'react';
import Shared from '../../Shared';
import RWMultiselect from 'react-widgets/lib/Multiselect';
import defaultTheme from 'theme/components/MultiselectInput';
import cx from 'classnames/dedupe';
import mapProps from 'recompose/mapProps';
import { merge } from 'ramda';

const systemStyles = { };

const MultiselectInputContainer = mapProps(({ className, sheet, style, theme, ...rest }) => ({
  className: cx(sheet.classes.multiselectInput, theme.classes.multiselectInput, className),
  style: merge(theme.styles.multiselectInput, style),
  ...rest,
}))(RWMultiselect);

const StyledMultiselectInput = Shared.useSheet(MultiselectInputContainer, systemStyles);

/**
 * A select listbox alternative
 */
const MultiselectInput = (props) =>
  <StyledMultiselectInput {...props}>{props.children}</StyledMultiselectInput>;

const classes = defaultTheme.classes;
const options = defaultTheme.options;
const styles = defaultTheme.styles;

MultiselectInput.defaultProps = {
  busy: false,
  caseSensitive: false,
  duration: 250,
  filter: 'startsWith',
  isRtl: false,
  messages: {
    createNew: '(create new tag)',
    emptyFilter: 'The filter returned no results',
    emptyList: 'There are no items in this list',
  },
  minLength: 1,
  theme: { classes, options, styles },
};

MultiselectInput.displayName = 'MultiselectInput';

MultiselectInput.propTypes = {
  autoFocus: PropTypes.bool,
  /**
   * mark whether the widget is in a busy or loading state. If `true` the widget will display a spinner gif, useful when loading data via an ajax call.
   */
  busy: PropTypes.bool,
  /**
   * Use in conjunction with the filter prop. Filter the list without regard for case. This only applies to non function values for `filter`
   */
  caseSensitive: PropTypes.bool,
  children: PropTypes.node,
  createComponent: PropTypes.element,
  /**
   * provide an array of possible values for the MultiselectInput. If an array of `objects` is provided you should use the `valueField` and `textField` props, to specify which object properties comprise the value field (such as an id) and the field used to label the item.
   */
  data: PropTypes.array,
  /**
   * Disable the widget, If an `Array` of values is passed in only the tags specified will be disabled.
   */
  disabled: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  dropUp: PropTypes.bool,
  /**
   * The speed, in milliseconds, of the dropdown animation.
   */
  duration: PropTypes.number,
  /**
   * Specify a filtering method used to reduce the items in the dropdown as you type. There are a few built-in filtering methods that can be specified by passing the `String` name. You can explicitly opt out of filtering by setting filter to `false`
   * To handle custom filtering techniques provide a `function` that returns `true` or `false` for each passed in item (analogous to the [`array.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) builtin)
   * Acceptable values for filter are: `false` `"startsWith"` `"endsWith"` `"contains"` `function(String item)`
   */
  filter: PropTypes.oneOfType([PropTypes.bool, PropTypes.func, PropTypes.string]),
  /**
   * Determines how to group the MultiselectInput values. Providing a `string` will group the `data` array by that property. You can also provide a 'function' which should return the group value.
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
   * This component is used to render each possible item in the list. The default component renders the text of the selected item (specified by `textfield`)
   */
  itemComponent: PropTypes.element,
  listComponent: PropTypes.element,
  /**
   * Object hash containing display text and/or text for screen readers. Use the messages object to localize widget text and increase accessibility.
   */
  messages: PropTypes.shape({
    /**
     * The text label for creating new tags
     */
    createNew: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    /**
     * Text to display when the the current filter does not return any results
     */
    emptyFilter: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    /**
     * Text to display when the `data` prop array is empty.
     */
    emptyList: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  }),
  /**
   * Use in conjunction with the filter prop. Start filtering the list only after the value has reached a minimum length.
   */
  minLength: PropTypes.number,
  /**
   * change event Handler that is called when the value is changed. The handler is called with an array of values
   */
  onChange: PropTypes.func,
  /**
   * This handler fires when the user chooses to create a new tag, not in the data list. It is up to the widget parent to implement creation logic, a common implementation is shown below, where the new tag is selected and added to the data list.
   */
  onCreate: PropTypes.func,
  /**
   * Called when the value of the text box changes either from typing or a pasted value. `onSearch` should be used when the `searchTerm` prop is set.
   */
  onSearch: PropTypes.func,
  /**
   * This handler fires when an item has been selected from the list. It fires before the `onChange` handler, and fires regardless of whether the value has actually changed.
   */
  onSelect: PropTypes.func,
  /**
   * Called when the MultiselectInput is about to open or close. `onToggle` should be used when the `open` prop is set otherwise the widget will never open or close.
   */
  onToggle: PropTypes.func,
  /**
   * Whether or not the MultiselectInput is open. When unset (`undefined`) the MultiselectInput will handle the opening and closing internally. The `defaultOpen` prop can be used to set an initialization value for uncontrolled widgets.
   */
  open: PropTypes.bool,
  /**
   * The same as an input placeholder, only works in browsers that support the placeholder attribute for inputs
   */
  placeholder: PropTypes.string,
  /**
   * Place the widget in a readonly mode, If an `Array` of values is passed in only the tags specified will be readonly.
   */
  readOnly: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  /**
   * The string value of the current search being typed into the MultiselectInput. When unset (`undefined`) the MultiselectInput will handle the filtering internally. The `defaultSearchTerm` prop can be used to set an initialization value for uncontrolled widgets.
   */
  searchTerm: PropTypes.string,
  /**
   * This component is used to render each selected item. The default component renders the text of the selected item (specified by `textfield`)
   */
  tagComponent: PropTypes.element,
  /**
   * Specify which data item field to display in the $MultiselectInput and selected item. The `textField` prop may also also used as to find an item in the list as you type. Providing an accessor function allows for computed text values
   */
  textField: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  theme: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /**
   * The current values of the MultiselectInput. The value should can `null`, or an array of `valueField` values, or an array of objects (such as a few items in the `data` array)
   */
  value: PropTypes.array,
  /**
   * A dataItem field name for uniquely identifying items in the `data` list. A `valueField` is required when the `value` prop is not itself a dataItem. A `valueField` is useful when specifying the selected item, by its `id` instead of using the model as the value.
   * When a `valueField` is not provided, the MultiselectInput will use strict equality checks (`===`) to locate the `value` in the `data` list.
   */
  valueField: PropTypes.string,
};

Shared.registerComponent('MultiselectInput', MultiselectInput);

export default MultiselectInput;
