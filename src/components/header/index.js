import React from "react"
import { graphql , useStaticQuery} from "gatsby"
import * as S from "./styles"

export function Header(){
  const data = useStaticQuery(graphql`
    query{
      recipedata {
        headers {
          btnabout
          btnrecipes
          btnsub
          logorc {
            url
          }
          titlerecipes
          backheader {
            url
          }
        }
      }
    }
  `)
  const {
    btnabout,
    btnrecipes,
    btnsub,
    logorc,
    titlerecipes,
    backheader
  } = data.recipedata.headers[0]

  return(
    <S.Container>
      <S.RecipesMenu back={backheader.url}>
        <S.NavBar>
          <span>
            <figure>
              <img src={logorc.url} alt="Recipes"/>
            </figure>
          </span>
          <ul>
            <button>{btnabout}</button>
            <button>{btnrecipes}</button>
            <button>{btnsub}</button>
          </ul>
        </S.NavBar>
        <div>
          <h1>{titlerecipes}</h1>
        </div>
      </S.RecipesMenu>
    </S.Container>
  )
}