import styled from 'styled-components';

import colors from '../../../../config/colors';
import dimensions from '../../../../config/dimensions';
import durations from '../../../../config/durations';
import { fontSizes } from '../../../../config/sizes';
import zIndices from '../../../../config/zIndices';

export default styled.div`
  display: ${getDisplay};
  min-width: 13.5rem;

  > label {
    display: block;
    font-size: ${fontSizes.md};
    color: ${colors.black};
    margin-bottom: 0.25rem;

    > span {
      display: inline-block;
      font-size: ${fontSizes.sm};
      color: ${colors.gray};
    }
  }

  > main {
    position: relative;
    min-height: ${dimensions.input.minHeight.md};
    padding: 0 0.75rem;
    display: flex;
    align-items: center;

    abbr[title] {
      border-bottom: none;
      cursor: inherit;
      text-decoration: none;
    }

    .calendar {
      border: none;
      border-radius: ${dimensions.defaults.radius.large};
      box-shadow: 0 0 ${dimensions.card.blurRadius} 0 rgba(90, 76, 67, 0.1);
      font-size: 1rem;
      z-index: ${zIndices.popover};
    }

    .react-date-picker {
      width: 100%;
      z-index: 2;
      cursor: text;

      + div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 2px solid ${colors.input.border.default};
        border-radius: ${dimensions.defaults.radius.medium};
        transition: all ${durations.input.transition} ease-in-out;
        z-index: -1;
      }

      input {
        font-size: ${getInputFontSize};
      }
    }

    .react-date-picker--disabled {
      background: transparent;

      + div {
        background: ${colors.disabled};
      }

      * {
        cursor: not-allowed;
      }
    }

    .react-date-picker--open {
      + div {
        border-color: ${colors.primary};
      }
    }

    .react-date-picker__wrapper {
      border: none;
      width: 100%;
      display: flex;
      align-items: center;
    }

    .react-date-picker__inputGroup {
      display: flex;
      align-items: center;
      flex: 1;
    }

    .react-calendar__navigation__label {
      text-transform: capitalize;
      font-size: ${fontSizes.md};
    }

    .react-calendar__month-view__weekdays {
      text-transform: uppercase;
      font-size: ${fontSizes.xs};
      font-weight: 600;
    }

    .react-calendar__tile.react-calendar__month-view__days__day {
      border-radius: ${dimensions.defaults.radius.large};
    }

    .react-calendar__tile.react-calendar__month-view__days__day.react-calendar__tile--active {
      font-weight: 600;
      background: ${colors.primary};
    }

    .react-date-picker__inputGroup > input {
      border: 2px solid transparent;
      transition: all ${durations.input.transition} ease;
    }

    .react-date-picker__inputGroup > input:focus {
      outline: none;
      background: none;
      border: 2px solid ${colors.primary};
      border-radius: ${dimensions.defaults.radius.medium};
      padding: 0 0.25rem;
    }

    .react-calendar__navigation__arrow {
      border-radius: ${dimensions.defaults.radius.medium};
    }
  }
`;

function getDisplay({ fluid }) {
  return fluid ? 'block' : 'inline-block';
}

function getInputFontSize({ size }) {
  return { md: fontSizes.md, lg: fontSizes.xxl }[size];
}
