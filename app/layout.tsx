import { Figtree } from 'next/font/google'

import { getSongsByUserId, getActiveProductsWithPrices } from '@/actions'
import Sidebar from '@/components/Sidebar'
import ToasterProvider from '@/providers/ToasterProvider'
import UserProvider from '@/providers/UserProvider'
import ModalProvider from '@/providers/ModalProvider'
import SupabaseProvider from '@/providers/SupabaseProvider'
import Player from '@/components/Player'

import './globals.css'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Service App',
  description: 'Music Service App',
}

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const products = await getActiveProductsWithPrices();
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>
              {children}
            </Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  )
}
