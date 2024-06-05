import colorsTailwind from 'tailwindcss/colors'
import { DefaultColors } from 'tailwindcss/types/generated/colors'

type TColorsConfig = {
  'primary-blue': '#3748A0'
  'primary-blue-1': '#bac1c4'
  'primary-green': '#83b6b3'
  'primary-yellow': '#eedaad'
  danger: '#FF4343'
  success: '#17D641'
} & DefaultColors

export const colorsConfig: TColorsConfig = {
  ...colorsTailwind,
  'primary-blue': '#3748A0',
  'primary-blue-1': '#bac1c4',
  'primary-green': '#83b6b3',
  'primary-yellow': '#eedaad',
  danger: '#FF4343',
  success: '#17D641'
}

export const backgroudImageConfig = {}
