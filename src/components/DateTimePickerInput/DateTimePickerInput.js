import React, { PropTypes } from 'react';
import Shared from '../../Shared';
import RWDateTimePicker from 'react-widgets/lib/DateTimePicker';
import defaultTheme from 'theme/components/DateTimePickerInput';
import cx from 'classnames/dedupe';
import mapProps from 'recompose/mapProps';
import { merge } from 'ramda';

const systemStyles = { };

const DateTimePickerInputContainer = mapProps(({ className, sheet, style, theme, ...rest }) => ({
  className: cx(sheet.classes.dateTimePickerInput, theme.classes.dateTimePickerInput, className),
  style: merge(theme.styles.dateTimePickerInput, style),
  ...rest,
}))(RWDateTimePicker);

const StyledDateTimePickerInput = Shared.useSheet(DateTimePickerInputContainer, systemStyles);

/**
 * You must configure a localizer to use this component!
 * Manipulate different parts of a JavaScript Date object with ease. Date formats are highly localized, and localization is hard, rather than provide a half baked solution, coreui requires that you specify a *localizer* in order for the widget to work. You can read more about localizers here: [localization](http://jquense.github.io/react-widgets/docs/#/i18n).
 * Dates are never mutated but always return and operate on a new Date instance. When the `date` prop is used the DateTimePickerInput will pass through the relevant props to the Calendar Widget and Calendar keyboard navigation keys will also work.
 */
const DateTimePickerInput = (props) =>
  <StyledDateTimePickerInput {...props}>{props.children}</StyledDateTimePickerInput>;

const classes = defaultTheme.classes;
const options = defaultTheme.options;
const styles = defaultTheme.styles;

DateTimePickerInput.defaultProps = {
  calendar: true,
  duration: 250,
  finalView: 'century',
  footer: false,
  initialView: 'month',
  isRtl: false,
  max: new Date(2099, 11, 31),
  messages: { calendarButton: 'Select Date', timeButton: 'Select Time' },
  min: new Date(1900, 0, 1),
  step: 30,
  theme: { classes, options, styles },
  time: true,
};

DateTimePickerInput.displayName = 'DateTimePickerInput';

DateTimePickerInput.propTypes = {
  'aria-labelledby': PropTypes.string,
  autoFocus: PropTypes.bool,
  /**
   * Whether to show the date picker button.
   */
  calendar: PropTypes.bool,
  /**
   * A formatter for century, the default formats the first and last year of the century like: 1900 - 1999.
   */
  centuryFormat: PropTypes.string,
  children: PropTypes.node,
  culture: PropTypes.string,
  /**
   * Default current date at which the calendar opens. If none is provided, opens at today's date or the `value` date (if any).
   */
  currentDate: PropTypes.instanceOf(Date),
  /**
   * A formatter for day of the month
   */
  dateFormat: PropTypes.string,
  /**
   * Provide a custom component to render the days of the month. The Component is provided the following props
   * - `date`: a `Date` object for the day of the month to render
   * - `label`: a formatted `String` of the date to render. To adjust the format of the `label` string use the `dateFormat` prop, listed below.
   */
  dayComponent: PropTypes.element,
  /**
   * A formatter calendar days of the week, the default formats each day as a Narrow name: "Mo", "Tu", etc.
   */
  dayFormat: PropTypes.string,
  /**
   * A formatter for decade, the default formats the first and last year of the decade like: 2000 - 2009.
   */
  decadeFormat: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  /**
   * The highest level view the calendar can navigate up to. This value should be higher than `initialView`
   * Acceptable values are: `"month"` `"year"` `"decade"` `"century"`
   */
  dropUp: PropTypes.bool,
  /**
   * The speed, in milliseconds, of the either dropdown animation.
   */
  duration: PropTypes.number,
  /**
   * A string format to be used while the date input has focus. Useful for showing a simpler format for inputting. For more information about formats visit the [Localization page](i18n)
   */
  editFormat: PropTypes.string,
  /**
   * The highest level view the calendar can navigate up to. This value should be higher than `initialView`
   * Acceptable values are: `"month"` `"year"` `"decade"` `"century"`
   */
  finalView: PropTypes.string,
  /**
   * Show or hide the Calendar footer.
   */
  footer: PropTypes.bool,
  /**
   * A formatter for the Calendar footer, formats Today's Date as a string.
   */
  footerFormat: PropTypes.string,
  /**
   * A string format used to display the date value. For more information about formats visit the [Localization page](i18n)
   */
  format: PropTypes.string,
  /**
   * A formatter for the header button of the month view
   */
  headerFormat: PropTypes.string,
  /**
   * The starting and lowest level view the calendar can navigate down to.
   * Acceptable values are: `"month"` `"year"` `"decade"` `"century"`
   */
  initialView: PropTypes.string,
  /**
   * mark whether the widget should render right-to-left. This property can also be implicitly passed to the widget through a `childContext` prop (`isRtl`) this allows higher level application components to specify the direction.
   */
  isRtl: PropTypes.bool,
  /**
   * The maximum Date that can be selected. Max only limits selection, it doesn't constrain the date values that can be typed or pasted into the widget. If you need this behavior you can constrain values via the `onChange` handler.
   */
  max: PropTypes.instanceOf(Date),
  /**
   * Object hash containing display text and/or text for screen readers. Use the `messages` object to localize widget text and increase accessibility.
   */
  messages: PropTypes.shape({
    /**
     * title and screen reader text for the left arrow button.
     */
    calendarButton: PropTypes.string,
    /**
     * title and screen reader text for the right arrow button.
     */
    timeButton: PropTypes.string,
  }),
  /**
   * The minimum Date that can be selected. Min only limits selection, it doesn't constrain the date values that can be typed or pasted into the widget. If you need this behavior you can constrain values via the `onChange` handler.
   */
  min: PropTypes.instanceOf(Date),
  /**
   * A formatter for month name.
   */
  monthFormat: PropTypes.string,
  /**
   * Change event Handler that is called when the value is changed. The handler is called with the Date object
   */
  name: PropTypes.string,
  /**
   * change event Handler that is called when the value is changed. The handler is called with both the current `Date` object (or null if it was not parseable), and the second argument is a `string` representation of the date value, formated by the `format` prop.
   */
  onChange: PropTypes.func,
  /**
   * Change event Handler that is called when the currentDate is changed. The handler is called with the currentDate object
   */
  onCurrentDateChange: PropTypes.func,
  /**
   * Callback fired when the Calendar navigates between views, or forward and backwards in time.
   */
  onNavigate: PropTypes.func,
  /**
   * Whether or not the DateTimePickerInput is open. When unset (`undefined`) the DateTimePickerInput will handle the opening and closing internally. The `defaultOpen` prop can be used to set an initialization value for uncontrolled widgets.
   * Acceptable values are: `false` `"calendar"` `"time"`
   */
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * This handler fires when an item has been selected from the list or calendar. It fires before the `onChange` handler, and fires regardless of whether the value has actually changed.
   */
  onSelect: PropTypes.func,
  /**
   * Called when the DateTimePickerInput is about to open or close. `onToggle` should be used when the `open` prop is set otherwise the widget will never open or close.
   */
  onToggle: PropTypes.func,
  /**
   * Determines how the widget parses the typed date string into a Date object. You can provide an array of formats to try, or provide a function that returns a date to handle parsing yourself. When `parse` is unspecified and the `format` prop is a `String` parse will automatically use that format as its default
   */
  parse: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
    PropTypes.func,
  ]),
  placeholder: PropTypes.string,
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  /**
   * The amount of minutes between each entry in the time list.
   */
  step: PropTypes.number,

  theme: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  /**
   * Whether to show the time picker button.
   */
  time: PropTypes.bool,

  timeComponent: PropTypes.element,
  /**
   * A string format used by the time dropdown to render times. For more information about formats visit the [Localization page](i18n)
   */
  timeFormat: PropTypes.string,
  /**
   * The current selected date, should be a `Date` instance or `null`.
   */
  value: PropTypes.instanceOf(Date),
  /**
   * A formatter for the year.
   */
  yearFormat: PropTypes.string,
};

Shared.registerComponent('DateTimePickerInput', DateTimePickerInput);

export default DateTimePickerInput;
