import React from "react"
import { graphql , useStaticQuery} from "gatsby"
import * as S from "./styles"

export function Footer(){
  const data = useStaticQuery(graphql`
    query{
      recipedata {
        footers {
          btnabout
          btnrecipes
          btnsubscribe
          copyright
          faceimg {
            url
          }
          pinterestimg {
            url
          }
          instaimg {
            url
          }
          twitterimg {
            url
          }
        }
      }
    }
  `)
  const {
    btnabout,
    btnrecipes,
    btnsubscribe,
    copyright,
    faceimg,
    pinterestimg,
    instaimg,
    twitterimg
  } = data.recipedata.footers[0]

  return(
    <S.Container>
      <nav>
        <div>
          <figure>
            <img src={instaimg.url} alt="icon"/>
          </figure>
          <figure>
            <img src={twitterimg.url} alt="icon"/>
          </figure>
          <figure>
            <img src={faceimg.url} alt="icon"/>
          </figure>
          <figure>
            <img src={pinterestimg.url} alt="icon"/>
          </figure>
        </div>
        <ul>
          <button>{btnabout}</button>
          <button>{btnrecipes}</button>
          <button>{btnsubscribe}</button>
        </ul>
      </nav>
      <S.CopyR>
        <p>{copyright}</p>
      </S.CopyR>
    </S.Container>
  )
}