import { useState } from 'react'
import propTypes from 'prop-types'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { If } from '@/components/If'

export function LikeButton({ isLiked = false }) {
  const [liked, setLiked] = useState(isLiked)

  function toggleLike() {
    setLiked(!liked)
  }

  return (
    <IconButton onClick={toggleLike} variant="outlined">
      <If condition={liked} elseComponent={<FavoriteBorder />}>
        <Favorite color="error" />
      </If>
    </IconButton>
  )
}

LikeButton.propTypes = {
  isLiked: propTypes.bool,
}
