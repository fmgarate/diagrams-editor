import { FC } from 'react'
import Layout from '@/components/layout'
import { Editor } from '@/components/editor'

const Index: FC = () => (
  <Layout>
    <Editor source={process.env.NEXT_PUBLIC_EXAMPLE_CODE} />
  </Layout>
)

export default Index
