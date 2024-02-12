import getMenuBySlug from '@/lib/queries/getMenuBySlug'
import Link from 'next/link'
import config from '@/lib/config'
import logo from '@/public/frankw.png'
import Image from 'next/image'

/**
 * Header component.
 */
export default async function Header() {
  const menu = await getMenuBySlug('header')

  return (
    <header>
      <div>
        <h1 className='hidden'>{config.siteName}</h1>
        <Link href={config.siteUrl}>
          <Image alt="Frank logo" width={127} src={logo} title={config.siteDescription} />
        </Link>
      </div>
      <nav className="flex justify-between gap-4">
        {!!menu &&
          menu.menuItems.edges.map((item) => (
            <Link key={item.node.databaseId} href={item.node.uri}>
              {item.node.label}
            </Link>
          ))}
      </nav>
    </header>
  )
}
