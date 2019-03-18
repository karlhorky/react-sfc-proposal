import { Webpack } from './typesFromTSLoader'
// export interface ParseOptions {
//   source: string
//   filename?: string
//   compiler: VueTemplateCompiler
//   compilerParseOptions?: VueTemplateCompilerParseOptions
//   sourceRoot?: string
//   needMap?: boolean
// }

export type LoaderContextType = Webpack
// = {
//   callback: Function
//   resourcePath: string
//   resourceQuery: string
//   emitError: Function
//   target: string
//   request: string
//   minimize: string
//   sourceMap: string
//   rootContext: string
// }
export type attrType = { start?: number; end?: number }
export type ASTAttr = {
  value: string
  name: 'lang' | 'scoped' | 'module' | 'src'
}
export type maybenum = number | null
export type parseHTMLOptions = {
  expectHTML?: boolean
  isUnaryTag?: (tagName: string) => boolean
  canBeLeftOpenTag?: (tagName: string) => boolean
  shouldKeepComment?: boolean
  comment?: Function
  chars?: Function
  warn?: Function
  start?: Function
  end?: Function
  pad?: true | 'line' | 'space'
  shouldDecodeNewlinesForHref?: boolean
  shouldDecodeNewlines?: boolean
  outputSourceRange?: boolean
  deindent?: boolean
}

export interface SFCCustomBlock {
  type: string
  content: string
  attrs: { [key: string]: string | true }
  start: number
  end?: number
  map?: Object // RawSourceMap
}

export interface SFCBlock extends SFCCustomBlock {
  lang?: string
  src?: string
  scoped?: boolean
  module?: string | boolean
}

export interface SFCDescriptor {
  script: SFCBlock | null
  styles: SFCBlock[]
  customBlocks: SFCCustomBlock[]
}
