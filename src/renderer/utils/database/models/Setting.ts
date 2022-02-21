import { SetStores } from '../decorator'

@SetStores('id, view, windows, play, theme, language, shortcut, search, player, downlaoder, exclude, proxy, password')
export class Setting {
  readonly id?:number
  readonly view?:string
  readonly windows?:boolean
  readonly play?:{[key:string]:any}
  readonly theme?:'dark'|'light'
  readonly language?:'en'|'cn'
  readonly shortcut?:{[key:string]:any}
  readonly search?:string
  readonly player?:string
  readonly downlaoder?:string
  readonly exclude?:{[key:string]:any}
  readonly proxy?:{[key:string]:any}
  readonly password?:{[key:string]:any}
}