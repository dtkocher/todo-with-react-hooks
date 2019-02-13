import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const useGet = ({url, params = {}, trigger, callbackFn=()=>{}}) => {
  const [data, setData] = useState()
  const [errors, setErrors] = useState()

  useEffect(() => {
    if(trigger === undefined) return;

    axios({ method: 'get', url, params }).
      then(response => {
        setData(response.data)
        callbackFn()
      }).
      catch(errors => setErrors(errors))
  }, [trigger])

  return {data, errors}
}
