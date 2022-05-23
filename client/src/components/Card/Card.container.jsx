import propTypes from 'prop-types'
import currency from 'currency.js'

import { Stars } from '@/components/Stars'
import { LikeButton } from '@/components/Buttons/LikeButton'

import * as Styled from './Card.styles'

export function Card({ image, title, price, liked, stars }) {
  const formattedPrice = currency(price, {
    symbol: 'R$',
    decimal: ',',
    formatWithSymbol: true,
    separator: '.',
    precision: 2,
  }).format()

  return (
    <Styled.Container>
      <Styled.ImageWrapper>
        <Styled.Image src={image} alt={title} loading="lazy" />
      </Styled.ImageWrapper>
      <Styled.StarsWrapper>
        <Stars rate={stars} />
      </Styled.StarsWrapper>
      <Styled.ContentWrapper>
        <Styled.Title>{title}</Styled.Title>
      </Styled.ContentWrapper>
      <Styled.PriceWrapper>
        <Styled.Price>{formattedPrice}</Styled.Price>
        <Styled.LikeWrapper>
          <LikeButton isLiked={liked} />
        </Styled.LikeWrapper>
      </Styled.PriceWrapper>
    </Styled.Container>
  )
}

Card.propTypes = {
  image: propTypes.string,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  liked: propTypes.bool.isRequired,
  stars: propTypes.number.isRequired,
}
