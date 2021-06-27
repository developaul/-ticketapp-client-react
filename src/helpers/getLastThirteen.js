export const getLastThirteen = async () => {
  const resp = await fetch(`${process.env.REACT_APP_SERVER}/lastThirteen`)
  const data = await resp.json()
  return data.lastThirteen
}