import React from 'react'

export default (props) => {


  const { name, tagline, first_brewed, description, image_url, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level, volume, boil_volume, method, ingredients, food_pairing, brewers_tips, contributed_by  } = props.beer
  console.log(props.beer)
  return (
    <div>
      {name}
      {tagline}
    </div>
  )
}
