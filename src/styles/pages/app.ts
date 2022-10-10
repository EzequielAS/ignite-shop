import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
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
  background: '$gray800'
})
