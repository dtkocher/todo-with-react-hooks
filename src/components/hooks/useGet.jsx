import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const useGet = (url, params = {}) => {
  const [data, setData] = useState()
  const [errors, setErrors] = useState()

  useEffect(() => {
    axios({ method: 'get', url, params }).
      then(response => setData(response.data)).
      catch(errors => setErrors(errors))
  }, [])

  return {data, errors}
}
