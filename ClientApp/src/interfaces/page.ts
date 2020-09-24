export interface Page {
  name: string,
  items: Item[]
}

export interface Item {
  id: number,
  x: number,
  y: number,
  type: ComponentType,
  settings: Setting,
  dragPosition?: {
    x: number,
    y: number
  }
}

export enum ComponentType {
  NavBarHorizontalComponent = 1
}

export interface Setting {
  [id: string]: { options?: any, value: any }
}



export class SettingTypes implements Setting {
  [id: string]: { options?: any, value: any };
  constructor(type: ComponentType) {
    switch (type) {
      case ComponentType.NavBarHorizontalComponent:
        this['title'] = { value: '' };
        this['titleLocation'] = { options: ['left', 'center'], value: 'left' };
        this['themeColor'] = { options: ['primary', 'accent', 'warn', undefined], value: '' };
      default:
        break;
    }

  }
}
