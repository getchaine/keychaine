import PropTypes from 'prop-types'
import styled from 'styled-components'
import propTypes from '@styled-system/prop-types'
import {color, variant, space } from 'styled-system'
import {COMMON, get} from './constants'
import sx from './sx'
import {theme} from './theme'


const variants = variant({
  variants: {
    small: {
      p: 3,
      width: '384px',
      height: '48px',
      fontSize: 1,
      lineHeight: '24px',
    },
    large: {
      p: 2,
      width: '384px',
      minHeight: '96px',
      fontSize: 1,
      lineHeight: '24px'
    }
  }
});

//@Himani why isn't this border radius working??? but the color one is

const Card = styled.div`
  position: relative;
  display: flex;
  border-radius: ${get('radii.2')};
  color: ${get('colors.red.1')};

  box-shadow: 0px 2px 12px rgba(44, 44, 46, 0.08);
  box-sizing: border-box;
  min-width: 0;
  flex-direction: column;
  justify-content: space-around;

  p:last-child {
      margin-bottom: 0;
    }
  
    svg {
      color: ${props => get(props.color)};
      margin-right: ${get('space.2')};
    }

  ${variants};
  ${sx};
  ${COMMON};
`;

Card.defaultProps = {
    variant: 'small',
    bg: 'white.1',
    color: 'gray.1'
};

Card.propTypes = {
    children: PropTypes.node,
    full: PropTypes.bool,
    variant: PropTypes.oneOf(['small', 'medium']),
    ...COMMON.propTypes,
    ...sx.propTypes,
    ...color.prototype
};
  
  export default Card