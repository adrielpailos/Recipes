import React from "react"
import GlobalStyle from "../components/global/globalstyles"
import { Header } from "../components/header"
import { Main } from "../components/main"

export default function Index() {
  return(
    <div>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </div>
  )
}