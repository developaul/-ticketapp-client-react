export const getUserStorage = () => ({
  agent: localStorage.getItem('agent'),
  desktop: localStorage.getItem('desktop')
})