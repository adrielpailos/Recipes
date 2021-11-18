import React from "react"
import { Header } from "../components/header"
import { Main } from "../components/main"
import { Footer } from "../components/footer"
import GlobalStyle from "../components/global/globalstyles"

export default function Index() {
  return(
    <div>
      <GlobalStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}