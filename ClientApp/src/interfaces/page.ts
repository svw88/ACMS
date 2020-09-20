export interface Page {
  name: string,
  items: Item[]
}

export interface Item {
  id: number,
  x: number,
  y: number,
  type: 'NavBarComponent',
  settings: { [id: string]: string },
  dragPosition?: {
    x: number,
    y: number
  }
}
