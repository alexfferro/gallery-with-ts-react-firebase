import { Photo } from "../types/Photo";
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 } from 'uuid'

export const getAll = async () => {
  const list: Photo[] = [];
  const imagesFolder = ref(storage, 'images')
  const photoList = await listAll(imagesFolder)

  for(const i in photoList.items) {
    const photoUrl = await getDownloadURL(photoList.items[i])
    list.push({
      name: photoList.items[i].name,
      url: photoUrl
    })
  }

  return list;
}

export const insert = async (file: File) => {
  if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){
    const randomName = v4()
    const newFile = ref(storage, `images/${randomName}`)
    const upload = await uploadBytes(newFile, file)
    const photoUrl = await getDownloadURL(upload.ref)
    return {
      name: upload.ref.name,
      url: photoUrl
    } as Photo

  } else {
    return new Error('Tipo de arquivo não permitido')
  }
}

export const deleteImage = async (file: Photo) => {
  
  const deletedFile = ref(storage, `images/${file.name}`)
  deleteObject(deletedFile).then(() => {
    console.log('Imagem apagada')
  }).catch((err) => {
    console.error(err)
  })
}