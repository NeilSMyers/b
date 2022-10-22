import { useContext } from "react"

import { ThemeContext } from "../Theme"

const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  return themeContext
}

export default useTheme
