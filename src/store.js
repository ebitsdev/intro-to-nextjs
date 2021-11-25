import { makeObservable, observable, computed } from 'mobx'

class Store {
  photo = []
  filter = ''
  selectedPhoto = null

  constructor() {
    makeObservable(this, {
      photo: observable,
      filter: observable,
      selectedPhoto: observable,
      filteredPhoto: computed,
    })
  }
  get filteredPhoto() {
    return this.photo.filter((photo) => {
      return photo.author.toLowerCase().includes(this.filter.toLowerCase())
    })
  }

  setPhoto(photo) {
    this.photo = photo
  }

  setFilter(filter) {
    this.filter = filter
  }

  setSelectedPhoto(selectedPhoto) {
    this.selectedPhoto = selectedPhoto
  }
}

const store = new Store()
// if(typeof window !== 'undefined') {
// fetch('https://picsum.photos/v2/list')
//   .then((response) => response.json())
//   .then((photo) => store.setPhoto(photo))
//   .catch((error) => console.log(error))
// }
export default store
