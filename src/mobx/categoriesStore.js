import { observable } from 'mobx'

let nextCategoryId = 0
let nextItemId = 0

class ObservableCategoriesStore {
  @observable categories = []

  changeText(text) {
    this.text = text
  }

  addCategory(category) {
    this.categories.push({
      id: nextCategoryId += 1,
      text: category,
      completed: false,
      items: [],
    })
  }

  deleteCategory(id) {
    this.categories = this.categories.filter(category => category.id !== id)
  }

  completeCategory(id) {
    this.categories.map(category =>
      (category.id !== id ? { ...category, completed: !category.completed } : category)
    )
  }

  addItem(categoryId, item) {
    this.categories.forEach((category) => {
      if (categoryId.id === categoryId) {
        category.items.push({
          id: nextItemId += 1,
          text: item,
          completed: false,
        })
      }
    })
  }

  deleteItem(categoryId, id) {
    this.categories.forEach((category) => {
      if (categoryId.id === categoryId) {
        const categoryItems = category.items

        categoryItems.filter(item => item.id !== id)
      }
    })
  }

  completeItem(categoryId, id) {
    this.categories.forEach((category) => {
      if (categoryId.id === categoryId) {
        const categoryItems = category.items

        categoryItems.map(item =>
          (item.id !== id ? { ...item, completed: !item.completed } : item)
        )
      }
    })
  }
}

export default new ObservableCategoriesStore()
