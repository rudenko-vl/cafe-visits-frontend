import styled from "@emotion/styled";

export const Wrapper = styled.div`
display: flex;
padding: 30px;
margin: 0 auto;
`

export const DelBtn = styled.span`
cursor: pointer;
margin-right: 20px;
>svg {
    color: white;
    &:hover {
        color: #fce83b;}
        
}
`
export const UpdBtn = styled(DelBtn)`
margin: 0;
`
export const Box = styled.div`
border: 2px solid white;
border-radius: 8px;
`
export const PlacesList = styled.ul`
list-style: none;
padding: 10px;
min-width: 400px;
`

export const OwnersList = styled(PlacesList)`
/* margin-right: 40px; */
`

export const Item = styled.li`
display: flex;
border-bottom: 2px solid white;
font-size: 16px;
font-weight: 600;
`

export const Title = styled.h2`
color: white;
text-align: center;
`
export const AddBtn = styled.span`
margin-left: 20px;
cursor: pointer;
>svg {
    color: white;
}
`