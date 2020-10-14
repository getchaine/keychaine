import PropTypes from 'prop-types'
import styled from 'styled-components'
import {variant} from 'styled-system'
import {COMMON, get} from './constants'
import sx from './sx'
import {theme} from './theme'

const bgStyles = () => { get('colors.blackfade15')(props) };

const variants = variant({
  variants: {
    small: {
      p: 3,
      minHeight: '48px',
      fontSize: 1,
      lineHeight: '24px'
    },
    large: {
      p: 3,
      minHeight: '96',
      fontSize: 1,
      lineHeight: '24px'
    }
  }
})


const Card = styled.div`
    position: relative;
    display: flex;
    color: ${get('gray.1')};
    bg: ${bg};
    border-radius: 12px;
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

    ${COMMON};
    ${variants}
    ${sx};
  `


Card.defaultProps = {
    variant: 'small',
    bg: 'white',
  };


Card.propTypes = {
    children: PropTypes.node,
    full: PropTypes.bool,
    variant: PropTypes.oneOf(['small', 'medium']),
    bg: PropTypes.oneOf(['disabled']),
    ...COMMON.propTypes,
    ...sx.propTypes
}
  
  export default Card