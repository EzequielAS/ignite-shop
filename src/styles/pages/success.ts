import { styled } from "..";

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem'
  },

  a: {
    '&:first-child': {
      marginBottom: '6.5rem',
    },

    '&:last-child': {
      marginTop: '5rem',
      display: 'block',
      fontSize: '$lg',
      color: '$green500',
      textDecoration: 'none',  
      fontWeight: 'bold',
      lineHeight: 1.4,

      '&:hover': {
        color: '$green300',
      }
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 135,
  height: 135,
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '100%',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const ImagesWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

