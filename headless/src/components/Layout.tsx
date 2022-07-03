import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
  colors: string
}

export const Layout: FC<Props> = ({ children, colors }) => {
  return (
    <main>
      <div
        className={`relative w-96 h-96 mx-auto my-8 flex flex-col items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r ${colors}`}
      >
        {children}
      </div>
    </main>
  )
}
