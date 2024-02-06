import './future'

const App = () => {

  const client = new Future()

client.Ticker({symbol:'BTC_USDT'}).then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))


  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
