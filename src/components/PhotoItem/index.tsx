import * as C from './styles'

type Props = {
  url: string;
  name: string;
  handleDeletePhoto: () => void
}


export const PhotoItem = ({url, name, handleDeletePhoto}: Props) => {
  return (
    <C.Container>
      <img src={url} alt={name}/>
      {name}
      <input type="button" value="Excluir" onClick={handleDeletePhoto}/>
    </C.Container>
  )
}