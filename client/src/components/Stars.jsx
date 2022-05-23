import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StarBorder, Star } from '@mui/icons-material'

export function Stars({ rate: propsRate = 0, length = 5 }) {
  const [rate, setRate] = useState(propsRate)
  const [stars, setStars] = useState([])
  const [starsLength] = useState(length)

  function makeStars(rate = 0) {
    const filledStars = new Array(rate).fill(<Star color="primary" />)
    const emptyStars = new Array(starsLength - rate).fill(
      <StarBorder color="primary" />
    )

    const stars = [...filledStars, ...emptyStars]

    return stars
  }

  function handleSetRate(index) {
    setRate(index + 1)
  }

  useEffect(() => {
    const stars = makeStars(rate)
    setStars(stars)
  }, [rate])

  return (
    <Container>
      {stars.map((star, index) => (
        <StarBox
          key={index}
          onClick={() => handleSetRate(index)}
          data-testid={`star-box-${index}`}
        >
          {star}
        </StarBox>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`

const StarBox = styled.div`
  cursor: pointer;
`
