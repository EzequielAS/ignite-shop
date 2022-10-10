import { styled } from '../../styles'

export const DialogContainer = styled('div', {
  height: '100vh',
  maxWidth: 480,
  width: '100%',
  position: 'fixed',
  right: 0, 
  bottom: 0,
  top: 0,
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',
  transition: 'transform 0.3s',
  zIndex: 99,
  padding: '3rem',
  paddingTop: '4.5rem',

  display: 'flex',
  flexDirection: 'column',

  h3: {
    marginBottom: '2rem',
    color: '$gray100',
    fontSize: '1.25rem'
  },

  variants: {
    toggle: {
      isOpen: {
        transform: 'translateX(0)',
      },
      isClosed: {
        transform: 'translateX(100%)',
      }
    }
  }
})

export const ProductsWrapper = styled('div', {
  flex: 'auto',
  overflowY: 'auto',
  marginBottom: '1rem'
})

export const ProductCard = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  '& + &': {
    marginTop: '1.5rem'
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 93,
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const InfosWrapper = styled('div', {
  span: {
    display: 'block',
    lineHeight: 1.8,
  },

  b: {
    display: 'block',
    lineHeight: 1.8,
  },

  button: {
    marginTop: '0.5rem',
    background: 'transparent',
    border: 'none',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '1rem'
  }
})

export const CloseButton = styled('button', {
  background: 'transparent',
  border: 'none',
  color: '$gray300',

  position: 'absolute',
  top: 24,
  right: 24
})

export const DetailsContainer = styled('div', {
  button: {
    borderRadius: 8,
    background: '$green500',
    border: 'none',
    padding: '1.25rem',
    fontSize: '1.125rem',
    color: '$white',
    width: '100%',
    fontWeight: 'bold',
    marginTop: '3.4rem',

    '&:hover': {
      background: '$green300',
    }
  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '$gray100',
    fontSize: '1.125rem',
    lineHeight: 1.4,

    '& + div': {
      marginTop: 7
    },

    'b:last-child': {
      fontSize: '1.5rem'
    }
  }
})
