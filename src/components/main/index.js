import React from "react"
import { graphql , useStaticQuery} from "gatsby"
import * as S from "./styles"

export function Main(){
  const data = useStaticQuery(graphql`
    query{
      recipedata {
        mains {
          aboutparagraph
          aboutsubtitle
          btnsubmit
          cakesubtitle
          peanutsubtitle
          pizzasubtitle
          subscribesubtitle
          subtitldescript
          titlelastest
          pizzaimg {
            url
          }
          peanutimg {
            url
          }
          backmain {
            url
          }
          redcakeimg {
            url
          }
        }
      }
    }
  `)
  const {
    aboutparagraph,
    aboutsubtitle,
    btnsubmit,
    cakesubtitle,
    pizzasubtitle,
    peanutsubtitle,
    subscribesubtitle,
    subtitldescript,
    titlelastest,
    pizzaimg,
    backmain,
    redcakeimg,
    peanutimg
  } = data.recipedata.mains[0]

  return(
    <S.Container>
      <S.LatestRC>
        <span>
          <h2>{titlelastest}</h2>
        </span>
        <nav>
          <ul>
            <div>
              <figure>
                <img src={redcakeimg.url} alt="A red cake"/>
              </figure>
              <span>
                <h3>{cakesubtitle}</h3>
              </span>
            </div>
            <div>
              <figure>
                <img src={pizzaimg.url} alt="A pizza"/>
              </figure>
              <span>
                <h3>{pizzasubtitle}</h3>
              </span>
            </div>
            <div>
              <figure>
                <img src={peanutimg.url} alt="A peanut"/>
              </figure>
              <span>
                <h3>{peanutsubtitle}</h3>
              </span>
            </div>
          </ul>
        </nav>
      </S.LatestRC>
    </S.Container>
  )
}