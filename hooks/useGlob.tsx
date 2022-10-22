import { useContext } from "react"

import { StateContext } from "../State"

const useGlob = () => {
  return useContext(StateContext)
}

export default useGlob
