import { styled, keyframes } from '../../styles'

const blink = keyframes({
  from: {
    background: '$green500'
  },

  to: {
    background: '$gray800',
  }
})

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '95%',
  maxWidth: '1180px',
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ShopButton = styled('button', {
  border: 'none',
  padding: '0.75rem',
  borderRadius: 6,
  color: '$gray300',
  background: '$gray800',
  position: 'relative',
  animation: `${blink} ease 1s`,

  span: {
    position: 'absolute',
    right: 0,
    top: 0,
    background: '$green500',
    color: '$white',
    width: 24,
    height: 24,
    borderRadius: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'translate(50%, -50%)',
    fontWeight: 'bold',
    border: '3px solid $gray900',
    boxSizing: 'content-box',
  },
})
