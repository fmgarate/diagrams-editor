import { FC } from 'react'
import Head from 'next/head'

interface Props {
  title?: string
}

const Layout: FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title || 'Diagram Editor'}</title>
    </Head>
    <main>{children}</main>
  </>
)

export default Layout
