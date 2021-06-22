import styled from 'styled-components';

export function Typography({ text, variant }) {

  if (variant === "h1") {
    return (
      <StyledH1>{text}</StyledH1>
    )
  } else if (variant === "h2") {
    return (
      <StyledH2>{text}</StyledH2>
    )
  }
  return <div>{text}</div>
}

const StyledH1 = styled.h1`

`

const StyledH2 = styled.h2`

`