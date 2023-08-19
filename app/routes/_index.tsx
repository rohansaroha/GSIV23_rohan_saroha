import type { V2_MetaFunction } from '@remix-run/node'
import { Home } from '~/containers/Home'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Movies' }, { name: 'Hello', content: 'Welcome to IMDB!' }]
}

export default function Index() {
  return <Home />
}
