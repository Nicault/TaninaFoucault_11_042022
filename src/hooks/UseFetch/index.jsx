import { useState, useEffect } from 'react'

function useFetch(url) {
  const [loadData, setloadData] = useState({})

  const [isLoading, setLoading] = useState(true)

  const [error, setError] = useState(false)

  useEffect(() => {
    if (!url) return

    setLoading(true)

    async function fetchloadData() {
      try {
        const response = await fetch(url)
        const loadData = await response.json()

        setloadData(loadData)
      } catch (err) {
        console.log(err)

        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchloadData()
  }, [url])

  return { isLoading, loadData, error }
}

export default useFetch
