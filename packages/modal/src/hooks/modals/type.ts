import type { InputModalProps } from './components/InputModal'
import type { AlertProps } from './components/Alert'
// component and prop define
export type ComponentAndProps = {
  component: 'InputModal',
  Props: InputModalProps
} | {
  component: 'AlertModal',
  Props: AlertProps
}
// find Component name
export type ComponentName <T extends ComponentAndProps>  = T['component']

// 找到 component 的 props
export type Props<T extends ComponentAndProps, K> = T extends { component: K } ?  T['Props'] : never


// 判斷 A 有沒有 Props ，但是 A[Props] extends {} 會過不了，所以要繞過 Typescript，
// 如果 A 沒有 Props 那他就是 simple component
export type ExtractSimpleAction<A extends ComponentAndProps> = A extends any
  ? {} extends A['Props']
    ? A
    : never
  : never

// 把沒有 props 的 component 挑出來
export type SimpleType = ExtractSimpleAction<ComponentAndProps>

// 利用 exclude 就可以把有props的 component 抓出來
export type ComplexActionType = Exclude<ComponentAndProps, SimpleType>
