export interface MenuItem {
  label: string
  icon?: any // SVG component
  path?: string
  hasSubmenu: boolean
  submenuItems?: MenuItem[]
}